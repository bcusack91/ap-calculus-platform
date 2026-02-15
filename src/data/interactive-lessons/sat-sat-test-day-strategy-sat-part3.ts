export const satTestDayPart3Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'sat-t3-intro',
      type: 'text' as const,
      content: `
# Guessing Strategy

**Part 3 of 7 — Guessing Strategy**

No penalty for wrong answers — ALWAYS guess (never leave blank).

If stuck, eliminate what you can, then guess from remaining choices.
      `
    },
    {
      id: 'sat-t3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes no penalty for wrong answers — always guess (never leave blank)?',
            options: [
              'No penalty for wrong answers — ALWAYS guess (never leave blank) is a fundamental concept in SAT Math',
              'If stuck, eliminate what you can, then guess from remaining choices',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'No penalty for wrong answers — ALWAYS guess (never leave blank)'
          }
        ]
      }
    },
    {
      id: 'sat-t3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** On grid-in: any correct form is accepted (1/2 = .5 = 0.5).

**SAT Tip:** Letter of the day: if completely stuck, consistently guess the same letter.
      `
    },
    {
      id: 'sat-t3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for guessing strategy?',
            options: [
              'On grid-in: any correct form is accepted (1/2 = .5 = 0.5)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'On grid-in: any correct form is accepted (1/2 = .5 = 0.5)'
          }
        ]
      }
    },
    {
      id: 'sat-t3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Guessing Strategy:',
            options: ['No penalty for wrong answers — ALWAYS guess (never', 'If stuck, eliminate what you can, then guess from ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['On grid-in: any correct form is accepted (1/2 = .5', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['No penalty for wrong answers — ALWAYS guess (never', 'On grid-in: any correct form is accepted (1/2 = .5'],
        hint1: 'Think about guessing strategy',
        hint2: 'Consider the best SAT strategy',
        explanation: 'No penalty for wrong answers — ALWAYS guess (never leave blank). On grid-in: any correct form is accepted (1/2 = .5 = 0.5).'
      }
    }
  ]
}
