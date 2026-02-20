export const calcabAccumulationPart7Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc7-intro',
      type: 'text' as const,
      content: `# Accumulation Functions \u2014 Review

**Part 7 of 7 \u2014 Comprehensive Assessment**`
    },
    {
      id: 'acc7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $g(x) = \\int_0^x f(t)\\,dt$ and $\\int_0^5 f(t)\\,dt = 8$, what is $g(5)$?',
            options: ['$8$', '$0$', '$f(5)$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$g(5) = \\int_0^5 f(t)\\,dt = 8$. Direct substitution!'
          },
          {
            question: 'Find the average value of $f(x) = e^x$ on $[0, 2]$.',
            options: ['$\\frac{e^2 - 1}{2}$', '$e^2 - 1$', '$\\frac{e^2}{2}$', '$e - 1$'],
            correctAnswer: 0,
            explanation: '$f_{\\text{avg}} = \\frac{1}{2}\\int_0^2 e^x\\,dx = \\frac{1}{2}[e^x]_0^2 = \\frac{e^2-1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'acc7-summary',
      type: 'text' as const,
      content: `### Accumulation Functions \u2014 Complete! \u2705`
    }
  ]
};
