export const calcabLimitsPart2Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit2-intro',
      type: 'text' as const,
      content: `
# ∫ Evaluating Limits Algebraically

**Part 2 of 7 — Mastering Limit Computation**

### 1. Special Trig Limits

Two limits you **must memorize** for the AP exam:

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\qquad \\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$$

These appear constantly in disguised forms. For example:

$$\\lim_{x \\to 0} \\frac{\\sin(3x)}{x} = \\lim_{x \\to 0} 3 \\cdot \\frac{\\sin(3x)}{3x} = 3 \\cdot 1 = 3$$

**General pattern:** $\\lim_{x \\to 0} \\frac{\\sin(ax)}{bx} = \\frac{a}{b}$

### 2. Limits at Infinity

For **rational functions** as $x \\to \\infty$, compare the degrees of numerator and denominator:

- **Same degree:** Limit = ratio of leading coefficients
  - $\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{5x^2 - 2} = \\frac{3}{5}$
- **Numerator degree < Denominator degree:** Limit = 0
  - $\\lim_{x \\to \\infty} \\frac{2x}{x^2 + 1} = 0$
- **Numerator degree > Denominator degree:** Limit = $\\pm\\infty$
  - $\\lim_{x \\to \\infty} \\frac{x^3}{x+1} = \\infty$

### 3. Limits Involving $e$

The number $e$ is defined by: $\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e \\approx 2.718$

Useful variant: $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$

### 4. Piecewise Function Limits

For piecewise functions, evaluate the limit from each side separately:

$$f(x) = \\begin{cases} x^2 & x < 1 \\\\ 2x - 1 & x \\geq 1 \\end{cases}$$

$\\lim_{x \\to 1^-} f(x) = 1^2 = 1$ and $\\lim_{x \\to 1^+} f(x) = 2(1)-1 = 1$

Since both sides agree, $\\lim_{x \\to 1} f(x) = 1$.
      `
    },
    {
      id: 'limit2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(5x)}{2x}$.',
            options: ['$\\frac{2}{5}$', '$\\frac{5}{2}$', '$1$', '$0$'],
            correctAnswer: 1,
            explanation: 'Rewrite: $\\frac{\\sin(5x)}{2x} = \\frac{5}{2} \\cdot \\frac{\\sin(5x)}{5x}$. Since $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$, the answer is $\\frac{5}{2}$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{4x^3 - x + 2}{2x^3 + 5x^2}$.',
            options: ['$0$', '$2$', '$\\infty$', '$\\frac{4}{5}$'],
            correctAnswer: 1,
            explanation: 'Same degree (3) in numerator and denominator. The limit equals the ratio of leading coefficients: $\\frac{4}{2} = 2$.'
          }
        ]
      }
    },
    {
      id: 'limit2-detail',
      type: 'text' as const,
      content: `
### Limits at Infinity — Quick Reference

| Degree Comparison | Result | Memory Aid |
|-------------------|--------|------------|
| deg(top) < deg(bottom) | $0$ | "Bottom wins" |
| deg(top) = deg(bottom) | $\\frac{\\text{leading coeff top}}{\\text{leading coeff bottom}}$ | "Tie goes to coefficients" |
| deg(top) > deg(bottom) | $\\pm\\infty$ | "Top wins" |

**Key trig limits to memorize:**
- $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$
- $\\lim_{x \\to 0} \\frac{1-\\cos x}{x} = 0$
- $\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$
      `
    },
    {
      id: 'limit2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{3x + 7}{x^2 - 1}$.',
            options: ['$3$', '$0$', '$\\infty$', '$-7$'],
            correctAnswer: 1,
            explanation: 'The degree of the numerator (1) is less than the degree of the denominator (2). When the bottom has a higher degree, the limit is 0 — the denominator grows much faster.'
          }
        ]
      }
    },
    {
      id: 'limit2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Evaluate Each Limit** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 0} \\frac{\\sin(4x)}{4x}$', options: ['0', '1', '4', 'DNE'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{x^2+1}{3x^2-x}$', options: ['0', '1/3', '1', '3'] },
          { label: '$\\lim_{x \\to 0} \\frac{1-\\cos x}{x}$', options: ['0', '1', '-1', 'DNE'] }
        ],
        correctAnswers: ['1', '1/3', '0'],
        hint1: 'The first is a direct application of the special trig limit $\\frac{\\sin u}{u} \\to 1$.',
        hint2: 'For the second, both numerator and denominator are degree 2.',
        hint3: '$\\lim_{x \\to 0} \\frac{1-\\cos x}{x} = 0$ is one of the memorized special limits.',
        explanation: '$\\frac{\\sin(4x)}{4x} \\to 1$ by the special limit. $\\frac{x^2+1}{3x^2-x} \\to \\frac{1}{3}$ (ratio of leading coefficients). $\\frac{1-\\cos x}{x} \\to 0$ is a standard result.'
      }
    }
  ]
}
