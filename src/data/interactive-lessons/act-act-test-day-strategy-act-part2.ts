export const actTestDayPart2Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-t2-intro',
      type: 'text' as const,
      content: `
# What to Bring

**Part 2 of 7 — What to Bring**

Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator.

Snacks and water for breaks (keep in your bag, not on the desk).
      `
    },
    {
      id: 'act-t2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes admission ticket (printed), valid photo id, #2 pencils (no mechanical), approved calculator?',
            options: [
              'Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator is a key concept for ACT Math',
              'Snacks and water for breaks (keep in your bag, not on the desk)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator'
          }
        ]
      }
    },
    {
      id: 'act-t2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Watch (no smartwatch) for time tracking.

**ACT Tip:** Backup calculator and extra pencils — be prepared.
      `
    },
    {
      id: 'act-t2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for what to bring?',
            options: [
              'Watch (no smartwatch) for time tracking',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Watch (no smartwatch) for time tracking'
          }
        ]
      }
    },
    {
      id: 'act-t2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for What to Bring:',
            options: ['Admission ticket (printed), valid photo ID, #2 pen', 'Snacks and water for breaks (keep in your bag, not', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Watch (no smartwatch) for time tracking', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Admission ticket (printed), valid photo ID, #2 pen', 'Watch (no smartwatch) for time tracking'],
        hint1: 'Think about what to bring',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator. Watch (no smartwatch) for time tracking.'
      }
    }
  ]
}
