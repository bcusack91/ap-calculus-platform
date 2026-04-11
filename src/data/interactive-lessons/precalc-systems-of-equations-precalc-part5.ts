export const precalcSystemsPart5Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🔢 Partial Fractions

**Part 5 of 7**

### Why Partial Fractions?

Decompose **complex fractions** into simpler ones — essential for integration in calculus!

$$\\frac{5x+3}{(x+1)(x+2)} = \\frac{A}{x+1} + \\frac{B}{x+2}$$

### The Process

1. Factor the denominator completely
2. Write one fraction per factor
3. Solve for the unknown constants

### Case 1: Distinct Linear Factors

$$\\frac{5x+3}{(x+1)(x+2)}$$

Multiply both sides by $(x+1)(x+2)$:
$$5x+3 = A(x+2) + B(x+1)$$

**Method 1 — Strategic substitution:**
- Let $x = -1$: $-2 = A(1) \\implies A = -2$
- Let $x = -2$: $-7 = B(-1) \\implies B = 7$

$$\\frac{5x+3}{(x+1)(x+2)} = \\frac{-2}{x+1} + \\frac{7}{x+2}$$
      `
    },
    {
      id: 'p5-repeated',
      type: 'text' as const,
      content: `
## 📝 Repeated & Quadratic Factors

### Case 2: Repeated Linear Factor

$$\\frac{3x+5}{(x-1)^2} = \\frac{A}{x-1} + \\frac{B}{(x-1)^2}$$

Multiply: $3x+5 = A(x-1)+B$

$x=1$: $8 = B$. Expand: $3x+5 = Ax-A+8 \\implies A=3$.

$$= \\frac{3}{x-1}+\\frac{8}{(x-1)^2}$$

### Case 3: Irreducible Quadratic Factor

$$\\frac{2x^2+x+3}{(x+1)(x^2+1)} = \\frac{A}{x+1}+\\frac{Bx+C}{x^2+1}$$

Note: quadratic factor gets $Bx+C$ (not just $B$).

$x=-1$: $2-1+3 = A(2) \\implies A=2$.

Expand and equate: $B=0, C=1$.

$$= \\frac{2}{x+1}+\\frac{1}{x^2+1}$$
      `
    },
    {
      id: 'p5-method',
      type: 'text' as const,
      content: `
## 🧮 Coefficient Matching Method

When substitution isn't enough, **equate coefficients** of each power of $x$.

### Example

$$\\frac{x^2+2}{(x-1)(x^2+x+1)} = \\frac{A}{x-1}+\\frac{Bx+C}{x^2+x+1}$$

Multiply: $x^2+2 = A(x^2+x+1)+(Bx+C)(x-1)$

**$x=1$**: $3 = 3A \\implies A = 1$

Expand right side: $x^2+x+1+(Bx^2-Bx+Cx-C)$
$= (1+B)x^2+(1-B+C)x+(1-C)$

**Equate coefficients:**
- $x^2$: $1 = 1+B \\implies B = 0$
- $x^0$: $2 = 1-C \\implies C = -1$

$$= \\frac{1}{x-1}+\\frac{-1}{x^2+x+1}$$

> 💡 Always check: is the degree of numerator < degree of denominator? If not, do **long division first**.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Partial Fractions Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\frac{3}{(x-1)(x+2)}$: the setup is:',
            options: ['$\\frac{A}{x-1}+\\frac{B}{x+2}$', '$\\frac{Ax+B}{(x-1)(x+2)}$', '$\\frac{A}{x-1}+\\frac{Bx}{x+2}$', '$\\frac{A}{x-1}+\\frac{B}{(x+2)^2}$'],
            correctAnswer: 0,
            explanation: 'Two distinct linear factors → $A/(x-1) + B/(x+2)$.'
          },
          {
            question: 'For $(x+1)^3$ in the denominator, how many terms?',
            options: ['1', '2', '3', '4'],
            correctAnswer: 2,
            explanation: '$\\frac{A}{x+1}+\\frac{B}{(x+1)^2}+\\frac{C}{(x+1)^3}$ — one for each power.'
          },
          {
            question: 'Irreducible quadratic $x^2+4$ gets numerator:',
            options: ['$A$', '$Ax+B$', '$Ax^2+B$', '$A/x$'],
            correctAnswer: 1,
            explanation: 'Quadratic denominator → linear numerator $Ax+B$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Find the Constants** 🧮

$\\frac{7x+1}{(x+1)(x-2)} = \\frac{A}{x+1}+\\frac{B}{x-2}$

**1)** $A$ = ? (set $x = -1$)

**2)** $B$ = ? (set $x = 2$)

**3)** $\\frac{4}{x(x+2)} = \\frac{A}{x}+\\frac{B}{x+2}$. $A$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '5', '2'],
        hint1: '$x=-1$: $-6 = A(-3) \\implies A = 2$.',
        hint2: '$x=2$: $15 = B(3) \\implies B = 5$.',
        hint3: '$x=0$: $4 = A(2) \\implies A=2$.',
        explanation: '1) $A=2$. 2) $B=5$. 3) $A=2$ (and $B=-2$).'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Partial Fractions Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Before decomposing, ensure:',
            options: ['Numerator degree < denominator degree', 'Denominator is factored', 'Both A and B', 'Neither'],
            correctAnswer: 2
          },
          {
            label: 'If degree(num) ≥ degree(den):',
            options: ['Cannot decompose', 'Do long division first', 'Factor numerator', 'Multiply by -1'],
            correctAnswer: 1
          },
          {
            label: 'The "cover-up" method uses:',
            options: ['Coefficient matching', 'Strategic substitution', 'Graphing', 'Elimination'],
            correctAnswer: 1
          },
          {
            label: 'Partial fractions are most useful in:',
            options: ['Graphing', 'Integration (calculus)', 'Factoring', 'Statistics'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Both A and B', 'Do long division first', 'Strategic substitution', 'Integration (calculus)'],
        hint1: 'Must be proper fraction with factored denominator.',
        hint2: 'Long division makes it a proper fraction.',
        hint3: 'Plug in roots of the denominator.',
        explanation: 'Need proper + factored. Improper → divide first. Cover-up = substitution. Main use: calculus integration.'
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
            question: '$\\frac{x+5}{x^2-x-6}$ decomposes over which factors?',
            options: ['$(x-3)(x+2)$', '$(x+3)(x-2)$', '$(x-6)(x+1)$', 'Cannot factor'],
            correctAnswer: 0,
            explanation: '$x^2-x-6 = (x-3)(x+2)$. Product $-6$, sum $-1$.'
          },
          {
            question: '$\\frac{x+5}{(x-3)(x+2)} = \\frac{A}{x-3}+\\frac{B}{x+2}$. $A+B$ = ?',
            options: ['$1$', '$2$', '$\\frac{8}{5}+\\frac{-3}{5}$', '$\\frac{8}{5}+\\frac{3}{5}$'],
            correctAnswer: 0,
            explanation: '$x=3$: $8=5A \\implies A=8/5$. $x=-2$: $3=-5B \\implies B=-3/5$. $A+B=1$ (always equals leading coeff ratio).'
          }
        ]
      }
    }
  ]
};
