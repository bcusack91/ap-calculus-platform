export const calcbcSeriesAppsPart3Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sa3-intro',
      type: 'text' as const,
      content: `# Series for Evaluating Limits

**Part 3 of 7 — An Alternative to L'Hôpital's Rule**

### The Taylor Series Approach to Limits

For $0/0$ indeterminate forms, substitute the Taylor series and simplify:

$$\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}$$

Substitute: $\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots$

$$= \\lim_{x \\to 0} \\frac{(x - x^3/6 + \\cdots) - x}{x^3} = \\lim_{x \\to 0} \\frac{-x^3/6 + \\cdots}{x^3} = -\\frac{1}{6}$$

> **Key Fact:** One substitution replaces multiple L'Hôpital applications. This limit would require three rounds of L'Hôpital's Rule.`
    },
    {
      id: 'sa3-examples',
      type: 'text' as const,
      content: `### More Examples

**Example 1:** $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$

$e^x = 1 + x + x^2/2 + x^3/6 + \\cdots$

$$\\frac{(1 + x + x^2/2 + \\cdots) - 1 - x}{x^2} = \\frac{x^2/2 + x^3/6 + \\cdots}{x^2} = \\frac{1}{2} + \\frac{x}{6} + \\cdots \\to \\frac{1}{2}$$

**Example 2:** $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$

$\\cos x = 1 - x^2/2 + x^4/24 - \\cdots$

$$\\frac{1 - (1 - x^2/2 + \\cdots)}{x^2} = \\frac{x^2/2 - x^4/24 + \\cdots}{x^2} = \\frac{1}{2}$$

### When Series Beat L'Hôpital

| Scenario | L'Hôpital | Series |
|----------|-----------|--------|
| $\\frac{\\sin x - x}{x^3}$ | 3 applications | One substitution |
| $\\frac{e^x - 1 - x - x^2/2}{x^3}$ | 3 applications | One substitution |
| $\\frac{\\arctan x - x}{x^3}$ | Messy derivatives | Clean substitution |`
    },
    {
      id: 'sa3-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$. Using $\\tan x \\approx x + x^3/3$ and $\\sin x \\approx x - x^3/6$:',
            options: ['$1/2$ (numerator $\\approx x^3/3 + x^3/6 = x^3/2$)', '$1/3$', '$1/6$', '$0$'],
            correctAnswer: 0,
            explanation: '$(x + x^3/3) - (x - x^3/6) = x^3/3 + x^3/6 = x^3/2$. Divide by $x^3$: $1/2$.'
          },
          {
            question: '$\\lim_{x \\to 0} \\frac{x - \\ln(1+x)}{x^2}$. Since $\\ln(1+x) = x - x^2/2 + \\cdots$:',
            options: ['$1/2$', '$1$', '$0$', '$-1/2$'],
            correctAnswer: 0,
            explanation: '$x - (x - x^2/2 + \\cdots) = x^2/2 - \\cdots$. Divide by $x^2$: $1/2$.'
          },
          {
            question: 'Using series to evaluate limits works best when $x \\to$:',
            options: ['$0$ (use Maclaurin series centered at 0)', '$\\infty$', 'Any finite value', '$1$'],
            correctAnswer: 0,
            explanation: 'Maclaurin series are centered at $x = 0$, so they\'re most natural for $x \\to 0$.'
          }
        ]
      }
    },
    {
      id: 'sa3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Limit Computation**',
      exercise: {
        dropdowns: [
          {
            label: '$\\lim_{x \\to 0} \\frac{e^x - 1}{x}$. The series gives: $\\frac{(1 + x + x^2/2 + \\cdots) - 1}{x} =$',
            options: ['$1 + x/2 + \\cdots \\to 1$', '$x + x^2/2 + \\cdots \\to 0$', '$1/x + 1 + \\cdots \\to \\infty$', '$e$'],
            correctAnswers: ['$1 + x/2 + \\cdots \\to 1$'],
            hints: ['$(x + x^2/2 + \\cdots)/x = 1 + x/2 + \\cdots$.'],
            explanation: 'Cancel the $x$: $1 + x/2 + x^2/6 + \\cdots \\to 1$.'
          },
          {
            label: '$\\lim_{x \\to 0} \\frac{\\sin x - x + x^3/6}{x^5}$. Since $\\sin x = x - x^3/6 + x^5/120 - \\cdots$:',
            options: ['$1/120$ (numerator starts at $x^5/120$)', '$0$', '$1/6$', '$-1/120$'],
            correctAnswers: ['$1/120$ (numerator starts at $x^5/120$)'],
            hints: ['$\\sin x - x + x^3/6 = x^5/120 - x^7/5040 + \\cdots$.'],
            explanation: 'The $x$ and $x^3/6$ terms cancel, leaving $x^5/120$. Divide by $x^5$: $1/120$.'
          }
        ]
      }
    },
    {
      id: 'sa3-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: '$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x \\sin x}$. Use series. (Enter as a fraction.)',
        correctAnswer: '1/2',
        acceptableAnswers: ['1/2', '0.5', '0.50'],
        hints: ['Numerator: $x^2/2 - \\cdots$. Denominator: $x(x - x^3/6 + \\cdots) = x^2 - x^4/6 + \\cdots$.'],
        explanation: '$\\frac{x^2/2 - \\cdots}{x^2 - \\cdots} \\to 1/2$.'
      }
    },
    {
      id: 'sa3-summary',
      type: 'text' as const,
      content: `### Key Technique

$$\\boxed{\\text{Substitute Taylor series} \\to \\text{Cancel leading terms} \\to \\text{Read off the limit}}$$

This is especially powerful when the limit would require 3+ applications of L'Hôpital's Rule.

**Next: Part 4 — Differentiation of Power Series**`
    }
  ]
};
