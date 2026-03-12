export const calcbcSeriesPart6Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser6-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'ser6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Series Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{2^n}{n^2}$:',
            options: ['Diverges (ratio test: $L = 2$)', 'Converges', 'Need comparison', 'Inconclusive'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\frac{2^{n+1}/(n+1)^2}{2^n/n^2} = 2 \\cdot \\frac{n^2}{(n+1)^2} \\to 2 > 1$. Diverges.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{1}{3^n + n}$:',
            options: ['Converges', 'Diverges', 'Inconclusive', 'Need integral test'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{3^n + n} < \\frac{1}{3^n}$ and $\\sum 1/3^n$ is a convergent geometric series. Converges by comparison.'
          }
        ]
      }
    },
    {
      id: 'ser6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
