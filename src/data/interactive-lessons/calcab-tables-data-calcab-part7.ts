export const calcabTablesDataPart7Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td7-intro',
      type: 'text' as const,
      content: `# Tables & Data — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'td7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯\n\n$g$ is twice-differentiable. $g(0) = 1$, $g(2) = 5$, $g(4) = 4$, $g(6) = 10$.',
      exercise: {
        questions: [
          {
            question: 'By MVT, there exists $c \\in (0, 6)$ where $g\'(c) =$',
            options: ['$\\frac{3}{2}$', '$3$', '$\\frac{9}{6}$', '$2$'],
            correctAnswer: 0,
            explanation: '$g\'(c) = \\frac{g(6)-g(0)}{6-0} = \\frac{9}{6} = \\frac{3}{2}$.'
          }
        ]
      }
    },
    {
      id: 'td7-summary',
      type: 'text' as const,
      content: `### Tables & Data — Complete! ✅`
    }
  ]
};
