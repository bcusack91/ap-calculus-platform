export const satComplexPart2Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-c2-intro',
      type: 'text' as const,
      content: `
# Complex Number Operations

**Part 2 of 7 — Complex Number Operations**

Add/subtract: combine real parts and imaginary parts separately.

(a + bi) + (c + di) = (a+c) + (b+d)i.
      `
    },
    {
      id: 'sat-c2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes add/subtract?',
            options: [
              'Add/subtract is a fundamental concept in SAT Math',
              '(a + bi) + (c + di) = (a+c) + (b+d)i',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Add/subtract: combine real parts and imaginary parts separately'
          }
        ]
      }
    },
    {
      id: 'sat-c2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i.

**SAT Tip:** Remember: i² = -1, so replace i² with -1.
      `
    },
    {
      id: 'sat-c2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for complex number operations?',
            options: [
              'Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i'
          }
        ]
      }
    },
    {
      id: 'sat-c2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Complex Number Operations:',
            options: ['Add/subtract: combine real parts and imaginary par', '(a + bi) + (c + di) = (a+c) + (b+d)i', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Multiply using FOIL: (a + bi)(c + di) = ac + adi +', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Add/subtract: combine real parts and imaginary par', 'Multiply using FOIL: (a + bi)(c + di) = ac + adi +'],
        hint1: 'Think about complex number operations',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Add/subtract: combine real parts and imaginary parts separately. Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i.'
      }
    }
  ]
}
