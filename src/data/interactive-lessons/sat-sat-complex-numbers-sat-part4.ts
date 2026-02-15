export const satComplexPart4Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-c4-intro',
      type: 'text' as const,
      content: `
# Powers of i

**Part 4 of 7 — Powers of i**

i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats.

To find iⁿ: divide n by 4, use the remainder.
      `
    },
    {
      id: 'sat-c4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats?',
            options: [
              'i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats is a fundamental concept in SAT Math',
              'To find iⁿ: divide n by 4, use the remainder',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats'
          }
        ]
      }
    },
    {
      id: 'sat-c4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i.

**SAT Tip:** Example: i²³ → 23 ÷ 4 = 5 remainder 3 → i²³ = -i.
      `
    },
    {
      id: 'sat-c4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for powers of i?',
            options: [
              'Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i'
          }
        ]
      }
    },
    {
      id: 'sat-c4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Powers of i:',
            options: ['i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern', 'To find iⁿ: divide n by 4, use the remainder', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Remainder 0 → 1, remainder 1 → i, remainder 2 → -1', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern', 'Remainder 0 → 1, remainder 1 → i, remainder 2 → -1'],
        hint1: 'Think about powers of i',
        hint2: 'Consider the best SAT strategy',
        explanation: 'i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats. Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i.'
      }
    }
  ]
}
