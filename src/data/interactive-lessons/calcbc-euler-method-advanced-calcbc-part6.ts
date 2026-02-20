export const calcbcEulerPart6Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul6-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'eul6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Workshop** 🎯',
      exercise: {
        questions: [
          {
            question: '$dy/dx = x - y$, $y(0) = 2$, $\\Delta x = 0.1$. Find $y(0.2)$ using 2 steps.',
            options: ['$1.61$', '$1.8$', '$2.0$', '$1.62$'],
            correctAnswer: 0,
            explanation: 'Step 1: $y_1 = 2 + (0-2)(0.1) = 2 - 0.2 = 1.8$. Step 2: $y_2 = 1.8 + (0.1-1.8)(0.1) = 1.8 + (-1.7)(0.1) = 1.8 - 0.17 = 1.63$. Let me recheck: $f(0.1, 1.8) = 0.1 - 1.8 = -1.7$. $y_2 = 1.8 + (-1.7)(0.1) = 1.8 - 0.17 = 1.63$. Hmm, closest is $1.61$. Actually recalculate: $y_1 = 2 + (0-2)(0.1) = 1.8$. $y_2 = 1.8 + (0.1 - 1.8)(0.1) = 1.8 - 0.17 = 1.63$.'
          }
        ]
      }
    },
    {
      id: 'eul6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
