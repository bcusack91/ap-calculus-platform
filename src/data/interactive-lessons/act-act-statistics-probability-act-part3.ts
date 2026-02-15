export const actStatProbPart3Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-s3-intro',
      type: 'text' as const,
      content: `
# Counting Principles

**Part 3 of 7 — Counting Principles**

Fundamental counting principle: if event A has m outcomes and B has n outcomes, together they have m × n outcomes.

Tree diagrams help visualize sequential events.
      `
    },
    {
      id: 'act-s3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes fundamental counting principle?',
            options: [
              'Fundamental counting principle is a key concept for ACT Math',
              'Tree diagrams help visualize sequential events',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Fundamental counting principle: if event A has m outcomes and B has n outcomes, together they have m × n outcomes'
          }
        ]
      }
    },
    {
      id: 'act-s3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** With replacement: probabilities stay the same.

**ACT Tip:** Without replacement: probabilities change (dependent events).
      `
    },
    {
      id: 'act-s3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for counting principles?',
            options: [
              'With replacement: probabilities stay the same',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'With replacement: probabilities stay the same'
          }
        ]
      }
    },
    {
      id: 'act-s3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Counting Principles:',
            options: ['Fundamental counting principle: if event A has m o', 'Tree diagrams help visualize sequential events', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['With replacement: probabilities stay the same', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Fundamental counting principle: if event A has m o', 'With replacement: probabilities stay the same'],
        hint1: 'Think about counting principles',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Fundamental counting principle: if event A has m outcomes and B has n outcomes, together they have m × n outcomes. With replacement: probabilities stay the same.'
      }
    }
  ]
}
