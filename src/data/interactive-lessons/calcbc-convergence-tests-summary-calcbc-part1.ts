export const calcbcConvergencePart1Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv1-intro',
      type: 'text' as const,
      content: `# Convergence Tests Summary

**Part 1 of 7 — The Master Chart**

### All Tests at a Glance

| Test | Best For | Conclusion |
|------|----------|-----------|
| Divergence | Quick check | $a_n \not\to 0$ → diverges |
| Geometric | $ar^n$ | $|r|<1$: converges |
| $p$-series | $1/n^p$ | $p>1$: converges |
| Integral | Positive/decreasing | Matches improper integral |
| Comparison | Resembles known series | Bound above/below |
| Limit Comparison | Resembles known | Ratio → finite positive |
| Ratio | Factorials, $n$th powers | $L<1$: conv, $L>1$: div |
| Root | $(\cdot)^n$ | Same as ratio |
| AST | $(-1)^n b_n$ | Decreasing, $b_n \to 0$ |`
    },
    {
      id: 'conv1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Which Test?** 🎯',
      exercise: {
        questions: [
          {
            question: 'Best test for $\\sum \\frac{n!}{5^n}$?',
            options: ['Ratio test', 'Integral test', '$p$-series', 'AST'],
            correctAnswer: 0,
            explanation: 'Factorial in the numerator → use ratio test.'
          },
          {
            question: 'Best test for $\\sum \\frac{1}{n^2 + 3n}$?',
            options: ['Limit comparison with $1/n^2$', 'Ratio test', 'Root test', 'AST'],
            correctAnswer: 0,
            explanation: 'Resembles $1/n^2$. Limit comparison: $\\frac{n^2}{n^2+3n} \\to 1$. Both converge.'
          }
        ]
      }
    },
    {
      id: 'conv1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Always start with the divergence test, then choose the appropriate test.`
    }
  ]
};
