export const physics1ProjectileMotionPart3Data = {
  topicSlug: 'projectile-motion',
  sections: [
    {
      id: 'pm3-intro',
      type: 'text' as const,
      content: `
# ⏱️ Time of Flight and Range

**Part 3 of 7 — Projectile Motion**

Two of the most important quantities for any projectile are its **time of flight** (how long it stays in the air) and its **range** (how far it goes horizontally). This lesson derives and applies these formulas.
      `
    },
    {
      id: 'pm3-time-of-flight',
      type: 'text' as const,
      content: `
## Time of Flight

For a projectile launched from and landing at the **same height** (ground to ground):

At landing, $\\Delta y = 0$:

$$0 = v_{0y}t - \\frac{1}{2}gt^2 = t\\left(v_{0y} - \\frac{1}{2}gt\\right)$$

This gives $t = 0$ (launch) or:

$$\\boxed{t_{flight} = \\frac{2v_{0y}}{g} = \\frac{2v_0\\sin\\theta}{g}}$$

### Key Observations

- Time of flight depends on $v_{0y}$ (the vertical component) only
- Greater launch angle → greater $v_{0y}$ → longer time in air
- Greater launch speed → longer time in air
- $g$ in the denominator: stronger gravity → shorter flight
      `
    },
    {
      id: 'pm3-range',
      type: 'text' as const,
      content: `
## Range

The **range** is the horizontal distance traveled during the flight time:

$$R = v_{0x} \\cdot t_{flight} = v_0\\cos\\theta \\cdot \\frac{2v_0\\sin\\theta}{g}$$

Using the identity $2\\sin\\theta\\cos\\theta = \\sin 2\\theta$:

$$\\boxed{R = \\frac{v_0^2\\sin 2\\theta}{g}}$$

### Key Observations

- $R$ is maximized when $\\sin 2\\theta = 1$, which means $2\\theta = 90°$, so $\\theta = 45°$
- $R \\propto v_0^2$: doubling the speed **quadruples** the range
- Complementary angles ($\\theta$ and $90° - \\theta$) give the **same range**
  - Example: 30° and 60° both give $\\sin 60° = \\sin 120°$

### Range at 45°

$$R_{max} = \\frac{v_0^2}{g}$$
      `
    },
    {
      id: 'pm3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which launch angle gives the maximum range on flat ground?',
            options: [
              '30°',
              '45°',
              '60°',
              '90°'
            ],
            correctAnswer: 1,
            explanation: 'Range is maximized when $\\sin 2\\theta = 1$, giving $\\theta = 45°$. This is the optimal balance between time of flight and horizontal speed.'
          },
          {
            question: 'A projectile is launched at 30°. Which other angle gives the same range?',
            options: [
              '30°',
              '45°',
              '60°',
              '120°'
            ],
            correctAnswer: 2,
            explanation: 'Complementary angles: $90° - 30° = 60°$. Since $\\sin(2 \\times 30°) = \\sin 60°$ and $\\sin(2 \\times 60°) = \\sin 120° = \\sin 60°$, they have the same range.'
          },
          {
            question: 'If the launch speed is tripled (same angle), the range becomes:',
            options: [
              '3 times as large',
              '6 times as large',
              '9 times as large',
              '27 times as large'
            ],
            correctAnswer: 2,
            explanation: '$R \\propto v_0^2$. Tripling $v_0$ gives $R\' = (3v_0)^2/g \\cdot \\sin 2\\theta = 9 \\cdot R$.'
          }
        ]
      }
    },
    {
      id: 'pm3-calculations',
      type: 'input-boxes' as const,
      content: `
**Time and Range Calculations** 🧮

A ball is launched from ground level at 30 m/s at 53° above horizontal. Use $g = 10$ $m/s^{2}$, $\\cos 53° = 0.6$, $\\sin 53° = 0.8$.

1) $v_{0y}$ (in m/s)

2) Time of flight (in seconds)

3) $v_{0x}$ (in m/s)

4) Range (in meters)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['24', '4.8', '18', '86.4'],
        hint1: '$v_{0y} = 30(0.8) = 24$ m/s',
        hint2: '$t = \\frac{2(24)}{10} = 4.8$ s',
        hint3: '$v_{0x} = 30(0.6) = 18$ m/s. $R = 18(4.8)$',
        explanation: '1) $v_{0y} = 24$ m/s. 2) $t = \\frac{2(24)}{10} = 4.8$ s. 3) $v_{0x} = 18$ m/s. 4) $R = 18(4.8) = 86.4$ m.'
      }
    },
    {
      id: 'pm3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Comparing Launch Angles** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Between 30° and 60° launches (same speed), which has a longer time of flight?',
            options: ['30°', '60°', 'They are equal', 'Cannot determine'],
            correctIndex: 1,
            explanation: '60° has a larger $v_{0y}$ ($\\sin 60° > \\sin 30°$), so it spends more time in the air. $t = 2v_0\\sin\\theta / g$.'
          },
          {
            label: 'Between 30° and 60° launches (same speed), which has a greater range?',
            options: ['30°', '60°', 'They are equal', 'Cannot determine'],
            correctIndex: 2,
            explanation: 'Complementary angles give equal range: $\\sin(2 \\times 30°) = \\sin 60°$ and $\\sin(2 \\times 60°) = \\sin 120° = \\sin 60°$.'
          },
          {
            label: 'Between 30° and 60° launches (same speed), which reaches a greater maximum height?',
            options: ['30°', '60°', 'They are equal', 'Cannot determine'],
            correctIndex: 1,
            explanation: '60° has a larger $v_{0y}$, so it reaches a greater height. $h = v_{0y}^2/(2g)$.'
          }
        ]
      }
    },
    {
      id: 'pm3-exit',
      type: 'input-boxes' as const,
      content: `
**Exit Problem** ✅

A projectile is launched at 20 m/s at 45° from ground level. Use $g = 10$ $m/s^{2}$, $\\sin 45° \\approx 0.707$.

1) Time of flight (in seconds, round to 1 decimal)

2) Range using $R = \\frac{v_0^2\\sin 2\\theta}{g}$ (in meters)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['2.8', '40'],
        hint1: '$v_{0y} = 20\\sin 45° \\approx 14.14$. $t = \\frac{2(14.14)}{10}$',
        hint2: 'At 45°, $\\sin 2\\theta = \\sin 90° = 1$. $R = \\frac{v_0^2}{g}$.',
        hint3: '$R = \\frac{20^2}{10} = \\frac{400}{10}$',
        explanation: '1) $t = \\frac{2(20)(0.707)}{10} \\approx 2.8$ s. 2) $R = \\frac{400 \\cdot 1}{10} = 40$ m.'
      }
    }
  ]
}
