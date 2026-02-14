export const physics1ConservationOfEnergyPart2Data = {
  topicSlug: 'conservation-of-energy',
  sections: [
    {
      id: 'ce2-intro',
      type: 'text' as const,
      content: `
# 🔧 Non-Conservative Forces & Work-Energy

**Part 2 of 7 — Conservation of Energy**

Real-world systems often involve **non-conservative forces** like friction, air resistance, and applied forces. These forces add or remove energy from the system.

**In this lesson you will learn:**
- The generalized energy equation with $W_{\\text{nc}}$
- How friction converts mechanical energy to thermal energy
- How applied forces add energy to a system
      `
    },
    {
      id: 'ce2-theory',
      type: 'text' as const,
      content: `
## The Generalized Energy Equation

When **non-conservative forces** do work on the system:

$$KE_i + PE_i + W_{\\text{nc}} = KE_f + PE_f$$

Or equivalently:

$$W_{\\text{nc}} = \\Delta KE + \\Delta PE = \\Delta E_{\\text{mech}}$$

### Types of Non-Conservative Forces

| Force | Effect on Energy | $W_{\\text{nc}}$ |
|-------|------------------|-----------------|
| Kinetic friction | Removes energy (→ thermal) | Negative |
| Air resistance | Removes energy (→ thermal) | Negative |
| Applied push | Adds energy to system | Positive |
| Tension (accelerating) | Adds/removes energy | Either sign |

### Friction Specifically

$$W_f = -f_k d = -\\mu_k mg d$$

The negative sign means friction always **removes** mechanical energy, converting it to thermal energy:

$$E_{\\text{thermal}} = f_k d = \\mu_k mg d$$
      `
    },
    {
      id: 'ce2-conceptual',
      type: 'multiple-choice' as const,
      content: `
**Conceptual Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A block slides down a rough ramp. Compared to a frictionless ramp of the same height, the block arrives at the bottom with:',
            options: [
              'The same speed',
              'Greater speed',
              'Less speed',
              'Zero speed'
            ],
            correctAnswer: 2,
            explanation: 'Friction removes mechanical energy, so less KE is available at the bottom → lower speed.'
          },
          {
            question: 'A student pushes a box at constant speed across a rough floor. The work done by the student:',
            options: [
              'Increases the KE of the box',
              'Is stored as PE',
              'All becomes thermal energy',
              'Disappears'
            ],
            correctAnswer: 2,
            explanation: 'At constant speed, $\\Delta KE = 0$ and $\\Delta PE = 0$. The applied work exactly equals the friction work: $W_{\\text{app}} = f_k d$. All the energy goes to heat.'
          },
          {
            question: 'An elevator motor lifts a 500 kg elevator at constant speed through 20 m ($g = 10$ m/s²). The work done by the motor is:',
            options: [
              '0 J (constant speed)',
              '50,000 J',
              '100,000 J',
              '200,000 J'
            ],
            correctAnswer: 2,
            explanation: 'At constant speed, $\\Delta KE = 0$. $W_{\\text{motor}} = \\Delta PE = mgh = 500(10)(20) = 100{,}000$ J. The motor\'s work goes to gravitational PE.'
          }
        ]
      }
    },
    {
      id: 'ce2-worked',
      type: 'text' as const,
      content: `
## Worked Example: Friction on a Ramp

A 4 kg block slides down a 5 m ramp (height 3 m) with $\\mu_k = 0.2$. Find the speed at the bottom ($g = 10$ m/s²).

**Step 1**: Identify energies
- $KE_i = 0$ (starts from rest)
- $PE_i = mgh = 4(10)(3) = 120$ J
- $KE_f = \\frac{1}{2}mv^2$ (find this)
- $PE_f = 0$ (at bottom)

**Step 2**: Find friction work
- Normal force on ramp: $N = mg\\cos\\theta$
- $\\cos\\theta = 4/5$ (from the triangle: base 4, height 3, hyp 5)
- $W_f = -\\mu_k mg\\cos\\theta \\cdot d = -0.2(4)(10)(0.8)(5) = -32$ J

**Step 3**: Apply the equation

$$KE_i + PE_i + W_f = KE_f + PE_f$$

$$0 + 120 + (-32) = \\frac{1}{2}(4)v^2 + 0$$

$$88 = 2v^2$$

$$v = \\sqrt{44} \\approx 6.63 \\text{ m/s}$$

Without friction: $v = \\sqrt{2(10)(3)} = \\sqrt{60} \\approx 7.75$ m/s. Friction reduced the speed!
      `
    },
    {
      id: 'ce2-calculations',
      type: 'input-boxes' as const,
      content: `
**Practice with Non-Conservative Forces** 🧮

Use $g = 10$ m/s².

1) A 5 kg block slides down from a height of 8 m on a frictionless ramp, then across a rough flat surface ($\\mu_k = 0.4$) for 10 m. What is its speed (in m/s)? (Round to the nearest tenth.)

2) A person pushes a 10 kg box 5 m across a rough floor ($\\mu_k = 0.3$) with a force of 50 N. Starting from rest, find the box\'s final speed (in m/s)? (Round to the nearest tenth.)

3) A 2 kg ball is thrown upward at 10 m/s. If air resistance does $-8$ J of work, what maximum height does it reach (in m)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.9', '4.5', '4.6'],
        hint1: '$mgh = \\frac{1}{2}mv^2 + \\mu_k mgd$. Solve for $v$.',
        hint2: '$W_{\\text{app}} - f_k d = \\frac{1}{2}mv^2$. Find $f_k = \\mu_k mg$.',
        hint3: '$\\frac{1}{2}mv^2 + W_{\\text{air}} = mgh$. Solve for $h$.',
        explanation: '1) $v^2 = 2g(h - \\mu_k d) = 2(10)(8 - 0.4 \\times 10) = 2(10)(4) = 80$. $v = \\sqrt{80} \\approx 8.9$ m/s. 2) $50(5) - 0.3(10)(10)(5) = \\frac{1}{2}(10)v^2$. $250 - 150 = 5v^2$. $v^2 = 20$. $v \\approx 4.5$ m/s. 3) $\\frac{1}{2}(2)(100) - 8 = 2(10)h$. $92 = 20h$. $h = 4.6$ m.'
      }
    },
    {
      id: 'ce2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify $W_{\\text{nc}}$** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A ball rolls to a stop on grass. $W_{\\text{nc}}$ is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 1,
            explanation: 'Friction removes mechanical energy from the ball. $W_{\\text{nc}} < 0$.'
          },
          {
            label: 'A rocket engine accelerates a sled. $W_{\\text{nc}}$ is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 0,
            explanation: 'The rocket adds energy to the sled\'s motion. $W_{\\text{nc}} > 0$.'
          },
          {
            label: 'A pendulum swings in a vacuum (no air). $W_{\\text{nc}}$ is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 2,
            explanation: 'Only gravity (conservative) acts. No non-conservative work: $W_{\\text{nc}} = 0$.'
          },
          {
            label: 'A block slides along a rough surface at constant speed because someone pushes it. Net $W_{\\text{nc}}$ is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 2,
            explanation: 'At constant speed on level ground: $\\Delta KE = 0$ and $\\Delta PE = 0$. So $W_{\\text{nc}} = W_{\\text{push}} + W_f = 0$ (they cancel). But note: individual non-conservative forces still do work!'
          }
        ]
      }
    },
    {
      id: 'ce2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg block slides from height 5 m on a frictionless ramp and then across 4 m of rough floor ($\\mu_k = 0.5$). The speed at the end is ($g = 10$ m/s²):',
            options: [
              '$\\sqrt{60}$ m/s',
              '$\\sqrt{100}$ m/s',
              '$6\\sqrt{2}$ m/s',
              '$\\sqrt{20}$ m/s'
            ],
            correctAnswer: 0,
            explanation: '$mgh = \\frac{1}{2}mv^2 + \\mu_k mgd$. $v^2 = 2g(h - \\mu_k d) = 2(10)(5 - 2) = 60$. $v = \\sqrt{60}$ m/s.'
          },
          {
            question: 'The total mechanical energy of an isolated system always:',
            options: [
              'Increases over time',
              'Decreases over time',
              'Stays constant if only conservative forces do work',
              'Stays constant regardless of forces'
            ],
            correctAnswer: 2,
            explanation: 'Mechanical energy is conserved **only** when no non-conservative forces do work. With friction, energy is "lost" to thermal energy.'
          }
        ]
      }
    }
  ]
}
