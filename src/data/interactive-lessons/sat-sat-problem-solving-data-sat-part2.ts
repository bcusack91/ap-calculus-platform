export const satProbSolvDataPart2Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'sat-p2-intro',
      type: 'text' as const,
      content: `
# Two-Way Tables

**Part 2 of 7 — Two-Way Tables**

Two-way tables organize data by two categorical variables.

Joint frequency: a specific cell value.
      `
    },
    {
      id: 'sat-p2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes two-way tables organize data by two categorical variables?',
            options: [
              'Two-way tables organize data by two categorical variables is a fundamental concept in SAT Math',
              'Joint frequency: a specific cell value',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Two-way tables organize data by two categorical variables'
          }
        ]
      }
    },
    {
      id: 'sat-p2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Marginal frequency: row or column totals.

**SAT Tip:** Conditional probability: focus on one row or column only.
      `
    },
    {
      id: 'sat-p2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for two-way tables?',
            options: [
              'Marginal frequency: row or column totals',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Marginal frequency: row or column totals'
          }
        ]
      }
    },
    {
      id: 'sat-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Two-Way Tables:',
            options: ['Two-way tables organize data by two categorical va', 'Joint frequency: a specific cell value', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Marginal frequency: row or column totals', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Two-way tables organize data by two categorical va', 'Marginal frequency: row or column totals'],
        hint1: 'Think about two-way tables',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Two-way tables organize data by two categorical variables. Marginal frequency: row or column totals.'
      }
    }
  ]
}
