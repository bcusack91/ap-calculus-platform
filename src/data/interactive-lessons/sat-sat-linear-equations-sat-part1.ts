export const satLinearEquationsPart1Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l1-intro',
      type: 'text' as const,
      content: `
# 📝 Linear Equations

**Part 1 of 7 — Linear Equations Basics**

A linear equation has the form ax + b = c, where x is the variable.

To solve, isolate x by performing inverse operations on both sides.
      `
    },
    {
      id: 'sat-l1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes a linear equation has the form ax + b = c, where x is the variable?',
            options: [
              'A linear equation has the form ax + b = c, where x is the variable is a fundamental concept in SAT Math',
              'To solve, isolate x by performing inverse operations on both sides',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'A linear equation has the form ax + b = c, where x is the variable'
          }
        ]
      }
    },
    {
      id: 'sat-l1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** The solution is the value that makes the equation true.

**SAT Tip:** Check your answer by substituting back into the original equation.
      `
    },
    {
      id: 'sat-l1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for linear equations basics?',
            options: [
              'The solution is the value that makes the equation true',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'The solution is the value that makes the equation true'
          }
        ]
      }
    },
    {
      id: 'sat-l1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Linear Equations Basics:',
            options: ['A linear equation has the form ax + b = c, where x', 'To solve, isolate x by performing inverse operatio', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['The solution is the value that makes the equation ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['A linear equation has the form ax + b = c, where x', 'The solution is the value that makes the equation '],
        hint1: 'Think about linear equations basics',
        hint2: 'Consider the best SAT strategy',
        explanation: 'A linear equation has the form ax + b = c, where x is the variable. The solution is the value that makes the equation true.'
      }
    }
  ]
}
