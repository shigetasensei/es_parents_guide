/* ES Tech Talk@CA — vanilla JS, no dependencies. */
(() => {
'use strict';

const D = window.DATA;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- tiny DOM helper ---------- */
function h(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k === 'html') e.innerHTML = v;
    else if (k === 'text') e.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
    else e.setAttribute(k, v === true ? '' : v);
  }
  kids.flat(Infinity).forEach(c => { if (c != null && c !== false) e.append(c.nodeType ? c : document.createTextNode(c)); });
  return e;
}
const clear = el => { while (el.firstChild) el.removeChild(el.firstChild); return el; };
const shuffle = arr => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = rand(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function rand(n) {
  try { const b = new Uint32Array(1); crypto.getRandomValues(b); return b[0] % n; }
  catch (e) { return Math.floor(Math.random() * n); }
}
const AGE_LABEL = { '3-5': 'Ages 3–5', '6-7': 'Ages 6–7', '8-9': 'Ages 8–9', '10-11': 'Ages 10–11' };

/* ---------- state (localStorage with safe fallback) ---------- */
const KEY = 'familyTechTrail.v1'; // key kept so existing visitors keep their saved data
let S = { age: '8-9', stamps: {}, myths: {}, aiRules: {}, setup: {}, plan: null, day: null, dayEY: null, eySetup: {}, gSetup: {}, favs: [], checkin: null, priv: {} };
try { Object.assign(S, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { /* private mode */ }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } };

/* ---------- toast + stamps ---------- */
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}
function stampCount() { return D.stamps.filter(s => S.stamps[s.id]).length; }
function updatePassport() {
  $('#passportCount').textContent = `${stampCount()}/${D.stamps.length}`;
  const grid = clear($('#passportGrid'));
  D.stamps.forEach(s => grid.append(
    h('div', { class: 'stamp' + (S.stamps[s.id] ? ' got' : '') },
      h('span', { class: 'stamp-ico', 'aria-hidden': 'true' }, s.icon),
      h('span', { class: 'stamp-lbl' }, s.label),
      h('span', { class: 'sr-only' }, S.stamps[s.id] ? ' (earned)' : ' (not yet)'))));
}
function award(id) {
  if (S.stamps[id]) return;
  S.stamps[id] = true; save(); updatePassport();
  const st = D.stamps.find(s => s.id === id);
  toast(stampCount() === D.stamps.length ? '🎉 All stamps collected — ES Tech Talk champion!' : `${st.icon} New stamp: ${st.label}!`);
}

/* ---------- routing ---------- */
const VIEWS = ['home', 'early', 'ai', 'balance', 'safety', 'gaming', 'japan', 'toolkit', 'sources'];
let firstRoute = true;
function route() {
  let id = location.hash.slice(1), target = null;
  if (!VIEWS.includes(id)) {
    // a link to something inside a view (for example #caway or #g-s2)
    const el = id ? document.getElementById(id) : null, v = el && el.closest('.view');
    if (v) { target = el; id = v.id.replace('view-', ''); } else id = 'home';
  }
  VIEWS.forEach(v => { $('#view-' + v).hidden = v !== id; });
  const navId = id === 'early' ? 'home' : id;   // the Ages 3–5 guide lives under Home
  $$('[data-nav]').forEach(a => { if (a.dataset.nav === navId) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  if (id === 'toolkit') renderToolkit();
  const active = $('[data-nav="' + navId + '"]');
  if (active && active.scrollIntoView) active.scrollIntoView({ inline: 'center', block: 'nearest' });
  if (target) {
    target.scrollIntoView({ block: 'start' });
  } else if (!firstRoute) {
    window.scrollTo(0, 0);
    const h1 = $('#view-' + id + ' h1'); if (h1) h1.focus({ preventScroll: true });
  }
  firstRoute = false;
}
window.addEventListener('hashchange', route);

/* ---------- age lens ---------- */
function ageToggle() {
  const g = h('div', { class: 'age age-inline', role: 'group', 'aria-label': "My child's age group" }, h('span', { class: 'age-label' }, 'Child age'));
  [['3-5', '3–5'], ['6-7', '6–7'], ['8-9', '8–9'], ['10-11', '10–11']].forEach(([v, l]) => g.append(h('button', { type: 'button', 'data-age': v, 'aria-pressed': 'false' }, l)));
  return g;
}
function renderAge() {
  $$('.agetips').forEach(box => { if (!box.previousElementSibling || !box.previousElementSibling.classList.contains('age-inline')) box.before(ageToggle()); });
  $$('[data-age]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.age === S.age)));
  $$('[data-age-chip]').forEach(c => { c.textContent = AGE_LABEL[S.age]; });
  $$('.agetips').forEach(box => {
    const tips = D.ageTips[box.dataset.topic][S.age];
    clear(box).append(...[h('ul', { class: 'tips' }, tips.map(t => h('li', { html: t }))),
      S.age === '3-5' ? h('p', { class: 'early-callout' }, '🌱 ', h('a', { href: '#early' }, 'Open the full Ages 3–5 guide'), ' — daily picture, preschool day designer, screen-choice game, calm-down ideas and a safe-use checklist.') : null].filter(Boolean));
  });
}

/* ---------- form helpers ---------- */
function pills(name, options, value) {
  // radio-pill group; returns {el, get}
  const wrap = h('div', { class: 'pills', role: 'radiogroup' });
  options.forEach(([val, label]) => {
    const id = `${name}-${val}`;
    wrap.append(h('span', { class: 'pill' },
      h('input', { type: 'radio', name, id, value: val, checked: value === val }),
      h('label', { for: id }, label)));
  });
  return { el: wrap, get: () => { const c = $('input:checked', wrap); return c ? c.value : null; } };
}
const bar = (pct, cls = '') => h('div', { class: 'meter ' + cls, role: 'presentation' }, h('span', { style: { width: Math.max(0, Math.min(100, pct)) + '%' } }));

/* ---------- Home: check-in ---------- */
function initCheckin() {
  const m = $('#checkinMount');
  const form = h('form', { class: 'checkin', novalidate: true });
  const groups = D.checkin.map((it, i) => {
    const g = pills('ci' + i, [['0', 'Not yet'], ['1', 'Sometimes'], ['2', 'Yes']], S.checkin && S.checkin.answers ? String(S.checkin.answers[i]) : null);
    form.append(h('fieldset', { class: 'q' }, h('legend', {}, `${i + 1}. ${it.text}`), g.el));
    return g;
  });
  const msg = h('p', { class: 'form-msg', role: 'alert' });
  const out = h('div', { class: 'results', 'aria-live': 'polite' });
  form.append(h('div', { class: 'row' }, h('button', { class: 'btn primary', type: 'submit' }, 'See my results'), msg));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const ans = groups.map(g => g.get());
    if (ans.some(a => a == null)) { msg.textContent = 'Please answer all six — it only takes a moment.'; return; }
    msg.textContent = '';
    const answers = ans.map(Number);
    S.checkin = { answers }; save();
    showCheckin(out, answers);
    award('checkin');
  });
  m.append(form, out);
  if (S.checkin && S.checkin.answers) showCheckin(out, S.checkin.answers);
}
function showCheckin(out, answers) {
  clear(out);
  const topics = ['ai', 'balance', 'safety'];
  const links = { ai: '#ai', balance: '#balance', safety: '#safety' };
  const scores = topics.map(t => ({ t, s: D.checkin.reduce((a, it, i) => a + (it.topic === t ? answers[i] : 0), 0) }));
  const lowest = scores.slice().sort((a, b) => a.s - b.s)[0].t;
  out.append(h('h3', {}, 'Your snapshot'));
  scores.forEach(({ t, s }) => {
    const adv = D.checkinAdvice[t];
    const level = s <= 1 ? 'low' : s <= 3 ? 'mid' : 'high';
    out.append(h('div', { class: 'result-card' },
      h('div', { class: 'rc-top' }, h('strong', {}, adv.title), h('span', { class: 'chip lvl-' + level }, level === 'low' ? 'Great place to start' : level === 'mid' ? 'Growing' : 'Strong')),
      bar((s / 4) * 100, 'm-' + t),
      h('p', {}, adv[level]),
      h('a', { href: links[t], class: 'link' }, 'Open this trail →')));
  });
  out.append(h('p', { class: 'tiny' }, `Suggested first stop: ${D.checkinAdvice[lowest].title}.`));
}

/* ---------- Home: myth cards ---------- */
function initMyths() {
  const m = $('#mythMount');
  D.myths.forEach((it, i) => {
    const back = h('div', { class: 'myth-back', id: 'myth-back-' + i, hidden: true },
      h('span', { class: 'badge ' + (it.verdict === 'Myth' ? 'bad' : 'good') }, it.verdict === 'Myth' ? '❌ Myth' : '✅ Fact'),
      h('p', {}, it.fact));
    const btn = h('button', { class: 'myth', type: 'button', 'aria-expanded': 'false', 'aria-controls': 'myth-back-' + i },
      h('span', { class: 'myth-front' }, it.myth), h('span', { class: 'myth-hint' }, 'Tap to reveal'));
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      back.hidden = open;
      btn.querySelector('.myth-hint').textContent = open ? 'Tap to reveal' : 'Tap to hide';
      if (!open) {
        S.myths[i] = true; save();
        if (D.myths.every((_, k) => S.myths[k])) award('myths');
      }
    });
    m.append(h('div', { class: 'myth-wrap' }, btn, back));
  });
}

/* ---------- generic quiz/game engine ---------- */
function initGame(mountSel, cfg) {
  const mount = $(mountSel);
  let items = [], i = 0, score = 0;
  const choiceLabel = id => cfg.choices.find(c => c.id === id).label;

  function start() { items = shuffle(cfg.items).slice(0, cfg.count); i = 0; score = 0; renderQ(); }

  function renderQ() {
    clear(mount);
    const it = items[i];
    const fb = h('div', { class: 'feedback', 'aria-live': 'polite' });
    const next = h('button', { class: 'btn primary', type: 'button', hidden: true }, i === items.length - 1 ? 'See results' : 'Next →');
    const buttons = cfg.choices.map(c => {
      const b = h('button', { class: 'choice', type: 'button', 'data-id': c.id }, c.label);
      b.addEventListener('click', () => {
        const ok = c.id === it.a;
        if (ok) score++;
        buttons.forEach(x => { x.disabled = true; if (x.dataset.id === it.a) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        fb.append(h('p', { class: 'fb-head ' + (ok ? 'ok' : 'no') }, ok ? '✅ Nice!' : `💡 Not quite — best answer: ${choiceLabel(it.a)}`), h('p', {}, it.why));
        next.hidden = false; next.focus();
      });
      return b;
    });
    next.addEventListener('click', () => { i++; if (i < items.length) renderQ(); else renderEnd(); });
    mount.append(
      h('div', { class: 'g-top' }, h('span', { class: 'chip' }, `Question ${i + 1} of ${items.length}`), h('span', { class: 'chip' }, `Score ${score}`)),
      bar(((i) / items.length) * 100),
      h('p', { class: 'g-q' }, it.q),
      h('div', { class: 'choices' }, buttons), fb, next);
    if (i > 0) mount.querySelector('.g-q').setAttribute('tabindex', '-1');
  }

  function renderEnd() {
    clear(mount);
    const pct = score / items.length;
    mount.append(
      h('div', { class: 'g-end' },
        h('p', { class: 'big' }, pct === 1 ? '🏆 Perfect!' : pct >= 0.6 ? '🌟 Nicely done!' : '🌱 Good practice!'),
        h('p', {}, `You scored ${score} out of ${items.length}.`),
        h('p', { class: 'wrap-up' }, cfg.wrapup),
        h('button', { class: 'btn', type: 'button', onClick: start }, '↻ Play again with new questions')));
    award(cfg.stamp);
  }
  start();
}

/* ---------- Family AI rules + generic checklist ---------- */
function checklist(mountSel, items, store, onChange) {
  const mount = $(mountSel);
  const prog = h('p', { class: 'progress-text' });
  const meter = bar(0);
  const list = h('ul', { class: 'checks' });
  function update() {
    const n = items.filter((_, i) => store[i]).length;
    prog.textContent = `${n} of ${items.length} selected`;
    meter.firstChild.style.width = (n / items.length * 100) + '%';
    if (onChange) onChange(n);
  }
  items.forEach((t, i) => {
    const id = mountSel.slice(1) + '-' + i;
    const cb = h('input', { type: 'checkbox', id, checked: !!store[i] });
    cb.addEventListener('change', () => { store[i] = cb.checked; save(); update(); });
    list.append(h('li', {}, cb, h('label', { for: id, html: t })));
  });
  mount.append(list, meter, prog);
  update();
}

/* ---------- Balance: day designer (elementary + early years) ---------- */
const DAY = [
  { id: 'sleep', label: '😴 Sleep', def: 10, color: 'var(--c1)' },
  { id: 'school', label: '🏫 School & travel', def: 7, color: 'var(--c2)' },
  { id: 'play', label: '🏃 Active play & outdoors', def: 1.5, color: 'var(--c3)' },
  { id: 'home', label: '📚 Homework & reading', def: 0.5, color: 'var(--c4)' },
  { id: 'family', label: '🍽️ Meals & family time', def: 2, color: 'var(--c5)' },
  { id: 'screens', label: '📺 Recreational screens', def: 1.5, color: 'var(--c6)' }
];
const DAY_EY = [
  { id: 'sleep', label: '😴 Sleep (incl. naps)', def: 11.5, color: 'var(--c1)' },
  { id: 'school', label: '🏫 Preschool / childcare & travel', def: 5, color: 'var(--c2)' },
  { id: 'play', label: '🏃 Active play & outdoors (all movement)', def: 3.5, color: 'var(--c3)' },
  { id: 'quiet', label: '📖 Reading & quiet play', def: 1, color: 'var(--c4)' },
  { id: 'family', label: '🍽️ Meals & family time', def: 2, color: 'var(--c5)' },
  { id: 'screens', label: '📺 Screens', def: 0.5, color: 'var(--c6)' }
];
const fmtH = x => { const hh = Math.floor(x + 1e-9), mm = Math.round((x - hh) * 60); return hh === 0 ? `${mm} m` : mm ? `${hh} h ${mm} m` : `${hh} h`; };

const DAY_SETS = {
  main: {
    cats: DAY, key: 'day', stamp: 'day', idp: 'day', note: 'Guidelines cited: Canadian 24-Hour Movement Guidelines (CSEP), WHO, AASM, Australian physical activity guidelines. Treat them as reference points.',
    feedback(v, add) {
      if (v.sleep < 9) add('warn', '<strong>Sleep:</strong> Canadian guidelines suggest 9–11 hours for ages 5–13, and the American Academy of Sleep Medicine suggests 9–12 hours for ages 6–12. Try an earlier bedtime and screens off about an hour before bed.');
      else add('good', '<strong>Sleep</strong> is within the recommended range.');
      if (v.play < 1) add('warn', '<strong>Movement:</strong> WHO and Canadian guidelines suggest about 60 minutes of moderate-to-vigorous activity a day. School recess and PE can count.');
      else add('good', '<strong>Active play</strong> time looks healthy (guidelines suggest about 60 minutes a day).');
      if (v.screens > 2) add('warn', '<strong>Screens:</strong> Canadian and Australian guidelines suggest about 2 hours of recreational screen time at most on a day. Ask what it is pushing out — sleep, play or people.');
      else add('good', '<strong>Recreational screens</strong> are at or under about 2 hours.');
      if (v.family < 1) add('warn', '<strong>Family time:</strong> Shared meals and talk are a protective habit. Can you carve out a bit more?');
    }
  },
  early: {
    cats: DAY_EY, key: 'dayEY', stamp: 'eyday', idp: 'dayey', note: 'Guidelines cited: WHO (2019) and Canadian 24-Hour Movement Guidelines for the Early Years (ages 3–4); AASM (2016) for sleep. Treat them as reference points.',
    feedback(v, add) {
      if (v.sleep < 10) add('warn', '<strong>Sleep:</strong> WHO, the Canadian early-years guidelines and the American Academy of Sleep Medicine suggest 10–13 hours (naps included) for ages 3–5. Protect naps and bedtime, and turn screens off about an hour before bed.');
      else add('good', '<strong>Sleep</strong> is within the recommended 10–13 hours.');
      if (v.play < 3) add('warn', '<strong>Movement:</strong> WHO and Canada suggest at least 3 hours of physical activity of any intensity spread across the day, including about 1 hour of energetic play. Walking, climbing, dancing and playground time all count.');
      else add('good', '<strong>Active play</strong> reaches the suggested 3 hours of movement a day.');
      if (v.screens > 1) add('warn', '<strong>Screens:</strong> WHO and Canada suggest no more than 1 hour of sitting screen time a day for ages 3–4, and less is better. The AAP\'s earlier guidance for ages 2–5 was about 1 hour of high-quality programming.');
      else add('good', '<strong>Screens</strong> are at or under 1 hour.');
      if (v.quiet < 0.5) add('info', '<strong>Quiet time:</strong> Reading, storytelling, singing and puzzles with a caregiver count as high-quality sitting time and are very good for development.');
    }
  }
};

function initDay(mountSel, set) {
  const mount = $(mountSel);
  const cats = set.cats;
  const saved = S[set.key];
  const vals = {}; cats.forEach(d => { vals[d.id] = (saved && saved[d.id] != null) ? saved[d.id] : d.def; });
  const barEl = h('div', { class: 'daybar', role: 'img' });
  const fb = h('ul', { class: 'fb-list', 'aria-live': 'polite' });
  const sum = () => cats.reduce((a, d) => a + vals[d.id], 0);

  const rows = cats.map(d => {
    const id = `${set.idp}-${d.id}`;
    const out = h('output', { for: id }, fmtH(vals[d.id]));
    const r = h('input', { type: 'range', id, min: 0, max: 14, step: 0.25, value: vals[d.id] });
    r.addEventListener('input', () => {
      const others = sum() - vals[d.id];
      const v = Math.min(parseFloat(r.value), 24 - others);
      vals[d.id] = v; r.value = v; out.textContent = fmtH(v); render();
    });
    return h('div', { class: 'slider-row' },
      h('label', { for: id }, h('span', { class: 'dot', style: { background: d.color } }), d.label), r, out);
  });

  function render() {
    clear(barEl);
    const left = 24 - sum();
    cats.forEach(d => barEl.append(h('span', { class: 'seg', style: { width: (vals[d.id] / 24 * 100) + '%', background: d.color }, title: `${d.label}: ${fmtH(vals[d.id])}` })));
    barEl.append(h('span', { class: 'seg rest', style: { width: (left / 24 * 100) + '%' }, title: `Everything else: ${fmtH(left)}` }));
    barEl.setAttribute('aria-label', 'A 24-hour day. ' + cats.map(d => `${d.label.replace(/^\S+\s/, '')} ${fmtH(vals[d.id])}`).join(', ') + `, everything else ${fmtH(left)}.`);
    clear(fb);
    const add = (cls, t) => fb.append(h('li', { class: cls, html: t }));
    add('info', `<strong>Everything else:</strong> ${fmtH(left)} (getting ready, chores, free time).`);
    set.feedback(vals, add);
    if (left < 1) add('warn', '<strong>Downtime:</strong> The day looks packed. Kids also need unstructured time to rest and play.');
    const free = 24 - vals.sleep - vals.school;
    if (free > 0) add('info', `Of the <strong>${fmtH(free)}</strong> awake and not at school or childcare, about <strong>${Math.round(vals.screens / free * 100)}%</strong> goes to screens.`);
  }
  const saveBtn = h('button', { class: 'btn primary', type: 'button', onClick: () => { S[set.key] = { ...vals }; save(); award(set.stamp); toast('Snapshot saved to your Toolkit.'); } }, 'Save snapshot to my toolkit');
  mount.append(h('div', { class: 'sliders' }, rows), barEl, fb, h('div', { class: 'row' }, saveBtn, h('p', { class: 'tiny' }, set.note)));
  render();
}

/* ---------- Balance: quality check (5 Cs) ---------- */
function initQuality() {
  const mount = $('#qualityCheck');
  const name = h('input', { type: 'text', id: 'qName', maxlength: 60, placeholder: 'e.g. Minecraft, YouTube, a learning app…', autocomplete: 'off' });
  const form = h('form', { novalidate: true }, h('div', { class: 'field' }, h('label', { for: 'qName' }, 'What activity are you thinking about?'), name));
  const groups = D.quality.map((it, i) => {
    const g = pills('qc' + i, [['2', 'Yes'], ['1', 'Sometimes'], ['0', 'Not yet']]);
    form.append(h('fieldset', { class: 'q' }, h('legend', {}, h('strong', {}, it.c + ': '), it.q), g.el));
    return g;
  });
  const msg = h('p', { class: 'form-msg', role: 'alert' });
  const out = h('div', { class: 'results', 'aria-live': 'polite' });
  form.append(h('div', { class: 'row' }, h('button', { class: 'btn primary', type: 'submit' }, 'Check it'), msg));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const ans = groups.map(g => g.get());
    if (ans.some(a => a == null)) { msg.textContent = 'Please answer all five.'; return; }
    msg.textContent = '';
    const total = ans.reduce((a, b) => a + Number(b), 0);
    clear(out);
    const title = name.value.trim() ? `Results for “${name.value.trim()}”` : 'Results';
    out.append(h('h3', {}, title),
      h('p', {}, total >= 9 ? '🌟 This looks like a healthy fit right now.' : total >= 6 ? '🙂 Mostly good — a couple of things to tune.' : '🌱 Worth a closer look. Pick one small change.'),
      bar(total / 10 * 100, 'm-balance'));
    const todo = D.quality.filter((_, i) => Number(ans[i]) < 2);
    if (todo.length) out.append(h('ul', { class: 'fb-list' }, todo.map(t => h('li', { class: 'warn' }, h('strong', {}, t.c + ': '), t.tip))));
    else out.append(h('p', {}, 'All five look strong. Keep checking in as your child grows.'));
    award('quality');
  });
  mount.append(form, out);
}

/* ---------- Balance: media plan builder ---------- */
const PLAN_DEFAULT = {
  name: '', weekday: '1 hour', weekend: '2 hours',
  times: ['Meals', 'Homework time'], zones: ['Bedrooms overnight'], off: '60', charge: 'the kitchen',
  pledges: ['Grown-ups follow the screen-free times too', 'We ask before downloading or buying anything', 'We tell a grown-up if something online feels wrong, and nobody gets in trouble for telling']
};
const PLAN_OPTS = {
  weekday: ['No set limit — we use the 5 Cs', '30 minutes', '1 hour', '1.5 hours', '2 hours'],
  weekend: ['No set limit — we use the 5 Cs', '1 hour', '2 hours', '3 hours'],
  times: ['Meals', 'Homework time', 'Car rides (short trips)', 'Family time / game night', 'Before school in the morning'],
  zones: ['Bedrooms overnight', 'Bathroom', 'Dinner table'],
  pledges: ['Grown-ups follow the screen-free times too', 'We ask before downloading or buying anything', 'We tell a grown-up if something online feels wrong, and nobody gets in trouble for telling', 'We sometimes play or watch together', 'We check this plan again in 3 months']
};
function reviewDate() { const d = new Date(); d.setMonth(d.getMonth() + 3); return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }); }
function planCard(p) {
  const ul = arr => arr.length ? h('ul', {}, arr.map(x => h('li', {}, x))) : h('p', { class: 'tiny' }, 'None chosen');
  return h('article', { class: 'plan-card' },
    h('h3', {}, `${p.name.trim() || 'Our'} Family Media Plan`),
    h('dl', {},
      h('dt', {}, 'School days'), h('dd', {}, p.weekday),
      h('dt', {}, 'Weekends'), h('dd', {}, p.weekend),
      h('dt', {}, 'Screens off before bed'), h('dd', {}, `${p.off} minutes`),
      h('dt', {}, 'Devices sleep in'), h('dd', {}, p.charge.trim() || 'a shared space')),
    h('h4', {}, 'Screen-free times'), ul(p.times),
    h('h4', {}, 'Screen-free zones'), ul(p.zones),
    h('h4', {}, 'Our promises'), ul(p.pledges),
    h('p', { class: 'tiny' }, `Review together by ${reviewDate()}. Based on the AAP Family Media Plan approach.`));
}
function initPlan() {
  const mount = $('#planBuilder');
  const P = Object.assign({}, PLAN_DEFAULT, S.plan || {});
  const preview = h('div', { class: 'plan-preview' });
  const upd = () => { S.plan = P; save(); clear(preview).append(planCard(P)); };

  const sel = (key, id, label) => h('div', { class: 'field' }, h('label', { for: id }, label),
    h('select', { id, onChange: e => { P[key] = e.target.value; upd(); } },
      PLAN_OPTS[key].map(o => h('option', { value: o, selected: P[key] === o }, o))));
  const checks = (key, legend) => h('fieldset', { class: 'field' }, h('legend', {}, legend),
    PLAN_OPTS[key].map((o, i) => {
      const id = `pl-${key}-${i}`;
      return h('div', { class: 'cb' }, h('input', { type: 'checkbox', id, checked: P[key].includes(o), onChange: e => {
        P[key] = e.target.checked ? [...P[key], o] : P[key].filter(x => x !== o); upd(); } }), h('label', { for: id }, o));
    }));

  const offSel = h('div', { class: 'field' }, h('label', { for: 'pl-off' }, 'Screens off before bedtime'),
    h('select', { id: 'pl-off', onChange: e => { P.off = e.target.value; upd(); } },
      [['30', '30 minutes before'], ['60', '1 hour before'], ['90', '90 minutes before']].map(([v, l]) => h('option', { value: v, selected: P.off === v }, l))));
  const form = h('form', { class: 'plan-form', onSubmit: e => e.preventDefault() },
    h('div', { class: 'field' }, h('label', { for: 'pl-name' }, 'Family name (optional)'),
      h('input', { type: 'text', id: 'pl-name', maxlength: 40, value: P.name, autocomplete: 'off', onInput: e => { P.name = e.target.value; upd(); } })),
    sel('weekday', 'pl-wd', 'Recreational screen time on school days'),
    sel('weekend', 'pl-we', 'Recreational screen time on weekends'),
    offSel,
    h('div', { class: 'field' }, h('label', { for: 'pl-charge' }, 'Devices charge overnight in…'),
      h('input', { type: 'text', id: 'pl-charge', maxlength: 40, value: P.charge, autocomplete: 'off', onInput: e => { P.charge = e.target.value; upd(); } })),
    checks('times', 'Screen-free times'), checks('zones', 'Screen-free zones'), checks('pledges', 'Our promises'));
  const actions = h('div', { class: 'row' },
    h('button', { class: 'btn primary', type: 'button', onClick: () => { upd(); award('plan'); toast('Plan saved to your Toolkit.'); } }, 'Save plan'),
    h('button', { class: 'btn', type: 'button', onClick: () => {
      upd(); document.body.classList.add('printing-plan');
      window.addEventListener('afterprint', () => document.body.classList.remove('printing-plan'), { once: true });
      window.print(); } }, '🖨️ Print'));
  mount.closest('.panel').classList.add('has-plan');
  mount.append(h('div', { class: 'two-col plan-grid' }, form, h('div', {}, preview, actions)));
  upd();
}

/* ---------- Balance: transitions + wheel ---------- */
function initTransitions() {
  const m = $('#transitions');
  m.append(h('div', { class: 'acc' }, D.transitions.map((t, i) =>
    h('details', { open: i === 0 }, h('summary', {}, t.title), h('ol', {}, t.steps.map(s => h('li', {}, s)))))));
}
function initWheel(mountSel, getPool) {
  const m = $(mountSel);
  const out = h('div', { class: 'wheel-out', 'aria-live': 'polite' }, 'Press spin! 🎡');
  const btn = h('button', { class: 'btn primary', type: 'button' }, 'Spin');
  btn.addEventListener('click', () => {
    const pool = getPool();
    const pick = () => pool[rand(pool.length)];
    btn.disabled = true;
    if (reduceMotion) { out.textContent = pick(); btn.disabled = false; btn.textContent = 'Spin again'; return; }
    let n = 0;
    const tick = setInterval(() => {
      out.textContent = pick(); out.classList.add('spin');
      if (++n >= 12) { clearInterval(tick); out.classList.remove('spin'); btn.disabled = false; btn.textContent = 'Spin again'; }
    }, 90);
  });
  m.append(out, btn);
}

/* ---------- Early years: "instead of the screen" helper ---------- */
function initCalm() {
  const m = $('#calmHelper');
  const detail = h('div', { class: 'calm-detail', 'aria-live': 'polite' });
  const btns = D.eyCalm.map(it => {
    const b = h('button', { class: 'calm-btn', type: 'button', 'aria-pressed': 'false' }, h('span', { 'aria-hidden': 'true' }, it.ico), ' ', it.label);
    b.addEventListener('click', () => {
      btns.forEach(x => x.setAttribute('aria-pressed', 'false')); b.setAttribute('aria-pressed', 'true');
      clear(detail).append(h('h3', {}, it.label), h('ul', {}, it.ideas.map(i => h('li', {}, i))),
        h('p', { class: 'tiny' }, 'Be kind to yourself: a screen now and then is a normal part of family life.'));
      award('eycalm');
    });
    return b;
  });
  m.append(h('div', { class: 'calm-grid' }, btns), detail);
}

/* ---------- Conversation starters ---------- */
function initStarters() {
  $$('.starter').forEach(box => {
    const topic = box.dataset.topic;
    const list = topic === 'early' ? D.eyStarters : D.starters[topic];
    let idx = rand(list.length);
    const q = h('p', { class: 'starter-q', 'aria-live': 'polite' });
    const star = h('button', { class: 'btn', type: 'button', 'aria-pressed': 'false' }, '☆ Save');
    const refresh = () => {
      q.textContent = list[idx];
      const saved = S.favs.some(f => f.t === list[idx]);
      star.setAttribute('aria-pressed', String(saved)); star.textContent = saved ? '★ Saved' : '☆ Save';
    };
    star.addEventListener('click', () => {
      const t = list[idx];
      S.favs = S.favs.some(f => f.t === t) ? S.favs.filter(f => f.t !== t) : [...S.favs, { topic, t }];
      save(); refresh();
    });
    box.append(h('blockquote', {}, q), h('div', { class: 'row' },
      h('button', { class: 'btn primary', type: 'button', onClick: () => { let n; do { n = rand(list.length); } while (n === idx && list.length > 1); idx = n; refresh(); } }, '🎲 Another one'), star));
    refresh();
  });
}

/* ---------- Safety: privacy lab ---------- */
function privDone(k) { S.priv[k] = true; save(); if (S.priv.pass && S.priv.user) award('privacy'); }
function initPassphrase() {
  const m = $('#passphrase');
  const out = h('p', { class: 'mono', 'aria-live': 'polite' }, 'Press the button');
  const make = () => {
    const w = [rand(D.words.length), rand(D.words.length), rand(D.words.length)].map(i => D.words[i]);
    out.textContent = `${w.join('-')}-${10 + rand(90)}`;
    privDone('pass');
  };
  m.append(out, h('button', { class: 'btn primary', type: 'button', onClick: make }, '🎲 Make a silly passphrase'),
    h('ul', { class: 'tips' },
      h('li', {}, h('strong', {}, 'Long and memorable '), 'beats short and "tricky."'),
      h('li', {}, 'No names, birthdays, school or pet names.'),
      h('li', {}, 'Share passwords only with parents — never friends.'),
      h('li', {}, 'This is practice. For real accounts, use a password manager and a unique password per account.')));
}
function initUsername() {
  const m = $('#usernameCheck');
  const inp = h('input', { type: 'text', id: 'unameIn', maxlength: 30, placeholder: 'e.g. SunnyTiger', autocomplete: 'off', 'aria-describedby': 'unameOut' });
  const out = h('ul', { class: 'fb-list', id: 'unameOut', 'aria-live': 'polite' });
  const bad = ['school', 'elementary', 'academy', 'street', 'avenue', 'road', 'grade', 'city'];
  inp.addEventListener('input', () => {
    const v = inp.value.trim(); clear(out);
    if (!v) return;
    const lower = v.toLowerCase(), flags = [];
    if (/(19|20)\d{2}/.test(lower)) flags.push('Contains a 4-digit number that could look like a birth year.');
    if (/\d{6,}/.test(lower)) flags.push('Contains a long number that could look like a phone number.');
    if (/@|\.com|\.net/.test(lower)) flags.push('Looks like an email address. Don\'t use these as usernames.');
    if (/\s/.test(v)) flags.push('Has spaces. Most services don\'t allow them, and it may be a real name.');
    if (/^[a-z]{3,}[._-][a-z]{3,}$/i.test(v)) flags.push('Looks like a first and last name. Use a nickname instead.');
    if (bad.some(b => lower.includes(b))) flags.push('Mentions a school, place or address word.');
    if (flags.length) flags.forEach(f => out.append(h('li', { class: 'warn' }, f)));
    else out.append(h('li', { class: 'good' }, 'Looks anonymous — nice. Also avoid anything that tells strangers your age, school or town.'));
    privDone('user');
  });
  const idea = h('p', { class: 'tiny' });
  m.append(h('div', { class: 'field' }, h('label', { for: 'unameIn' }, 'Username idea'), inp), out,
    h('button', { class: 'btn', type: 'button', onClick: () => {
      const cap = w => w[0].toUpperCase() + w.slice(1);
      idea.textContent = `Idea: ${cap(D.words[rand(D.words.length)])}${cap(D.words[rand(D.words.length)])}`;
    } }, '💡 Give me an idea'), idea);
}

/* ---------- Safety: help finder ---------- */
function initHelp() {
  const m = $('#helpFinder');
  const detail = h('div', { class: 'help-detail', 'aria-live': 'polite' });
  const btns = D.help.map(it => {
    const b = h('button', { class: 'help-btn', type: 'button', 'aria-pressed': 'false' }, h('span', { 'aria-hidden': 'true' }, it.ico), ' ', it.label);
    b.addEventListener('click', () => {
      btns.forEach(x => x.setAttribute('aria-pressed', 'false')); b.setAttribute('aria-pressed', 'true');
      clear(detail).append(...[
        h('h3', {}, it.label),
        h('ol', {}, it.steps.map(s => h('li', { html: s }))),
        it.links && it.links.length ? h('p', { class: 'tiny' }, h('strong', {}, 'Links: '), it.links.map((l, k) => [k ? ' · ' : '', h('a', { href: l[1], target: '_blank', rel: 'noopener' }, l[0])])) : null,
        it.jp && it.jp.length ? h('div', { class: 'jp-help' },
          h('h4', {}, '🇯🇵 In Japan 日本の窓口'),
          h('ul', {}, it.jp.map(id => { const x = D.jpHelp.find(j => j.id === id); return jpLine(x); }))) : null].filter(Boolean));
      award('help');
    });
    return b;
  });
  m.append(h('div', { class: 'help-grid' }, btns), detail);
}

/* ---------- Toolkit ---------- */
function toolkitText() {
  const L = ['MY FAMILY TOOLKIT — ES Tech Talk@CA', ''];
  if (S.plan) {
    const p = S.plan;
    L.push(`${p.name.trim() || 'Our'} FAMILY MEDIA PLAN`, `School days: ${p.weekday}`, `Weekends: ${p.weekend}`, `Screens off before bed: ${p.off} minutes`, `Devices sleep in: ${p.charge}`,
      `Screen-free times: ${p.times.join(', ') || 'none'}`, `Screen-free zones: ${p.zones.join(', ') || 'none'}`, 'Promises:', ...p.pledges.map(x => ' - ' + x), '');
  }
  const rules = D.aiRules.filter((_, i) => S.aiRules[i]);
  if (rules.length) L.push('FAMILY AI RULES', ...rules.map(x => ' - ' + x), '');
  if (S.favs.length) L.push('CONVERSATION STARTERS', ...S.favs.map(f => ' - ' + f.t), '');
  return L.join('\n');
}
function renderToolkit() {
  const m = clear($('#toolkitMount'));
  const sec = (title, ...kids) => h('section', { class: 'panel tk' }, h('h2', {}, title), ...kids);
  const empty = (txt, href, link) => h('p', { class: 'muted' }, txt + ' ', h('a', { href }, link));

  m.append(h('div', { class: 'row no-print' },
    h('button', { class: 'btn primary', type: 'button', onClick: () => window.print() }, '🖨️ Print my toolkit'),
    h('button', { class: 'btn', type: 'button', onClick: async () => {
      try { await navigator.clipboard.writeText(toolkitText()); toast('Copied to clipboard.'); } catch (e) { toast('Copy isn\'t available here — try Print instead.'); }
    } }, '📋 Copy as text'),
    h('button', { class: 'btn danger', type: 'button', onClick: () => {
      if (confirm('Clear everything saved in this browser (plan, checklists, stamps)?')) { try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } location.reload(); }
    } }, 'Clear my data')));

  m.append(sec('🎫 Passport', h('p', {}, `${stampCount()} of ${D.stamps.length} stamps collected.`),
    h('div', { class: 'stamp-row' }, D.stamps.map(s => h('span', { class: 'stamp mini' + (S.stamps[s.id] ? ' got' : ''), title: s.label }, s.icon)))));

  m.append(sec('📝 Family media plan', S.plan ? planCard(S.plan) : empty('You haven\'t built a plan yet.', '#balance', 'Build one →')));

  const rules = D.aiRules.filter((_, i) => S.aiRules[i]);
  m.append(sec('🤖 Family AI rules', rules.length ? h('ul', { class: 'tips' }, rules.map(r => h('li', {}, r))) : empty('No rules chosen yet.', '#ai', 'Pick some →')));

  [['🗓️ Day snapshot', DAY, 'day'], ['🌱 Ages 3–5 day snapshot', DAY_EY, 'dayEY']].forEach(([title, cats, key]) => {
    const v = S[key];
    if (!v) return;
    m.append(sec(title, h('table', { class: 'tbl' }, h('tbody', {}, cats.map(d => h('tr', {}, h('th', { scope: 'row' }, d.label), h('td', {}, fmtH(v[d.id])))),
      h('tr', {}, h('th', { scope: 'row' }, 'Everything else'), h('td', {}, fmtH(24 - cats.reduce((a, d) => a + v[d.id], 0))))))));
  });

  const done = D.safetyChecklist.filter((_, i) => S.setup[i]).length;
  const todo = D.safetyChecklist.filter((_, i) => !S.setup[i]);
  m.append(sec('🔧 Safety set-up', h('p', {}, `${done} of ${D.safetyChecklist.length} done.`), bar(done / D.safetyChecklist.length * 100, 'm-safety'),
    todo.length ? h('div', {}, h('h3', {}, 'Still to do'), h('ul', { class: 'tips' }, todo.map(t => h('li', { html: t })))) : h('p', {}, '🎉 All done!')));

  const eyDone = D.eySetup.filter((_, i) => S.eySetup[i]).length;
  if (eyDone) m.append(sec('🌱 Ages 3–5 safe-use', h('p', {}, `${eyDone} of ${D.eySetup.length} done.`), bar(eyDone / D.eySetup.length * 100, 'm-balance'),
    eyDone < D.eySetup.length ? h('div', {}, h('h3', {}, 'Still to do'), h('ul', { class: 'tips' }, D.eySetup.filter((_, i) => !S.eySetup[i]).map(t => h('li', {}, t)))) : h('p', {}, '🎉 All done!')));

  const gDone = D.gamingSetup.filter((_, i) => S.gSetup[i]).length;
  if (gDone) m.append(sec('🎮 Gaming set-up', h('p', {}, `${gDone} of ${D.gamingSetup.length} done.`), bar(gDone / D.gamingSetup.length * 100, 'm-gaming'),
    gDone < D.gamingSetup.length ? h('div', {}, h('h3', {}, 'Still to do'), h('ul', { class: 'tips' }, D.gamingSetup.filter((_, i) => !S.gSetup[i]).map(t => h('li', { html: t })))) : h('p', {}, '🎉 All done!')));

  m.append(sec('💬 Saved conversation starters', S.favs.length
    ? h('ul', { class: 'tips' }, S.favs.map(f => h('li', {}, f.t, ' ', h('button', { class: 'linkbtn no-print', type: 'button', 'aria-label': 'Remove: ' + f.t, onClick: () => { S.favs = S.favs.filter(x => x.t !== f.t); save(); renderToolkit(); initStartersRefresh(); } }, 'remove'))))
    : empty('Tap ☆ Save on any starter to keep it here.', '#home', 'Browse topics →')));
}
function initStartersRefresh() { $$('.starter').forEach(b => clear(b)); initStarters(); }

function initChallenge() {
  const m = $('#challenge');
  let idx = rand(D.challenges.length);
  const t = h('h3', {}), d = h('p', {});
  const show = () => { t.textContent = D.challenges[idx].t; d.textContent = D.challenges[idx].d; };
  m.append(h('div', { class: 'challenge', 'aria-live': 'polite' }, t, d), h('button', { class: 'btn', type: 'button', onClick: () => { let n; do { n = rand(D.challenges.length); } while (n === idx); idx = n; show(); } }, '🎲 Another challenge'));
  show();
}

/* ---------- Japan help lines shown inside the Help Finder ---------- */
function telHref(tel) {
  if (/^[0-9-]+$/.test(tel)) return 'tel:' + tel.replace(/-/g, '');
  if (/^#[0-9]+$/.test(tel)) return 'tel:%23' + tel.slice(1);
  return null;
}
function jpLine(x) {
  const th = telHref(x.tel);
  return h('li', {},
    h('strong', {}, x.ja), ' ', h('span', { class: 'muted' }, `(${x.name})`), ' — ',
    th ? h('a', { href: th }, x.tel) : x.tel,
    x.hours && x.hours !== 'Online' ? h('span', { class: 'muted' }, ` · ${x.hours}`) : null);
}
/* ---------- Sources ---------- */
function initSources() {
  const m = $('#sourcesMount');
  const all = D.sources.flatMap(g => g.items.map(it => ({ ...it, group: g, topics: [g.id, ...(it.also || [])] })));
  const chips = [['all', 'All'], ['early', '🌱 Ages 3–5'], ['ai', '🤖 AI'], ['balance', '⚖️ Balance'], ['safety', '🛡️ Safety'], ['gaming', '🎮 Gaming'], ['tools', '🔧 Tools'], ['japan', '🇯🇵 Japan'], ['world', '🌍 Outside the U.S.']];
  let topic = 'all', q = '', visible = [];
  const count = h('p', { class: 'tiny', 'aria-live': 'polite' });
  const list = h('div');
  const search = h('input', { type: 'search', id: 'srcSearch', placeholder: 'e.g. sleep, NCMEC, screen time…', autocomplete: 'off' });
  const chipBtns = chips.map(([id, label]) => {
    const b = h('button', { class: 'filter-btn', type: 'button', 'aria-pressed': String(id === 'all') }, label);
    b.addEventListener('click', () => { topic = id; chipBtns.forEach(x => x.setAttribute('aria-pressed', String(x === b))); render(); });
    return b;
  });
  search.addEventListener('input', () => { q = search.value; render(); });

  function render() {
    clear(list); visible = [];
    const needle = q.trim().toLowerCase();
    D.sources.forEach(g => {
      const items = all.filter(it => it.group === g && (topic === 'all' || it.topics.includes(topic)) &&
        (!needle || `${it.name} ${it.org} ${it.kind} ${it.note}`.toLowerCase().includes(needle)));
      if (!items.length) return;
      visible.push({ g, items });
      list.append(h('section', { class: 'panel' },
        h('h2', { class: 'src-h' }, g.group, g.tab ? h('a', { class: 'src-see', href: '#' + g.tab }, 'See on the site →') : null),
        h('ul', { class: 'src-list' }, items.map(it => h('li', {},
          h('a', { href: it.url, target: '_blank', rel: 'noopener' }, it.name),
          h('span', { class: 'org' }, `${it.org} · `, h('span', { class: 'kind' }, it.kind)),
          h('p', {}, it.note))))));
    });
    const n = visible.reduce((a, v) => a + v.items.length, 0);
    count.textContent = `Showing ${n} of ${all.length} resources`;
    if (!n) list.append(h('p', { class: 'muted' }, 'No matches. Try a different word or filter.'));
  }
  function asText() {
    return ['ES TECH TALK@CA — SOURCES & FURTHER READING', '']
      .concat(visible.flatMap(v => [v.g.group, ...v.items.flatMap(it => [` - ${it.name} (${it.org})`, `   ${it.url}`]), '']))
      .join('\n');
  }
  const tools = h('div', { class: 'row no-print' },
    h('button', { class: 'btn', type: 'button', onClick: () => window.print() }, '🖨️ Print list'),
    h('button', { class: 'btn', type: 'button', onClick: async () => {
      try { await navigator.clipboard.writeText(asText()); toast('Copied the list to your clipboard.'); } catch (e) { toast('Copy isn\'t available here — try Print instead.'); }
    } }, '📋 Copy as text'));
  m.append(h('section', { class: 'panel src-tools no-print' },
    h('div', { class: 'field' }, h('label', { for: 'srcSearch' }, 'Search the list'), search),
    h('div', { class: 'filters', role: 'group', 'aria-label': 'Filter by topic' }, chipBtns),
    count, tools), list);
  render();
}

/* ---------- boot ---------- */
function boot() {
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-age]');
    if (b) { S.age = b.dataset.age; save(); renderAge(); }
  });
  /* Japanese: hand the current page to Google Translate. Hidden once the page is already inside a translation. */
  const langBtn = $('#langBtn');
  if (location.hostname.endsWith('.translate.goog') || window.self !== window.top) langBtn.hidden = true;
  else langBtn.addEventListener('click', () => { location.href = 'https://translate.google.com/translate?sl=en&tl=ja&u=' + encodeURIComponent(location.href); });
  $('#passportBtn').addEventListener('click', () => { const d = $('#passportDlg'); if (d.showModal) d.showModal(); else d.setAttribute('open', ''); });
  $$('[data-scroll]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { t.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); }
  }));

  initCheckin(); initMyths();
  initGame('#gameAiNot', { ...D.games.aiNot });
  initGame('#gameFact', { ...D.games.fact });
  initGame('#gameTraffic', { ...D.games.traffic });
  initGame('#gameSafety', { ...D.games.safety });
  initGame('#gameGaming', { ...D.games.gaming });
  checklist('#gamingChecklist', D.gamingSetup, S.gSetup, n => { if (n >= 5) award('gsetup'); });
  checklist('#aiRules', D.aiRules, S.aiRules);
  checklist('#safetyChecklist', D.safetyChecklist, S.setup, n => { if (n >= 5) award('setup'); });
  initDay('#dayDesigner', DAY_SETS.main); initDay('#dayDesignerEY', DAY_SETS.early);
  initQuality(); initPlan(); initTransitions();
  initWheel('#wheel', () => S.age === '3-5' ? D.eyBoredom : D.boredom.filter(b => b.ages.includes(S.age)).map(b => b.t));
  initWheel('#wheelEY', () => D.eyBoredom);
  initCalm();
  initGame('#gameGoodFit', { ...D.games.goodFit });
  checklist('#eyChecklist', D.eySetup, S.eySetup, n => { if (n >= 5) award('eysetup'); });
  initStarters(); initPassphrase(); initUsername(); initHelp(); initChallenge(); initSources();
  renderAge(); updatePassport(); route();
}
boot();
})();
