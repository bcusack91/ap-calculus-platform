export const actScienceDataPart3Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s3-intro',
      type: 'text' as const,
      content: `
# Identifying Trends

**Part 3 of 7 — Identifying Trends**

Direct relationship: both variables increase together.

Inverse relationship: one increases as the other decreases.
      `
    },
    {
      id: 'act-s3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Direct relationship?',
            options: [
              'both variables increase together.',
              'Look for patterns: linear, exponential, cyclical.',
              'Describe trends using "as X increases, Y...".',
              'one increases as the other decreases.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Direct relationship: both variables increase together. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'one increases as the other decreases.',
              'both variables increase together.',
              'Look for patterns: linear, exponential, cyclical.',
              'Describe trends using "as X increases, Y...".'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Look for patterns: linear, exponential, cyclical. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look for patterns: linear, exponential, cyclical.

**ACT Tip:** Describe trends using "as X increases, Y...".
      `
    },
    {
      id: 'act-s3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Describe trends using "as X increases, Y...".',
              'one increases as the other decreases.',
              'Look for patterns: linear, exponential, cyclical.',
              'both variables increase together.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Describe trends using "as X increases, Y...". Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Direct relationship',
            options: ['Look for patterns: linear, exponential, cyclical.', 'Describe trends using "as X increases, Y...".', 'both variables increase together.', 'one increases as the other decreases.']
          },
          {
            label: 'Inverse relationship',
            options: ['one increases as the other decreases.', 'Describe trends using "as X increases, Y...".', 'Look for patterns: linear, exponential, cyclical.', 'both variables increase together.']
          },
          {
            label: 'Key Insight',
            options: ['Look for patterns: linear, exponential, cyclical.', 'one increases as the other decreases.', 'both variables increase together.', 'Describe trends using "as X increases, Y...".']
          }
        ],
        correctAnswers: ['both variables increase together.', 'one increases as the other decreases.', 'Look for patterns: linear, exponential, cyclical.'],
        hint1: 'Think about what each concept specifically describes in Identifying Trends.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Identifying Trends describes a specific idea. Direct relationship: both variables increase together. Inverse relationship: one increases as the other decreases. Key Insight: Look for patterns: linear, exponential, cyclical.'
      }
    }
  ]
}
