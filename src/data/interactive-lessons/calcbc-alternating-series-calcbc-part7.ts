export const calcbcAlternatingPart7Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt7-intro',
      type: 'text' as const,
      content: `# Alternating Series — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'alt7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{2n-1} = 1 - 1/3 + 1/5 - 1/7 + \\cdots$. This equals:',
            options: ['$\\pi/4$', '$\\ln 2$', '$\\pi/2$', '$1$'],
            correctAnswer: 0,
            explanation: 'This is the Leibniz formula: $\\arctan(1) = \\pi/4$.'
          },
          {
            question: 'Using $S_5$ of this series, the error is at most:',
            options: ['$1/11$', '$1/9$', '$1/13$', '$1/7$'],
            correctAnswer: 0,
            explanation: '$S_5 = 1 - 1/3 + 1/5 - 1/7 + 1/9$. First omitted: $b_6 = 1/11$.'
          }
        ]
      }
    },
    {
      id: 'alt7-summary',
      type: 'text' as const,
      content: `### Alternating Series — Complete! ✅`
    }
  ]
};
