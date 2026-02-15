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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes convert between fractions, decimals, and percents fluently?',
            options: [
              'Convert between fractions, decimals, and percents fluently is a key concept for ACT Math',
              'To add/subtract fractions: find a common denominator',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Convert between fractions, decimals, and percents fluently'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for fractions & decimals?',
            options: [
              'Multiply fractions: multiply across (numerator × numerator, denominator × denominator)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Multiply fractions: multiply across (numerator × numerator, denominator × denominator)'
          }
        ]
      }
    },
    {
      id: 'act-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Fractions & Decimals:',
            options: ['Convert between fractions, decimals, and percents ', 'To add/subtract fractions: find a common denominat', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Multiply fractions: multiply across (numerator × n', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Convert between fractions, decimals, and percents ', 'Multiply fractions: multiply across (numerator × n'],
        hint1: 'Think about fractions & decimals',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Convert between fractions, decimals, and percents fluently. Multiply fractions: multiply across (numerator × numerator, denominator × denominator).'
      }
    }
  ]
}
