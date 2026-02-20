export const calcbcAlternatingPart6Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt6-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'alt6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Classify: $\\sum \\frac{(-1)^n \\ln n}{n}$ (for $n \\geq 2$)',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'AST: $\\ln n / n$ is eventually decreasing and $\\to 0$. Converges. But $\\sum \\ln n/n > \\sum 1/n$ (eventually), so $\\sum |a_n|$ diverges. Conditional.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{\\cos(n\\pi)}{n^3}$: this is alternating because $\\cos(n\\pi) = (-1)^n$. It converges:',
            options: ['Absolutely', 'Conditionally', 'Diverges', 'Not alternating'],
            correctAnswer: 0,
            explanation: '$\\sum |a_n| = \\sum 1/n^3$, converges ($p = 3$). Absolute convergence.'
          }
        ]
      }
    },
    {
      id: 'alt6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
