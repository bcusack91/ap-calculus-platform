export const precalcMatricesPart6Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🔄 Matrix Transformations

**Part 6 of 7**

### Matrices as Transformations

Every $2 \\times 2$ matrix defines a **linear transformation** of the plane.

$$T(\\vec{v}) = A\\vec{v}$$

### Common Transformation Matrices

| Transformation | Matrix |
|:--------------|:-------|
| Reflect $x$-axis | $\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ |
| Reflect $y$-axis | $\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ |
| Reflect $y=x$ | $\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ |
| Rotate $90°$ CCW | $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ |
| Scale by $k$ | $\\begin{bmatrix} k & 0 \\\\ 0 & k \\end{bmatrix}$ |

### Example: Reflect $(3, 2)$ over the $x$-axis

$$\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix} \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ -2 \\end{bmatrix}$$
      `
    },
    {
      id: 'p6-rotation',
      type: 'text' as const,
      content: `
## 🔄 Rotation Matrices

### General Rotation by Angle $\\theta$ (CCW)

$$R_\\theta = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$$

### Examples

**$90°$**: $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$

**$180°$**: $\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$

**$270°$ (or $-90°$)**: $\\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$

### Rotate $(1, 0)$ by $60°$

$$\\begin{bmatrix} \\cos 60° & -\\sin 60° \\\\ \\sin 60° & \\cos 60° \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 1/2 \\\\ \\sqrt{3}/2 \\end{bmatrix}$$

### Key Property

$\\det(R_\\theta) = \\cos^2\\theta + \\sin^2\\theta = 1$

Rotations preserve area!
      `
    },
    {
      id: 'p6-compose',
      type: 'text' as const,
      content: `
## 🔗 Composing Transformations

### Sequential Transforms = Matrix Product

Reflect over $x$-axis THEN rotate $90°$:

$$T = R_{90°} \\cdot M_x = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix} = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$$

This is reflection over $y = x$!

### Order Matters (Again!)

$R_{90°} \\cdot M_x \\neq M_x \\cdot R_{90°}$

Just like function composition: apply **rightmost first**.

### Dilation + Rotation

Scale by 2 then rotate $45°$:

$$T = R_{45°} \\cdot \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix} = \\begin{bmatrix} \\sqrt{2} & -\\sqrt{2} \\\\ \\sqrt{2} & \\sqrt{2} \\end{bmatrix}$$
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Transformation Matrices Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix} \\begin{bmatrix} 4 \\\\ 1 \\end{bmatrix} = ?$',
            options: ['$\\begin{bmatrix} -1 \\\\ 4 \\end{bmatrix}$', '$\\begin{bmatrix} 1 \\\\ 4 \\end{bmatrix}$', '$\\begin{bmatrix} 4 \\\\ -1 \\end{bmatrix}$', '$\\begin{bmatrix} -4 \\\\ 1 \\end{bmatrix}$'],
            correctAnswer: 0,
            explanation: '$90°$ CCW: $(4,1) \\to (-1, 4)$.'
          },
          {
            question: 'The matrix $\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ represents:',
            options: ['$90°$ rotation', '$180°$ rotation', 'Reflection over $x$-axis', 'Scale by $-1$'],
            correctAnswer: 1,
            explanation: '$(x,y) \\to (-x,-y)$: rotation by $180°$ (also equals point reflection through origin).'
          },
          {
            question: 'To apply $T_{1}$ then $T_{2}$: the combined matrix is:',
            options: ['$T_1 T_2$', '$T_2 T_1$', '$T_1 + T_2$', '$T_1 - T_2$'],
            correctAnswer: 1,
            explanation: 'Right-to-left: $T_2 \\cdot T_1 \\cdot \\vec{v}$ applies $T_1$ first, then $T_2$.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Transform Points** 🧮

Reflect $(5, -3)$ over the $y$-axis using $\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix}$:

**1)** New $x$ = ?

**2)** New $y$ = ?

**3)** $\\det \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ = ? (rotation matrix det)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-5', '-3', '1'],
        hint1: '$-1(5)+0(-3) = -5$.',
        hint2: '$0(5)+1(-3) = -3$.',
        hint3: '$0(0)-(-1)(1) = 1$.',
        explanation: '1) $-5$. 2) $-3$. 3) Rotation det always $= 1$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Transformation Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A rotation matrix has determinant:',
            options: ['$0$', '$1$', '$-1$', 'Varies'],
            correctAnswer: 1
          },
          {
            label: 'A reflection matrix has determinant:',
            options: ['$0$', '$1$', '$-1$', 'Varies'],
            correctAnswer: 2
          },
          {
            label: '$\\begin{bmatrix} 3 & 0 \\\\ 0 & 3 \\end{bmatrix}$ is a:',
            options: ['Rotation', 'Reflection', 'Dilation (scale)', 'Shear'],
            correctAnswer: 2
          },
          {
            label: 'A shear matrix has determinant:',
            options: ['$0$', '$1$', '$-1$', 'The shear factor'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$1$', '$-1$', 'Dilation (scale)', '$1$'],
        hint1: '$\\cos^2+\\sin^2=1$.',
        hint2: 'Reflections reverse orientation.',
        hint3: 'Same scale in both directions.',
        explanation: 'Rotation: det=1. Reflection: det=$-1$. Scalar×I: dilation. Shear: det=1.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Reflect $(2,3)$ over $y=x$:',
            options: ['$(3,2)$', '$(-2,-3)$', '$(2,-3)$', '$(-3,-2)$'],
            correctAnswer: 0,
            explanation: '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}\\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$. Swaps $x$ and $y$.'
          },
          {
            question: 'Rotate $(0, 5)$ by $90°$ CCW:',
            options: ['$(-5, 0)$', '$(5, 0)$', '$(0, -5)$', '$(0, 5)$'],
            correctAnswer: 0,
            explanation: '$\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}\\begin{bmatrix} 0 \\\\ 5 \\end{bmatrix} = \\begin{bmatrix} -5 \\\\ 0 \\end{bmatrix}$.'
          }
        ]
      }
    }
  ]
};
