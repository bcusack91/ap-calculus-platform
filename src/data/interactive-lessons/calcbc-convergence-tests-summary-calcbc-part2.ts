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
            options: ['DCT with $1/2^n$', 'LCT with $1/n$', 'DCT with $1/n$', 'LCT with $1/\\sqrt{n}$'],
            correctAnswer: 0,
            explanation: 'Since $2^n + n > 2^n$, $\\frac{1}{2^n + n} < \\frac{1}{2^n}$, and $\\sum 1/2^n$ converges (geometric). DCT works cleanly. Comparing with $1/n$ or $1/\\sqrt{n}$ uses a divergent series that is larger than the terms, which proves nothing.'
          },
          {
            question: '$\\sum \\frac{n^2 + 3}{n^4 + n + 7}$. Best comparison series for LCT:',
            options: ['$1/n^2$', '$1/n^4$', '$1/n^3$', '$1/n$'],
            correctAnswer: 0,
            explanation: 'Dominant terms: $n^2/n^4 = 1/n^2$. LCT: $\\lim \\frac{n^2+3}{n^4+n+7} \\cdot n^2 = 1$. Since $\\sum 1/n^2$ converges, the series converges.'
          },
          {
            question: 'For LCT, if $\\lim a_n/b_n = 0$:',
            options: ['If $\\sum b_n$ converges, so does $\\sum a_n$', 'Both series converge, or else both series diverge', 'If $\\sum b_n$ diverges, then $\\sum a_n$ diverges too', 'If $\\sum a_n$ converges, then $\\sum b_n$ converges too'],
            correctAnswer: 0,
            explanation: '$L = 0$ means $a_n$ is eventually much smaller than $b_n$. If $\\sum b_n$ converges, $\\sum a_n$ does too. The converse fails: $\\sum a_n$ could converge while $\\sum b_n$ diverges. "Same behavior" is the conclusion only for $0 < L < \\infty$.'
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
            options: ['$\\lim \\ln n/\\sqrt{n} = 0$ and $\\sum 1/n^{3/2}$ converges, so ours converges too', '$\\lim \\ln n/\\sqrt{n} = \\infty$, so this comparison is inconclusive', '$\\lim \\ln n/\\sqrt{n} = 1$, so the two series behave alike', '$\\lim \\ln n/\\sqrt{n} = 0$, so LCT says our series diverges'],
            correctAnswers: ['$\\lim \\ln n/\\sqrt{n} = 0$ and $\\sum 1/n^{3/2}$ converges, so ours converges too'],
            hints: ['$\\ln n$ grows slower than any power of $n$.'],
            explanation: '$\\frac{\\ln n/n^2}{1/n^{3/2}} = \\frac{\\ln n}{\\sqrt{n}} \\to 0$ (logs grow slower than any power). $L = 0$ with a convergent comparison series means our series converges too. A limit of $0$ never signals divergence.'
          },
          {
            label: '$\\sum \\frac{1}{\\sqrt{n^2 + 1}}$. Best comparison for LCT:',
            options: ['$1/n$: limit $1$, so both diverge', '$1/n^2$: limit $1$, so both converge', '$1/\\sqrt{n}$: limit $1$, so both diverge', '$1/(n^2+1)$: limit $1$, so both converge'],
            correctAnswers: ['$1/n$: limit $1$, so both diverge'],
            hints: ['$\\sqrt{n^2+1} \\approx n$ for large $n$.'],
            explanation: '$\\sqrt{n^2+1} \\approx n$, so compare with $1/n$: $\\lim n/\\sqrt{n^2+1} = 1$. $\\sum 1/n$ diverges → our series diverges. Dropping the square root (comparing with $1/n^2$ or $1/(n^2+1)$) is the common slip, and against $1/\\sqrt{n}$ the limit is $0$, not $1$.'
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
