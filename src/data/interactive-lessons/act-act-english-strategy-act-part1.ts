export const actEnglishStratPart1Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-e1-intro',
      type: 'text' as const,
      content: `
# 📋 English Strategy

**Part 1 of 7 — ACT English Overview**

75 questions in 45 minutes = 36 seconds per question.

5 passages with 15 questions each.
      `
    },
    {
      id: 'act-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains 75 questions in 45 minutes = 36 seconds…?',
            options: [
              '5 passages with 15 questions each.',
              '75 questions in 45 minutes = 36 seconds per question.',
              'Two main types: conventions of standard English (grammar) and production of writing (rhetoric).',
              'Questions are embedded in the passage — read the full context.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — 75 questions in 45 minutes = 36 seconds per question. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Two main types: conventions of standard English (grammar) and production of writing (rhetoric).',
              '75 questions in 45 minutes = 36 seconds per question.',
              '5 passages with 15 questions each.',
              'Questions are embedded in the passage — read the full context.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Two main types: conventions of standard English (grammar) and production of writing (rhetoric). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Two main types: conventions of standard English (grammar) and production of writing (rhetoric).

**ACT Tip:** Questions are embedded in the passage — read the full context.
      `
    },
    {
      id: 'act-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Questions are embedded in the passage — read the full context.',
              'Two main types: conventions of standard English (grammar) and production of writing (rhetoric).',
              '75 questions in 45 minutes = 36 seconds per question.',
              '5 passages with 15 questions each.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Questions are embedded in the passage — read the full context. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Questions are embedded in the passage — read the full context.', '75 questions in 45 minutes = 36 seconds per question.', '5 passages with 15 questions each.', 'Two main types: conventions of standard English (grammar) and production of writing (rhetoric).']
          },
          {
            label: 'ACT Tip',
            options: ['Two main types: conventions of standard English (grammar) and production of writing (rhetoric).', '5 passages with 15 questions each.', 'Questions are embedded in the passage — read the full context.', '75 questions in 45 minutes = 36 seconds per question.']
          }
        ],
        correctAnswers: ['Two main types: conventions of standard English (grammar) and production of writing (rhetoric).', 'Questions are embedded in the passage — read the full context.'],
        hint1: 'Think about what each concept specifically describes in English Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in English Strategy describes a specific idea. Key Insight: Two main types: conventions of standard English (grammar) and production of writing (rhetoric). ACT Tip: Questions are embedded in the passage — read the full context.'
      }
    }
  ]
}
