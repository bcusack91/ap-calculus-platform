export const actAlgebraPart1Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a1-intro',
      type: 'text' as const,
      content: `
# 📋 Algebra Equations

**Part 1 of 7 — Linear Equations**

Isolate the variable using inverse operations.

Multi-step: distribute, combine like terms, then isolate.
      `
    },
    {
      id: 'act-a1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes isolate the variable using inverse operations?',
            options: [
              'Isolate the variable using inverse operations is a key concept for ACT Math',
              'Multi-step: distribute, combine like terms, then isolate',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Isolate the variable using inverse operations'
          }
        ]
      }
    },
    {
      id: 'act-a1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Variables on both sides: move all variable terms to one side.

**ACT Tip:** Check your answer by substituting back into the original equation.
      `
    },
    {
      id: 'act-a1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for linear equations?',
            options: [
              'Variables on both sides: move all variable terms to one side',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Variables on both sides: move all variable terms to one side'
          }
        ]
      }
    },
    {
      id: 'act-a1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Linear Equations:',
            options: ['Isolate the variable using inverse operations', 'Multi-step: distribute, combine like terms, then i', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Variables on both sides: move all variable terms t', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Isolate the variable using inverse operations', 'Variables on both sides: move all variable terms t'],
        hint1: 'Think about linear equations',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Isolate the variable using inverse operations. Variables on both sides: move all variable terms to one side.'
      }
    }
  ]
}
