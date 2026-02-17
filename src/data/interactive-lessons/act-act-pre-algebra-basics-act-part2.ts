export const actPreAlgebraPart2Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-p2-intro',
      type: 'text' as const,
      content: `
# Fractions & Decimals

**Part 2 of 7 — Fractions & Decimals**

Convert between fractions, decimals, and percents fluently.

To add/subtract fractions: find a common denominator.
      `
    },
    {
      id: 'act-p2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Convert between fractions, decimals,…?',
            options: [
              'Multiply fractions: multiply across (numerator × numerator, denominator × denominator).',
              'Divide fractions: multiply by the reciprocal (flip and multiply).',
              'find a common denominator.',
              'Convert between fractions, decimals, and percents fluently.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Convert between fractions, decimals, and percents fluently. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Fractions & Decimals, which explains Key Insight?',
            options: [
              'Convert between fractions, decimals, and percents fluently.',
              'Multiply fractions: multiply across (numerator × numerator, denominator × denominator).',
              'Divide fractions: multiply by the reciprocal (flip and multiply).',
              'find a common denominator.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Multiply fractions: multiply across (numerator × numerator, denominator × denominator). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-p2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Multiply fractions: multiply across (numerator × numerator, denominator × denominator).

**ACT Tip:** Divide fractions: multiply by the reciprocal (flip and multiply).
      `
    },
    {
      id: 'act-p2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Convert between fractions, decimals, and percents fluently.',
              'find a common denominator.',
              'Multiply fractions: multiply across (numerator × numerator, denominator × denominator).',
              'Divide fractions: multiply by the reciprocal (flip and multiply).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Divide fractions: multiply by the reciprocal (flip and multiply). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To add/subtract fractions',
            options: ['Divide fractions: multiply by the reciprocal (flip and multiply).', 'find a common denominator.', 'Convert between fractions, decimals, and percents fluently.', 'Multiply fractions: multiply across (numerator × numerator, denominator × denominator).']
          },
          {
            label: 'Key Insight',
            options: ['Divide fractions: multiply by the reciprocal (flip and multiply).', 'Convert between fractions, decimals, and percents fluently.', 'Multiply fractions: multiply across (numerator × numerator, denominator × denominator).', 'find a common denominator.']
          },
          {
            label: 'ACT Tip',
            options: ['Convert between fractions, decimals, and percents fluently.', 'Multiply fractions: multiply across (numerator × numerator, denominator × denominator).', 'find a common denominator.', 'Divide fractions: multiply by the reciprocal (flip and multiply).']
          }
        ],
        correctAnswers: ['find a common denominator.', 'Multiply fractions: multiply across (numerator × numerator, denominator × denominator).', 'Divide fractions: multiply by the reciprocal (flip and multiply).'],
        hint1: 'Think about what each concept specifically describes in Fractions & Decimals.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Fractions & Decimals describes a specific idea. To add/subtract fractions: find a common denominator. Key Insight: Multiply fractions: multiply across (numerator × numerator, denominator × denominator). ACT Tip: Divide fractions: multiply by the reciprocal (flip and multiply).'
      }
    }
  ]
}
