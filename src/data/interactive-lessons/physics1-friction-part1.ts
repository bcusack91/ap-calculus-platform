export const physics1FrictionPart1Data = {
  topicSlug: 'friction',
  sections: [
    {
      id: 'fr1-intro',
      type: 'text' as const,
      content: `
# 🧱 Static vs. Kinetic Friction

**Part 1 of 7 — Friction**

Friction is the force that resists relative motion (or attempted motion) between surfaces in contact. It\'s what lets you walk, drive a car, and hold objects. Without friction, life would be... slippery.

Understanding the **two types** of friction — static and kinetic — is essential for AP Physics 1 dynamics problems.
      `
    },
    {
      id: 'fr1-what-is-friction',
      type: 'text' as const,
      content: `
## What Is Friction?

**Friction** is a contact force that acts **parallel to the contact surface** and **opposes relative motion** (or the tendency of relative motion) between two surfaces.

### Two Types of Friction

| Type | Symbol | When It Acts | Direction |
|------|--------|-------------|-----------|
| **Static friction** ($f_s$) | $f_s$ | Object is NOT sliding | Opposes the *tendency* to slide |
| **Kinetic friction** ($f_k$) | $f_k$ | Object IS sliding | Opposes the *actual* sliding motion |

### Key Differences

| Property | Static Friction | Kinetic Friction |
|----------|----------------|-----------------|
| Object moving? | No | Yes (sliding) |
| Magnitude | Variable: $0 \\leq f_s \\leq \\mu_s N$ | Constant: $f_k = \\mu_k N$ |
| Adjusts to match applied force? | Yes (up to a maximum) | No (constant value) |
| Coefficient | $\\mu_s$ (usually larger) | $\\mu_k$ (usually smaller) |
      `
    },
    {
      id: 'fr1-static-friction',
      type: 'text' as const,
      content: `
## Static Friction in Detail

Static friction keeps an object from starting to move. It\'s a **self-adjusting** force:

- Push a box with 5 N → $f_s = 5$ N (box stays still)
- Push with 10 N → $f_s = 10$ N (box stays still)
- Push with 15 N → $f_s = 15$ N (box stays still)
- Push with 20 N → $f_{s,\\max}$ is exceeded → box starts moving!

### The Inequality

$$f_s \\leq \\mu_s N$$

- $f_s$ matches the applied force up to a **maximum** value
- The maximum is $f_{s,\\max} = \\mu_s N$
- Once the applied force exceeds $f_{s,\\max}$, the object starts to move

### Static Friction Can Point in Any Direction

Common misconception: friction always opposes motion. Static friction opposes the **tendency** of motion:

- A box on a truck accelerating forward: static friction points **forward** (prevents the box from sliding backward relative to the truck)
- Walking: static friction points **forward** (your foot pushes back, friction pushes you forward)
      `
    },
    {
      id: 'fr1-kinetic-friction',
      type: 'text' as const,
      content: `
## Kinetic Friction in Detail

Once an object starts sliding, **kinetic friction** takes over.

$$f_k = \\mu_k N$$

### Key Properties

- $f_k$ is **constant** (doesn\'t depend on speed in the AP model)
- $f_k$ opposes the **direction of sliding** (velocity relative to the surface)
- $\\mu_k < \\mu_s$ for the same surfaces → it\'s easier to **keep** something moving than to **start** it moving

### Why $\\mu_k < \\mu_s$?

When surfaces are stationary relative to each other, microscopic bonds form between surface irregularities. Once sliding begins, these bonds are continuously broken before they can fully form, reducing the friction force.

### Typical Coefficients

| Surfaces | $\\mu_s$ | $\\mu_k$ |
|----------|--------|--------|
| Rubber on dry concrete | 1.0 | 0.8 |
| Wood on wood | 0.5 | 0.3 |
| Ice on ice | 0.1 | 0.03 |
| Steel on steel (dry) | 0.6 | 0.4 |
| Teflon on steel | 0.04 | 0.04 |
      `
    },
    {
      id: 'fr1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Static vs. Kinetic Friction Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'You push a heavy box with 30 N and it doesn\'t move. The static friction force is:',
            options: [
              '0 N',
              'Less than 30 N',
              'Exactly 30 N',
              'Greater than 30 N'
            ],
            correctAnswer: 2,
            explanation: 'Since the box doesn\'t move, it\'s in equilibrium. Static friction exactly matches the applied force: $f_s = 30$ N. It self-adjusts to prevent motion.'
          },
          {
            question: 'The maximum static friction force is 50 N. You push with 60 N. What happens?',
            options: [
              'The box stays still with $f_s = 60$ N',
              'The box accelerates because the applied force exceeds $f_{s,\\max}$',
              'The box moves at constant velocity',
              'The friction force increases to 60 N'
            ],
            correctAnswer: 1,
            explanation: 'Since 60 N > $f_{s,\\max} = 50$ N, static friction can no longer hold the box. The box begins to move, and kinetic friction ($f_k < f_{s,\\max}$) takes over.'
          },
          {
            question: 'A sliding box has $\\mu_k = 0.3$ and a normal force of 100 N. The kinetic friction force is:',
            options: [
              '3 N',
              '30 N',
              '33 N',
              '300 N'
            ],
            correctAnswer: 1,
            explanation: '$f_k = \\mu_k N = 0.3 \\times 100 = 30$ N.'
          }
        ]
      }
    },
    {
      id: 'fr1-calculations',
      type: 'input-boxes' as const,
      content: `
**Friction Calculations** 🧮

A 20 kg box sits on a horizontal surface. $\\mu_s = 0.50$, $\\mu_k = 0.40$, $g = 10$ $m/s^{2}$.

1) What is the maximum static friction force (in N)?

2) If the box is sliding, what is the kinetic friction force (in N)?

3) You push with 60 N horizontally. Does the box move? What is the friction force (in N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['100', '80', '60'],
        hint1: '$f_{s,\\max} = \\mu_s N = \\mu_s mg = 0.50 \\times 20 \\times 10$.',
        hint2: '$f_k = \\mu_k N = 0.40 \\times 200$.',
        hint3: 'Compare 60 N to $f_{s,\\max} = 100$ N. Since $60 < 100$, the box doesn\'t move and $f_s$ matches the push.',
        explanation: '1) $f_{s,\\max} = 0.50 \\times 200 = 100$ N. 2) $f_k = 0.40 \\times 200 = 80$ N. 3) Since 60 N < 100 N, the box stays still. Static friction = 60 N (matches the applied force).'
      }
    },
    {
      id: 'fr1-dropdown-types',
      type: 'dropdown-select' as const,
      content: `
**Classify the Friction** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A box is pushed but doesn\'t move. The friction type is:',
            options: ['Kinetic', 'Static', 'Rolling', 'No friction'],
            correctIndex: 1,
            explanation: 'The box isn\'t sliding, so static friction acts to prevent motion.'
          },
          {
            label: 'A hockey puck slides across ice. The friction type is:',
            options: ['Kinetic', 'Static', 'Rolling', 'No friction'],
            correctIndex: 0,
            explanation: 'The puck is sliding across the ice, so kinetic friction acts to oppose the sliding.'
          },
          {
            label: 'The tires of a car driving at constant speed on dry road experience:',
            options: ['Kinetic friction', 'Static friction', 'No friction', 'Both types'],
            correctIndex: 1,
            explanation: 'The bottom of a rolling tire is momentarily at rest relative to the road. The tire doesn\'t slide, so it\'s static friction. This is why tires grip the road.'
          },
          {
            label: 'Generally, $\\mu_s$ compared to $\\mu_k$ is:',
            options: ['Smaller', 'Equal', 'Larger', 'Unrelated'],
            correctIndex: 2,
            explanation: '$\\mu_s > \\mu_k$ for the same pair of surfaces. It takes more force to START an object sliding than to KEEP it sliding.'
          }
        ]
      }
    },
    {
      id: 'fr1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Static vs. Kinetic Friction** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 10 kg block on a surface has $\\mu_s = 0.6$ and $\\mu_k = 0.4$. You gradually increase the force you apply. The block just begins to slide when the force reaches ($g = 10$ $m/s^{2}$):',
            options: [
              '40 N',
              '50 N',
              '60 N',
              '100 N'
            ],
            correctAnswer: 2,
            explanation: 'The block slides when the applied force exceeds $f_{s,\\max} = \\mu_s mg = 0.6 \\times 10 \\times 10 = 60$ N.'
          },
          {
            question: 'Once the block from the previous question starts sliding, if you maintain 60 N, the block:',
            options: [
              'Moves at constant velocity',
              'Accelerates because $f_k < f_s$',
              'Decelerates because friction is strong',
              'Stops immediately'
            ],
            correctAnswer: 1,
            explanation: 'Once sliding, friction drops to $f_k = \\mu_k mg = 0.4 \\times 100 = 40$ N. With 60 N applied and only 40 N friction, $F_{\\text{net}} = 20$ N, so the block accelerates.'
          }
        ]
      }
    }
  ]
}
