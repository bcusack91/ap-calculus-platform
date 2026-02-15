export const satExponentialFnPart3Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-e3-intro',
      type: 'text' as const,
      content: `
# Exponential vs. Linear

**Part 3 of 7 — Exponential vs. Linear**

Linear: constant rate of change (adding the same amount).

Exponential: constant percent change (multiplying by the same factor).
      `
    },
    {
      id: 'sat-e3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes linear?',
            options: [
              'Linear is a fundamental concept in SAT Math',
              'Exponential: constant percent change (multiplying by the same factor)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Linear: constant rate of change (adding the same amount)'
          }
        ]
      }
    },
    {
      id: 'sat-e3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Linear grows by addition; exponential grows by multiplication.

**SAT Tip:** Exponential eventually overtakes linear growth.
      `
    },
    {
      id: 'sat-e3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for exponential vs. linear?',
            options: [
              'Linear grows by addition; exponential grows by multiplication',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Linear grows by addition; exponential grows by multiplication'
          }
        ]
      }
    },
    {
      id: 'sat-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Exponential vs. Linear:',
            options: ['Linear: constant rate of change (adding the same a', 'Exponential: constant percent change (multiplying ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Linear grows by addition; exponential grows by mul', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Linear: constant rate of change (adding the same a', 'Linear grows by addition; exponential grows by mul'],
        hint1: 'Think about exponential vs. linear',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Linear: constant rate of change (adding the same amount). Linear grows by addition; exponential grows by multiplication.'
      }
    }
  ]
}
