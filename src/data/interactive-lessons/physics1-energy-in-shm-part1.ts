export const physics1EnergyInShmPart1Data = {
  topicSlug: 'energy-in-shm',
  sections: [
    {
      id: 'se1-intro',
      type: 'text' as const,
      content: `
# ⚡ KE and PE Exchange in SHM

**Part 1 of 7 — Energy in Simple Harmonic Motion**

In SHM, energy continuously transforms between kinetic and potential forms. The total mechanical energy remains constant (no friction), but the split between KE and PE changes throughout the motion.
      `
    },
    {
      id: 'se1-energy-types',
      type: 'text' as const,
      content: `
## Energy Forms in SHM

### Mass-Spring System

$$KE = \\frac{1}{2}mv^2 \\qquad PE = \\frac{1}{2}kx^2$$

### Total Mechanical Energy

$$E = KE + PE = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2 = \\text{constant}$$

### Energy at Special Points

| Position | KE | PE | Total E |
|----------|----|----|---------|
| $x = 0$ (equilibrium) | **Maximum** | **Zero** | $\\frac{1}{2}mv_{\\text{max}}^2$ |
| $x = \\pm A$ (endpoints) | **Zero** | **Maximum** | $\\frac{1}{2}kA^2$ |
| $x$ (any position) | $\\frac{1}{2}mv^2$ | $\\frac{1}{2}kx^2$ | $\\frac{1}{2}kA^2$ |

At the endpoints, $v = 0$ so all energy is potential. At equilibrium, $x = 0$ so all energy is kinetic.
      `
    },
    {
      id: 'se1-graphs',
      type: 'text' as const,
      content: `
## Energy vs. Position Graphs

### What the Graphs Look Like

- **PE curve**: Parabola $U = \\frac{1}{2}kx^2$ (upward-opening, minimum at $x = 0$)
- **KE curve**: Inverted parabola (maximum at $x = 0$, zero at $x = \\pm A$)
- **Total E**: Horizontal line at $E = \\frac{1}{2}kA^2$

### Energy vs. Time

- **PE oscillates** as $\\cos^2(\\omega t)$
- **KE oscillates** as $\\sin^2(\\omega t)$
- Both oscillate at **twice the frequency** of the position oscillation
- When one is at maximum, the other is at minimum

### Pendulum Energy

For a pendulum, $PE = mgh$ where $h$ is the height above the lowest point:
- At the bottom: $KE$ is max, $PE$ is min
- At the sides: $KE = 0$, $PE$ is max
      `
    },
    {
      id: 'se1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Energy Exchange Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a frictionless mass-spring system, when the block passes through the equilibrium position:',
            options: [
              'KE = 0, PE = maximum',
              'KE = maximum, PE = 0',
              'KE = PE',
              'Both KE and PE are zero'
            ],
            correctAnswer: 1,
            explanation: 'At $x = 0$: $PE = \\frac{1}{2}k(0)^2 = 0$ and all energy is kinetic. The speed is at its maximum.'
          },
          {
            question: 'The total mechanical energy of an ideal SHM system:',
            options: [
              'Increases with time',
              'Decreases with time',
              'Oscillates between maximum and minimum',
              'Remains constant throughout the motion'
            ],
            correctAnswer: 3,
            explanation: 'Without friction, total mechanical energy $E = KE + PE$ is conserved. It stays at $\\frac{1}{2}kA^2$ throughout.'
          },
          {
            question: 'In a swinging pendulum, the potential energy is maximum when:',
            options: [
              'The bob is at the lowest point',
              'The bob is at the highest point',
              'The bob is moving fastest',
              'The period is longest'
            ],
            correctAnswer: 1,
            explanation: 'At the highest points of the swing, the bob is momentarily at rest ($KE = 0$) and all energy is gravitational PE.'
          }
        ]
      }
    },
    {
      id: 'se1-energy-calc',
      type: 'input-boxes' as const,
      content: `
**Energy Calculations** 🧮

A 0.40 kg block on a spring ($k = 160$ N/m) oscillates with amplitude $A = 0.10$ m.

1) What is the total energy? (in J)

2) What is the maximum speed? (in m/s)

3) What is the PE when $x = 0.06$ m? (in J, round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.8', '2.0', '0.288'],
        hint1: '$E = \\frac{1}{2}kA^2 = \\frac{1}{2}(160)(0.10)^2$',
        hint2: '$\\frac{1}{2}mv_{\\text{max}}^2 = E \\Rightarrow v_{\\text{max}} = \\sqrt{2E/m}$',
        hint3: '$PE = \\frac{1}{2}kx^2 = \\frac{1}{2}(160)(0.06)^2$',
        explanation: '1) $E = \\frac{1}{2}(160)(0.01) = 0.80$ J. 2) $v_{\\text{max}} = \\sqrt{2(0.80)/0.40} = \\sqrt{4.0} = 2.0$ m/s. 3) $PE = \\frac{1}{2}(160)(0.0036) = 0.288$ J.'
      }
    },
    {
      id: 'se1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Energy Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In ideal SHM, the type of energy that remains constant throughout the motion is:',
            options: ['kinetic energy', 'potential energy', 'total energy', 'thermal energy'],
            correctIndex: 2,
            explanation: 'Total mechanical energy remains constant in ideal SHM — energy transforms between KE and PE but the total does not change.'
          },
          {
            label: 'The kinetic energy in SHM is at its maximum value:',
            options: ['at the equilibrium position', 'at the endpoints', 'at half amplitude', 'at all positions equally'],
            correctIndex: 0,
            explanation: 'The kinetic energy is maximum at the equilibrium position ($x = 0$), where $PE = 0$ and all energy is KE.'
          },
          {
            label: 'During each full cycle of SHM, the KE and PE each reach their maximum value:',
            options: ['once', 'twice', 'three times', 'four times'],
            correctIndex: 1,
            explanation: 'The KE and PE each oscillate at twice the frequency of the position. This is because $KE \\propto v^2 \\propto \\sin^2(\\omega t)$, which has frequency $2f$.'
          }
        ]
      }
    },
    {
      id: 'se1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — KE and PE Exchange** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'At what displacement does KE equal PE in SHM?',
            options: [
              '$x = A$',
              '$x = A/2$',
              '$x = A/\\sqrt{2}$',
              '$x = 0$'
            ],
            correctAnswer: 2,
            explanation: '$KE = PE$ means $\\frac{1}{2}kx^2 = \\frac{1}{2}k(A^2 - x^2)$, so $x^2 = A^2 - x^2$, $2x^2 = A^2$, $x = A/\\sqrt{2}$.'
          },
          {
            question: 'If the amplitude of oscillation is doubled, the total energy:',
            options: [
              'Doubles',
              'Quadruples',
              'Stays the same',
              'Halves'
            ],
            correctAnswer: 1,
            explanation: '$E = \\frac{1}{2}kA^2$. If $A \\to 2A$: $E \\to \\frac{1}{2}k(2A)^2 = 4 \\times \\frac{1}{2}kA^2$. Energy quadruples.'
          }
        ]
      }
    }
  ]
}
