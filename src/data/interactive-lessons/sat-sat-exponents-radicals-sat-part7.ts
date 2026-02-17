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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Scientific notation?',
            options: [
              'move decimal left, positive exponent.',
              'Small numbers: move decimal right, negative exponent.',
              'a × 10ⁿ where 1 ≤ a < 10.',
              'Multiply/divide: handle coefficients and powers of 10 separately.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Scientific notation: a × 10ⁿ where 1 ≤ a < 10. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Multiply/divide: handle coefficients and powers of 10 separately.',
              'Small numbers: move decimal right, negative exponent.',
              'a × 10ⁿ where 1 ≤ a < 10.',
              'move decimal left, positive exponent.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Small numbers: move decimal right, negative exponent. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'move decimal left, positive exponent.',
              'a × 10ⁿ where 1 ≤ a < 10.',
              'Multiply/divide: handle coefficients and powers of 10 separately.',
              'Small numbers: move decimal right, negative exponent.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Multiply/divide: handle coefficients and powers of 10 separately. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Scientific notation',
            options: ['Multiply/divide: handle coefficients and powers of 10 separately.', 'a × 10ⁿ where 1 ≤ a < 10.', 'Small numbers: move decimal right, negative exponent.', 'move decimal left, positive exponent.']
          },
          {
            label: 'Large numbers',
            options: ['Multiply/divide: handle coefficients and powers of 10 separately.', 'Small numbers: move decimal right, negative exponent.', 'a × 10ⁿ where 1 ≤ a < 10.', 'move decimal left, positive exponent.']
          },
          {
            label: 'Key Insight',
            options: ['Multiply/divide: handle coefficients and powers of 10 separately.', 'a × 10ⁿ where 1 ≤ a < 10.', 'Small numbers: move decimal right, negative exponent.', 'move decimal left, positive exponent.']
          }
        ],
        correctAnswers: ['a × 10ⁿ where 1 ≤ a < 10.', 'move decimal left, positive exponent.', 'Small numbers: move decimal right, negative exponent.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Scientific notation: a × 10ⁿ where 1 ≤ a < 10. Large numbers: move decimal left, positive exponent. Key Insight: Small numbers: move decimal right, negative exponent.'
      }
    }
  ]
}
