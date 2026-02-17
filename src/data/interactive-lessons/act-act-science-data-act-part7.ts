export const actScienceDataPart7Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Extrapolate: extend the trend beyond the data.

Interpolate: estimate between known data points.
      `
    },
    {
      id: 'act-s7-quiz1',
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
              'Predictions based on trends should follow the established pattern.',
              'extend the trend beyond the data.',
              'State limitations: extrapolation is less reliable than interpolation.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Extrapolate: extend the trend beyond the data. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'extend the trend beyond the data.',
              'State limitations: extrapolation is less reliable than interpolation.',
              'estimate between known data points.',
              'Predictions based on trends should follow the established pattern.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Predictions based on trends should follow the established pattern. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Predictions based on trends should follow the established pattern.

**ACT Tip:** State limitations: extrapolation is less reliable than interpolation.
      `
    },
    {
      id: 'act-s7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes ACT Tip?',
            options: [
              'Predictions based on trends should follow the established pattern.',
              'estimate between known data points.',
              'State limitations: extrapolation is less reliable than interpolation.',
              'extend the trend beyond the data.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: State limitations: extrapolation is less reliable than interpolation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Extrapolate',
            options: ['State limitations: extrapolation is less reliable than interpolation.', 'Predictions based on trends should follow the established pattern.', 'estimate between known data points.', 'extend the trend beyond the data.']
          },
          {
            label: 'Interpolate',
            options: ['extend the trend beyond the data.', 'Predictions based on trends should follow the established pattern.', 'estimate between known data points.', 'State limitations: extrapolation is less reliable than interpolation.']
          },
          {
            label: 'Key Insight',
            options: ['State limitations: extrapolation is less reliable than interpolation.', 'extend the trend beyond the data.', 'Predictions based on trends should follow the established pattern.', 'estimate between known data points.']
          }
        ],
        correctAnswers: ['extend the trend beyond the data.', 'estimate between known data points.', 'Predictions based on trends should follow the established pattern.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Extrapolate: extend the trend beyond the data. Interpolate: estimate between known data points. Key Insight: Predictions based on trends should follow the established pattern.'
      }
    }
  ]
}
