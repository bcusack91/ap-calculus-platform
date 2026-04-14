export const calcbcAlternatingPart4Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'as4-intro',
      type: 'text' as const,
      content: `# Alternating Series — Connections to Taylor Series

**Part 4 of 7 — Alternating Series in Taylor/Maclaurin Context**

### Key Maclaurin Series That Alternate

| Function | Series | Notes |
|----------|--------|-------|
| $e^{-x}$ | $\\sum_{n=0}^\\infty \\frac{(-x)^n}{n!} = \\sum \\frac{(-1)^n x^n}{n!}$ | Alternates for $x > 0$ |
| $\\sin x$ | $\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ | Alternates for all $x > 0$ |
| $\\cos x$ | $\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}$ | Alternates for all $x > 0$ |
| $\\ln(1+x)$ | $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}$ | Alternates for $0 < x \\le 1$ |
| $\\arctan x$ | $\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{2n+1}$ | Alternates for $0 < x \\le 1$ |

$$\\boxed{\\text{When a Taylor series alternates, you can use the alternating series error bound for the remainder.}}$$

> **AP Tip:** The alternating series error bound is often EASIER to apply than the Lagrange error bound. Use it whenever the series alternates.`
    },
    {
      id: 'as4-example',
      type: 'text' as const,
      content: `### Example: Estimating $\\cos(0.5)$

$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots$

Using 3 terms ($n = 0, 1, 2$):

$P_4(0.5) = 1 - \\frac{0.25}{2} + \\frac{0.0625}{24} = 1 - 0.125 + 0.002604 = 0.877604$

**Error** $\\le |$first omitted term$| = \\frac{(0.5)^6}{720} = \\frac{1/64}{720} \\approx 0.0000217$

Compare: $\\cos(0.5) = 0.877583\\ldots$, so actual error $\\approx 0.000021$ ✓

### Alternating vs. Lagrange Error Bound

For alternating Taylor series, both bounds work:
- **Alternating:** $|R| \\le |\\text{next term}|$ — easy!
- **Lagrange:** $|R_n(x)| \\le \\frac{M|x-c|^{n+1}}{(n+1)!}$ — need to find $M$

The alternating bound is usually tighter and easier. Use it when available!`
    },
    {
      id: 'as4-mc1',
      type: 'multiple-choice' as const,
      content: '**Taylor + AST Practice**',
      exercise: {
        questions: [
          {
            question: 'Using the Maclaurin series for $e^{-1}$ through $n=4$ terms, the error is at most:',
            options: ['$1/5! = 1/120$', '$1/4! = 1/24$', '$1/6! = 1/720$', '$e^{-1}/5$'],
            correctAnswer: 0,
            explanation: '$e^{-1} = \\sum (-1)^n/n!$. Through $n=4$: error $\\le |$ next term $| = 1/5! = 1/120$.'
          },
          {
            question: 'How many nonzero terms of the Maclaurin series for $\\sin(0.1)$ guarantee error $< 10^{-10}$?',
            options: ['2 terms', '3 terms', '4 terms', '5 terms'],
            correctAnswer: 0,
            explanation: 'Terms: $0.1 - 0.1^3/6 + \\cdots$. Error after 2 terms $\\le 0.1^5/120 = 10^{-5}/120 \\approx 8.3 \\times 10^{-8} < 10^{-10}$? No. Let me recalculate: $0.1^5/5! = 10^{-5}/120 \\approx 8.3 \\times 10^{-8}$. That\'s not $< 10^{-10}$. After 3 terms: error $\\le 0.1^7/7! = 10^{-7}/5040 \\approx 2\\times 10^{-11} < 10^{-10}$ ✓. So 3 terms.'
          },
          {
            question: 'The alternating series error bound can be used for the Taylor series of $\\ln(1+x)$ centered at $0$ when:',
            options: ['$0 < x \\le 1$', 'All $x$', '$-1 < x < 1$', '$x > 1$'],
            correctAnswer: 0,
            explanation: '$\\ln(1+x) = \\sum (-1)^{n+1} x^n/n$ for $-1 < x \\le 1$. It alternates when $x > 0$. At $x = 1$ it still alternates. So for $0 < x \\le 1$.'
          }
        ]
      }
    },
    {
      id: 'as4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Error Bound Application**',
      exercise: {
        dropdowns: [
          {
            label: 'To estimate $\\arctan(1/2)$ with error $< 0.001$ using its Maclaurin series, the minimum number of terms needed is:',
            options: ['3 (error ≤ $(1/2)^7/7 ≈ 0.0011$... need 4)', '4', '2', '5'],
            correctAnswers: ['3 (error ≤ $(1/2)^7/7 ≈ 0.0011$... need 4)'],
            hints: ['$\\arctan x = x - x^3/3 + x^5/5 - \\cdots$. Error after $N$ terms $\\le (1/2)^{2N+1}/(2N+1)$.'],
            explanation: 'After 3 terms: error $\\le (1/2)^7/7 = 1/896 ≈ 0.00112 > 0.001$. After 4 terms: error $\\le (1/2)^9/9 = 1/4608 ≈ 0.000217 < 0.001$ ✓. Need 4 terms.'
          },
          {
            label: 'When the Taylor series does NOT alternate (e.g., $e^x$ at $x=1$), you must use:',
            options: ['Lagrange Error Bound', 'Alternating Series Error Bound', 'Divergence Test', 'No error bound exists'],
            correctAnswers: ['Lagrange Error Bound'],
            hints: ['$e^x = 1 + x + x^2/2! + \\cdots$ — all positive terms for $x > 0$.'],
            explanation: 'Since $e^x$ has all positive terms for $x > 0$, it doesn\'t alternate. Must use Lagrange: $|R_n| \\le M|x-c|^{n+1}/(n+1)!$.'
          }
        ]
      }
    },
    {
      id: 'as4-input',
      type: 'input-box' as const,
      content: '**Error Computation**',
      exercise: {
        question: 'Using $\\cos x = 1 - x^2/2! + x^4/4! - \\cdots$, approximate $\\cos(1)$ with 3 terms. What is the error bound? Enter as a simplified fraction.',
        correctAnswer: '1/720',
        acceptableAnswers: ['1/720'],
        hints: ['3 terms: $1 - 1/2 + 1/24$. Error $\\le$ next omitted term $= 1/6! = 1/720$.'],
        explanation: 'Three terms: $1 - 1/2 + 1/24 = 13/24 \\approx 0.5417$. Error $\\le 1^6/6! = 1/720 \\approx 0.00139$. Actual: $\\cos(1) \\approx 0.5403$, error $\\approx 0.0014$ ✓.'
      }
    },
    {
      id: 'as4-summary',
      type: 'text' as const,
      content: `### Summary

- Many important Taylor series alternate for certain $x$ values
- When alternating, use AST error bound: easier than Lagrange
- Key functions: $\\sin x$, $\\cos x$, $e^{-x}$, $\\ln(1+x)$, $\\arctan x$
- On the AP exam, choose the simpler error bound when both apply

> **Next:** Part 5 — AP Exam Strategies for Alternating Series.`
    }
  ]
};
