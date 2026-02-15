export const actScienceDataPart1Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s1-intro',
      type: 'text' as const,
      content: `
# 📋 Science Data

**Part 1 of 7 — Reading Data Tables**

Read column headers and row labels first.

Identify units of measurement.
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
            question: 'Which statement best describes read column headers and row labels first?',
            options: [
              'Read column headers and row labels first is a key concept for ACT Science',
              'Identify units of measurement',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Read column headers and row labels first'
          }
        ]
      }
    },
    {
      id: 'act-s1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Find specific values by cross-referencing rows and columns.

**ACT Tip:** Watch for footnotes or special notations.
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
            question: 'What is a key strategy for reading data tables?',
            options: [
              'Find specific values by cross-referencing rows and columns',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Find specific values by cross-referencing rows and columns'
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
            label: 'Key concept for Reading Data Tables:',
            options: ['Read column headers and row labels first', 'Identify units of measurement', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Find specific values by cross-referencing rows and', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Read column headers and row labels first', 'Find specific values by cross-referencing rows and'],
        hint1: 'Think about reading data tables',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Read column headers and row labels first. Find specific values by cross-referencing rows and columns.'
      }
    }
  ]
}
