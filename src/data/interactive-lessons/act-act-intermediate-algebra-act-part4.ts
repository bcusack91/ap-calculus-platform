export const actIntermAlgPart4Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-i4-intro',
      type: 'text' as const,
      content: `
# Complex Numbers

**Part 4 of 7 — Complex Numbers**

i = √(-1), i² = -1.

Add/subtract: combine real and imaginary parts separately.
      `
    },
    {
      id: 'act-i4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes i = √(-1), i² = -1?',
            options: [
              'i = √(-1), i² = -1 is a key concept for ACT Math',
              'Add/subtract: combine real and imaginary parts separately',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'i = √(-1), i² = -1'
          }
        ]
      }
    },
    {
      id: 'act-i4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Multiply using FOIL (remember i² = -1).

**ACT Tip:** Powers of i cycle: i, -1, -i, 1, i, -1, ....
      `
    },
    {
      id: 'act-i4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for complex numbers?',
            options: [
              'Multiply using FOIL (remember i² = -1)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Multiply using FOIL (remember i² = -1)'
          }
        ]
      }
    },
    {
      id: 'act-i4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Complex Numbers:',
            options: ['i = √(-1), i² = -1', 'Add/subtract: combine real and imaginary parts sep', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Multiply using FOIL (remember i² = -1)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['i = √(-1), i² = -1', 'Multiply using FOIL (remember i² = -1)'],
        hint1: 'Think about complex numbers',
        hint2: 'Consider the best ACT strategy',
        explanation: 'i = √(-1), i² = -1. Multiply using FOIL (remember i² = -1).'
      }
    }
  ]
}
