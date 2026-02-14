export const physics1EnergyInShmPart3Data = {
  topicSlug: 'energy-in-shm',
  sections: [
    {
      id: 'se3-intro',
      type: 'text' as const,
      content: `
# 📐 Energy at Any Position

**Part 3 of 7 — Energy in Simple Harmonic Motion**

Using energy conservation, we can find the speed of an oscillating object at any position — not just at the endpoints or equilibrium.
      `
    },
    {
      id: 'se3-conservation',
      type: 'text' as const,
      content: `
## The Master Energy Equation

At any displacement $x$:

$$\\frac{1}{2}kA^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$$

Solving for velocity at position $x$:

$$v = \\pm\\sqrt{\\frac{k}{m}(A^2 - x^2)} = \\pm\\omega\\sqrt{A^2 - x^2}$$

### Special Cases

| Position | Speed |
|----------|-------|
| $x = 0$ | $v_{\\text{max}} = A\\omega = A\\sqrt{k/m}$ |
| $x = \\pm A$ | $v = 0$ |
| $x = \\pm A/2$ | $v = \\frac{\\sqrt{3}}{2}A\\omega \\approx 0.866 \\cdot v_{\\text{max}}$ |
| $x = \\pm A/\\sqrt{2}$ | $v = \\frac{1}{\\sqrt{2}}A\\omega \\approx 0.707 \\cdot v_{\\text{max}}$ |

### Energy Fractions

At $x = A/\\sqrt{2}$:
- $PE = \\frac{1}{2}k(A/\\sqrt{2})^2 = \\frac{1}{4}kA^2 = E/2$
- $KE = E/2$
- This is where **KE = PE** (energy is split equally!)
      `
    },
    {
      id: 'se3-solving-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

### Finding Speed at a Given Position

1. Find total energy: $E = \\frac{1}{2}kA^2$
2. Find PE at position: $PE = \\frac{1}{2}kx^2$
3. Find KE: $KE = E - PE$
4. Find speed: $v = \\sqrt{2 \\cdot KE/m}$

### Finding Position at a Given Speed

1. Find total energy: $E = \\frac{1}{2}kA^2$
2. Find KE: $KE = \\frac{1}{2}mv^2$
3. Find PE: $PE = E - KE$
4. Find position: $x = \\sqrt{2 \\cdot PE/k}$

### Energy Bar Charts

At each position, you can draw a bar chart:
- Total bar height is constant ($= E$)
- KE bar shrinks as PE bar grows (moving away from equilibrium)
- PE bar shrinks as KE bar grows (moving toward equilibrium)
      `
    },
    {
      id: 'se3-speed-quiz',
      type: 'multiple-choice' as const,
      content: `
**Speed at a Position Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A mass on a spring oscillates with amplitude $A$. At $x = A/2$, the fraction of total energy that is kinetic is:',
            options: [
              '$1/4$',
              '$1/2$',
              '$3/4$',
              '$1$'
            ],
            correctAnswer: 2,
            explanation: '$PE = \\frac{1}{2}k(A/2)^2 = \\frac{1}{4} \\cdot \\frac{1}{2}kA^2 = E/4$. So $KE = E - E/4 = 3E/4$. Three-quarters of the energy is kinetic.'
          },
          {
            question: 'At what displacement is the speed equal to half the maximum speed?',
            options: [
              '$x = A/2$',
              '$x = A\\sqrt{3}/2$',
              '$x = A/4$',
              '$x = A/\\sqrt{2}$'
            ],
            correctAnswer: 1,
            explanation: '$v = \\omega\\sqrt{A^2 - x^2} = v_{\\text{max}}/2$. So $\\sqrt{A^2 - x^2} = A/2$, $A^2 - x^2 = A^2/4$, $x^2 = 3A^2/4$, $x = A\\sqrt{3}/2$.'
          },
          {
            question: 'A block at $x = 0.06$ m has $KE = 0.32$ J. If $k = 200$ N/m, the total energy is:',
            options: [
              '$0.32$ J',
              '$0.68$ J',
              '$0.36$ J',
              '$0.68$ J'
            ],
            correctAnswer: 1,
            explanation: '$PE = \\frac{1}{2}(200)(0.06)^2 = 0.36$ J. $E = KE + PE = 0.32 + 0.36 = 0.68$ J.'
          }
        ]
      }
    },
    {
      id: 'se3-calculations',
      type: 'input-boxes' as const,
      content: `
**Position-Energy Calculations** 🧮

A 2.0 kg block on a spring ($k = 200$ N/m) oscillates with amplitude $A = 0.20$ m.

1) What is the total energy? (in J)

2) What is the speed at $x = 0.12$ m? (in m/s)

3) At what displacement is the speed 1.0 m/s? (in m)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.0', '1.6', '0.17'],
        hint1: '$E = \\frac{1}{2}kA^2 = \\frac{1}{2}(200)(0.20)^2$',
        hint2: '$v = \\sqrt{(k/m)(A^2 - x^2)} = \\sqrt{(200/2.0)(0.04 - 0.0144)}$',
        hint3: '$KE = \\frac{1}{2}mv^2 = 1.0$ J. $PE = E - KE = 3.0$ J. $x = \\sqrt{2(3.0)/200}$',
        explanation: '1) $E = \\frac{1}{2}(200)(0.04) = 4.0$ J. 2) $v = \\sqrt{100(0.04 - 0.0144)} = \\sqrt{100(0.0256)} = \\sqrt{2.56} = 1.6$ m/s. 3) $KE = \\frac{1}{2}(2.0)(1.0)^2 = 1.0$ J. $PE = 4.0 - 1.0 = 3.0$ J. $x = \\sqrt{2(3.0)/200} = \\sqrt{0.03} = 0.173 \\approx 0.17$ m.'
      }
    },
    {
      id: 'se3-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Energy at Any Position Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The correct energy conservation equation at any position x in SHM is:',
            options: ['½kA² = ½kx² + ½mv²', '½kA² = ½mv²', '½kx² = ½mv²', 'kA = mv'],
            correctIndex: 0,
            explanation: 'The energy conservation equation at any position is $\\frac{1}{2}kA^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$.'
          },
          {
            label: 'The kinetic energy equals the potential energy at a displacement of:',
            options: ['x = A/2', 'x = A/√2', 'x = A√3/2', 'x = 0'],
            correctIndex: 1,
            explanation: 'KE = PE when $\\frac{1}{2}kx^2 = \\frac{1}{2}k(A^2 - x^2)$, giving $x = A/\\sqrt{2}$.'
          },
          {
            label: 'As displacement from equilibrium increases, the potential energy:',
            options: ['decreases linearly', 'increases linearly', 'decreases as x²', 'increases as x²'],
            correctIndex: 3,
            explanation: 'The PE increases as $x^2$: $PE = \\frac{1}{2}kx^2$, which is a parabolic (quadratic) increase.'
          }
        ]
      }
    },
    {
      id: 'se3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Energy at Any Position** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A mass on a spring has $v_{\\text{max}} = 4.0$ m/s. At a point where $v = 2.0$ m/s, the fraction of total energy that is potential is:',
            options: [
              '$1/4$',
              '$1/2$',
              '$3/4$',
              '$1/3$'
            ],
            correctAnswer: 2,
            explanation: '$KE/E = v^2/v_{\\text{max}}^2 = 4/16 = 1/4$. So $PE/E = 1 - 1/4 = 3/4$.'
          },
          {
            question: 'A block oscillates with $A = 0.10$ m and $k = 500$ N/m. The KE at $x = 0.08$ m is:',
            options: [
              '$0.90$ J',
              '$1.60$ J',
              '$0.50$ J',
              '$0.10$ J'
            ],
            correctAnswer: 0,
            explanation: '$E = \\frac{1}{2}(500)(0.01) = 2.5$ J. $PE = \\frac{1}{2}(500)(0.0064) = 1.6$ J. $KE = 2.5 - 1.6 = 0.90$ J.'
          }
        ]
      }
    }
  ]
}
