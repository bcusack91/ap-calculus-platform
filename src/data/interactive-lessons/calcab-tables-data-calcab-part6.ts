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
      content: '**Table Workshop** 🎯',
      exercise: {
        questions: [
          {
            question: '<table style="border-collapse:collapse;margin:8px auto;text-align:center"><tr><th style="border:1px solid #888;padding:4px 12px"><i>t</i> (min)</th><td style="border:1px solid #888;padding:4px 12px">0</td><td style="border:1px solid #888;padding:4px 12px">3</td><td style="border:1px solid #888;padding:4px 12px">7</td><td style="border:1px solid #888;padding:4px 12px">10</td></tr><tr><th style="border:1px solid #888;padding:4px 12px"><i>v</i>(<i>t</i>) (ft/min)</th><td style="border:1px solid #888;padding:4px 12px">5</td><td style="border:1px solid #888;padding:4px 12px">8</td><td style="border:1px solid #888;padding:4px 12px">2</td><td style="border:1px solid #888;padding:4px 12px">6</td></tr></table>Using the trapezoidal rule, estimate the total distance traveled from $t = 0$ to $t = 10$.',
            options: ['$51.5$ ft', '$55$ ft', '$42$ ft', '$60$ ft'],
            correctAnswer: 0,
            explanation: 'Trap $= \\frac{3}{2}(5+8) + \\frac{4}{2}(8+2) + \\frac{3}{2}(2+6) = 19.5 + 20 + 12 = 51.5$ ft.'
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
