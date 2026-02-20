export const calcbcConvergencePart5Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv5-intro',
      type: 'text' as const,
      content: `# Convergence Tests

**Part 5 of 7 — Mixed Practice II**`
    },
    {
      id: 'conv5-quiz1',
      type: 'multiple-choice' as const,
      content: '**More Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$:',
            options: ['Converges (ratio: $L = 1/2$)', 'Diverges', 'Converges to $2$', 'Inconclusive'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\frac{(n+1)/2^{n+1}}{n/2^n} = \\frac{n+1}{2n} \\to 1/2 < 1$. Converges. (Sum = $2$.)'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\sin(1/n)$:',
            options: ['Diverges (limit compare with $1/n$)', 'Converges', 'AST applies', 'Need ratio test'],
            correctAnswer: 0,
            explanation: '$\\lim \\frac{\\sin(1/n)}{1/n} = 1$ (since $\\sin x/x \\to 1$). $\\sum 1/n$ diverges, so $\\sum \\sin(1/n)$ diverges.'
          }
        ]
      }
    },
    {
      id: 'conv5-summary',
      type: 'text' as const,
      content: `### More Practice Done!`
    }
  ]
};
