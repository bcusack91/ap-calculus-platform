export const calcbcSequencesPart6Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq6-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'seq6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\lim_{n \\to \\infty} \\left(1 + \\frac{3}{n}\\right)^n$:',
            options: ['$e^3$', '$3$', '$e$', '$\\infty$'],
            correctAnswer: 0,
            explanation: 'This is the form $\\lim(1 + k/n)^n = e^k$. Here $k = 3$, so the limit is $e^3$.'
          },
          {
            question: '$\\lim_{n \\to \\infty} n^{1/n}$:',
            options: ['$1$', '$0$', '$e$', '$\\infty$'],
            correctAnswer: 0,
            explanation: 'Let $y = n^{1/n}$. $\\ln y = \\frac{\\ln n}{n} \\to 0$. So $y \\to e^0 = 1$.'
          }
        ]
      }
    },
    {
      id: 'seq6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
