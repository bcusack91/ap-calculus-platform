export const asvabMcSimpleMachinesPart2Data = {
  topicSlug: 'asvab-mc-simple-machines',
  sections: [
    {
      id: 'msm2-intro',
      type: 'text' as const,
      content: `# 🏗️ Levers, Pulleys, Inclined Planes and Screws

**Part 2 of 7 — Levers**

### Three parts, three classes

Every lever has a **fulcrum** (the pivot), a **load** (what you move) and an **effort** (where you push or pull). The **class** depends on which one is in the middle.

| Class | In the middle | Examples | MA |
|:---|:---|:---|:---|
| **1st class** | **fulcrum** | seesaw, crowbar, pry bar, pliers, scissors | can be more or less than 1 |
| **2nd class** | **load** | wheelbarrow, nutcracker, bottle opener, a door on its hinges | always more than 1 |
| **3rd class** | **effort** | tweezers, broom, fishing rod, shovel used with one hand near the blade, your forearm | always less than 1 (gains speed and reach) |

**Memory hook "F-L-E, 1-2-3":** the thing in the middle is **F**ulcrum for 1st class, **L**oad for 2nd, **E**ffort for 3rd.`
    },
    {
      id: 'msm2-classes-fig',
      type: 'figure' as const,
      content: 'In each lever, look for what sits **between** the other two.',
      figure: {
        svg: '<svg viewBox="0 0 320 292" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g font-size="12" fill="currentColor"><text x="10" y="14">1st class: fulcrum in the middle</text><text x="10" y="109">2nd class: load in the middle</text><text x="10" y="204">3rd class: effort in the middle</text></g><g stroke="currentColor" stroke-width="5"><line x1="40" y1="56" x2="290" y2="56"/><line x1="40" y1="151" x2="290" y2="151"/><line x1="40" y1="246" x2="290" y2="246"/></g><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="130,59 120,78 140,78"/><polygon points="44,154 34,173 54,173"/><polygon points="44,249 34,268 54,268"/><rect x="44" y="30" width="28" height="24"/><rect x="150" y="125" width="28" height="24"/><rect x="258" y="220" width="28" height="24"/></g><g class="fig-accent"><line x1="276" y1="24" x2="276" y2="44" stroke="currentColor" stroke-width="3"/><polygon points="276,52 270,40 282,40" fill="currentColor"/><line x1="276" y1="177" x2="276" y2="165" stroke="currentColor" stroke-width="3"/><polygon points="276,155 270,167 282,167" fill="currentColor"/><line x1="140" y1="272" x2="140" y2="260" stroke="currentColor" stroke-width="3"/><polygon points="140,250 134,262 146,262" fill="currentColor"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="58" y="26">load</text><text x="130" y="92">fulcrum</text><text x="276" y="20">effort</text><text x="164" y="121">load</text><text x="44" y="187">fulcrum</text><text x="276" y="190">effort</text><text x="272" y="216">load</text><text x="44" y="282">fulcrum</text><text x="168" y="270">effort</text></g></svg>',
        alt: 'Three levers. First class: load on the left end, fulcrum under the bar between them, effort pushing down on the right end. Second class: fulcrum at the left end, load in the middle, effort lifting up at the right end. Third class: fulcrum at the left end, effort lifting up in the middle, load at the right end.',
        caption: 'Figure 1. The three classes of lever.'
      }
    },
    {
      id: 'msm2-math',
      type: 'text' as const,
      content: `## The lever rule

A lever balances when the turning effect on each side of the fulcrum is equal:

$$\\text{effort} \\times \\text{effort arm} = \\text{load} \\times \\text{load arm}$$

Each **arm** is the distance from the **fulcrum** to where that force acts. Always measure from the fulcrum, not from the end of the bar.

$$\\text{MA} = \\frac{\\text{effort arm}}{\\text{load arm}}$$

**Worked example (1st class).** A $5$-foot pry bar rests on a fulcrum $1$ foot from a $200$-lb rock. The effort arm is $5 - 1 = 4$ ft.

$$\\text{effort} \\times 4 = 200 \\times 1 \\quad \\Rightarrow \\quad \\text{effort} = 50 \\text{ lb}, \\qquad \\text{MA} = \\frac{4}{1} = 4$$

**Worked example (seesaw).** A $50$-lb child sits $6$ ft from the center. Where must a $75$-lb child sit to balance? $75 \\times d = 50 \\times 6 = 300$, so $d = 4$ ft. The **heavier** person sits **closer** to the fulcrum.

**Several weights on one side:** add up each weight × its distance on that side. The side with the bigger total goes **down**.

**Moving the fulcrum** toward the load makes the load arm shorter and the effort arm longer, so the effort needed **drops**.`
    },
    {
      id: 'msm2-bar-input',
      type: 'input-boxes' as const,
      content: `**Pry bar.** ✍️ Use the figure.

An $8$-foot bar lifts a $120$-lb load at one end. The fulcrum is $2$ feet from the load, so the effort is applied $6$ feet from the fulcrum.

**1)** The effort needed to balance the load, in pounds (number only):

**2)** The mechanical advantage of this lever (number only):`,
      figure: {
        svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="36" y1="92" x2="284" y2="92" stroke="currentColor" stroke-width="6"/><polygon points="100,96 88,120 112,120" fill="none" stroke="currentColor" stroke-width="2"/><line x1="70" y1="120" x2="130" y2="120" stroke="currentColor" stroke-width="2"/><rect x="24" y="58" width="32" height="30" fill="none" stroke="currentColor" stroke-width="2"/><text x="40" y="52" font-size="12" fill="currentColor" text-anchor="middle">120 lb</text><g class="fig-accent"><line x1="280" y1="40" x2="280" y2="78" stroke="currentColor" stroke-width="3"/><polygon points="280,88 273,76 287,76" fill="currentColor"/><text x="280" y="32" font-size="12" fill="currentColor" text-anchor="middle">effort</text></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="40" y1="140" x2="100" y2="140"/><line x1="40" y1="134" x2="40" y2="146"/><line x1="100" y1="134" x2="100" y2="146"/><line x1="100" y1="140" x2="280" y2="140"/><line x1="280" y1="134" x2="280" y2="146"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="70" y="158">2 ft</text><text x="190" y="158">6 ft</text></g></svg>',
        alt: 'A bar resting on a fulcrum. A 120-pound load sits on the left end, 2 feet from the fulcrum. An effort arrow pushes down on the right end, 6 feet from the fulcrum.',
        caption: 'Figure 2. A first-class lever.'
      },
      exercise: {
        boxes: 2,
        correctAnswers: ['40', '3'],
        hint1: 'effort × 6 = 120 × 2',
        hint2: 'MA = effort arm ÷ load arm.',
        hint3: '6 ÷ 2',
        explanation: '(1) $\\text{effort} \\times 6 = 120 \\times 2 = 240$, so effort $= 40$ lb. (2) $\\text{MA} = 6 \\div 2 = 3$ (check: $120 \\div 40 = 3$).'
      }
    },
    {
      id: 'msm2-seesaw-input',
      type: 'input-boxes' as const,
      content: `**Balance the beam.** ✍️ Use the figure.

A $60$-lb box sits $4$ feet to the left of the fulcrum. An $80$-lb box goes on the right side.

**1)** How far to the right of the fulcrum must the $80$-lb box sit for the beam to balance, in feet? (number only)

**2)** If a $120$-lb box were used on the right instead, how far from the fulcrum would it have to sit, in feet? (number only)`,
      figure: {
        svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="26" y1="92" x2="294" y2="92" stroke="currentColor" stroke-width="6"/><polygon points="160,96 148,120 172,120" fill="none" stroke="currentColor" stroke-width="2"/><line x1="130" y1="120" x2="190" y2="120" stroke="currentColor" stroke-width="2"/><rect x="24" y="60" width="32" height="28" fill="none" stroke="currentColor" stroke-width="2"/><text x="40" y="54" font-size="12" fill="currentColor" text-anchor="middle">60 lb</text><g class="fig-accent"><rect x="234" y="56" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"/><text x="250" y="50" font-size="12" fill="currentColor" text-anchor="middle">80 lb</text></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="40" y1="140" x2="160" y2="140"/><line x1="40" y1="134" x2="40" y2="146"/><line x1="160" y1="134" x2="160" y2="146"/><line x1="160" y1="140" x2="250" y2="140"/><line x1="250" y1="134" x2="250" y2="146"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="100" y="158">4 ft</text><text x="205" y="158">? ft</text></g></svg>',
        alt: 'A beam balanced on a fulcrum at its center. A 60-pound box sits 4 feet to the left of the fulcrum. An 80-pound box sits an unknown distance to the right of the fulcrum.',
        caption: 'Figure 3. Where must the 80-lb box go?'
      },
      exercise: {
        boxes: 2,
        correctAnswers: ['3', '2'],
        hint1: '80 × d = 60 × 4',
        hint2: '120 × d = 240',
        hint3: 'Heavier weights balance closer to the fulcrum.',
        explanation: '(1) $80 \\times d = 60 \\times 4 = 240$, so $d = 3$ ft: the heavier box sits closer. (2) $120 \\times d = 240$, so $d = 2$ ft. The heavier the box, the closer to the fulcrum it must sit.'
      }
    },
    {
      id: 'msm2-wheelbarrow',
      type: 'multiple-choice' as const,
      content: '**The wheelbarrow.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><circle cx="60" cy="140" r="22" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="140" r="3" fill="currentColor"/><line x1="60" y1="140" x2="282" y2="112" stroke="currentColor" stroke-width="4"/><polygon points="80,128 76,92 196,92 188,120" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-accent-2"><circle cx="132" cy="110" r="4" fill="currentColor"/><line x1="132" y1="114" x2="132" y2="140" stroke="currentColor" stroke-width="3"/><polygon points="132,150 126,138 138,138" fill="currentColor"/><text x="132" y="84" font-size="12" fill="currentColor" text-anchor="middle">150-lb load</text></g><g class="fig-accent"><line x1="282" y1="150" x2="282" y2="124" stroke="currentColor" stroke-width="3"/><polygon points="282,114 276,126 288,126" fill="currentColor"/><text x="282" y="164" font-size="12" fill="currentColor" text-anchor="middle">effort</text></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="60" y1="176" x2="132" y2="176"/><line x1="60" y1="171" x2="60" y2="181"/><line x1="132" y1="171" x2="132" y2="181"/><line x1="60" y1="192" x2="282" y2="192"/><line x1="60" y1="187" x2="60" y2="197"/><line x1="282" y1="187" x2="282" y2="197"/></g><g font-size="11" fill="currentColor"><text x="138" y="180">1.5 ft</text><text x="190" y="188">4.5 ft</text></g></svg>',
        alt: 'A wheelbarrow seen from the side. The wheel axle is the fulcrum. The 150-pound load acts 1.5 feet from the axle, and the handles, where the effort lifts upward, are 4.5 feet from the axle.',
        caption: 'Figure 4. A loaded wheelbarrow.'
      },
      exercise: {
        questions: [
          {
            question: 'In the wheelbarrow, the axle is the fulcrum. The $150$-lb load acts $1.5$ ft from the axle and you lift the handles $4.5$ ft from the axle. What lift is needed, and what class of lever is this?',
            options: ['50 lb; a second-class lever', '50 lb; a first-class lever', '450 lb; a second-class lever', '100 lb; a third-class lever'],
            correctAnswer: 0,
            explanation: 'effort × $4.5$ = $150 \\times 1.5 = 225$, so effort $= 50$ lb. The load sits between the fulcrum (axle) and the effort (handles), which makes it a second-class lever. $450$ lb comes from multiplying instead of dividing.'
          }
        ]
      }
    },
    {
      id: 'msm2-tip',
      type: 'multiple-choice' as const,
      content: '**Which way does it turn?** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="26" y1="92" x2="294" y2="92" stroke="currentColor" stroke-width="6"/><polygon points="160,96 148,120 172,120" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2" fill="none"><rect x="26" y="66" width="28" height="22"/><rect x="86" y="62" width="28" height="26"/><rect x="184" y="56" width="32" height="32"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="40" y="60">10 lb</text><text x="100" y="56">20 lb</text><text x="200" y="50">40 lb</text></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="40" y1="134" x2="160" y2="134"/><line x1="100" y1="129" x2="100" y2="139"/><line x1="40" y1="129" x2="40" y2="139"/><line x1="160" y1="129" x2="160" y2="139"/><line x1="160" y1="134" x2="200" y2="134"/><line x1="200" y1="129" x2="200" y2="139"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="70" y="152">3 ft</text><text x="130" y="152">3 ft</text><text x="180" y="152">2 ft</text></g></svg>',
        alt: 'A beam on a central fulcrum. On the left, a 20-pound box sits 3 feet from the fulcrum and a 10-pound box sits 6 feet from the fulcrum. On the right, a 40-pound box sits 2 feet from the fulcrum.',
        caption: 'Figure 5. Three boxes on a beam.'
      },
      exercise: {
        questions: [
          {
            question: 'On the left of the fulcrum, a $20$-lb box sits $3$ ft out and a $10$-lb box sits $6$ ft out. On the right, a $40$-lb box sits $2$ ft out. What happens?',
            options: ['The left side goes down', 'The right side goes down', 'The beam stays balanced', 'It depends on the beam\'s length'],
            correctAnswer: 0,
            explanation: 'Left: $20 \\times 3 + 10 \\times 6 = 60 + 60 = 120$. Right: $40 \\times 2 = 80$. The left side has the larger turning effect, so it goes down. Comparing weights alone ($30$ lb vs. $40$ lb) gives the wrong answer.'
          }
        ]
      }
    },
    {
      id: 'msm2-dd',
      type: 'dropdown-select' as const,
      content: '**Name the class.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A claw hammer pulling a nail (the head rocks on the board):',
            options: ['1st class', '2nd class', '3rd class', 'not a lever'],
            correctAnswer: 0
          },
          {
            label: 'A nutcracker (hinge at one end, nut in the middle, hand at the other end):',
            options: ['2nd class', '1st class', '3rd class', 'not a lever'],
            correctAnswer: 0
          },
          {
            label: 'Tweezers (pinched in the middle, tips at the far end):',
            options: ['3rd class', '1st class', '2nd class', 'not a lever'],
            correctAnswer: 0
          },
          {
            label: 'A lever that always has an MA less than 1:',
            options: ['3rd class', '2nd class', '1st class', 'every class'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['1st class', '2nd class', '3rd class', '3rd class'],
        hint1: 'The hammer head is the fulcrum, between your hand and the nail.',
        hint2: 'Load in the middle = 2nd class.',
        hint3: 'Effort in the middle = 3rd class, which trades force for reach.',
        explanation: 'A claw hammer pivots on its head with the fulcrum between the handle and the nail (1st class). A nutcracker has the load in the middle (2nd class). Tweezers have the effort in the middle (3rd class), and a 3rd-class lever\'s effort arm is always shorter than its load arm, so its MA is always below 1.'
      }
    },
    {
      id: 'msm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **F-L-E, 1-2-3:** fulcrum, load or effort in the middle makes a 1st-, 2nd- or 3rd-class lever
- **effort × effort arm = load × load arm**, with arms measured **from the fulcrum**
- **MA = effort arm ÷ load arm**; 3rd-class levers always have MA below 1
- Heavier weights balance **closer** to the fulcrum
- With several weights, add weight × distance on each side; the bigger total goes down

> **Up Next:** Part 3 — pulleys and how to count the ropes that hold the load.`
    }
  ]
};
