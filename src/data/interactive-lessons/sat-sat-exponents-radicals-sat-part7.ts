export const satExponentsPart7Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-e7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Scientific notation: a × 10ⁿ where 1 ≤ a < 10.

Large numbers: move decimal left, positive exponent.
      `
    },
    {
      id: 'sat-e7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes scientific notation?',
            options: [
              'Scientific notation is a fundamental concept in SAT Math',
              'Large numbers: move decimal left, positive exponent',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Scientific notation: a × 10ⁿ where 1 ≤ a < 10'
          }
        ]
      }
    },
    {
      id: 'sat-e7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Small numbers: move decimal right, negative exponent.

**SAT Tip:** Multiply/divide: handle coefficients and powers of 10 separately.
      `
    },
    {
      id: 'sat-e7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Small numbers: move decimal right, negative exponent',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Small numbers: move decimal right, negative exponent'
          }
        ]
      }
    },
    {
      id: 'sat-e7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['Scientific notation: a × 10ⁿ where 1 ≤ a < 10', 'Large numbers: move decimal left, positive exponen', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Small numbers: move decimal right, negative expone', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Scientific notation: a × 10ⁿ where 1 ≤ a < 10', 'Small numbers: move decimal right, negative expone'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Scientific notation: a × 10ⁿ where 1 ≤ a < 10. Small numbers: move decimal right, negative exponent.'
      }
    }
  ]
}
