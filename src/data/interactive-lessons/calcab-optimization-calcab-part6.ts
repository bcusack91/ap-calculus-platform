export const calcabOptimizationPart6Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt6-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 6 of 7 — AP-Style Workshop**

Mixed optimization problems similar to AP free-response questions.`
    },
    {
      id: 'opt6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A rectangle has one side on the x-axis and its upper vertices on $y = 4 - x^2$. What is the maximum area?',
            options: ['$\\frac{32}{3\\sqrt{3}}$', '$\\frac{16\\sqrt{3}}{9}$', '$\\frac{32\\sqrt{3}}{9}$', '$4$'],
            correctAnswer: 2,
            explanation: '$A = 2x(4-x^2) = 8x - 2x^3$. $A\' = 8 - 6x^2 = 0$. $x = \\frac{2}{\\sqrt{3}}$. $A = 2 \\cdot \\frac{2}{\\sqrt{3}}(4 - \\frac{4}{3}) = \\frac{4}{\\sqrt{3}} \\cdot \\frac{8}{3} = \\frac{32}{3\\sqrt{3}} = \\frac{32\\sqrt{3}}{9}$.'
          },
          {
            question: 'Find two positive numbers whose product is 100 and whose sum is minimized.',
            options: ['$10$ and $10$', '$5$ and $20$', '$1$ and $100$', '$25$ and $4$'],
            correctAnswer: 0,
            explanation: '$xy = 100$, minimize $S = x + 100/x$. $S\' = 1 - 100/x^2 = 0$ at $x = 10$. $y = 10$.'
          }
        ]
      }
    },
    {
      id: 'opt6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!
Optimization is all about translating word problems into calculus.`
    }
  ]
};
