export const calcbcConvergencePart2Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'ct2-intro',
      type: 'text' as const,
      content: `# Comparison Tests: Choosing and Justifying

**Part 2 of 7 — Direct & Limit Comparison**

The Direct Comparison Test (DCT) and the Limit Comparison Test (LCT) are taught in Infinite Series, Part 2. This part is about the two decisions that cost points on the exam: **which series to compare with**, and **what to write** so the comparison earns credit.

### The Two Tests in One Line Each

- **DCT:** if $0 \\le a_n \\le b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges. If $0 \\le b_n \\le a_n$ and $\\sum b_n$ diverges, then $\\sum a_n$ diverges.
- **LCT:** if $a_n, b_n > 0$ and $\\lim_{n \\to \\infty} a_n/b_n = L$ with $0 < L < \\infty$, then the two series both converge or both diverge.

### Choosing the Comparison Series

| What you see in $a_n$ | Compare with | Usually by |
|-----------|-----|-----|
| Polynomials or roots of $n$ | $1/n^p$ built from the dominant terms | LCT |
| A bounded factor such as $\\sin^2 n$ | $1/n^p$, with the factor replaced by its bound | DCT |
| $2^n$ or $3^n$ plus extra terms in a denominator | The geometric series | DCT or LCT |
| A DCT inequality that points the wrong way | The same comparison series | Switch to LCT |

**Dominant-term rule:** keep the highest power of $n$ in the numerator and in the denominator. For $\\frac{n+1}{n^3-5}$ that gives $\\frac{n}{n^3} = \\frac{1}{n^2}$.

> **Key Fact:** The DCT needs the inequality in the useful direction: smaller than a convergent series, or larger than a divergent one. Smaller than a DIVERGENT series proves nothing. When the inequality is hard to get, use the LCT and compute a limit instead.`
    },
    {
      id: 'ct2-examples',
      type: 'text' as const,
      content: `### What a Full-Credit Justification States

**LCT write-up:** (1) state that the terms are positive, (2) compute the limit and state $0 < L < \\infty$, (3) name the comparison series and why it converges or diverges, (4) conclude and name the test.

**Model:** $\\sum_{n=2}^{\\infty} \\frac{n+1}{n^3-5}$. For $n \\ge 2$ the terms are positive. With $b_n = \\frac{1}{n^2}$,

$$\\lim_{n \\to \\infty} \\frac{(n+1)/(n^3-5)}{1/n^2} = \\lim_{n \\to \\infty} \\frac{n^3 + n^2}{n^3 - 5} = 1, \\quad 0 < 1 < \\infty.$$

Since $\\sum \\frac{1}{n^2}$ converges ($p$-series, $p = 2 > 1$), $\\sum \\frac{n+1}{n^3-5}$ converges by the Limit Comparison Test.

**DCT write-up:** state the inequality with both sides nonnegative, name the comparison series and its behavior, and conclude.

**Model:** $\\sum \\frac{\\sin^2 n}{n^2}$. For all $n \\ge 1$, $0 \\le \\frac{\\sin^2 n}{n^2} \\le \\frac{1}{n^2}$. Since $\\sum \\frac{1}{n^2}$ converges ($p = 2 > 1$), the series converges by the Direct Comparison Test.

**Model (divergence):** $\\sum_{n=2}^{\\infty} \\frac{1}{n - \\ln n}$. For $n \\ge 2$, $0 < n - \\ln n < n$, so $\\frac{1}{n - \\ln n} > \\frac{1}{n} > 0$. Since $\\sum \\frac{1}{n}$ diverges (harmonic series), the series diverges by the Direct Comparison Test.

### Justification Errors That Lose the Point

| Error | Fix |
|-------|-----|
| "$a_n < \\frac{1}{n}$, so it converges" | Smaller than a divergent series proves nothing; use the LCT |
| Limit computed, but $0 < L < \\infty$ never stated | Write the inequality explicitly |
| Comparison series named without its behavior | Give the reason: $p$-value or common ratio |
| "Behaves like $\\frac{1}{n^2}$" with no test carried out | Do the LCT; "behaves like" earns nothing |`
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
            question: 'A student writes: "$0 < \\frac{1}{n^2+5} < \\frac{1}{n^2}$ for all $n \\ge 1$, so $\\sum \\frac{1}{n^2+5}$ converges." What is still missing for full credit?',
            options: ['A reason for the behavior of $\\sum \\frac{1}{n^2}$, plus the test name', 'A limit $L$ with $0 < L < \\infty$ from the Limit Comparison Test', 'A check that the terms decrease to $0$, as in the AST', 'Nothing more, since the inequality itself is correct'],
            correctAnswer: 0,
            explanation: 'A comparison is only as good as what is known about the comparison series: say that $\\sum \\frac{1}{n^2}$ converges because it is a $p$-series with $p = 2 > 1$, then conclude "by the Direct Comparison Test". A limit is needed only for the LCT, and the decreasing check belongs to the AST and the Integral Test.'
          },
          {
            question: 'For positive terms, $\\lim a_n/b_n = 5$ and the partial sums of $\\sum b_n$ grow without bound. By LCT:',
            options: ['$\\sum a_n$ converges, with sum $5\\sum b_n$', 'The series $\\sum a_n$ also diverges', 'The test gives no conclusion here', 'The series $\\sum a_n$ converges'],
            correctAnswer: 1,
            explanation: 'A finite positive limit ($0 < 5 < \\infty$) means the two series behave alike, so $\\sum a_n$ diverges with $\\sum b_n$. LCT never gives a sum, and it does give a conclusion whenever the limit is finite and positive.'
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
            label: '$\\sum \\frac{\\sqrt{n}}{n^2 + 1}$. Compare with $1/n^{3/2}$ using LCT:',
            options: ['$\\lim \\frac{n^2}{n^2+1} = 1$ and $\\sum 1/n^{3/2}$ converges, so ours converges too', '$\\lim \\frac{n^2}{n^2+1} = \\infty$, so this comparison is inconclusive', '$\\lim \\frac{n^2}{n^2+1} = 1$, but $\\sum 1/n^{3/2}$ diverges, so ours diverges too', '$\\lim \\frac{n^2}{n^2+1} = 0$, so LCT says that our series must diverge as well'],
            correctAnswers: ['$\\lim \\frac{n^2}{n^2+1} = 1$ and $\\sum 1/n^{3/2}$ converges, so ours converges too'],
            hints: ['Divide: $\\frac{\\sqrt{n}}{n^2+1} \\cdot n^{3/2} = \\frac{n^2}{n^2+1}$.'],
            explanation: '$\\frac{\\sqrt{n}/(n^2+1)}{1/n^{3/2}} = \\frac{n^2}{n^2+1} \\to 1$. Since $0 < 1 < \\infty$ and $\\sum 1/n^{3/2}$ is a convergent $p$-series ($p = \\frac{3}{2} > 1$), our series converges. A limit of $1$ means the series share the behavior of the comparison series, which converges here.'
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

- Pick the comparison series from the dominant terms; a bounded factor suggests the DCT
- DCT: positive terms, and the inequality must point the useful way
- LCT: positive terms, compute $L$, and write $0 < L < \\infty$
- Always say why the comparison series converges or diverges, and name the test
- If the limit is $0$ or $\\infty$, choose a comparison series that matches the dominant terms

> **Next:** Part 3 — The Integral Test: when to use it and what to write.`
    }
  ]
};
