export const calcbcAlternatingPart6Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'as6-intro',
      type: 'text' as const,
      content: `# Alternating Series — Problem-Solving Workshop

**Part 6 of 7 — Mixed Practice**

Work through these problems systematically. For each, identify whether to apply AST, error bound, or classification.

### Warm-Up Review

| Concept | Formula/Rule |
|---------|-------------|
| AST conditions | $b_n > 0$, decreasing, $\\to 0$ |
| Error bound | $|S - S_N| \\le b_{N+1}$ |
| Absolute conv. | $\\sum |a_n|$ converges |
| Conditional conv. | $\\sum a_n$ conv., $\\sum |a_n|$ div. |`
    },
    {
      id: 'as6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=2}^\\infty \\frac{(-1)^n}{n \\ln n}$. Does this converge?',
            options: ['Yes — AST ($b_n$ decreasing, $\\to 0$)', 'No — Ratio Test gives $L = 1$', 'No — Integral Test shows divergence', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$b_n = 1/(n\\ln n)$: positive ✓, decreasing ✓, $\\to 0$ ✓. Converges by AST. (Note: $\\sum 1/(n\\ln n)$ diverges by Integral Test, so this is conditional convergence. A Ratio Test value of $L = 1$ is inconclusive, never a proof of divergence.)'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n 2^n}{n!}$. Classify this series:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent, since $2^n$ grows without bound', 'Inconclusive — $b_n$ is not decreasing at the start'],
            correctAnswer: 0,
            explanation: '$\\sum |a_n| = \\sum 2^n/n!$. Ratio test: $2/(n+1) \\to 0 < 1$. $\\sum |a_n|$ converges, so the series converges absolutely. Although $2^n$ grows, $n!$ grows faster, and $b_n$ only has to decrease eventually ($b_1 = b_2 = 2$, then it decreases).'
          },
          {
            question: 'True or False: If $\\sum (-1)^n a_n$ converges and $a_n > 0$, then $a_n \\to 0$.',
            options: ['True', 'False', 'Only if absolutely convergent', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'If any series $\\sum c_n$ converges, then $c_n \\to 0$ (necessary condition). Since $\\sum (-1)^n a_n$ converges, $(-1)^n a_n \\to 0$, which means $a_n \\to 0$.'
          }
        ]
      }
    },
    {
      id: 'as6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Error Bound Workshop**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{(2n-1)!}$. Error after 3 terms is at most:',
            options: ['$1/7! = 1/5040$', '$1/5! = 1/120$', '$1/9! = 1/362880$', '$1/6! = 1/720$'],
            correctAnswers: ['$1/7! = 1/5040$'],
            hints: ['3 terms: $n=1,2,3$, giving $1/1!$, $1/3!$, $1/5!$. Next term: $n=4$, $b_4 = 1/7!$.'],
            explanation: 'Three terms: $1/1! - 1/3! + 1/5!$. First omitted: $b_4 = 1/(2(4)-1)! = 1/7! = 1/5040$.'
          },
          {
            label: 'For $\\sum_{n=0}^\\infty (-1)^n x^{2n}/(2n)! = \\cos x$, at $x = 0.3$, how many terms ensure error $< 10^{-6}$?',
            options: ['4 terms', '2 terms', '3 terms', '5 terms'],
            correctAnswers: ['4 terms'],
            hints: ['Error after $k$ terms $\\le (0.3)^{2k}/(2k)!$.'],
            explanation: 'After 3 terms: error $\\le 0.3^6/6! = 7.29\\times10^{-4}/720 \\approx 1.01\\times 10^{-6}$, which just barely exceeds $10^{-6}$. After 4 terms: error $\\le 0.3^8/8! \\approx 1.6\\times10^{-9}$ ✓. Need 4 terms.'
          }
        ]
      }
    },
    {
      id: 'as6-input',
      type: 'input-box' as const,
      content: '**Computation Challenge**',
      exercise: {
        question: 'Compute $S_4 = \\sum_{n=1}^{4} \\frac{(-1)^{n+1}}{n} = 1 - 1/2 + 1/3 - 1/4$. Enter as a fraction.',
        correctAnswer: '7/12',
        acceptableAnswers: ['7/12'],
        hints: ['$1 - 1/2 + 1/3 - 1/4 = 12/12 - 6/12 + 4/12 - 3/12$.'],
        explanation: '$S_4 = 12/12 - 6/12 + 4/12 - 3/12 = 7/12 \\approx 0.5833$. Compare: $\\ln 2 \\approx 0.6931$. Error $\\le b_5 = 1/5 = 0.2$.'
      }
    },
    {
      id: 'as6-summary',
      type: 'text' as const,
      content: `### Workshop Takeaways

- Check AST conditions systematically
- Error bound problems: solve $b_{N+1} < \\epsilon$
- Classification: test $\\sum |a_n|$ first
- Factorial denominators converge fast, harmonic-type converge slowly

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
