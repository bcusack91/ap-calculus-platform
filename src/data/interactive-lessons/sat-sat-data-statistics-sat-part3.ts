export const satDataStatsPart3Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-d3-intro',
      type: 'text' as const,
      content: `
# Data Displays

**Part 3 of 7 — Data Displays**

Histograms: bars show frequency for intervals (no gaps).

Box plots: show min, Q1, median, Q3, max.
      `
    },
    {
      id: 'sat-d3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes histograms?',
            options: [
              'Histograms is a fundamental concept in SAT Math',
              'Box plots: show min, Q1, median, Q3, max',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Histograms: bars show frequency for intervals (no gaps)'
          }
        ]
      }
    },
    {
      id: 'sat-d3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** IQR = Q3 - Q1 (middle 50% of data).

**SAT Tip:** Outliers: typically more than 1.5 × IQR below Q1 or above Q3.
      `
    },
    {
      id: 'sat-d3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for data displays?',
            options: [
              'IQR = Q3 - Q1 (middle 50% of data)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'IQR = Q3 - Q1 (middle 50% of data)'
          }
        ]
      }
    },
    {
      id: 'sat-d3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Data Displays:',
            options: ['Histograms: bars show frequency for intervals (no ', 'Box plots: show min, Q1, median, Q3, max', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['IQR = Q3 - Q1 (middle 50% of data)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Histograms: bars show frequency for intervals (no ', 'IQR = Q3 - Q1 (middle 50% of data)'],
        hint1: 'Think about data displays',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Histograms: bars show frequency for intervals (no gaps). IQR = Q3 - Q1 (middle 50% of data).'
      }
    }
  ]
}
