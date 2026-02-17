export const actScienceDataPart5Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s5-intro',
      type: 'text' as const,
      content: `
# Making Predictions

**Part 5 of 7 — Making Predictions**

Extrapolate: extend the trend beyond the data.

Interpolate: estimate between known data points.
      `
    },
    {
      id: 'act-s5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Extrapolate?',
            options: [
              'extend the trend beyond the data.',
              'State limitations: extrapolation is less reliable than interpolation.',
              'estimate between known data points.',
              'Predictions based on trends should follow the established pattern.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Extrapolate: extend the trend beyond the data. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'extend the trend beyond the data.',
              'State limitations: extrapolation is less reliable than interpolation.',
              'Predictions based on trends should follow the established pattern.',
              'estimate between known data points.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Predictions based on trends should follow the established pattern. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Predictions based on trends should follow the established pattern.

**ACT Tip:** State limitations: extrapolation is less reliable than interpolation.
      `
    },
    {
      id: 'act-s5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'estimate between known data points.',
              'Predictions based on trends should follow the established pattern.',
              'extend the trend beyond the data.',
              'State limitations: extrapolation is less reliable than interpolation.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: State limitations: extrapolation is less reliable than interpolation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Extrapolate',
            options: ['Predictions based on trends should follow the established pattern.', 'extend the trend beyond the data.', 'estimate between known data points.', 'State limitations: extrapolation is less reliable than interpolation.']
          },
          {
            label: 'Interpolate',
            options: ['estimate between known data points.', 'extend the trend beyond the data.', 'State limitations: extrapolation is less reliable than interpolation.', 'Predictions based on trends should follow the established pattern.']
          },
          {
            label: 'Key Insight',
            options: ['extend the trend beyond the data.', 'State limitations: extrapolation is less reliable than interpolation.', 'estimate between known data points.', 'Predictions based on trends should follow the established pattern.']
          }
        ],
        correctAnswers: ['extend the trend beyond the data.', 'estimate between known data points.', 'Predictions based on trends should follow the established pattern.'],
        hint1: 'Think about what each concept specifically describes in Making Predictions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Making Predictions describes a specific idea. Extrapolate: extend the trend beyond the data. Interpolate: estimate between known data points. Key Insight: Predictions based on trends should follow the established pattern.'
      }
    }
  ]
}
