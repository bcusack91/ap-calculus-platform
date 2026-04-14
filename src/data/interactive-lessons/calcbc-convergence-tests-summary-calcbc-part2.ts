export const calcbcConvergencePart2Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'ct2-intro',
      type: 'text' as const,
      content: `# Comparison Tests Deep Dive

**Part 2 of 7 — Direct & Limit Comparison**

### Direct Comparison Test (DCT)

For $0 \\le a_n \\le b_n$ for all $n$ (eventually):

$$\\sum b_n \\text{ converges} \\Rightarrow \\sum a_n \\text{ converges}$$
$$\\sum a_n \\text{ diverges} \\Rightarrow \\sum b_n \\text{ diverges}$$

### Limit Comparison Test (LCT)

For $a_n, b_n > 0$: if $\\lim_{n \\to \\infty} a_n/b_n = L$ where $0 < L < \\infty$, then $\\sum a_n$ and $\\sum b_n$ have the **same behavior**.

### When to Use Which

| Situation | Use |
|-----------|-----|
| Easy to compare term-by-term | DCT |
| Hard to prove $a_n \\le b_n$ directly | LCT |
| Series "looks like" a $p$-series | LCT with $1/n^p$ |

> **Key Fact:** LCT is usually easier on the AP exam because you don't need to prove an inequality — just compute a limit.`
    },
    {
      id: 'ct2-examples',
      type: 'text' as const,
      content: `### LCT Example: $\\sum \\frac{n+1}{n^3 - 5}$

Looks like $1/n^2$ for large $n$. Compare with $b_n = 1/n^2$:

$$\\lim \\frac{(n+1)/(n^3-5)}{1/n^2} = \\lim \\frac{n^2(n+1)}{n^3 - 5} = \\lim \\frac{n^3 + n^2}{n^3 - 5} = 1$$

Since $0 < 1 < \\infty$ and $\\sum 1/n^2$ converges ($p = 2$), $\\sum (n+1)/(n^3-5)$ converges.

### DCT Example: $\\sum \\frac{\\sin^2 n}{n^2}$

$0 \\le \\sin^2 n \\le 1$, so $0 \\le \\sin^2 n/n^2 \\le 1/n^2$.

$\\sum 1/n^2$ converges → $\\sum \\sin^2 n/n^2$ converges by DCT.

### DCT Example: $\\sum \\frac{1}{n - \\ln n}$

For large $n$: $n - \\ln n < n$, so $1/(n - \\ln n) > 1/n$.

Since $\\sum 1/n$ diverges and our series is term-by-term larger, $\\sum 1/(n - \\ln n)$ diverges by DCT.

> **AP Tip:** For LCT, pick the comparison series by looking at the **dominant terms** in numerator and denominator.`
    },
    {
      id: 'ct2-mc1',
      type: 'multiple-choice' as const,
      content: '**Comparison Practice**',
      exercise: {
        questions: [
          {
            question: '$\\sum \\frac{1}{2^n + n}$. Best comparison:',
            options: ['DCT with $1/2^n$: since $2^n + n > 2^n$, $1/(2^n+n) < 1/2^n$. Converges.', 'LCT with $1/n$', 'Integral Test', 'AST'],
            correctAnswer: 0,
            explanation: '$1/(2^n + n) < 1/2^n$ and $\\sum 1/2^n$ converges (geometric). DCT works cleanly.'
          },
          {
            question: '$\\sum \\frac{n^2 + 3}{n^4 + n + 7}$. Best comparison series for LCT:',
            options: ['$1/n^2$ (dominant terms: $n^2/n^4 = 1/n^2$)', '$1/n^4$', '$1/n^3$', '$1/n$'],
            correctAnswer: 0,
            explanation: 'Dominant: $n^2/n^4 = 1/n^2$. LCT: $\\lim (n^2+3)/(n^4+n+7) \\cdot n^2 = 1$. Converges.'
          },
          {
            question: 'For LCT, if $\\lim a_n/b_n = 0$:',
            options: ['If $\\sum b_n$ converges, $\\sum a_n$ converges (but not vice versa)', 'Both have same behavior', '$\\sum a_n$ diverges', 'Test is inconclusive'],
            correctAnswer: 0,
            explanation: '$L = 0$ means $a_n$ is much smaller than $b_n$. If $b_n$ converges, $a_n$ does too. But $a_n$ could converge while $b_n$ diverges.'
          }
        ]
      }
    },
    {
      id: 'ct2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Comparison Selection**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum \\frac{\\ln n}{n^2}$. Compare with $1/n^{3/2}$ using LCT:',
            options: ['$\\lim (\\ln n /n^2)/(1/n^{3/2}) = \\lim \\ln n / \\sqrt{n} = 0$. Since $\\sum 1/n^{3/2}$ converges, so does ours.', '$\\lim = \\infty$, inconclusive', '$\\lim = 1$, same behavior', 'Cannot use LCT here'],
            correctAnswers: ['$\\lim (\\ln n /n^2)/(1/n^{3/2}) = \\lim \\ln n / \\sqrt{n} = 0$. Since $\\sum 1/n^{3/2}$ converges, so does ours.'],
            hints: ['$\\ln n$ grows slower than any power of $n$.'],
            explanation: '$\\ln n/\\sqrt{n} \\to 0$. $L = 0$ with convergent comparison → our series converges.'
          },
          {
            label: '$\\sum \\frac{1}{\\sqrt{n^2 + 1}}$. Best comparison for LCT:',
            options: ['$1/n$ ($\\sqrt{n^2+1} \\approx n$). Limit $= 1$, same behavior: diverges.', '$1/n^2$, converges', '$1/\\sqrt{n}$, diverges', '$1/n^3$'],
            correctAnswers: ['$1/n$ ($\\sqrt{n^2+1} \\approx n$). Limit $= 1$, same behavior: diverges.'],
            hints: ['$\\sqrt{n^2+1} \\approx n$ for large $n$.'],
            explanation: '$\\lim n/\\sqrt{n^2+1} = 1$. $\\sum 1/n$ diverges → our series diverges.'
          }
        ]
      }
    },
    {
      id: 'ct2-input',
      type: 'input-box' as const,
      content: '**LCT Limit**',
      exercise: {
        question: 'Compute $\\lim_{n \\to \\infty} \\frac{(2n+3)/(n^3+1)}{1/n^2}$ for an LCT with $\\sum (2n+3)/(n^3+1)$.',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: ['$(2n+3)/(n^3+1) \\cdot n^2 = n^2(2n+3)/(n^3+1) = (2n^3+3n^2)/(n^3+1)$.'],
        explanation: '$\\lim (2n^3+3n^2)/(n^3+1) = 2$. Since $0 < 2 < \\infty$ and $\\sum 1/n^2$ converges, $\\sum (2n+3)/(n^3+1)$ converges.'
      }
    },
    {
      id: 'ct2-summary',
      type: 'text' as const,
      content: `### Summary

- DCT: prove $a_n \\le b_n$ directly; used when comparison is obvious
- LCT: compute $\\lim a_n/b_n$; easier, more flexible
- Pick comparison by looking at dominant terms
- $L = 0$ or $L = \\infty$: partial results (one direction only)
- $0 < L < \\infty$: both series have same behavior

> **Next:** Part 3 — Integral Test and Unusual Series.`
    }
  ]
};
