export const actAlgebraPart7Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Assign variables to unknowns.

"Is" = equals, "more than" = addition, "less than" = subtraction.
      `
    },
    {
      id: 'act-a7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes assign variables to unknowns?',
            options: [
              'Assign variables to unknowns is a key concept for ACT Math',
              '"Is" = equals, "more than" = addition, "less than" = subtraction',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Assign variables to unknowns'
          }
        ]
      }
    },
    {
      id: 'act-a7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** "Of" = multiplication, "per" = division.

**ACT Tip:** Set up the equation, solve, then verify your answer makes sense in context.
      `
    },
    {
      id: 'act-a7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              '"Of" = multiplication, "per" = division',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: '"Of" = multiplication, "per" = division'
          }
        ]
      }
    },
    {
      id: 'act-a7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['Assign variables to unknowns', '"Is" = equals, "more than" = addition, "less than"', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['"Of" = multiplication, "per" = division', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Assign variables to unknowns', '"Of" = multiplication, "per" = division'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Assign variables to unknowns. "Of" = multiplication, "per" = division.'
      }
    }
  ]
}
