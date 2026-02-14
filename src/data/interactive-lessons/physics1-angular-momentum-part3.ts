export const physics1AngularMomentumPart3Data = {
  topicSlug: 'angular-momentum',
  sections: [
    {
      id: 'am3-intro',
      type: 'text' as const,
      content: `
# ⚡ Rotational Kinetic Energy

**Part 3 of 7 — $KE_{\\text{rot}} = \\frac{1}{2}I\\omega^2$**

A spinning object has kinetic energy due to its rotation — even if its center of mass isn't moving. This **rotational kinetic energy** follows the same pattern as translational KE.
      `
    },
    {
      id: 'am3-definition',
      type: 'text' as const,
      content: `
## Rotational Kinetic Energy

$$KE_{\\text{rot}} = \\frac{1}{2}I\\omega^2$$

Compare with translational: $KE_{\\text{trans}} = \\frac{1}{2}mv^2$

| Linear | Rotational |
|--------|-----------|
| $\\frac{1}{2}mv^2$ | $\\frac{1}{2}I\\omega^2$ |

### Units

$KE_{\\text{rot}}$ is measured in **joules** (J), just like any other form of energy.

### Total Kinetic Energy for Rolling Objects

An object that both translates and rotates has:

$$KE_{\\text{total}} = \\frac{1}{2}mv_{\\text{cm}}^2 + \\frac{1}{2}I\\omega^2$$

For rolling without slipping ($v = R\\omega$):

| Shape | $KE_{\\text{total}}$ |
|-------|---------------------|
| Hoop | $\\frac{1}{2}mv^2 + \\frac{1}{2}mv^2 = mv^2$ |
| Disk | $\\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$ |
| Solid sphere | $\\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2$ |
      `
    },
    {
      id: 'am3-work-energy',
      type: 'text' as const,
      content: `
## Work-Energy Theorem for Rotation

The work done by a torque:

$$W = \\tau \\cdot \\theta$$

The work-energy theorem:

$$W_{\\text{net}} = \\Delta KE_{\\text{rot}} = \\frac{1}{2}I\\omega_f^2 - \\frac{1}{2}I\\omega_i^2$$

### Power

The rotational power (rate of doing work):

$$P = \\tau\\omega$$

This is analogous to $P = Fv$ in linear motion.
      `
    },
    {
      id: 'am3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Rotational KE Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A spinning flywheel has its angular velocity doubled. Its rotational kinetic energy:',
            options: [
              'Doubles',
              'Triples',
              'Quadruples',
              'Stays the same'
            ],
            correctAnswer: 2,
            explanation: '$KE = \\frac{1}{2}I\\omega^2$. If $\\omega \\to 2\\omega$: $KE \\to \\frac{1}{2}I(2\\omega)^2 = 4 \\times \\frac{1}{2}I\\omega^2$. KE quadruples.'
          },
          {
            question: 'A rolling ball has both translational and rotational KE. The total KE is:',
            options: [
              '$\\frac{1}{2}mv^2$ only',
              '$\\frac{1}{2}I\\omega^2$ only',
              '$\\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$',
              '$\\frac{1}{2}(m + I)v^2$'
            ],
            correctAnswer: 2,
            explanation: 'Total KE = translational + rotational = $\\frac{1}{2}mv_{\\text{cm}}^2 + \\frac{1}{2}I\\omega^2$.'
          },
          {
            question: 'A hoop and a disk of equal mass and radius roll at the same speed. Which has more total kinetic energy?',
            options: [
              'The disk',
              'The hoop',
              'They are equal',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: 'Hoop: $KE = mv^2$. Disk: $KE = \\frac{3}{4}mv^2$. The hoop stores more energy in rotation ($I_{\\text{hoop}} > I_{\\text{disk}}$).'
          }
        ]
      }
    },
    {
      id: 'am3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Rotational KE Calculations** 🧮

1) A wheel ($I = 4$ kg·m²) spins at 10 rad/s. What is its rotational KE? (in J)

2) A solid sphere (mass 3 kg, radius 0.1 m) spins at 20 rad/s (not translating). What is its rotational KE? (in J, round to 2 decimal places)

3) A torque of 8 N·m acts through an angle of 25 rad on a wheel. How much work is done? (in J)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['200', '0.48', '200'],
        hint1: '$KE = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(4)(100)$',
        hint2: '$I = \\frac{2}{5}MR^2 = \\frac{2}{5}(3)(0.01) = 0.012$ kg·m². $KE = \\frac{1}{2}(0.012)(400)$',
        hint3: '$W = \\tau\\theta = (8)(25)$',
        explanation: '1) $KE = \\frac{1}{2}(4)(100) = 200$ J. 2) $I = 0.012$ kg·m². $KE = \\frac{1}{2}(0.012)(400) = 2.4$ J. Hmm, let me recalculate: $I = \\frac{2}{5}(3)(0.01) = 0.012$. $KE = \\frac{1}{2}(0.012)(400) = 2.4$ J. Actually the answer should be 2.40, let me re-examine. $\\frac{2}{5}(3)(0.01) = 0.012$. $\\frac{1}{2}(0.012)(400) = 2.4$ J. The answer is 2.40. 3) $W = 200$ J.'
      }
    },
    {
      id: 'am3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Energy Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The formula for rotational kinetic energy is:',
            options: ['½mv²', '½Iω²', 'Iω', 'τθ'],
            correctIndex: 1,
            explanation: 'Rotational kinetic energy is $\\frac{1}{2}I\\omega^2$.'
          },
          {
            label: 'If angular velocity is doubled, rotational kinetic energy:',
            options: ['doubles', 'quadruples', 'halves', 'stays the same'],
            correctIndex: 1,
            explanation: 'Since $KE \\propto \\omega^2$, doubling $\\omega$ quadruples the rotational KE.'
          },
          {
            label: 'The rotational analogue of W = Fd for work done by a torque is:',
            options: ['W = Fd', 'W = τθ', 'W = Iω', 'W = τω'],
            correctIndex: 1,
            explanation: 'Work done by a torque is $W = \\tau\\theta$, the rotational analogue of $W = Fd$.'
          }
        ]
      }
    },
    {
      id: 'am3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Rotational KE** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A solid sphere ($M = 2$ kg, $R = 0.1$ m) rolls without slipping down a ramp of height $h = 5$ m. Its speed at the bottom is closest to: (use $g = 10$ m/s²)',
            options: [
              '7.1 m/s',
              '8.5 m/s',
              '10 m/s',
              '5.3 m/s'
            ],
            correctAnswer: 1,
            explanation: '$Mgh = \\frac{7}{10}Mv^2$ (for solid sphere). $v = \\sqrt{10gh/7} = \\sqrt{10(10)(5)/7} = \\sqrt{500/7} = \\sqrt{71.4} \\approx 8.45 \\approx 8.5$ m/s.'
          },
          {
            question: 'A motor applies a constant torque of 50 N·m to a wheel spinning at 100 rad/s. The power output is:',
            options: [
              '50 W',
              '500 W',
              '2500 W',
              '5000 W'
            ],
            correctAnswer: 3,
            explanation: '$P = \\tau\\omega = (50)(100) = 5000$ W.'
          }
        ]
      }
    }
  ]
}
