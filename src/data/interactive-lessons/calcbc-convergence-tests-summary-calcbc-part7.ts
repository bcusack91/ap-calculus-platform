export const calcbcConvergencePart7Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv7-intro',
      type: 'text' as const,
      content: `# Convergence Tests — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'conv7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which series converges?',
            options: ['$\\sum \\frac{1}{n^2+n}$', '$\\sum \\frac{1}{\\sqrt{n}}$', '$\\sum \\frac{n+1}{n}$', '$\\sum \\frac{1}{\\ln n}$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{n^2+n} = \\frac{1}{n(n+1)}$. Telescopes or compare with $1/n^2$. Converges. Others diverge.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{n^2+1}$:',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'AST: $b_n = n/(n^2+1)$ is eventually decreasing and $\\to 0$. Converges. $\\sum |a_n|$: compare $n/(n^2+1) \\sim 1/n$, diverges. Conditional.'
          }
        ]
      }
    },
    {
      id: 'conv7-summary',
      type: 'text' as const,
      content: `### Convergence Tests — Complete! ✅`
    }
  ]
};
