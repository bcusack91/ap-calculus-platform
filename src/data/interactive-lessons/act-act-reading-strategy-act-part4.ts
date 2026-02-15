export const actReadingStratPart4Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-r4-intro',
      type: 'text' as const,
      content: `
# Eliminating Wrong Answers

**Part 4 of 7 — Eliminating Wrong Answers**

Wrong answers often: are too extreme, use passage words out of context, or are partially true.

"Always" and "never" are usually wrong unless strongly supported.
      `
    },
    {
      id: 'act-r4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes wrong answers often?',
            options: [
              'Wrong answers often is a key concept for ACT English/Reading',
              '"Always" and "never" are usually wrong unless strongly supported',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Wrong answers often: are too extreme, use passage words out of context, or are partially true'
          }
        ]
      }
    },
    {
      id: 'act-r4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** If two answers seem similar, one is likely a trap — find the key difference.

**ACT Tip:** The correct answer is always supported by specific text.
      `
    },
    {
      id: 'act-r4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for eliminating wrong answers?',
            options: [
              'If two answers seem similar, one is likely a trap — find the key difference',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'If two answers seem similar, one is likely a trap — find the key difference'
          }
        ]
      }
    },
    {
      id: 'act-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Eliminating Wrong Answers:',
            options: ['Wrong answers often: are too extreme, use passage ', '"Always" and "never" are usually wrong unless stro', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['If two answers seem similar, one is likely a trap ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Wrong answers often: are too extreme, use passage ', 'If two answers seem similar, one is likely a trap '],
        hint1: 'Think about eliminating wrong answers',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Wrong answers often: are too extreme, use passage words out of context, or are partially true. If two answers seem similar, one is likely a trap — find the key difference.'
      }
    }
  ]
}
