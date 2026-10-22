export const calcbcSeriesPart6Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'is6-intro',
      type: 'text' as const,
      content: `# Infinite Series — Problem-Solving Workshop

**Part 6 of 7 — Practice with All Tests**

Work through these problems carefully. For each series, identify the appropriate convergence test, verify hypotheses, and state a conclusion.

### Warm-Up: Test Identification

For each series, think about which test best applies *before* solving.

| Series | Key Feature | Best Test |
|--------|------------|-----------|
| $\\sum n!/n^n$ | Both $n!$ and $n^n$ | Ratio Test |
| $\\sum 1/(n\\sqrt{\\ln n})$ | Continuous, decreasing, positive | Integral Test |
| $\\sum (-1)^n/(2n+1)$ | Alternating, $b_n \\to 0$ | AST |
| $\\sum n/(n^3+1)$ | Behaves like $1/n^2$ | LCT with $1/n^2$ |`
    },
    {
      id: 'is6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^\\infty \\frac{n!}{e^n}$. This series:',
            options: ['Diverges (Ratio Test $L = \\infty$)', 'Converges (Ratio Test gives $L = 1/e < 1$)', 'Converges (comparison with geometric)', 'Cannot be determined by the Ratio Test'],
            correctAnswer: 0,
            explanation: '$|a_{n+1}/a_n| = \\frac{(n+1)!}{e^{n+1}} \\cdot \\frac{e^n}{n!} = (n+1)/e \\to \\infty > 1$. Diverges by Ratio Test. Losing the $(n+1)$ factor gives $1/e$, and $n!$ grows faster than $e^n$, so no geometric comparison works.'
          },
          {
            question: '$\\sum_{n=2}^\\infty \\frac{1}{n(\\ln n)^2}$. This series:',
            options: ['Converges (Integral Test)', 'Diverges (by the Integral Test)', 'Converges ($p$-series with $p = 2$)', 'Diverges (comparison with $1/n$)'],
            correctAnswer: 0,
            explanation: '$\\int_2^\\infty \\frac{dx}{x(\\ln x)^2} = [-1/\\ln x]_2^\\infty = 1/\\ln 2 < \\infty$. Converges by the Integral Test. It is not a $p$-series (the exponent is on $\\ln n$, not $n$), and its terms are smaller than $\\frac{1}{n}$, so comparing with $\\sum \\frac{1}{n}$ proves nothing.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{\\sin(1/n)}{n}$. Which approach works?',
            options: ['LCT with $1/n^2$ (converges)', 'LCT with $1/n$ (series diverges)', 'Ratio Test ($L < 1$, converges)', 'Divergence Test (series diverges)'],
            correctAnswer: 0,
            explanation: '$\\sin(1/n) \\sim 1/n$ for large $n$, so $a_n \\sim 1/n^2$. LCT with $b_n = 1/n^2$: $\\lim \\frac{\\sin(1/n)/n}{1/n^2} = \\lim \\frac{\\sin(1/n)}{1/n} = 1$. Converges. Comparing with $1/n$ gives $L = 0$ against a divergent series (no conclusion), the Ratio Test gives $L = 1$, and the terms go to $0$, so the Divergence Test says nothing.'
          },
          {
            question: '$\\sum_{n=0}^\\infty \\frac{(-3)^n}{(2n+1)!}$. This series:',
            options: ['Converges absolutely (Ratio Test)', 'Converges conditionally (by AST)', 'Diverges (since $3^n$ grows)', 'Inconclusive (Ratio Test)'],
            correctAnswer: 0,
            explanation: '$|a_{n+1}/a_n| = 3/((2n+3)(2n+2)) \\to 0 < 1$, so the Ratio Test is conclusive: the series converges absolutely, which is stronger than conditional convergence. The factorial outgrows $3^n$, so the terms shrink to $0$.'
          }
        ]
      }
    },
    {
      id: 'is6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify Each Series**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^{2/3}}$:',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent (by the $p$-test)'],
            correctAnswers: ['Conditionally convergent'],
            hints: ['$\\sum 1/n^{2/3}$ diverges ($p = 2/3 < 1$), but the series alternates and $1/n^{2/3} \\to 0$.'],
            explanation: '$\\sum 1/n^{2/3}$ diverges ($p$-series, $p < 1$). The alternating series $\\sum (-1)^n/n^{2/3}$ converges by AST. Conditional convergence. The $p$-test with $p = 2/3$ applies only to $\\sum |a_n|$, not to the alternating series itself.'
          },
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^n n}{e^n}$:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent'],
            correctAnswers: ['Absolutely convergent'],
            hints: ['Test $\\sum n/e^n$ with Ratio Test.'],
            explanation: '$\\sum |a_n| = \\sum n/e^n$. Ratio Test: $(n+1)/(en) \\to 1/e < 1$. $\\sum |a_n|$ converges, so the series is absolutely convergent.'
          },
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^n\\, n}{n^2 + 1}$:',
            options: ['Conditionally convergent', 'Divergent ($a_n \\not\\to 0$)', 'Absolutely convergent'],
            correctAnswers: ['Conditionally convergent'],
            hints: ['Compare $\\sum \\frac{n}{n^2+1}$ with $\\sum \\frac{1}{n}$ by the Limit Comparison Test, then check the AST conditions.'],
            explanation: '$\\lvert a_n\\rvert = \\frac{n}{n^2+1}$ and $\\lim \\frac{n/(n^2+1)}{1/n} = \\lim \\frac{n^2}{n^2+1} = 1$, which is finite and positive, so $\\sum \\lvert a_n\\rvert$ diverges by the LCT with the harmonic series. For the AST, $b_n = \\frac{n}{n^2+1} > 0$, $b_n \\to 0$, and $b_n$ is decreasing for $n \\ge 1$ because $\\frac{d}{dx}\\frac{x}{x^2+1} = \\frac{1 - x^2}{(x^2+1)^2} \\le 0$ for $x \\ge 1$. The series converges, but only conditionally. Since $a_n \\to 0$, the nth-term option is false.'
          }
        ]
      }
    },
    {
      id: 'is6-input',
      type: 'input-box' as const,
      content: '**Computation Challenge**',
      exercise: {
        question: 'Find $\\sum_{n=1}^\\infty \\frac{1}{n(n+2)}$ using partial fractions and telescoping. Enter the exact answer as a fraction.',
        correctAnswer: '3/4',
        acceptableAnswers: ['3/4', '0.75'],
        hints: ['$\\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)$. Write out partial sums.'],
        explanation: '$\\frac{1}{n(n+2)} = \\frac{1}{2}(\\frac{1}{n} - \\frac{1}{n+2})$. The partial sum telescopes: $S_N = \\frac{1}{2}(1 + \\frac{1}{2} - \\frac{1}{N+1} - \\frac{1}{N+2}) \\to \\frac{1}{2}(1 + 1/2) = 3/4$.'
      }
    },
    {
      id: 'is6-summary',
      type: 'text' as const,
      content: `### Workshop Takeaways

- Always check $a_n \\to 0$ first (Divergence Test)
- Factorials and exponentials → Ratio Test
- Powers of $n$ → Comparison / $p$-series
- Alternating signs → AST (after verifying $b_n$ is decreasing and $\\to 0$)
- For classification: test $\\sum |a_n|$ first, then $\\sum a_n$

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
