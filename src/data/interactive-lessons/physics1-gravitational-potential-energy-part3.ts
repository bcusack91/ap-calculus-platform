export const physics1GravitationalPotentialEnergyPart3Data = {
  topicSlug: 'gravitational-potential-energy',
  sections: [
    {
      id: 'gp3-intro',
      type: 'text' as const,
      content: `
# ⬇️ Work Done by Gravity: $W_g = -\\Delta PE_g$

**Part 3 of 7 — Gravitational Potential Energy**

There\'s a deep connection between the work gravity does and the change in gravitational potential energy. Understanding this relationship is essential for solving energy problems efficiently.
      `
    },
    {
      id: 'gp3-relationship',
      type: 'text' as const,
      content: `
## The Work-PE Relationship

For gravity (a conservative force):

$$W_g = -\\Delta PE_g = -(PE_f - PE_i) = PE_i - PE_f$$

Equivalently:

$$W_g = -mg(h_f - h_i) = mg(h_i - h_f)$$

### Why the Negative Sign?

The negative sign captures an important physical idea:

| Object Motion | $\\Delta PE_g$ | $W_g$ | Energy Flow |
|--------------|-------------|-------|-------------|
| Falls (down) | Negative (loses PE) | Positive | PE → KE |
| Rises (up) | Positive (gains PE) | Negative | KE → PE |

When PE **decreases**, gravity does **positive** work (energy is released).
When PE **increases**, gravity does **negative** work (energy is stored).

### Think of It Like a Bank Account

- $PE_g$ is your "gravitational savings account"
- Going up = depositing energy (positive $\\Delta PE$, negative work by gravity)
- Going down = withdrawing energy (negative $\\Delta PE$, positive work by gravity)
      `
    },
    {
      id: 'gp3-examples',
      type: 'text' as const,
      content: `
## Worked Examples

### Example 1: Free Fall

A 2 kg ball falls from $h = 10$ m to $h = 3$ m. ($g = 10$ $m/s^{2}$)

$$W_g = -\\Delta PE_g = -mg(h_f - h_i) = -2(10)(3 - 10) = -20(-7) = 140 \\text{ J}$$

Gravity does +140 J of work. This energy goes into kinetic energy.

### Example 2: Throwing Upward

A 0.5 kg ball is thrown upward from $h = 1$ m to $h = 6$ m.

$$W_g = -mg(h_f - h_i) = -0.5(10)(6 - 1) = -25 \\text{ J}$$

Gravity does −25 J of work. The ball slows down as KE converts to PE.

### Example 3: Projectile

A ball is launched at an angle. At the peak, it has risen 4 m. Mass = 1 kg.

$$W_g = -mg\\Delta h = -1(10)(4) = -40 \\text{ J}$$

The ball lost 40 J of KE going up (converting to PE).
      `
    },
    {
      id: 'gp3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Work by Gravity Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 5 kg ball falls freely from 12 m to 2 m. The work done by gravity is ($g = 10$ $m/s^{2}$):',
            options: [
              '-500 J',
              '-100 J',
              '+100 J',
              '+500 J'
            ],
            correctAnswer: 3,
            explanation: '$W_g = -mg(h_f - h_i) = -5(10)(2 - 12) = -50(-10) = +500$ J. Gravity does positive work when objects fall.'
          },
          {
            question: 'When gravity does positive work on an object:',
            options: [
              'The object rises and gains PE',
              'The object falls and loses PE',
              'The object\'s PE stays the same',
              'The object must be in free fall'
            ],
            correctAnswer: 1,
            explanation: '$W_g > 0$ means $\\Delta PE_g < 0$ (since $W_g = -\\Delta PE_g$). The object loses PE, meaning it descends.'
          },
          {
            question: 'An object moves horizontally at constant height. The work done by gravity is:',
            options: [
              'Positive',
              'Negative',
              'Zero',
              'Depends on speed'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta h = 0 \\Rightarrow W_g = -mg(0) = 0$. No height change means gravity does zero work.'
          }
        ]
      }
    },
    {
      id: 'gp3-calculations',
      type: 'input-boxes' as const,
      content: `
**Work by Gravity Calculations** 🧮

Use $g = 10$ $m/s^{2}$.

1) A 3 kg ball is dropped from 15 m. What is the work done by gravity as it falls to the ground (in J)?

2) A 0.4 kg ball is thrown straight up and rises 8 m above its launch point. What is the work done by gravity during the ascent (in J)?

3) A 10 kg box slides 5 m down a $30°$ incline. What is the work done by gravity (in J)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['450', '-32', '250'],
        hint1: '$W_g = mg\\Delta h_{\\text{drop}} = 3(10)(15) = 450$ J (object descends, gravity does positive work).',
        hint2: '$W_g = -mg\\Delta h = -0.4(10)(8) = -32$ J (object rises, gravity does negative work).',
        hint3: 'Height change: $\\Delta h = -5\\sin(30°) = -2.5$ m. $W_g = -mg\\Delta h = -10(10)(-2.5) = 250$ J.',
        explanation: '1) $W_g = 3(10)(15) = 450$ J. 2) $W_g = -0.4(10)(8) = -32$ J. 3) The box descends by $h = 5\\sin(30°) = 2.5$ m. $W_g = mg(2.5) = 10(10)(2.5) = 250$ J.'
      }
    },
    {
      id: 'gp3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Work-PE Sign Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An elevator descends 20 m. The work done by gravity on the elevator is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 0,
            explanation: 'Elevator moves down, gravity points down. $\\theta = 0°$, so $W_g > 0$. Equivalently, $\\Delta h < 0$, so $W_g = -mg\\Delta h > 0$.'
          },
          {
            label: 'A roller coaster car climbs a hill. The change in gravitational PE is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 0,
            explanation: 'Climbing up means $\\Delta h > 0$, so $\\Delta PE_g = mg\\Delta h > 0$. The car gains PE.'
          },
          {
            label: 'A pendulum swings from its highest point to its lowest point. The work by gravity is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 0,
            explanation: 'The pendulum descends, so $\\Delta h < 0$ and $W_g = -mg\\Delta h > 0$. Gravity does positive work, converting PE to KE.'
          },
          {
            label: 'A satellite moves in a perfectly circular orbit. The work by gravity per orbit is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 2,
            explanation: 'In a circular orbit, the height doesn\'t change over one full orbit ($\\Delta h = 0$), so $W_g = 0$.'
          }
        ]
      }
    },
    {
      id: 'gp3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Work Done by Gravity** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg projectile is launched upward and reaches a maximum height of 20 m above its launch point. The work done by gravity from launch to maximum height is ($g = 10$ $m/s^{2}$):',
            options: [
              '+400 J',
              '-400 J',
              '+200 J',
              '-200 J'
            ],
            correctAnswer: 1,
            explanation: '$W_g = -mg\\Delta h = -2(10)(20) = -400$ J. Gravity does negative work during the ascent because it opposes the upward motion.'
          },
          {
            question: 'An object\'s gravitational PE decreases by 300 J. The work done by gravity is:',
            options: [
              '-300 J',
              '0 J',
              '+300 J',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: '$W_g = -\\Delta PE_g = -(-300) = +300$ J. When PE decreases, gravity does positive work.'
          }
        ]
      }
    }
  ]
}
