export const satLinearEquationsPart4Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l4-intro',
      type: 'text' as const,
      content: `
# Systems of Linear Equations

**Part 4 of 7 — Systems of Linear Equations**

A system has two or more equations with the same variables.

Substitution: solve one equation for a variable, plug into the other.
      `
    },
    {
      id: 'sat-l4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes a system has two or more equations with the same variables?',
            options: [
              'A system has two or more equations with the same variables is a fundamental concept in SAT Math',
              'Substitution: solve one equation for a variable, plug into the other',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'A system has two or more equations with the same variables'
          }
        ]
      }
    },
    {
      id: 'sat-l4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Elimination: add/subtract equations to eliminate a variable.

**SAT Tip:** No solution: parallel lines (same slope, different intercept); infinite solutions: same line.
      `
    },
    {
      id: 'sat-l4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for systems of linear equations?',
            options: [
              'Elimination: add/subtract equations to eliminate a variable',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Elimination: add/subtract equations to eliminate a variable'
          }
        ]
      }
    },
    {
      id: 'sat-l4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Systems of Linear Equations:',
            options: ['A system has two or more equations with the same v', 'Substitution: solve one equation for a variable, p', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Elimination: add/subtract equations to eliminate a', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['A system has two or more equations with the same v', 'Elimination: add/subtract equations to eliminate a'],
        hint1: 'Think about systems of linear equations',
        hint2: 'Consider the best SAT strategy',
        explanation: 'A system has two or more equations with the same variables. Elimination: add/subtract equations to eliminate a variable.'
      }
    }
  ]
}
