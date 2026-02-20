export const calcbcLagrangePart6Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag6-intro',
      type: 'text' as const,
      content: `# Lagrange Error

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'lag6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Error Bound Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'The error in approximating $\\sin(0.1)$ with $P_3(0.1)$ is at most:',
            options: ['$\\frac{(0.1)^5}{5!} = \\frac{1}{12{,}000{,}000}$', '$\\frac{(0.1)^4}{4!}$', '$\\frac{(0.1)^3}{3!}$', '$0.01$'],
            correctAnswer: 0,
            explanation: '$\\sin x$ Maclaurin: $P_3 = x - x^3/6$. Next term (AS bound): $\\frac{(0.1)^5}{120} = 10^{-5}/120 \\approx 8.3 \\times 10^{-8}$.'
          }
        ]
      }
    },
    {
      id: 'lag6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
