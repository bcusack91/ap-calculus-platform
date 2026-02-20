export const calcbcLagrangePart7Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag7-intro',
      type: 'text' as const,
      content: `# Lagrange Error Bound — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'lag7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$e^x$ at $a = 0$, $P_4(0.2)$. Using $M = 2$, the Lagrange error is at most:',
            options: ['$\\frac{2(0.2)^5}{120} \\approx 5.3 \\times 10^{-6}$', '$\\frac{(0.2)^4}{24}$', '$\\frac{2}{120}$', '$0.002$'],
            correctAnswer: 0,
            explanation: '$|R_4| \\leq \\frac{M}{5!}(0.2)^5 = \\frac{2}{120}(0.00032) = \\frac{0.00064}{120} \\approx 5.3 \\times 10^{-6}$.'
          }
        ]
      }
    },
    {
      id: 'lag7-summary',
      type: 'text' as const,
      content: `### Lagrange Error Bound — Complete! ✅`
    }
  ]
};
