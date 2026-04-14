export const calcbcRatioRootPart2Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'rr2-intro',
      type: 'text' as const,
      content: `# The Root Test

**Part 2 of 7 — The $n$th Root Approach**

### The Root Test Statement

For $\\sum a_n$, compute:

$$\\boxed{L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|} = \\lim_{n \\to \\infty} |a_n|^{1/n}}$$

| Result | Conclusion |
|--------|-----------|
| $L < 1$ | **Converges absolutely** |
| $L > 1$ | **Diverges** |
| $L = 1$ | **Inconclusive** |

### When to Use the Root Test

The Root Test is ideal when $a_n$ is an **$n$th power**:

$$a_n = (\\text{expression})^n$$

The $n$th root peels off the exponent cleanly.

> **Key Fact:** Any series where the Ratio Test gives $L \\neq 1$ will also give the same $L$ with the Root Test. But the Root Test sometimes works when the Ratio Test limit doesn't exist.`
    },
    {
      id: 'rr2-examples',
      type: 'text' as const,
      content: `### Worked Example 1: $\\sum_{n=1}^{\\infty} \\left(\\frac{2n+1}{3n+5}\\right)^n$

$$|a_n|^{1/n} = \\frac{2n+1}{3n+5}$$

$$L = \\lim_{n \\to \\infty} \\frac{2n+1}{3n+5} = \\frac{2}{3} < 1 \\quad \\Rightarrow \\quad \\text{Converges}$$

### Worked Example 2: $\\sum_{n=1}^{\\infty} \\frac{1}{(\\ln n)^n}$

$$|a_n|^{1/n} = \\frac{1}{\\ln n}$$

$$L = \\lim_{n \\to \\infty} \\frac{1}{\\ln n} = 0 < 1 \\quad \\Rightarrow \\quad \\text{Converges}$$

### Worked Example 3: $\\sum_{n=1}^{\\infty} \\left(1 + \\frac{1}{n}\\right)^{n^2}$

$$|a_n|^{1/n} = \\left(1 + \\frac{1}{n}\\right)^n \\to e \\approx 2.718$$

$$L = e > 1 \\quad \\Rightarrow \\quad \\text{Diverges}$$

> **AP Tip:** The Root Test is less commonly tested than the Ratio Test, but when $a_n$ has the form $b_n^n$, it's the fastest approach.`
    },
    {
      id: 'rr2-mc1',
      type: 'multiple-choice' as const,
      content: '**Root Test Practice**',
      exercise: {
        questions: [
          {
            question: 'For $\\sum (n/(2n+3))^n$, the Root Test gives $L =$',
            options: ['$1/2$, converges', '$2/3$, converges', '$1$, inconclusive', '$3/2$, diverges'],
            correctAnswer: 0,
            explanation: '$|a_n|^{1/n} = n/(2n+3) \\to 1/2 < 1$. Converges absolutely.'
          },
          {
            question: 'For $\\sum (3/2)^n$, the Root Test gives:',
            options: ['$L = 3/2 > 1$, diverges', '$L = 2/3 < 1$, converges', '$L = 1$, inconclusive', '$L = 0$'],
            correctAnswer: 0,
            explanation: '$|a_n|^{1/n} = 3/2$ for all $n$. $L = 3/2 > 1$, diverges.'
          },
          {
            question: 'The Root Test is inconclusive for $\\sum 1/n^p$ because:',
            options: ['$(1/n^p)^{1/n} = 1/n^{p/n} \\to 1$ for any $p$', 'The terms do not have $n$th powers', 'The series always converges', 'The limit does not exist'],
            correctAnswer: 0,
            explanation: '$n^{p/n} = e^{(p \\ln n)/n} \\to e^0 = 1$, so $|a_n|^{1/n} \\to 1$ for any fixed $p$.'
          }
        ]
      }
    },
    {
      id: 'rr2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Root Test Computation**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\sum n^n/3^n$: $|a_n|^{1/n} = n/3$. So $L =$',
            options: ['$\\infty$, diverges (since $n/3 \\to \\infty$)', '$1/3$, converges', '$1$, inconclusive', '$3$, diverges'],
            correctAnswers: ['$\\infty$, diverges (since $n/3 \\to \\infty$)'],
            hints: ['$\\lim n/3 = \\infty$.'],
            explanation: '$L = \\lim n/3 = \\infty > 1$. The series diverges.'
          },
          {
            label: 'For $\\sum 2^n/n^n$: $|a_n|^{1/n} = 2/n$. So $L =$',
            options: ['$0$, converges', '$2$, diverges', '$1$, inconclusive', '$\\infty$'],
            correctAnswers: ['$0$, converges'],
            hints: ['$\\lim 2/n = 0$.'],
            explanation: '$L = \\lim 2/n = 0 < 1$. Converges absolutely.'
          }
        ]
      }
    },
    {
      id: 'rr2-input',
      type: 'input-box' as const,
      content: '**Root Test Limit**',
      exercise: {
        question: 'Compute $L$ for $\\sum_{n=1}^{\\infty} \\left(\\frac{5n-1}{4n+2}\\right)^n$ using the Root Test. Express as a fraction.',
        correctAnswer: '5/4',
        acceptableAnswers: ['5/4', '1.25'],
        hints: ['$|a_n|^{1/n} = (5n-1)/(4n+2) \\to ?$'],
        explanation: '$L = \\lim (5n-1)/(4n+2) = 5/4 > 1$. The series diverges.'
      }
    },
    {
      id: 'rr2-summary',
      type: 'text' as const,
      content: `### Summary

- Root Test: $L = \\lim |a_n|^{1/n}$
- Same threshold: $L < 1$ converges, $L > 1$ diverges, $L = 1$ inconclusive
- Best for terms of the form $(\\text{expression})^n$
- Rarely needed on AP but important to know

> **Next:** Part 3 — Ratio vs. Root: Which Test When?`
    }
  ]
};
