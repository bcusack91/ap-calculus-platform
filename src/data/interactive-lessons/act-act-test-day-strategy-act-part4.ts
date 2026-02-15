export const actTestDayPart4Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-t4-intro',
      type: 'text' as const,
      content: `
# Guessing Strategy

**Part 4 of 7 — Guessing Strategy**

No penalty for wrong answers — NEVER leave a question blank.

If completely stuck, pick one letter and use it consistently for all guesses.
      `
    },
    {
      id: 'act-t4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes no penalty for wrong answers — never leave a question blank?',
            options: [
              'No penalty for wrong answers — NEVER leave a question blank is a key concept for ACT Math',
              'If completely stuck, pick one letter and use it consistently for all guesses',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'No penalty for wrong answers — NEVER leave a question blank'
          }
        ]
      }
    },
    {
      id: 'act-t4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Educated guessing: eliminate 1-2 wrong answers, then guess from the rest.

**ACT Tip:** Last 2 minutes of each section: answer every remaining question.
      `
    },
    {
      id: 'act-t4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for guessing strategy?',
            options: [
              'Educated guessing: eliminate 1-2 wrong answers, then guess from the rest',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Educated guessing: eliminate 1-2 wrong answers, then guess from the rest'
          }
        ]
      }
    },
    {
      id: 'act-t4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Guessing Strategy:',
            options: ['No penalty for wrong answers — NEVER leave a quest', 'If completely stuck, pick one letter and use it co', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Educated guessing: eliminate 1-2 wrong answers, th', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['No penalty for wrong answers — NEVER leave a quest', 'Educated guessing: eliminate 1-2 wrong answers, th'],
        hint1: 'Think about guessing strategy',
        hint2: 'Consider the best ACT strategy',
        explanation: 'No penalty for wrong answers — NEVER leave a question blank. Educated guessing: eliminate 1-2 wrong answers, then guess from the rest.'
      }
    }
  ]
}
