export const asvabSiToolsPart5Data = {
  topicSlug: 'asvab-si-tools',
  sections: [
    {
      id: 'sit5-intro',
      type: 'text' as const,
      content: `# 🔧 Hand and Power Tools

**Part 5 of 7 — Measuring, Layout and Shop Safety**

### Reading a tape measure or rule to $\\frac{1}{16}$ inch

Each inch on a shop rule is split into $16$ equal spaces. The **length of each tick mark** tells you which fraction it is:

| Tick length | Marks every | Values |
|:---|:---:|:---|
| Longest | inch | $1, 2, 3, \\dots$ |
| Long | $\\frac{1}{2}$ inch | $\\frac{1}{2} = \\frac{8}{16}$ |
| Medium | $\\frac{1}{4}$ inch | $\\frac{1}{4} = \\frac{4}{16}, \\ \\frac{3}{4} = \\frac{12}{16}$ |
| Short | $\\frac{1}{8}$ inch | $\\frac{1}{8}, \\frac{3}{8}, \\frac{5}{8}, \\frac{7}{8}$ |
| Shortest | $\\frac{1}{16}$ inch | the odd sixteenths: $\\frac{1}{16}, \\frac{3}{16}, \\dots, \\frac{15}{16}$ |

**The counting method (never fails):** start at the last whole inch, count the **sixteenth** spaces to your mark, then reduce the fraction.

**Worked example.** A mark is $10$ sixteenth-spaces past the $3$-inch line. That is $3\\frac{10}{16}$ inches, which reduces to $3\\frac{5}{8}$ inches.

**Worked example.** One mark is at $2\\frac{3}{8}$ in. and another at $2\\frac{15}{16}$ in. How far apart are they? Convert to sixteenths: $2\\frac{6}{16}$ and $2\\frac{15}{16}$, so the gap is $\\frac{9}{16}$ inch.

> **Tape tip:** the hook on the end of a tape slides in and out by its own thickness, so the reading is correct whether you hook it on an edge or push it against a surface. Do not "fix" a loose hook.`
    },
    {
      id: 'sit5-ruler-input',
      type: 'input-boxes' as const,
      content: `**Read the rule.** ✍️

The figure shows the first $2$ inches of a shop rule marked in sixteenths. Arrow **A** points to a mark $5$ sixteenth-spaces past the $1$-inch line, and arrow **B** points to the medium tick between $\\frac{1}{2}$ and $1$ inch.

**1)** The reading at **A**, in inches (a mixed number like 1 1/2, or a decimal):

**2)** The reading at **B**, in inches (fraction or decimal):

**3)** The distance from **B** to **A**, in inches (fraction or decimal):`,
      figure: {
        svg: '<svg viewBox="0 0 320 104" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="10" y="36" width="300" height="58" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="1.2"><line x1="20" y1="36" x2="20" y2="76"/><line x1="28.75" y1="36" x2="28.75" y2="45"/><line x1="37.5" y1="36" x2="37.5" y2="51"/><line x1="46.25" y1="36" x2="46.25" y2="45"/><line x1="55" y1="36" x2="55" y2="58"/><line x1="63.75" y1="36" x2="63.75" y2="45"/><line x1="72.5" y1="36" x2="72.5" y2="51"/><line x1="81.25" y1="36" x2="81.25" y2="45"/><line x1="90" y1="36" x2="90" y2="66"/><line x1="98.75" y1="36" x2="98.75" y2="45"/><line x1="107.5" y1="36" x2="107.5" y2="51"/><line x1="116.25" y1="36" x2="116.25" y2="45"/><line x1="125" y1="36" x2="125" y2="58"/><line x1="133.75" y1="36" x2="133.75" y2="45"/><line x1="142.5" y1="36" x2="142.5" y2="51"/><line x1="151.25" y1="36" x2="151.25" y2="45"/><line x1="160" y1="36" x2="160" y2="76"/><line x1="168.75" y1="36" x2="168.75" y2="45"/><line x1="177.5" y1="36" x2="177.5" y2="51"/><line x1="186.25" y1="36" x2="186.25" y2="45"/><line x1="195" y1="36" x2="195" y2="58"/><line x1="203.75" y1="36" x2="203.75" y2="45"/><line x1="212.5" y1="36" x2="212.5" y2="51"/><line x1="221.25" y1="36" x2="221.25" y2="45"/><line x1="230" y1="36" x2="230" y2="66"/><line x1="238.75" y1="36" x2="238.75" y2="45"/><line x1="247.5" y1="36" x2="247.5" y2="51"/><line x1="256.25" y1="36" x2="256.25" y2="45"/><line x1="265" y1="36" x2="265" y2="58"/><line x1="273.75" y1="36" x2="273.75" y2="45"/><line x1="282.5" y1="36" x2="282.5" y2="51"/><line x1="291.25" y1="36" x2="291.25" y2="45"/><line x1="300" y1="36" x2="300" y2="76"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="20" y="89">0</text><text x="160" y="89">1</text><text x="300" y="89">2</text></g><g class="fig-accent"><polygon points="197.75,17 209.75,17 203.75,34" fill="currentColor"/><polygon points="119,17 131,17 125,34" fill="currentColor"/><text x="203.75" y="13" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">A</text><text x="125" y="13" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">B</text></g></svg>',
        alt: 'The first 2 inches of a rule divided into sixteenths, with longer ticks at halves and quarters. Arrow A points to the shortest tick that is 5 sixteenth-spaces past the 1-inch mark. Arrow B points to the medium-length tick 12 sixteenth-spaces past 0, between the 1/2-inch and 1-inch marks.',
        caption: 'Figure 1. A rule marked in sixteenths of an inch.'
      },
      exercise: {
        boxes: 3,
        correctAnswers: ['21/16', '3/4', '9/16'],
        hint1: 'Count sixteenth-spaces past the last whole inch.',
        hint2: 'A medium tick is a quarter-inch mark: 12 sixteenths reduces to a simpler fraction.',
        hint3: 'Write both in sixteenths: 21/16 and 12/16.',
        explanation: '(1) A is $5$ sixteenths past $1$ inch: $1\\frac{5}{16}$ in. ($1.3125$). (2) B is $12$ sixteenths past $0$: $\\frac{12}{16} = \\frac{3}{4}$ in. (3) $\\frac{21}{16} - \\frac{12}{16} = \\frac{9}{16}$ in.'
      }
    },
    {
      id: 'sit5-layout',
      type: 'text' as const,
      content: `## Layout tools: square, level and straight

| Tool | What it does |
|:---|:---|
| **Combination square** | a blade with a sliding head that reads $90^\\circ$ and $45^\\circ$; marks cut lines, checks squareness, measures depth |
| **Try square** | fixed $90^\\circ$ blade and handle; checks that an edge or corner is square |
| **Framing (carpenter's) square** | large L-shaped steel square for laying out rafters, stairs and wall framing |
| **Level** | a bubble vial: centered bubble means **level** (horizontal) or **plumb** (vertical), depending on the vial |
| **Plumb bob** | a pointed weight on a string; gravity makes the string hang **exactly vertical** |
| **Chalk line** | a chalk-coated string snapped against a surface to mark a long straight line |
| **Marking gauge** | scribes a line parallel to the edge of a board |
| **Calipers** | jaws that measure **outside** and **inside** diameters and depths (dial and digital types read to thousandths) |
| **Micrometer** | a precision screw gauge for very small outside measurements, in thousandths of an inch |

**Reading a level:** the bubble is lighter than the liquid, so it floats to the **high** end. If the bubble drifts left, the left end is high.

**Worked example.** A fence post must stand perfectly vertical. Hold a **level** against two adjacent sides (or hang a **plumb bob** beside it) until the post is **plumb**.

**Worked example.** A machinist needs the outside diameter of a small shaft to within a thousandth of an inch. The tool is a **micrometer** (or a dial caliper for slightly less precision). A tape measure is far too coarse.`
    },
    {
      id: 'sit5-level-fig',
      type: 'multiple-choice' as const,
      content: '**Read the level.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="14" y="28" width="292" height="64" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="70" y="42" width="180" height="36" rx="18" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-muted" stroke="currentColor" stroke-width="2"><line x1="145" y1="42" x2="145" y2="78"/><line x1="175" y1="42" x2="175" y2="78"/></g><g class="fig-accent"><ellipse class="fig-bg" cx="106" cy="60" rx="22" ry="12" stroke="currentColor" stroke-width="2"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="40" y="112">left end</text><text x="280" y="112">right end</text></g></svg>',
        alt: 'A level lying on a board. Its bubble vial has two center marks in the middle, and the bubble sits well to the left of both marks.',
        caption: 'Figure 2. A level lying on a board.'
      },
      exercise: {
        questions: [
          {
            question: 'A level rests on a board, and the bubble sits to the left of the two center marks. What does this tell you?',
            options: ['The left end of the board is higher', 'The right end of the board is higher', 'The board is level from end to end', 'The board is plumb but not level'],
            correctAnswer: 0,
            explanation: 'The bubble floats to the high end of the vial. A bubble left of center means the left end is higher; lowering the left end (or raising the right) brings the bubble back between the marks. A level board puts the bubble between the marks.'
          }
        ]
      }
    },
    {
      id: 'sit5-measure-check',
      type: 'multiple-choice' as const,
      content: '**Layout and precision tools.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A carpenter must mark a perfectly straight line 16 feet long across a subfloor. Which tool does this most easily?',
            options: ['Chalk line', 'Try square', 'Marking gauge', 'Plumb bob'],
            correctAnswer: 0,
            explanation: 'A chalk line is stretched tight between two points and snapped, leaving a long straight line. A try square marks short lines at $90^\\circ$, a marking gauge marks lines parallel to a nearby edge, and a plumb bob finds vertical.'
          },
          {
            question: 'Which tool would you use to check that the corner of a small wooden box is exactly $90^\\circ$?',
            options: ['Try square', 'Chalk line', 'Bubble level', 'Micrometer'],
            correctAnswer: 0,
            explanation: 'A try square has a fixed right angle between its handle and blade, so it checks square corners and edges. A level checks horizontal and vertical, not corner angles.'
          }
        ]
      }
    },
    {
      id: 'sit5-safety',
      type: 'text' as const,
      content: `## Shop safety the test expects you to know

| Rule | Why |
|:---|:---|
| Wear **safety glasses** (with side shields) whenever you cut, grind, drill or strike | chips and sparks fly in every direction |
| Wear **hearing protection** around loud power tools | noise damage is permanent |
| **Unplug** a power tool (or remove its battery) before changing a blade or bit or making adjustments | a bumped switch can start it |
| **Remove the chuck key** before turning on a drill | it can be thrown out of the chuck |
| Keep **guards** in place | they cover the blade and reduce kickback injuries |
| **Clamp** small work instead of holding it | a spinning bit can grab and spin the part |
| No **loose clothing, jewelry or dangling sleeves**; tie back long hair; no gloves near spinning bits or blades | anything that can catch will be pulled in |
| Keep tools **sharp** | a dull tool needs more force, so it slips more |
| Cut and push **away from your body** | if the tool slips, it moves away from you |
| Store **oily rags** in a closed metal can | they can heat up and catch fire on their own |

**Worked example.** A student wants to swap a dull blade on a jigsaw. The correct first step is to **unplug** the saw, not just switch it off. The trigger can be bumped while your fingers are on the blade.`
    },
    {
      id: 'sit5-safety-check',
      type: 'multiple-choice' as const,
      content: '**Safety checks.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Why is a sharp chisel considered safer than a dull one?',
            options: ['It needs less force, so it is less likely to slip', 'It cannot cut skin because its edge is so thin', 'It never needs to be pushed away from the body', 'It can be struck with a steel hammer, unlike dull ones'],
            correctAnswer: 0,
            explanation: 'A sharp edge cuts with less pressure, so you stay in control. A dull chisel needs extra force, and when it suddenly gives, your hand follows it. Sharp tools still cut skin and must still be pushed away from you.'
          },
          {
            question: 'Why should you NOT wear loose gloves while running a drill press?',
            options: ['The spinning chuck or bit can catch the glove and pull your hand in', 'Gloves make it impossible to read the depth scale on the drill press', 'Gloves conduct electricity from the drill press motor to your hand', 'Gloves leave fibers that clog the drill press and dull its bits'],
            correctAnswer: 0,
            explanation: 'Rotating machinery can wrap loose cloth, sleeves, gloves or hair around the spindle in a fraction of a second. That is why loose items stay away from spinning bits. The other reasons are not the hazard.'
          }
        ]
      }
    },
    {
      id: 'sit5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Rules split each inch into **16**: count sixteenth-spaces past the last inch, then reduce
- **Combination square** ($90^\\circ$ and $45^\\circ$), **try square** (check a corner), **framing square** (rafters and stairs)
- The bubble floats to the **high** end; **plumb** = vertical; **plumb bob** finds vertical; **chalk line** = long straight lines
- **Calipers** and **micrometers** measure small parts to thousandths of an inch
- Eye protection, unplug before changes, guards on, clamp the work, nothing loose near spinning parts, keep tools sharp

> **Up Next:** Part 6 — how to work Shop Information questions in about 36 seconds each, and the traps to avoid.`
    }
  ]
};
