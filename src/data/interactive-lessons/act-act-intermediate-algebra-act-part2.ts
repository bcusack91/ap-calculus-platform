export const actIntermAlgPart2Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-i2-intro',
      type: 'text' as const,
      content: `
# Polynomial Operations

**Part 2 of 7 — Polynomial Operations**

Add/subtract: combine like terms.

Multiply: distribute (FOIL for binomials).
      `
    },
    {
      id: 'act-i2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes add/subtract?',
            options: [
              'Add/subtract is a key concept for ACT Math',
              'Multiply: distribute (FOIL for binomials)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Add/subtract: combine like terms'
          }
        ]
      }
    },
    {
      id: 'act-i2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Factor: GCF, difference of squares, trinomial factoring, grouping.

**ACT Tip:** Divide: long division or synthetic division.
      `
    },
    {
      id: 'act-i2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for polynomial operations?',
            options: [
              'Factor: GCF, difference of squares, trinomial factoring, grouping',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Factor: GCF, difference of squares, trinomial factoring, grouping'
          }
        ]
      }
    },
    {
      id: 'act-i2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Polynomial Operations:',
            options: ['Add/subtract: combine like terms', 'Multiply: distribute (FOIL for binomials)', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Factor: GCF, difference of squares, trinomial fact', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Add/subtract: combine like terms', 'Factor: GCF, difference of squares, trinomial fact'],
        hint1: 'Think about polynomial operations',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Add/subtract: combine like terms. Factor: GCF, difference of squares, trinomial factoring, grouping.'
      }
    }
  ]
}
