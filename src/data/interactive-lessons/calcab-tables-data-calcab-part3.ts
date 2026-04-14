export const calcabTablesDataPart3Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td3-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 3 of 7 \u2014 Trapezoidal Rule**

### The Trapezoidal Approximation

For **unequal subintervals**, the trapezoidal rule averages the endpoints of each subinterval:

$$\\boxed{\\int_a^b f(x)\\,dx \\approx \\sum_{i=1}^{n} \\frac{\\Delta x_i}{2}\\bigl[f(x_{i-1}) + f(x_i)\\bigr]}$$

### Comparison: Left vs. Right vs. Trapezoid

| Method | Formula (per subinterval) | Accuracy |
|:---|:---:|:---|
| Left | $f(x_{i-1}) \\cdot \\Delta x_i$ | Depends on monotonicity |
| Right | $f(x_i) \\cdot \\Delta x_i$ | Depends on monotonicity |
| Trapezoid | $\\frac{\\Delta x_i}{2}[f(x_{i-1})+f(x_i)]$ | Average of left and right |

> **Key Fact:** The trapezoidal approximation equals the average of the left and right Riemann sums: $T = \\frac{L + R}{2}$.

### Over/Under Estimates

| If $f$ is... | Left sum | Right sum | Trapezoid |
|:---|:---:|:---:|:---:|
| Increasing | Under | Over | Exact avg |
| Decreasing | Over | Under | Exact avg |
| Concave up | \u2014 | \u2014 | Over |
| Concave down | \u2014 | \u2014 | Under |

### Worked Example

| $t$ (hrs) | 0 | 2 | 5 | 8 | 10 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $R(t)$ (gal/hr) | 4 | 6 | 3 | 8 | 5 |

$$T = \\frac{2}{2}(4+6) + \\frac{3}{2}(6+3) + \\frac{3}{2}(3+8) + \\frac{2}{2}(8+5)$$

$$= 10 + 13.5 + 16.5 + 13 = 53 \\text{ gal}$$

**Verify:** Left sum $= 51$, Right sum $= 55$, and $\\frac{51+55}{2} = 53$. \u2713`
    },
    {
      id: 'td3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Trapezoidal Rule** \ud83c\udfaf\n\n| $x$ | 0 | 3 | 7 | 10 |\n|:---:|:---:|:---:|:---:|:---:|\n| $f(x)$ | 5 | 8 | 2 | 6 |',
      exercise: {
        questions: [
          {
            question: 'Estimate $\\int_0^{10} f(x)\\,dx$ using the trapezoidal rule.',
            options: ['$51.5$', '$55$', '$42$', '$60$'],
            correctAnswer: 0,
            explanation: '$T = \\frac{3}{2}(5+8) + \\frac{4}{2}(8+2) + \\frac{3}{2}(2+6) = 19.5 + 20 + 12 = 51.5$.'
          },
          {
            question: 'If $f$ is concave up on $[0,10]$, the trapezoidal estimate is:',
            options: ['An overestimate', 'An underestimate', 'Exact', 'Cannot tell'],
            correctAnswer: 0,
            explanation: 'For concave up functions, trapezoids lie above the curve, giving an overestimate.'
          },
          {
            question: 'The trapezoidal sum is equal to:',
            options: ['$\\frac{\\text{Left} + \\text{Right}}{2}$', '$\\text{Left} + \\text{Right}$', 'Midpoint sum', 'Left sum only'],
            correctAnswer: 0,
            explanation: '$T = \\frac{L + R}{2}$. This is always true.'
          }
        ]
      }
    },
    {
      id: 'td3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Build a trapezoidal estimate.** \ud83d\udd0d\n\n| $t$ (s) | 0 | 4 | 10 | 15 |\n|:---:|:---:|:---:|:---:|:---:|\n| $v(t)$ (m/s) | 3 | 7 | 5 | 9 |',
      exercise: {
        dropdowns: [
          {
            label: 'First trapezoid: $\\frac{4}{2}(3 + 7) =$',
            options: ['$20$', '$10$', '$28$', '$14$'],
            correctAnswers: ['$20$'],
            hints: ['$\\frac{4}{2} = 2$, and $2 \\times 10 = 20$.'],
            explanation: '$\\frac{4}{2}(3+7) = 2(10) = 20$.'
          },
          {
            label: 'Second trapezoid: $\\frac{6}{2}(7 + 5) =$',
            options: ['$36$', '$12$', '$30$', '$24$'],
            correctAnswers: ['$36$'],
            hints: ['$\\frac{6}{2} = 3$, and $3 \\times 12 = 36$.'],
            explanation: '$\\frac{6}{2}(7+5) = 3(12) = 36$.'
          },
          {
            label: 'Total trapezoidal estimate $=$',
            options: ['$20 + 36 + 35 = 91$', '$20 + 36 = 56$', '$91.5$', '$85$'],
            correctAnswers: ['$20 + 36 + 35 = 91$'],
            hints: ['Third: $\\frac{5}{2}(5+9) = \\frac{5}{2}(14) = 35$.'],
            explanation: 'Third: $\\frac{5}{2}(5+9) = 35$. Total: $20 + 36 + 35 = 91$ m.'
          }
        ]
      }
    },
    {
      id: 'td3-input',
      type: 'input-box' as const,
      content: '**Apply the trapezoidal rule.** \u270d\ufe0f\n\n| $x$ | 1 | 3 | 8 | 10 |\n|:---:|:---:|:---:|:---:|:---:|\n| $f(x)$ | 4 | 10 | 6 | 12 |',
      exercise: {
        question: 'Use the trapezoidal rule to estimate $\\int_1^{10} f(x)\\,dx$.\n\n(Enter an integer.)',
        correctAnswer: '72',
        acceptableAnswers: ['72'],
        hints: [
          'Subintervals: $[1,3],[3,8],[8,10]$ with widths $2,5,2$.',
          '$\\frac{2}{2}(4+10) + \\frac{5}{2}(10+6) + \\frac{2}{2}(6+12)$.',
          '$= 14 + 40 + 18 = 72$.'
        ],
        explanation: '$T = 1(14) + 2.5(16) + 1(18) = 14 + 40 + 18 = 72$.'
      }
    },
    {
      id: 'td3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

- Trapezoidal rule: $\\frac{\\Delta x}{2}[f(x_{i-1})+f(x_i)]$ per subinterval
- $T = \\frac{L + R}{2}$ (average of left and right sums)
- Concave up $\\Rightarrow$ trapezoid overestimates
- Concave down $\\Rightarrow$ trapezoid underestimates`
    }
  ]
};
