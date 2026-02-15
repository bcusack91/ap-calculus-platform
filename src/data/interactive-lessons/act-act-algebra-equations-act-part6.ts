export const actAlgebraPart6Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Assign variables to unknowns.

"Is" = equals, "more than" = addition, "less than" = subtraction.
      `
    },
    {
      id: 'act-a6-quiz1',
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
      id: 'act-a6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** "Of" = multiplication, "per" = division.

**ACT Tip:** Set up the equation, solve, then verify your answer makes sense in context.
      `
    },
    {
      id: 'act-a6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
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
      id: 'act-a6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Assign variables to unknowns', '"Is" = equals, "more than" = addition, "less than"', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['"Of" = multiplication, "per" = division', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Assign variables to unknowns', '"Of" = multiplication, "per" = division'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Assign variables to unknowns. "Of" = multiplication, "per" = division.'
      }
    }
  ]
}
