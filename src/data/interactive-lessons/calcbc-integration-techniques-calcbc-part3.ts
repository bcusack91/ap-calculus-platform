export const calcbcIntTechPart3Data = {
  topicSlug: 'integration-techniques-calcbc',
  sections: [
    {
      id: 'it3-intro',
      type: 'text' as const,
      content: `# Advanced Integration Techniques

**Part 3 of 7 \u2014 Secant/Tangent Integrals & Reduction Formulas**

After trig substitution, you often end up with integrals of $\\sec$ and $\\tan$. These have their own strategies.`
    },
    {
      id: 'it3-sectan',
      type: 'text' as const,
      content: `### Key Integrals to Memorize

$$\\boxed{\\int \\tan x\\,dx = \\ln|\\sec x| + C}$$
$$\\boxed{\\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C}$$
$$\\boxed{\\int \\sec^2 x\\,dx = \\tan x + C}$$
$$\\boxed{\\int \\sec x \\tan x\\,dx = \\sec x + C}$$

### Strategy for $\\int \\tan^m x \\sec^n x\\,dx$

| Condition | Strategy |
|-----------|----------|
| $n$ even ($n \\ge 2$) | Peel off $\\sec^2 x$, convert rest via $\\sec^2 = 1 + \\tan^2$, $u = \\tan x$ |
| $m$ odd | Peel off $\\sec x \\tan x$, convert rest via $\\tan^2 = \\sec^2 - 1$, $u = \\sec x$ |
| $m$ even, $n$ odd | Convert $\\tan^2 = \\sec^2 - 1$, reduce powers of $\\sec$ |`
    },
    {
      id: 'it3-example',
      type: 'text' as const,
      content: `### Example: $\\int \\tan^3 x \\sec^3 x\\,dx$

$m = 3$ (odd), so peel off $\\sec x \\tan x$:

$$\\int \\tan^2 x \\sec^2 x \\cdot \\sec x \\tan x\\,dx$$

Convert $\\tan^2 x = \\sec^2 x - 1$, let $u = \\sec x$:

$$\\int (u^2 - 1)u^2\\,du = \\int (u^4 - u^2)\\,du = \\frac{u^5}{5} - \\frac{u^3}{3} + C$$

$$\\boxed{= \\frac{\\sec^5 x}{5} - \\frac{\\sec^3 x}{3} + C}$$

### The Tricky Case: $\\int \\sec^3 x\\,dx$

This requires IBP: $u = \\sec x$, $dv = \\sec^2 x\\,dx$

$$\\int \\sec^3 x\\,dx = \\sec x \\tan x - \\int \\sec x \\tan^2 x\\,dx$$
$$= \\sec x \\tan x - \\int \\sec x(\\sec^2 x - 1)\\,dx$$
$$= \\sec x \\tan x - \\int \\sec^3 x\\,dx + \\int \\sec x\\,dx$$

Solving: $2\\int \\sec^3 x\\,dx = \\sec x \\tan x + \\ln|\\sec x + \\tan x|$

$$\\boxed{\\int \\sec^3 x\\,dx = \\frac{1}{2}(\\sec x \\tan x + \\ln|\\sec x + \\tan x|) + C}$$`
    },
    {
      id: 'it3-mc1',
      type: 'multiple-choice' as const,
      content: '**Strategy Selection**',
      exercise: {
        questions: [
          {
            question: 'For $\\int \\tan^2 x \\sec^4 x\\,dx$, the best strategy is:',
            options: [
              'Peel off $\\sec^2 x$, let $u = \\tan x$',
              'Peel off $\\sec x \\tan x$, let $u = \\sec x$',
              'Convert everything to $\\sin$ and $\\cos$',
              'Integration by parts'
            ],
            correctAnswer: 0,
            explanation: '$n = 4$ (even). Peel off $\\sec^2 x$ for $du$: $\\int \\tan^2 x \\sec^2 x \\cdot \\sec^2 x\\,dx = \\int \\tan^2 x(1+\\tan^2 x)\\sec^2 x\\,dx$. Let $u = \\tan x$.'
          },
          {
            question: '$\\int \\tan^5 x \\sec^7 x\\,dx$: Which factor do you peel off?',
            options: [
              '$\\sec x \\tan x$ (since $m$ is odd)',
              '$\\sec^2 x$ (since $n$ is odd)',
              '$\\tan^2 x$',
              'No peeling needed'
            ],
            correctAnswer: 0,
            explanation: '$m = 5$ is odd. Peel off $\\sec x \\tan x$, convert remaining $\\tan^4 x = (\\sec^2 x - 1)^2$, let $u = \\sec x$.'
          }
        ]
      }
    },
    {
      id: 'it3-reduction',
      type: 'text' as const,
      content: `### Reduction Formulas

For repeated application:

$$\\int \\tan^n x\\,dx = \\frac{\\tan^{n-1} x}{n-1} - \\int \\tan^{n-2} x\\,dx$$

$$\\int \\sec^n x\\,dx = \\frac{\\sec^{n-2} x \\tan x}{n-1} + \\frac{n-2}{n-1}\\int \\sec^{n-2} x\\,dx$$

These let you reduce high powers step by step.

> **AP Tip:** You won\u2019t need to memorize reduction formulas for the AP exam, but knowing the $\\sec^3 x$ result is valuable.`
    },
    {
      id: 'it3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick Checks**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\tan^2 x\\,dx =$',
            options: ['$\\tan x - x + C$', '$\\frac{\\tan^3 x}{3} + C$', '$\\sec^2 x + C$', '$\\ln|\\sec x| + C$'],
            correctAnswers: ['$\\tan x - x + C$'],
            hints: ['$\\tan^2 x = \\sec^2 x - 1$.'],
            explanation: '$\\int (\\sec^2 x - 1)\\,dx = \\tan x - x + C$.'
          },
          {
            label: '$\\int \\sec^2 x \\tan x\\,dx =$',
            options: ['$\\frac{\\tan^2 x}{2} + C$', '$\\frac{\\sec^3 x}{3} + C$', '$\\sec x \\tan x + C$', '$\\ln|\\sec x| + C$'],
            correctAnswers: ['$\\frac{\\tan^2 x}{2} + C$'],
            hints: ['Let $u = \\tan x$, $du = \\sec^2 x\\,dx$.'],
            explanation: '$\\int u\\,du = \\frac{u^2}{2} + C = \\frac{\\tan^2 x}{2} + C$ with $u = \\tan x$.'
          }
        ]
      }
    },
    {
      id: 'it3-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Evaluate $\\int_0^{\\pi/4} \\tan^2 x\\,dx$. Use $\\tan^2 x = \\sec^2 x - 1$. Give the exact answer as $a - b$ where $a$ and $b$ are simple values.',
        correctAnswer: '1 - pi/4',
        acceptableAnswers: ['1 - pi/4', '1-pi/4', '1 - \u03c0/4'],
        hints: ['$\\int_0^{\\pi/4} (\\sec^2 x - 1)\\,dx = [\\tan x - x]_0^{\\pi/4}$.', '$= (1 - \\pi/4) - (0 - 0) = 1 - \\pi/4$.'],
        explanation: '$[\\tan x - x]_0^{\\pi/4} = (1 - \\frac{\\pi}{4}) - 0 = 1 - \\frac{\\pi}{4}$.'
      }
    },
    {
      id: 'it3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

| Must-Know | Formula |
|-----------|---------|
| $\\int \\tan x\\,dx$ | $\\ln|\\sec x| + C$ |
| $\\int \\sec x\\,dx$ | $\\ln|\\sec x + \\tan x| + C$ |
| $\\int \\sec^3 x\\,dx$ | $\\frac{1}{2}(\\sec x\\tan x + \\ln|\\sec x + \\tan x|) + C$ |
| $\\int \\tan^2 x\\,dx$ | $\\tan x - x + C$ |

> **Coming Up:** Part 4 covers **completing the square** for integration \u2014 converting quadratics into forms suitable for trig substitution or arctan.`
    }
  ]
};
