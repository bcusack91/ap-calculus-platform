export const satCalcStrategyPart6Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'sat-c6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Average time per question: ~75 seconds (no-calc), ~87 seconds (calc).

Do easy questions first — every question is worth the same.
      `
    },
    {
      id: 'sat-c6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes average time per question?',
            options: [
              'Average time per question is a fundamental concept in SAT Math',
              'Do easy questions first — every question is worth the same',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Average time per question: ~75 seconds (no-calc), ~87 seconds (calc)'
          }
        ]
      }
    },
    {
      id: 'sat-c6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Mark and skip questions that seem time-consuming, return later.

**SAT Tip:** Last 5 minutes: answer every remaining question (no penalty for guessing).
      `
    },
    {
      id: 'sat-c6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
            options: [
              'Mark and skip questions that seem time-consuming, return later',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Mark and skip questions that seem time-consuming, return later'
          }
        ]
      }
    },
    {
      id: 'sat-c6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Average time per question: ~75 seconds (no-calc), ', 'Do easy questions first — every question is worth ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Mark and skip questions that seem time-consuming, ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Average time per question: ~75 seconds (no-calc), ', 'Mark and skip questions that seem time-consuming, '],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Average time per question: ~75 seconds (no-calc), ~87 seconds (calc). Mark and skip questions that seem time-consuming, return later.'
      }
    }
  ]
}
