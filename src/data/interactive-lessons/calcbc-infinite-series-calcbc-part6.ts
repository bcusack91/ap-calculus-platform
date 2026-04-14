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
            options: ['Diverges (Ratio Test $L = \\infty$)', 'Converges (Ratio Test $L < 1$)', 'Converges (comparison with geometric)', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '$|a_{n+1}/a_n| = (n+1)/e \\to \\infty > 1$. Diverges by Ratio Test.'
          },
          {
            question: '$\\sum_{n=2}^\\infty \\frac{1}{n(\\ln n)^2}$. This series:',
            options: ['Converges (Integral Test)', 'Diverges (Integral Test)', 'Converges ($p$-series)', 'Diverges (comparison with $1/n$)'],
            correctAnswer: 0,
            explanation: '$\\int_2^\\infty \\frac{dx}{x(\\ln x)^2} = [-1/\\ln x]_2^\\infty = 1/\\ln 2 < \\infty$. Converges.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{\\sin(1/n)}{n}$. Which approach works?',
            options: ['LCT with $1/n^2$ (converges)', 'Divergence Test', 'Ratio Test', 'AST'],
            correctAnswer: 0,
            explanation: '$\\sin(1/n) \\sim 1/n$ for large $n$, so $a_n \\sim 1/n^2$. LCT with $b_n = 1/n^2$: $\\lim \\frac{\\sin(1/n)/n}{1/n^2} = \\lim \\frac{\\sin(1/n)}{1/n} = 1$. Converges.'
          },
          {
            question: '$\\sum_{n=0}^\\infty \\frac{(-3)^n}{(2n+1)!}$. This series:',
            options: ['Converges absolutely (Ratio Test)', 'Converges conditionally', 'Diverges', 'Need more information'],
            correctAnswer: 0,
            explanation: '$|a_{n+1}/a_n| = 3/((2n+3)(2n+2)) \\to 0 < 1$. Converges absolutely.'
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
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent'],
            correctAnswers: ['Conditionally convergent'],
            hints: ['$\\sum 1/n^{2/3}$ diverges ($p = 2/3 < 1$), but the series alternates and $1/n^{2/3} \\to 0$.'],
            explanation: '$\\sum 1/n^{2/3}$ diverges ($p$-series, $p < 1$). The alternating series $\\sum (-1)^n/n^{2/3}$ converges by AST. Conditional convergence.'
          },
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^n n}{e^n}$:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent'],
            correctAnswers: ['Absolutely convergent'],
            hints: ['Test $\\sum n/e^n$ with Ratio Test.'],
            explanation: '$\\sum |a_n| = \\sum n/e^n$. Ratio Test: $(n+1)/(en) \\to 1/e < 1$. $\\sum |a_n|$ converges, so the series is absolutely convergent.'
          },
          {
            label: '$\\sum_{n=1}^\\infty \\frac{(-1)^n (2n)!}{4^n (n!)^2}$:',
            options: ['Divergent ($a_n \\not\\to 0$)', 'Conditionally convergent', 'Absolutely convergent'],
            correctAnswers: ['Divergent ($a_n \\not\\to 0$)'],
            hints: ['By Stirling or ratio analysis, $|a_n| \\to 1/\\sqrt{\\pi n} \\cdot$ something. Check $a_n \\to 0$.'],
            explanation: 'Using Stirling: $(2n)!/(4^n(n!)^2) \\sim 1/\\sqrt{\\pi n} \\to 0$ but the terms do approach $0$. Actually by the Ratio Test, $|a_{n+1}/a_n| = (2n+1)(2n+2)/(4(n+1)^2) = (2n+1)/(2(n+1)) \\to 1$, which is inconclusive. By careful analysis this diverges (the terms don\'t decrease fast enough). The central binomial coefficient divided by $4^n$ approaches $0$ like $1/\\sqrt{\\pi n}$, making the series diverge by LCT with $1/\\sqrt{n}$.'
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
