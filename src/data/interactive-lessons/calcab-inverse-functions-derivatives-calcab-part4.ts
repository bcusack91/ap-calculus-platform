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

### Logarithmic Differentiation

For products/quotients of many factors, take $\\ln$ of both sides first:

$$y = \\frac{x^2\\sqrt{x+1}}{(x-3)^4} \\quad \\Rightarrow \\quad \\ln y = 2\\ln x + \\frac{1}{2}\\ln(x+1) - 4\\ln(x-3)$$

Differentiate: $\\frac{y'}{y} = \\frac{2}{x}+\\frac{1}{2(x+1)}-\\frac{4}{x-3}$, then multiply by $y$.

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
            options: ['$\\ln x + 1$', '$\\frac{1}{x}$', '$\\ln x$', '$x + \\ln x$'],
            correctAnswer: 0,
            explanation: 'Product rule: $1 \\cdot \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$.'
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
            options: ['$\\ln|x|+C$', '$\\ln x + C$', '$\\frac{x^0}{0}$ (undefined)', '$-\\frac{1}{x^2}+C$'],
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
            label: 'Logarithmic differentiation is most useful for:',
            options: ['Products and quotients of many factors', 'Simple polynomials', 'Constant functions', 'Trigonometric functions'],
            correctAnswers: ['Products and quotients of many factors'],
            hints: ['$\\ln$ turns products into sums, quotients into differences.'],
            explanation: 'Taking $\\ln$ simplifies complex products/quotients into sums of simpler terms.'
          }
        ]
      }
    },
    {
      id: 'inv4-input',
      type: 'input-box' as const,
      content: '**Evaluate.** \u270d\ufe0f',
      exercise: {
        question: 'If $f(x) = \\ln(x^3)$, find $f\'(2)$.\n\nAnswer $= \\frac{a}{b}$ (lowest terms). Enter $a+b$.\n\n(Enter an integer.)',
        correctAnswer: '5',
        acceptableAnswers: ['5'],
        hints: [
          '$\\ln(x^3) = 3\\ln x$.',
          '$f\'(x) = 3/x$.',
          '$f\'(2) = 3/2$. $a=3, b=2, a+b=5$.'
        ],
        explanation: '$f\'(2) = \\frac{3}{2}$. $a+b = 3+2 = 5$.'
      }
    },
    {
      id: 'inv4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- $\\frac{d}{dx}[\\ln u] = u'/u$ \u2014 the most important log derivative
- $\\ln$ properties simplify before differentiating: $\\ln(x^n) = n\\ln x$
- $\\int 1/x\\,dx = \\ln|x|+C$ (absolute value!)
- Logarithmic differentiation: take $\\ln$, differentiate, multiply by $y$`
    }
  ]
};
