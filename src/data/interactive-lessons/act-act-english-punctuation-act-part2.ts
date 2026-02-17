export const actPunctuationPart2Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-e2-intro',
      type: 'text' as const,
      content: `
# Semicolons & Colons

**Part 2 of 7 — Semicolons & Colons**

Semicolon: connects two related independent clauses (no conjunction).

Semicolon + transitional word: "She studied hard; therefore, she passed.".
      `
    },
    {
      id: 'act-e2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Semicolon?',
            options: [
              'Before a colon: must be an independent clause.',
              'Colon: introduces a list, explanation, or elaboration.',
              '"She studied hard; therefore, she passed.".',
              'connects two related independent clauses (no conjunction).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Semicolon: connects two related independent clauses (no conjunction). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'connects two related independent clauses (no conjunction).',
              '"She studied hard; therefore, she passed.".',
              'Before a colon: must be an independent clause.',
              'Colon: introduces a list, explanation, or elaboration.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Colon: introduces a list, explanation, or elaboration. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Colon: introduces a list, explanation, or elaboration.

**ACT Tip:** Before a colon: must be an independent clause.
      `
    },
    {
      id: 'act-e2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'connects two related independent clauses (no conjunction).',
              'Before a colon: must be an independent clause.',
              'Colon: introduces a list, explanation, or elaboration.',
              '"She studied hard; therefore, she passed.".'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Before a colon: must be an independent clause. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Semicolon',
            options: ['Before a colon: must be an independent clause.', 'Colon: introduces a list, explanation, or elaboration.', 'connects two related independent clauses (no conjunction).', '"She studied hard; therefore, she passed.".']
          },
          {
            label: 'Semicolon + transitional word',
            options: ['"She studied hard; therefore, she passed.".', 'Before a colon: must be an independent clause.', 'connects two related independent clauses (no conjunction).', 'Colon: introduces a list, explanation, or elaboration.']
          },
          {
            label: 'Key Insight',
            options: ['Colon: introduces a list, explanation, or elaboration.', 'Before a colon: must be an independent clause.', 'connects two related independent clauses (no conjunction).', '"She studied hard; therefore, she passed.".']
          }
        ],
        correctAnswers: ['connects two related independent clauses (no conjunction).', '"She studied hard; therefore, she passed.".', 'Colon: introduces a list, explanation, or elaboration.'],
        hint1: 'Think about what each concept specifically describes in Semicolons & Colons.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Semicolons & Colons describes a specific idea. Semicolon: connects two related independent clauses (no conjunction). Semicolon + transitional word: "She studied hard; therefore, she passed.". Key Insight: Colon: introduces a list, explanation, or elaboration.'
      }
    }
  ]
}
