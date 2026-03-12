export const calcbcLogisticPart7Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log7-intro',
      type: 'text' as const,
      content: `# Logistic Models — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'log7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final** 🎯',
      exercise: {
        questions: [
          {
            question: 'A population satisfies $dP/dt = 2P - 0.004P^2$. What is the maximum growth rate?',
            options: ['$250$', '$500$', '$1000$', '$2$'],
            correctAnswer: 0,
            explanation: '$k = 2$, $L = 2/0.004 = 500$. Max rate at $P = 250$: $2(250)(1 - 250/500) = 500(0.5) = 250$.'
          }
        ]
      }
    },
    {
      id: 'log7-summary',
      type: 'text' as const,
      content: `### Logistic Models — Complete! ✅`
    }
  ]
};
