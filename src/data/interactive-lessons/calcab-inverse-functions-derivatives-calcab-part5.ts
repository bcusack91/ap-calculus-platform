export const calcabInverseFunctionsPart5Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv5-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 5 of 7 \u2014 Combining Techniques**

### Mixed Problems

AP problems often combine inverse derivatives with other skills:

| Combination | Example |
|:---:|:---:|
| Inverse + chain rule | $\\frac{d}{dx}[\\arcsin(e^x)]$ |
| Table + inverse | Given $f$ and $f'$ table, find $(f^{-1})'$ |
| $\\ln$ + implicit | $\\ln y = x^2$, find $dy/dx$ |
| Inverse trig + integration | $\\int\\frac{dx}{\\sqrt{1-x^2}}$ |

### Worked Example 1: Chain + Inverse Trig

> $\\frac{d}{dx}[\\arctan(e^x)]$

$$= \\frac{e^x}{1+(e^x)^2} = \\frac{e^x}{1+e^{2x}}$$

### Worked Example 2: Implicit + ln

> $\\ln y + xy = 5$. Find $\\frac{dy}{dx}$.

$$\\frac{1}{y}\\cdot y' + y + xy' = 0$$
$$y'\\left(\\frac{1}{y}+x\\right) = -y$$
$$y' = \\frac{-y}{\\frac{1}{y}+x} = \\frac{-y^2}{1+xy}$$

### Worked Example 3: Related Antiderivatives

$$\\int\\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C \\qquad \\int\\frac{dx}{1+x^2} = \\arctan x + C$$

> **AP Tip:** These antiderivatives often appear in definite integral MC problems. Evaluate $\\arcsin$ or $\\arctan$ at the limits.`
    },
    {
      id: 'inv5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Mixed Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$\\frac{d}{dx}[\\arcsin(\\ln x)]$ at $x = 1$:',
            options: ['$1$', '$0$', '$\\frac{1}{2}$', 'Undefined'],
            correctAnswer: 0,
            explanation: '$\\frac{1/x}{\\sqrt{1-(\\ln x)^2}}$. At $x=1$: $\\frac{1}{\\sqrt{1-0}} = 1$.'
          },
          {
            question: '$\\int_0^1\\frac{dx}{1+x^2} = $',
            options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$1$', '$\\ln 2$'],
            correctAnswer: 0,
            explanation: '$[\\arctan x]_0^1 = \\arctan 1 - \\arctan 0 = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$.'
          },
          {
            question: 'If $g(x) = \\ln(f(x))$ and $f(2) = e^3$, $f\'(2) = 4$, then $g\'(2) = $',
            options: ['$\\frac{4}{e^3}$', '$4$', '$\\frac{4}{3}$', '$\\frac{1}{4}$'],
            correctAnswer: 0,
            explanation: '$g\'(x) = f\'(x)/f(x)$. $g\'(2) = 4/e^3$.'
          }
        ]
      }
    },
    {
      id: 'inv5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify the technique.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_0^{1/2}\\frac{dx}{\\sqrt{1-x^2}}$ evaluates to:',
            options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$'],
            correctAnswers: ['$\\frac{\\pi}{6}$'],
            hints: ['$[\\arcsin x]_0^{1/2} = \\arcsin(1/2) - 0$.'],
            explanation: '$\\arcsin(1/2) = \\pi/6$.'
          },
          {
            label: '$\\frac{d}{dx}[e^{\\arctan x}]$ uses:',
            options: ['Chain rule + $\\arctan$ derivative', 'Product rule', 'Quotient rule', 'Implicit differentiation'],
            correctAnswers: ['Chain rule + $\\arctan$ derivative'],
            hints: ['Outer: $e^u$. Inner: $\\arctan x$.'],
            explanation: '$e^{\\arctan x} \\cdot \\frac{1}{1+x^2}$.'
          },
          {
            label: 'The connection between $\\ln$ and $e^x$ is:',
            options: ['They are inverses: $\\ln(e^x)=x$', 'They have the same derivative', 'They are equal', 'No connection'],
            correctAnswers: ['They are inverses: $\\ln(e^x)=x$'],
            hints: ['$e^{\\ln x} = x$ and $\\ln(e^x) = x$.'],
            explanation: '$\\ln$ and $e^x$ are inverse functions. This is why $\\frac{d}{dx}[\\ln x] = 1/x$ via the inverse derivative formula.'
          }
        ]
      }
    },
    {
      id: 'inv5-input',
      type: 'input-box' as const,
      content: '**Evaluate.** \u270d\ufe0f',
      exercise: {
        question: '$\\int_0^{\\sqrt{3}}\\frac{dx}{1+x^2} = \\frac{\\pi}{a}$. Find $a$.\n\n(Enter an integer.)',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: [
          '$[\\arctan x]_0^{\\sqrt{3}}$.',
          '$\\arctan(\\sqrt{3}) = \\pi/3$.',
          'Answer $= \\pi/3$. So $a = 3$.'
        ],
        explanation: '$\\arctan(\\sqrt{3}) = \\pi/3$. So $a = 3$.'
      }
    },
    {
      id: 'inv5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- Chain rule + inverse trig: outer is $\\arcsin/\\arctan$, inner is $u$
- $\\int\\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C$, $\\int\\frac{dx}{1+x^2} = \\arctan x + C$
- $\\ln$ + implicit: differentiate both sides, solve for $y'$
- AP loves definite integrals using $\\arcsin$ and $\\arctan$`
    }
  ]
};
