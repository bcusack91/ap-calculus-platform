export const satDataStatsPart4Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-d4-intro',
      type: 'text' as const,
      content: `
# Scatterplots & Line of Best Fit

**Part 4 of 7 — Scatterplots & Line of Best Fit**

Scatterplot: shows relationship between two variables.

Line of best fit: approximates the trend.
      `
    },
    {
      id: 'sat-d4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes scatterplot?',
            options: [
              'Scatterplot is a fundamental concept in SAT Math',
              'Line of best fit: approximates the trend',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Scatterplot: shows relationship between two variables'
          }
        ]
      }
    },
    {
      id: 'sat-d4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Positive correlation: both increase together; negative: one up, one down.

**SAT Tip:** r (correlation coefficient): closer to ±1 = stronger linear relationship.
      `
    },
    {
      id: 'sat-d4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for scatterplots & line of best fit?',
            options: [
              'Positive correlation: both increase together; negative: one up, one down',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Positive correlation: both increase together; negative: one up, one down'
          }
        ]
      }
    },
    {
      id: 'sat-d4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Scatterplots & Line of Best Fit:',
            options: ['Scatterplot: shows relationship between two variab', 'Line of best fit: approximates the trend', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Positive correlation: both increase together; nega', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Scatterplot: shows relationship between two variab', 'Positive correlation: both increase together; nega'],
        hint1: 'Think about scatterplots & line of best fit',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Scatterplot: shows relationship between two variables. Positive correlation: both increase together; negative: one up, one down.'
      }
    }
  ]
}
