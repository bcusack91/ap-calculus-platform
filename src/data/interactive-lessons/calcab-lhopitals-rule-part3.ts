export const calcabLhopitalsRulePart3Data = {
  topicSlug: 'lhopitals-rule',
  sections: [
    {
      id: 'lh3-intro',
      type: 'text' as const,
      content: `# L'Hospital's Rule

**Part 3 of 5 \u2014 $\\frac{\\infty}{\\infty}$ Limits and Growth Rates**

### Worked Example 1: $\\ln x$ Against $x$

> $\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$

Check: both $\\ln x$ and $x$ grow without bound, so the form is $\\frac{\\infty}{\\infty}$.

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = \\lim_{x \\to \\infty} \\frac{1/x}{1} = 0$$

### Worked Example 2: A Power Against $e^x$ (Twice)

> $\\lim_{x \\to \\infty} \\frac{x^2}{e^x}$

$$\\frac{x^2}{e^x} \\;\\to\\; \\frac{2x}{e^x} \\;\\to\\; \\frac{2}{e^x} \\;\\to\\; 0$$

The first two quotients are both $\\frac{\\infty}{\\infty}$, so the rule is used twice; the last one is $\\frac{2}{\\infty}$, which is $0$.

### Worked Example 3: A One-Sided $\\frac{\\infty}{\\infty}$ Limit

> $\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x}$

As $x \\to 0^+$, $\\ln x \\to -\\infty$ and $\\frac{1}{x} \\to +\\infty$: an $\\frac{\\infty}{\\infty}$ form (the signs may differ).

$$\\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0$$`
    },
    {
      id: 'lh3-growth',
      type: 'text' as const,
      content: `## Growth Rates as $x \\to \\infty$

Repeated use of the rule shows a clear ranking:

$$\\ln x \\;\\ll\\; x^p \\; (p > 0) \\;\\ll\\; e^x$$

| Limit as $x \\to \\infty$ | Result | Reason |
|:---:|:---:|:---|
| $\\frac{\\ln x}{x^p}$, $p > 0$ | $0$ | Logarithms grow slower than any positive power |
| $\\frac{x^n}{e^x}$ | $0$ | Exponentials grow faster than any power |
| $\\frac{e^x}{x^n}$ | $\\infty$ | Flip of the row above |

### When Algebra Is Faster

For a rational function such as $\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{5x^2 - x}$, the rule works twice ($\\frac{6x}{10x - 1}$ is still $\\frac{\\infty}{\\infty}$, then $\\frac{6}{10} = \\frac{3}{5}$), but dividing by $x^2$ gives $\\frac{3}{5}$ at once. Use L'Hospital's Rule when logarithms, exponentials or trig functions block the algebra.`
    },
    {
      id: 'lh3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 \u221e/\u221e limits** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}}$.',
            options: ['$0$', '$1$', '$\\infty$', '$\\frac{1}{2}$'],
            correctAnswer: 0,
            explanation: 'The form is $\\frac{\\infty}{\\infty}$. The rule gives $\\frac{1/x}{1/(2\\sqrt{x})} = \\frac{2}{\\sqrt{x}} \\to 0$. A logarithm grows more slowly than any positive power of $x$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{e^x}{x^3}$.',
            options: ['$\\infty$', '$0$', '$1$', '$\\frac{1}{6}$'],
            correctAnswer: 0,
            explanation: 'Three applications give $\\frac{e^x}{6} \\to \\infty$: the exponential wins. The value $0$ is the limit of the flipped quotient $\\frac{x^3}{e^x}$, and $\\frac{1}{6}$ forgets that $e^x$ keeps growing.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{5x + \\ln x}{2x}$.',
            options: ['$\\frac{5}{2}$', '$\\frac{2}{5}$', '$\\infty$', '$\\frac{1}{2}$'],
            correctAnswer: 0,
            explanation: 'The form is $\\frac{\\infty}{\\infty}$. The rule gives $\\frac{5 + 1/x}{2} \\to \\frac{5}{2}$. Flipping gives $\\frac{2}{5}$, and $\\ln x$ is too slow to make the limit infinite.'
          }
        ]
      }
    },
    {
      id: 'lh3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which grows faster?** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\lim_{x \\to \\infty} \\frac{x^{10}}{e^{x}} = $',
            options: ['$0$', '$\\infty$', '$1$', '$10$'],
            correctAnswers: ['$0$'],
            hints: ['Exponentials outgrow every power of $x$.'],
            explanation: 'Exponentials grow faster than any power, so the quotient goes to $0$.'
          },
          {
            label: '$\\lim_{x \\to \\infty} \\frac{(\\ln x)^2}{x} = $',
            options: ['$0$', '$\\infty$', '$1$', '$2$'],
            correctAnswers: ['$0$'],
            hints: ['Once: $\\frac{2\\ln x \\cdot \\frac{1}{x}}{1} = \\frac{2\\ln x}{x}$.'],
            explanation: 'Once gives $\\frac{2\\ln x}{x}$, still $\\frac{\\infty}{\\infty}$; twice gives $\\frac{2/x}{1} \\to 0$.'
          },
          {
            label: '$\\lim_{x \\to \\infty} \\frac{4x^2 - x}{2x^2 + 7} = $',
            options: ['$2$', '$\\frac{1}{2}$', '$0$', '$\\infty$'],
            correctAnswers: ['$2$'],
            hints: ['Equal degrees: divide by $x^2$, or use the rule twice.'],
            explanation: 'Dividing by $x^2$ gives $\\frac{4 - 1/x}{2 + 7/x^2} \\to 2$. The rule twice gives $\\frac{8}{4} = 2$ as well.'
          }
        ]
      }
    },
    {
      id: 'lh3-input',
      type: 'input-box' as const,
      content: '**Apply the rule.** \u270d\ufe0f',
      exercise: {
        question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{6x^2 + \\ln x}{2x^2 + 1}$.',
        correctAnswer: '3',
        acceptableAnswers: ['3', '3.0'],
        hints: [
          'The form is $\\frac{\\infty}{\\infty}$. Once: $\\frac{12x + 1/x}{4x}$.',
          'Simplify $\\frac{12x + 1/x}{4x} = 3 + \\frac{1}{4x^2}$.'
        ],
        explanation: 'One application gives $\\frac{12x + 1/x}{4x} = 3 + \\frac{1}{4x^2} \\to 3$.'
      }
    },
    {
      id: 'lh3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

- $\\frac{\\infty}{\\infty}$ (with any signs) is the second form the rule handles
- Growth ranking as $x \\to \\infty$: $\\ln x \\ll x^p \\ll e^x$
- For rational functions, dividing by the highest power is usually faster

> **Up Next:** Part 4 \u2014 limits from tables and graphs, and how to justify the rule.`
    }
  ]
};
