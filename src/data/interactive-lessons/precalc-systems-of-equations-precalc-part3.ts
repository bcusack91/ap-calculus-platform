export const precalcSystemsPart3Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 📈 Nonlinear Systems

**Part 3 of 7**

### What Are Nonlinear Systems?

At least one equation is **not** linear (contains $x^2$, $xy$, $\\sqrt{x}$, etc.).

$$\\begin{cases} x^2 + y^2 = 25 \\\\ x + y = 7 \\end{cases}$$

### Possible Intersections

| Combination | Max Intersections |
|:-----------|:-----------------|
| Line + Circle | 2 |
| Line + Parabola | 2 |
| Circle + Circle | 2 |
| Parabola + Parabola | 4 |
| Circle + Parabola | 4 |

### Main Strategy: Substitution

Nonlinear systems almost always use **substitution** because elimination may not cancel cleanly.
      `
    },
    {
      id: 'p3-examples',
      type: 'text' as const,
      content: `
## 📝 Line Meets Circle

$$\\begin{cases} x^2 + y^2 = 25 \\\\ x + y = 7 \\end{cases}$$

From eq2: $y = 7-x$. Substitute:
$$x^2 + (7-x)^2 = 25$$
$$x^2 + 49 - 14x + x^2 = 25$$
$$2x^2 - 14x + 24 = 0$$
$$x^2 - 7x + 12 = 0$$
$$(x-3)(x-4) = 0$$

$x = 3 \\implies y = 4$ or $x = 4 \\implies y = 3$.

**Solutions**: $(3, 4)$ and $(4, 3)$.

## Line Meets Parabola

$$\\begin{cases} y = x^2 \\\\ y = 2x + 3 \\end{cases}$$

$x^2 = 2x+3 \\implies x^2-2x-3=0 \\implies (x-3)(x+1)=0$

Solutions: $(3, 9)$ and $(-1, 1)$.
      `
    },
    {
      id: 'p3-advanced',
      type: 'text' as const,
      content: `
## 🔬 Two Conics

$$\\begin{cases} x^2 + y^2 = 10 \\\\ x^2 - y^2 = 4 \\end{cases}$$

**Add**: $2x^2 = 14 \\implies x^2 = 7 \\implies x = \\pm\\sqrt{7}$

**Subtract**: $2y^2 = 6 \\implies y^2 = 3 \\implies y = \\pm\\sqrt{3}$

**Four solutions**: $(\\pm\\sqrt{7}, \\pm\\sqrt{3})$ — all four sign combinations!

### No-Solution Cases

$$\\begin{cases} x^2 + y^2 = 1 \\\\ x^2 + y^2 = 4 \\end{cases}$$

Concentric circles with different radii — never intersect.

### One-Solution (Tangent)

$$\\begin{cases} y = x^2 \\\\ y = 2x - 1 \\end{cases}$$

$x^2 = 2x-1 \\implies x^2-2x+1=0 \\implies (x-1)^2=0$

Only $x = 1, y = 1$. The line is **tangent** to the parabola.
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Nonlinear Systems Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many solutions can a line and circle have?',
            options: ['0, 1, or 2', 'Always 2', 'Always 1', '0 or 2 only'],
            correctAnswer: 0,
            explanation: 'The line can miss (0), be tangent (1), or cross through (2).'
          },
          {
            question: '$\\begin{cases} y = x^2 \\\\ y = -x^2+8 \\end{cases}$: how many solutions?',
            options: ['0', '1', '2', '4'],
            correctAnswer: 2,
            explanation: '$x^2 = -x^2+8 \\implies 2x^2=8 \\implies x=\\pm 2$. Two solutions.'
          },
          {
            question: '$\\begin{cases} xy = 6 \\\\ x+y = 5 \\end{cases}$: the solutions are:',
            options: ['$(2,3)$ and $(3,2)$', '$(1,6)$ and $(6,1)$', '$(2,3)$ only', 'No solution'],
            correctAnswer: 0,
            explanation: '$y=5-x$, $x(5-x)=6$, $x^2-5x+6=0$, $(x-2)(x-3)=0$.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Solve** 🧮

$\\begin{cases} y = x^2 - 1 \\\\ y = 3x - 1 \\end{cases}$

**1)** Smaller $x$-value: $x$ = ?

**2)** Larger $x$-value: $x$ = ?

**3)** Sum of the two $y$-values: $y_1 + y_2$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', '3', '7'],
        hint1: '$x^2-1 = 3x-1 \\implies x^2-3x=0 \\implies x(x-3)=0$.',
        hint2: '$x = 0$ or $x = 3$.',
        hint3: '$y_1 = -1$, $y_2 = 8$. Sum = $7$.',
        explanation: '$x=0,y=-1$ and $x=3,y=8$. Sum of $y$: $-1+8=7$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Nonlinear Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Best method for nonlinear systems:',
            options: ['Graphing only', 'Substitution', 'Cramer\'s rule', 'Gauss elimination'],
            correctAnswer: 1
          },
          {
            label: 'A discriminant of 0 in the resulting quadratic means:',
            options: ['No solution', 'One solution (tangent)', 'Two solutions', 'Infinite solutions'],
            correctAnswer: 1
          },
          {
            label: 'Two parabolas can intersect at most:',
            options: ['2 points', '3 points', '4 points', '1 point'],
            correctAnswer: 2
          },
          {
            label: '$x^2+y^2=r^2$ and $x^2-y^2=a^2$: this is:',
            options: ['Circle + circle', 'Circle + hyperbola', 'Circle + parabola', 'Ellipse + line'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Substitution', 'One solution (tangent)', '4 points', 'Circle + hyperbola'],
        hint1: 'Elimination rarely works with nonlinear terms.',
        hint2: 'Discriminant 0 → repeated root → tangent.',
        hint3: 'Degree 2 × degree 2 = up to 4 intersections.',
        explanation: 'Substitution for nonlinear. Disc=0: tangent. Max 4 for two conics. $x^2-y^2$: hyperbola.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$\\begin{cases} x^2+y^2=13 \\\\ x-y=1 \\end{cases}$: one solution is $(3,2)$. The other?',
            options: ['$(-2, -3)$', '$(2, 3)$', '$(-3, -2)$', '$(1, 0)$'],
            correctAnswer: 0,
            explanation: '$y=x-1$, $x^2+(x-1)^2=13$, $2x^2-2x-12=0$, $x=3$ or $x=-2$. Other: $(-2,-3)$.'
          },
          {
            question: '$\\begin{cases} y = \\sqrt{x} \\\\ y = x-2 \\end{cases}$: the positive solution for $x$?',
            options: ['$4$', '$1$', '$2$', '$9$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{x}=x-2 \\implies x=(x-2)^2=x^2-4x+4 \\implies x^2-5x+4=0 \\implies x=4$ (check: $x=1$ fails since $1\\neq -1$).'
          }
        ]
      }
    }
  ]
};
