export const satDataStatsPart1Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-d1-intro',
      type: 'text' as const,
      content: `
# 📝 Data Statistics

**Part 1 of 7 — Mean, Median, Mode**

Mean (average): sum of values / number of values.

Median: middle value when sorted (average of two middle if even count).
      `
    },
    {
      id: 'sat-d1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Mean (average)?',
            options: [
              'SAT tip: adding/removing values changes mean — track the sum.',
              'Mode: most frequent value.',
              'sum of values / number of values.',
              'middle value when sorted (average of two middle if even count).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Mean (average): sum of values / number of values. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'sum of values / number of values.',
              'Mode: most frequent value.',
              'middle value when sorted (average of two middle if even count).',
              'SAT tip: adding/removing values changes mean — track the sum.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Mode: most frequent value. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-d1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Mode: most frequent value.

**SAT Tip:** SAT tip: adding/removing values changes mean — track the sum.
      `
    },
    {
      id: 'sat-d1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Data Statistics, which correctly describes SAT Tip?',
            options: [
              'middle value when sorted (average of two middle if even count).',
              'SAT tip: adding/removing values changes mean — track the sum.',
              'sum of values / number of values.',
              'Mode: most frequent value.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: SAT tip: adding/removing values changes mean — track the sum. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-d1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mean (average)',
            options: ['SAT tip: adding/removing values changes mean — track the sum.', 'middle value when sorted (average of two middle if even count).', 'Mode: most frequent value.', 'sum of values / number of values.']
          },
          {
            label: 'Median',
            options: ['Mode: most frequent value.', 'middle value when sorted (average of two middle if even count).', 'sum of values / number of values.', 'SAT tip: adding/removing values changes mean — track the sum.']
          },
          {
            label: 'Key Insight',
            options: ['sum of values / number of values.', 'SAT tip: adding/removing values changes mean — track the sum.', 'Mode: most frequent value.', 'middle value when sorted (average of two middle if even count).']
          }
        ],
        correctAnswers: ['sum of values / number of values.', 'middle value when sorted (average of two middle if even count).', 'Mode: most frequent value.'],
        hint1: 'Think about what each concept specifically describes in Data Statistics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Data Statistics describes a specific idea. Mean (average): sum of values / number of values. Median: middle value when sorted (average of two middle if even count). Key Insight: Mode: most frequent value.'
      }
    }
  ]
}
