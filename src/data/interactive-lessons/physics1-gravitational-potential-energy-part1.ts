export const physics1GravitationalPotentialEnergyPart1Data = {
  topicSlug: 'gravitational-potential-energy',
  sections: [
    {
      id: 'gp1-intro',
      type: 'text' as const,
      content: `
# 🌍 Gravitational PE: $PE_g = mgh$

**Part 1 of 7 — Gravitational Potential Energy**

When you lift a ball above the ground, you\'re storing energy in it — energy that can be released when the ball falls. This stored energy is called **gravitational potential energy**. It depends on an object\'s mass, height, and the strength of gravity.
      `
    },
    {
      id: 'gp1-definition',
      type: 'text' as const,
      content: `
## Defining Gravitational Potential Energy

The **gravitational potential energy** of an object near Earth\'s surface is:

$$PE_g = mgh$$

where:
- $m$ = mass of the object (kg)
- $g$ = acceleration due to gravity ($\\approx 10$ m/s²)
- $h$ = height above the chosen **reference level** (m)

### Properties

| Property | Detail |
|----------|--------|
| **Units** | Joules (J) |
| **Sign** | Can be positive, negative, or zero depending on reference level |
| **Scalar** | Not a vector |
| **Depends on** | Mass, gravity, and height above reference |
      `
    },
    {
      id: 'gp1-reference-level',
      type: 'text' as const,
      content: `
## The Reference Level

### What Is It?

The reference level (or reference point) is the position where $h = 0$ and therefore $PE_g = 0$. **You get to choose it!**

### Rules for Choosing

- You can place the reference level **anywhere**
- Common choices: ground level, tabletop, lowest point in the problem
- Once chosen, keep it **consistent** throughout the problem
- Only **changes** in PE ($\\Delta PE$) have physical meaning — the absolute value depends on your reference

### Example

A ball is on a 3 m high table in a room with a 2 m deep basement:

| Reference Level | Height $h$ | $PE_g$ ($m = 2$ kg, $g = 10$ m/s²) |
|----------------|-----------|------|
| Floor | 3 m | 60 J |
| Tabletop | 0 m | 0 J |
| Basement floor | 5 m | 100 J |

Different reference levels give different PE values, but the **change** in PE between any two positions is always the same!
      `
    },
    {
      id: 'gp1-change-in-pe',
      type: 'text' as const,
      content: `
## Changes in Gravitational PE

The change in gravitational PE is:

$$\\Delta PE_g = mg\\Delta h = mg(h_f - h_i)$$

### Sign Convention

| Motion | $\\Delta h$ | $\\Delta PE_g$ | Energy... |
|--------|-----------|-------------|----------|
| Object moves **up** | Positive | Positive | ...is stored |
| Object moves **down** | Negative | Negative | ...is released |
| Object stays at same height | Zero | Zero | ...unchanged |

### Key Insight

$\\Delta PE_g$ is **independent of the reference level** you choose. This is why only changes in PE are physically meaningful.

### Relation to Work by Gravity

$$W_{\\text{gravity}} = -\\Delta PE_g$$

When an object falls ($\\Delta PE_g < 0$), gravity does positive work. When an object rises ($\\Delta PE_g > 0$), gravity does negative work.
      `
    },
    {
      id: 'gp1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Gravitational PE Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is held 5 m above the ground. If we change the reference level from the ground to a point 2 m above the ground, the ball\'s PE:',
            options: [
              'Increases',
              'Decreases',
              'Stays the same',
              'Becomes negative'
            ],
            correctAnswer: 1,
            explanation: 'With the ground as reference: $PE = mg(5)$. With the new reference: $PE = mg(5-2) = mg(3)$. The PE value decreases, but $\\Delta PE$ between any two points stays the same.'
          },
          {
            question: 'An object is below the reference level. Its gravitational PE is:',
            options: [
              'Positive',
              'Zero',
              'Negative',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: 'If the object is below the reference level, $h < 0$, so $PE_g = mgh < 0$. PE can be negative!'
          },
          {
            question: 'A 2 kg ball falls from 10 m to 4 m (above the ground). The change in gravitational PE is ($g = 10$ m/s²):',
            options: [
              '+120 J',
              '-120 J',
              '+80 J',
              '-80 J'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta PE_g = mg(h_f - h_i) = 2(10)(4 - 10) = 20(-6) = -120$ J. The ball loses PE as it falls.'
          }
        ]
      }
    },
    {
      id: 'gp1-calculations',
      type: 'input-boxes' as const,
      content: `
**PE Calculations** 🧮

Use $g = 10$ m/s².

1) What is the gravitational PE of a 5 kg object 8 m above the ground (in J)?

2) A 3 kg book is moved from a 1.2 m table to a 2.0 m shelf. What is the change in gravitational PE (in J)?

3) A 70 kg person descends 15 m in an elevator. What is the change in their gravitational PE (in J)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['400', '24', '-10500'],
        hint1: '$PE_g = mgh = 5(10)(8)$.',
        hint2: '$\\Delta PE_g = mg\\Delta h = 3(10)(2.0 - 1.2)$.',
        hint3: '$\\Delta PE_g = mg\\Delta h = 70(10)(-15)$. Note: descending means $\\Delta h < 0$.',
        explanation: '1) $PE_g = 400$ J. 2) $\\Delta PE_g = 3(10)(0.8) = 24$ J. 3) $\\Delta PE_g = 70(10)(-15) = -10{,}500$ J. Negative because the person descends.'
      }
    },
    {
      id: 'gp1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Reference Level Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A ball on the ground floor. Reference level is the second-floor balcony above. The ball\'s PE is:',
            options: ['Positive', 'Negative', 'Zero'],
            correctIndex: 1,
            explanation: 'The ball is below the reference level, so $h < 0$ and $PE_g = mgh < 0$.'
          },
          {
            label: 'Changing the reference level changes:',
            options: ['The value of PE at each point', 'The change in PE between two points', 'Both', 'Neither'],
            correctIndex: 0,
            explanation: 'Changing the reference level changes the PE value at each point, but the CHANGE in PE ($\\Delta PE$) between two points stays the same.'
          },
          {
            label: 'For a problem involving a ball thrown upward and caught at the same height, the best reference level is:',
            options: ['The top of the throw', 'The launch/catch height', 'The ground', 'It doesn\'t matter'],
            correctIndex: 3,
            explanation: 'Any reference level works! The launch/catch height is convenient ($h_i = h_f = 0$), but all give the same physical results.'
          },
          {
            label: 'Two objects at the same height but with different masses have:',
            options: ['The same PE', 'Different PE — heavier has more', 'Different PE — lighter has more', 'PE doesn\'t depend on mass'],
            correctIndex: 1,
            explanation: '$PE_g = mgh$. Same $h$, but larger $m$ gives larger PE.'
          }
        ]
      }
    },
    {
      id: 'gp1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Gravitational PE** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 4 kg cat jumps from a 1 m table to a 2.5 m shelf. The change in gravitational PE is ($g = 10$ m/s²):',
            options: [
              '40 J',
              '60 J',
              '100 J',
              '140 J'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta PE_g = mg\\Delta h = 4(10)(2.5 - 1.0) = 4(10)(1.5) = 60$ J.'
          },
          {
            question: 'Two students calculate the PE of a ball. Student A uses the floor as reference and gets 50 J. Student B uses a tabletop 1 m below the ball. If the ball is 2 kg, Student B\'s answer is ($g = 10$ m/s²):',
            options: [
              '20 J',
              '30 J',
              '50 J',
              '70 J'
            ],
            correctAnswer: 0,
            explanation: 'Student A: $PE = mgh = 50$ J → $h_{\\text{floor}} = 50/(2 \\times 10) = 2.5$ m. Student B\'s reference is 1 m below the ball → $h_B = 1$ m. $PE_B = 2(10)(1) = 20$ J. Different reference levels give different values.'
          }
        ]
      }
    }
  ]
}
