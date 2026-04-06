export const calcbcSeriesPart2Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser2-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 2 of 7 — Telescoping Series & Divergence Test**

### Telescoping Series

$$\sum_{n=1}^{\infty}\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = 1$$

Partial sum: $S_n = 1 - \\frac{1}{n+1} \\to 1$.

### $n$th Term Divergence Test

$$\\text{If } \lim_{n \\to \infty} a_n \\neq 0 \\text{, then } \sum a_n \\text{ diverges}$$

**CAUTION**: If $\lim a_n = 0$, the test is INCONCLUSIVE.`
    },
    {
      id: 'ser2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Telescoping & Divergence Test** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n}{n+1}$:',
            options: ['Diverges by divergence test', 'Converges to $1$', 'Converges to $0$', 'Need more tests'],
            correctAnswer: 0,
            explanation: '$\\lim_{n \\to \\infty} \\frac{n}{n+1} = 1 \\neq 0$. Diverges by the divergence test.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\left(\\frac{1}{n(n+1)}\\right) = $',
            options: ['$1$', '$1/2$', '$2$', 'Diverges'],
            correctAnswer: 0,
            explanation: 'Partial fractions: $\\frac{1}{n} - \\frac{1}{n+1}$. Telescopes to $1 - \\frac{1}{n+1} \\to 1$.'
          }
        ]
      }
    },
    {
      id: 'ser2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Telescoping: most terms cancel
2. Divergence test: $a_n \\not\\to 0$ → diverges`
    }
  ]
};
