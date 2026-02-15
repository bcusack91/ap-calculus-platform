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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes semicolon?',
            options: [
              'Semicolon is a key concept for ACT English/Reading',
              'Semicolon + transitional word: "She studied hard; therefore, she passed."',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Semicolon: connects two related independent clauses (no conjunction)'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for semicolons & colons?',
            options: [
              'Colon: introduces a list, explanation, or elaboration',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Colon: introduces a list, explanation, or elaboration'
          }
        ]
      }
    },
    {
      id: 'act-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Semicolons & Colons:',
            options: ['Semicolon: connects two related independent clause', 'Semicolon + transitional word: "She studied hard; ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Colon: introduces a list, explanation, or elaborat', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Semicolon: connects two related independent clause', 'Colon: introduces a list, explanation, or elaborat'],
        hint1: 'Think about semicolons & colons',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Semicolon: connects two related independent clauses (no conjunction). Colon: introduces a list, explanation, or elaboration.'
      }
    }
  ]
}
