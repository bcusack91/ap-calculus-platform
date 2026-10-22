export const calcbcAlternatingPart3Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'as3-intro',
      type: 'text' as const,
      content: `# Alternating Series — Absolute vs. Conditional Convergence

**Part 3 of 7 — Classification of Alternating Series**

### Review of Definitions

| Classification | Meaning |
|---------------|---------|
| **Absolutely convergent** | $\\sum \\lvert a_n\\rvert$ converges |
| **Conditionally convergent** | $\\sum a_n$ converges but $\\sum \\lvert a_n\\rvert$ diverges |

### Classification Procedure for Alternating Series

**Step 1:** Compute $\\sum |a_n| = \\sum b_n$ (remove the $(-1)^n$ factor).

**Step 2:** If $\\sum b_n$ converges → **absolutely convergent** (done).

**Step 3:** If $\\sum b_n$ diverges → check AST conditions on original series.
- If AST conditions met → **conditionally convergent**
- If AST fails → **divergent**

### The Four Essential Examples

| Series | $\\sum \\lvert a_n\\rvert$ | $\\sum a_n$ | Classification |
|--------|-------------|-----------|---------------|
| $\\sum (-1)^n/n^2$ | $\\sum 1/n^2$ conv. ($p=2$) | Converges | **Absolute** |
| $\\sum (-1)^n/n$ | $\\sum 1/n$ div. | AST works → conv. | **Conditional** |
| $\\sum (-1)^n/\\sqrt{n}$ | $\\sum 1/\\sqrt{n}$ div. ($p=1/2$) | AST works → conv. | **Conditional** |
| $\\sum (-1)^n \\cdot n/(n+1)$ | Diverges | $a_n \\not\\to 0$ → div. | **Divergent** |`
    },
    {
      id: 'as3-endpoints',
      type: 'text' as const,
      content: `### Connection to Interval of Convergence

This classification matters most at **endpoints** of intervals of convergence for power series.

**Example:** $\\sum_{n=1}^\\infty \\frac{x^n}{n}$

Ratio test: $|x| < 1$ → converges. At the endpoints:
- $x = 1$: $\\sum 1/n$ diverges
- $x = -1$: $\\sum (-1)^n/n$ converges (conditionally)

So the interval of convergence is $[-1, 1)$.

$$\\boxed{\\text{At endpoints, alternating series often converge conditionally while the positive version diverges.}}$$

> **AP Tip:** When finding intervals of convergence, ALWAYS test endpoints separately. Expect at least one endpoint to involve an alternating series.`
    },
    {
      id: 'as3-mc1',
      type: 'multiple-choice' as const,
      content: '**Classification Practice**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^{3/4}}$ is:',
            options: ['Conditionally convergent', 'Absolutely convergent, since $b_n \\to 0$', 'Divergent by the $p$-series test', 'Cannot determine — the Ratio Test gives $L = 1$'],
            correctAnswer: 0,
            explanation: '$\\sum 1/n^{3/4}$ diverges ($p = 3/4 < 1$), so the series is not absolutely convergent — and $b_n \\to 0$ never proves absolute convergence. The $p$-test applies to $\\sum |a_n|$, not to the alternating series itself. AST: $b_n = 1/n^{3/4}$ is positive, decreasing, $\\to 0$, so the series converges. An inconclusive Ratio Test just means another test is needed. Converges conditionally.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2 + n}$ is:',
            options: ['Absolutely convergent', 'Conditionally convergent by AST', 'Divergent by comparison with $\\sum 1/n$', 'Inconclusive — the Ratio Test gives $L = 1$'],
            correctAnswer: 0,
            explanation: '$|a_n| = 1/(n^2+n) < 1/n^2$. Since $\\sum 1/n^2$ converges, $\\sum |a_n|$ converges by DCT. Absolute convergence. (AST alone would only show convergence; being smaller than the divergent $\\sum 1/n$ proves nothing; and an inconclusive Ratio Test just means another test is needed.)'
          },
          {
            question: 'Which statement about a series $\\sum a_n$ is always TRUE?',
            options: ['If $\\sum |a_n|$ converges, then $\\sum a_n$ converges', 'If $\\sum a_n$ converges, then $\\sum |a_n|$ converges', 'If $a_n \\to 0$, then $\\sum a_n$ converges', 'If $\\sum |a_n|$ diverges, then $\\sum a_n$ diverges'],
            correctAnswer: 0,
            explanation: 'Absolute convergence implies convergence. The converse fails: $\\sum (-1)^n/n$ converges while $\\sum 1/n$ diverges, which also shows that a divergent $\\sum |a_n|$ does not force $\\sum a_n$ to diverge. And $a_n \\to 0$ is necessary but not sufficient, as the harmonic series shows.'
          }
        ]
      }
    },
    {
      id: 'as3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Endpoint Classification**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\sum n x^n /2^n$, at $x = -2$: $\\sum (-1)^n n$. This:',
            options: ['Diverges ($a_n \\not\\to 0$)', 'Converges conditionally by AST', 'Converges absolutely by the Ratio Test'],
            correctAnswers: ['Diverges ($a_n \\not\\to 0$)'],
            hints: ['What is $\\lim_{n\\to\\infty} (-1)^n n$?'],
            explanation: '$|a_n| = n \\to \\infty$. The terms don\'t approach $0$. Diverges by Divergence Test.'
          },
          {
            label: 'For $\\sum x^n/(n \\cdot 3^n)$, at $x = -3$: $\\sum (-1)^n/n$. This:',
            options: ['Converges conditionally', 'Converges absolutely, since $1/n \\to 0$', 'Diverges, since $\\sum 1/n$ diverges'],
            correctAnswers: ['Converges conditionally'],
            hints: ['This is the alternating harmonic series.'],
            explanation: 'At $x=-3$: $\\sum (-1)^n/n$ = alternating harmonic, which converges by AST but $\\sum 1/n$ diverges. Conditional convergence.'
          }
        ]
      }
    },
    {
      id: 'as3-input',
      type: 'input-box' as const,
      content: '**Classification Challenge**',
      exercise: {
        question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^p}$ converges conditionally when $0 < p \\le k$. What is $k$? (Enter a whole number.)',
        correctAnswer: '1',
        acceptableAnswers: ['1'],
        hints: ['For conditional convergence, $\\sum 1/n^p$ must diverge ($p \\le 1$) while AST works ($b_n \\to 0$, which holds for $p > 0$).'],
        explanation: '$\\sum 1/n^p$ diverges when $p \\le 1$. AST applies when $p > 0$ (positive, decreasing, $\\to 0$). So conditional convergence occurs for $0 < p \\le 1$, meaning $k = 1$.'
      }
    },
    {
      id: 'as3-summary',
      type: 'text' as const,
      content: `### Summary

- Test $\\sum |a_n|$ first; if it converges, you have absolute convergence
- If $\\sum |a_n|$ diverges but $\\sum a_n$ converges (via AST), it's conditional
- Endpoint testing for power series frequently involves this classification
- $\\sum (-1)^n/n^p$: absolute if $p > 1$, conditional if $0 < p \\le 1$

> **Next:** Part 4 — Alternating Series and Taylor Polynomials.`
    }
  ]
};
