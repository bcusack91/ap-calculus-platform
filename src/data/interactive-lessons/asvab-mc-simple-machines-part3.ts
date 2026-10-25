export const asvabMcSimpleMachinesPart3Data = {
  topicSlug: 'asvab-mc-simple-machines',
  sections: [
    {
      id: 'msm3-intro',
      type: 'text' as const,
      content: `# 🏗️ Levers, Pulleys, Inclined Planes and Screws

**Part 3 of 7 — Pulleys**

### Fixed and movable pulleys

| Pulley | How it is mounted | What it does | MA |
|:---|:---|:---|:---:|
| **Fixed** | hangs from the ceiling, beam or mast; does not move | **changes the direction** of your pull (pull down to lift up) | $1$ |
| **Movable** | hangs from the load and rises with it | the load hangs on **two** rope segments, so each carries half | $2$ |
| **Block and tackle** | a set of fixed pulleys (top block) and movable pulleys (bottom block) | the load is shared by **several** rope segments | number of supporting segments |

### The one rule you need: count the supporting ropes

$$\\text{MA} = \\text{number of rope segments that hold up the moving block}$$

Count every segment of rope **attached to or wrapped around the moving (lower) block**. Do **not** count the free end if it comes down from a **fixed** pulley; that segment just changes direction. **Do** count the free end if it leaves the **moving** block and you pull **up** on it.

**Ideal effort and rope pulled:**

$$\\text{effort} = \\frac{\\text{load}}{\\text{MA}}, \\qquad \\text{rope pulled} = \\text{MA} \\times \\text{distance the load rises}$$

**Worked example.** A block and tackle has $4$ rope segments holding the lower block, which carries a $600$-lb engine. Effort $= 600 \\div 4 = 150$ lb. To lift the engine $2$ feet, pull $4 \\times 2 = 8$ feet of rope.

Why use a single fixed pulley at all if its MA is $1$? Because pulling **down** is easier than lifting **up**: you can use your body weight, as when raising a flag or hoisting a bucket onto a roof.`
    },
    {
      id: 'msm3-three-input',
      type: 'input-boxes' as const,
      content: `**Three pulley setups.** ✍️ Use the figure.

Each setup lifts a $120$-lb load. **A** is a single fixed pulley. **B** is a single movable pulley with one end of the rope tied to the ceiling. **C** is a block and tackle with $3$ rope segments running between the top block and the bottom block; the free end comes down from the top block.

Ignoring friction, what effort is needed in each setup, in pounds? (numbers only)

**1)** Setup A:

**2)** Setup B:

**3)** Setup C:`,
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="12" x2="310" y2="12" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="2" fill="none"><line x1="55" y1="12" x2="55" y2="34"/><circle cx="55" cy="50" r="16"/><path d="M39 50 A16 16 0 0 1 71 50"/><line x1="39" y1="50" x2="39" y2="130"/><line x1="71" y1="50" x2="71" y2="130"/><rect x="24" y="130" width="30" height="26"/><line x1="144" y1="12" x2="144" y2="110"/><circle cx="160" cy="110" r="16"/><path d="M144 110 A16 16 0 0 0 176 110"/><line x1="176" y1="110" x2="176" y2="42"/><line x1="160" y1="126" x2="160" y2="140"/><rect x="145" y="140" width="30" height="26"/><line x1="260" y1="12" x2="260" y2="24"/><rect x="232" y="24" width="56" height="14"/><rect x="232" y="110" width="56" height="14"/><line x1="242" y1="38" x2="242" y2="110"/><line x1="260" y1="38" x2="260" y2="110"/><line x1="278" y1="38" x2="278" y2="110"/><path d="M288 31 L300 31 L300 138"/><line x1="260" y1="124" x2="260" y2="134"/><rect x="245" y="134" width="30" height="26"/></g><circle cx="55" cy="50" r="2.5" fill="currentColor"/><circle cx="160" cy="110" r="2.5" fill="currentColor"/><g class="fig-accent"><polygon points="71,150 65,138 77,138" fill="currentColor"/><line x1="71" y1="130" x2="71" y2="140" stroke="currentColor" stroke-width="3"/><polygon points="176,32 170,44 182,44" fill="currentColor"/><polygon points="300,150 294,138 306,138" fill="currentColor"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="39" y="172">120 lb</text><text x="160" y="182">120 lb</text><text x="260" y="176">120 lb</text></g><g font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="55" y="196">A</text><text x="160" y="196">B</text><text x="260" y="196">C</text></g></svg>',
        alt: 'Three pulley setups, each lifting a 120-pound load. A: one pulley hung from the ceiling; the rope runs over it with the load on one side and a downward pull on the other. B: one rope end tied to the ceiling runs down under a pulley that hangs from the load and back up to an upward pull, so two rope segments hold the pulley. C: a top block hung from the ceiling and a bottom block holding the load, with three rope segments running between the blocks; the free end comes down from the top block to a downward pull.',
        caption: 'Figure 1. Setups A, B and C each lift 120 lb.'
      },
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '60', '40'],
        hint1: 'A fixed pulley only changes direction: MA = 1.',
        hint2: 'Count the segments holding up the movable pulley in B.',
        hint3: 'C has 3 segments holding the bottom block; the free end comes off the fixed block.',
        explanation: '(1) A: MA $= 1$, effort $= 120$ lb (you pull down instead of lifting up). (2) B: $2$ segments hold the movable pulley, effort $= 120 \\div 2 = 60$ lb. (3) C: $3$ supporting segments, effort $= 120 \\div 3 = 40$ lb. The free end in C comes down from the fixed top block, so it does not count.'
      }
    },
    {
      id: 'msm3-rope',
      type: 'multiple-choice' as const,
      content: '**Rope pulled.** 🎯',
      exercise: {
        questions: [
          {
            question: 'In setup C above (MA $3$), how much rope must be pulled to raise the $120$-lb load $2$ feet?',
            options: ['6 feet', '2 feet', '3 feet', '2/3 foot'],
            correctAnswer: 0,
            explanation: 'Rope pulled = MA × load rise = $3 \\times 2 = 6$ ft. Each of the three supporting segments must shorten by $2$ ft, and all of that rope comes out through your hands. Work check: $40 \\times 6 = 240 = 120 \\times 2$.'
          },
          {
            question: 'What is the main advantage of a single fixed pulley, like the one at the top of a flagpole?',
            options: ['It lets you pull down to lift something up', 'It cuts the force needed to lift the load in half', 'It doubles the distance the load rises per pull', 'It removes the friction from lifting the load'],
            correctAnswer: 0,
            explanation: 'A single fixed pulley has an MA of $1$: same force, same distance. Its benefit is changing direction, so you can pull down (using your weight) to raise a load.'
          }
        ]
      }
    },
    {
      id: 'msm3-trap-fig',
      type: 'multiple-choice' as const,
      content: '**Count carefully.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="40" y1="12" x2="280" y2="12" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="2" fill="none"><line x1="145" y1="12" x2="145" y2="26"/><rect x="110" y="26" width="70" height="14"/><rect x="110" y="112" width="70" height="14"/><line x1="122" y1="40" x2="122" y2="112"/><line x1="145" y1="40" x2="145" y2="112"/><line x1="168" y1="40" x2="168" y2="112"/><path d="M180 119 L200 119 L200 34"/><line x1="145" y1="126" x2="145" y2="138"/><rect x="125" y="138" width="40" height="30"/></g><g class="fig-accent"><polygon points="200,22 194,34 206,34" fill="currentColor"/><text x="208" y="46" font-size="12" fill="currentColor">pull up</text></g><text x="145" y="184" font-size="12" fill="currentColor" text-anchor="middle">360 lb</text><text x="36" y="36" font-size="11" fill="currentColor">fixed block</text><text x="22" y="123" font-size="11" fill="currentColor">moving block</text></svg>',
        alt: 'A block and tackle. The fixed top block hangs from the ceiling and the moving bottom block carries a 360-pound load. Three rope segments run between the two blocks. The free end of the rope leaves the moving bottom block and runs straight up, where it is pulled upward.',
        caption: 'Figure 2. The free end leaves the moving block and is pulled up.'
      },
      exercise: {
        questions: [
          {
            question: 'A block and tackle holds a $360$-lb load on its moving lower block. Three rope segments run between the blocks, and the free end leaves the moving block and is pulled straight up. What effort is needed, ignoring friction?',
            options: ['90 lb', '120 lb', '180 lb', '72 lb'],
            correctAnswer: 0,
            explanation: 'The free end leaves the moving block and pulls up on it, so it counts: $3 + 1 = 4$ supporting segments. Effort $= 360 \\div 4 = 90$ lb. Counting only the three segments between the blocks gives the trap answer of $120$ lb.'
          }
        ]
      }
    },
    {
      id: 'msm3-dd',
      type: 'dropdown-select' as const,
      content: '**Pulley facts.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'The mechanical advantage of a single fixed pulley:',
            options: ['1', '2', '1/2', '0'],
            correctAnswer: 0
          },
          {
            label: 'A load hangs from 5 supporting rope segments. Its MA is:',
            options: ['5', '4', '6', '10'],
            correctAnswer: 0
          },
          {
            label: 'With an MA of 4, raising a load 3 feet means pulling this much rope:',
            options: ['12 feet', '3 feet', '7 feet', '3/4 foot'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['1', '5', '12 feet'],
        hint1: 'A fixed pulley only changes direction.',
        hint2: 'MA = number of segments supporting the load.',
        hint3: 'Rope pulled = MA × rise.',
        explanation: 'A fixed pulley has MA $1$. Five supporting segments give MA $5$. With MA $4$, the rope moves $4$ times as far as the load: $4 \\times 3 = 12$ ft.'
      }
    },
    {
      id: 'msm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Fixed pulley:** MA $1$, changes direction. **Movable pulley:** MA $2$
- **MA = number of rope segments holding up the moving block**
- The free end counts **only** if it leaves the **moving** block and pulls up
- **Effort = load ÷ MA**; **rope pulled = MA × load rise**

> **Up Next:** Part 4 — inclined planes and wedges.`
    }
  ]
};
