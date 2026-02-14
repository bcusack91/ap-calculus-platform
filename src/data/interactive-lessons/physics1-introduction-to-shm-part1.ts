export const physics1IntroductionToShmPart1Data = {
  topicSlug: 'introduction-to-shm',
  sections: [
    {
      id: 'sh1-intro',
      type: 'text' as const,
      content: `
# 🔄 What is Simple Harmonic Motion?

**Part 1 of 7 — Restoring Force Proportional to Displacement**

Simple Harmonic Motion (SHM) is one of the most fundamental types of motion in physics. It occurs whenever a restoring force is **proportional** to the displacement from equilibrium.
      `
    },
    {
      id: 'sh1-definition',
      type: 'text' as const,
      content: `
## Defining SHM

A system exhibits **Simple Harmonic Motion** when the net force is:

$$F = -kx$$

Where:
- $F$ = restoring force
- $k$ = a positive constant (spring constant for a mass-spring system)
- $x$ = displacement from equilibrium
- The negative sign means the force always points **back toward equilibrium**

### Why "Simple"?

The force is directly proportional to displacement (linear), making the math relatively straightforward. Real systems often approximate SHM for small displacements.

### Why "Harmonic"?

The resulting motion is **sinusoidal** (sine/cosine waves), which are the fundamental building blocks of harmonic analysis.

### Examples of SHM
- Mass on a spring
- Simple pendulum (small angles)
- Vibrating guitar string
- Atoms oscillating in a crystal lattice
- LC electrical circuits
      `
    },
    {
      id: 'sh1-restoring-force',
      type: 'text' as const,
      content: `
## The Restoring Force

The key feature of SHM is the **restoring force** — it always acts to pull the object back to its equilibrium position.

### At Different Positions

| Position | Displacement | Force | Acceleration |
|----------|-------------|-------|-------------|
| Equilibrium | $x = 0$ | $F = 0$ | $a = 0$ |
| Stretched/right | $x > 0$ | $F < 0$ (left) | $a < 0$ (left) |
| Compressed/left | $x < 0$ | $F > 0$ (right) | $a > 0$ (right) |

### Acceleration

Using Newton's Second Law:

$$a = \\frac{F}{m} = -\\frac{k}{m}x = -\\omega^2 x$$

where $\\omega = \\sqrt{k/m}$ is the angular frequency.

The acceleration is **proportional to displacement** and always directed toward equilibrium. This is the hallmark of SHM.
      `
    },
    {
      id: 'sh1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**SHM Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In SHM, the restoring force is:',
            options: [
              'Constant throughout the motion',
              'Proportional to displacement and directed toward equilibrium',
              'Proportional to velocity',
              'Always in the same direction'
            ],
            correctAnswer: 1,
            explanation: 'The defining feature of SHM is $F = -kx$: force proportional to displacement, always pointing back toward equilibrium.'
          },
          {
            question: 'At the equilibrium position of SHM, the:',
            options: [
              'Force and velocity are both maximum',
              'Force is maximum and velocity is zero',
              'Force is zero and velocity is maximum',
              'Force and velocity are both zero'
            ],
            correctAnswer: 2,
            explanation: 'At equilibrium ($x = 0$): $F = -k(0) = 0$ and the object moves fastest (all PE converted to KE).'
          },
          {
            question: 'Which of the following is NOT an example of SHM?',
            options: [
              'A mass bouncing on a spring',
              'A pendulum swinging at small angles',
              'A ball bouncing off a hard floor',
              'A vibrating tuning fork'
            ],
            correctAnswer: 2,
            explanation: 'A ball bouncing off a floor does not have a restoring force proportional to displacement. The force is impulsive (sudden) at the bounce and gravitational in between.'
          }
        ]
      }
    },
    {
      id: 'sh1-input-drill',
      type: 'input-boxes' as const,
      content: `
**SHM Basics Drill** 🧮

1) A spring with $k = 200$ N/m is stretched 0.1 m from equilibrium. What is the restoring force magnitude? (in N)

2) A 2 kg mass on a spring ($k = 50$ N/m) is displaced 0.3 m. What is the magnitude of its acceleration? (in m/s²)

3) For a mass-spring system, $\\omega = \\sqrt{k/m}$. If $k = 80$ N/m and $m = 5$ kg, what is $\\omega$? (in rad/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '7.5', '4'],
        hint1: '$|F| = kx = 200(0.1)$',
        hint2: '$|a| = kx/m = 50(0.3)/2$',
        hint3: '$\\omega = \\sqrt{80/5} = \\sqrt{16}$',
        explanation: '1) $|F| = 200(0.1) = 20$ N. 2) $|a| = 50(0.3)/2 = 7.5$ m/s². 3) $\\omega = \\sqrt{16} = 4$ rad/s.'
      }
    },
    {
      id: 'sh1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**SHM Foundations** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The restoring force in simple harmonic motion is described by:',
            options: ['F = kx', 'F = -kx', 'F = kx²', 'F = -kv'],
            correctIndex: 1,
            explanation: 'SHM requires $F = -kx$: a restoring force proportional to displacement with the negative sign indicating it opposes the displacement.'
          },
          {
            label: 'The restoring force and acceleration in SHM are greatest:',
            options: ['at equilibrium', 'at maximum displacement', 'halfway between', 'it is constant'],
            correctIndex: 1,
            explanation: 'Force and acceleration are maximum at maximum displacement (amplitude), where $|F| = kA$.'
          },
          {
            label: 'The position as a function of time in SHM is:',
            options: ['constant', 'sinusoidal', 'linear in time', 'random'],
            correctIndex: 1,
            explanation: 'The motion in SHM is sinusoidal — described by sine and cosine functions of time.'
          }
        ]
      }
    },
    {
      id: 'sh1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Intro to SHM** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The acceleration in SHM is given by $a = -\\omega^2 x$. This means acceleration is:',
            options: [
              'Proportional to velocity',
              'Proportional to displacement and directed toward equilibrium',
              'Constant',
              'Zero everywhere except at the extremes'
            ],
            correctAnswer: 1,
            explanation: '$a = -\\omega^2 x$ shows that acceleration is proportional to $x$ and the negative sign means it always points toward equilibrium ($x = 0$).'
          },
          {
            question: 'A pendulum swings through a large angle of 60°. Is this motion SHM?',
            options: [
              'Yes, all pendulum motion is SHM',
              'No, SHM requires small angles where $\\sin\\theta \\approx \\theta$',
              'Yes, as long as the string has no mass',
              'No, pendulums never exhibit SHM'
            ],
            correctAnswer: 1,
            explanation: 'A pendulum exhibits SHM only for small angles where $\\sin\\theta \\approx \\theta$ (in radians). At 60°, this approximation breaks down significantly.'
          }
        ]
      }
    }
  ]
}
