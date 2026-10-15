export const calcbcConvergencePart1Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'ct1-intro',
      type: 'text' as const,
      content: `# The Master Convergence Test Guide

**Part 1 of 7 — Overview of All Tests**

### Every Convergence Test You Need

| Test | Applies to | Conclusion |
|------|-----------|-----------|
| **Divergence** | Any $\\sum a_n$ | If $\\lim a_n \\neq 0$, diverges |
| **Geometric** | $\\sum ar^n$ | $|r| < 1$: converges to $a/(1-r)$ |
| **$p$-Series** | $\\sum 1/n^p$ | $p > 1$: converges |
| **Integral** | $f$ positive, decreasing | $\\sum$ and $\\int$ same behavior |
| **Comparison** | $0 \\le a_n \\le b_n$ | $\\sum b_n$ conv $\\Rightarrow \\sum a_n$ conv |
| **Limit Comparison** | $a_n, b_n > 0$ | $\\lim a_n/b_n = L > 0$: same behavior |
| **AST** | $\\sum (-1)^n b_n$ | $b_n \\downarrow 0$: converges |
| **Ratio** | Any, best for $n!$ | $L < 1$: abs conv; $L > 1$: div |
| **Root** | Any, best for $b_n^n$ | Same thresholds as Ratio |

### The First Question: Does $a_n \\to 0$?

$$\\boxed{\\lim_{n \\to \\infty} a_n \\neq 0 \\quad \\Longrightarrow \\quad \\sum a_n \\text{ diverges}}$$

> **Key Fact:** Always check the Divergence Test first. It's free, fast, and catches many series immediately.`
    },
    {
      id: 'ct1-flowchart',
      type: 'text' as const,
      content: `### Decision Flowchart

**Step 1: Is $\\lim a_n \\neq 0$?** → Diverges (Divergence Test)

**Step 2: Is it a known type?**
- Geometric: $\\sum ar^n$ → check $|r|$
- $p$-Series: $\\sum 1/n^p$ → check $p$
- Telescoping: $\\sum (b_n - b_{n+1})$ → evaluate

**Step 3: Does it alternate?**
- Yes → AST (check $b_n$ decreasing, $\\to 0$)

**Step 4: Contains factorials or $r^n$?**
- Yes → Ratio Test

**Step 5: Form $(b_n)^n$?**
- Yes → Root Test

**Step 6: Looks like a known series?**
- Yes → Limit Comparison or Direct Comparison

**Step 7: Positive, decreasing, integratable?**
- Yes → Integral Test

> **AP Tip:** This flowchart covers 95%+ of AP exam series. Memorize it.`
    },
    {
      id: 'ct1-mc1',
      type: 'multiple-choice' as const,
      content: '**Test Identification**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n}{n+1}$. Which test resolves this immediately?',
            options: ['Divergence Test', 'Ratio Test', 'Root Test', 'Integral Test'],
            correctAnswer: 0,
            explanation: '$\\lim n/(n+1) = 1 \\neq 0$, so the series diverges by the Divergence Test right away. The Ratio and Root Tests both give $L = 1$ here (inconclusive), and the Integral Test is far more work.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{5}{3^n}$. This is a:',
            options: ['Geometric series with $r = 1/3$, converges', '$p$-series with $p = 3$, converges', 'Geometric series with $r = 3$, diverges', 'Geometric series with $r = 5$, diverges'],
            correctAnswer: 0,
            explanation: '$\\sum 5 \\cdot (1/3)^n$ is geometric with $|r| = 1/3 < 1$, so it converges, to $\\frac{5/3}{1 - 1/3} = \\frac{5}{2}$ (first term $\\frac{5}{3}$ since the sum starts at $n = 1$). The variable is in the exponent, so it is not a $p$-series; reading the base $3$ or the coefficient $5$ as the ratio is the usual slip.'
          },
          {
            question: 'The Divergence Test can NEVER prove:',
            options: ['Convergence', 'Divergence', 'That $a_n \\to 0$', 'Divergence of an alternating series'],
            correctAnswer: 0,
            explanation: '$\\lim a_n = 0$ is necessary but not sufficient for convergence: $\\sum 1/n$ has $1/n \\to 0$ but diverges. The test can prove divergence of any series, alternating or not, whose terms do not approach $0$ (for example $\\sum (-1)^n$).'
          }
        ]
      }
    },
    {
      id: 'ct1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick Test Selection**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{1}{n^{4/3}}$. Best test:',
            options: ['$p$-Series ($p = 4/3 > 1$, converges)', 'Ratio Test ($L = 1$, converges)', 'Divergence Test ($a_n \\to 0$)', 'AST ($b_n \\to 0$, converges)'],
            correctAnswers: ['$p$-Series ($p = 4/3 > 1$, converges)'],
            hints: ['Direct match to $\\sum 1/n^p$ form.'],
            explanation: '$p$-Series with $p = 4/3 > 1$. Converges. The Ratio Test gives $L = 1$ (inconclusive), $a_n \\to 0$ alone never proves convergence, and the series is not alternating, so the AST does not apply.'
          },
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}$. Best test:',
            options: ['AST ($b_n = 1/\\sqrt{n}$ decreases to $0$)', '$p$-Series ($p = 1/2 < 1$, so it diverges)', 'Divergence Test ($a_n \\to 0$, so it converges)', 'Direct Comparison with $\\sum 1/\\sqrt{n}$ (diverges)'],
            correctAnswers: ['AST ($b_n = 1/\\sqrt{n}$ decreases to $0$)'],
            hints: ['Alternating sign with decreasing positive part.'],
            explanation: 'AST: $b_n = 1/\\sqrt{n}$ decreases to $0$. Converges (conditionally, since $\\sum 1/\\sqrt{n}$ diverges). Applying the $p$-test or a comparison test to the alternating series itself is the classic slip: those tests need positive terms, and $a_n \\to 0$ alone never proves convergence.'
          }
        ]
      }
    },
    {
      id: 'ct1-input',
      type: 'input-box' as const,
      content: '**Divergence Test**',
      exercise: {
        question: '$\\sum_{n=1}^{\\infty} \\frac{3n^2 + 1}{5n^2 - 2}$. What is $\\lim_{n \\to \\infty} a_n$? (Enter as a fraction.)',
        correctAnswer: '3/5',
        acceptableAnswers: ['3/5', '0.6'],
        hints: ['Leading terms: $3n^2/5n^2 = 3/5$.'],
        explanation: '$\\lim 3n^2/(5n^2) = 3/5 \\neq 0$. Diverges by Divergence Test.'
      }
    },
    {
      id: 'ct1-summary',
      type: 'text' as const,
      content: `### Summary

- 9 convergence tests, each with specific strengths
- Always start with Divergence Test, then look for known types
- The flowchart guides you to the right test quickly
- Divergence Test proves divergence only, never convergence

> **Next:** Part 2 — Comparison Tests Deep Dive.`
    }
  ]
};
