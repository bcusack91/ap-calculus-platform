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

### Over or Under? Let Concavity Decide

The tangent line hugs the graph near $x = a$, but the graph bends away from it. The sign of $f''$ near $a$ tells you which way:

| Near $x = a$ | Graph vs. tangent line | Tangent-line value $L(x)$ is an |
|:---:|:---:|:---:|
| $f'' > 0$ (concave up) | Graph lies **above** the line | **Underestimate** |
| $f'' < 0$ (concave down) | Graph lies **below** the line | **Overestimate** |

The farther $x$ is from $a$, the more the graph can bend away from the line, so estimates are most reliable close to the point of tangency.

### Worked Example

> Approximate $\\sqrt{26}$ using $a = 25$. Is the estimate too high or too low?

$f(x) = \\sqrt{x}$, $f'(x) = \\frac{1}{2\\sqrt{x}}$, so $L(x) = 5 + \\frac{1}{10}(x - 25)$ and $L(26) = 5.1$.

$f''(x) = -\\frac{1}{4}x^{-3/2} < 0$ for $x > 0$, so the graph is concave down and lies below its tangent line: $5.1$ is an **overestimate**.

Check: $\\sqrt{26} = 5.0990\\ldots$, so the absolute error is $|5.0990 - 5.1| \\approx 0.001$.

> **AP Tip:** A justification needs the reason, not just the word: "$L(26)$ is an overestimate because $f''(x) < 0$ near $x = 25$, so the graph of $f$ is concave down and lies below its tangent line." Whether $f$ is increasing does not decide over or under.`
    },
    {
      id: 'lin4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Error Analysis** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Using $L(x)$ at $a = 0$ for $e^x$, approximate $e^{0.5}$. This is:',
            options: ['An underestimate, since $e^x$ is concave up', 'An overestimate, since $e^x$ is increasing', 'Exact, since $(e^x)\' = e^x$', 'An overestimate, since $0.5$ is not small'],
            correctAnswer: 0,
            explanation: '$f\'\'(x) = e^x > 0$, so $f$ is concave up and the tangent line lies below the curve: underestimate. Being increasing ($f\' > 0$) does not decide over or under, and the size of $0.5$ affects how large the error is, not its direction.'
          },
          {
            question: 'As $dx \\to 0$, the ratio $\\Delta y / dy$:',
            options: ['Approaches $1$', 'Approaches $0$, like $dx$', 'Approaches $\\infty$', 'Approaches $f\'(x)$'],
            correctAnswer: 0,
            explanation: '$dy \\approx \\Delta y$ for small $dx$, so $\\Delta y/dy \\to 1$. Both quantities shrink to $0$, but their ratio does not; $f\'(x)$ is the limit of $\\Delta y/dx$, a different ratio.'
          },
          {
            question: 'The line tangent to $f(x) = x^3$ at $x = 1$ is used to estimate $f(1.2)$. What is the absolute error of the estimate?',
            options: ['$0.128$', '$0.600$', '$0.728$', '$1.600$'],
            correctAnswer: 0,
            explanation: '$L(x) = 1 + 3(x - 1)$, so $L(1.2) = 1.6$, while $f(1.2) = 1.728$. The absolute error is $|1.728 - 1.6| = 0.128$, an underestimate because $f\'\'(x) = 6x > 0$ near $x = 1$. The value $0.600$ is the estimated change $dy$, $0.728$ is the actual change $\\Delta y$, and $1.600$ is the estimate itself.'
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
            options: ['Much larger', 'About the same', 'Slightly smaller', 'Slightly larger'],
            correctAnswers: ['Much larger'],
            hints: ['$x - a = 6$, much larger than $0.5$.'],
            explanation: 'The tangent line only hugs the graph near $a = 4$. At $x = 10$, $L(10) = 2 + \\frac{6}{4} = 3.5$ while $\\sqrt{10} \\approx 3.162$, an error of about $0.34$, roughly 80 times the $0.004$ error at $x = 4.5$, because $10$ is far from $a = 4$.'
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

- The closer $x$ is to $a$, the smaller the error
- Concave up $\\Rightarrow$ underestimate; concave down $\\Rightarrow$ overestimate
- Absolute error $= |\\Delta y - dy|$; relative error $= |\\Delta y - dy|/|\\Delta y|$
- Justify over/under with the sign of $f''$ near $a$, not with whether $f$ is increasing`
    }
  ]
};
