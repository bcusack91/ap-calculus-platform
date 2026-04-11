export const precalcSystemsPart7Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Systems of Equations — Full Synthesis

**Part 7 of 7**

### Method Selection Guide

| System Type | Best Method |
|:-----------|:-----------|
| One variable isolated | Substitution |
| Coefficients nearly match | Elimination |
| 3+ variables, systematic | Gaussian elimination |
| Nonlinear | Substitution |
| Optimization | Linear programming |
| Integration prep | Partial fractions |

### Solution Types Summary

| Type | What Happens | Geometry |
|:-----|:------------|:---------|
| Unique | Consistent, one answer | Lines/curves cross |
| None | Inconsistent, contradiction ($0=5$) | Parallel/no intersection |
| Infinite | Dependent, identity ($0=0$) | Same line/overlap |

### Key Formulas

- Elimination: multiply to match, add/subtract
- Substitution: isolate, plug in, solve
- LP: evaluate objective at corner points
- Partial fractions: factor, decompose, solve for constants
      `
    },
    {
      id: 'p7-mixed',
      type: 'text' as const,
      content: `
## 🔄 Mixed Practice Strategies

### Quick-Solve Techniques

**Symmetric systems**: $x+y=S, x-y=D \\implies x=\\frac{S+D}{2}, y=\\frac{S-D}{2}$

**Product-Sum**: $x+y=s, xy=p$ → solve $t^2-st+p=0$

**Three-variable shortcut**: Add all equations first to find $x+y+z$.

### Example: Mixed Nonlinear

$$\\begin{cases} x^2+y=10 \\\\ x+y^2=10 \\end{cases}$$

By symmetry, try $x=y$: $x^2+x=10 \\implies x=\\frac{-1+\\sqrt{41}}{2} \\approx 2.7$

But also check non-symmetric solutions: subtract equations:
$x^2-y^2-(x-y)=0 \\implies (x-y)(x+y-1)=0$

So either $x=y$ or $x+y=1$ — two families of solutions!

### Common Pitfalls

- Forgetting to check solutions in ALL original equations
- Losing solutions when dividing by a variable (might be 0!)
- Not verifying extraneous solutions from squaring
      `
    },
    {
      id: 'p7-connect',
      type: 'text' as const,
      content: `
## 🔗 Calculus Connections

### Systems Appear Everywhere

**Related Rates (Calculus):** Set up systems relating rates of change.

**Optimization (Calculus):** Lagrange multipliers create systems:
$$\\nabla f = \\lambda \\nabla g$$

**Differential Equations:** Systems of DEs govern:
- Population dynamics (predator-prey)
- Electrical circuits
- Economic models

### Linear Algebra Preview

Systems can be written as matrix equations:

$$\\begin{bmatrix} 2 & 1 \\\\ 1 & -1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 2 \\end{bmatrix}$$

This leads to **matrices** — our next topic!
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\begin{cases} 3x+2y=12 \\\\ 6x+4y=24 \\end{cases}$ has:',
            options: ['One solution', 'No solution', 'Infinitely many', 'Two solutions'],
            correctAnswer: 2,
            explanation: 'Eq2 = 2×Eq1. Same line → infinitely many solutions.'
          },
          {
            question: 'Best approach: $\\begin{cases} y = x^2-3 \\\\ y = 2x+1 \\end{cases}$',
            options: ['Elimination', 'Set equal: $x^2-3=2x+1$', 'Matrix method', 'Graphing only'],
            correctAnswer: 1,
            explanation: 'Both solved for $y$: set them equal and solve the quadratic.'
          },
          {
            question: '$\\begin{cases} x+y+z = 12 \\\\ x-y+z = 4 \\end{cases}$: what can we determine?',
            options: ['All three variables', 'Only $y = 4$', '$x + z = 8$ and $y = 4$', 'Nothing'],
            correctAnswer: 2,
            explanation: 'Add: $2x+2z=16 \\implies x+z=8$. Subtract: $2y=8 \\implies y=4$. $x,z$ need another eq.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Calculations** 🧮

**1)** $x+y=10, xy=21$. Larger value = ?

**2)** $\\frac{1}{(x-1)(x-2)}$ at $x=3$: value = ?

**3)** Max of $P=x+2y$ at corners $(0,0),(4,0),(2,3),(0,5)$: max $P$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '0.5', '10'],
        hint1: '$t^2-10t+21=0 \\implies (t-3)(t-7)=0$.',
        hint2: '$\\frac{1}{(2)(1)} = 0.5$.',
        hint3: 'At $(0,5)$: $P = 0+10 = 10$.',
        explanation: '1) $7$ (and 3). 2) $1/2$. 3) Check all: $0, 4, 8, 10$. Max = $10$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Systems Master** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '2 equations, 3 unknowns typically gives:',
            options: ['Unique solution', 'No solution', 'Infinitely many', 'Undefined'],
            correctAnswer: 2
          },
          {
            label: 'Partial fractions require the fraction to be:',
            options: ['Improper', 'Proper', 'Unit', 'Complex'],
            correctAnswer: 1
          },
          {
            label: '$0 = 0$ after elimination means:',
            options: ['No solution', 'Unique solution', 'Dependent (infinite)', 'Error'],
            correctAnswer: 2
          },
          {
            label: 'Nonlinear systems can have:',
            options: ['At most 2 solutions', 'Any number of solutions', 'Only odd numbers of solutions', 'At most 1 solution'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Infinitely many', 'Proper', 'Dependent (infinite)', 'Any number of solutions'],
        hint1: 'Under-determined system.',
        hint2: 'degree(num) < degree(den).',
        hint3: '$0=0$ is always true: no new info.',
        explanation: 'Under-determined: infinite. Proper fraction. $0=0$: dependent. Nonlinear: any count possible.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Decompose $\\frac{5}{x^2-1}$: $A$ in $\\frac{A}{x-1}+\\frac{B}{x+1}$?',
            options: ['$5/2$', '$-5/2$', '$5$', '$-5$'],
            correctAnswer: 0,
            explanation: '$5 = A(x+1)+B(x-1)$. $x=1$: $5=2A \\implies A=5/2$.'
          },
          {
            question: '$\\begin{cases} xy = 12 \\\\ x + y = 7 \\end{cases}$: solutions?',
            options: ['$(3,4)$ and $(4,3)$', '$(2,6)$ and $(6,2)$', '$(3,4)$ only', 'No solution'],
            correctAnswer: 0,
            explanation: '$t^2-7t+12=0 \\implies (t-3)(t-4)=0$. Solutions: $(3,4)$ and $(4,3)$.'
          }
        ]
      }
    }
  ]
};
