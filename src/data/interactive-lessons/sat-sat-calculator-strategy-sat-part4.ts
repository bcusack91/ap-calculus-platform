export const satCalcStrategyPart4Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'sat-c4-intro',
      type: 'text' as const,
      content: `
# Backsolving & Plugging In

**Part 4 of 7 — Backsolving & Plugging In**

Backsolving: plug answer choices into the question to see which works.

Start with choice B or C (middle values) to narrow down.
      `
    },
    {
      id: 'sat-c4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes backsolving?',
            options: [
              'Backsolving is a fundamental concept in SAT Math',
              'Start with choice B or C (middle values) to narrow down',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Backsolving: plug answer choices into the question to see which works'
          }
        ]
      }
    },
    {
      id: 'sat-c4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Plugging in: replace variables with simple numbers to test.

**SAT Tip:** Pick numbers that are easy to work with: 2, 3, 5, 10, 100.
      `
    },
    {
      id: 'sat-c4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for backsolving & plugging in?',
            options: [
              'Plugging in: replace variables with simple numbers to test',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Plugging in: replace variables with simple numbers to test'
          }
        ]
      }
    },
    {
      id: 'sat-c4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Backsolving & Plugging In:',
            options: ['Backsolving: plug answer choices into the question', 'Start with choice B or C (middle values) to narrow', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Plugging in: replace variables with simple numbers', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Backsolving: plug answer choices into the question', 'Plugging in: replace variables with simple numbers'],
        hint1: 'Think about backsolving & plugging in',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Backsolving: plug answer choices into the question to see which works. Plugging in: replace variables with simple numbers to test.'
      }
    }
  ]
}
