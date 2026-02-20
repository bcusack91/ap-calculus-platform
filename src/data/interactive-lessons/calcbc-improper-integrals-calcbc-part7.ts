export const calcbcImproperPart7Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp7-intro',
      type: 'text' as const,
      content: `# Improper Integrals — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'imp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which integral converges?',
            options: ['$\\int_1^{\\infty} \\frac{1}{x^{1.01}}\\,dx$', '$\\int_1^{\\infty} \\frac{1}{x}\\,dx$', '$\\int_1^{\\infty} \\frac{1}{\\sqrt{x}}\\,dx$', '$\\int_1^{\\infty} \\frac{1}{x^{0.5}}\\,dx$'],
            correctAnswer: 0,
            explanation: '$p = 1.01 > 1$: converges. All others have $p \\leq 1$: diverge.'
          },
          {
            question: '$\\int_0^{\\infty} e^{-3x}\\,dx = $',
            options: ['$\\frac{1}{3}$', '$3$', '$\\frac{1}{e^3}$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$[-\\frac{1}{3}e^{-3x}]_0^{\\infty} = 0 - (-\\frac{1}{3}) = \\frac{1}{3}$.'
          }
        ]
      }
    },
    {
      id: 'imp7-summary',
      type: 'text' as const,
      content: `### Improper Integrals — Complete! ✅`
    }
  ]
};
