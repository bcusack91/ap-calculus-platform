export const calcbcRatioRootPart1Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'rr1-intro',
      type: 'text' as const,
      content: `# The Ratio Test

**Part 1 of 7 — When Factorials and Exponentials Appear**

### The Ratio Test Statement

For $\\sum a_n$ with $a_n \\neq 0$, compute:

$$\\boxed{L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|}$$

| Result | Conclusion |
|--------|-----------|
| $L < 1$ | **Converges absolutely** |
| $L > 1$ or $L = \\infty$ | **Diverges** |
| $L = 1$ | **Inconclusive** |

### When to Reach for the Ratio Test

The Ratio Test excels when $a_n$ involves:
- **Factorials:** $n!$, $(2n)!$, etc.
- **Exponentials:** $r^n$, $(-1)^n r^n$
- **Products of factorials and powers:** $n! \\cdot 3^n / (2n)!$

> **Key Fact:** The Ratio Test is the go-to for factorials because the ratio $a_{n+1}/a_n$ cancels most factorial terms, leaving a clean limit.`
    },
    {
      id: 'rr1-examples',
      type: 'text' as const,
      content: `### Worked Example 1: $\\sum_{n=1}^{\\infty} \\frac{n!}{3^n}$

$$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!} = \\frac{n+1}{3}$$

$$L = \\lim_{n \\to \\infty} \\frac{n+1}{3} = \\infty > 1 \\quad \\Rightarrow \\quad \\text{Diverges}$$

### Worked Example 2: $\\sum_{n=0}^{\\infty} \\frac{2^n}{n!}$

$$\\frac{a_{n+1}}{a_n} = \\frac{2^{n+1}}{(n+1)!} \\cdot \\frac{n!}{2^n} = \\frac{2}{n+1}$$

$$L = \\lim_{n \\to \\infty} \\frac{2}{n+1} = 0 < 1 \\quad \\Rightarrow \\quad \\text{Converges absolutely}$$

### Worked Example 3: $\\sum_{n=1}^{\\infty} \\frac{n^2}{2^n}$

$$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{2^{n+1}} \\cdot \\frac{2^n}{n^2} = \\frac{(n+1)^2}{2n^2} = \\frac{1}{2}\\left(\\frac{n+1}{n}\\right)^2$$

$$L = \\frac{1}{2} \\cdot 1 = \\frac{1}{2} < 1 \\quad \\Rightarrow \\quad \\text{Converges absolutely}$$

> **AP Tip:** The polynomial factor $(n+1)^2/n^2 \\to 1$ always — the ratio of exponentials/factorials determines $L$.`
    },
    {
      id: 'rr1-mc1',
      type: 'multiple-choice' as const,
      content: '**Ratio Test Practice**',
      exercise: {
        questions: [
          {
            question: 'For $\\sum n!/n^n$: $L = \\lim |(n+1)!/(n+1)^{n+1} \\cdot n^n/n!| = \\lim n^n/(n+1)^n = \\lim (n/(n+1))^n$. This equals:',
            options: ['$1/e < 1$, converges', '$1$, inconclusive', '$e > 1$, diverges', '$0$, converges'],
            correctAnswer: 0,
            explanation: '$\\lim (n/(n+1))^n = \\lim (1 - 1/(n+1))^n = 1/e \\approx 0.368 < 1$. Converges.'
          },
          {
            question: 'For $\\sum 1/n^2$: $L = \\lim n^2/(n+1)^2 = 1$. The Ratio Test:',
            options: ['Is inconclusive (use another test)', 'Shows convergence', 'Shows divergence', 'Does not apply'],
            correctAnswer: 0,
            explanation: '$L = 1$ is inconclusive. For $p$-series, use the $p$-Series Test instead ($p = 2 > 1$, converges).'
          },
          {
            question: 'The Ratio Test is inconclusive ($L = 1$) for ALL $p$-series $\\sum 1/n^p$. Why?',
            options: ['Because $|a_{n+1}/a_n| = (n/(n+1))^p \\to 1$ for any fixed $p$', 'Because $p$-series have no factorials', 'Because $p$-series alternate', 'Because the limit does not exist'],
            correctAnswer: 0,
            explanation: 'The ratio $(n/(n+1))^p \\to 1^p = 1$ regardless of $p$. The Ratio Test cannot distinguish convergent and divergent $p$-series.'
          }
        ]
      }
    },
    {
      id: 'rr1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Ratio Test Setup**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\sum (2n)!/4^n$, the ratio $a_{n+1}/a_n$ simplifies to:',
            options: ['$(2n+2)(2n+1)/4$', '$(2n+1)/4$', '$(2n)!/4$', '$(n+1)/4$'],
            correctAnswers: ['$(2n+2)(2n+1)/4$'],
            hints: ['$(2(n+1))! = (2n+2)!$ and $(2n+2)!/(2n)! = (2n+2)(2n+1)$.'],
            explanation: '$a_{n+1}/a_n = (2n+2)!/(4^{n+1}) \\cdot 4^n/(2n)! = (2n+2)(2n+1)/4 \\to \\infty$. Diverges.'
          },
          {
            label: 'For $\\sum 5^n/(n \\cdot 3^n)$, $L =$',
            options: ['$5/3 > 1$, diverges', '$3/5 < 1$, converges', '$1$, inconclusive', '$15$'],
            correctAnswers: ['$5/3 > 1$, diverges'],
            hints: ['$a_{n+1}/a_n = (5/3) \\cdot n/(n+1) \\to 5/3$.'],
            explanation: '$|a_{n+1}/a_n| = (5^{n+1}/((n+1)3^{n+1})) \\cdot (n \\cdot 3^n/5^n) = (5/3)(n/(n+1)) \\to 5/3 > 1$.'
          }
        ]
      }
    },
    {
      id: 'rr1-input',
      type: 'input-box' as const,
      content: '**Compute the Limit**',
      exercise: {
        question: 'For $\\sum_{n=1}^{\\infty} \\frac{3^n \\cdot n!}{(2n)!}$, compute $L$ as a decimal or fraction.',
        correctAnswer: '0',
        acceptableAnswers: ['0', '0.0', '0.00'],
        hints: ['$a_{n+1}/a_n = 3(n+1)/((2n+2)(2n+1)) = 3(n+1)/(2(n+1)(2n+1)) = 3/(2(2n+1))$.'],
        explanation: '$L = \\lim 3/(2(2n+1)) = 0 < 1$. The series converges absolutely.'
      }
    },
    {
      id: 'rr1-summary',
      type: 'text' as const,
      content: `### Summary

- Ratio Test: $L = \\lim |a_{n+1}/a_n|$
- $L < 1$: converges absolutely; $L > 1$: diverges; $L = 1$: inconclusive
- Best for factorials and exponentials
- Inconclusive for all $p$-series and many rational functions

> **Next:** Part 2 — The Root Test.`
    }
  ]
};
