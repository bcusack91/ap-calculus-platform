export const physics1ElasticPotentialEnergyPart5Data = {
  topicSlug: 'elastic-potential-energy',
  sections: [
    {
      id: 'ep5-intro',
      type: 'text' as const,
      content: `
# 🔄 Energy in Spring-Mass Oscillations

**Part 5 of 7 — Elastic Potential Energy**

As a spring-mass system oscillates, energy continuously transforms between kinetic and elastic potential energy. Understanding this energy flow is crucial for predicting the motion and solving AP problems.
      `
    },
    {
      id: 'ep5-energy-flow',
      type: 'text' as const,
      content: `
## Energy Flow During Oscillation

For a horizontal spring-mass system oscillating with amplitude $A$ (no friction):

### Total Energy

$$E_{\\text{total}} = \\frac{1}{2}kA^2 = \\text{constant}$$

At any position $x$:

$$E_{\\text{total}} = KE + PE_s = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$$

### Energy at Key Positions

| Position | $x$ | $PE_s$ | $KE$ | Speed |
|----------|------|--------|------|-------|
| Maximum stretch | $+A$ | $\\frac{1}{2}kA^2$ | $0$ | $0$ |
| Equilibrium | $0$ | $0$ | $\\frac{1}{2}kA^2$ | $v_{\\max}$ |
| Maximum compression | $-A$ | $\\frac{1}{2}kA^2$ | $0$ | $0$ |

### Energy vs. Position

At any displacement $x$:

$$KE = \\frac{1}{2}k(A^2 - x^2)$$
$$PE_s = \\frac{1}{2}kx^2$$
$$v = \\sqrt{\\frac{k}{m}(A^2 - x^2)}$$
      `
    },
    {
      id: 'ep5-energy-graphs',
      type: 'text' as const,
      content: `
## Energy Graphs

### PE vs. Position

The elastic PE graph is a **parabola** (upward-opening):
$$PE_s = \\frac{1}{2}kx^2$$
- Minimum ($PE = 0$) at $x = 0$
- Maximum ($PE = \\frac{1}{2}kA^2$) at $x = \\pm A$

### KE vs. Position

The KE graph is an **inverted parabola**:
$$KE = \\frac{1}{2}kA^2 - \\frac{1}{2}kx^2 = \\frac{1}{2}k(A^2 - x^2)$$
- Maximum at $x = 0$
- Zero at $x = \\pm A$

### Total Energy vs. Position

A flat horizontal line at $E = \\frac{1}{2}kA^2$.

### Where Do KE and PE Equal?

Set $KE = PE$:
$$\\frac{1}{2}k(A^2 - x^2) = \\frac{1}{2}kx^2$$
$$A^2 - x^2 = x^2$$
$$x = \\pm \\frac{A}{\\sqrt{2}} \\approx \\pm 0.707A$$
      `
    },
    {
      id: 'ep5-with-gravity',
      type: 'text' as const,
      content: `
## Energy in Vertical Spring-Mass

For a vertical spring-mass system, both gravitational and elastic PE are involved:

$$E_{\\text{total}} = KE + PE_g + PE_s$$

### Simplification

If we measure displacement from the equilibrium position (where $mg = kx_0$), the problem reduces to the horizontal case. The oscillation energy:

$$E = \\frac{1}{2}kA^2$$

where $A$ is measured from the equilibrium position.

### Key Point

Don\'t mix up:
- **Natural length** of spring (no mass attached)
- **Equilibrium position** (mass attached, at rest)
- **Amplitude** (measured from equilibrium, not natural length)
      `
    },
    {
      id: 'ep5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Oscillation Energy Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A block oscillates on a spring with amplitude $A$. When is the kinetic energy maximum?',
            options: [
              'At $x = A$ (maximum stretch)',
              'At $x = 0$ (equilibrium)',
              'At $x = A/2$',
              'KE is constant throughout'
            ],
            correctAnswer: 1,
            explanation: 'At equilibrium ($x = 0$), $PE_s = 0$ and all energy is kinetic: $KE_{\\max} = \\frac{1}{2}kA^2$.'
          },
          {
            question: 'If the amplitude of oscillation is doubled, the total energy:',
            options: [
              'Doubles',
              'Triples',
              'Quadruples',
              'Stays the same'
            ],
            correctAnswer: 2,
            explanation: '$E = \\frac{1}{2}kA^2$. Doubling $A$: $E_{\\text{new}} = \\frac{1}{2}k(2A)^2 = 4 \\times \\frac{1}{2}kA^2$. Energy quadruples!'
          },
          {
            question: 'At $x = A/\\sqrt{2}$, the fraction of total energy that is kinetic is:',
            options: [
              '1/4',
              '1/2',
              '3/4',
              '1/$\\sqrt{2}$'
            ],
            correctAnswer: 1,
            explanation: '$PE = \\frac{1}{2}k(A/\\sqrt{2})^2 = \\frac{1}{2}kA^2/2 = E/2$. So $KE = E - E/2 = E/2$. Half the energy is kinetic.'
          }
        ]
      }
    },
    {
      id: 'ep5-calculations',
      type: 'input-boxes' as const,
      content: `
**Energy in Oscillations Calculations** 🧮

A 0.5 kg block oscillates on a horizontal spring ($k = 200$ N/m) with amplitude $A = 0.1$ m.

1) What is the total energy of the system (in J)?

2) What is the speed of the block at $x = 0.06$ m (in m/s)?

3) At what displacement is the speed half of $v_{\\max}$ (in m, to 3 significant figures)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '1.6', '0.087'],
        hint1: '$E = \\frac{1}{2}kA^2 = \\frac{1}{2}(200)(0.01)$.',
        hint2: '$\\frac{1}{2}mv^2 = E - \\frac{1}{2}kx^2 = 1 - \\frac{1}{2}(200)(0.0036) = 1 - 0.36$.',
        hint3: '$v = v_{\\max}/2 \\Rightarrow KE = \\frac{1}{4}mv_{\\max}^2 = E/4$. So $PE = 3E/4 \\Rightarrow \\frac{1}{2}kx^2 = \\frac{3}{4}E$.',
        explanation: '1) $E = 100(0.01) = 1$ J. 2) $0.25v^2 = 1 - 0.36 = 0.64 \\Rightarrow v^2 = 2.56 \\Rightarrow v = 1.6$ m/s. 3) $PE = 3(1)/4 = 0.75$ J. $x^2 = 2(0.75)/200 = 0.0075 \\Rightarrow x = 0.0866 \\approx 0.087$ m.'
      }
    },
    {
      id: 'ep5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Energy Graph Interpretation** 🔍

A spring-mass system oscillates with amplitude $A$.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At $x = 0$: PE is ___ and KE is ___',
            options: ['max, zero', 'zero, max', 'half, half', 'zero, zero'],
            correctIndex: 1,
            explanation: 'At equilibrium, $PE = \\frac{1}{2}k(0)^2 = 0$ and $KE = E_{\\text{total}}$ (maximum).'
          },
          {
            label: 'At $x = \\pm A$: PE is ___ and KE is ___',
            options: ['max, zero', 'zero, max', 'half, half', 'zero, zero'],
            correctIndex: 0,
            explanation: 'At maximum displacement, $PE = \\frac{1}{2}kA^2$ (maximum) and the block is momentarily at rest ($KE = 0$).'
          },
          {
            label: 'The PE vs. x graph is:',
            options: ['A straight line', 'An upward parabola', 'A downward parabola', 'A constant'],
            correctIndex: 1,
            explanation: '$PE = \\frac{1}{2}kx^2$ is a parabola opening upward with vertex at the origin.'
          },
          {
            label: 'If the spring constant is doubled (same amplitude):',
            options: ['Total energy doubles', 'Total energy halves', 'Total energy quadruples', 'Total energy stays the same'],
            correctIndex: 0,
            explanation: '$E = \\frac{1}{2}kA^2$. Doubling $k$ doubles the total energy (same amplitude).'
          }
        ]
      }
    },
    {
      id: 'ep5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Energy in Oscillations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 1 kg block oscillates on a spring ($k = 400$ N/m) with amplitude 0.05 m. The maximum speed is:',
            options: [
              '0.5 m/s',
              '1 m/s',
              '2 m/s',
              '4 m/s'
            ],
            correctAnswer: 1,
            explanation: '$E = \\frac{1}{2}(400)(0.0025) = 0.5$ J. $\\frac{1}{2}(1)v_{\\max}^2 = 0.5 \\Rightarrow v_{\\max} = 1$ m/s.'
          },
          {
            question: 'A block oscillates with 10 J of total energy. At what fraction of the amplitude does $KE = 3PE$?',
            options: [
              '$A/4$',
              '$A/2$',
              '$A/\\sqrt{2}$',
              '$3A/4$'
            ],
            correctAnswer: 1,
            explanation: '$KE = 3PE$ and $KE + PE = E$. So $3PE + PE = E \\Rightarrow PE = E/4$. $\\frac{1}{2}kx^2 = \\frac{1}{4} \\cdot \\frac{1}{2}kA^2 \\Rightarrow x^2 = A^2/4 \\Rightarrow x = A/2$.'
          }
        ]
      }
    }
  ]
}
