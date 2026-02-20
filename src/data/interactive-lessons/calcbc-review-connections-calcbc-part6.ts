export const calcbcReviewPart6Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev6-intro',
      type: 'text' as const,
      content: `# BC Review

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'rev6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\frac{d}{dx}\\int_0^{x^2} \\sin(t^2)\\,dt = $',
            options: ['$2x\\sin(x^4)$', '$\\sin(x^4)$', '$2x\\sin(x^2)$', '$\\cos(x^4) \\cdot 2x$'],
            correctAnswer: 0,
            explanation: 'FTC + Chain Rule: $\\sin((x^2)^2) \\cdot 2x = 2x\\sin(x^4)$.'
          },
          {
            question: 'The coefficient of $(x-1)^3$ in the Taylor series for $e^x$ about $a = 1$:',
            options: ['$e/6$', '$e/3$', '$1/6$', '$e$'],
            correctAnswer: 0,
            explanation: '$f^{(3)}(1)/3! = e/6$.'
          }
        ]
      }
    },
    {
      id: 'rev6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
