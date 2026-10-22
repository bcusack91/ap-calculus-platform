export const calcabInverseFunctionsPart4Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv4-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 4 of 7 \u2014 Derivatives Involving $\\ln$ and $\\log$**

### Logarithmic Derivatives

$$\\boxed{\\frac{d}{dx}[\\ln x] = \\frac{1}{x}} \\qquad \\boxed{\\frac{d}{dx}[\\ln u] = \\frac{u'}{u}}$$

$$\\boxed{\\frac{d}{dx}[\\log_a x] = \\frac{1}{x\\ln a}}$$

### Key Properties & Derivatives

| Function | Derivative |
|:---:|:---:|
| $\\ln x$ | $1/x$ |
| $\\ln|x|$ | $1/x$ |
| $\\ln(f(x))$ | $f'(x)/f(x)$ |
| $\\log_a x$ | $1/(x\\ln a)$ |

> **Key Fact:** $\\frac{d}{dx}[\\ln|x|] = \\frac{1}{x}$ for all $x \\neq 0$. This is why $\\int\\frac{1}{x}\\,dx = \\ln|x|+C$.

### Simplify With Log Properties First

When $\\ln$ is applied to a product, quotient or power, expand it before differentiating. Each piece then needs only $\\frac{d}{dx}[\\ln u] = \\frac{u'}{u}$:

$$f(x) = \\ln\\left(\\frac{x^2\\sqrt{x+1}}{(x-3)^4}\\right) = 2\\ln x + \\frac{1}{2}\\ln(x+1) - 4\\ln(x-3) \\quad (x > 3)$$

$$f'(x) = \\frac{2}{x}+\\frac{1}{2(x+1)}-\\frac{4}{x-3}$$

This avoids a quotient rule nested inside a chain rule. The rewrite is valid only where every factor is positive, which is why the domain $x > 3$ is stated.

### Worked Example

> $\\frac{d}{dx}[\\ln(\\sin x)]$

$$= \\frac{\\cos x}{\\sin x} = \\cot x$$`
    },
    {
      id: 'inv4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Logarithmic Derivatives** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$\\frac{d}{dx}[\\ln(x^2+1)] = $',
            options: ['$\\frac{2x}{x^2+1}$', '$\\frac{1}{x^2+1}$', '$\\frac{2x}{x^2}$', '$\\frac{x}{x^2+1}$'],
            correctAnswer: 0,
            explanation: '$u = x^2+1$, $u\' = 2x$. $\\frac{u\'}{u} = \\frac{2x}{x^2+1}$.'
          },
          {
            question: '$\\frac{d}{dx}[\\ln(e^x)] = $',
            options: ['$1$', '$\\frac{1}{e^x}$', '$e^x$', '$\\frac{e^x}{x}$'],
            correctAnswer: 0,
            explanation: '$\\ln(e^x) = x$. $\\frac{d}{dx}[x] = 1$. (Or: $\\frac{e^x}{e^x} = 1$.)'
          },
          {
            question: '$\\frac{d}{dx}[x\\ln x] = $',
            options: ['$\\ln x + 1$', '$\\frac{1}{x}$', '$\\ln x + \\frac{1}{x}$', '$1 + \\frac{1}{x}$'],
            correctAnswer: 0,
            explanation: 'Product rule: $1 \\cdot \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$. Leaving off the factor $x$ in the second term gives $\\ln x + \\frac{1}{x}$; differentiating each factor and adding gives $1 + \\frac{1}{x}$.'
          }
        ]
      }
    },
    {
      id: 'inv4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\int\\frac{1}{x}\\,dx$ equals:',
            options: ['$\\ln|x|+C$', '$\\ln x + C$', '$\\frac{x^0}{0} + C$', '$-\\frac{1}{x^2}+C$'],
            correctAnswers: ['$\\ln|x|+C$'],
            hints: ['$\\frac{d}{dx}[\\ln|x|] = 1/x$ for all $x \\neq 0$.'],
            explanation: 'The absolute value is needed because $\\ln$ requires positive input.'
          },
          {
            label: '$\\frac{d}{dx}[\\ln(3x)]$ equals:',
            options: ['$\\frac{1}{x}$', '$\\frac{3}{x}$', '$\\frac{1}{3x}$', '$3\\ln x$'],
            correctAnswers: ['$\\frac{1}{x}$'],
            hints: ['$\\ln(3x) = \\ln 3 + \\ln x$. Derivative of a constant is $0$.'],
            explanation: '$\\frac{3}{3x} = \\frac{1}{x}$. Or: $\\ln(3x) = \\ln 3 + \\ln x$, so derivative $= 0 + 1/x$.'
          },
          {
            label: 'Before differentiating $\\ln\\left(\\frac{x^2}{x+1}\\right)$ for $x > 0$, rewrite it as:',
            options: ['$2\\ln x - \\ln(x+1)$', '$\\frac{2\\ln x}{\\ln(x+1)}$', '$2\\ln x + \\ln(x+1)$', '$(\\ln x)^2 - \\ln(x+1)$'],
            correctAnswers: ['$2\\ln x - \\ln(x+1)$'],
            hints: ['$\\ln$ turns a quotient into a difference and a power into a coefficient.'],
            explanation: '$\\ln\\frac{A}{B} = \\ln A - \\ln B$ and $\\ln(x^2) = 2\\ln x$, so the derivative is $\\frac{2}{x} - \\frac{1}{x+1}$. The log of a quotient is not a quotient of logs, and $\\ln(x^2)$ is $2\\ln x$, not $(\\ln x)^2$.'
          }
        ]
      }
    },
    {
      id: 'inv4-input',
      type: 'input-box' as const,
      content: '**Evaluate.** \u270d\ufe0f',
      exercise: {
        question: 'If $f(x) = \\ln(x^3)$, find $f\'(2)$. (Fraction or decimal.)',
        correctAnswer: '3/2',
        acceptableAnswers: ['3/2', '1.5'],
        hints: [
          '$\\ln(x^3) = 3\\ln x$.',
          '$f\'(x) = 3/x$.'
        ],
        explanation: '$\\ln(x^3) = 3\\ln x$, so $f\'(x) = \\frac{3}{x}$ and $f\'(2) = \\frac{3}{2}$.'
      }
    },
    {
      id: 'inv4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- $\\frac{d}{dx}[\\ln u] = u'/u$ \u2014 the most important log derivative
- $\\ln$ properties simplify before differentiating: $\\ln(x^n) = n\\ln x$
- $\\int 1/x\\,dx = \\ln|x|+C$ (absolute value!)
- $\\ln$ of a product or quotient: expand into a sum or difference of logs, then differentiate term by term`
    }
  ]
};
