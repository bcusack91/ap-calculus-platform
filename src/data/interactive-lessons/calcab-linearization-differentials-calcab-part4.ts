export const calcabLinearizationPart4Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin4-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 4 of 7 \u2014 Error Analysis**

### Error Terminology

| Term | Symbol | Formula |
|:---:|:---:|:---:|
| Approximate change | $dy$ | $f'(x)\\,dx$ |
| Exact change | $\\Delta y$ | $f(x+\\Delta x) - f(x)$ |
| Absolute error | $|\\Delta y - dy|$ | Difference between actual and estimate |
| Relative error | $\\frac{|\\Delta y - dy|}{|\\Delta y|}$ | Fraction of the actual change |
| Percent error | $\\frac{|\\Delta y - dy|}{|\\Delta y|} \\times 100\\%$ | Relative error as percent |

### Over/Under with Error Bounds

$$\\boxed{\\text{Error} \\approx \\frac{1}{2}f''(a)(x-a)^2}$$

This is the next term in the Taylor expansion. For small $(x-a)$, the error is approximately **quadratic** in the displacement.

### Worked Example

> Approximate $\\sqrt{26}$ using $a = 25$. Estimate the error.

$L(26) = 5 + \\frac{1}{10}(1) = 5.1$

Error $\\approx \\frac{1}{2}f''(25)(1)^2 = \\frac{1}{2}\\left(-\\frac{1}{4 \\cdot 125}\\right) = -\\frac{1}{1000} = -0.001$

So $\\sqrt{26} \\approx 5.1 - 0.001 = 5.099$. Actual: $5.0990\\ldots$ \u2014 extremely close!

> **AP Tip:** The sign of $f''(a)$ tells you whether $L$ overestimates ($f'' < 0$) or underestimates ($f'' > 0$). The magnitude tells you how large the error is.`
    },
    {
      id: 'lin4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Error Analysis** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Using $L(x)$ at $a = 0$ for $e^x$, approximate $e^{0.5}$. This is:',
            options: ['An underestimate (since $f\'\' > 0$)', 'An overestimate', 'Exact', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$f\'\'(x) = e^x > 0$, so $f$ is concave up. The tangent line lies below the curve: underestimate.'
          },
          {
            question: 'As $dx \\to 0$, the ratio $\\Delta y / dy$:',
            options: ['Approaches $1$', 'Approaches $0$', 'Approaches $\\infty$', 'Stays constant'],
            correctAnswer: 0,
            explanation: '$dy \\approx \\Delta y$ for small $dx$, so $\\Delta y/dy \\to 1$.'
          },
          {
            question: 'The error in linear approximation is proportional to:',
            options: ['$(x-a)^2$', '$x - a$', '$(x-a)^3$', '$1/(x-a)$'],
            correctAnswer: 0,
            explanation: 'Error $\\approx \\frac{1}{2}f\'\'(a)(x-a)^2$, so it is proportional to $(x-a)^2$.'
          }
        ]
      }
    },
    {
      id: 'lin4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Error classification.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$L(x) = 2 + \\frac{1}{4}(x-4)$ approximates $\\sqrt{4.5}$ as $2.125$. Actual $\\approx 2.121$. Absolute error:',
            options: ['$\\approx 0.004$', '$\\approx 0.04$', '$\\approx 0.4$', '$\\approx 0.001$'],
            correctAnswers: ['$\\approx 0.004$'],
            hints: ['$|2.125 - 2.121| = ?$'],
            explanation: '$|2.125 - 2.121| = 0.004$.'
          },
          {
            label: 'The percent error is approximately:',
            options: ['$0.19\\%$', '$1.9\\%$', '$19\\%$', '$0.019\\%$'],
            correctAnswers: ['$0.19\\%$'],
            hints: ['$0.004/2.121 \\times 100\\%$.'],
            explanation: '$0.004/2.121 \\approx 0.0019 = 0.19\\%$.'
          },
          {
            label: 'If we used $a = 4$ to approximate $\\sqrt{10}$, the error would be:',
            options: ['Much larger (far from $a$)', 'About the same', 'Smaller', 'Zero'],
            correctAnswers: ['Much larger (far from $a$)'],
            hints: ['$x - a = 6$, much larger than $0.5$.'],
            explanation: 'Error $\\propto (x-a)^2$. With $(x-a) = 6$, the error is $(6/0.5)^2 = 144$ times larger!'
          }
        ]
      }
    },
    {
      id: 'lin4-input',
      type: 'input-box' as const,
      content: '**Calculate the error.** \u270d\ufe0f',
      exercise: {
        question: 'Use $L(x)$ for $f(x) = x^2$ at $a = 5$ to estimate $f(5.1)$. Find the absolute error $|\\Delta y - dy|$.\n\nIf the error is $\\frac{a}{b}$ in lowest terms, find $a + b$.\n\n(Enter an integer.)',
        correctAnswer: '101',
        acceptableAnswers: ['101'],
        hints: [
          '$L(5.1) = 25 + 10(0.1) = 26$.',
          'Actual: $(5.1)^2 = 26.01$.',
          '$|26.01 - 26| = 0.01 = 1/100$. $a + b = 1 + 100 = 101$.'
        ],
        explanation: '$dy = 2(5)(0.1) = 1$. $\\Delta y = 26.01 - 25 = 1.01$. Error $= 0.01 = 1/100$. $a + b = 101$.'
      }
    },
    {
      id: 'lin4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- Error in linearization $\\propto (x-a)^2$ (quadratic)
- Concave up $\\Rightarrow$ underestimate; concave down $\\Rightarrow$ overestimate
- Absolute error $= |\\Delta y - dy|$; relative error $= |\\Delta y - dy|/|\\Delta y|$
- Stay close to $a$ for smaller errors`
    }
  ]
};
