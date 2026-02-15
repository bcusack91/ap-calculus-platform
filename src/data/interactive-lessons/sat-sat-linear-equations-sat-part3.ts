export const satLinearEquationsPart3Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l3-intro',
      type: 'text' as const,
      content: `
# Linear Inequalities

**Part 3 of 7 — Linear Inequalities**

Inequalities use <, >, ≤, ≥ instead of =.

Solve like equations, but flip the inequality when multiplying/dividing by a negative.
      `
    },
    {
      id: 'sat-l3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes inequalities use <, >, ≤, ≥ instead of =?',
            options: [
              'Inequalities use <, >, ≤, ≥ instead of = is a fundamental concept in SAT Math',
              'Solve like equations, but flip the inequality when multiplying/dividing by a negative',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Inequalities use <, >, ≤, ≥ instead of ='
          }
        ]
      }
    },
    {
      id: 'sat-l3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Graph solutions on a number line.

**SAT Tip:** Compound inequalities: -3 < 2x + 1 ≤ 7 — solve both parts.
      `
    },
    {
      id: 'sat-l3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for linear inequalities?',
            options: [
              'Graph solutions on a number line',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Graph solutions on a number line'
          }
        ]
      }
    },
    {
      id: 'sat-l3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Linear Inequalities:',
            options: ['Inequalities use <, >, ≤, ≥ instead of =', 'Solve like equations, but flip the inequality when', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Graph solutions on a number line', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Inequalities use <, >, ≤, ≥ instead of =', 'Graph solutions on a number line'],
        hint1: 'Think about linear inequalities',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Inequalities use <, >, ≤, ≥ instead of =. Graph solutions on a number line.'
      }
    }
  ]
}
