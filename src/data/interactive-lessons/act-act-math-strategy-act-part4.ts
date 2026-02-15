export const actMathStrategyPart4Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m4-intro',
      type: 'text' as const,
      content: `
# Plugging In Numbers

**Part 4 of 7 — Plugging In Numbers**

Replace variables with easy numbers (2, 3, 5, 10).

Solve with those numbers, then check which answer choice gives the same result.
      `
    },
    {
      id: 'act-m4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes replace variables with easy numbers (2, 3, 5, 10)?',
            options: [
              'Replace variables with easy numbers (2, 3, 5, 10) is a key concept for ACT Math',
              'Solve with those numbers, then check which answer choice gives the same result',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Replace variables with easy numbers (2, 3, 5, 10)'
          }
        ]
      }
    },
    {
      id: 'act-m4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Use for percent problems, fraction problems, and abstract algebra.

**ACT Tip:** Avoid 0 and 1 — they can make multiple answers appear correct.
      `
    },
    {
      id: 'act-m4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for plugging in numbers?',
            options: [
              'Use for percent problems, fraction problems, and abstract algebra',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Use for percent problems, fraction problems, and abstract algebra'
          }
        ]
      }
    },
    {
      id: 'act-m4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Plugging In Numbers:',
            options: ['Replace variables with easy numbers (2, 3, 5, 10)', 'Solve with those numbers, then check which answer ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Use for percent problems, fraction problems, and a', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Replace variables with easy numbers (2, 3, 5, 10)', 'Use for percent problems, fraction problems, and a'],
        hint1: 'Think about plugging in numbers',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Replace variables with easy numbers (2, 3, 5, 10). Use for percent problems, fraction problems, and abstract algebra.'
      }
    }
  ]
}
