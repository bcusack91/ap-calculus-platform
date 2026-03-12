export const calcabTheoremsPart6Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm6-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'thm6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Theorem Practice** 🎯\n\nA table: $f(0) = 1$, $f(2) = 5$, $f(5) = 3$, $f(7) = 8$. $f$ is continuous and differentiable.',
      exercise: {
        questions: [
          {
            question: 'Can we guarantee $f(c) = 4$ for some $c \\in (0, 7)$?',
            options: ['Yes, by IVT on $[0, 2]$', 'No', 'Yes, by MVT', 'Only if $f$ is differentiable'],
            correctAnswer: 0,
            explanation: '$f(0) = 1 < 4 < 5 = f(2)$. By IVT, $f(c) = 4$ for some $c \\in (0, 2) \\subset (0, 7)$.'
          },
          {
            question: 'Can we guarantee $f\'(c) = 1$ for some $c \\in (0, 7)$?',
            options: ['Yes, by MVT on $[0, 7]$', 'No', 'Yes, by IVT', 'Only on $[0, 2]$'],
            correctAnswer: 0,
            explanation: 'Average rate on $[0, 7]$: $\\frac{8-1}{7} = 1$. MVT gives $f\'(c) = 1$ for some $c \\in (0, 7)$.'
          }
        ]
      }
    },
    {
      id: 'thm6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
