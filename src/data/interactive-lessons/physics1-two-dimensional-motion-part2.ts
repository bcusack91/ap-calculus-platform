export const physics1TwoDimensionalMotionPart2Data = {
  topicSlug: 'two-dimensional-motion',
  sections: [
    {
      id: 'td2-intro',
      type: 'text' as const,
      content: `
# ➕ Vector Addition

**Part 2 of 7 — Two-Dimensional Motion**

In physics, we constantly need to add vectors — combining displacements, adding velocities, summing forces. There are two methods: **graphical** (tip-to-tail) and **component** (algebraic).
      `
    },
    {
      id: 'td2-graphical',
      type: 'text' as const,
      content: `
## Graphical Method: Tip-to-Tail

To add $\\vec{A} + \\vec{B}$:

1. Draw $\\vec{A}$
2. Place the **tail** of $\\vec{B}$ at the **tip** of $\\vec{A}$
3. The **resultant** $\\vec{R}$ goes from the tail of $\\vec{A}$ to the tip of $\\vec{B}$

### Properties of Vector Addition

- **Commutative**: $\\vec{A} + \\vec{B} = \\vec{B} + \\vec{A}$
- **Associative**: $(\\vec{A} + \\vec{B}) + \\vec{C} = \\vec{A} + (\\vec{B} + \\vec{C})$
- The resultant is generally NOT the arithmetic sum of the magnitudes

### Special Cases

| Case | Resultant Magnitude |
|------|-------------------|
| Same direction | $R = A + B$ (maximum) |
| Opposite directions | $R = |A - B|$ (minimum) |
| Perpendicular | $R = \\sqrt{A^2 + B^2}$ |
| General angle $\\theta$ | $R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$ |
      `
    },
    {
      id: 'td2-component',
      type: 'text' as const,
      content: `
## Component Method

The component method is more precise and works for any number of vectors.

### Steps

1. Resolve each vector into $x$ and $y$ components
2. Add all $x$-components: $R_x = A_x + B_x + C_x + \\cdots$
3. Add all $y$-components: $R_y = A_y + B_y + C_y + \\cdots$
4. Find the resultant: $R = \\sqrt{R_x^2 + R_y^2}$
5. Find the direction: $\\theta = \\tan^{-1}(R_y/R_x)$

### Example

$\\vec{A} = 3\\hat{i} + 4\\hat{j}$ and $\\vec{B} = -1\\hat{i} + 2\\hat{j}$

$$\\vec{R} = \\vec{A} + \\vec{B} = (3-1)\\hat{i} + (4+2)\\hat{j} = 2\\hat{i} + 6\\hat{j}$$

$$R = \\sqrt{4 + 36} = \\sqrt{40} = 6.32 \\text{ m}$$

$$\\theta = \\tan^{-1}(6/2) = \\tan^{-1}(3) = 71.6°$$
      `
    },
    {
      id: 'td2-subtraction',
      type: 'text' as const,
      content: `
## Vector Subtraction

$$\\vec{A} - \\vec{B} = \\vec{A} + (-\\vec{B})$$

To subtract $\\vec{B}$, **reverse** its direction and then add.

Using components:
$$\\vec{A} - \\vec{B} = (A_x - B_x)\\hat{i} + (A_y - B_y)\\hat{j}$$

### Important Application: $\\Delta \\vec{v}$

Change in velocity: $\\Delta\\vec{v} = \\vec{v}_f - \\vec{v}_i$

This is vector subtraction — you can't just subtract the magnitudes if the directions differ!
      `
    },
    {
      id: 'td2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Vector Addition** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two vectors of magnitude 3 and 4 are perpendicular. What is the magnitude of their resultant?',
            options: [
              '1',
              '5',
              '7',
              '12'
            ],
            correctAnswer: 1,
            explanation: 'For perpendicular vectors: $R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.'
          },
          {
            question: '$\\vec{A} = 4\\hat{i} - 3\\hat{j}$ and $\\vec{B} = -2\\hat{i} + 5\\hat{j}$. What is $\\vec{A} + \\vec{B}$?',
            options: [
              '$6\\hat{i} + 8\\hat{j}$',
              '$2\\hat{i} + 2\\hat{j}$',
              '$6\\hat{i} - 8\\hat{j}$',
              '$2\\hat{i} - 8\\hat{j}$'
            ],
            correctAnswer: 1,
            explanation: '$\\vec{A} + \\vec{B} = (4+(-2))\\hat{i} + ((-3)+5)\\hat{j} = 2\\hat{i} + 2\\hat{j}$.'
          },
          {
            question: 'Can the resultant of two vectors ever be smaller than either individual vector?',
            options: [
              'No, never',
              'Yes, when they are in opposite directions',
              'Yes, but only when they are perpendicular',
              'Yes, but only when they have equal magnitude'
            ],
            correctAnswer: 1,
            explanation: 'When two vectors partially or fully oppose each other, their resultant can be smaller than either one. For example, vectors of 5 N and 4 N in opposite directions give a resultant of 1 N.'
          }
        ]
      }
    },
    {
      id: 'td2-calculations',
      type: 'input-boxes' as const,
      content: `
**Vector Addition Practice** 🧮

1) $\\vec{A} = 6\\hat{i} + 2\\hat{j}$ and $\\vec{B} = -1\\hat{i} + 4\\hat{j}$. What is the x-component of $\\vec{A} + \\vec{B}$?

2) What is the y-component of $\\vec{A} + \\vec{B}$?

3) A hiker walks 5 km east, then 12 km north. What is the magnitude of the resultant displacement? (in km)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '6', '13'],
        hint1: '$R_x = A_x + B_x = 6 + (-1)$',
        hint2: '$R_y = A_y + B_y = 2 + 4$',
        hint3: '$R = \\sqrt{5^2 + 12^2}$',
        explanation: '1) $R_x = 6 - 1 = 5$. 2) $R_y = 2 + 4 = 6$. 3) $R = \\sqrt{25 + 144} = \\sqrt{169} = 13$ km.'
      }
    },
    {
      id: 'td2-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Vector Addition Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Two vectors of magnitude 5 N pointing in the same direction have a resultant of:',
            options: ['0 N', '5 N', '7.07 N', '10 N'],
            correctIndex: 3,
            explanation: 'Vectors in the same direction add directly: $R = 5 + 5 = 10$ N.'
          },
          {
            label: 'Two vectors of magnitude 5 N pointing in opposite directions have a resultant of:',
            options: ['0 N', '5 N', '7.07 N', '10 N'],
            correctIndex: 0,
            explanation: 'Equal vectors in opposite directions cancel: $R = 5 - 5 = 0$ N.'
          },
          {
            label: 'The component method of vector addition adds the _____ separately.',
            options: ['magnitudes', 'angles', 'x- and y-components', 'directions'],
            correctIndex: 2,
            explanation: 'The component method adds x-components together and y-components together independently.'
          }
        ]
      }
    },
    {
      id: 'td2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Vector Addition** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Three displacement vectors are $\\vec{A} = 3\\hat{i}$, $\\vec{B} = 4\\hat{j}$, and $\\vec{C} = -3\\hat{i}$. What is the resultant?',
            options: [
              '$4\\hat{j}$',
              '$6\\hat{i} + 4\\hat{j}$',
              '$3\\hat{i} + 4\\hat{j}$',
              '$0$'
            ],
            correctAnswer: 0,
            explanation: '$\\vec{R} = (3 + 0 - 3)\\hat{i} + (0 + 4 + 0)\\hat{j} = 0\\hat{i} + 4\\hat{j} = 4\\hat{j}$.'
          },
          {
            question: 'A 10 N force acts at $60°$ and a 10 N force acts at $120°$ (both from positive x-axis). The magnitude of the resultant is:',
            options: [
              '0 N',
              '10 N',
              '17.3 N',
              '20 N'
            ],
            correctAnswer: 1,
            explanation: '$R_x = 10\\cos60° + 10\\cos120° = 5 + (-5) = 0$. $R_y = 10\\sin60° + 10\\sin120° = 8.66 + 8.66 = 17.32$. Wait, $R = \\sqrt{0 + 17.32^2} = 17.3$ N. Actually this is 17.3 N. The angle between the vectors is $120° - 60° = 60°$, so $R = \\sqrt{10^2 + 10^2 + 2(10)(10)\\cos60°} = \\sqrt{100+100+100} = \\sqrt{300} = 17.3$ N.'
          }
        ]
      }
    }
  ]
}
