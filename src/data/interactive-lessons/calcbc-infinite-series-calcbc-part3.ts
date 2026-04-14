export const calcbcSeriesPart3Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'is3-intro',
      type: 'text' as const,
      content: `# Infinite Series — Ratio & Root Tests

**Part 3 of 7 — The Ratio and Root Tests**

### The Ratio Test

Let $L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$. Then:

| $L$ value | Conclusion |
|-----------|-----------|
| $L < 1$ | **Converges absolutely** |
| $L > 1$ (or $L = \\infty$) | **Diverges** |
| $L = 1$ | **Inconclusive** |

### The Root Test

Let $L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}$. Same conclusions as ratio test.

> **Key Fact:** The ratio test works best with **factorials and exponentials**. The root test works best with **$n$th powers**. Both are inconclusive for $p$-series.`
    },
    {
      id: 'is3-examples',
      type: 'text' as const,
      content: `### Examples

**Ratio Test:** $\\sum \\frac{n!}{3^n}$

$$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!} = \\frac{n+1}{3} \\to \\infty$$

$L = \\infty > 1$: **diverges**.

**Ratio Test:** $\\sum \\frac{2^n}{n!}$

$$\\frac{a_{n+1}}{a_n} = \\frac{2^{n+1}}{(n+1)!} \\cdot \\frac{n!}{2^n} = \\frac{2}{n+1} \\to 0$$

$L = 0 < 1$: **converges absolutely**.

**Root Test:** $\\sum \\left(\\frac{n}{2n+1}\\right)^n$

$$\\sqrt[n]{a_n} = \\frac{n}{2n+1} \\to \\frac{1}{2}$$

$L = 1/2 < 1$: **converges absolutely**.`
    },
    {
      id: 'is3-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'For $\\sum \\frac{n^2}{5^n}$, the ratio $|a_{n+1}/a_n|$ approaches:',
            options: ['$1/5$', '$5$', '$1$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\frac{(n+1)^2}{5^{n+1}} \\cdot \\frac{5^n}{n^2} = \\frac{(n+1)^2}{5n^2} \\to 1/5 < 1$. Converges.'
          },
          {
            question: 'The ratio test is INCONCLUSIVE for $\\sum 1/n^p$ because:',
            options: ['$L = 1$ for all values of $p$', '$L = 0$', '$L = p$', 'The factorial formula does not apply'],
            correctAnswer: 0,
            explanation: '$|a_{n+1}/a_n| = (n/(n+1))^p \\to 1$ regardless of $p$. The ratio test cannot distinguish between convergent ($p>1$) and divergent ($p\\le 1$) $p$-series.'
          }
        ]
      }
    },
    {
      id: 'is3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Test Selection**',
      exercise: {
        dropdowns: [
          {
            label: 'Best test for $\\sum \\frac{n!}{10^n}$:',
            options: ['Ratio test (involves factorial)', 'Root test', 'Integral test', '$p$-series test'],
            correctAnswers: ['Ratio test (involves factorial)'],
            hints: ['Factorial in the series $\\implies$ ratio test.'],
            explanation: '$|a_{n+1}/a_n| = \\frac{n+1}{10} \\to \\infty$. Diverges. The ratio test handles factorials cleanly.'
          },
          {
            label: 'Best test for $\\sum \\left(\\frac{3}{n}\\right)^n$:',
            options: ['Root test ($n$th power form)', 'Ratio test', 'Comparison test', 'Integral test'],
            correctAnswers: ['Root test ($n$th power form)'],
            hints: ['When $a_n$ has the form $(f(n))^n$, use root test.'],
            explanation: '$\\sqrt[n]{a_n} = 3/n \\to 0 < 1$. Converges. Root test naturally handles $n$th powers.'
          }
        ]
      }
    },
    {
      id: 'is3-input',
      type: 'input-box' as const,
      content: '**Ratio Test Computation**',
      exercise: {
        question: 'For $\\sum \\frac{3^n}{n!}$, compute $L = \\lim \\frac{a_{n+1}}{a_n} = \\lim \\frac{3}{n+1}$. What is $L$?',
        correctAnswer: '0',
        acceptableAnswers: ['0', '0.0'],
        hints: ['As $n \\to \\infty$, $3/(n+1) \\to ?$'],
        explanation: '$L = 0 < 1$. The series converges absolutely. (In fact, $\\sum 3^n/n! = e^3$.)'
      }
    },
    {
      id: 'is3-summary',
      type: 'text' as const,
      content: `### Summary

- Ratio test: $L = \\lim |a_{n+1}/a_n|$ — best for factorials and exponentials
- Root test: $L = \\lim \\sqrt[n]{|a_n|}$ — best for $n$th powers
- $L < 1$: converges; $L > 1$: diverges; $L = 1$: inconclusive
- Both tests are inconclusive for $p$-series (use comparison or integral test instead)

$$\\boxed{L < 1 \\implies \\text{converges} \\qquad L > 1 \\implies \\text{diverges} \\qquad L = 1 \\implies \\text{inconclusive}}$$

> **Next:** Part 4 — Absolute and conditional convergence.`
    }
  ]
};
