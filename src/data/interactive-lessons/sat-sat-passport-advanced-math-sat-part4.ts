export const satPassportAdvPart4Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-p4-intro',
      type: 'text' as const,
      content: `
# Isolating Variables

**Part 4 of 7 — Isolating Variables**

Rearrange formulas to solve for any variable.

Treat all other variables as constants.
      `
    },
    {
      id: 'sat-p4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes rearrange formulas to solve for any variable?',
            options: [
              'Rearrange formulas to solve for any variable is a fundamental concept in SAT Math',
              'Treat all other variables as constants',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Rearrange formulas to solve for any variable'
          }
        ]
      }
    },
    {
      id: 'sat-p4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Apply the same algebraic steps as solving equations.

**SAT Tip:** Example: A = πr²h, solve for h → h = A/(πr²).
      `
    },
    {
      id: 'sat-p4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for isolating variables?',
            options: [
              'Apply the same algebraic steps as solving equations',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Apply the same algebraic steps as solving equations'
          }
        ]
      }
    },
    {
      id: 'sat-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Isolating Variables:',
            options: ['Rearrange formulas to solve for any variable', 'Treat all other variables as constants', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Apply the same algebraic steps as solving equation', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Rearrange formulas to solve for any variable', 'Apply the same algebraic steps as solving equation'],
        hint1: 'Think about isolating variables',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Rearrange formulas to solve for any variable. Apply the same algebraic steps as solving equations.'
      }
    }
  ]
}
