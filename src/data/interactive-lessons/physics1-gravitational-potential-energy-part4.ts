export const physics1GravitationalPotentialEnergyPart4Data = {
  topicSlug: 'gravitational-potential-energy',
  sections: [
    {
      id: 'gp4-intro',
      type: 'text' as const,
      content: `
# 🔄 KE ↔ PE Conversions

**Part 4 of 7 — Gravitational Potential Energy**

One of the most elegant ideas in physics is that energy can transform between kinetic and potential forms. A falling ball converts PE to KE; a rising ball converts KE to PE. In this lesson, we\'ll master these energy conversions.
      `
    },
    {
      id: 'gp4-falling-objects',
      type: 'text' as const,
      content: `
## Falling Objects: PE → KE

When an object falls freely (no friction), gravitational PE converts entirely to kinetic energy:

$$\\Delta PE + \\Delta KE = 0$$
$$mgh_i + \\frac{1}{2}mv_i^2 = mgh_f + \\frac{1}{2}mv_f^2$$

### Dropped from Rest ($v_i = 0$)

$$mgh = \\frac{1}{2}mv_f^2$$
$$v_f = \\sqrt{2gh}$$

**Notice:** The mass cancels! All objects fall at the same rate (Galileo\'s insight).

### Example

A ball is dropped from 20 m ($g = 10$ m/s²):

$$v_f = \\sqrt{2(10)(20)} = \\sqrt{400} = 20 \\text{ m/s}$$
      `
    },
    {
      id: 'gp4-thrown-upward',
      type: 'text' as const,
      content: `
## Thrown Upward: KE → PE

When an object is thrown straight up, kinetic energy converts to potential energy until the object momentarily stops at the top:

$$\\frac{1}{2}mv_i^2 = mgh_{\\max}$$
$$h_{\\max} = \\frac{v_i^2}{2g}$$

### Example

A ball is thrown upward at 30 m/s ($g = 10$ m/s²):

$$h_{\\max} = \\frac{(30)^2}{2(10)} = \\frac{900}{20} = 45 \\text{ m}$$

### At Intermediate Heights

At any height $h$ during the flight:

$$\\frac{1}{2}mv_i^2 = mgh + \\frac{1}{2}mv^2$$
$$v = \\sqrt{v_i^2 - 2gh}$$
      `
    },
    {
      id: 'gp4-general-case',
      type: 'text' as const,
      content: `
## General Case: Any Starting Conditions

For an object with initial speed $v_i$ at height $h_i$ that reaches height $h_f$ with speed $v_f$ (no friction):

$$\\frac{1}{2}mv_i^2 + mgh_i = \\frac{1}{2}mv_f^2 + mgh_f$$

### Key Insight: Direction Doesn\'t Matter

Energy is a scalar. The direction of velocity doesn\'t affect KE. So:

- A ball thrown **upward** at 10 m/s from 5 m height
- A ball thrown **horizontally** at 10 m/s from 5 m height
- A ball thrown **downward** at 10 m/s from 5 m height

All three have the **same speed** when they reach the ground (assuming no air resistance). They have the same initial KE and PE, and the same final PE (ground level).

### Energy Tracking Table

| Position | KE | PE | Total |
|----------|-----|-----|-------|
| Top (dropped from 45 m, 1 kg) | 0 J | 450 J | 450 J |
| At 30 m | 150 J | 300 J | 450 J |
| At 15 m | 300 J | 150 J | 450 J |
| Ground | 450 J | 0 J | 450 J |
      `
    },
    {
      id: 'gp4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**KE ↔ PE Conversion Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is thrown upward at 20 m/s. At the top of its path, its KE is:',
            options: [
              'Maximum',
              'Half the initial value',
              'Zero',
              'Equal to its PE'
            ],
            correctAnswer: 2,
            explanation: 'At the top, $v = 0$, so $KE = \\frac{1}{2}mv^2 = 0$. All KE has been converted to PE.'
          },
          {
            question: 'Ball A is thrown upward and Ball B is thrown horizontally, both at 15 m/s from the same height. Ignoring air resistance, which hits the ground faster?',
            options: [
              'Ball A (thrown up)',
              'Ball B (thrown horizontal)',
              'They hit at the same speed',
              'Cannot be determined without more info'
            ],
            correctAnswer: 2,
            explanation: 'Both start with the same KE ($\\frac{1}{2}mv^2$) and same PE ($mgh$). At the ground (same final PE), they must have the same final KE, so the same speed.'
          },
          {
            question: 'A freely falling object has fallen halfway to the ground. What fraction of its total energy is kinetic?',
            options: [
              '1/4',
              '1/2',
              '3/4',
              'Depends on the mass'
            ],
            correctAnswer: 1,
            explanation: 'If it started at height $h$ with no KE: total $E = mgh$. At $h/2$: $PE = mg(h/2) = E/2$, so $KE = E - E/2 = E/2$. Half the energy is kinetic.'
          }
        ]
      }
    },
    {
      id: 'gp4-calculations',
      type: 'input-boxes' as const,
      content: `
**KE ↔ PE Calculations** 🧮

Use $g = 10$ m/s².

1) A ball is dropped from 31.25 m. What is its speed just before hitting the ground (in m/s)?

2) A ball is thrown upward at 24 m/s. What maximum height does it reach (in m)?

3) A 2 kg ball is thrown upward at 10 m/s from a 15 m tall building. What is its speed when it hits the ground (in m/s)?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '28.8', '20', '28.80'],
        hint1: '$v = \\sqrt{2gh} = \\sqrt{2(10)(31.25)} = \\sqrt{625}$.',
        hint2: '$h = v_i^2/(2g) = (24)^2/(20) = 576/20$.',
        hint3: 'Use energy: $\\frac{1}{2}(2)(100) + 2(10)(15) = \\frac{1}{2}(2)v_f^2$. $100 + 300 = v_f^2$.',
        explanation: '1) $v = \\sqrt{625} = 25$ m/s. 2) $h = 576/20 = 28.8$ m. 3) $\\frac{1}{2}(2)(100) + 2(10)(15) = \\frac{1}{2}(2)v_f^2 \\Rightarrow 100 + 300 = v_f^2 \\Rightarrow v_f = \\sqrt{400} = 20$ m/s.'
      }
    },
    {
      id: 'gp4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Energy Conversion Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A ball is at the top of its trajectory (thrown straight up). At this point:',
            options: ['KE = max, PE = min', 'KE = 0, PE = max', 'KE = PE', 'KE = max, PE = 0'],
            correctIndex: 1,
            explanation: 'At the top, $v = 0$ so KE = 0. Height is maximum, so PE is maximum. All energy is potential.'
          },
          {
            label: 'A freely falling object is halfway between its starting height and the ground:',
            options: ['KE > PE', 'KE < PE', 'KE = PE', 'Cannot determine'],
            correctIndex: 2,
            explanation: 'At half the height, half the PE has converted to KE, so KE = PE. Each is half the total.'
          },
          {
            label: 'Doubling the height from which an object is dropped changes the impact speed by a factor of:',
            options: ['2', '$\\sqrt{2}$', '4', '$\\sqrt{3}$'],
            correctIndex: 1,
            explanation: '$v = \\sqrt{2gh}$. Doubling $h$: $v_{\\text{new}} = \\sqrt{2g(2h)} = \\sqrt{2} \\cdot \\sqrt{2gh} = \\sqrt{2} \\cdot v$.'
          },
          {
            label: 'A ball thrown downward at 5 m/s from 10 m hits the ground faster than one dropped from 10 m because:',
            options: ['It has more PE', 'It has more initial KE', 'It has more total energy', 'Both B and C'],
            correctIndex: 3,
            explanation: 'Same PE (same height), but thrown ball has extra KE ($\\frac{1}{2}mv^2$). More total energy → more final KE → higher impact speed.'
          }
        ]
      }
    },
    {
      id: 'gp4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — KE ↔ PE Conversions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 3 kg ball is thrown downward at 5 m/s from a 20 m ledge. Its speed at the ground is ($g = 10$ m/s²):',
            options: [
              '15 m/s',
              '20 m/s',
              '$\\sqrt{425}$ ≈ 20.6 m/s',
              '25 m/s'
            ],
            correctAnswer: 2,
            explanation: '$\\frac{1}{2}(3)(25) + 3(10)(20) = \\frac{1}{2}(3)v_f^2$. $37.5 + 600 = 1.5v_f^2$. $v_f^2 = 637.5/1.5 = 425$. $v_f = \\sqrt{425} \\approx 20.6$ m/s.'
          },
          {
            question: 'A pendulum is released from a height of 0.8 m above its lowest point. Its speed at the lowest point is ($g = 10$ m/s²):',
            options: [
              '2 m/s',
              '4 m/s',
              '8 m/s',
              '16 m/s'
            ],
            correctAnswer: 1,
            explanation: '$mgh = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2(10)(0.8)} = \\sqrt{16} = 4$ m/s.'
          }
        ]
      }
    }
  ]
}
