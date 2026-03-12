export const physics1TwoDimensionalMotionPart1Data = {
  topicSlug: 'two-dimensional-motion',
  sections: [
    {
      id: 'td1-intro',
      type: 'text' as const,
      content: `
# 🧭 Vectors — Magnitude, Direction, and Components

**Part 1 of 7 — Two-Dimensional Motion**

So far we've studied motion along a straight line. Real-world motion often occurs in **two dimensions** — a ball flying through the air, a car turning a corner, a boat crossing a river. To handle 2D motion, we need **vectors**.
      `
    },
    {
      id: 'td1-scalars-vectors',
      type: 'text' as const,
      content: `
## Scalars vs. Vectors

| Scalars | Vectors |
|---------|---------|
| Magnitude only | Magnitude AND direction |
| Examples: mass, time, speed, distance, energy | Examples: displacement, velocity, acceleration, force |
| Added normally | Added using vector rules |

### Representing Vectors

A vector can be described by:
1. **Magnitude and direction**: $v = 5$ m/s at $30°$ north of east
2. **Components**: $v_x = 4.33$ m/s, $v_y = 2.5$ m/s

### Notation

- Vectors are written as $\\vec{v}$, $\\vec{a}$, $\\vec{F}$ (arrow notation)
- Magnitude: $|\\vec{v}| = v$ (no arrow, or absolute value bars)
      `
    },
    {
      id: 'td1-components',
      type: 'text' as const,
      content: `
## Vector Components

Any 2D vector can be broken into perpendicular **components**:

$$v_x = v \\cos\\theta$$
$$v_y = v \\sin\\theta$$

where $\\theta$ is measured from the **positive x-axis** (standard position).

### Reconstructing from Components

$$v = \\sqrt{v_x^2 + v_y^2}$$
$$\\theta = \\tan^{-1}\\left(\\frac{v_y}{v_x}\\right)$$

### Example

A velocity of $10$ m/s at $60°$ above the positive x-axis:

$$v_x = 10 \\cos 60° = 10(0.5) = 5 \\text{ m/s}$$
$$v_y = 10 \\sin 60° = 10(0.866) = 8.66 \\text{ m/s}$$

**Check:** $\\sqrt{5^2 + 8.66^2} = \\sqrt{25 + 75} = \\sqrt{100} = 10$ m/s ✓
      `
    },
    {
      id: 'td1-unit-vectors',
      type: 'text' as const,
      content: `
## Unit Vectors

**Unit vectors** have magnitude 1 and point along a specific axis:

- $\\hat{i}$ (or $\\hat{x}$): points in the $+x$ direction
- $\\hat{j}$ (or $\\hat{y}$): points in the $+y$ direction

Any vector can be written as:

$$\\vec{v} = v_x \\hat{i} + v_y \\hat{j}$$

### Example

$\\vec{v} = 3\\hat{i} + 4\\hat{j}$ m/s means $v_x = 3$ m/s and $v_y = 4$ m/s.

Magnitude: $v = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$ m/s

Direction: $\\theta = \\tan^{-1}(4/3) = 53.1°$ above the $+x$ axis
      `
    },
    {
      id: 'td1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Vectors** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A vector has components $v_x = -3$ m/s and $v_y = +4$ m/s. What is the magnitude?',
            options: [
              '1 m/s',
              '5 m/s',
              '7 m/s',
              '25 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ m/s. The signs of the components don\'t affect the magnitude.'
          },
          {
            question: 'A displacement vector has magnitude 20 m and points at $30°$ above the positive x-axis. What is the x-component?',
            options: [
              '10 m',
              '17.3 m',
              '20 m',
              '14.1 m'
            ],
            correctAnswer: 1,
            explanation: '$d_x = 20 \\cos 30° = 20(0.866) = 17.3$ m.'
          },
          {
            question: 'Which of the following is a vector quantity?',
            options: [
              'Mass',
              'Temperature',
              'Speed',
              'Acceleration'
            ],
            correctAnswer: 3,
            explanation: 'Acceleration has both magnitude and direction, making it a vector. Mass, temperature, and speed are scalars.'
          }
        ]
      }
    },
    {
      id: 'td1-calculations',
      type: 'input-boxes' as const,
      content: `
**Vector Component Practice** 🧮

1) A force of 50 N acts at $37°$ above the positive x-axis. What is $F_x$? (in N, use $\\cos 37° = 0.8$)

2) For the same force, what is $F_y$? (in N, use $\\sin 37° = 0.6$)

3) A velocity vector has $v_x = 6$ m/s and $v_y = 8$ m/s. What is the magnitude? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '30', '10'],
        hint1: '$F_x = F\\cos\\theta = 50(0.8)$',
        hint2: '$F_y = F\\sin\\theta = 50(0.6)$',
        hint3: '$v = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64}$',
        explanation: '1) $F_x = 50(0.8) = 40$ N. 2) $F_y = 50(0.6) = 30$ N. 3) $v = \\sqrt{100} = 10$ m/s.'
      }
    },
    {
      id: 'td1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Vector Basics Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find the x-component of a vector, you use:',
            options: ['magnitude × sin θ', 'magnitude × cos θ', 'magnitude × tan θ', 'magnitude / cos θ'],
            correctIndex: 1,
            explanation: '$v_x = v\\cos\\theta$ when $\\theta$ is measured from the positive x-axis.'
          },
          {
            label: 'The magnitude of a vector is always:',
            options: ['positive or zero', 'positive, negative, or zero', 'equal to the largest component', 'the sum of its components'],
            correctIndex: 0,
            explanation: 'Magnitude is a scalar representing the "length" of the vector. It is calculated using the Pythagorean theorem and is always ≥ 0.'
          },
          {
            label: 'If $v_x < 0$ and $v_y > 0$, the vector points into quadrant:',
            options: ['I', 'II', 'III', 'IV'],
            correctIndex: 1,
            explanation: 'Negative x-component and positive y-component puts the vector in the second quadrant (left and up).'
          }
        ]
      }
    },
    {
      id: 'td1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Vectors** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A vector $\\vec{A} = -5\\hat{i} + 12\\hat{j}$. What is the angle measured from the positive x-axis?',
            options: [
              '$67.4°$',
              '$112.6°$',
              '$157.4°$',
              '$247.4°$'
            ],
            correctAnswer: 1,
            explanation: 'The reference angle is $\\tan^{-1}(12/5) = 67.4°$. Since $A_x < 0$ and $A_y > 0$ (quadrant II), $\\theta = 180° - 67.4° = 112.6°$.'
          },
          {
            question: 'A 13 m/s velocity vector has an x-component of 5 m/s. What is the y-component?',
            options: [
              '8 m/s',
              '12 m/s',
              '18 m/s',
              '144 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v_y = \\sqrt{v^2 - v_x^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ m/s.'
          }
        ]
      }
    }
  ]
}
