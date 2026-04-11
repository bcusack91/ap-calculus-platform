export const precalcConicsPart5Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🔄 Rotated Conics & General Second-Degree Equations

**Part 5 of 7**

### The General Second-Degree Equation

$$Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$$

When $B \\neq 0$, the conic is **rotated** — its axes are not aligned with the coordinate axes.

### The Discriminant Test (Revisited)

$\\Delta = B^2 - 4AC$ determines the type:

| Discriminant | Conic |
|:-------------|:------|
| $\\Delta < 0$ | Ellipse (or circle if $A=C, B=0$) |
| $\\Delta = 0$ | Parabola |
| $\\Delta > 0$ | Hyperbola |

> 💡 The discriminant is **invariant** under rotation — changing coordinates doesn't change $B^2-4AC$.
      `
    },
    {
      id: 'p5-rotation',
      type: 'text' as const,
      content: `
## 🔀 Eliminating the $xy$-Term

To remove the $Bxy$ term, rotate axes by angle $\\theta$ where:

$$\\cot 2\\theta = \\frac{A-C}{B}$$

### Rotation Formulas

$$x = X\\cos\\theta - Y\\sin\\theta$$
$$y = X\\sin\\theta + Y\\cos\\theta$$

Substituting transforms $Ax^2+Bxy+Cy^2+\\ldots = 0$ into:

$$A'X^2 + C'Y^2 + D'X + E'Y + F' = 0$$

with **no $XY$-term** — now in standard position!

### Example

$xy = 1$ has $A=0, B=1, C=0$. $\\cot 2\\theta = 0 \\implies \\theta = 45°$.

After rotation: $\\frac{X^2}{2} - \\frac{Y^2}{2} = 1$ — a hyperbola!
      `
    },
    {
      id: 'p5-classify',
      type: 'text' as const,
      content: `
## 🏷️ Classification Practice

### Example 1: $x^2 + 4xy + 4y^2 + 2x - 3y + 1 = 0$

$A=1, B=4, C=4$

$\\Delta = 16 - 16 = 0$ → **Parabola**

### Example 2: $2x^2 + 3xy - 2y^2 + x - 5 = 0$

$A=2, B=3, C=-2$

$\\Delta = 9 - 4(2)(-2) = 9+16 = 25 > 0$ → **Hyperbola**

### Example 3: $3x^2 + 2xy + 3y^2 - 8 = 0$

$A=3, B=2, C=3$

$\\Delta = 4 - 36 = -32 < 0$ → **Ellipse**

> Note: Degenerate cases (empty set, single point, intersecting lines) can occur when the equation factors.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Classification Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Classify: $x^2 + 6xy + 9y^2 - 2x + 1 = 0$. Here $\\Delta = 36 - 36 = 0$.',
            options: ['Ellipse', 'Parabola', 'Hyperbola', 'Circle'],
            correctAnswer: 1,
            explanation: '$B^2-4AC = 36-4(1)(9) = 0$ → Parabola.'
          },
          {
            question: 'Classify: $4x^2 - 5xy + y^2 = 0$. Here $\\Delta = 25-16$.',
            options: ['Ellipse', 'Parabola', 'Hyperbola', 'Circle'],
            correctAnswer: 2,
            explanation: '$\\Delta = 25-16 = 9 > 0$ → Hyperbola (possibly degenerate).'
          },
          {
            question: 'To eliminate the $xy$-term from $x^2+2xy+y^2=4$, rotate by:',
            options: ['$30°$', '$45°$', '$60°$', '$90°$'],
            correctAnswer: 1,
            explanation: '$\\cot 2\\theta = \\frac{A-C}{B} = \\frac{1-1}{2} = 0 \\implies 2\\theta = 90° \\implies \\theta = 45°$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Discriminant Practice** 🧮

Calculate $\\Delta = B^2-4AC$ for each:

**1)** $5x^2+3xy+2y^2=10$: $\\Delta$ = ?

**2)** $x^2-4xy+4y^2+y=0$: $\\Delta$ = ?

**3)** $2x^2+5xy-3y^2=1$: $\\Delta$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-31', '0', '49'],
        hint1: '$B=3, A=5, C=2$: $9-40 = -31$.',
        hint2: '$B=-4, A=1, C=4$: $16-16 = 0$.',
        hint3: '$B=5, A=2, C=-3$: $25+24 = 49$.',
        explanation: '1) $\\Delta = -31 < 0$: ellipse. 2) $\\Delta = 0$: parabola. 3) $\\Delta = 49 > 0$: hyperbola.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rotated Conics Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The discriminant $B^2-4AC$ is invariant under:',
            options: ['Translation only', 'Rotation only', 'Both translation and rotation'],
            correctAnswer: 2
          },
          {
            label: 'If $B=0$ in $Ax^2+Bxy+Cy^2+Dx+Ey+F=0$, the conic axes are:',
            options: ['Rotated $45°$', 'Aligned with coordinate axes', 'Cannot determine'],
            correctAnswer: 1
          },
          {
            label: 'The conic $xy=4$ is a:',
            options: ['Parabola', 'Ellipse', 'Hyperbola', 'Circle'],
            correctAnswer: 2
          },
          {
            label: '$x^2+y^2=r^2$ is a special case of an ellipse where:',
            options: ['$a = b$, $e = 0$', '$a > b$, $e = 1$', '$B = 1$'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Both translation and rotation', 'Aligned with coordinate axes', 'Hyperbola', '$a = b$, $e = 0$'],
        hint1: 'The discriminant is unchanged by any rigid motion.',
        hint2: 'No $xy$-term means no rotation.',
        hint3: '$xy=4$: $A=0, B=1, C=0$; $\\Delta = 1 > 0$.',
        explanation: 'Discriminant is invariant under all rigid motions. $B=0$ → axes aligned. $xy=4$ → hyperbola. Circle: $a=b$, eccentricity $0$.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $3x^2-10xy+3y^2+8=0$, $\\Delta = 100-36 = 64$. This is a:',
            options: ['Ellipse', 'Parabola', 'Hyperbola', 'Circle'],
            correctAnswer: 2,
            explanation: '$\\Delta = 64 > 0$ → Hyperbola.'
          },
          {
            question: 'If $\\cot 2\\theta = 0$, the rotation angle is:',
            options: ['$0°$', '$30°$', '$45°$', '$90°$'],
            correctAnswer: 2,
            explanation: '$\\cot 2\\theta = 0 \\implies 2\\theta = 90° \\implies \\theta = 45°$.'
          }
        ]
      }
    }
  ]
};
