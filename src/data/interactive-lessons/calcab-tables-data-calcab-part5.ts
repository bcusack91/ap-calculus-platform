export const calcabTablesDataPart5Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td5-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 5 of 7 — Interpreting $f'$ from Tables of $f$ and Vice Versa**

### Reading $f'$ from a Table of $f$

If $f$ values go from 3 to 7, $f$ is increasing ($f' > 0$).

If $f$ values change rapidly, $f'$ is large.

### Second Derivative from Tables

$f''$ tells us about concavity. If $f'$ is increasing, $f'' > 0$.`
    },
    {
      id: 'td5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Interpreting Data** 🎯\n\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $f(x)$ | 2 | 5 | 9 | 14 | 20 |',
      exercise: {
        questions: [
          {
            question: 'Looking at the differences, is $f$ concave up or concave down?',
            options: ['Concave up', 'Concave down', 'Neither', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Differences: $3, 4, 5, 6$ — increasing. So $f\'$ is increasing, meaning $f\'\' > 0$ → concave up.'
          }
        ]
      }
    },
    {
      id: 'td5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Increasing differences → concave up
2. Decreasing differences → concave down`
    }
  ]
};
