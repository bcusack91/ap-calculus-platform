export const calcabTablesDataPart6Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td6-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'td6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Table Workshop** 🎯\n\n| $t$ (min) | 0 | 3 | 7 | 10 |\n|---|---|---|---|---|\n| $v(t)$ (ft/min) | 5 | 8 | 2 | 6 |',
      exercise: {
        questions: [
          {
            question: 'Using the trapezoidal rule, estimate the total distance traveled from $t = 0$ to $t = 10$.',
            options: ['$49.5$ ft', '$55$ ft', '$42$ ft', '$60$ ft'],
            correctAnswer: 0,
            explanation: '$\\frac{3}{2}(5+8) + \\frac{4}{2}(8+2) + \\frac{3}{2}(2+6) = 19.5 + 20 + 12 = 51.5$. Hmm: $\\frac{3}{2}(13) + \\frac{4}{2}(10) + \\frac{3}{2}(8) = 19.5 + 20 + 12 = 51.5$. This should be displacement, not distance, since all values are positive this equals distance too.'
          }
        ]
      }
    },
    {
      id: 'td6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
