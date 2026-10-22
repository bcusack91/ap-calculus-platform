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
| Inverse + polynomial | $(f^{-1})'(3)$ for $f(x) = x^3 + x + 1$ |

### Worked Example 1: Chain + Inverse Trig

> $\\frac{d}{dx}[\\arctan(e^x)]$

$$= \\frac{e^x}{1+(e^x)^2} = \\frac{e^x}{1+e^{2x}}$$

### Worked Example 2: Implicit + ln

> $\\ln y + xy = 5$. Find $\\frac{dy}{dx}$.

$$\\frac{1}{y}\\cdot y' + y + xy' = 0$$
$$y'\\left(\\frac{1}{y}+x\\right) = -y$$
$$y' = \\frac{-y}{\\frac{1}{y}+x} = \\frac{-y^2}{1+xy}$$

### Worked Example 3: Inverse at a Point Without Solving

> $f(x) = x^3 + x + 1$ and $g = f^{-1}$. Find $g'(3)$.

Find the input with $f(a) = 3$: $a^3 + a + 1 = 3$ gives $a = 1$. Then $f'(x) = 3x^2 + 1$, so $f'(1) = 4$ and

$$g'(3) = \\frac{1}{f'(1)} = \\frac{1}{4}$$

> **AP Tip:** Evaluate $f'$ at the matching **input** ($x = 1$), never at the given output ($x = 3$).

> **Preview (Unit 6):** reversing the inverse trig derivatives gives the antiderivatives $\\int\\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C$ and $\\int\\frac{dx}{1+x^2} = \\arctan x + C$.`
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
            question: 'Let $f(x) = x^3 + 2x + 2$ and $g = f^{-1}$. What is $g\'(5)$?',
            options: ['$\\frac{1}{5}$', '$5$', '$\\frac{1}{77}$', '$\\frac{1}{3}$'],
            correctAnswer: 0,
            explanation: '$f(1) = 5$, so $g(5) = 1$. $f\'(x) = 3x^2 + 2$ gives $f\'(1) = 5$, and $g\'(5) = \\frac{1}{5}$. Evaluating $f\'$ at $5$ instead of $1$ gives $\\frac{1}{77}$, and $5$ forgets the reciprocal.'
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
            label: '$\\frac{d}{dx}[\\arctan(x^2)]$ at $x = 1$ equals:',
            options: ['$1$', '$\\frac{1}{2}$', '$2$', '$\\frac{1}{4}$'],
            correctAnswers: ['$1$'],
            hints: ['$\\frac{d}{dx}[\\arctan(x^2)] = \\frac{2x}{1 + x^4}$.'],
            explanation: '$\\frac{2x}{1+x^4}$ at $x = 1$ is $\\frac{2}{2} = 1$. Forgetting the inner derivative $2x$ gives $\\frac{1}{2}$.'
          },
          {
            label: '$\\frac{d}{dx}[e^{\\arctan x}]$ uses:',
            options: ['Chain rule + $\\arctan$ derivative', 'Product rule + $\\arctan$ derivative', 'Quotient rule + $e^x$ derivative', 'Implicit differentiation only'],
            correctAnswers: ['Chain rule + $\\arctan$ derivative'],
            hints: ['Outer: $e^u$. Inner: $\\arctan x$.'],
            explanation: '$e^{\\arctan x} \\cdot \\frac{1}{1+x^2}$.'
          },
          {
            label: 'The connection between $\\ln$ and $e^x$ is:',
            options: ['They are inverse functions', 'They have the same derivative', 'They are reciprocals: $\\ln x = 1/e^x$', 'They are reflections over the $x$-axis'],
            correctAnswers: ['They are inverse functions'],
            hints: ['$e^{\\ln x} = x$ and $\\ln(e^x) = x$.'],
            explanation: '$\\ln$ and $e^x$ are inverse functions: $\\ln(e^x) = x$, so their graphs are reflections over $y = x$. This is why $\\frac{d}{dx}[\\ln x] = 1/x$ via the inverse derivative formula.'
          }
        ]
      }
    },
    {
      id: 'inv5-input',
      type: 'input-box' as const,
      content: '**Evaluate.** \u270d\ufe0f',
      exercise: {
        question: 'Let $f(x) = x^3 + 4x$ and $g = f^{-1}$. Find $g\'(5)$. (Fraction or decimal.)',
        correctAnswer: '1/7',
        acceptableAnswers: ['1/7', '0.143', '0.1429'],
        hints: [
          'Solve $f(a) = 5$: $a^3 + 4a = 5$ gives $a = 1$.',
          '$f\'(x) = 3x^2 + 4$, so $f\'(1) = 7$.'
        ],
        explanation: '$f(1) = 5$, so $g(5) = 1$ and $g\'(5) = \\frac{1}{f\'(1)} = \\frac{1}{7}$.'
      }
    },
    {
      id: 'inv5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- Chain rule + inverse trig: outer is $\\arcsin/\\arctan$, inner is $u$
- Inverse at a point: solve $f(a) = b$, then $(f^{-1})'(b) = \\frac{1}{f'(a)}$
- $\\ln$ + implicit: differentiate both sides, solve for $y'$
- Preview (Unit 6): the same formulas reverse into $\\arcsin$ and $\\arctan$ antiderivatives`
    }
  ]
};
