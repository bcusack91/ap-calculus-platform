export const calcabInverseFunctionsPart7Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv7-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 7 of 7 \u2014 Comprehensive Assessment**

### Complete Formula Reference

| Formula | Expression |
|:---:|:---:|
| Inverse derivative | $(f^{-1})'(a) = \\frac{1}{f'(f^{-1}(a))}$ |
| $\\frac{d}{dx}[\\arcsin u]$ | $\\frac{u'}{\\sqrt{1-u^2}}$ |
| $\\frac{d}{dx}[\\arccos u]$ | $\\frac{-u'}{\\sqrt{1-u^2}}$ |
| $\\frac{d}{dx}[\\arctan u]$ | $\\frac{u'}{1+u^2}$ |
| $\\frac{d}{dx}[\\ln u]$ | $\\frac{u'}{u}$ |
| $\\frac{d}{dx}[\\log_a u]$ | $\\frac{u'}{u\\ln a}$ |
| $\\int\\frac{dx}{\\sqrt{1-x^2}}$ | $\\arcsin x + C$ |
| $\\int\\frac{dx}{1+x^2}$ | $\\arctan x + C$ |

### Common AP Mistakes

| Mistake | Correct Approach |
|:---:|:---:|
| Using $f'(a)$ instead of $f'(f^{-1}(a))$ | Always find $f^{-1}(a)$ first |
| Forgetting chain rule on $\\arcsin(u)$ | Multiply by $u'$ |
| Sign error on $\\arccos$ | $\\arccos$ has a negative: $-u'/\\sqrt{1-u^2}$ |
| $\\ln(fg) \\neq \\ln f \\cdot \\ln g$ | Use $\\ln(fg) = \\ln f + \\ln g$ |
| Swapping point and slope | Inverse swaps $x$/$y$: point is $(a, f^{-1}(a))$ |`
    },
    {
      id: 'inv7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quiz Set 1 \u2014 Core Concepts** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$f(2) = 8$, $f\'(2) = 5$, $f(8) = 11$, $f\'(8) = 3$. Find $(f^{-1})\'(8)$.',
            options: ['$\\frac{1}{5}$', '$\\frac{1}{3}$', '$5$', '$3$'],
            correctAnswer: 0,
            explanation: '$f^{-1}(8) = 2$ (since $f(2)=8$). $(f^{-1})\'(8) = 1/f\'(2) = 1/5$.'
          },
          {
            question: '$\\frac{d}{dx}[\\arctan(5x)]$ at $x = 0$:',
            options: ['$5$', '$1$', '$0$', '$\\frac{1}{5}$'],
            correctAnswer: 0,
            explanation: '$\\frac{5}{1+(5x)^2}$. At $x=0$: $\\frac{5}{1} = 5$.'
          },
          {
            question: '$\\frac{d}{dx}[\\ln(\\cos x)]=$',
            options: ['$-\\tan x$', '$\\tan x$', '$\\frac{1}{\\cos x}$', '$-\\sec x$'],
            correctAnswer: 0,
            explanation: '$\\frac{-\\sin x}{\\cos x} = -\\tan x$.'
          },
          {
            question: '$\\int_0^1\\frac{dx}{1+x^2} =$',
            options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$1$', '$\\ln 2$'],
            correctAnswer: 0,
            explanation: '$[\\arctan x]_0^1 = \\pi/4 - 0 = \\pi/4$.'
          }
        ]
      }
    },
    {
      id: 'inv7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quiz Set 2 \u2014 Advanced Applications** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $g(x) = f^{-1}(x)$ and $f(x) = e^{2x}$, then $g\'(1) =$',
            options: ['$\\frac{1}{2}$', '$1$', '$2$', '$e^2$'],
            correctAnswer: 0,
            explanation: '$f^{-1}(1) = 0$ (since $e^0=1$). $f\'(x) = 2e^{2x}$. $f\'(0) = 2$. $g\'(1) = 1/2$.'
          },
          {
            question: '$\\frac{d}{dx}[x\\arcsin x + \\sqrt{1-x^2}]=$',
            options: ['$\\arcsin x$', '$\\frac{x}{\\sqrt{1-x^2}}$', '$1$', '$0$'],
            correctAnswer: 0,
            explanation: 'Product rule on $x\\arcsin x$: $\\arcsin x + \\frac{x}{\\sqrt{1-x^2}}$. Derivative of $\\sqrt{1-x^2}$: $\\frac{-x}{\\sqrt{1-x^2}}$. Sum: $\\arcsin x$.'
          },
          {
            question: 'Which justifies that $f(x) = x + e^x$ has an inverse?',
            options: ['$f\'(x) = 1+e^x > 0$ for all $x$', '$f(0) = 1$', '$f$ is continuous', '$\\lim_{x\\to\\infty} f(x) = \\infty$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 1 + e^x > 0$ everywhere, so $f$ is strictly increasing and one-to-one.'
          }
        ]
      }
    },
    {
      id: 'inv7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match correctly.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{d}{dx}[\\arcsin(2x)]$ at $x = 0$:',
            options: ['$2$', '$1$', '$0$', '$1/2$'],
            correctAnswers: ['$2$'],
            hints: ['$\\frac{2}{\\sqrt{1-4x^2}}$. At $x=0$: $2/1$.'],
            explanation: '$\\frac{2}{\\sqrt{1-4(0)}} = 2$.'
          },
          {
            label: 'If $g = f^{-1}$ and $f(5) = 10$, the graph of $g$ passes through:',
            options: ['$(10, 5)$', '$(5, 10)$', '$(5, 5)$', '$(10, 10)$'],
            correctAnswers: ['$(10, 5)$'],
            hints: ['Inverse swaps coordinates.'],
            explanation: '$f(5)=10$ means $g(10) = 5$, so the point is $(10,5)$.'
          },
          {
            label: '$\\int\\frac{3\\,dx}{1+9x^2}$ equals:',
            options: ['$\\arctan(3x) + C$', '$3\\arctan(x) + C$', '$\\frac{1}{3}\\arctan(3x)+C$', '$\\arctan(x)+C$'],
            correctAnswers: ['$\\arctan(3x) + C$'],
            hints: ['Factor: $\\frac{3}{1+(3x)^2}$. This is $\\frac{d}{dx}[\\arctan(3x)]$.'],
            explanation: '$\\frac{3}{1+9x^2} = \\frac{3}{1+(3x)^2}$. Antiderivative: $\\arctan(3x) + C$.'
          }
        ]
      }
    },
    {
      id: 'inv7-input',
      type: 'input-box' as const,
      content: '**Final Challenge.** \u270d\ufe0f',
      exercise: {
        question: 'Let $f(x) = x^5 + 3x + 2$. Note $f(1) = 6$.\n\nIf $(f^{-1})\'(6) = \\frac{1}{a}$, find $a$.\n\n(Enter an integer.)',
        correctAnswer: '8',
        acceptableAnswers: ['8'],
        hints: [
          '$f\'(x) = 5x^4 + 3$.',
          '$f^{-1}(6) = 1$.',
          '$(f^{-1})\'(6) = 1/f\'(1) = 1/(5+3) = 1/8$.'
        ],
        explanation: '$f\'(x) = 5x^4 + 3$. $f\'(1) = 8$. $(f^{-1})\'(6) = 1/8$. So $a = 8$.'
      }
    },
    {
      id: 'inv7-completion',
      type: 'text' as const,
      content: `### \ud83c\udf89 Topic Complete!

You've mastered **Inverse Functions & Their Derivatives**:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | Inverse derivative formula | \u2705 |
| 2 | Table-based problems | \u2705 |
| 3 | Inverse trig derivatives | \u2705 |
| 4 | Logarithmic derivatives | \u2705 |
| 5 | Combining techniques | \u2705 |
| 6 | AP-style workshop | \u2705 |
| 7 | Comprehensive assessment | \u2705 |

> **Key Fact:** The formula $(f^{-1})'(a) = \\frac{1}{f'(f^{-1}(a))}$ is the single most common inverse derivative question on the AP exam. Master the three-step process: (1) find $f^{-1}(a)$, (2) evaluate $f'$ there, (3) take the reciprocal.`
    }
  ]
};
