export const precalcLimitsPart4Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# ♾️ Limits at Infinity

**Part 4 of 7**

### What Happens as $x \\to \\infty$?

$$\\lim_{x \\to \\infty} f(x) = L$$

The function approaches a **horizontal asymptote** at $y = L$.

### Rational Functions: Degree Comparison

$$\\lim_{x \\to \\infty} \\frac{a_nx^n + \\ldots}{b_mx^m + \\ldots}$$

| Degrees | Limit | Asymptote |
|:--------|:------|:----------|
| $n < m$ | $0$ | $y = 0$ |
| $n = m$ | $a_n/b_m$ | $y = a_n/b_m$ |
| $n > m$ | $\\pm\\infty$ | None (horizontal) |

### Examples

$$\\lim_{x \\to \\infty} \\frac{3x^2+1}{5x^2-2} = \\frac{3}{5}$$

$$\\lim_{x \\to \\infty} \\frac{x+1}{x^3} = 0$$

$$\\lim_{x \\to \\infty} \\frac{x^3}{2x+1} = \\infty$$
      `
    },
    {
      id: 'p4-technique',
      type: 'text' as const,
      content: `
## 🔧 The Divide-by-Highest-Power Technique

### Standard Method

$$\\lim_{x \\to \\infty} \\frac{3x^2-x+4}{2x^2+5x-1}$$

Divide every term by $x^2$:

$$= \\lim_{x \\to \\infty} \\frac{3-\\frac{1}{x}+\\frac{4}{x^2}}{2+\\frac{5}{x}-\\frac{1}{x^2}} = \\frac{3-0+0}{2+0-0} = \\frac{3}{2}$$

### Key Fact Used

$$\\lim_{x \\to \\infty} \\frac{k}{x^n} = 0 \\quad (n > 0)$$

### Non-Rational Functions

$$\\lim_{x \\to \\infty} \\frac{\\sqrt{4x^2+1}}{x} = \\lim \\frac{\\sqrt{4x^2+1}}{x} = \\lim \\sqrt{\\frac{4x^2+1}{x^2}} = \\sqrt{4} = 2$$

> 💡 For $x \\to -\\infty$, be careful: $\\sqrt{x^2} = |x| = -x$ when $x < 0$!
      `
    },
    {
      id: 'p4-infinite',
      type: 'text' as const,
      content: `
## 📊 Infinite Limits (Vertical Asymptotes)

### $\\lim_{x \\to c} f(x) = \\pm\\infty$

This is not a real limit (∞ is not a number), but we use the notation.

### Finding Vertical Asymptotes

$$f(x) = \\frac{1}{(x-2)^2}$$

As $x \\to 2$: denominator → $0^+$, numerator → $1$.

$$\\lim_{x \\to 2} \\frac{1}{(x-2)^2} = +\\infty$$

### Sign Analysis

$$g(x) = \\frac{1}{x-3}$$

- $\\lim_{x \\to 3^+} = +\\infty$ (denominator is small and positive)
- $\\lim_{x \\to 3^-} = -\\infty$ (denominator is small and negative)
- $\\lim_{x \\to 3}$ DNE (one-sided limits disagree in sign)

### Connection

- Horizontal asymptote: limit at infinity = finite
- Vertical asymptote: limit at finite point = infinity
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Limits at Infinity Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to \\infty} \\frac{5x+3}{2x-1} = ?$',
            options: ['$5/2$', '$3$', '$0$', '$\\infty$'],
            correctAnswer: 0,
            explanation: 'Same degree: leading coefficients $5/2$.'
          },
          {
            question: '$\\lim_{x \\to \\infty} \\frac{4}{x^2+1} = ?$',
            options: ['$4$', '$0$', '$\\infty$', '$1$'],
            correctAnswer: 1,
            explanation: 'Numerator degree (0) < denominator degree (2) → limit = 0.'
          },
          {
            question: '$\\lim_{x \\to 1^+} \\frac{1}{x-1} = ?$',
            options: ['$+\\infty$', '$-\\infty$', '$0$', '$1$'],
            correctAnswer: 0,
            explanation: 'As $x \\to 1^+$: $x-1 \\to 0^+$. Thus $1/(0^+) = +\\infty$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate** 🧮

**1)** $\\lim_{x \\to \\infty} \\frac{7x^3}{x^3+x}$: leading coefficient ratio = ?

**2)** $\\lim_{x \\to \\infty} \\frac{2x+5}{x^2}$ = ? (enter 0 for zero)

**3)** The horizontal asymptote of $y = \\frac{4x-1}{2x+3}$ is $y$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '0', '2'],
        hint1: 'Same degree: $7/1 = 7$.',
        hint2: 'Degree 1 < degree 2 → 0.',
        hint3: 'Leading: $4x/(2x) = 2$.',
        explanation: '1) $7$. 2) $0$. 3) HA: $y = 2$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Asymptote Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Horizontal asymptote exists when:',
            options: ['num degree > den degree', 'num degree ≤ den degree', 'Always', 'Never for polynomials'],
            correctAnswer: 1
          },
          {
            label: 'Vertical asymptote occurs where:',
            options: ['Numerator = 0', 'Denominator = 0 (not canceled)', 'Both = 0', 'Neither = 0'],
            correctAnswer: 1
          },
          {
            label: '$\\lim_{x\\to\\infty} e^{-x} = ?$',
            options: ['$\\infty$', '$0$', '$1$', '$-1$'],
            correctAnswer: 1
          },
          {
            label: 'A polynomial has a horizontal asymptote:',
            options: ['Always', 'Only if degree ≤ 1', 'Never (unless constant)', 'Only even degree'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['num degree ≤ den degree', 'Denominator = 0 (not canceled)', '$0$', 'Never (unless constant)'],
        hint1: 'HA when degree allows finite limit.',
        hint2: 'VA: zero in denominator that doesn\'t cancel.',
        hint3: '$e^{-x} \\to 0$ as $x \\to \\infty$.',
        explanation: 'HA: deg num ≤ deg den. VA: den=0 (uncanceled). $e^{-x}→0$. Polynomials: no HA (go to ±∞).'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to -\\infty} \\frac{3x}{\\sqrt{x^2+1}} = ?$',
            options: ['$3$', '$-3$', '$0$', '$\\pm 3$'],
            correctAnswer: 1,
            explanation: '$\\sqrt{x^2+1} \\approx |x| = -x$ for $x<0$. So $\\frac{3x}{-x} = -3$.'
          },
          {
            question: 'How many horizontal asymptotes can a rational function have?',
            options: ['At most 1', 'At most 2', 'Unlimited', 'Exactly 1'],
            correctAnswer: 0,
            explanation: 'For rationals, $\\lim_{x\\to\\infty}$ and $\\lim_{x\\to-\\infty}$ give the same value. At most 1 HA.'
          }
        ]
      }
    }
  ]
};
