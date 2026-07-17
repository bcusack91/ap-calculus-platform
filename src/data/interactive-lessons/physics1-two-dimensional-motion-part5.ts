export const physics1TwoDimensionalMotionPart5Data = {
  topicSlug: 'two-dimensional-motion',
  sections: [
    {
      id: 'td5-intro',
      type: 'text' as const,
      content: `
# 🧮 Vector Practice Problems

**Part 5 of 7 — Two-Dimensional Motion**

Time to sharpen your vector skills! This lesson focuses on **solving 2D motion problems** step by step using vector decomposition and kinematic equations in each direction.
      `
    },
    {
      id: 'td5-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy for 2D Motion

### Step-by-Step Method

1. **Draw a diagram** — sketch the situation with a coordinate system
2. **Resolve into components** — break initial velocity into $v_{0x}$ and $v_{0y}$
3. **Write equations for each direction** separately
4. **Use time as the link** between $x$ and $y$ equations
5. **Solve** and check units

### Key Equations Summary

| Horizontal ($a_x = 0$) | Vertical ($a_y = -g$) |
|---|---|
| $x = v_{0x}t$ | $\\Delta y = v_{0y}t - \\frac{1}{2}gt^2$ |
| $v_x = v_{0x}$ (constant) | $v_y = v_{0y} - gt$ |
| | $v_y^2 = v_{0y}^2 - 2g\\Delta y$ |

### Finding the Resultant

When you need the final speed or direction:

$$v = \\sqrt{v_x^2 + v_y^2}$$

$$\\theta = \\tan^{-1}\\left(\\frac{v_y}{v_x}\\right)$$
      `
    },
    {
      id: 'td5-problem1',
      type: 'input-boxes' as const,
      content: `
**Problem 1 — Horizontal Launch** 🏀

A basketball is thrown horizontally at 8 m/s from a window 5 m above the ground. Use $g = 10$ $m/s^{2}$.

1) Time to hit the ground (in seconds)

2) Horizontal distance traveled (in meters)

3) Final speed just before hitting the ground (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '8', '~12.8'],
        hint1: 'Use $\\Delta y = \\frac{1}{2}gt^2$ with $\\Delta y = 5$ m',
        hint2: '$5 = 5t^2$, so $t = 1$ s. Then $x = 8(1) = 8$ m.',
        hint3: '$v_y = 10(1) = 10$ m/s. $v = \\sqrt{8^2 + 10^2}$',
        explanation: '1) $5 = \\frac{1}{2}(10)t^2 = 5t^2$, $t = 1$ s. 2) $x = 8(1) = 8$ m. 3) $v_y = 10(1) = 10$, $v = \\sqrt{64 + 100} = \\sqrt{164} \\approx 12.8$ m/s.'
      }
    },
    {
      id: 'td5-problem2',
      type: 'multiple-choice' as const,
      content: `
**Problem 2 — Vector Addition** ➕
      `,
      exercise: {
        questions: [
          {
            question: 'A boat moves at 5 m/s north while a river current pushes it 3 m/s east. What is the magnitude of the boat\'s resultant velocity?',
            options: [
              '2 m/s',
              '4 m/s',
              '$\\sqrt{34}$ ≈ 5.83 m/s',
              '8 m/s'
            ],
            correctAnswer: 2,
            explanation: '$v = \\sqrt{5^2 + 3^2} = \\sqrt{25 + 9} = \\sqrt{34} \\approx 5.83$ m/s. Since the velocities are perpendicular, we use the Pythagorean theorem.'
          },
          {
            question: 'A ball is launched at 30° above the horizontal with speed 20 m/s. What is $v_{0x}$? (Use $\\cos 30° \\approx 0.866$)',
            options: [
              '10 m/s',
              '17.3 m/s',
              '20 m/s',
              '15 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v_{0x} = v_0\\cos\\theta = 20\\cos 30° = 20(0.866) = 17.3$ m/s.'
          }
        ]
      }
    },
    {
      id: 'td5-problem3',
      type: 'input-boxes' as const,
      content: `
**Problem 3 — Vector Components** 📐

A force of 50 N is applied at an angle of 53° above the horizontal.

Use $\\cos 53° \\approx 0.6$ and $\\sin 53° \\approx 0.8$.

1) What is the horizontal component (in N)?

2) What is the vertical component (in N)?
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['30', '40'],
        hint1: '$F_x = F\\cos\\theta = 50\\cos 53°$',
        hint2: '$F_y = F\\sin\\theta = 50\\sin 53°$',
        hint3: 'Multiply: $50 \\times 0.6$ and $50 \\times 0.8$',
        explanation: '1) $F_x = 50\\cos 53° = 50(0.6) = 30$ N. 2) $F_y = 50\\sin 53° = 50(0.8) = 40$ N. Check: $\\sqrt{30^2 + 40^2} = \\sqrt{2500} = 50$ N ✓'
      }
    },
    {
      id: 'td5-problem4',
      type: 'dropdown-select' as const,
      content: `
**Problem 4 — Relative Motion** 🚗
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A car drives east at 20 m/s while rain falls vertically at 10 m/s. To a passenger in the car, the rain appears to come from:',
            options: ['directly above', 'the east', 'the west', 'an angle in front'],
            correctIndex: 3,
            explanation: 'Relative to the car, the rain has a horizontal component (from the front, since the car moves forward) and a vertical component. This makes it appear to come from an angle in front.'
          },
          {
            label: 'The apparent speed of the rain to the car passenger is:',
            options: ['10 m/s', '20 m/s', '$\\sqrt{500}$ ≈ 22.4 m/s', '30 m/s'],
            correctIndex: 2,
            explanation: 'The apparent velocity combines the vertical rain speed and the car\'s horizontal speed: $v = \\sqrt{20^2 + 10^2} = \\sqrt{500} \\approx 22.4$ m/s.'
          }
        ]
      }
    },
    {
      id: 'td5-problem5',
      type: 'input-boxes' as const,
      content: `
**Problem 5 — Adding Vectors by Components** ➕

Two displacement vectors: $\\vec{A} = 6$ m east and $\\vec{B} = 8$ m north.

1) Magnitude of $\\vec{A} + \\vec{B}$ (in meters)

2) Direction of $\\vec{A} + \\vec{B}$ above east (in degrees, use $\\tan^{-1}(4/3) \\approx 53°$)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['10', '53'],
        hint1: 'The components are perpendicular: $R = \\sqrt{6^2 + 8^2}$',
        hint2: '$\\theta = \\tan^{-1}(8/6) = \\tan^{-1}(4/3)$',
        hint3: '$R = \\sqrt{36 + 64} = \\sqrt{100}$',
        explanation: '1) $R = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$ m. 2) $\\theta = \\tan^{-1}(8/6) = \\tan^{-1}(4/3) \\approx 53°$ north of east.'
      }
    },
    {
      id: 'td5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Vector Practice** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\vec{A}$ has components $A_x = 3$ and $A_y = 4$, and $\\vec{B}$ has components $B_x = -1$ and $B_y = 2$, what is the magnitude of $\\vec{A} + \\vec{B}$?',
            options: [
              '$\\sqrt{20}$ ≈ 4.47',
              '$\\sqrt{40}$ ≈ 6.32',
              '$\\sqrt{10}$ ≈ 3.16',
              '$\\sqrt{50}$ ≈ 7.07'
            ],
            correctAnswer: 1,
            explanation: 'Sum components: $R_x = 3 + (-1) = 2$, $R_y = 4 + 2 = 6$. Magnitude: $R = \\sqrt{2^2 + 6^2} = \\sqrt{4 + 36} = \\sqrt{40} \\approx 6.32$.'
          },
          {
            question: 'An object is launched at 45° with speed $v_0$. Which statement is true?',
            options: [
              '$v_{0x} > v_{0y}$',
              '$v_{0x} < v_{0y}$',
              '$v_{0x} = v_{0y}$',
              '$v_{0x} = 0$'
            ],
            correctAnswer: 2,
            explanation: 'At 45°, $\\cos 45° = \\sin 45°$, so $v_{0x} = v_0\\cos 45° = v_0\\sin 45° = v_{0y}$. The components are equal.'
          }
        ]
      }
    }
  ]
}
