export const calcbcPowerSeriesPart7Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow7-intro',
      type: 'text' as const,
      content: `# Power Series — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'pow7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the power series for $\\arctan x$.',
            options: ['$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{2n+1}$', '$\\sum_{n=0}^{\\infty} \\frac{x^{2n+1}}{2n+1}$', '$\\sum_{n=0}^{\\infty} (-1)^n x^{2n}$', '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n x^n}{n}$'],
            correctAnswer: 0,
            explanation: 'Integrate $\\frac{1}{1+x^2} = \\sum (-1)^n x^{2n}$: $\\arctan x = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$.'
          }
        ]
      }
    },
    {
      id: 'pow7-summary',
      type: 'text' as const,
      content: `### Power Series — Complete! ✅`
    }
  ]
};
