export const calcbcAdvIntegrationPart7Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv7-intro',
      type: 'text' as const,
      content: `# Advanced Integration — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'adv7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int_0^{\\infty} xe^{-x}\\,dx$',
            options: ['$1$', '$0$', '$\\infty$', '$e$'],
            correctAnswer: 0,
            explanation: 'By parts: $u = x, dv = e^{-x}dx$. $= [-xe^{-x}]_0^{\\infty} + \\int_0^{\\infty} e^{-x}dx = 0 + [-e^{-x}]_0^{\\infty} = 0 + 1 = 1$.'
          }
        ]
      }
    },
    {
      id: 'adv7-summary',
      type: 'text' as const,
      content: `### Advanced Integration — Complete! ✅`
    }
  ]
};
