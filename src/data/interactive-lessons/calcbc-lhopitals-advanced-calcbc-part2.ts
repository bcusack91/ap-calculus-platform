export const calcbcLHopPart2Data = {
  topicSlug: 'lhopitals-advanced-calcbc',
  sections: [
    {
      id: 'lh2-intro',
      type: 'text' as const,
      content: `# Other Indeterminate Forms

**Part 2 of 7 — $0 \\cdot \\infty$, $\\infty - \\infty$, $1^\\infty$, $0^0$, $\\infty^0$**

### The Seven Indeterminate Forms

| Form | Type | Strategy |
|------|------|----------|
| $0/0$ | Quotient | L'Hôpital directly |
| $\\infty/\\infty$ | Quotient | L'Hôpital directly |
| $0 \\cdot \\infty$ | Product | Rewrite as quotient |
| $\\infty - \\infty$ | Difference | Combine into quotient |
| $1^\\infty$ | Exponential | Take $\\ln$, then L'Hôpital |
| $0^0$ | Exponential | Take $\\ln$, then L'Hôpital |
| $\\infty^0$ | Exponential | Take $\\ln$, then L'Hôpital |

### $0 \\cdot \\infty$ Form

Rewrite $f \\cdot g$ as $\\frac{f}{1/g}$ or $\\frac{g}{1/f}$ to get $0/0$ or $\\infty/\\infty$.

**Example:** $\\lim_{x \\to 0^+} x \\ln x = 0 \\cdot (-\\infty)$

Rewrite: $\\lim \\frac{\\ln x}{1/x} = \\frac{-\\infty}{\\infty}$

$$\\stackrel{\\text{L'H}}{=} \\lim \\frac{1/x}{-1/x^2} = \\lim \\frac{-x^2}{x} = \\lim (-x) = 0$$

$$\\boxed{\\lim_{x \\to 0^+} x \\ln x = 0}$$`
    },
    {
      id: 'lh2-exp',
      type: 'text' as const,
      content: `### Exponential Indeterminate Forms ($1^\\infty$, $0^0$, $\\infty^0$)

For $\\lim [f(x)]^{g(x)}$, let $y = [f(x)]^{g(x)}$:

$$\\ln y = g(x) \\cdot \\ln[f(x)]$$

Evaluate $\\lim \\ln y$ (usually $0 \\cdot \\infty$), then $\\lim y = e^{\\lim \\ln y}$.

### Classic Example: $\\lim_{x \\to \\infty} (1 + 1/x)^x = e$

$\\ln y = x \\ln(1 + 1/x) = \\frac{\\ln(1 + 1/x)}{1/x}$

$0/0$ as $x \\to \\infty$. L'H:

$$\\lim \\frac{\\frac{-1/x^2}{1+1/x}}{-1/x^2} = \\lim \\frac{1}{1+1/x} = 1$$

So $\\ln y \\to 1$, $y \\to e^1 = e$.

### $\\infty - \\infty$ Form

Combine into a single fraction:

$$\\lim_{x \\to 0} \\left(\\frac{1}{x} - \\frac{1}{\\sin x}\\right) = \\lim \\frac{\\sin x - x}{x \\sin x} = \\frac{0}{0}$$

L'H: $\\lim \\frac{\\cos x - 1}{\\sin x + x\\cos x} = \\frac{0}{0}$

L'H again: $\\lim \\frac{-\\sin x}{\\cos x + \\cos x - x\\sin x} = \\frac{0}{2} = 0$

> **Key Fact:** Always convert to a quotient form before applying L'Hôpital.`
    },
    {
      id: 'lh2-mc1',
      type: 'multiple-choice' as const,
      content: '**Indeterminate Form Identification**',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to \\infty} x^{1/x}$. The indeterminate form is:',
            options: ['$\\infty^0$', '$1^\\infty$', '$0^0$', 'Not indeterminate'],
            correctAnswer: 0,
            explanation: 'Base $\\to \\infty$, exponent $\\to 0$. $\\infty^0$ form.'
          },
          {
            question: '$\\lim_{x \\to 0^+} x^x$. The indeterminate form is:',
            options: ['$0^0$', '$0 \\cdot \\infty$', '$1^\\infty$', '$0$'],
            correctAnswer: 0,
            explanation: 'Base $\\to 0^+$, exponent $\\to 0$. $0^0$ form.'
          },
          {
            question: '$\\lim_{x \\to 0^+} (\\sin x) \\cdot (\\csc x)$. Is this indeterminate?',
            options: ['No — it equals 1 (not indeterminate)', '$0 \\cdot \\infty$', '$0/0$', '$1^\\infty$'],
            correctAnswer: 0,
            explanation: '$\\sin x \\cdot \\csc x = \\sin x / \\sin x = 1$. Not indeterminate at all!'
          }
        ]
      }
    },
    {
      id: 'lh2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Solve: $\\lim_{x \\to \\infty} x^{1/x}$**',
      exercise: {
        dropdowns: [
          {
            label: 'Let $y = x^{1/x}$. Then $\\ln y =$',
            options: ['$\\frac{\\ln x}{x}$', '$x \\ln x$', '$\\frac{1}{x \\ln x}$', '$e^{1/x}$'],
            correctAnswers: ['$\\frac{\\ln x}{x}$'],
            hints: ['$\\ln(x^{1/x}) = (1/x)\\ln x = \\ln x / x$.'],
            explanation: '$\\ln y = \\ln x / x$.'
          },
          {
            label: '$\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$ is $\\infty/\\infty$. By L\'Hôpital: $\\lim \\frac{1/x}{1} =$',
            options: ['$0$', '$1$', '$\\infty$', '$-1$'],
            correctAnswers: ['$0$'],
            hints: ['$1/x \\to 0$ as $x \\to \\infty$.'],
            explanation: '$\\lim 1/x = 0$. So $\\ln y \\to 0$, meaning $y \\to e^0 = 1$.'
          }
        ]
      }
    },
    {
      id: 'lh2-input',
      type: 'input-box' as const,
      content: '**Evaluate**',
      exercise: {
        question: '$\\lim_{x \\to 0^+} x^x$. Take $\\ln$: $\\lim x \\ln x = 0$ (from Part 2 intro). So $\\lim x^x = e^0 = ?$',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0', 'e^0'],
        hints: ['$\\ln y = x \\ln x \\to 0$. So $y = e^0$.'],
        explanation: '$\\lim x \\ln x = 0$, so $x^x \\to e^0 = 1$.'
      }
    },
    {
      id: 'lh2-summary',
      type: 'text' as const,
      content: `### Summary

- Seven indeterminate forms: $0/0$, $\\infty/\\infty$, $0 \\cdot \\infty$, $\\infty - \\infty$, $1^\\infty$, $0^0$, $\\infty^0$
- Products: rewrite as quotient
- Exponentials: take $\\ln$, evaluate, then exponentiate
- Differences: combine into a single fraction
- Always verify the form before proceeding

> **Next:** Part 3 — Advanced Applications and Series Connections.`
    }
  ]
};
