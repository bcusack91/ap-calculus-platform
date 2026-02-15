export const actScienceDataPart7Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Extrapolate: extend the trend beyond the data.

Interpolate: estimate between known data points.
      `
    },
    {
      id: 'act-s7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes extrapolate?',
            options: [
              'Extrapolate is a key concept for ACT Science',
              'Interpolate: estimate between known data points',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Extrapolate: extend the trend beyond the data'
          }
        ]
      }
    },
    {
      id: 'act-s7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Predictions based on trends should follow the established pattern.

**ACT Tip:** State limitations: extrapolation is less reliable than interpolation.
      `
    },
    {
      id: 'act-s7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Predictions based on trends should follow the established pattern',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Predictions based on trends should follow the established pattern'
          }
        ]
      }
    },
    {
      id: 'act-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['Extrapolate: extend the trend beyond the data', 'Interpolate: estimate between known data points', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Predictions based on trends should follow the esta', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Extrapolate: extend the trend beyond the data', 'Predictions based on trends should follow the esta'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Extrapolate: extend the trend beyond the data. Predictions based on trends should follow the established pattern.'
      }
    }
  ]
}
