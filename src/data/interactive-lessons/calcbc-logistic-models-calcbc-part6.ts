export const calcbcLogisticPart6Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log6-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'log6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Workshop** 🎯',
      exercise: {
        questions: [
          {
            question: '$P(t) = \\frac{600}{1 + 29e^{-0.4t}}$. Find $P(0)$ and $L$.',
            options: ['$P(0) = 20$, $L = 600$', '$P(0) = 600$, $L = 29$', '$P(0) = 29$, $L = 600$', '$P(0) = 30$, $L = 600$'],
            correctAnswer: 0,
            explanation: '$P(0) = 600/(1+29) = 600/30 = 20$. $L = 600$.'
          }
        ]
      }
    },
    {
      id: 'log6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
