/* Content for ES Tech Talk@CA. Plain data so it is easy to review and edit. */
window.DATA = {

  stamps: [
    { id: 'checkin',  icon: '📋', label: 'Family check-in' },
    { id: 'myths',    icon: '🔍', label: 'Myth buster' },
    { id: 'ainot',    icon: '🤖', label: 'AI or Not AI?' },
    { id: 'fact',     icon: '🔬', label: 'Fact-check Lab' },
    { id: 'traffic',  icon: '🚦', label: 'Homework traffic light' },
    { id: 'day',      icon: '🗓️', label: 'Day designer' },
    { id: 'quality',  icon: '✅', label: 'Quality check' },
    { id: 'plan',     icon: '📝', label: 'Media plan' },
    { id: 'safety',   icon: '🛡️', label: 'Go / Pause / Stop' },
    { id: 'privacy',  icon: '🔐', label: 'Privacy lab' },
    { id: 'help',     icon: '🆘', label: 'Help finder' },
    { id: 'setup',    icon: '🔧', label: 'Set-up checklist' },
    { id: 'eyday',    icon: '🌱', label: 'Ages 3–5: day designer' },
    { id: 'eygame',   icon: '📺', label: 'Ages 3–5: screen choices' },
    { id: 'eycalm',   icon: '🧸', label: 'Ages 3–5: calm-down ideas' },
    { id: 'eysetup',  icon: '🔒', label: 'Ages 3–5: safe-use checklist' }
  ],

  checkin: [
    { topic: 'ai',      text: 'We have talked with our child about what AI is — and that it can be wrong.' },
    { topic: 'ai',      text: 'Our child knows what personal information never goes into a chatbot or app.' },
    { topic: 'balance', text: 'Devices charge outside bedrooms overnight, and we have some screen-free times (like meals).' },
    { topic: 'balance', text: 'Our child can usually stop a screen activity without a big blow-up.' },
    { topic: 'safety',  text: 'Our child knows they can tell us about anything online without losing their device.' },
    { topic: 'safety',  text: 'We have checked who can chat with or message our child in their games and apps.' }
  ],
  checkinAdvice: {
    ai: {
      title: 'AI & learning',
      low:  'Start with the AI or Not AI? game and the Fact-check Lab together. They take about five minutes and build the "check it" habit.',
      mid:  'You have a foundation. Try the Homework Traffic Light and write a few family AI rules.',
      high: 'Nice work. Keep it fresh with the conversation starters and revisit rules as school tools change.'
    },
    balance: {
      title: 'Media balance',
      low:  'Try the Day Designer and then build a Family Media Plan together — small routines (charging station, screen-free dinners) go a long way.',
      mid:  'You are partway there. Use the Quality Check on your child\'s favorite activity and the "time\'s up" scripts.',
      high: 'Great routines. Check in as your child grows; plans should be revisited every few months.'
    },
    safety: {
      title: 'Internet safety',
      low:  'Begin with the Go / Pause / Stop game, then say the sentence "You will not be in trouble for telling me" out loud tonight.',
      mid:  'Good start. Work through the set-up checklist, especially game chat and download approvals.',
      high: 'Strong base. Save the Help Finder so you know your first steps if something happens.'
    }
  },

  myths: [
    { myth: '"All screen time is the same."',
      verdict: 'Myth',
      fact: 'What the child is doing, who they are with, how it ends, and what it replaces all matter. The AAP\'s 2026 policy looks at content, design and context — not just minutes.' },
    { myth: '"AI chatbots only say things that are true."',
      verdict: 'Myth',
      fact: 'Chatbots predict plausible text. They can state wrong facts or invent sources with total confidence, so important facts need checking.' },
    { myth: '"Strangers only reach kids through social media."',
      verdict: 'Myth',
      fact: 'Multiplayer game chat, comments and shared creative platforms can also connect children with unknown people. Check chat settings everywhere.' },
    { myth: '"If my child tells me something scary happened online, taking away the device teaches a lesson."',
      verdict: 'Myth',
      fact: 'Experts such as NCMEC and StopBullying.gov advise staying calm and reassuring your child it is not their fault. Fear of losing devices makes kids hide problems.' },
    { myth: '"Parental controls make the internet safe."',
      verdict: 'Myth',
      fact: 'They are helpful tools, but kids find workarounds and no filter catches everything. Controls plus conversation plus shared spaces work best.' },
    { myth: '"Protecting sleep, movement and family time is a good way to think about screens."',
      verdict: 'Fact',
      fact: 'Major guidelines (AAP, Canadian 24-Hour Movement Guidelines, AASM, WHO) focus on making sure screens do not crowd out sleep, physical activity and in-person connection.' }
  ],

  /* ---------- Games: choice engine ---------- */
  games: {
    aiNot: {
      stamp: 'ainot', count: 8,
      choices: [{ id: 'ai', label: '🤖 AI' }, { id: 'not', label: '⚙️ Not AI' }],
      wrapup: 'AI systems learn patterns from data to predict or create things. A calculator or timer follows fixed rules instead. Ask your child: "How could a computer learn to do that?"',
      items: [
        { q: 'A video app suggests the next video you will probably like.', a: 'ai', why: 'Recommendation systems learn from what millions of people watch and click.' },
        { q: 'A calculator works out 48 + 27.', a: 'not', why: 'It follows fixed math rules and always gives the same answer. Nothing is learned.' },
        { q: 'A phone unlocks when it recognizes your face.', a: 'ai', why: 'Face recognition learns patterns in images (this is "perception" in the AI4K12 big ideas).' },
        { q: 'A hallway light turns on at 6 pm on a timer.', a: 'not', why: 'A timer follows a simple rule. It does not learn or decide anything new.' },
        { q: 'A smart speaker answers, "What is the weather today?"', a: 'ai', why: 'It uses speech recognition and language models, both trained on huge amounts of data.' },
        { q: 'A toy keyboard plays a drum sound when you press a button.', a: 'not', why: 'It plays a pre-recorded sound. Same button, same sound.' },
        { q: 'A chatbot writes a short poem about your dog.', a: 'ai', why: 'This is generative AI: it produces new text based on patterns in its training data.' },
        { q: 'A maps app predicts traffic and picks a faster route.', a: 'ai', why: 'It learns patterns from many drivers\' past and current data to make predictions.' },
        { q: 'A paper map shows the roads in your town.', a: 'not', why: 'It is printed information. Nothing is being predicted.' },
        { q: 'Your keyboard suggests the next word as you type a message.', a: 'ai', why: 'Predictive text uses a language model that learned which words tend to follow others.' }
      ]
    },

    fact: {
      stamp: 'fact', count: 6,
      choices: [{ id: 'ok', label: '✅ Correct' }, { id: 'err', label: '⚠️ Has an error' }],
      wrapup: 'Even when a chatbot is right, the best habit is to check a second, trusted source — a library book, a museum or encyclopedia site, or a teacher. Ask: "Who says so, and how do we know?"',
      items: [
        { q: 'A chatbot says: "Octopuses have three hearts."', a: 'ok', why: 'True! Two pump blood through the gills and one pumps it to the rest of the body. Still worth confirming in a trusted source.' },
        { q: 'A chatbot says: "17 × 6 = 112."', a: 'err', why: '17 × 6 = 102. Chatbots can make arithmetic mistakes while sounding sure. Use a calculator or work it out yourself.' },
        { q: 'A chatbot says: "The Great Wall of China can be seen from the Moon with the naked eye."', a: 'err', why: 'This is a popular myth. Chatbots can repeat common mistakes found in their training data.' },
        { q: 'A chatbot says: "Humans only use 10% of their brains."', a: 'err', why: 'Another myth. Brain imaging shows we use virtually all of our brain, just not every part at the same moment.' },
        { q: 'A chatbot says: "According to the book The Rainbow Owls of Lake Tern by Dr. Mia Collins (2019), owls change color with the seasons."', a: 'err', why: 'That book does not exist — we made it up for this game. Chatbots can invent book titles, quotes and links that sound real. Always check a source actually exists.' },
        { q: 'A chatbot says: "A day on Venus is longer than a year on Venus."', a: 'ok', why: 'True. Venus spins so slowly that one rotation takes about 243 Earth days, while its orbit takes about 225.' },
        { q: 'A chatbot says: "Lightning never strikes the same place twice."', a: 'err', why: 'Myth. Tall buildings are struck many times — the Empire State Building is hit many times a year.' },
        { q: 'A chatbot says: "Sharks are mammals."', a: 'err', why: 'Sharks are fish. Mammals breathe air and feed their young milk.' }
      ]
    },

    traffic: {
      stamp: 'traffic', count: 7,
      choices: [{ id: 'g', label: '🟢 Green' }, { id: 'y', label: '🟡 Yellow' }, { id: 'r', label: '🔴 Red' }],
      wrapup: 'Rules of thumb: you do the thinking, a grown-up knows what is going on, nobody shares private info, and school rules come first. Your school may have its own AI policy — check it.',
      items: [
        { q: 'With a grown-up beside you, ask AI to explain fractions a different way, then do the practice problems yourself.', a: 'g', why: 'AI is a helper for understanding, and you still do the work.' },
        { q: 'Ask a chatbot to quiz you before your spelling test.', a: 'g', why: 'Practice quizzes are a good use. Just check the answers against your real word list.' },
        { q: 'Ask AI to write your book report, then hand it in as yours.', a: 'r', why: 'It is not your work, it likely breaks school rules, and you miss the learning.' },
        { q: 'Ask AI for five project ideas, then pick one and research it yourself.', a: 'y', why: 'Brainstorming can help, but ask your teacher or parent first and fact-check what you find.' },
        { q: 'Type your full name, school and address so a story can be "about you."', a: 'r', why: 'Never share personal information with AI tools. It may be stored or used.' },
        { q: 'Upload a photo of a classmate to an AI app to make a funny picture.', a: 'r', why: 'Other people\'s photos are private and edited pictures can hurt feelings. Ask permission and use only approved tools.' },
        { q: 'Ask AI to point out mistakes in your paragraph, then fix them yourself.', a: 'y', why: 'This can support learning, but check with your teacher about whether it is allowed.' },
        { q: 'Use AI to help with part of a project, and tell your teacher exactly how you used it.', a: 'y', why: 'Being open about it is the right habit, but ask first whether it is allowed. For example, the IB says work produced by AI, even in part, is not the student\'s own, and any AI-generated content in assessed work must be credited. Follow your school\'s rules.' },
        { q: 'Tell a chatbot about a big worry instead of telling a person.', a: 'r', why: 'AI is not a safe replacement for trusted people. Tell a parent, teacher or counselor.' },
        { q: 'With a parent, use a kid-appropriate image tool to draw a dragon for fun.', a: 'g', why: 'Creative play together is a great way to explore what AI can and cannot do.' }
      ]
    },

    goodFit: {
      stamp: 'eygame', count: 8,
      choices: [{ id: 'good', label: '✅ Good fit' }, { id: 'care', label: '🤔 Use with care' }, { id: 'skip', label: '🚫 Skip it' }],
      wrapup: 'Rules of thumb for ages 3–5: choose slow, story-driven, ad-free content; stay close and talk about it; keep it away from sleep, meals and play; and remember that no single screen choice is a catastrophe — it is the pattern that counts.',
      items: [
        { q: 'A video call with grandparents who live far away.', a: 'good', why: 'Live, two-way conversation with people your child knows is a very different experience from watching. Children can join in, and relationships matter at this age.' },
        { q: 'Autoplay clips on a phone, one after another, while you eat at a restaurant.', a: 'skip', why: 'Autoplay and endless recommendations are designed to keep kids watching and make stopping hard. Turn autoplay off and choose one thing with a clear end.' },
        { q: 'A slow-paced, story-driven show you watch together, then act out the story afterward.', a: 'good', why: 'Co-viewing and talking about what you saw helps children connect it to real life, which is what the AAP advises for ages 2–5.' },
        { q: 'A free game that keeps offering "watch an ad for a reward" and "buy now" buttons.', a: 'skip', why: 'Preschoolers cannot tell ads or in-app purchases from the game. Choose ad-free apps and lock purchases.' },
        { q: 'Handing over a tablet to stop a meltdown in the grocery store — every time.', a: 'care', why: 'An occasional emergency is human. But the AAP advises against making media your only calming tool, and a 2023 study of 3–5-year-olds linked frequent device calming with more emotional reactivity over time (an association, not proof of cause). Practice other calm-down skills too.' },
        { q: 'The TV on in the background all day while your child plays.', a: 'skip', why: 'Background TV competes with play and with talking together. Turn it off when nobody is really watching.' },
        { q: 'A tablet in bed, right before sleep.', a: 'skip', why: 'The AAP suggests no screens for about an hour before bed and none in bedrooms overnight. Preschoolers need 10–13 hours of sleep including naps.' },
        { q: 'An educational app designed with child-development experts that you play together.', a: 'good', why: 'Good apps with a clear learning goal, no ads and no pressure to keep playing can be fine, especially when you join in and talk about it.' },
        { q: 'Letting a voice assistant or chatbot answer your child\'s endless "why?" questions while you are busy.', a: 'care', why: 'Young children may treat talking devices like people, and AI can be wrong. Use it together, say "it is a computer, not a person," and check surprising answers.' },
        { q: 'Posting photos of your child (with school uniform or location) publicly online.', a: 'care', why: 'Your child cannot consent, and photos can reveal where they go to school. Share privately with family, and leave out names, uniforms and places.' },
        { q: 'An e-book full of buttons and animations, read alone.', a: 'care', why: 'Lots of extras can pull attention away from the story. Reading aloud together — print or a simple e-book — builds language and closeness.' },
        { q: 'A short video of a song your child loves, then you sing and dance along.', a: 'good', why: 'Screens that get kids moving, singing and interacting with you are a better fit than passive watching.' }
      ]
    },

    safety: {
      stamp: 'safety', count: 8,
      choices: [{ id: 'go', label: '🟢 Go' }, { id: 'pause', label: '🟡 Pause' }, { id: 'stop', label: '🔴 Stop & tell' }],
      wrapup: 'Go = fine. Pause = check with a grown-up first. Stop & tell = close it, leave, and tell a trusted adult — you will not be in trouble.',
      items: [
        { q: 'Grandma calls you on a video call that a parent set up.', a: 'go', why: 'Connecting with family you know, with a parent\'s okay, is a great use of tech.' },
        { q: 'A player in your game asks, "What school do you go to?"', a: 'stop', why: 'Never share where you live or go to school. Don\'t answer, tell a grown-up, and block or report the player.' },
        { q: 'A pop-up says, "You won a FREE tablet! Click here!"', a: 'stop', why: 'This is a classic scam. Don\'t click. Close it and tell a grown-up.' },
        { q: 'A game says you can get free coins if you download another app.', a: 'pause', why: 'Ask a grown-up first. Extra apps can have hidden costs, ads, or unsafe content.' },
        { q: 'A friendly player wants to move your chat to a different private app.', a: 'stop', why: 'Moving to private chat is a well-known warning sign. Tell a grown-up even if they seem nice.' },
        { q: 'Someone online says, "Don\'t tell your parents about our chat."', a: 'stop', why: 'A safe person never asks a child to keep secrets from their parents. Tell a grown-up right away.' },
        { q: 'A classmate asks for your password "to help you level up."', a: 'stop', why: 'Passwords are only shared with parents. Friends can change, and accounts can be taken over.' },
        { q: 'You want to post a video of yourself dancing.', a: 'pause', why: 'Check with a grown-up. Posts can be copied and shared, and settings and audience matter.' },
        { q: 'A video suddenly shows something scary or yucky.', a: 'stop', why: 'Look away, close it, and tell a grown-up. You are not in trouble and it is not your fault.' },
        { q: 'You are watching a show your parent picked on the family tablet in the living room.', a: 'go', why: 'Co-viewing in shared spaces with approved content is a low-risk, good way to enjoy media.' },
        { q: 'You see a mean comment about you in a group chat.', a: 'stop', why: 'Don\'t reply. Take a screenshot if you can and tell a grown-up. It is not your fault.' },
        { q: 'You want to download a new game you saw in an ad.', a: 'pause', why: 'Ask first. A parent can check the age rating, reviews, chat features and costs.' }
      ]
    }
  },

  ageTips: {
    ai: {
      '6-7': [
        'Keep it concrete: voice assistants, video recommendations, face unlock. Say, "It is a computer that learns patterns."',
        'Use AI tools <strong>together</strong>, on a shared device, and keep chatbots for grown-up-led exploration only.',
        'Play "Is it AI?" on walks and in the car. Draw a robot and talk about what it can\'t do (feel, care, know you).'
      ],
      '8-9': [
        'Introduce <strong>"AI can be wrong"</strong> and practice the check-it habit with the Fact-check Lab.',
        'Explore curiosity questions together, and agree on "no names, school, address or photos."',
        'Mention that pictures and videos can be made or edited by computers. "Surprising? Pause and ask."'
      ],
      '10-11': [
        'Talk about <strong>homework integrity</strong>: what counts as your own work? Check your school\'s AI policy together.',
        'Discuss privacy and data ("what happens to what I type?"), bias, and why AI companions are not for kids.',
        'Many general chatbots set 13+ in their terms. Read the terms together and decide as a family — don\'t let an app decide for you.'
      ]
    },
    balance: {
      '6-7': [
        'Predictable routines and a <strong>visual timer</strong> make stopping easier than surprise endings.',
        'Keep screens in shared spaces, watch together, and choose calm, high-quality content.',
        'Protect sleep and big-body play first; screens fit around them.'
      ],
      '8-9': [
        'Involve your child in the plan: kids who help write the rules push back less.',
        'Use a 5-minute warning and pick natural stopping points (end of an episode or level).',
        'Keep bedrooms screen-free overnight, and make weekday vs. weekend rules clear.'
      ],
      '10-11': [
        'Give a little more independence within guardrails, and explain <strong>why</strong> (sleep, focus, family time).',
        'Talk about attention-grabbing design: autoplay, streaks, endless feeds. "Who benefits when you keep watching?"',
        'Think carefully about a first phone and social media. Most major platforms require users to be 13+.'
      ]
    },
    safety: {
      '6-7': [
        'Only use devices <strong>in the same room</strong> as a grown-up, with kid-appropriate apps and no open chat.',
        'Teach <strong>Go / Pause / Stop &amp; tell</strong> and "no personal info." Practice saying it out loud.',
        'Teach body privacy and "no secrets from parents" in simple language.'
      ],
      '8-9': [
        'Set game chat to friends-only (or off) and require approval for downloads and purchases.',
        'Discuss scams and pop-ups, and role-play what to say if a stranger messages. Practice "tell, not hide."',
        'Remind them repeatedly: <strong>"You will never be in trouble for telling me."</strong>'
      ],
      '10-11': [
        'Talk about group chats, peer pressure, screenshots that last forever, and how to leave a conversation.',
        'Discuss cyberbullying (as target, bystander, or participant) and the "would I say it in person?" test.',
        'Name the hard topics early: pressure for pictures, online "friends" who want secrets, and sextortion. Reassure: "It\'s never your fault, and you can tell me."'
      ]
    }
  },

  starters: {
    ai: [
      'What do you think AI is? Where do you think we use it at home?',
      'If a chatbot told you something surprising, how could we check if it is true?',
      'Why might a computer be wrong even when it sounds very sure?',
      'What is something you would want a person — not a robot — to help you with?',
      'What do you think happens to the things we type into an AI app?',
      'If AI draws a picture, who is the artist? Is it fair to say we made it?',
      'Have you seen a picture or video that might have been made by a computer? How could we tell?',
      'What counts as your own work on homework? Where would using AI cross a line?'
    ],
    balance: [
      'What is your favorite thing to do on a screen? What is your favorite thing to do off a screen?',
      'How does your body feel after an hour of gaming? After an hour outside?',
      'What is a good way for me to remind you when it is almost time to stop?',
      'Which apps or games are hardest to stop? Why do you think that is?',
      'If we could pick one screen-free time that is actually fun, what would it be?',
      'What would you do if you were bored and there were no screens around?',
      'Do you think I use my phone too much sometimes? What could I do differently?'
    ],
    safety: [
      'Who do you talk to online? Do we know all of them in real life?',
      'What would you do if someone online made you feel weird or uncomfortable?',
      'What is something private that should never be shared online?',
      'What would you tell a friend who got a mean message?',
      'I promise I will not be mad if you tell me about something scary online. What would make it easier to tell me?',
      'Who else is a trusted grown-up you could tell if I am not around?',
      'What do you think about people who ask you to keep secrets?'
    ]
  },

  eyStarters: [
    'Tell me about your favorite show. What happens in the story?',
    'Can you teach me how to play your game? I want to learn!',
    'What can we make or build together after this show?',
    'Is that character being kind? How can you tell?',
    'When we sit for a long time, how does your body feel? Let\'s wiggle!',
    'If something on a screen feels scary or funny-in-a-bad-way, who can you tell?',
    'Is the speaker a person or a computer? What can a computer not do?',
    'When the timer rings, what should we do next? You choose!'
  ],

  eyCalm: [
    { id: 'rest', ico: '🍽️', label: 'Waiting at a restaurant', ideas: ['Bring a small "wait bag": crayons, stickers, a mini notebook.', 'Play I-spy, "find something red," or a quiet story game.', 'Give a job: arrange the sugar and sauce packets, or count the forks.'] },
    { id: 'car', ico: '🚗', label: 'A car ride', ideas: ['Sing songs, play a story CD or audiobook.', 'Window bingo: find a truck, a dog, a red door.', 'Sticker books or a small treasure bag that only comes out in the car.'] },
    { id: 'feel', ico: '😤', label: 'Big feelings or a meltdown', ideas: ['Get low, stay close and name it: "You are so mad that we have to stop."', 'Try "smell the flower, blow out the candle" breaths together.', 'Offer a calm corner with soft toys and books. A screen once in a while is OK; try not to make it the only tool.'] },
    { id: 'morning', ico: '⏰', label: 'The morning rush', ideas: ['Use a picture routine chart: dress, eat, teeth, shoes.', 'Race the song: "Can we finish before the song ends?"', 'Lay out clothes the night before and keep screens off until everyone is ready.'] },
    { id: 'cook', ico: '🍳', label: 'You need to cook or work', ideas: ['Give a helper job: wash veggies, stir, set napkins.', 'Set up an activity box: play-dough, magnets, a puzzle, big paper and crayons.', 'If you need a screen, pick a calm, ad-free show with a clear end, and use a visible timer.'] },
    { id: 'trip', ico: '✈️', label: 'A long trip or flight', ideas: ['Pack small surprises, wrapped, to open one at a time.', 'Download calm, ad-free shows in advance and plan when to use them.', 'Bring snacks, a sticker book and a favorite stuffed toy.'] },
    { id: 'bed', ico: '🌙', label: 'Bedtime', ideas: ['Keep the same order every night: bath, teeth, pajamas, book, lights out.', 'Turn off screens about an hour before bed, and keep devices out of the bedroom.', 'Read a book together, or sing a quiet song.'] }
  ],

  eySetup: [
    'My child uses kid-profile or kids-only apps, not the open internet or open video sites.',
    'Autoplay is off wherever I can turn it off.',
    'Purchases and downloads need my password or approval.',
    'I pick the apps and shows ahead of time, and I check the ads and age rating.',
    'Devices are used in shared spaces, not alone in a bedroom.',
    'Screens go off about an hour before bed, and devices stay out of the bedroom overnight.',
    'Smart speakers and smart toys have child settings on, and I know how to delete voice recordings.',
    'Chat, comments and location sharing are off in every app my child uses.',
    'I share photos of my child only privately, and without school names, uniforms or places.',
    'My child knows the body-safety rule: "My body belongs to me, and I never keep secrets from my grown-ups."'
  ],

  eyBoredom: [
    'Build a fort or a tent from blankets and chairs.',
    'Pretend play: a restaurant, a shop, a vet clinic, a doll hospital.',
    'Play-dough or kitchen-table "slime" (supervised).',
    'Dance party: freeze when the music stops.',
    'Water play at the sink or in a tub with cups and spoons.',
    'Scavenger hunt: find something soft, round, red or tiny.',
    'Draw with chalk outside, or with big crayons on big paper.',
    'Make an obstacle course with cushions and pillows.',
    'Look at picture books together and make up the story.',
    'Wash toy cars or dolls in a bucket of soapy water.',
    'Cook together: wash veggies, stir, make a snack.',
    'Walk outside and collect leaves, sticks and stones to sort.',
    'Build a tower with blocks, cups or recycled boxes.',
    'Sing songs with hand motions, or make up a song.',
    'Sticker scenes: make a picture with stickers on paper.',
    'Play "Simon says" or "red light, green light."'
  ],

  aiRules: [
    'We use AI tools together at first, in shared spaces.',
    'We never type names, school, address, birthdays or photos of people into AI tools.',
    'We check important answers with a second, trusted source.',
    'AI can help us learn, but our own work stays our own — we follow the school\'s rules.',
    'We tell a grown-up if AI says something scary, mean or confusing.',
    'AI is not a friend or a counselor. For feelings, we talk to people.',
    'We ask before trying a new AI app, and we read the age rules.',
    'We follow our school\'s AI and academic-integrity rules (for example, at an IB school, AI help is credited and is not passed off as our own work).'
  ],

  quality: [
    { c: 'Child', q: 'Is your child doing well right now — rested, healthy, in a good mood, keeping up with sleep, school and friends?', tip: 'If your child is struggling, screens can be more of a coping tool than a treat. Check in on the root cause before enforcing limits.' },
    { c: 'Content', q: 'Is the content age-appropriate, free of manipulation (pushy ads, in-app purchases, endless autoplay) and something you could be comfortable watching together?', tip: 'Preview it, check the age rating, and turn off autoplay and in-app purchases.' },
    { c: 'Calm', q: 'Can your child usually stop without a big blow-up and return to other activities with a good mood?', tip: 'Try a 5-minute warning, natural stopping points, and agreeing on what comes next.' },
    { c: 'Crowding out', q: 'Is this still leaving room for sleep, homework, play, outdoor time and family time?', tip: 'Protect the big three first (sleep, movement, people), then fit screens around them.' },
    { c: 'Communication', q: 'Do you talk with your child about what they do online, and do they feel safe telling you about problems?', tip: 'Ask curiosity questions ("Show me how it works!") and co-play when you can.' }
  ],

  transitions: [
    { title: 'Before the screen starts',
      steps: ['Agree on what, where, and for how long — and what happens afterward.', 'Set a visible timer (sand timer, kitchen timer or device timer).', 'Choose a stopping point: "two episodes" or "until this level ends".'] },
    { title: '5 minutes before the end',
      steps: ['Give a calm warning: "Five more minutes, then dinner."', 'Ask what they are working on so they can find a stopping point.', 'Get close and use their name rather than calling from another room.'] },
    { title: 'When it\'s time',
      steps: ['Say it once, kindly: "Timer\'s up. Save your game."', 'Name the feeling: "It\'s hard to stop something fun."', 'Hold the line, stay friendly, and move to something connected — snack, walk, game together.'] },
    { title: 'If it goes badly',
      steps: ['Wait until everyone is calm before talking about it.', 'Ask, "What made stopping so hard today?" and adjust the plan together.', 'Avoid using screens as a reward or a punishment — it makes screens seem even more special.'] }
  ],

  boredom: [
    { t: 'Build a fort and read inside it.', ages: ['6-7', '8-9'] },
    { t: 'Start a family "sock puppet theater."', ages: ['6-7', '8-9'] },
    { t: 'Draw a map of your neighborhood or an imaginary island.', ages: ['6-7', '8-9', '10-11'] },
    { t: 'Go on a nature scavenger hunt (find something red, round, rough, old).', ages: ['6-7', '8-9'] },
    { t: 'Make up a board game with dice and a deck of cards.', ages: ['8-9', '10-11'] },
    { t: 'Bake something together. Kids measure and stir.', ages: ['6-7', '8-9', '10-11'] },
    { t: 'Write and illustrate a mini comic.', ages: ['8-9', '10-11'] },
    { t: 'Build the tallest tower you can from recycled materials.', ages: ['6-7', '8-9', '10-11'] },
    { t: 'Dance party: each person picks two songs.', ages: ['6-7', '8-9', '10-11'] },
    { t: 'Interview a grandparent or older neighbor about when they were your age.', ages: ['8-9', '10-11'] },
    { t: 'Learn a card trick and perform it for the family.', ages: ['8-9', '10-11'] },
    { t: 'Start a "kindness mission": make cards for someone.', ages: ['6-7', '8-9', '10-11'] },
    { t: 'Plan and cook a family meal, with a menu you design.', ages: ['10-11'] },
    { t: 'Learn a new sport or skill: juggling, bike tricks, jump rope.', ages: ['8-9', '10-11'] },
    { t: 'Make a stop-motion video using toys (with a device in an approved, supervised way).', ages: ['8-9', '10-11'] },
    { t: 'Have an indoor picnic.', ages: ['6-7', '8-9'] }
  ],

  safetyChecklist: [
    'Device-level parental controls are set up (Apple Screen Time, Google Family Link, Microsoft Family Safety or similar).',
    'App store downloads and purchases need my approval.',
    'Game chat is set to friends-only or off, and I know who is on my child\'s friends list.',
    'Location sharing is off for apps that do not need it.',
    'Account privacy settings are reviewed (private profile, limited sharing).',
    'I have turned on two-step verification for my own important accounts and use a password manager.',
    'Devices charge in a shared space overnight.',
    'We know how to block and report in the apps my child uses.',
    'My child knows our family rule: "Tell us — you will not be in trouble."'
  ],

  /* Help lines in Japan (日本の相談窓口). Numbers/hours verified via official or organization pages; they can change. */
  jpHelp: [
    { id: 'e110', name: 'Police · Fire & ambulance', ja: '警察 110 ・ 消防/救急 119', tel: '110 / 119', hours: '24 hours', who: 'Immediate danger or any emergency.' },
    { id: 'childline', name: 'Childline', ja: 'チャイルドライン', tel: '0120-99-7777', hours: 'Daily 16:00–21:00 (closed Dec 29–Jan 3). Chat is also available.', who: 'Children up to age 18. Free and anonymous. Some mobile, kids\' phones and IP phones cannot connect.', url: 'https://childline.or.jp/' },
    { id: 'sos24', name: '24-hour children\'s SOS line (MEXT)', ja: '24時間子供SOSダイヤル', tel: '0120-0-78310', hours: '24 hours, every day', who: 'Bullying and other worries. Run by the Ministry of Education (MEXT).', url: 'https://www.mext.go.jp/a_menu/shotou/seitoshidou/06112211.html' },
    { id: 'jinken', name: 'Children\'s human rights hotline (Ministry of Justice)', ja: '子どもの人権110番', tel: '0120-007-110', hours: 'Weekdays 8:30–17:15', who: 'Bullying, abuse and other children\'s-rights problems. Free. An online human-rights consultation form is open 24 hours.', url: 'https://www.moj.go.jp/JINKEN/index_soudan.html' },
    { id: 'jidou189', name: 'Child abuse hotline "189"', ja: '児童相談所 虐待対応ダイヤル 189', tel: '189', hours: '24 hours, every day', who: 'If you suspect a child is being abused, or for parenting worries. Anonymous reports are possible. Some IP phones cannot connect.', url: 'https://www.mhlw.go.jp/189-ichihayaku/' },
    { id: 'police9110', name: 'Police consultation line', ja: '警察相談専用電話 #9110', tel: '#9110', hours: 'Hours differ by prefecture (some are weekday daytime only)', who: 'Non-emergency police advice, including online trouble and cyber-crime. For emergencies call 110.' },
    { id: 'heart8103', name: 'Police line for victims of sexual crimes', ja: '性犯罪被害相談電話（ハートさん）', tel: '#8103', hours: 'Differs by prefecture', who: 'Police consultation for sexual crimes, including image-based abuse.', url: 'https://www.npa.go.jp/hanzaihigai/portal/search/kensaku/seihigai/index.html' },
    { id: 'onestop', name: 'One-stop support centers for victims of sexual violence', ja: '性犯罪・性暴力被害者のためのワンストップ支援センター', tel: '#8891', hours: 'Differs by center', who: 'Medical, legal and counseling support in one place. Many centers accept anonymous consultations.', url: 'https://www.npa.go.jp/hanzaihigai/portal/search/kensaku/seihigai/index.html' },
    { id: 'ihaho', name: 'Illegal & harmful information consultation center (MIC)', ja: '違法・有害情報相談センター', tel: 'Online form', hours: 'Online', who: 'Advice on how to ask sites and services to remove harmful posts. It does not make removal requests on your behalf.', url: 'https://ihaho.jp/' },
    { id: 'npa-illegal', name: 'Reporting illegal online content (National Police Agency)', ja: '警察庁 インターネット上の違法情報・有害情報対策', tel: 'Online', hours: 'Online', who: 'Explains how to report illegal content, including child sexual abuse material, through the Internet Hotline Center.', url: 'https://www.npa.go.jp/bureau/cyber/countermeasures/illegal-info.html' },
    { id: 'kokusen188', name: 'Consumer hotline', ja: '消費者ホットライン 188', tel: '188', hours: 'Connects to your local consumer center; hours vary', who: 'Unexpected online-game or in-app charges and scams. A purchase made by a minor without a parent\'s consent can sometimes be cancelled, but not always.', url: 'https://www.kokusen.go.jp/news/data/n-20210812_2.html' },
    { id: 'tell', name: 'TELL Lifeline (English)', ja: 'TELL ライフライン（英語）', tel: '03-5774-0992', hours: 'About 9:00–23:00 daily; check TELL for current hours', who: 'Anonymous counseling in English for anyone living in Japan.', url: 'https://telljp.com/' }
  ],

  help: [
    { id: 'bully', label: 'Cyberbullying or mean messages', ico: '💬',
      jp: ['childline', 'sos24', 'jinken', 'ihaho'], steps: ['Stay calm, listen, and tell your child it is not their fault.', 'Don\'t reply or retaliate. Take screenshots as evidence.', 'Block the person and report the content in the app.', 'If classmates are involved, tell the school.', 'Watch for changes in mood, sleep or appetite and follow up.'],
      links: [['StopBullying.gov — report cyberbullying', 'https://www.stopbullying.gov/cyberbullying/how-to-report']] },
    { id: 'stranger', label: 'A stranger is contacting my child', ico: '🧑‍💻',
      jp: ['police9110', 'heart8103', 'npa-illegal', 'e110'], steps: ['Thank your child for telling you; stay calm and curious.', 'Save evidence (screenshots, usernames) before blocking.', 'Block and report the user in the app or game.', 'If the person asked for pictures, talked about sex, or asked to keep secrets, report to NCMEC\'s CyberTipline.', 'If your child is in immediate danger, call local emergency services (911 in the U.S.).'],
      links: [['NCMEC CyberTipline', 'https://report.cybertip.org/'], ['NetSmartz for families', 'https://www.missingkids.org/netsmartz/home']] },
    { id: 'sextortion', label: 'Someone is threatening or pressuring over private images', ico: '🚨',
      jp: ['heart8103', 'onestop', 'police9110', 'ihaho', 'e110'], steps: ['Tell your child they are not in trouble and are not alone. Sextortion is a crime and the blame sits with the person doing it.', 'Don\'t pay and don\'t send anything more. Stop responding.', 'Keep evidence (usernames, messages) and avoid deleting accounts before reporting.', 'Report to the NCMEC CyberTipline and call 1-800-THE-LOST (1-800-843-5678) for support.', 'NCMEC\'s Take It Down service can help remove explicit images of people who were under 18 when the image was taken.', 'Report to the platform and local police if appropriate.'],
      links: [['NCMEC: sextortion', 'https://www.missingkids.org/sextortion'], ['Take It Down', 'https://takeitdown.ncmec.org/'], ['CyberTipline', 'https://report.cybertip.org/']] },
    { id: 'scary', label: 'My child saw something scary or inappropriate', ico: '😟',
      jp: ['childline'], steps: ['Stay calm and thank your child for telling you.', 'Ask open questions: "What did you see? How did it feel?"', 'Reassure them that it is not their fault. Offer comfort and follow up in a few days.', 'Use filters, restricted modes and approved lists; report the content in the app.'],
      links: [['Common Sense Media — age ratings & reviews', 'https://www.commonsensemedia.org/'], ['Parents\' Ultimate Guides', 'https://www.commonsensemedia.org/parents-ultimate-guides']] },
    { id: 'scam', label: 'A scam, unexpected charge or strange link', ico: '💳',
      jp: ['kokusen188', 'police9110'], steps: ['Don\'t be angry. Scams fool adults all the time.', 'Change passwords on affected accounts and turn on two-step verification.', 'Contact the app store, card issuer or bank about charges.', 'Report scams in the U.S. at ReportFraud.ftc.gov.', 'Turn on purchase approval to prevent repeats.'],
      links: [['ReportFraud.ftc.gov', 'https://reportfraud.ftc.gov/']] },
    { id: 'fake', label: 'A fake or AI-made image of my child or a classmate', ico: '🖼️',
      jp: ['ihaho', 'police9110', 'heart8103'], steps: ['Save evidence (screenshots, links, usernames) without sharing the image further.', 'Report it to the platform and to the school if students are involved.', 'If the image is sexual or exploitative, report it to NCMEC\'s CyberTipline and see the Take It Down site for removal options.', 'Support your child: this is not their fault, and the people who made it are responsible.'],
      links: [['CyberTipline', 'https://report.cybertip.org/'], ['Take It Down', 'https://takeitdown.ncmec.org/']] },
    { id: 'crisis', label: 'My child seems very distressed or may be in danger', ico: '❤️‍🩹',
      jp: ['sos24', 'childline', 'tell', 'e110'], steps: ['Stay with them and listen without judgment.', 'In the U.S., call or text 988 (Suicide &amp; Crisis Lifeline) or call 911 for emergencies.', 'Contact your pediatrician or school counselor for ongoing support.', 'Outside the U.S., contact your local emergency number or health service.'],
      links: [['988 Lifeline', 'https://988lifeline.org/']] }
  ],

  challenges: [
    { t: 'Screen-free dinner', d: 'Phones and TVs off. Everyone shares one high and one low from the day.' },
    { t: 'Teach the teacher', d: 'Your child explains how a favorite app or game works. You ask questions and don\'t judge.' },
    { t: 'AI detective', d: 'Find three things around the house that use AI. Then three that definitely don\'t.' },
    { t: 'Fact-check Friday', d: 'Pick a surprising fact. Find it in two trusted sources (library book, museum site, encyclopedia).' },
    { t: 'Outside hour', d: 'One hour outdoors with no devices. Walk, bike, play, or explore a new park.' },
    { t: 'Privacy walk-through', d: 'Together, check privacy and chat settings in one favorite app. Celebrate what is already on.' },
    { t: 'Grown-up goes first', d: 'A parent picks one habit to improve (phone at dinner, bedtime scrolling) and tells the kids.' },
    { t: 'Kindness online', d: 'Send three kind messages to family or friends (with a grown-up\'s help).' }
  ],

  words: ['purple','turtle','rocket','banana','pencil','thunder','jelly','dragon','pickle','cloud','mango','otter','puzzle','comet','marble','whistle','pancake','tiger','maple','lantern','sparkle','robot','castle','button','pirate','cactus','panda','cookie','meadow','kite','fossil','glacier','wizard','pumpkin','walrus','bubble','canyon','donut','echo','falcon','giraffe','hammock','island','jungle','koala','lemon','muffin','nugget','orbit','penguin','quilt','rainbow','sailboat','tulip','umbrella','volcano','waffle','yodel','zebra','acorn'],

  /* kind: Pediatric & health | Government | Education & research | Non-profit | Independent reviewer | Company tool | International */
  sources: [
    { group: '🌱 Ages 3–5 (preschool & kindergarten)', id: 'early', tab: 'early', items: [
      { name: 'Guidelines on physical activity, sedentary behaviour and sleep for children under 5 (2019)', org: 'World Health Organization', kind: 'Pediatric & health', url: 'https://www.who.int/publications/i/item/9789241550536', note: 'For ages 3–4: no more than 1 hour of sedentary screen time a day (less is better), 10–13 hours of sleep including naps, and at least 180 minutes of physical activity with at least 60 minutes energetic.' },
      { name: 'Canadian 24-Hour Movement Guidelines for the Early Years (0–4)', org: 'CSEP', kind: 'Pediatric & health', url: 'https://csepguidelines.ca/guidelines/early-years/', note: 'Similar whole-day recommendations for sleep, movement and screens, with practical tips for caregivers.' },
      { name: 'Kids & Screen Time: 5 C\'s Questions for Toddlers & Preschoolers', org: 'American Academy of Pediatrics (HealthyChildren.org)', kind: 'Pediatric & health', url: 'https://www.healthychildren.org/English/family-life/Media/Pages/kids-and-screen-time-5-cs-questions-for-toddlers-and-preschoolers.aspx', also: ['balance'], note: 'The AAP\'s "5 Cs of media use" framework (child, content, calm, crowding out, communication) applied to young children. The AAP\'s earlier (2016) guidance for ages 2–5 suggested about 1 hour a day of high-quality programming and co-viewing.' },
      { name: 'Watch Together: Co-Viewing Media With Your Child', org: 'American Academy of Pediatrics (HealthyChildren.org)', kind: 'Pediatric & health', url: 'https://www.healthychildren.org/English/family-life/Media/Pages/watch-together.aspx', note: 'Why and how to watch, play and talk about media together.' },
      { name: 'Frequently using digital devices to soothe young children may backfire', org: 'Michigan Medicine (about Radesky et al., JAMA Pediatrics, 2023)', kind: 'Education & research', url: 'https://michiganmedicine.org/health-lab/frequently-using-digital-devices-soothe-young-children-may-backfire', note: 'Plain-language summary of a study of children ages 3–5. It found an association between frequent device calming and more emotional reactivity, not proof of cause.' },
      { name: 'Technology and Young Children: Preschoolers and Kindergartners', org: 'NAEYC (with the Fred Rogers Center)', kind: 'Education & research', url: 'https://www.naeyc.org/resources/topics/technology-and-media/preschoolers-and-kindergartners', note: 'NAEYC\'s guidance on technology for preschoolers and kindergartners, based on the joint position statement that treats technology as a tool to use intentionally and alongside adult relationships.' },
      { name: 'Screen Sense: research and resources', org: 'ZERO TO THREE', kind: 'Non-profit', url: 'https://www.zerotothree.org/screensense/', note: 'Non-profit guidance on screens for young children: quality and context over minutes, background TV, bedtime and co-use.' }
    ]},
    { group: '🤖 AI in education & life', id: 'ai', tab: 'ai', items: [
      { name: 'Statement from the IB about ChatGPT and artificial intelligence in assessment and education', org: 'International Baccalaureate (IB)', kind: 'Education & research', url: 'https://ibo.org/news/news-about-the-ib/statement-from-the-ib-about-chatgpt-and-artificial-intelligence-in-assessment-and-education/', note: 'The IB will not ban AI tools. Work produced by AI, even in part, is not the student\'s own, and AI-generated content in assessed work must be credited in the text and in the bibliography. Written mainly for IB assessment.' },
      { name: 'Artificial intelligence (AI) in learning, teaching, and assessment', org: 'International Baccalaureate (IB)', kind: 'Education & research', url: 'https://www.ibo.org/programmes/artificial-intelligence-ai-in-learning-teaching-and-assessment/', note: 'The IB\'s main page on AI: its position, the academic integrity policy\'s guidance on AI tools, and resources for schools.' },
      { name: 'Artificial intelligence (AI) tools: questions and concerns', org: 'International Baccalaureate (IB)', kind: 'Education & research', url: 'https://www.ibo.org/globalassets/new-structure/programmes/shared-resources/pdfs/artificial-intelligence-questions-and-concerns-en.pdf', note: 'Questions and answers from the IB about using AI tools in IB programmes.' },
      { name: 'AI4K12 — Five Big Ideas in AI', org: 'AAAI & CSTA', kind: 'Education & research', url: 'https://ai4k12.org/', note: 'Widely used framework for what students should understand about AI at each grade band.' },
      { name: 'Guidance for generative AI in education and research (2023)', org: 'UNESCO', kind: 'International', url: 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research', note: 'Human-centered approach, data privacy, teacher role, and age-appropriate use.' },
      { name: 'Artificial Intelligence and the Future of Teaching and Learning (2023)', org: 'U.S. Dept. of Education, Office of Educational Technology', kind: 'Government', url: 'https://www.ed.gov/sites/ed/files/documents/ai-report/ai-report.pdf', note: 'Emphasizes keeping humans in the loop, equity, and safety.' },
      { name: 'AI Literacy Framework for primary and secondary education', org: 'European Commission & OECD', kind: 'International', url: 'https://ailiteracyframework.org/', note: 'Empowering Learners for the Age of AI: an international framework of AI literacy competences for primary and secondary schools (final version published in 2026).' },
      { name: 'AI ratings and risk assessments', org: 'Common Sense Media (Youth AI Safety Institute)', kind: 'Independent reviewer', url: 'https://institute.commonsensemedia.org/risk-assessments', also: ['early'], note: 'Independent reviews, including their assessment that AI companion apps are not suitable for under-18s.' },
      { name: 'Parents\' Ultimate Guide to Generative AI', org: 'Common Sense Media', kind: 'Independent reviewer', url: 'https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-generative-ai', also: ['early'], note: 'A plain-language parent guide to generative AI and chatbots.' },
      { name: 'Parents\' Ultimate Guide to AI Companions and Relationships', org: 'Common Sense Media', kind: 'Independent reviewer', url: 'https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-ai-companions-and-relationships', note: 'Recommends that kids and teens under 18 not use AI companions, and what to do if they already do.' }
    ]},
    { group: '⚖️ Media balance', id: 'balance', tab: 'balance', items: [
      { name: 'Family Media Plan', org: 'American Academy of Pediatrics (HealthyChildren.org)', kind: 'Pediatric & health', url: 'https://www.healthychildren.org/MediaUsePlan', also: ['early'], note: 'Free tool to build a personalized plan for media-free times and zones.' },
      { name: 'Digital Ecosystems, Children, and Adolescents (2026) — explained for parents', org: 'American Academy of Pediatrics', kind: 'Pediatric & health', url: 'https://www.healthychildren.org/English/family-life/Media/Pages/Helping-Kids-Thrive-in-a-Digital-World-AAP-Policy-Explained.aspx', also: ['early', 'ai'], note: 'The AAP\'s 2026 policy statement moves beyond screen-time limits toward platform design, content and context.' },
      { name: 'Canadian 24-Hour Movement Guidelines for Children (5–11)', org: 'CSEP', kind: 'Pediatric & health', url: 'https://csepguidelines.ca/guidelines/children-youth/', note: 'Whole-day guidance on sleep, activity and recreational screen time (no more than about 2 hours).' },
      { name: 'Australian 24-Hour Movement Guidelines for children and young people (5–17)', org: 'Australian Government Department of Health', kind: 'Government', url: 'https://www.health.gov.au/topics/physical-activity/24-hour-movement-guidelines-for-all-australians', note: 'Whole-day guidance that includes limiting sedentary recreational screen time to no more than 2 hours a day, and avoiding screens before bed.' },
      { name: 'Physical activity and sedentary behavior guidelines (2020)', org: 'World Health Organization', kind: 'Pediatric & health', url: 'https://www.who.int/publications/i/item/9789240015128', note: 'Global guidance on daily physical activity for children and adolescents.' },
      { name: 'Recommended amount of sleep for pediatric populations: AASM consensus statement (2016)', org: 'American Academy of Sleep Medicine', kind: 'Pediatric & health', url: 'https://aasm.org/aasm-publishes-consensus-statement-for-pediatric-sleep-durations/', also: ['early'], note: 'Consensus statement: 10–13 hours (naps included) for ages 3–5 and 9–12 hours for ages 6–12.' },
      { name: 'The Common Sense Census: Media Use by Tweens and Teens (2019)', org: 'Common Sense Media', kind: 'Independent reviewer', url: 'https://www.commonsensemedia.org/research/the-common-sense-census-media-use-by-tweens-and-teens-2019', note: 'Large national survey: 8–12-year-olds averaged about 4 h 44 min of entertainment screen media a day.' },
      { name: 'Social Media and Youth Mental Health: Surgeon General\'s Advisory (2023)', org: 'U.S. Surgeon General', kind: 'Government', url: 'https://www.hhs.gov/surgeongeneral/reports-and-publications/youth-mental-health/social-media/index.html', note: 'Summarizes risks and benefits and offers recommendations for families.' },
      { name: 'What\'s the best way to manage screen time?', org: 'Common Sense Media', kind: 'Independent reviewer', url: 'https://www.commonsensemedia.org/articles/whats-the-best-way-to-manage-screen-time', note: 'Family media agreements, device-free times and zones, and ongoing conversation over relying on technical tools alone.' },
      { name: 'Parents\' Ultimate Guide to Your 7- to 9-Year-Old\'s Digital World', org: 'Common Sense Media', kind: 'Independent reviewer', url: 'https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-your-7-to-9-year-olds-digital-world', also: ['safety'], note: 'What kids this age are doing with games and video, and how parents can help.' },
      { name: 'Parents\' Ultimate Guide to Your 10- to 12-Year-Old\'s Digital World', org: 'Common Sense Media', kind: 'Independent reviewer', url: 'https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-your-10-to-12-year-olds-digital-world', also: ['safety'], note: 'The move to more complex and social games, and how to use parental controls inside specific games.' }
    ]},
    { group: '🛡️ Internet safety', id: 'safety', tab: 'safety', items: [
      { name: 'Parents\' Ultimate Guides: Apps, Devices & Online Safety', org: 'Common Sense Media', kind: 'Independent reviewer', url: 'https://www.commonsensemedia.org/parents-ultimate-guides', also: ['ai', 'balance', 'early'], note: 'Step-by-step parent guides to popular apps, games and devices, with how-to guides for parental controls and safety settings.' },
      { name: 'Parents\' Ultimate Guide to Parental Controls', org: 'Common Sense Media', kind: 'Independent reviewer', url: 'https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-parental-controls', also: ['balance', 'early'], note: 'How to choose and set up parental controls, with the reminder that controls help but a family conversation matters most.' },
      { name: 'Parents\' Ultimate Guide to YouTube', org: 'Common Sense Media', kind: 'Independent reviewer', url: 'https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-youtube', also: ['early'], note: 'What parents should know about YouTube and YouTube Kids, Restricted Mode and supervised accounts.' },
      { name: 'Parents\' Ultimate Guide to Roblox', org: 'Common Sense Media', kind: 'Independent reviewer', url: 'https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-roblox', note: 'Safety, spending and chat concerns for the Roblox game platform, plus how to use its parental controls.' },
      { name: 'NetSmartz — safety education for kids and families', org: 'NCMEC', kind: 'Non-profit', url: 'https://www.missingkids.org/netsmartz/home', also: ['early'], note: 'Videos, games and tip sheets on online safety, including age-based resources.' },
      { name: 'Sextortion: what parents should know', org: 'NCMEC', kind: 'Non-profit', url: 'https://www.missingkids.org/sextortion', note: 'Parent tip sheets and reporting steps.' },
      { name: 'Take It Down', org: 'NCMEC', kind: 'Non-profit', url: 'https://takeitdown.ncmec.org/', note: 'Free service to help remove explicit images of people who were under 18 when the image was taken.' },
      { name: 'CyberTipline', org: 'NCMEC', kind: 'Non-profit', url: 'https://report.cybertip.org/', note: 'Report online exploitation of children.' },
      { name: 'Prevent Cyberbullying', org: 'StopBullying.gov (U.S. HHS)', kind: 'Government', url: 'https://www.stopbullying.gov/cyberbullying/prevention', note: 'Warning signs, family rules and how to respond. The site also explains how to report cyberbullying.' },
      { name: 'Protecting your child\'s privacy online', org: 'U.S. Federal Trade Commission', kind: 'Government', url: 'https://consumer.ftc.gov/articles/protecting-your-childs-privacy-online', also: ['early'], note: 'Plain-language explanation of COPPA and privacy tips.' },
      { name: 'ReportFraud.ftc.gov', org: 'U.S. Federal Trade Commission', kind: 'Government', url: 'https://reportfraud.ftc.gov/', note: 'Report scams, unexpected charges and fraud (U.S.).' },
      { name: '988 Suicide & Crisis Lifeline', org: '988 Lifeline (U.S.)', kind: 'Government', url: 'https://988lifeline.org/', note: 'Call or text 988 in the U.S. if a child or family member is in crisis. For emergencies, call 911.' },
      { name: 'Parent guides to apps, games and social media', org: 'ConnectSafely', kind: 'Non-profit', url: 'https://connectsafely.org/parentguides/', note: 'Non-profit guides for popular platforms and safety settings.' },
      { name: 'Age ratings and reviews', org: 'Common Sense Media', kind: 'Independent reviewer', url: 'https://www.commonsensemedia.org/', also: ['early'], note: 'Independent reviews of movies, games, apps and more by age.' }
    ]},
    { group: '🔧 Parental-control tools', id: 'tools', tab: null, items: [
      { name: 'Apple Family Sharing and Screen Time', org: 'Apple', kind: 'Company tool', url: 'https://www.apple.com/families/', note: 'Built-in controls for content ratings, downloads, purchases and time limits on Apple devices. These are company tools, not research sources.' },
      { name: 'Google Family Link', org: 'Google', kind: 'Company tool', url: 'https://families.google/familylink/', note: 'Supervision tools for Android devices and Google accounts, including app approval and screen-time settings.' },
      { name: 'Microsoft Family Safety', org: 'Microsoft', kind: 'Company tool', url: 'https://www.microsoft.com/en-us/microsoft-365/family-safety', note: 'Content filters, screen-time limits and activity reports for Windows and Xbox.' }
    ]},
    { group: '🇯🇵 Japan (日本の専門家・省庁)', id: 'japan', tab: 'japan', items: [
      { name: '「子どもとメディア」の問題に対する提言 (2004)', org: 'Japan Pediatric Association 日本小児科医会', kind: 'Pediatric & health', url: 'https://www.jpa-web.org/dcms_media/other/ktmedia_teigenzenbun.pdf', also: ['early', 'balance'], note: 'Five recommendations on children and media: avoid TV/video up to age 2, none during feeding or meals, about 2 hours a day for all media (about 30 minutes for video games), no TV or PC in children\'s rooms. Older, time-based guidance.' },
      { name: '子どもとメディア委員会', org: 'Japan Pediatric Association 日本小児科医会', kind: 'Pediatric & health', url: 'https://www.jpa-web.org/about/organization-chart/cm-committee/', also: ['early', 'balance'], note: 'The committee\'s page with its campaigns, posters and leaflets for parents.' },
      { name: '健康づくりのための睡眠ガイド2023', org: 'Ministry of Health, Labour and Welfare 厚生労働省', kind: 'Government', url: 'https://www.mhlw.go.jp/content/001305530.pdf', also: ['balance', 'early'], note: 'Japan\'s national sleep guide. For children: elementary school 9–12 hours, junior/senior high school 8–10 hours. Official materials also cite the American Academy of Sleep Medicine ranges for younger ages (ages 3–5: 10–13 hours).' },
      { name: '健康づくりのための身体活動・運動ガイド2023 (e-ヘルスネット)', org: 'Ministry of Health, Labour and Welfare 厚生労働省', kind: 'Government', url: 'https://kennet.mhlw.go.jp/information/information/exercise/s-00-003.html', also: ['balance'], note: 'Children: moderate-or-harder activity for an average of at least 60 minutes a day, and reduce sitting and recreational screen time (no numeric limit given).' },
      { name: '幼児期運動指針', org: 'Ministry of Education (MEXT) 文部科学省', kind: 'Government', url: 'https://www.mext.go.jp/a_menu/sports/undousisin/index.htm', also: ['early', 'balance'], note: 'Preschoolers should move their bodies, mainly through play, for at least 60 minutes in total each day (2012). Includes a guidebook and leaflet for parents.' },
      { name: '生成AIの利用について（初等中等教育段階における生成AIの利活用に関するガイドライン Ver.2.0）', org: 'Ministry of Education (MEXT) 文部科学省', kind: 'Government', url: 'https://www.mext.go.jp/a_menu/other/mext_02412.html', also: ['ai'], note: 'Interim guidelines (July 2023), revised as Ver. 2.0 (December 2024). Human-centered use and building information literacy; students\' use should consider developmental stage and risks. School and board policies vary.' },
      { name: '青少年のインターネット利用環境実態調査', org: 'Children and Families Agency こども家庭庁', kind: 'Government', url: 'https://www.cfa.go.jp/policies/youth-kankyou/internet_research/details', also: ['safety', 'early'], note: 'Annual national survey of how children use the internet and what parents do (filtering, family rules).' },
      { name: '普及啓発コンテンツ（保護者向け）', org: 'Children and Families Agency こども家庭庁', kind: 'Government', url: 'https://www.cfa.go.jp/policies/youth-kankyou/internet_use_keihatu', also: ['safety'], note: 'Leaflets and materials for parents, including for parents of younger children.' },
      { name: 'e-ネットキャラバン', org: 'FMMC (supported by MIC and MEXT) 総務省・文部科学省', kind: 'Government', url: 'https://www3.fmmc.or.jp/e-netcaravan/', also: ['safety'], note: 'Free internet-safety talks for children, parents and teachers. Schools and groups apply for a lecturer (minimum 15 participants).' },
      { name: 'オンラインゲームの高額課金に関する注意（国民生活センター, 2021）', org: 'National Consumer Affairs Center of Japan 国民生活センター', kind: 'Government', url: 'https://www.kokusen.go.jp/news/data/n-20210812_2.html', also: ['safety'], note: 'Cases of children running up large charges on a parent\'s card, with prevention tips and the consumer hotline 188.' },
      { name: 'チャイルドライン', org: 'Childline Support Center チャイルドライン支援センター', kind: 'Non-profit', url: 'https://childline.or.jp/', also: ['safety'], note: 'Free, anonymous phone and chat line for children up to age 18: 0120-99-7777.' },
      { name: '24時間子供SOSダイヤル', org: 'Ministry of Education (MEXT) 文部科学省', kind: 'Government', url: 'https://www.mext.go.jp/a_menu/shotou/seitoshidou/06112211.html', also: ['safety'], note: 'Round-the-clock consultation for bullying and other worries: 0120-0-78310.' },
      { name: '人権相談（子どもの人権110番・インターネット人権相談）', org: 'Ministry of Justice 法務省', kind: 'Government', url: 'https://www.moj.go.jp/JINKEN/index_soudan.html', also: ['safety'], note: 'Children\'s human-rights hotline 0120-007-110 (weekdays) and a 24-hour online consultation form.' },
      { name: '児童虐待防止（児童相談所 虐待対応ダイヤル 189）', org: 'Ministry of Health, Labour and Welfare 厚生労働省', kind: 'Government', url: 'https://www.mhlw.go.jp/189-ichihayaku/', note: 'The 189 hotline connects to your local child consultation center, 24 hours a day.' },
      { name: '違法・有害情報相談センター', org: 'Ministry of Internal Affairs and Communications 総務省', kind: 'Government', url: 'https://ihaho.jp/', also: ['safety'], note: 'Advice on asking sites and services to remove harmful posts. Does not make removal requests for you.' },
      { name: '性犯罪被害に関する相談窓口（#8103・#8891）', org: 'National Police Agency 警察庁', kind: 'Government', url: 'https://www.npa.go.jp/hanzaihigai/portal/search/kensaku/seihigai/index.html', also: ['safety'], note: 'Portal for victims of sexual crimes: the police line #8103 and one-stop support centers #8891.' },
      { name: 'インターネット上の違法情報・有害情報対策', org: 'National Police Agency 警察庁', kind: 'Government', url: 'https://www.npa.go.jp/bureau/cyber/countermeasures/illegal-info.html', also: ['safety'], note: 'How to report illegal content, including child sexual abuse material.' },
      { name: 'TELL Lifeline (English counseling in Japan)', org: 'TELL', kind: 'Non-profit', url: 'https://telljp.com/', note: 'Anonymous English-language counseling: 03-5774-0992 (check current hours).' }
    ]},
    { group: '🌍 Outside the U.S.', id: 'world', tab: null, items: [
      { name: 'eSafety Commissioner — parents', org: 'Australia', kind: 'International', url: 'https://www.esafety.gov.au/parents', note: 'Advice, reporting tools and age-based guides.' },
      { name: 'MediaSmarts', org: 'Canada', kind: 'International', url: 'https://mediasmarts.ca/parents', note: 'Digital and media literacy resources for families and schools.' },
      { name: 'Internet Matters', org: 'United Kingdom', kind: 'International', url: 'https://www.internetmatters.org/advice/by-age/', note: 'Practical parent guides by age and device.' }
    ]}
  ]
};
