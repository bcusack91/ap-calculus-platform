export const actStatProbPart1Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-s1-intro',
      type: 'text' as const,
      content: `
# 📋 Statistics Probability

**Part 1 of 7 — Mean, Median, Mode**

Mean = sum/count; Median = middle value (sorted); Mode = most frequent.

Weighted average: multiply each value by its weight, then divide by total weight.
      `
    },
    {
      id: 'act-s1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes mean = sum/count; median = middle value (sorted); mode = most frequent?',
            options: [
              'Mean = sum/count; Median = middle value (sorted); Mode = most frequent is a key concept for ACT Math',
              'Weighted average: multiply each value by its weight, then divide by total weight',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Mean = sum/count; Median = middle value (sorted); Mode = most frequent'
          }
        ]
      }
    },
    {
      id: 'act-s1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Effect of adding/removing values: track the sum.

**ACT Tip:** Range = max - min.
      `
    },
    {
      id: 'act-s1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for mean, median, mode?',
            options: [
              'Effect of adding/removing values: track the sum',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Effect of adding/removing values: track the sum'
          }
        ]
      }
    },
    {
      id: 'act-s1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Mean, Median, Mode:',
            options: ['Mean = sum/count; Median = middle value (sorted); ', 'Weighted average: multiply each value by its weigh', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Effect of adding/removing values: track the sum', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Mean = sum/count; Median = middle value (sorted); ', 'Effect of adding/removing values: track the sum'],
        hint1: 'Think about mean, median, mode',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Mean = sum/count; Median = middle value (sorted); Mode = most frequent. Effect of adding/removing values: track the sum.'
      }
    }
  ]
}
