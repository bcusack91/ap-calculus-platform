export const satWordProblemsPart4Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w4-intro',
      type: 'text' as const,
      content: `
# Percent Problems

**Part 4 of 7 — Percent Problems**

Part = percent × whole → amount = (p/100) × total.

Percent increase: new = original × (1 + r/100).
      `
    },
    {
      id: 'sat-w4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes part = percent × whole → amount = (p/100) × total?',
            options: [
              'Part = percent × whole → amount = (p/100) × total is a fundamental concept in SAT Math',
              'Percent increase: new = original × (1 + r/100)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Part = percent × whole → amount = (p/100) × total'
          }
        ]
      }
    },
    {
      id: 'sat-w4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Percent decrease: new = original × (1 - r/100).

**SAT Tip:** Finding percent change: ((new - original)/original) × 100.
      `
    },
    {
      id: 'sat-w4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for percent problems?',
            options: [
              'Percent decrease: new = original × (1 - r/100)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Percent decrease: new = original × (1 - r/100)'
          }
        ]
      }
    },
    {
      id: 'sat-w4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Percent Problems:',
            options: ['Part = percent × whole → amount = (p/100) × total', 'Percent increase: new = original × (1 + r/100)', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Percent decrease: new = original × (1 - r/100)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Part = percent × whole → amount = (p/100) × total', 'Percent decrease: new = original × (1 - r/100)'],
        hint1: 'Think about percent problems',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Part = percent × whole → amount = (p/100) × total. Percent decrease: new = original × (1 - r/100).'
      }
    }
  ]
}
