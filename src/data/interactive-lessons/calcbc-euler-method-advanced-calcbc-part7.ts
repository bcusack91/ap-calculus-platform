export const calcbcEulerPart7Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul7-intro',
      type: 'text' as const,
      content: `# Euler's Method — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'eul7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final** 🎯',
      exercise: {
        questions: [
          {
            question: '$dy/dx = 1/y$, $y(0) = 1$, $\\Delta x = 1$. Find $y(1)$.',
            options: ['$2$', '$1$', '$e$', '$\\sqrt{2}$'],
            correctAnswer: 0,
            explanation: '$y_1 = 1 + (1/1)(1) = 2$. (Exact: $y = \\sqrt{2x+1}$, $y(1) = \\sqrt{3} \\approx 1.732$.)'
          }
        ]
      }
    },
    {
      id: 'eul7-summary',
      type: 'text' as const,
      content: `### Euler's Method — Complete! ✅`
    }
  ]
};
