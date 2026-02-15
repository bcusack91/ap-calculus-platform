export const actPreAlgebraPart4Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-p4-intro',
      type: 'text' as const,
      content: `
# Percentages

**Part 4 of 7 — Percentages**

Percent = part/whole × 100.

Percent of a number: (percent/100) × number.
      `
    },
    {
      id: 'act-p4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes percent = part/whole × 100?',
            options: [
              'Percent = part/whole × 100 is a key concept for ACT Math',
              'Percent of a number: (percent/100) × number',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Percent = part/whole × 100'
          }
        ]
      }
    },
    {
      id: 'act-p4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Percent increase = (new - old)/old × 100.

**ACT Tip:** Discount then tax: calculate discount first, then apply tax to the reduced price.
      `
    },
    {
      id: 'act-p4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for percentages?',
            options: [
              'Percent increase = (new - old)/old × 100',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Percent increase = (new - old)/old × 100'
          }
        ]
      }
    },
    {
      id: 'act-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Percentages:',
            options: ['Percent = part/whole × 100', 'Percent of a number: (percent/100) × number', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Percent increase = (new - old)/old × 100', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Percent = part/whole × 100', 'Percent increase = (new - old)/old × 100'],
        hint1: 'Think about percentages',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Percent = part/whole × 100. Percent increase = (new - old)/old × 100.'
      }
    }
  ]
}
