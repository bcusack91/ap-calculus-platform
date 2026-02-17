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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then…" refer to in SAT prep?',
            options: [
              'i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats.',
              'Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i.',
              'divide n by 4, use the remainder.',
              'Example: i²³ → 23 ÷ 4 = 5 remainder 3 → i²³ = -i.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Example: i²³ → 23 ÷ 4 = 5 remainder 3 → i²³ = -i.',
              'i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats.',
              'divide n by 4, use the remainder.',
              'Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i.',
              'Example: i²³ → 23 ÷ 4 = 5 remainder 3 → i²³ = -i.',
              'divide n by 4, use the remainder.',
              'i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Example: i²³ → 23 ÷ 4 = 5 remainder 3 → i²³ = -i. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find iⁿ',
            options: ['i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats.', 'divide n by 4, use the remainder.', 'Example: i²³ → 23 ÷ 4 = 5 remainder 3 → i²³ = -i.', 'Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i.']
          },
          {
            label: 'Key Insight',
            options: ['i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats.', 'Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i.', 'divide n by 4, use the remainder.', 'Example: i²³ → 23 ÷ 4 = 5 remainder 3 → i²³ = -i.']
          },
          {
            label: 'SAT Tip',
            options: ['Example: i²³ → 23 ÷ 4 = 5 remainder 3 → i²³ = -i.', 'Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i.', 'i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats.', 'divide n by 4, use the remainder.']
          }
        ],
        correctAnswers: ['divide n by 4, use the remainder.', 'Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i.', 'Example: i²³ → 23 ÷ 4 = 5 remainder 3 → i²³ = -i.'],
        hint1: 'Think about what each concept specifically describes in Powers of i.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Powers of i describes a specific idea. To find iⁿ: divide n by 4, use the remainder. Key Insight: Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i. SAT Tip: Example: i²³ → 23 ÷ 4 = 5 remainder 3 → i²³ = -i.'
      }
    }
  ]
}
