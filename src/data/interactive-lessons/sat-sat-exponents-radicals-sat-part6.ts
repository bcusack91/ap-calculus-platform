export const satExponentsPart6Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-e6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Scientific notation: a × 10ⁿ where 1 ≤ a < 10.

Large numbers: move decimal left, positive exponent.
      `
    },
    {
      id: 'sat-e6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Scientific notation?',
            options: [
              'Small numbers: move decimal right, negative exponent.',
              'move decimal left, positive exponent.',
              'Multiply/divide: handle coefficients and powers of 10 separately.',
              'a × 10ⁿ where 1 ≤ a < 10.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Scientific notation: a × 10ⁿ where 1 ≤ a < 10. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'a × 10ⁿ where 1 ≤ a < 10.',
              'move decimal left, positive exponent.',
              'Small numbers: move decimal right, negative exponent.',
              'Multiply/divide: handle coefficients and powers of 10 separately.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Small numbers: move decimal right, negative exponent. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Small numbers: move decimal right, negative exponent.

**SAT Tip:** Multiply/divide: handle coefficients and powers of 10 separately.
      `
    },
    {
      id: 'sat-e6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Small numbers: move decimal right, negative exponent.',
              'move decimal left, positive exponent.',
              'a × 10ⁿ where 1 ≤ a < 10.',
              'Multiply/divide: handle coefficients and powers of 10 separately.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Multiply/divide: handle coefficients and powers of 10 separately. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Scientific notation',
            options: ['Multiply/divide: handle coefficients and powers of 10 separately.', 'move decimal left, positive exponent.', 'a × 10ⁿ where 1 ≤ a < 10.', 'Small numbers: move decimal right, negative exponent.']
          },
          {
            label: 'Large numbers',
            options: ['Multiply/divide: handle coefficients and powers of 10 separately.', 'a × 10ⁿ where 1 ≤ a < 10.', 'move decimal left, positive exponent.', 'Small numbers: move decimal right, negative exponent.']
          },
          {
            label: 'Key Insight',
            options: ['move decimal left, positive exponent.', 'Multiply/divide: handle coefficients and powers of 10 separately.', 'a × 10ⁿ where 1 ≤ a < 10.', 'Small numbers: move decimal right, negative exponent.']
          }
        ],
        correctAnswers: ['a × 10ⁿ where 1 ≤ a < 10.', 'move decimal left, positive exponent.', 'Small numbers: move decimal right, negative exponent.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Scientific notation: a × 10ⁿ where 1 ≤ a < 10. Large numbers: move decimal left, positive exponent. Key Insight: Small numbers: move decimal right, negative exponent.'
      }
    }
  ]
}
