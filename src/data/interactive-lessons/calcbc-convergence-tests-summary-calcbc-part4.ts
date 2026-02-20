export const calcbcConvergencePart4Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv4-intro',
      type: 'text' as const,
      content: `# Convergence Tests

**Part 4 of 7 — Mixed Practice I**`
    },
    {
      id: 'conv4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Determine Convergence** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{3^n}{n \\cdot 4^n}$:',
            options: ['Converges (ratio: $L = 3/4$)', 'Diverges', 'Converges (integral test)', 'Inconclusive'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\frac{3^{n+1}/((n+1)4^{n+1})}{3^n/(n \\cdot 4^n)} = \\frac{3n}{4(n+1)} \\to 3/4 < 1$. Converges.'
          },
          {
            question: '$\\sum_{n=2}^{\\infty} \\frac{1}{n(\\ln n)^2}$:',
            options: ['Converges (integral test)', 'Diverges', '$p$-series', 'Ratio test needed'],
            correctAnswer: 0,
            explanation: '$\\int_2^{\\infty} \\frac{dx}{x(\\ln x)^2} = [-1/\\ln x]_2^{\\infty} = 0 + 1/\\ln 2 < \\infty$. Converges.'
          }
        ]
      }
    },
    {
      id: 'conv4-summary',
      type: 'text' as const,
      content: `### Practice Complete!`
    }
  ]
};
