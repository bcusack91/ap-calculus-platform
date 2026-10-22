export const calcabLhopitalsRulePart2Data = {
  topicSlug: 'lhopitals-rule',
  sections: [
    {
      id: 'lh2-intro',
      type: 'text' as const,
      content: `# L'Hospital's Rule

**Part 2 of 5 \u2014 $\\frac{0}{0}$ Limits, Including Repeated Use**

### Worked Example 1: Logarithm

> $\\lim_{x \\to 1} \\frac{\\ln x}{x - 1}$

Check: $\\ln 1 = 0$ and $1 - 1 = 0$, so the form is $\\frac{0}{0}$.

$$\\lim_{x \\to 1} \\frac{\\ln x}{x - 1} = \\lim_{x \\to 1} \\frac{1/x}{1} = 1$$

### Worked Example 2: Trig with a Shift

> $\\lim_{x \\to \\pi} \\frac{\\sin x}{x - \\pi}$

Check: $\\sin \\pi = 0$ and $\\pi - \\pi = 0$: $\\frac{0}{0}$.

$$\\lim_{x \\to \\pi} \\frac{\\sin x}{x - \\pi} = \\lim_{x \\to \\pi} \\frac{\\cos x}{1} = \\cos \\pi = -1$$

### Worked Example 3: Agreement with Factoring

> $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$

The rule gives $\\lim_{x \\to 2} \\frac{2x}{1} = 4$, the same answer as factoring: $\\frac{(x-2)(x+2)}{x-2} = x + 2 \\to 4$. Both methods are valid; use whichever is quicker.`
    },
    {
      id: 'lh2-repeat',
      type: 'text' as const,
      content: `## Using the Rule More Than Once

After one application, **substitute again**. If the new limit is still $\\frac{0}{0}$ (or $\\frac{\\infty}{\\infty}$), you may apply the rule again.

> $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$

| Step | Expression | Substitution gives |
|:---:|:---:|:---:|
| Start | $\\frac{1 - \\cos x}{x^2}$ | $\\frac{0}{0}$ |
| Rule once | $\\frac{\\sin x}{2x}$ | $\\frac{0}{0}$ again |
| Rule twice | $\\frac{\\cos x}{2}$ | $\\frac{1}{2}$ |

So $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$.

### Limits That Are Derivatives in Disguise

$\\lim_{h \\to 0} \\frac{e^{2 + h} - e^2}{h}$ is $\\frac{0}{0}$. Treating $h$ as the variable, the rule gives $\\lim_{h \\to 0} \\frac{e^{2+h}}{1} = e^2$. You can also recognize it as the derivative of $e^x$ at $x = 2$.

> **Key Fact:** Re-check the form before every application. Once substitution gives an ordinary number, stop.`
    },
    {
      id: 'lh2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 0/0 limits** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 - 1}$.',
            options: ['$\\frac{3}{2}$', '$\\frac{2}{3}$', '$3$', '$0$'],
            correctAnswer: 0,
            explanation: 'The form is $\\frac{0}{0}$. The rule gives $\\frac{3x^2}{2x} \\to \\frac{3}{2}$. Flipping the ratio gives $\\frac{2}{3}$, and $3$ uses only the numerator\'s derivative.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x^2}$.',
            options: ['$2$', '$\\frac{1}{2}$', '$4$', '$1$'],
            correctAnswer: 0,
            explanation: 'Once: $\\frac{2\\sin(2x)}{2x}$, still $\\frac{0}{0}$. Twice: $\\frac{4\\cos(2x)}{2} \\to 2$. Dropping the chain-rule factors gives $\\frac{1}{2}$, and stopping at $4\\cos(2x)$ without the denominator $2$ gives $4$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$.',
            options: ['$\\frac{1}{2}$', '$1$', '$0$', '$2$'],
            correctAnswer: 0,
            explanation: 'Once: $\\frac{e^x - 1}{2x}$, still $\\frac{0}{0}$. Twice: $\\frac{e^x}{2} \\to \\frac{1}{2}$. Losing the factor $2$ from $x^2$ gives $1$, and $0$ comes from substituting into the numerator alone.'
          }
        ]
      }
    },
    {
      id: 'lh2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Track the form at each step.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'After one application to $\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$ you get $\\frac{1 - \\cos x}{3x^2}$. Substitution now gives',
            options: ['$\\frac{0}{0}$ again', 'The number $0$', 'The number $\\frac{1}{3}$', 'Nonzero over $0$'],
            correctAnswers: ['$\\frac{0}{0}$ again'],
            hints: ['$1 - \\cos 0 = 0$.'],
            explanation: 'Both $1 - \\cos 0$ and $3(0)^2$ are $0$, so the rule may be applied again.'
          },
          {
            label: 'So $\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3} = $',
            options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$0$'],
            correctAnswers: ['$\\frac{1}{6}$'],
            hints: ['Twice: $\\frac{\\sin x}{6x}$. Three times: $\\frac{\\cos x}{6}$.'],
            explanation: '$\\frac{1 - \\cos x}{3x^2} \\to \\frac{\\sin x}{6x} \\to \\frac{\\cos x}{6} = \\frac{1}{6}$. Each step was $\\frac{0}{0}$ until the last.'
          },
          {
            label: '$\\lim_{h \\to 0} \\frac{\\sin(\\frac{\\pi}{2} + h) - 1}{h} = $',
            options: ['$0$', '$1$', '$-1$', 'Does not exist'],
            correctAnswers: ['$0$'],
            hints: ['This is the derivative of $\\sin x$ at $\\frac{\\pi}{2}$.'],
            explanation: 'The form is $\\frac{0}{0}$. In $h$, the rule gives $\\frac{\\cos(\\frac{\\pi}{2} + h)}{1} \\to \\cos\\frac{\\pi}{2} = 0$, the slope of $\\sin x$ at its peak.'
          }
        ]
      }
    },
    {
      id: 'lh2-input',
      type: 'input-box' as const,
      content: '**Apply the rule (maybe twice).** \u270d\ufe0f',
      exercise: {
        question: 'Evaluate $\\lim_{x \\to 0} \\frac{e^{3x} - 1 - 3x}{x^2}$. (Decimal or fraction.)',
        correctAnswer: '9/2',
        acceptableAnswers: ['9/2', '4.5'],
        hints: [
          'Once: $\\frac{3e^{3x} - 3}{2x}$. Is it still $\\frac{0}{0}$?',
          'Twice: $\\frac{9e^{3x}}{2}$.'
        ],
        explanation: 'Once gives $\\frac{3e^{3x} - 3}{2x}$, still $\\frac{0}{0}$. Twice gives $\\frac{9e^{3x}}{2} \\to \\frac{9}{2}$.'
      }
    },
    {
      id: 'lh2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

- Verify $\\frac{0}{0}$, then differentiate the top and the bottom separately
- Substitute again after each application; repeat only while the form is still indeterminate
- L'Hospital's Rule agrees with factoring and with "derivative in disguise" reasoning

> **Up Next:** Part 3 \u2014 $\\frac{\\infty}{\\infty}$ limits and growth rates.`
    }
  ]
};
