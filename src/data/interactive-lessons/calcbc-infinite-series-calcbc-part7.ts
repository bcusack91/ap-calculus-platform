export const calcbcSeriesPart7Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser7-intro',
      type: 'text' as const,
      content: `# Infinite Series — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'ser7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=0}^{\\infty} \\frac{5 \\cdot 2^n}{3^n} = $',
            options: ['$15$', '$10$', '$5/3$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$\\sum 5(2/3)^n = \\frac{5}{1 - 2/3} = \\frac{5}{1/3} = 15$.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n^2}{e^n}$:',
            options: ['Converges', 'Diverges', 'Inconclusive', 'Oscillates'],
            correctAnswer: 0,
            explanation: 'Ratio test: $\\frac{(n+1)^2/e^{n+1}}{n^2/e^n} = \\frac{(n+1)^2}{en^2} \\to 1/e < 1$. Converges.'
          }
        ]
      }
    },
    {
      id: 'ser7-summary',
      type: 'text' as const,
      content: `### Infinite Series — Complete! ✅`
    }
  ]
};
