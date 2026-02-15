export const satProbSolvDataPart3Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'sat-p3-intro',
      type: 'text' as const,
      content: `
# Inference & Prediction

**Part 3 of 7 — Inference & Prediction**

Make predictions using the line of best fit.

The prediction is most reliable within the data range (interpolation).
      `
    },
    {
      id: 'sat-p3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes make predictions using the line of best fit?',
            options: [
              'Make predictions using the line of best fit is a fundamental concept in SAT Math',
              'The prediction is most reliable within the data range (interpolation)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Make predictions using the line of best fit'
          }
        ]
      }
    },
    {
      id: 'sat-p3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Extrapolation (beyond the data) is less reliable.

**SAT Tip:** Correlation ≠ causation — SAT tests this concept directly.
      `
    },
    {
      id: 'sat-p3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for inference & prediction?',
            options: [
              'Extrapolation (beyond the data) is less reliable',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Extrapolation (beyond the data) is less reliable'
          }
        ]
      }
    },
    {
      id: 'sat-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Inference & Prediction:',
            options: ['Make predictions using the line of best fit', 'The prediction is most reliable within the data ra', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Extrapolation (beyond the data) is less reliable', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Make predictions using the line of best fit', 'Extrapolation (beyond the data) is less reliable'],
        hint1: 'Think about inference & prediction',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Make predictions using the line of best fit. Extrapolation (beyond the data) is less reliable.'
      }
    }
  ]
}
