export const asvabSiMaterialsFastenersPart2Data = {
  topicSlug: 'asvab-si-materials-fasteners',
  sections: [
    {
      id: 'simf2-intro',
      type: 'text' as const,
      content: `# 🔩 Materials, Fasteners and Shop Processes

**Part 2 of 7 — Nails and Screws**

### Nail types: read the head and the shank

| Nail | What it looks like | Used for |
|:---|:---|:---|
| **Common nail** | thick shank, wide flat head | framing and rough construction, where strength matters |
| **Box nail** | like a common nail but thinner | lighter work and thin wood; less likely to split it |
| **Finishing nail** | thin, with a small barrel-shaped head | trim and cabinets; the head is **set below the surface** and filled |
| **Casing nail** | like a finishing nail, slightly heavier, cone-shaped head | door and window casings |
| **Brad** | a very small finishing nail | small moldings, picture frames |
| **Roofing nail** | short shank, **extra-wide** head, often galvanized | holding shingles and roofing felt |
| **Duplex (double-headed) nail** | two heads, one above the other | **temporary** work such as concrete forms and scaffolds; the top head sticks out so it pulls easily |
| **Ring-shank or spiral nail** | rings or a twist along the shank | flooring, decking, drywall: extra holding power |

**Galvanized** nails have a zinc coating that resists rust, so they are used outdoors and with treated lumber.

### Penny sizes: the "d" is a length

Nail length is given in **penny** size, written with a **d** (16d is "sixteen-penny"). The number is a length code, not a price today.

| Penny | 2d | 4d | 6d | 8d | 10d | 16d | 20d |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Length (in.) | $1$ | $1\\frac{1}{2}$ | $2$ | $2\\frac{1}{2}$ | $3$ | $3\\frac{1}{2}$ | $4$ |

From 2d to 10d, each penny adds $\\frac{1}{4}$ inch: $\\text{length} = 1 + \\frac{1}{4}(\\text{penny} - 2)$ inches. So a 7d nail is $1 + \\frac{5}{4} = 2\\frac{1}{4}$ inches.

**Worked example.** How long is a 9d nail? $1 + \\frac{1}{4}(7) = 2\\frac{3}{4}$ inches. Bigger penny number, longer nail.

**Good practice:** nail **through the thinner piece into the thicker one**. A common rule of thumb is a nail about **three times** as long as the thickness of the board you nail through. **Clinching** (bending over a nail point that pokes through) adds holding power, and **toenailing** means driving nails at an angle through the end of one board into another.`
    },
    {
      id: 'simf2-nails-fig',
      type: 'multiple-choice' as const,
      content: '**Four nails.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="34" y="24" width="32" height="6"/><rect x="46.5" y="30" width="7" height="120"/><polygon points="46.5,150 53.5,150 50,164"/><rect x="120" y="26" width="10" height="8" rx="3"/><rect x="122" y="34" width="6" height="116"/><polygon points="122,150 128,150 125,162"/><rect x="180" y="24" width="40" height="6"/><rect x="196.5" y="30" width="7" height="50"/><polygon points="196.5,80 203.5,80 200,92"/><rect x="259" y="24" width="32" height="6"/><rect x="271.5" y="30" width="7" height="12"/><rect x="259" y="42" width="32" height="6"/><rect x="271.5" y="48" width="7" height="102"/><polygon points="271.5,150 278.5,150 275,164"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="50" y="184">1</text><text x="125" y="184">2</text><text x="200" y="184">3</text><text x="275" y="184">4</text></g></svg>',
        alt: 'Four nails. Nail 1: long thick shank with a wide flat head. Nail 2: long thin shank with a very small rounded head barely wider than the shank. Nail 3: a short shank with an extra-wide flat head. Nail 4: a long shank with two flat heads, one a short distance above the other.',
        caption: 'Figure 1. Four nails, numbered 1 to 4.'
      },
      exercise: {
        questions: [
          {
            question: 'The figure shows (1) a thick nail with a wide flat head, (2) a thin nail with a tiny rounded head, (3) a short nail with an extra-wide head, and (4) a nail with two heads. Which nail is meant for concrete forms that will be taken apart in a few days?',
            options: ['Nail 4', 'Nail 1', 'Nail 3', 'Nail 2'],
            correctAnswer: 0,
            explanation: 'Nail 4 is a duplex (double-headed) nail. It is driven to the lower head, and the upper head stays out so a claw can pull it easily when the forms come down. Nail 1 is a common nail, nail 3 a roofing nail, and nail 2 a finishing nail.'
          },
          {
            question: 'Using the same four nails, which one is used on window trim, with its head driven just below the surface and filled?',
            options: ['Nail 2', 'Nail 3', 'Nail 4', 'Nail 1'],
            correctAnswer: 0,
            explanation: 'Nail 2 is a finishing nail. Its small head is sunk with a nail set and the hole is filled, so it nearly disappears on trim. The wide-headed nails would show.'
          }
        ]
      }
    },
    {
      id: 'simf2-penny-input',
      type: 'input-boxes' as const,
      content: `**Penny sizes.** ✍️ Use the table or the rule $1 + \\frac{1}{4}(\\text{penny} - 2)$ for sizes 2d through 10d.

**1)** Length of a 6d nail, in inches (number only):

**2)** Length of a 10d nail, in inches (number only):

**3)** Length of a 5d nail, in inches (decimal or fraction):`,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '3', '1.75'],
        hint1: '6d: 1 + (1/4)(4).',
        hint2: '10d: 1 + (1/4)(8).',
        hint3: '5d: 1 + (1/4)(3) = 1 and 3/4.',
        explanation: '(1) $1 + \\frac{1}{4}(4) = 2$ in. (2) $1 + \\frac{1}{4}(8) = 3$ in. (3) $1 + \\frac{1}{4}(3) = 1\\frac{3}{4} = 1.75$ in.'
      }
    },
    {
      id: 'simf2-screws',
      type: 'text' as const,
      content: `## Screws: match the thread to the material

| Screw | Look for | Used in |
|:---|:---|:---|
| **Wood screw** | tapered, coarse threads, often a smooth shank under the head | wood |
| **Sheet-metal screw** | threads all the way to a sharp point | thin metal, plastic, ductwork |
| **Machine screw** | straight shank, even fine threads, **blunt end** | a **nut** or a **tapped (threaded) hole** in metal |
| **Lag screw** (lag bolt) | big **hex head**, thick, coarse threads, pointed | heavy timbers, ledger boards; turned with a **wrench** |
| **Drywall screw** | bugle-shaped head, sharp point | fastening drywall to studs |

### Heads

| Head | Sits | Notes |
|:---|:---|:---|
| **Flat** | **flush** in a countersunk hole | cone-shaped underside |
| **Oval** | partly above the surface | decorative, also countersunk |
| **Round / pan** | on top of the surface | pan heads are common on sheet-metal screws |
| **Hex** | on top, turned with a wrench | lag screws and many bolts |

### Pilot holes

A **pilot hole** (a little narrower than the screw's threads) keeps hardwood from splitting and makes driving easier. In the top board, a **clearance hole** as wide as the shank lets the screw pull the boards tightly together.

**Worked example.** A ventilation duct of thin galvanized steel needs a bracket attached. The right choice is a **sheet-metal screw**: sharp point, threads that bite thin metal.`
    },
    {
      id: 'simf2-screws-fig',
      type: 'multiple-choice' as const,
      content: '**Four screws.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="36,24 64,24 54,36 46,36"/><polygon points="46,36 54,36 53,130 50,158 47,130"/><path d="M112 34 Q112 22 125 22 Q138 22 138 34 Z"/><polygon points="121,34 129,34 129,140 125,158 121,140"/><path d="M188 36 Q188 22 200 22 Q212 22 212 36 Z"/><rect x="195" y="36" width="10" height="120"/><rect x="258" y="20" width="34" height="18"/><polygon points="268,38 282,38 281,132 275,160 269,132"/></g><g stroke="currentColor" stroke-width="1.2"><line x1="46" y1="80" x2="54" y2="86"/><line x1="46" y1="94" x2="54" y2="100"/><line x1="46" y1="108" x2="54" y2="114"/><line x1="47" y1="122" x2="53" y2="128"/><line x1="48" y1="136" x2="52" y2="142"/><line x1="121" y1="40" x2="129" y2="46"/><line x1="121" y1="54" x2="129" y2="60"/><line x1="121" y1="68" x2="129" y2="74"/><line x1="121" y1="82" x2="129" y2="88"/><line x1="121" y1="96" x2="129" y2="102"/><line x1="121" y1="110" x2="129" y2="116"/><line x1="121" y1="124" x2="129" y2="130"/><line x1="122" y1="138" x2="128" y2="144"/><line x1="195" y1="42" x2="205" y2="46"/><line x1="195" y1="50" x2="205" y2="54"/><line x1="195" y1="58" x2="205" y2="62"/><line x1="195" y1="66" x2="205" y2="70"/><line x1="195" y1="74" x2="205" y2="78"/><line x1="195" y1="82" x2="205" y2="86"/><line x1="195" y1="90" x2="205" y2="94"/><line x1="195" y1="98" x2="205" y2="102"/><line x1="195" y1="106" x2="205" y2="110"/><line x1="195" y1="114" x2="205" y2="118"/><line x1="195" y1="122" x2="205" y2="126"/><line x1="195" y1="130" x2="205" y2="134"/><line x1="195" y1="138" x2="205" y2="142"/><line x1="195" y1="146" x2="205" y2="150"/><line x1="268" y1="80" x2="282" y2="90"/><line x1="268" y1="98" x2="282" y2="108"/><line x1="269" y1="116" x2="281" y2="126"/><line x1="270" y1="134" x2="280" y2="144"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="50" y="182">1</text><text x="125" y="182">2</text><text x="200" y="182">3</text><text x="275" y="182">4</text></g></svg>',
        alt: 'Four screws. Screw 1: flat cone-shaped head, smooth upper shank, tapered threaded lower part and a point. Screw 2: rounded pan head, threads along its whole length down to a sharp point. Screw 3: rounded head, perfectly straight shank with fine, even threads its whole length and a flat, blunt end. Screw 4: large six-sided head, thick shank with a few coarse threads and a point.',
        caption: 'Figure 2. Four screws, numbered 1 to 4.'
      },
      exercise: {
        questions: [
          {
            question: 'The figure shows (1) a tapered screw with a flat head, (2) a pan-head screw threaded to a sharp point, (3) a straight screw with fine even threads and a blunt end, and (4) a thick screw with a large hex head. Which one is designed to thread into a nut or a tapped hole in metal?',
            options: ['Screw 3', 'Screw 2', 'Screw 1', 'Screw 4'],
            correctAnswer: 0,
            explanation: 'Screw 3 is a machine screw: a straight shank, uniform fine threads and a blunt end that cannot cut its own way into wood. It goes into a nut or a hole that has already been tapped. Screw 1 is a wood screw, screw 2 a sheet-metal screw, and screw 4 a lag screw.'
          },
          {
            question: 'Using the same figure, which screw is driven with a wrench to fasten a heavy wooden ledger board to a house frame?',
            options: ['Screw 4', 'Screw 3', 'Screw 2', 'Screw 1'],
            correctAnswer: 0,
            explanation: 'Screw 4 is a lag screw: its large hex head is turned with a wrench or socket, and its thick, coarse threads hold heavy timber. The others are driven with screwdrivers and are too small for structural loads.'
          }
        ]
      }
    },
    {
      id: 'simf2-check',
      type: 'multiple-choice' as const,
      content: '**Nails and screws in practice.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Why are galvanized nails used on an outdoor fence?',
            options: ['Their zinc coating resists rust', 'They are easier to pull out later', 'They are thinner and split less', 'Their heads sink below the surface'],
            correctAnswer: 0,
            explanation: 'Galvanizing coats steel with zinc, which keeps it from rusting outdoors. It does not change how the nail pulls, splits or sets.'
          },
          {
            question: 'A carpenter fastening a thin board to a thick one should drive the nail:',
            options: ['Through the thin board into the thick board', 'Through the thick board into the thin board', 'Only along the grain at the end of the board', 'At an angle through both boards from below'],
            correctAnswer: 0,
            explanation: 'Nailing through the thinner piece puts most of the nail\'s length in the thicker piece, where it gets the most grip. Going the other way leaves only a short length holding in the thin board.'
          }
        ]
      }
    },
    {
      id: 'simf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Common** = framing; **box** = thinner, splits less; **finishing/casing/brad** = trim, set below the surface; **roofing** = wide head; **duplex** = temporary
- Penny (**d**) is a **length**: 2d = $1$ in., add $\\frac{1}{4}$ in. per penny to 10d = $3$ in.; 16d = $3\\frac{1}{2}$ in.
- **Wood screw** (tapered), **sheet-metal screw** (threaded to a sharp point), **machine screw** (blunt, into a nut or tapped hole), **lag screw** (hex head, wrench, heavy timber)
- **Flat heads** sit flush in a countersink; drill **pilot holes** in hardwood
- Screws resist **pulling out**; nails are fast and good in **shear**

> **Up Next:** Part 3 — bolts, nuts, washers, rivets and threads.`
    }
  ]
};
