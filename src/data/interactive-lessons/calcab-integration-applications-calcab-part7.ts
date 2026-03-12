export const calcabIntAppsPart7Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia7-intro',
      type: 'text' as const,
      content: `# Integration Applications — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'ia7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Rotate $y = \\sqrt{x}$ about the $y$-axis from $y = 0$ to $y = 2$ using the disk method (in terms of $y$).',
            options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$4\\pi$', '$8\\pi$'],
            correctAnswer: 0,
            explanation: '$x = y^2$. $V = \\pi\\int_0^2 (y^2)^2\\,dy = \\pi\\int_0^2 y^4\\,dy = \\pi[y^5/5]_0^2 = \\frac{32\\pi}{5}$.'
          },
          {
            question: 'The average value of $f(x) = x^2$ on $[0, 3]$ is:',
            options: ['$3$', '$9$', '$\\frac{9}{2}$', '$6$'],
            correctAnswer: 0,
            explanation: '$f_{\\text{avg}} = \\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot 9 = 3$.'
          }
        ]
      }
    },
    {
      id: 'ia7-summary',
      type: 'text' as const,
      content: `### Integration Applications — Complete! ✅`
    }
  ]
};
