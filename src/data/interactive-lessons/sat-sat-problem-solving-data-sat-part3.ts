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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Make predictions using the line of best…?',
            options: [
              'The prediction is most reliable within the data range (interpolation).',
              'Correlation ≠ causation — SAT tests this concept directly.',
              'Extrapolation (beyond the data) is less reliable.',
              'Make predictions using the line of best fit.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Make predictions using the line of best fit. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Extrapolation (beyond the data) is less reliable.',
              'Correlation ≠ causation — SAT tests this concept directly.',
              'Make predictions using the line of best fit.',
              'The prediction is most reliable within the data range (interpolation).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Extrapolation (beyond the data) is less reliable. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Inference & Prediction, which correctly describes SAT Tip?',
            options: [
              'Extrapolation (beyond the data) is less reliable.',
              'Make predictions using the line of best fit.',
              'The prediction is most reliable within the data range (interpolation).',
              'Correlation ≠ causation — SAT tests this concept directly.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Correlation ≠ causation — SAT tests this concept directly. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['The prediction is most reliable within the data range (interpolation).', 'Make predictions using the line of best fit.', 'Correlation ≠ causation — SAT tests this concept directly.', 'Extrapolation (beyond the data) is less reliable.']
          },
          {
            label: 'SAT Tip',
            options: ['Correlation ≠ causation — SAT tests this concept directly.', 'Make predictions using the line of best fit.', 'The prediction is most reliable within the data range (interpolation).', 'Extrapolation (beyond the data) is less reliable.']
          }
        ],
        correctAnswers: ['Extrapolation (beyond the data) is less reliable.', 'Correlation ≠ causation — SAT tests this concept directly.'],
        hint1: 'Think about what each concept specifically describes in Inference & Prediction.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Inference & Prediction describes a specific idea. Key Insight: Extrapolation (beyond the data) is less reliable. SAT Tip: Correlation ≠ causation — SAT tests this concept directly.'
      }
    }
  ]
}
