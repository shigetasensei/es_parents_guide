# ES Tech Talk@CA

An interactive, research-based guide for parents of preschool-to-elementary children (ages 3–11). A dedicated **🌱 Ages 3–5** guide (linked from the home page and the age lens) covers preschool and kindergarten; three trails cover ages 6–11:

- 🌱 **Ages 3–5 (preschool & kindergarten)** – daily picture (sleep, movement, screens), preschool day designer, screen-choice game, "instead of the screen" ideas, safe-use checklist
- 🇯🇵 **Japan (日本)** – what MEXT, MHLW, the Children and Families Agency and the Japan Pediatric Association say, compared with international guidance, plus a directory of help lines in Japan
- 🤖 **AI in education & life** – what AI is, fact-checking chatbots, homework "traffic light", family AI rules
- ⚖️ **Media balance** – day designer, the "5 Cs" quality check, a printable Family Media Plan, "time's up" scripts
- 🛡️ **Internet safety** – Go / Pause / Stop & tell game, privacy lab, set-up checklist, "what do I do if…?" help finder

Plus a family check-in, myth-or-fact cards, an explorer passport of stamps, a printable Toolkit, and a curated list of sources.

## Run it

It's a static site: no build step, no dependencies, no tracking. Open `index.html`, or:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

To publish, import the repo in [Vercel](https://vercel.com/new) (Framework Preset: **Other**, no build command, leave Output Directory empty). Every push to `main` then deploys automatically.

## Privacy

Everything a visitor enters (family name, plan, checklist progress) stays in their browser's `localStorage`. Nothing is sent anywhere.

## Editing content

All games, tips, checklists and source links live in [`js/data.js`](js/data.js). Page text is in `index.html`.

## Content notes

Guidance is summarized from sources such as the American Academy of Pediatrics (incl. its 2026 *Digital Ecosystems, Children, and Adolescents* policy), the Canadian 24-Hour Movement Guidelines, WHO, AASM, UNESCO, the U.S. Dept. of Education, AI4K12, Common Sense Media, NCMEC and StopBullying.gov. Source links should be re-verified periodically, as organizations move pages and update recommendations. This is general information, not medical, legal or mental-health advice.
