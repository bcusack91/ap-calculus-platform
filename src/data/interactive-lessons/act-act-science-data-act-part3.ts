export const actScienceDataPart3Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s3-intro',
      type: 'text' as const,
      content: `
# Identifying Trends

**Part 3 of 7 — Identifying Trends**

Direct relationship: both variables increase together.

Inverse relationship: one increases as the other decreases.
      `
    },
    {
      id: 'act-s3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes direct relationship?',
            options: [
              'Direct relationship is a key concept for ACT Science',
              'Inverse relationship: one increases as the other decreases',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Direct relationship: both variables increase together'
          }
        ]
      }
    },
    {
      id: 'act-s3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look for patterns: linear, exponential, cyclical.

**ACT Tip:** Describe trends using "as X increases, Y...".
      `
    },
    {
      id: 'act-s3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for identifying trends?',
            options: [
              'Look for patterns: linear, exponential, cyclical',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Look for patterns: linear, exponential, cyclical'
          }
        ]
      }
    },
    {
      id: 'act-s3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Identifying Trends:',
            options: ['Direct relationship: both variables increase toget', 'Inverse relationship: one increases as the other d', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Look for patterns: linear, exponential, cyclical', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Direct relationship: both variables increase toget', 'Look for patterns: linear, exponential, cyclical'],
        hint1: 'Think about identifying trends',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Direct relationship: both variables increase together. Look for patterns: linear, exponential, cyclical.'
      }
    }
  ]
}
