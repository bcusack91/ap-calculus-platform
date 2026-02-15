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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes mean (average)?',
            options: [
              'Mean (average) is a fundamental concept in SAT Math',
              'Median: middle value when sorted (average of two middle if even count)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Mean (average): sum of values / number of values'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for mean, median, mode?',
            options: [
              'Mode: most frequent value',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Mode: most frequent value'
          }
        ]
      }
    },
    {
      id: 'sat-d1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Mean, Median, Mode:',
            options: ['Mean (average): sum of values / number of values', 'Median: middle value when sorted (average of two m', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Mode: most frequent value', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Mean (average): sum of values / number of values', 'Mode: most frequent value'],
        hint1: 'Think about mean, median, mode',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Mean (average): sum of values / number of values. Mode: most frequent value.'
      }
    }
  ]
}
