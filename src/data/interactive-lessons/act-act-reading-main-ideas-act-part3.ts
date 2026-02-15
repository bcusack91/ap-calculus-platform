export const actReadingMainPart3Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r3-intro',
      type: 'text' as const,
      content: `
# Making Inferences

**Part 3 of 7 — Making Inferences**

Inferences: conclusions based on evidence + reasoning (not directly stated).

Must be strongly supported by the text — don't go too far.
      `
    },
    {
      id: 'act-r3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes inferences?',
            options: [
              'Inferences is a key concept for ACT English/Reading',
              'Must be strongly supported by the text — dont go too far',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Inferences: conclusions based on evidence + reasoning (not directly stated)'
          }
        ]
      }
    },
    {
      id: 'act-r3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** "It can be inferred" or "the passage suggests" = inference question.

**ACT Tip:** Eliminate answers that require outside knowledge or are too extreme.
      `
    },
    {
      id: 'act-r3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for making inferences?',
            options: [
              '"It can be inferred" or "the passage suggests" = inference question',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: '"It can be inferred" or "the passage suggests" = inference question'
          }
        ]
      }
    },
    {
      id: 'act-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Making Inferences:',
            options: ['Inferences: conclusions based on evidence + reason', 'Must be strongly supported by the text — don\'t go ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['"It can be inferred" or "the passage suggests" = i', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Inferences: conclusions based on evidence + reason', '"It can be inferred" or "the passage suggests" = i'],
        hint1: 'Think about making inferences',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Inferences: conclusions based on evidence + reasoning (not directly stated). "It can be inferred" or "the passage suggests" = inference question.'
      }
    }
  ]
}
