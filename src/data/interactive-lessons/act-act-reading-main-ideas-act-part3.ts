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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Inferences?',
            options: [
              'Eliminate answers that require outside knowledge or are too extreme.',
              'conclusions based on evidence + reasoning (not directly stated).',
              '"It can be inferred" or "the passage suggests" = inference question.',
              'Must be strongly supported by the text — don\'t go too far.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Inferences: conclusions based on evidence + reasoning (not directly stated). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Must be strongly supported by the text — don\'t go too far.',
              '"It can be inferred" or "the passage suggests" = inference question.',
              'conclusions based on evidence + reasoning (not directly stated).',
              'Eliminate answers that require outside knowledge or are too extreme.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: "It can be inferred" or "the passage suggests" = inference question. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Eliminate answers that require outside knowledge or are too extreme.',
              'Must be strongly supported by the text — don\'t go too far.',
              '"It can be inferred" or "the passage suggests" = inference question.',
              'conclusions based on evidence + reasoning (not directly stated).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Eliminate answers that require outside knowledge or are too extreme. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Inferences',
            options: ['Eliminate answers that require outside knowledge or are too extreme.', '"It can be inferred" or "the passage suggests" = inference question.', 'conclusions based on evidence + reasoning (not directly stated).', 'Must be strongly supported by the text — don\'t go too far.']
          },
          {
            label: 'Key Insight',
            options: ['conclusions based on evidence + reasoning (not directly stated).', 'Must be strongly supported by the text — don\'t go too far.', '"It can be inferred" or "the passage suggests" = inference question.', 'Eliminate answers that require outside knowledge or are too extreme.']
          },
          {
            label: 'ACT Tip',
            options: ['Eliminate answers that require outside knowledge or are too extreme.', '"It can be inferred" or "the passage suggests" = inference question.', 'conclusions based on evidence + reasoning (not directly stated).', 'Must be strongly supported by the text — don\'t go too far.']
          }
        ],
        correctAnswers: ['conclusions based on evidence + reasoning (not directly stated).', '"It can be inferred" or "the passage suggests" = inference question.', 'Eliminate answers that require outside knowledge or are too extreme.'],
        hint1: 'Think about what each concept specifically describes in Making Inferences.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Making Inferences describes a specific idea. Inferences: conclusions based on evidence + reasoning (not directly stated). Key Insight: "It can be inferred" or "the passage suggests" = inference question. ACT Tip: Eliminate answers that require outside knowledge or are too extreme.'
      }
    }
  ]
}
