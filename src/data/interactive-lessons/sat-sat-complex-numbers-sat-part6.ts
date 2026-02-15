export const satComplexPart6Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-c6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Conjugate of a + bi is a - bi.

(a + bi)(a - bi) = a² + b² (always real and positive).
      `
    },
    {
      id: 'sat-c6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes conjugate of a + bi is a - bi?',
            options: [
              'Conjugate of a + bi is a - bi is a fundamental concept in SAT Math',
              '(a + bi)(a - bi) = a² + b² (always real and positive)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Conjugate of a + bi is a - bi'
          }
        ]
      }
    },
    {
      id: 'sat-c6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator.

**SAT Tip:** Rationalizing: (3 + 2i)/(1 - i) × (1 + i)/(1 + i).
      `
    },
    {
      id: 'sat-c6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
            options: [
              'Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator'
          }
        ]
      }
    },
    {
      id: 'sat-c6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Conjugate of a + bi is a - bi', '(a + bi)(a - bi) = a² + b² (always real and positi', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Use conjugates to divide complex numbers: multiply', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Conjugate of a + bi is a - bi', 'Use conjugates to divide complex numbers: multiply'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Conjugate of a + bi is a - bi. Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator.'
      }
    }
  ]
}
