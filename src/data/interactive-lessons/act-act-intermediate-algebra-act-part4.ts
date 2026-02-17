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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "i = √(-1), i² = -1." refer to in ACT prep?',
            options: [
              'Powers of i cycle: i, -1, -i, 1, i, -1, ....',
              'i = √(-1), i² = -1.',
              'Multiply using FOIL (remember i² = -1).',
              'combine real and imaginary parts separately.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — i = √(-1), i² = -1. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Complex Numbers, which explains Key Insight?',
            options: [
              'combine real and imaginary parts separately.',
              'Multiply using FOIL (remember i² = -1).',
              'i = √(-1), i² = -1.',
              'Powers of i cycle: i, -1, -i, 1, i, -1, ....'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Multiply using FOIL (remember i² = -1). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'combine real and imaginary parts separately.',
              'Multiply using FOIL (remember i² = -1).',
              'Powers of i cycle: i, -1, -i, 1, i, -1, ....',
              'i = √(-1), i² = -1.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Powers of i cycle: i, -1, -i, 1, i, -1, .... Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-i4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Add/subtract',
            options: ['Powers of i cycle: i, -1, -i, 1, i, -1, ....', 'Multiply using FOIL (remember i² = -1).', 'i = √(-1), i² = -1.', 'combine real and imaginary parts separately.']
          },
          {
            label: 'Key Insight',
            options: ['Powers of i cycle: i, -1, -i, 1, i, -1, ....', 'Multiply using FOIL (remember i² = -1).', 'i = √(-1), i² = -1.', 'combine real and imaginary parts separately.']
          },
          {
            label: 'ACT Tip',
            options: ['combine real and imaginary parts separately.', 'Multiply using FOIL (remember i² = -1).', 'i = √(-1), i² = -1.', 'Powers of i cycle: i, -1, -i, 1, i, -1, ....']
          }
        ],
        correctAnswers: ['combine real and imaginary parts separately.', 'Multiply using FOIL (remember i² = -1).', 'Powers of i cycle: i, -1, -i, 1, i, -1, ....'],
        hint1: 'Think about what each concept specifically describes in Complex Numbers.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Complex Numbers describes a specific idea. Add/subtract: combine real and imaginary parts separately. Key Insight: Multiply using FOIL (remember i² = -1). ACT Tip: Powers of i cycle: i, -1, -i, 1, i, -1, ....'
      }
    }
  ]
}
