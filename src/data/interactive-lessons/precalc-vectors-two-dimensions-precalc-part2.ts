export const precalcVectors2DPart2Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🎯 The Dot Product

**Part 2 of 7**

### Definition

For $\\vec{u} = \\langle u_1, u_2 \\rangle$ and $\\vec{v} = \\langle v_1, v_2 \\rangle$:

$$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2$$

The dot product is a **scalar** (number), not a vector!

### Geometric Form

$$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\, |\\vec{v}| \\cos\\theta$$

where $\\theta$ is the angle between the vectors.

### Finding the Angle

$$\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\, |\\vec{v}|}$$

### Key Result: Perpendicularity

$$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$$

(since $\\cos 90° = 0$)
      `
    },
    {
      id: 'p2-examples',
      type: 'text' as const,
      content: `
## 📝 Examples

### Example 1: Compute the Dot Product

$\\vec{u} = \\langle 3, -2 \\rangle, \\; \\vec{v} = \\langle 4, 5 \\rangle$

$\\vec{u} \\cdot \\vec{v} = 3(4) + (-2)(5) = 12 - 10 = 2$

### Example 2: Find the Angle

$\\vec{u} = \\langle 1, 0 \\rangle, \\; \\vec{v} = \\langle 1, 1 \\rangle$

$\\cos\\theta = \\frac{1(1)+0(1)}{1 \\cdot \\sqrt{2}} = \\frac{1}{\\sqrt{2}}$

$\\theta = 45°$

### Example 3: Check Perpendicularity

$\\vec{u} = \\langle 4, 3 \\rangle, \\; \\vec{v} = \\langle 3, -4 \\rangle$

$\\vec{u} \\cdot \\vec{v} = 12 + (-12) = 0$ ✓ Perpendicular!

> 💡 **Pattern**: $\\langle a, b \\rangle \\perp \\langle -b, a \\rangle$ always (rotate 90°).
      `
    },
    {
      id: 'p2-properties',
      type: 'text' as const,
      content: `
## 📊 Properties of the Dot Product

| Property | Formula |
|:---------|:--------|
| Commutative | $\\vec{u} \\cdot \\vec{v} = \\vec{v} \\cdot \\vec{u}$ |
| Distributive | $\\vec{u} \\cdot (\\vec{v}+\\vec{w}) = \\vec{u}\\cdot\\vec{v} + \\vec{u}\\cdot\\vec{w}$ |
| Scalar assoc. | $(c\\vec{u})\\cdot\\vec{v} = c(\\vec{u}\\cdot\\vec{v})$ |
| Self dot product | $\\vec{v} \\cdot \\vec{v} = |\\vec{v}|^2$ |

### Sign of the Dot Product

- $\\vec{u}\\cdot\\vec{v} > 0$: angle is **acute** ($0° < \\theta < 90°$)
- $\\vec{u}\\cdot\\vec{v} = 0$: vectors are **perpendicular** ($\\theta = 90°$)
- $\\vec{u}\\cdot\\vec{v} < 0$: angle is **obtuse** ($90° < \\theta < 180°$)
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Dot Product Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\langle 2, 3 \\rangle \\cdot \\langle -1, 4 \\rangle =$',
            options: ['$14$', '$10$', '$-14$', '$5$'],
            correctAnswer: 1,
            explanation: '$2(-1) + 3(4) = -2 + 12 = 10$.'
          },
          {
            question: 'The angle between $\\langle 1, 0 \\rangle$ and $\\langle 0, 1 \\rangle$ is:',
            options: ['$0°$', '$45°$', '$90°$', '$180°$'],
            correctAnswer: 2,
            explanation: '$\\vec{u}\\cdot\\vec{v} = 0$, so $\\theta = 90°$.'
          },
          {
            question: 'If $\\vec{u}\\cdot\\vec{v} < 0$, the vectors are:',
            options: ['Parallel', 'Perpendicular', 'At an acute angle', 'At an obtuse angle'],
            correctAnswer: 3,
            explanation: 'Negative dot product means $\\cos\\theta < 0$, so $\\theta > 90°$: obtuse angle.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Dot Product Calculations** 🧮

**1)** $\\langle 5, -1 \\rangle \\cdot \\langle 2, 3 \\rangle$ = ?

**2)** $|\\vec{v}|^2$ where $\\vec{v} = \\langle 3, 4 \\rangle$: $\\vec{v}\\cdot\\vec{v}$ = ?

**3)** Angle between $\\langle 1, \\sqrt{3} \\rangle$ and $\\langle 1, 0 \\rangle$: $\\theta$ = ? degrees
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '25', '60'],
        hint1: '$5(2) + (-1)(3) = 10 - 3 = 7$.',
        hint2: '$3^2 + 4^2 = 9 + 16 = 25$.',
        hint3: '$\\cos\\theta = \\frac{1}{2 \\cdot 1} = \\frac{1}{2}$, so $\\theta = 60°$.',
        explanation: '1) $7$. 2) $25$. 3) $60°$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Dot Product Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The dot product of parallel vectors (same direction) is:',
            options: ['$0$', 'Positive', 'Negative', 'Undefined'],
            correctAnswer: 1
          },
          {
            label: '$\\langle 3, 4 \\rangle$ is perpendicular to:',
            options: ['$\\langle 4, 3 \\rangle$', '$\\langle -4, 3 \\rangle$', '$\\langle 3, -4 \\rangle$'],
            correctAnswer: 1
          },
          {
            label: 'The dot product is:',
            options: ['A vector', 'A scalar', 'Sometimes vector, sometimes scalar'],
            correctAnswer: 1
          },
          {
            label: '$\\vec{v} \\cdot \\vec{v} = 0$ implies:',
            options: ['$\\vec{v}$ is a unit vector', '$\\vec{v}$ is the zero vector', '$\\vec{v}$ is perpendicular to itself'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Positive', '$\\langle -4, 3 \\rangle$', 'A scalar', '$\\vec{v}$ is the zero vector'],
        hint1: 'Parallel, same direction: $\\theta = 0$, $\\cos 0 = 1 > 0$.',
        hint2: '$3(-4)+4(3) = -12+12 = 0$.',
        hint3: 'Dot product always produces a single number.',
        explanation: 'Parallel same direction: positive. $\\langle -4,3 \\rangle \\perp \\langle 3,4 \\rangle$. Dot product is scalar. $\\vec{v}\\cdot\\vec{v} = |\\vec{v}|^2 = 0$ only for zero vector.'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The angle between $\\vec{u} = \\langle 1, 1 \\rangle$ and $\\vec{v} = \\langle -1, 1 \\rangle$ is:',
            options: ['$45°$', '$60°$', '$90°$', '$120°$'],
            correctAnswer: 2,
            explanation: '$\\vec{u}\\cdot\\vec{v} = -1+1 = 0$. Perpendicular → $90°$.'
          },
          {
            question: '$|\\vec{u}+\\vec{v}|^2 = |\\vec{u}|^2 + 2\\vec{u}\\cdot\\vec{v} + |\\vec{v}|^2$ is analogous to:',
            options: ['Pythagorean theorem', '$(a+b)^2 = a^2+2ab+b^2$', 'Triangle inequality', 'Law of cosines'],
            correctAnswer: 1,
            explanation: 'This is the vector version of the algebraic identity $(a+b)^2 = a^2+2ab+b^2$.'
          }
        ]
      }
    }
  ]
};
