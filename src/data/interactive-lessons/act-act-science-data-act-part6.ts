export const actScienceDataPart6Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Extrapolate: extend the trend beyond the data.

Interpolate: estimate between known data points.
      `
    },
    {
      id: 'act-s6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Extrapolate?',
            options: [
              'estimate between known data points.',
              'State limitations: extrapolation is less reliable than interpolation.',
              'Predictions based on trends should follow the established pattern.',
              'extend the trend beyond the data.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Extrapolate: extend the trend beyond the data. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'State limitations: extrapolation is less reliable than interpolation.',
              'Predictions based on trends should follow the established pattern.',
              'estimate between known data points.',
              'extend the trend beyond the data.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Predictions based on trends should follow the established pattern. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Predictions based on trends should follow the established pattern.

**ACT Tip:** State limitations: extrapolation is less reliable than interpolation.
      `
    },
    {
      id: 'act-s6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'estimate between known data points.',
              'State limitations: extrapolation is less reliable than interpolation.',
              'Predictions based on trends should follow the established pattern.',
              'extend the trend beyond the data.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: State limitations: extrapolation is less reliable than interpolation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Extrapolate',
            options: ['State limitations: extrapolation is less reliable than interpolation.', 'Predictions based on trends should follow the established pattern.', 'extend the trend beyond the data.', 'estimate between known data points.']
          },
          {
            label: 'Interpolate',
            options: ['extend the trend beyond the data.', 'Predictions based on trends should follow the established pattern.', 'State limitations: extrapolation is less reliable than interpolation.', 'estimate between known data points.']
          },
          {
            label: 'Key Insight',
            options: ['Predictions based on trends should follow the established pattern.', 'extend the trend beyond the data.', 'estimate between known data points.', 'State limitations: extrapolation is less reliable than interpolation.']
          }
        ],
        correctAnswers: ['extend the trend beyond the data.', 'estimate between known data points.', 'Predictions based on trends should follow the established pattern.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Extrapolate: extend the trend beyond the data. Interpolate: estimate between known data points. Key Insight: Predictions based on trends should follow the established pattern.'
      }
    }
  ]
}
