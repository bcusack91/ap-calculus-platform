export const calcbcSequencesPart7Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq7-intro',
      type: 'text' as const,
      content: `# Infinite Sequences — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'seq7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which sequence diverges?',
            options: ['$a_n = (-1)^n \\cdot n/(n+1)$', '$a_n = 1/n^2$', '$a_n = (0.99)^n$', '$a_n = 5/n$'],
            correctAnswer: 0,
            explanation: '$a_n$ oscillates between values approaching $\\pm 1$. No single limit exists.'
          },
          {
            question: '$\\lim_{n \\to \\infty} \\frac{2^n}{n!}$:',
            options: ['$0$', '$\\infty$', '$2$', '$1$'],
            correctAnswer: 0,
            explanation: '$n!$ grows faster than $2^n$. Factorial dominates exponential, limit is $0$.'
          }
        ]
      }
    },
    {
      id: 'seq7-summary',
      type: 'text' as const,
      content: `### Infinite Sequences — Complete! ✅`
    }
  ]
};
