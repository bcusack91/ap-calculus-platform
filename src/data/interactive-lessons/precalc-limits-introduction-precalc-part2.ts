export const precalcLimitsPart2Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🧮 Limit Laws

**Part 2 of 7**

### Basic Limit Laws

If $\\lim_{x \\to c} f(x) = L$ and $\\lim_{x \\to c} g(x) = M$:

| Law | Formula |
|:----|:--------|
| Sum | $\\lim [f+g] = L+M$ |
| Difference | $\\lim [f-g] = L-M$ |
| Product | $\\lim [f \\cdot g] = L \\cdot M$ |
| Quotient | $\\lim [f/g] = L/M$ (if $M \\neq 0$) |
| Constant | $\\lim [kf] = kL$ |
| Power | $\\lim [f^n] = L^n$ |
| Root | $\\lim [\\sqrt[n]{f}] = \\sqrt[n]{L}$ |

### Direct Substitution

For **polynomials** and **rational functions** (where defined):

$$\\lim_{x \\to c} p(x) = p(c)$$

Just plug in! This works for any continuous function.
      `
    },
    {
      id: 'p2-examples',
      type: 'text' as const,
      content: `
## 📝 Using the Laws

### Example 1: Sum and Power

$$\\lim_{x \\to 2} (x^3 + 4x) = 2^3 + 4(2) = 8 + 8 = 16$$

### Example 2: Quotient

$$\\lim_{x \\to 3} \\frac{x^2+1}{x-1} = \\frac{9+1}{3-1} = \\frac{10}{2} = 5$$

### Example 3: Root Law

$$\\lim_{x \\to 9} \\sqrt{x+7} = \\sqrt{9+7} = \\sqrt{16} = 4$$

### Example 4: Combined Laws

$$\\lim_{x \\to 1} \\frac{(2x+1)^3}{\\sqrt{x+3}} = \\frac{(3)^3}{\\sqrt{4}} = \\frac{27}{2}$$

> 💡 Direct substitution is the **first thing** to try. Only use algebraic techniques when substitution gives $0/0$.
      `
    },
    {
      id: 'p2-squeeze',
      type: 'text' as const,
      content: `
## 🤏 The Squeeze Theorem

### Statement

If $g(x) \\leq f(x) \\leq h(x)$ near $x = c$, and

$$\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L$$

then $\\lim_{x \\to c} f(x) = L$.

### Classic Example

$$\\lim_{x \\to 0} x^2 \\sin(1/x)$$

We know $-1 \\leq \\sin(1/x) \\leq 1$, so:

$$-x^2 \\leq x^2 \\sin(1/x) \\leq x^2$$

Since $\\lim_{x \\to 0} (-x^2) = 0$ and $\\lim_{x \\to 0} x^2 = 0$:

$$\\lim_{x \\to 0} x^2 \\sin(1/x) = 0$$

**Squeezed** between two functions that both go to 0!
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Limit Laws Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 4} (x^2 - 3x + 1) = ?$',
            options: ['$5$', '$3$', '$13$', '$9$'],
            correctAnswer: 0,
            explanation: 'Direct: $16-12+1 = 5$.'
          },
          {
            question: 'If $\\lim f = 3$ and $\\lim g = -2$, then $\\lim(f \\cdot g) = ?$',
            options: ['$-6$', '$1$', '$6$', '$-5$'],
            correctAnswer: 0,
            explanation: 'Product law: $3 \\times (-2) = -6$.'
          },
          {
            question: 'The Squeeze Theorem requires:',
            options: ['$f$ between $g$ and $h$, with $g,h$ having same limit', '$f = g = h$', 'All three limits exist separately', 'Only one bound'],
            correctAnswer: 0,
            explanation: 'Squeeze = sandwiched between two converging bounds.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Apply Limit Laws** 🧮

**1)** $\\lim_{x \\to -1} (2x^3 + 5)$ = ?

**2)** $\\lim_{x \\to 5} \\frac{x+1}{x-3}$ = ?

**3)** $\\lim_{x \\to 0} \\sqrt{4-x}$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '3', '2'],
        hint1: '$2(-1)^3+5 = -2+5 = 3$.',
        hint2: '$\\frac{6}{2} = 3$.',
        hint3: '$\\sqrt{4-0} = 2$.',
        explanation: '1) $3$. 2) $3$. 3) $2$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Limit Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\lim[f+g]$ equals:',
            options: ['$\\lim f + \\lim g$', '$(\\lim f)(\\lim g)$', '$\\lim f / \\lim g$', '$\\lim(fg)$'],
            correctAnswer: 0
          },
          {
            label: 'Direct substitution works for:',
            options: ['All functions', 'Only polynomials', 'Continuous functions at that point', 'Only rational functions'],
            correctAnswer: 2
          },
          {
            label: 'Quotient law requires:',
            options: ['Numerator limit ≠ 0', 'Denominator limit ≠ 0', 'Both limits equal', 'Both limits ≠ 0'],
            correctAnswer: 1
          },
          {
            label: '$\\lim_{x \\to c} k = ?$',
            options: ['$0$', '$c$', '$k$', 'DNE'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$\\lim f + \\lim g$', 'Continuous functions at that point', 'Denominator limit ≠ 0', '$k$'],
        hint1: 'Sum of limits = limit of sum.',
        hint2: 'Continuity = limit equals value.',
        hint3: 'Can\'t divide by 0.',
        explanation: 'Sum law. Works for continuous. Den ≠ 0. Constant function limit = constant.'
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
            question: '$\\lim_{x \\to 2} \\frac{(x+1)(x-2)}{x^2-4} = ?$',
            options: ['$0$', '$3/4$', 'DNE', '$1$'],
            correctAnswer: 1,
            explanation: '$= \\lim \\frac{(x+1)(x-2)}{(x-2)(x+2)} = \\lim \\frac{x+1}{x+2} = 3/4$.'
          },
          {
            question: 'If $-x^4 \\leq f(x) \\leq x^4$ for all $x$, then $\\lim_{x \\to 0} f(x) = ?$',
            options: ['$0$', '$1$', 'DNE', 'Need more info'],
            correctAnswer: 0,
            explanation: 'Squeeze: both bounds → 0 as $x → 0$, so $f(x) → 0$.'
          }
        ]
      }
    }
  ]
};
