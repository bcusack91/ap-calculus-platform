export const calcbcSeriesPart4Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser4-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 4 of 7 — Comparison Tests**

### Direct Comparison Test

For $0 \leq a_n \leq b_n$:
- $\sum b_n$ converges → $\sum a_n$ converges
- $\sum a_n$ diverges → $\sum b_n$ diverges

### Limit Comparison Test

If $\lim_{n \\to \infty} \\frac{a_n}{b_n} = c$ where $0 < c < \infty$:

$\sum a_n$ and $\sum b_n$ either both converge or both diverge.`
    },
    {
      id: 'ser4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comparison Tests** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 1}$ converge?',
            options: ['Yes, by comparison with $1/n^2$', 'No', 'Need ratio test', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{n^2+1} < \\frac{1}{n^2}$ and $\\sum 1/n^2$ converges ($p = 2$). By direct comparison, converges.'
          },
          {
            question: 'Use limit comparison to determine if $\\sum \\frac{3n+1}{n^3-2}$ converges.',
            options: ['Converges (compare with $3/n^2$)', 'Diverges', 'Compare with $1/n$', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$\\lim \\frac{(3n+1)/(n^3-2)}{1/n^2} = \\lim \\frac{n^2(3n+1)}{n^3-2} = 3$. Since $\\sum 1/n^2$ converges, so does our series.'
          }
        ]
      }
    },
    {
      id: 'ser4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Direct comparison needs inequality. Limit comparison just needs the ratio limit.`
    }
  ]
};
