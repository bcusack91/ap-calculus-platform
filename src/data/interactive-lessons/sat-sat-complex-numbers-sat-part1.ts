export const satComplexPart1Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-c1-intro',
      type: 'text' as const,
      content: `
# 📝 Complex Numbers

**Part 1 of 7 — Imaginary Numbers**

i = √(-1), so i² = -1.

√(-a) = i√a for a > 0.
      `
    },
    {
      id: 'sat-c1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes i = √(-1), so i² = -1?',
            options: [
              'i = √(-1), so i² = -1 is a fundamental concept in SAT Math',
              '√(-a) = i√a for a > 0',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'i = √(-1), so i² = -1'
          }
        ]
      }
    },
    {
      id: 'sat-c1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Complex number: a + bi where a is real part, b is imaginary part.

**SAT Tip:** Pure imaginary: bi (when a = 0); real: a (when b = 0).
      `
    },
    {
      id: 'sat-c1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for imaginary numbers?',
            options: [
              'Complex number: a + bi where a is real part, b is imaginary part',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Complex number: a + bi where a is real part, b is imaginary part'
          }
        ]
      }
    },
    {
      id: 'sat-c1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Imaginary Numbers:',
            options: ['i = √(-1), so i² = -1', '√(-a) = i√a for a > 0', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Complex number: a + bi where a is real part, b is ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['i = √(-1), so i² = -1', 'Complex number: a + bi where a is real part, b is '],
        hint1: 'Think about imaginary numbers',
        hint2: 'Consider the best SAT strategy',
        explanation: 'i = √(-1), so i² = -1. Complex number: a + bi where a is real part, b is imaginary part.'
      }
    }
  ]
}
