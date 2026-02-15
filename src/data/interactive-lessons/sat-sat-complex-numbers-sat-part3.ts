export const satComplexPart3Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-c3-intro',
      type: 'text' as const,
      content: `
# Complex Number Applications

**Part 3 of 7 — Complex Number Applications**

Complex solutions come in conjugate pairs: a + bi and a - bi.

If the discriminant b² - 4ac < 0, the quadratic has complex roots.
      `
    },
    {
      id: 'sat-c3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes complex solutions come in conjugate pairs?',
            options: [
              'Complex solutions come in conjugate pairs is a fundamental concept in SAT Math',
              'If the discriminant b² - 4ac < 0, the quadratic has complex roots',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Complex solutions come in conjugate pairs: a + bi and a - bi'
          }
        ]
      }
    },
    {
      id: 'sat-c3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** x = (-b ± i√(4ac - b²)) / (2a).

**SAT Tip:** Every polynomial of degree n has exactly n roots (counting complex and repeated).
      `
    },
    {
      id: 'sat-c3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for complex number applications?',
            options: [
              'x = (-b ± i√(4ac - b²)) / (2a)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'x = (-b ± i√(4ac - b²)) / (2a)'
          }
        ]
      }
    },
    {
      id: 'sat-c3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Complex Number Applications:',
            options: ['Complex solutions come in conjugate pairs: a + bi ', 'If the discriminant b² - 4ac < 0, the quadratic ha', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['x = (-b ± i√(4ac - b²)) / (2a)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Complex solutions come in conjugate pairs: a + bi ', 'x = (-b ± i√(4ac - b²)) / (2a)'],
        hint1: 'Think about complex number applications',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Complex solutions come in conjugate pairs: a + bi and a - bi. x = (-b ± i√(4ac - b²)) / (2a).'
      }
    }
  ]
}
