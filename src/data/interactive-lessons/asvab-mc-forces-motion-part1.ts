export const asvabMcForcesMotionPart1Data = {
  topicSlug: 'asvab-mc-forces-motion',
  sections: [
    {
      id: 'mcf1-intro',
      type: 'text' as const,
      content: `# ⚙️ Forces, Work and Energy

**Part 1 of 7 — Mechanical Comprehension on the ASVAB**

### What the Mechanical Comprehension subtest is

Mechanical Comprehension (MC) tests "knowledge of mechanical and physical principles": how forces, machines, gears, fluids and structures behave. Almost every question shows a **picture**: a box on a ramp, a lever with weights, a pulley system, a gear train, a beam on two posts. Your job is to **read the picture** and apply one or two principles.

| | CAT-ASVAB (MEPS) |
|:---|:---:|
| Place in the test | 9th of 10 subtests |
| Scored questions | $15$ |
| Time limit | $22$ minutes |
| Time per question | about $1\\frac{1}{2}$ minutes ($88$ seconds) |

On the paper enlistment test it is $25$ questions in $19$ minutes. No calculator is allowed, and the numbers are chosen so the arithmetic is quick by hand.

### Why MC matters

MC is not part of the AFQT, but it shows up in many job line scores:

- Marine Corps **GT** (General Technical) $= \\text{AR} + \\text{MC} + \\text{VE}$. Unlike the Army GT, the Marine GT includes MC, and GT opens a lot of Marine jobs.
- Air Force **M** (Mechanical) $= \\text{AR} + \\text{MC} + \\text{AS} + 2 \\cdot \\text{VE}$
- Marine Corps **MM** $= \\text{AR} + \\text{MC} + \\text{EI} + \\text{AS}$
- Navy **MEC** $= \\text{AR} + \\text{MC} + \\text{AS}$, **MEC2** $= \\text{AR} + \\text{MC} + \\text{AO}$, **NUC** $= \\text{AR} + \\text{MK} + \\text{MC} + \\text{VE}$
- The Army's **MM** area is a weighted blend driven mostly by AS, **MC** and EI
- On the high-school CEP, MC is part of the Science/Technical score ($\\text{GS} + \\text{EI} + \\text{MC}$)

Cutoffs differ by job and change over time, so ask your recruiter which scores your target jobs use.`
    },
    {
      id: 'mcf1-map',
      type: 'text' as const,
      content: `## The three Mechanical Comprehension lessons

| Lesson | What it covers |
|:---|:---|
| **Forces, Work and Energy** (this one) | forces and weight, center of gravity, friction and motion, work, energy, power, pressure, properties of materials |
| **Levers, Pulleys, Inclined Planes and Screws** | simple machines and mechanical advantage |
| **Gears, Fluids and Structures** | gears, belts, cams, springs, hydraulics, buoyancy, beams and supports |

### The plan for this lesson

| Part | Skill |
|:---:|:---|
| 2 | Forces, weight and center of gravity |
| 3 | Friction and motion |
| 4 | Work, energy and power |
| 5 | Pressure and properties of materials |
| 6 | Test strategy and traps |
| 7 | Mastery set |

### How to read an MC picture

1. **Name every force** you can see: weight pulling down, a push, a rope pulling, friction, a support pushing up.
2. **Look at the numbers and where they are**: a weight $3$ feet from a pivot is different from the same weight $1$ foot away.
3. **Ask what the question wants**: a direction, a comparison ("which is greater?"), or a number.`
    },
    {
      id: 'mcf1-warmup-tip',
      type: 'multiple-choice' as const,
      content: '**Warm-up 1.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="170" x2="310" y2="170" stroke="currentColor" stroke-width="2"/><g class="fig-muted"><pattern id="mcf1h" width="8" height="8" patternUnits="userSpaceOnUse"><line x1="0" y1="8" x2="8" y2="0" stroke="currentColor" stroke-width="1"/></pattern><rect x="10" y="170" width="300" height="10" fill="url(#mcf1h)"/></g><g stroke="currentColor" stroke-width="2" fill="none"><rect x="60" y="30" width="40" height="140"/><rect x="180" y="110" width="110" height="60"/></g><g class="fig-accent"><circle cx="80" cy="100" r="4" fill="currentColor"/><circle cx="235" cy="140" r="4" fill="currentColor"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="80" y="22">Box X</text><text x="235" y="102">Box Y</text></g><text x="160" y="196" font-size="11" fill="currentColor" text-anchor="middle">Dots mark each box’s center of gravity. Both weigh the same.</text></svg>',
        alt: 'Two boxes of equal weight on the floor. Box X is tall and narrow, with its center of gravity high up. Box Y is short and wide, with its center of gravity low down.',
        caption: 'Figure 1. Two boxes with the same weight.'
      },
      exercise: {
        questions: [
          {
            question: 'Box X is tall and narrow with a high center of gravity; Box Y is short and wide with a low center of gravity. Both weigh the same. If each is pushed sideways near the top, which tips over more easily?',
            options: ['Box X: its high center of gravity sits over a narrow base', 'Box Y, because its wider base catches more of the push', 'Both tip equally easily, because they have the same weight', 'Neither tips, because weight always holds a box flat'],
            correctAnswer: 0,
            explanation: 'An object tips when its center of gravity moves past the edge of its base. Box X\'s high center of gravity only has to move a short way sideways to pass its narrow base edge, so it tips first. A low center of gravity and a wide base make Box Y stable. Equal weight does not mean equal stability.'
          }
        ]
      }
    },
    {
      id: 'mcf1-warmup-friction',
      type: 'multiple-choice' as const,
      content: '**Warm-up 2.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="110" x2="310" y2="110" stroke="currentColor" stroke-width="2"/><rect x="130" y="60" width="70" height="50" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-accent"><line x1="40" y1="85" x2="122" y2="85" stroke="currentColor" stroke-width="3"/><polygon points="130,85 118,78 118,92" fill="currentColor"/></g><text x="72" y="74" font-size="12" fill="currentColor" text-anchor="middle">push</text><text x="165" y="138" font-size="12" fill="currentColor" text-anchor="middle">The crate slides to the right.</text></svg>',
        alt: 'A crate on a level floor is pushed from the left by an arrow pointing right, and the crate slides to the right.',
        caption: 'Figure 2. A crate pushed across the floor.'
      },
      exercise: {
        questions: [
          {
            question: 'A worker pushes a crate to the right across a level floor, and it slides to the right. In which direction does friction from the floor act on the crate?',
            options: ['To the left, against the sliding', 'To the right, with the push', 'Straight down, into the floor', 'Straight up, away from the floor'],
            correctAnswer: 0,
            explanation: 'Friction always acts along the surface and opposes the sliding, so it points left. The floor\'s upward push is the support (normal) force, and the crate\'s weight acts down; neither is friction.'
          }
        ]
      }
    },
    {
      id: 'mcf1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- MC on the CAT-ASVAB: **15 questions in 22 minutes**, about **$1\\frac{1}{2}$ minutes** each, almost all with a picture
- MC feeds **Marine GT** (AR + MC + VE), Air Force **M**, Marine **MM**, Navy **MEC/MEC2/NUC**, and the Army **MM** area
- Read every picture the same way: **name the forces, note the numbers and distances, then answer the exact question**

> **Up Next:** Part 2 — forces, weight and center of gravity.`
    }
  ]
};
