export const physics1WorkAndKineticEnergyPart1Data = {
  topicSlug: 'work-and-kinetic-energy',
  sections: [
    {
      id: 'wk1-intro',
      type: 'text' as const,
      content: `
# ⚙️ Work: $W = Fd\\cos\\theta$

**Part 1 of 7 — Work and Kinetic Energy**

In everyday language, "work" means effort. In physics, **work** has a precise definition: it\'s the transfer of energy to an object by a force acting over a displacement. Understanding work is the gateway to all of energy physics.

In this lesson, we\'ll define work mathematically and explore when work is positive, negative, or zero.
      `
    },
    {
      id: 'wk1-definition',
      type: 'text' as const,
      content: `
## The Definition of Work

The **work** done by a constant force $\\vec{F}$ on an object that undergoes a displacement $\\vec{d}$ is:

$$W = Fd\\cos\\theta$$

where:
- $F$ = magnitude of the force (N)
- $d$ = magnitude of the displacement (m)
- $\\theta$ = angle between the force and displacement vectors
- $W$ = work (measured in **Joules**, J = N·m)

### Key Insight

Work depends on three things:
1. How **strong** the force is ($F$)
2. How **far** the object moves ($d$)
3. The **angle** between force and displacement ($\\theta$)

If any of these is zero, the work is zero!
      `
    },
    {
      id: 'wk1-sign-of-work',
      type: 'text' as const,
      content: `
## Positive, Negative, and Zero Work

The sign of work is determined entirely by $\\cos\\theta$:

| Angle $\\theta$ | $\\cos\\theta$ | Work | Meaning |
|----------------|-------------|------|---------|
| $0°$ | $+1$ | Positive | Force is in direction of motion |
| $0° < \\theta < 90°$ | Positive | Positive | Force has a component along motion |
| $90°$ | $0$ | **Zero** | Force is perpendicular to motion |
| $90° < \\theta < 180°$ | Negative | Negative | Force has a component opposing motion |
| $180°$ | $-1$ | Negative | Force directly opposes motion |

### Examples

- **Positive work**: You push a box forward, and it moves forward ($\\theta = 0°$)
- **Negative work**: Friction acts backward on a sliding box ($\\theta = 180°$)
- **Zero work**: A waiter carries a tray horizontally — gravity pulls down, motion is horizontal ($\\theta = 90°$)
- **Zero work**: The normal force on a box sliding on a flat surface ($\\theta = 90°$)

### Crucial Point

**Only the component of force parallel to displacement does work.** The perpendicular component changes the direction of motion but does no work.
      `
    },
    {
      id: 'wk1-special-cases',
      type: 'text' as const,
      content: `
## Special Cases

### Force Along the Displacement ($\\theta = 0°$)

$$W = Fd\\cos(0°) = Fd$$

Maximum work — the entire force contributes.

### Force Opposite to Displacement ($\\theta = 180°$)

$$W = Fd\\cos(180°) = -Fd$$

Maximum negative work — the force removes energy from the object.

### Force at an Angle

When you pull a sled at angle $\\theta$ above horizontal with force $F$:
- Only the horizontal component $F\\cos\\theta$ does work
- The vertical component $F\\sin\\theta$ partially supports the weight but does no work (perpendicular to motion)

$$W = Fd\\cos\\theta$$
      `
    },
    {
      id: 'wk1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Work Concepts Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A person pushes a box across the floor with a horizontal force of 50 N for a distance of 4 m. The work done by the person is:',
            options: [
              '0 J',
              '100 J',
              '200 J',
              '12.5 J'
            ],
            correctAnswer: 2,
            explanation: '$W = Fd\\cos\\theta = 50 \\times 4 \\times \\cos(0°) = 200$ J. The force is in the direction of motion, so $\\theta = 0°$.'
          },
          {
            question: 'A student carries a 20 N book horizontally across a room for 5 m. The work done by gravity on the book is:',
            options: [
              '100 J',
              '0 J',
              '-100 J',
              '50 J'
            ],
            correctAnswer: 1,
            explanation: 'Gravity acts downward, but the displacement is horizontal. The angle between them is $90°$, so $W = Fd\\cos(90°) = 0$ J. A perpendicular force does no work.'
          },
          {
            question: 'Friction does −30 J of work on a sliding object. This means friction:',
            options: [
              'Added 30 J of energy to the object',
              'Removed 30 J of energy from the object',
              'Did no work on the object',
              'Moved the object 30 m'
            ],
            correctAnswer: 1,
            explanation: 'Negative work means the force removes energy from the object. Friction always does negative work on a sliding object because it opposes the direction of motion ($\\theta = 180°$).'
          }
        ]
      }
    },
    {
      id: 'wk1-calculations',
      type: 'input-boxes' as const,
      content: `
**Work Calculations** 🧮

Use $g = 10$ m/s² where needed.

1) A force of 80 N pulls a sled at $\\theta = 60°$ above the horizontal for a distance of 10 m. What is the work done (in J)?

2) A 5 kg block slides 3 m across a floor. The kinetic friction force is 20 N. What is the work done by friction (in J)?

3) A 2 kg object is lifted straight up by 4 m at constant velocity. What is the work done by the lifting force (in J)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['400', '-60', '80'],
        hint1: '$W = Fd\\cos\\theta = 80 \\times 10 \\times \\cos(60°)$. Recall $\\cos(60°) = 0.5$.',
        hint2: 'Friction opposes motion, so $\\theta = 180°$. $W = 20 \\times 3 \\times \\cos(180°) = -60$ J.',
        hint3: 'At constant velocity, the lifting force equals gravity: $F = mg = 2 \\times 10 = 20$ N. $W = 20 \\times 4 \\times \\cos(0°) = 80$ J.',
        explanation: '1) $W = 80 \\times 10 \\times 0.5 = 400$ J. 2) $W = 20 \\times 3 \\times (-1) = -60$ J. 3) $F = mg = 20$ N upward, displacement is upward, so $W = 20 \\times 4 = 80$ J.'
      }
    },
    {
      id: 'wk1-dropdown-classify',
      type: 'dropdown-select' as const,
      content: `
**Classify the Work** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You push a lawnmower forward. Work done by your push is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 0,
            explanation: 'Your force has a component in the direction of motion, so work is positive.'
          },
          {
            label: 'The normal force on a box sliding across a flat floor does:',
            options: ['Positive work', 'Negative work', 'Zero work'],
            correctIndex: 2,
            explanation: 'The normal force is perpendicular to the displacement ($\\theta = 90°$), so $W = Fd\\cos(90°) = 0$.'
          },
          {
            label: 'A ball is thrown upward. While rising, gravity does:',
            options: ['Positive work', 'Negative work', 'Zero work'],
            correctIndex: 1,
            explanation: 'Gravity points downward, but displacement is upward ($\\theta = 180°$), so $W = -mgh < 0$. Gravity removes kinetic energy as the ball rises.'
          },
          {
            label: 'A planet orbits in a perfect circle. The gravitational force does:',
            options: ['Positive work', 'Negative work', 'Zero work'],
            correctIndex: 2,
            explanation: 'In a perfect circle, gravity is always perpendicular to the velocity (centripetal), so it does zero work. The planet\'s speed stays constant.'
          }
        ]
      }
    },
    {
      id: 'wk1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Work** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A rope pulls a 10 kg crate 5 m across a floor at a 37° angle above horizontal with a tension of 100 N. The work done by the tension is closest to:',
            options: [
              '300 J',
              '400 J',
              '500 J',
              '600 J'
            ],
            correctAnswer: 1,
            explanation: '$W = Fd\\cos\\theta = 100 \\times 5 \\times \\cos(37°) = 500 \\times 0.8 = 400$ J. (Using $\\cos(37°) \\approx 0.8$.)'
          },
          {
            question: 'Which of the following forces NEVER does work on an object?',
            options: [
              'Gravity',
              'Friction',
              'Centripetal force',
              'Tension'
            ],
            correctAnswer: 2,
            explanation: 'The centripetal force is always perpendicular to velocity ($\\theta = 90°$), so $\\cos(90°) = 0$ and it never does work. It only changes direction, not speed.'
          }
        ]
      }
    }
  ]
}
