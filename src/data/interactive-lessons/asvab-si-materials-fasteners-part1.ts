export const asvabSiMaterialsFastenersPart1Data = {
  topicSlug: 'asvab-si-materials-fasteners',
  sections: [
    {
      id: 'simf1-intro',
      type: 'text' as const,
      content: `# 🔩 Materials, Fasteners and Shop Processes

**Part 1 of 7 — Materials and Fasteners on the ASVAB**

### The other half of Shop Information

The Shop Information (SI) subtest covers "shop tools, building materials, and building and construction procedures" and "wood and metal shop practices." The **Hand and Power Tools** lesson covered the tools. This lesson covers everything else:

- **Fasteners:** which nail, screw, bolt, nut, washer or rivet fits the job
- **Wood and building materials:** hardwood and softwood, plywood, lumber sizes, framing, drywall, concrete, wood joints
- **Metal and shop processes:** kinds of metal, sheet-metal gauge, soldering, brazing, welding, sanding and finishing

### Same clock as before

| | CAT-ASVAB (MEPS) |
|:---|:---:|
| Scored SI questions | $10$ |
| Time | $6$ minutes, about $36$ seconds each |
| Paper and high-school CEP tests | Auto and Shop combined into one **AS** section |

SI is not part of the AFQT, but your Auto and Shop results combine into the **AS** score, which appears in mechanical line scores such as Air Force **M**, Marine Corps **MM**, Navy **MEC** and **ENG**, and the Army's **MM** area (driven mostly by AS, MC and EI).

### What these questions look like

- "Which fastener should be used to hang a heavy shelf on a hollow drywall wall?"
- "What does the *d* in 16d nail stand for?"
- "What are the actual dimensions of a $2 \\times 4$?"
- "Which joining process melts the base metal?"
- "Which sandpaper grit is the finest?"

Nearly all of them reward one idea: **every material and fastener has a job it was designed for.**`
    },
    {
      id: 'simf1-map',
      type: 'text' as const,
      content: `## The plan for this lesson

| Part | Skill |
|:---:|:---|
| 2 | Nails and screws: types, penny sizes, heads, pilot holes |
| 3 | Bolts, nuts, washers, rivets and threads |
| 4 | Wood, lumber and building materials, including wood joints |
| 5 | Metals, welding, soldering and finishing |
| 6 | Test strategy and traps |
| 7 | Mastery set |

### Four fastener families at a glance

| Fastener | Holds by | Removable? | Typical job |
|:---|:---|:---:|:---|
| **Nail** | friction of wood fibers gripping the shank | with effort | framing, trim, roofing |
| **Screw** | threads cut into the material | yes | cabinets, decks, sheet metal |
| **Bolt and nut** | clamping the parts between head and nut | yes | machinery, heavy timber, steel |
| **Rivet** | a shank flattened on the far side | no (drill it out) | sheet metal, aircraft skins, trailers |

**Rule of thumb:** nails are fastest and resist **sideways (shear)** loads well; screws resist **pulling out** better; bolts carry the heaviest loads and come apart for service; rivets are **permanent**.`
    },
    {
      id: 'simf1-warmup-fig',
      type: 'multiple-choice' as const,
      content: '**Warm-up 1.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="36" y="26" width="28" height="6"/><rect x="47" y="32" width="6" height="110"/><polygon points="47,142 53,142 50,156"/><polygon points="111,26 139,26 129,38 121,38"/><line x1="125" y1="26" x2="125" y2="32"/><polygon points="121,38 129,38 128,132 125,156 122,132"/><rect x="186" y="24" width="28" height="14"/><rect x="194" y="38" width="12" height="112"/><rect x="184" y="120" width="32" height="14"/><path d="M261 40 Q275 16 289 40 Z"/><rect x="270" y="40" width="10" height="56"/></g><g stroke="currentColor" stroke-width="1.2"><line x1="121" y1="70" x2="129" y2="76"/><line x1="121" y1="82" x2="129" y2="88"/><line x1="121" y1="94" x2="129" y2="100"/><line x1="121" y1="106" x2="129" y2="112"/><line x1="122" y1="118" x2="128" y2="124"/><line x1="122" y1="130" x2="128" y2="136"/><line x1="194" y1="96" x2="206" y2="102"/><line x1="194" y1="106" x2="206" y2="112"/><line x1="194" y1="138" x2="206" y2="144"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="50" y="180">1</text><text x="125" y="180">2</text><text x="200" y="180">3</text><text x="275" y="180">4</text></g></svg>',
        alt: 'Four fasteners. Item 1: a smooth round shank with a flat head and a sharp point. Item 2: a tapered threaded shank with a flat, slotted head and a sharp point. Item 3: a straight threaded shank with a six-sided head and a nut threaded on it. Item 4: a short, smooth, unthreaded shank with a domed head and a flat end.',
        caption: 'Figure 1. Four fasteners, numbered 1 to 4.'
      },
      exercise: {
        questions: [
          {
            question: 'The figure shows (1) a smooth pointed shank with a flat head, (2) a tapered threaded shank with a slotted head, (3) a threaded shank with a hex head and a nut, and (4) a short smooth shank with a domed head and a flat end. Which one makes a permanent joint and is common on aircraft sheet metal?',
            options: ['Item 4', 'Item 3', 'Item 2', 'Item 1'],
            correctAnswer: 0,
            explanation: 'Item 4 is a rivet: its smooth shank is pushed through both sheets and flattened on the far side, so it cannot be unscrewed. Item 3 is a bolt and nut (removable), item 2 is a wood screw, and item 1 is a nail.'
          }
        ]
      }
    },
    {
      id: 'simf1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up 2 and 3.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A deck board keeps working loose because people walking on it pull it upward. Compared with a smooth nail, which fastener resists pulling out best?',
            options: ['A deck screw', 'A finishing nail', 'A wire brad', 'A duplex nail'],
            correctAnswer: 0,
            explanation: 'Threads grip the wood far better than a smooth shank, so screws resist withdrawal. Finishing nails and brads are thin trim nails, and a duplex nail is made to be pulled out easily.'
          },
          {
            question: 'Two pieces of steel angle must be joined so they can be taken apart later for repairs. Which fastener fits best?',
            options: ['A bolt with a nut and washer', 'A solid rivet set with a hammer', 'A pair of spiral flooring nails', 'A bead of construction adhesive'],
            correctAnswer: 0,
            explanation: 'A bolt clamps the parts between its head and nut and comes apart with a wrench. A rivet is permanent, nails do not hold in steel, and adhesive is not meant to come apart.'
          }
        ]
      }
    },
    {
      id: 'simf1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- SI also tests **fasteners, building materials and shop processes**, still **10 questions in 6 minutes** on the CAT
- **Nails**: fast, good in shear. **Screws**: resist pulling out. **Bolts**: heavy loads, removable. **Rivets**: permanent
- Every question reduces to: **what was this material or fastener designed to do?**

> **Up Next:** Part 2 — nails and screws: types, penny sizes, heads and pilot holes.`
    }
  ]
};
