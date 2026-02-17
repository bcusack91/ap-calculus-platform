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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Wrong answers often?',
            options: [
              'are too extreme, use passage words out of context, or are partially true.',
              '"Always" and "never" are usually wrong unless strongly supported.',
              'If two answers seem similar, one is likely a trap — find the key difference.',
              'The correct answer is always supported by specific text.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Wrong answers often: are too extreme, use passage words out of context, or are partially true. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'are too extreme, use passage words out of context, or are partially true.',
              'If two answers seem similar, one is likely a trap — find the key difference.',
              '"Always" and "never" are usually wrong unless strongly supported.',
              'The correct answer is always supported by specific text.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: If two answers seem similar, one is likely a trap — find the key difference. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Eliminating Wrong Answers, which correctly describes ACT Tip?',
            options: [
              '"Always" and "never" are usually wrong unless strongly supported.',
              'The correct answer is always supported by specific text.',
              'If two answers seem similar, one is likely a trap — find the key difference.',
              'are too extreme, use passage words out of context, or are partially true.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: The correct answer is always supported by specific text. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Wrong answers often',
            options: ['If two answers seem similar, one is likely a trap — find the key difference.', 'are too extreme, use passage words out of context, or are partially true.', 'The correct answer is always supported by specific text.', '"Always" and "never" are usually wrong unless strongly supported.']
          },
          {
            label: 'Key Insight',
            options: ['If two answers seem similar, one is likely a trap — find the key difference.', 'are too extreme, use passage words out of context, or are partially true.', 'The correct answer is always supported by specific text.', '"Always" and "never" are usually wrong unless strongly supported.']
          },
          {
            label: 'ACT Tip',
            options: ['If two answers seem similar, one is likely a trap — find the key difference.', 'are too extreme, use passage words out of context, or are partially true.', '"Always" and "never" are usually wrong unless strongly supported.', 'The correct answer is always supported by specific text.']
          }
        ],
        correctAnswers: ['are too extreme, use passage words out of context, or are partially true.', 'If two answers seem similar, one is likely a trap — find the key difference.', 'The correct answer is always supported by specific text.'],
        hint1: 'Think about what each concept specifically describes in Eliminating Wrong Answers.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Eliminating Wrong Answers describes a specific idea. Wrong answers often: are too extreme, use passage words out of context, or are partially true. Key Insight: If two answers seem similar, one is likely a trap — find the key difference. ACT Tip: The correct answer is always supported by specific text.'
      }
    }
  ]
}
