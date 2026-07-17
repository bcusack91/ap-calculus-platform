export const physics1WorkAndKineticEnergyPart3Data = {
  topicSlug: 'work-and-kinetic-energy',
  sections: [
    {
      id: 'wk3-intro',
      type: 'text' as const,
      content: `
# 🏃 Kinetic Energy: $KE = \\frac{1}{2}mv^2$

**Part 3 of 7 — Work and Kinetic Energy**

Kinetic energy is the energy of motion. Every moving object — from a tiny electron to a massive truck — possesses kinetic energy. In this lesson, we\'ll explore the properties of kinetic energy and how it depends on mass and speed.
      `
    },
    {
      id: 'wk3-definition',
      type: 'text' as const,
      content: `
## Defining Kinetic Energy

The **kinetic energy** of an object with mass $m$ moving at speed $v$ is:

$$KE = \\frac{1}{2}mv^2$$

### Properties

| Property | Detail |
|----------|--------|
| **Units** | Joules (J) = $kg\\cdot m^{2}/s^{2}$ |
| **Sign** | Always $\\geq 0$ (mass and $v^2$ are both non-negative) |
| **Scalar** | Not a vector — depends on speed, not direction |
| **Zero when** | $v = 0$ (object is at rest) |

### The $v^2$ Dependence

Kinetic energy depends on the **square** of the speed:

| Speed | KE |
|-------|-----|
| $v$ | $\\frac{1}{2}mv^2$ |
| $2v$ | $\\frac{1}{2}m(2v)^2 = 4 \\times \\frac{1}{2}mv^2$ |
| $3v$ | $\\frac{1}{2}m(3v)^2 = 9 \\times \\frac{1}{2}mv^2$ |

**Doubling speed quadruples KE.** This is why highway accidents at 120 km/h are four times more destructive than at 60 km/h.
      `
    },
    {
      id: 'wk3-mass-vs-speed',
      type: 'text' as const,
      content: `
## Mass vs. Speed: Which Matters More?

KE depends linearly on mass but quadratically on speed:

$$KE = \\frac{1}{2}mv^2$$

### Comparison

- Doubling mass → KE doubles
- Doubling speed → KE quadruples

This means **speed has a greater effect** on kinetic energy than mass.

### Real-World Examples

| Object | Mass (kg) | Speed (m/s) | KE (J) |
|--------|-----------|-------------|--------|
| Walking person | 70 | 1.5 | 79 |
| Running person | 70 | 8 | 2,240 |
| Car on highway | 1,500 | 30 | 675,000 |
| Baseball pitch | 0.145 | 40 | 116 |
| Bullet | 0.01 | 700 | 2,450 |

A tiny bullet can have more KE than a walking person because of its enormous speed!
      `
    },
    {
      id: 'wk3-reference-frames',
      type: 'text' as const,
      content: `
## KE and Reference Frames

Kinetic energy depends on the **reference frame**:

- A passenger sitting on a train has $KE = 0$ relative to the train
- The same passenger has $KE = \\frac{1}{2}mv_{\\text{train}}^2$ relative to the ground

In AP Physics 1, we typically use the **ground** as our reference frame unless stated otherwise.

### KE Is Not Conserved

Unlike total energy, kinetic energy alone is **not necessarily conserved**. It can be:
- Converted to potential energy (ball thrown upward)
- Converted to thermal energy (friction)
- Transferred between objects (collisions)
      `
    },
    {
      id: 'wk3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Kinetic Energy Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Car A has twice the mass of Car B. Both travel at the same speed. The ratio $KE_A / KE_B$ is:',
            options: [
              '1/2',
              '1',
              '2',
              '4'
            ],
            correctAnswer: 2,
            explanation: '$KE = \\frac{1}{2}mv^2$. With the same speed: $KE_A/KE_B = m_A/m_B = 2$. KE is directly proportional to mass.'
          },
          {
            question: 'Car A and Car B have the same mass. Car A moves at twice the speed of Car B. The ratio $KE_A / KE_B$ is:',
            options: [
              '1',
              '2',
              '4',
              '8'
            ],
            correctAnswer: 2,
            explanation: '$KE_A/KE_B = v_A^2/v_B^2 = (2v)^2/v^2 = 4$. KE is proportional to $v^2$, so doubling speed quadruples KE.'
          },
          {
            question: 'An object moves to the left with speed $v$. Its kinetic energy is:',
            options: [
              'Negative, because it moves in the negative direction',
              'Zero, because leftward is negative',
              'Positive: $\\frac{1}{2}mv^2$',
              'Depends on the reference frame'
            ],
            correctAnswer: 2,
            explanation: 'KE is a scalar and always non-negative. $KE = \\frac{1}{2}mv^2$ depends on speed (magnitude of velocity), not direction.'
          }
        ]
      }
    },
    {
      id: 'wk3-calculations',
      type: 'input-boxes' as const,
      content: `
**Kinetic Energy Calculations** 🧮

1) What is the kinetic energy of a 2 kg ball moving at 6 m/s (in J)?

2) A 1200 kg car has a kinetic energy of 150,000 J. What is its speed (in m/s, to the nearest whole number)?

3) A 0.5 kg object moving at 10 m/s has its speed tripled. What is the new kinetic energy (in J)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['36', '16', '225'],
        hint1: '$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}(2)(6)^2$.',
        hint2: '$v = \\sqrt{2 \\cdot KE / m} = \\sqrt{2(150{,}000)/1200}$.',
        hint3: 'New speed = $3 \\times 10 = 30$ m/s. $KE = \\frac{1}{2}(0.5)(30)^2$.',
        explanation: '1) $KE = \\frac{1}{2}(2)(36) = 36$ J. 2) $v = \\sqrt{300{,}000/1200} = \\sqrt{250} \\approx 15.8 \\approx 16$ m/s. 3) $KE = \\frac{1}{2}(0.5)(900) = 225$ J. Note: tripling speed makes KE $9 \\times$ the original ($9 \\times 25 = 225$).'
      }
    },
    {
      id: 'wk3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Kinetic Energy Comparisons** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A truck (mass $M$) at speed $v$ vs. a car (mass $M/2$) at speed $2v$. Which has more KE?',
            options: ['Truck', 'Car', 'Same KE'],
            correctIndex: 1,
            explanation: 'Truck: $\\frac{1}{2}Mv^2$. Car: $\\frac{1}{2}(M/2)(2v)^2 = \\frac{1}{2}(M/2)(4v^2) = Mv^2$. The car has twice the KE of the truck!'
          },
          {
            label: 'You triple the mass and halve the speed. The new KE compared to the original is:',
            options: ['3/4 as much', '3/2 as much', '6 times as much', '3/4 as much'],
            correctIndex: 0,
            explanation: 'New KE $= \\frac{1}{2}(3m)(v/2)^2 = \\frac{1}{2}(3m)(v^2/4) = \\frac{3}{4} \\cdot \\frac{1}{2}mv^2$. It\'s 3/4 of the original.'
          },
          {
            label: 'Two objects have the same KE. Object A has 4× the mass. Its speed compared to B is:',
            options: ['1/4 as fast', '1/2 as fast', '2× as fast', '4× as fast'],
            correctIndex: 1,
            explanation: '$\\frac{1}{2}(4m)v_A^2 = \\frac{1}{2}m v_B^2 \\Rightarrow v_A^2 = v_B^2/4 \\Rightarrow v_A = v_B/2$.'
          },
          {
            label: 'The SI unit of kinetic energy is the Joule, which equals:',
            options: ['kg·m/s', '$kg\\cdot m^{2}/s^{2}$', 'N·s', '$kg\\cdot m/s^{2}$'],
            correctIndex: 1,
            explanation: '$[KE] = \\text{kg} \\cdot (\\text{m/s})^2 = \\text{kg} \\cdot \\text{m}^2/\\text{s}^2 = $ J.'
          }
        ]
      }
    },
    {
      id: 'wk3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Kinetic Energy** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 60 kg runner at 5 m/s speeds up to 10 m/s. The change in kinetic energy is:',
            options: [
              '750 J',
              '1500 J',
              '2250 J',
              '3000 J'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta KE = \\frac{1}{2}(60)(10^2) - \\frac{1}{2}(60)(5^2) = 3000 - 750 = 2250$ J.'
          },
          {
            question: 'If the speed of every molecule in a gas is doubled, the total kinetic energy of the gas:',
            options: [
              'Doubles',
              'Triples',
              'Quadruples',
              'Is unchanged'
            ],
            correctAnswer: 2,
            explanation: '$KE \\propto v^2$. Doubling every molecule\'s speed quadruples each molecule\'s KE, so total KE quadruples.'
          }
        ]
      }
    }
  ]
}
