export const physics1ElasticPotentialEnergyPart3Data = {
  topicSlug: 'elastic-potential-energy',
  sections: [
    {
      id: 'ep3-intro',
      type: 'text' as const,
      content: `
# 🔧 Work Done by Springs

**Part 3 of 7 — Elastic Potential Energy**

The work done by a spring force is special because the force **varies** with displacement. You can\'t simply multiply force times distance — you need calculus (or the PE formula). The relationship between spring work and elastic PE is central to energy problems.
      `
    },
    {
      id: 'ep3-work-by-spring',
      type: 'text' as const,
      content: `
## Work Done BY the Spring

The work done by the spring force as the displacement changes from $x_i$ to $x_f$:

$$W_{\\text{spring}} = \\frac{1}{2}kx_i^2 - \\frac{1}{2}kx_f^2 = -\\Delta PE_s$$

This is analogous to gravity: $W_g = -\\Delta PE_g$.

### Important Cases

| Process | $W_{\\text{spring}}$ | Sign |
|---------|---------------------|------|
| Releasing compressed spring ($x_i = A, x_f = 0$) | $+\\frac{1}{2}kA^2$ | Positive (spring pushes object) |
| Stretching from equilibrium ($x_i = 0, x_f = A$) | $-\\frac{1}{2}kA^2$ | Negative (spring resists) |
| Compressing from equilibrium ($x_i = 0, x_f = -A$) | $-\\frac{1}{2}kA^2$ | Negative (spring resists) |
| Returning from stretch ($x_i = A, x_f = 0$) | $+\\frac{1}{2}kA^2$ | Positive (spring pulls back) |
      `
    },
    {
      id: 'ep3-work-on-spring',
      type: 'text' as const,
      content: `
## Work Done ON the Spring

To stretch or compress a spring, you must apply a force **against** the spring force. The work YOU do:

$$W_{\\text{you}} = \\frac{1}{2}kx_f^2 - \\frac{1}{2}kx_i^2 = \\Delta PE_s = -W_{\\text{spring}}$$

### Key Relationship

$$W_{\\text{you}} = -W_{\\text{spring}}$$

- When you stretch a spring: you do **positive** work, spring does **negative** work
- When you let it snap back: spring does **positive** work, you don\'t need to do work

### Why Can\'t We Use $W = Fd$?

The spring force is **not constant** — it increases as you stretch more. Using $W = Fd$ would require knowing the average force:

$$F_{\\text{avg}} = \\frac{0 + kx}{2} = \\frac{kx}{2}$$

$$W = F_{\\text{avg}} \\cdot x = \\frac{kx}{2} \\cdot x = \\frac{1}{2}kx^2 \\checkmark$$

This works because the force increases linearly (the average is the midpoint).
      `
    },
    {
      id: 'ep3-graphical',
      type: 'text' as const,
      content: `
## Graphical Interpretation

On an $F$ vs. $x$ graph:

### Work = Area Under the Curve

The work done by the applied force equals the area under the $F = kx$ line:

- From $x = 0$ to $x = A$: Area = triangle = $\\frac{1}{2}(A)(kA) = \\frac{1}{2}kA^2$
- From $x = x_1$ to $x = x_2$: Area = trapezoid = $\\frac{1}{2}k(x_2^2 - x_1^2)$

### Work Between Two Displacements

If a spring is already stretched from $x_1$ to $x_2$:

$$W_{\\text{you}} = \\frac{1}{2}kx_2^2 - \\frac{1}{2}kx_1^2$$

This is the area of the trapezoid between $x_1$ and $x_2$ on the $F$-$x$ graph.
      `
    },
    {
      id: 'ep3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Work by Springs Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A compressed spring is released and pushes a ball. The work done by the spring on the ball is:',
            options: [
              'Negative (spring opposes motion)',
              'Zero (spring returns to equilibrium)',
              'Positive (spring pushes ball forward)',
              'Depends on the mass of the ball'
            ],
            correctAnswer: 2,
            explanation: 'The spring force is in the same direction as the ball\'s displacement, so the spring does positive work. This converts spring PE into the ball\'s KE.'
          },
          {
            question: 'You slowly stretch a spring from $x = 0.1$ m to $x = 0.2$ m. The work you do is:',
            options: [
              '$\\frac{1}{2}k(0.2)^2$',
              '$\\frac{1}{2}k(0.1)^2$',
              '$\\frac{1}{2}k[(0.2)^2 - (0.1)^2]$',
              '$k(0.2 - 0.1)$'
            ],
            correctAnswer: 2,
            explanation: '$W = \\Delta PE_s = \\frac{1}{2}kx_f^2 - \\frac{1}{2}kx_i^2 = \\frac{1}{2}k[(0.2)^2 - (0.1)^2]$. You must account for the initial PE!'
          },
          {
            question: 'Over a complete cycle (stretch and release back to equilibrium), the total work done by the spring is:',
            options: [
              'Positive',
              'Negative',
              'Zero',
              'Depends on the spring constant'
            ],
            correctAnswer: 2,
            explanation: 'The spring force is conservative. Over a round trip ($x_i = x_f = 0$), $W = -\\Delta PE = 0$. Just like gravity over a round trip!'
          }
        ]
      }
    },
    {
      id: 'ep3-calculations',
      type: 'input-boxes' as const,
      content: `
**Spring Work Calculations** 🧮

Spring constant $k = 400$ N/m for all problems.

1) How much work is needed to stretch the spring from equilibrium to $x = 0.1$ m (in J)?

2) How much work is needed to stretch it from $x = 0.1$ m to $x = 0.2$ m (in J)?

3) The spring is compressed by 0.15 m and released. How much work does the spring do on the attached object as it returns to equilibrium (in J)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '6', '4.5'],
        hint1: '$W = \\frac{1}{2}kx^2 = \\frac{1}{2}(400)(0.01)$.',
        hint2: '$W = \\frac{1}{2}k(x_f^2 - x_i^2) = \\frac{1}{2}(400)(0.04 - 0.01)$.',
        hint3: '$W_{\\text{spring}} = \\frac{1}{2}kx_i^2 - \\frac{1}{2}kx_f^2 = \\frac{1}{2}(400)(0.0225) - 0$.',
        explanation: '1) $W = \\frac{1}{2}(400)(0.01) = 2$ J. 2) $W = \\frac{1}{2}(400)(0.03) = 6$ J. Note: it takes 3× more work for the second 0.1 m! 3) $W = \\frac{1}{2}(400)(0.0225) = 4.5$ J.'
      }
    },
    {
      id: 'ep3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Spring Work Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Stretching a spring from 0.1 m to 0.2 m requires MORE work than from 0 to 0.1 m because:',
            options: ['The spring is longer', 'The force is greater at larger x', 'The spring constant increases', 'It doesn\'t — they\'re equal'],
            correctIndex: 1,
            explanation: 'The spring force (and required applied force) is larger at larger $x$. You\'re doing work against a stronger force, so more work is needed.'
          },
          {
            label: 'A spring is compressed and launches a ball. The spring\'s PE becomes the ball\'s:',
            options: ['PE', 'KE', 'Thermal energy', 'Momentum'],
            correctIndex: 1,
            explanation: 'Spring PE converts to kinetic energy of the ball: $\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$.'
          },
          {
            label: 'The spring force is conservative, which means:',
            options: ['It always does positive work', 'Its work is path-independent', 'It has no PE', 'It never loses energy'],
            correctIndex: 1,
            explanation: 'Conservative means work depends only on initial and final positions. This allows us to define elastic PE.'
          },
          {
            label: 'The work done to stretch a spring from 0 to $2A$ compared to 0 to $A$ is:',
            options: ['2 times', '3 times', '4 times', '8 times'],
            correctIndex: 2,
            explanation: '$W(0 \\to 2A) = \\frac{1}{2}k(2A)^2 = 4 \\cdot \\frac{1}{2}kA^2 = 4 \\times W(0 \\to A)$.'
          }
        ]
      }
    },
    {
      id: 'ep3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Work by Springs** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A spring ($k = 600$ N/m) is stretched from 0.05 m to 0.15 m. The work done on the spring is:',
            options: [
              '0.75 J',
              '3.0 J',
              '6.0 J',
              '6.75 J'
            ],
            correctAnswer: 2,
            explanation: '$W = \\frac{1}{2}k(x_f^2 - x_i^2) = \\frac{1}{2}(600)(0.0225 - 0.0025) = 300(0.02) = 6.0$ J.'
          },
          {
            question: 'A compressed spring ($k = 800$ N/m, $x = 0.1$ m) launches a 0.2 kg block on a frictionless surface. The block\'s speed is:',
            options: [
              '2 m/s',
              '$\\sqrt{20}$ ≈ 4.5 m/s',
              '$\\sqrt{40}$ ≈ 6.3 m/s',
              '10 m/s'
            ],
            correctAnswer: 2,
            explanation: '$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$. $\\frac{1}{2}(800)(0.01) = \\frac{1}{2}(0.2)v^2$. $4 = 0.1v^2$. $v^2 = 40$. $v = \\sqrt{40} \\approx 6.3$ m/s.'
          }
        ]
      }
    }
  ]
}
