export const calcbcReviewPart4Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev4-intro',
      type: 'text' as const,
      content: `# BC Review

**Part 4 of 7 — Series Convergence Summary**

### Convergence Tests Quick Reference

| Test | Series Form | Converges When |
|------|-------------|----------------|
| Divergence | Any | $a_n \not\to 0$ → diverges |
| Geometric | $ar^n$ | $|r| < 1$ |
| $p$-Series | $1/n^p$ | $p > 1$ |
| Integral | $\sum f(n)$ | $\int f$ converges |
| Comparison | vs. known | Bound above/below |
| Ratio | Any | $L < 1$ converges |
| AST | Alternating | $b_n \to 0$, decreasing |`
    },
    {
      id: 'rev4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Convergence** 🎯',
      exercise: {
        questions: [
          {
            question: 'Best test for $\\sum \\frac{n!}{3^n}$?',
            options: ['Ratio test', 'Integral test', '$p$-series', 'Comparison'],
            correctAnswer: 0,
            explanation: 'Factorials → ratio test. $L = \\lim \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!} = \\lim \\frac{n+1}{3} = \\infty$. Diverges.'
          }
        ]
      }
    },
    {
      id: 'rev4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Factorials → ratio. Powers → comparison/$p$-test. Alternating → AST.`
    }
  ]
};
