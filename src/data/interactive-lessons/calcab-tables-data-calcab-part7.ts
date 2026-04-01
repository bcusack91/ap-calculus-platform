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
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '<i>g</i> is twice-differentiable.<br><table style="border-collapse:collapse;margin:8px auto;text-align:center"><tr><th style="border:1px solid #888;padding:4px 12px"><i>x</i></th><td style="border:1px solid #888;padding:4px 12px">0</td><td style="border:1px solid #888;padding:4px 12px">2</td><td style="border:1px solid #888;padding:4px 12px">4</td><td style="border:1px solid #888;padding:4px 12px">6</td></tr><tr><th style="border:1px solid #888;padding:4px 12px"><i>g</i>(<i>x</i>)</th><td style="border:1px solid #888;padding:4px 12px">1</td><td style="border:1px solid #888;padding:4px 12px">5</td><td style="border:1px solid #888;padding:4px 12px">4</td><td style="border:1px solid #888;padding:4px 12px">10</td></tr></table>By MVT, there exists $c \\in (0, 6)$ where $g\'(c) =$',
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
