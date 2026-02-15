export const actStatProbPart2Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-s2-intro',
      type: 'text' as const,
      content: `
# Data Displays

**Part 2 of 7 — Data Displays**

Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots.

Read axes labels and scales carefully.
      `
    },
    {
      id: 'act-s2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots?',
            options: [
              'Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots is a key concept for ACT Math',
              'Read axes labels and scales carefully',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots'
          }
        ]
      }
    },
    {
      id: 'act-s2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Box plots: min, Q1, median, Q3, max.

**ACT Tip:** Histograms show frequency distribution — bars touch (no gaps).
      `
    },
    {
      id: 'act-s2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for data displays?',
            options: [
              'Box plots: min, Q1, median, Q3, max',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Box plots: min, Q1, median, Q3, max'
          }
        ]
      }
    },
    {
      id: 'act-s2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Data Displays:',
            options: ['Bar graphs, histograms, line graphs, pie charts, s', 'Read axes labels and scales carefully', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Box plots: min, Q1, median, Q3, max', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Bar graphs, histograms, line graphs, pie charts, s', 'Box plots: min, Q1, median, Q3, max'],
        hint1: 'Think about data displays',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots. Box plots: min, Q1, median, Q3, max.'
      }
    }
  ]
}
