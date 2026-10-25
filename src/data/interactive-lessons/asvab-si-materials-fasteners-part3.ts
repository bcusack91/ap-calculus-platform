export const asvabSiMaterialsFastenersPart3Data = {
  topicSlug: 'asvab-si-materials-fasteners',
  sections: [
    {
      id: 'simf3-intro',
      type: 'text' as const,
      content: `# 🔩 Materials, Fasteners and Shop Processes

**Part 3 of 7 — Bolts, Nuts, Washers, Rivets and Threads**

### Bolts: clamp the parts between a head and a nut

| Bolt | Look for | Used for |
|:---|:---|:---|
| **Hex (machine) bolt** | six-sided head | metal parts, machinery, vehicles; turned with a wrench |
| **Carriage bolt** | smooth **domed** head with a **square neck** under it | wood: the square neck bites into the wood so the bolt **cannot spin** while you tighten the nut, and the smooth head leaves nothing to grab |
| **Toggle bolt** | spring-loaded **wings** that fold, then open | **hollow walls** (drywall, plaster): the wings pop open behind the wall and spread the load |
| **Anchor bolt** | J- or L-shaped end set in concrete | holding a wooden sill plate or a machine base to concrete |
| **Eye bolt / U-bolt** | ring or U shape | lifting points, clamping pipe or round stock |

**Wall anchors** (plastic sleeves, expansion anchors, molly bolts) work like toggle bolts on a smaller scale: they expand inside a drilled hole so a screw holds in drywall, masonry or concrete.

**Worked example.** A heavy mirror must hang on a drywall wall where there is no stud behind it. A plain screw would pull out of the soft gypsum. A **toggle bolt** opens its wings behind the drywall and spreads the weight over a large area.`
    },
    {
      id: 'simf3-bolts-fig',
      type: 'multiple-choice' as const,
      content: '**Four bolts.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M34 36 Q50 14 66 36 Z"/><rect x="43" y="36" width="14" height="14"/><rect x="45" y="50" width="10" height="104"/><rect x="109" y="22" width="32" height="16"/><line x1="119" y1="22" x2="119" y2="38"/><line x1="131" y1="22" x2="131" y2="38"/><rect x="120" y="38" width="10" height="116"/><path d="M184 34 Q200 20 216 34 Z"/><rect x="196" y="34" width="8" height="80"/><polygon points="200,112 170,140 176,146 200,122"/><polygon points="200,112 230,140 224,146 200,122"/><circle cx="275" cy="32" r="14"/><rect x="270" y="46" width="10" height="108"/></g><g stroke="currentColor" stroke-width="1.2"><line x1="45" y1="110" x2="55" y2="116"/><line x1="45" y1="122" x2="55" y2="128"/><line x1="45" y1="134" x2="55" y2="140"/><line x1="120" y1="110" x2="130" y2="116"/><line x1="120" y1="122" x2="130" y2="128"/><line x1="120" y1="134" x2="130" y2="140"/><line x1="196" y1="60" x2="204" y2="66"/><line x1="196" y1="74" x2="204" y2="80"/><line x1="196" y1="88" x2="204" y2="94"/><line x1="270" y1="110" x2="280" y2="116"/><line x1="270" y1="122" x2="280" y2="128"/><line x1="270" y1="134" x2="280" y2="140"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="50" y="182">1</text><text x="125" y="182">2</text><text x="200" y="182">3</text><text x="275" y="182">4</text></g></svg>',
        alt: 'Four bolts. Bolt 1: a smooth domed head with a short square neck under it, then a threaded shank. Bolt 2: a six-sided head and a threaded shank. Bolt 3: a domed head, a threaded shank, and a pair of hinged wings near the end that fold open like a spread V. Bolt 4: a closed ring at the top of a threaded shank.',
        caption: 'Figure 1. Four bolts, numbered 1 to 4.'
      },
      exercise: {
        questions: [
          {
            question: 'The figure shows (1) a domed head over a square neck, (2) a hex head, (3) a bolt with hinged spring wings near its end, and (4) a ring-topped bolt. Which bolt is built to hold a shelf bracket on a hollow drywall wall between studs?',
            options: ['Bolt 3', 'Bolt 1', 'Bolt 2', 'Bolt 4'],
            correctAnswer: 0,
            explanation: 'Bolt 3 is a toggle bolt. Its wings fold to pass through a drilled hole, then spring open behind the drywall and spread the load. The carriage bolt (1), hex bolt (2) and eye bolt (4) need a nut on the far side or solid material to grip.'
          },
          {
            question: 'Using the same figure, which bolt has a square neck that bites into wood so it will not spin while the nut is tightened?',
            options: ['Bolt 1', 'Bolt 2', 'Bolt 3', 'Bolt 4'],
            correctAnswer: 0,
            explanation: 'Bolt 1 is a carriage bolt: the square neck locks into the wood, so you can tighten the nut from one side with no wrench on the smooth domed head.'
          }
        ]
      }
    },
    {
      id: 'simf3-nuts',
      type: 'text' as const,
      content: `## Nuts and washers

| Nut | Look for | Job |
|:---|:---|:---|
| **Hex nut** | six sides | the standard nut |
| **Wing nut** | two flat "wings" | tightened and loosened **by hand**, for parts removed often |
| **Lock nut** | nylon ring inside, or a distorted thread | resists loosening from **vibration** |
| **Castle (slotted) nut** | notches across the top like a castle wall | used with a **cotter pin** through the bolt, as on a wheel axle |
| **Acorn (cap) nut** | domed top | covers the bolt end for looks and safety |
| **Jam nut** | a thin nut | tightened against another nut to lock it |

| Washer | Job |
|:---|:---|
| **Flat washer** | spreads the clamping force and protects the surface under a nut or head |
| **Split lock washer** | a cut, twisted ring that bites in to resist loosening |
| **Fender washer** | extra-large outer diameter for thin sheet metal or soft wood |

**Worked example.** A bolt holding a lawnmower handle keeps working loose from vibration. Two good fixes: a **lock nut** (nylon insert) or a **split lock washer** under a regular nut.`
    },
    {
      id: 'simf3-nuts-fig',
      type: 'multiple-choice' as const,
      content: '**Four nuts.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="72,70 61,89 39,89 28,70 39,51 61,51"/><circle cx="50" cy="70" r="9"/><rect x="113" y="58" width="24" height="28"/><polygon points="115,62 92,38 100,33 118,58"/><polygon points="135,62 158,38 150,33 132,58"/><path d="M180 92 L180 46 L188 46 L188 56 L196 56 L196 46 L204 46 L204 56 L212 56 L212 46 L220 46 L220 92 Z"/><line x1="192" y1="74" x2="208" y2="74"/><rect x="258" y="74" width="34" height="18"/><path d="M261 74 Q275 44 289 74"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="50" y="132">1</text><text x="125" y="132">2</text><text x="200" y="132">3</text><text x="275" y="132">4</text></g></svg>',
        alt: 'Four nuts. Nut 1, seen from above: a six-sided nut with a round threaded hole. Nut 2: a small body with two flat wings sticking up on either side. Nut 3, seen from the side: a six-sided nut whose top is cut with notches like the top of a castle wall. Nut 4, seen from the side: a six-sided base topped with a closed dome.',
        caption: 'Figure 2. Four nuts, numbered 1 to 4.'
      },
      exercise: {
        questions: [
          {
            question: 'The figure shows (1) a plain six-sided nut, (2) a nut with two flat wings, (3) a nut with notches across its top, and (4) a nut with a closed dome. Which nut is used with a cotter pin on a wheel axle?',
            options: ['Nut 3', 'Nut 1', 'Nut 2', 'Nut 4'],
            correctAnswer: 0,
            explanation: 'Nut 3 is a castle nut. A cotter pin passes through one of its notches and a hole in the axle, so the nut cannot back off. The plain hex nut (1), wing nut (2) and acorn nut (4) have no slots for a pin.'
          },
          {
            question: 'Using the same figure, which nut is designed to be tightened and loosened by hand, with no wrench?',
            options: ['Nut 2', 'Nut 3', 'Nut 4', 'Nut 1'],
            correctAnswer: 0,
            explanation: 'Nut 2 is a wing nut: its wings let your fingers turn it, which suits parts that come off often, such as a clamp or a cover.'
          }
        ]
      }
    },
    {
      id: 'simf3-threads',
      type: 'text' as const,
      content: `## Threads and rivets

### Reading a thread size

A bolt marked **$\\frac{3}{8}$-16** has a diameter of $\\frac{3}{8}$ inch and **16 threads per inch (TPI)**. The **pitch** is the distance from one thread to the next: with 16 TPI, the pitch is $\\frac{1}{16}$ inch. A nut moves **one pitch per full turn**.

**Worked example.** How many turns does it take to run a nut $\\frac{3}{4}$ inch along a $\\frac{1}{2}$-20 bolt? Each turn moves $\\frac{1}{20}$ inch, so it takes $\\frac{3}{4} \\times 20 = 15$ turns.

| | Coarse thread (UNC) | Fine thread (UNF) |
|:---|:---|:---|
| Threads per inch | fewer | more |
| Strengths | quick to assemble, less likely to cross-thread, good in soft metal | holds better under vibration, finer adjustment |

- A **tap** cuts threads **inside** a hole (drill the tap-drill hole first). A **die** cuts threads **outside** on a rod. A **thread gauge** checks the pitch.
- Almost all threads are **right-hand**: turn **clockwise to tighten** ("righty-tighty, lefty-loosey"). A few parts use left-hand threads so they will not loosen as they spin.

### Rivets

- A **solid rivet** is pushed through both pieces, then its tail is hammered or squeezed flat, often with a ball-peen hammer and a backing tool. You need access to **both sides**.
- A **pop (blind) rivet** is set with a rivet tool from **one side only**: pulling a mandrel through the rivet swells its far end. Use it when you cannot reach the back, as on a closed box beam or a trailer wall.
- Rivets are **permanent**; to remove one, you drill out its head.`
    },
    {
      id: 'simf3-thread-input',
      type: 'input-boxes' as const,
      content: `**Thread math.** ✍️ A bolt is marked $\\frac{1}{4}$-20.

**1)** How many threads per inch does it have? (number only)

**2)** What is its pitch, in inches? (fraction or decimal)

**3)** How many full turns move a nut $\\frac{1}{2}$ inch along this bolt? (number only)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '1/20', '10'],
        hint1: 'The number after the dash is threads per inch.',
        hint2: 'Pitch = 1 ÷ threads per inch.',
        hint3: 'Distance × threads per inch = turns.',
        explanation: '(1) $20$ TPI. (2) Pitch $= \\frac{1}{20} = 0.05$ inch. (3) $\\frac{1}{2} \\times 20 = 10$ turns.'
      }
    },
    {
      id: 'simf3-dd',
      type: 'dropdown-select' as const,
      content: '**Threads, washers and rivets.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'To cut new threads inside a drilled hole, use a:',
            options: ['tap', 'die', 'thread gauge', 'reamer'],
            correctAnswer: 0
          },
          {
            label: 'To join sheet metal to a closed box frame you can reach from only one side, use a:',
            options: ['pop (blind) rivet', 'solid rivet', 'carriage bolt', 'wing nut'],
            correctAnswer: 0
          },
          {
            label: 'Under a bolt head on thin, soft material, add a:',
            options: ['fender washer', 'split lock washer', 'jam nut', 'castle nut'],
            correctAnswer: 0
          },
          {
            label: 'To tighten a standard right-hand-threaded nut, turn it:',
            options: ['clockwise', 'counterclockwise', 'either way', 'half a turn back first'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['tap', 'pop (blind) rivet', 'fender washer', 'clockwise'],
        hint1: 'Tap = inside (in a hole); die = outside (on a rod).',
        hint2: 'Which rivet is set entirely from the front?',
        hint3: 'A big outer diameter spreads the load on soft material.',
        explanation: 'A tap cuts internal threads; a pop rivet is installed from one side; a fender washer\'s large diameter spreads the load on thin or soft material; and right-hand threads tighten clockwise.'
      }
    },
    {
      id: 'simf3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Carriage bolt** = wood, square neck stops spinning; **toggle bolt** = hollow walls; **hex bolt** = machinery; **anchor bolt** = set in concrete
- **Wing nut** = by hand; **lock nut** = resists vibration; **castle nut** + cotter pin = axles; **acorn nut** = covers the end
- **Flat washer** spreads load; **split lock washer** resists loosening; **fender washer** = big diameter for thin stock
- $\\frac{3}{8}$-16 = diameter $\\frac{3}{8}$ in., 16 TPI; one turn moves one pitch ($\\frac{1}{\\text{TPI}}$ in.)
- **Tap** = inside threads, **die** = outside threads; right-hand threads tighten **clockwise**
- **Pop rivets** go in from **one side**; solid rivets need both sides; rivets are permanent

> **Up Next:** Part 4 — wood, lumber and building materials.`
    }
  ]
};
