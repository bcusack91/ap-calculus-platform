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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Scatterplot?',
            options: [
              'Positive correlation: both increase together; negative: one up, one down.',
              'r (correlation coefficient): closer to ±1 = stronger linear relationship.',
              'approximates the trend.',
              'shows relationship between two variables.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Scatterplot: shows relationship between two variables. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'approximates the trend.',
              'Positive correlation: both increase together; negative: one up, one down.',
              'shows relationship between two variables.',
              'r (correlation coefficient): closer to ±1 = stronger linear relationship.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Positive correlation: both increase together; negative: one up, one down. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Scatterplots & Line of Best Fit, which correctly describes SAT Tip?',
            options: [
              'approximates the trend.',
              'Positive correlation: both increase together; negative: one up, one down.',
              'shows relationship between two variables.',
              'r (correlation coefficient): closer to ±1 = stronger linear relationship.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: r (correlation coefficient): closer to ±1 = stronger linear relationship. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-d4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Scatterplot',
            options: ['r (correlation coefficient): closer to ±1 = stronger linear relationship.', 'Positive correlation: both increase together; negative: one up, one down.', 'approximates the trend.', 'shows relationship between two variables.']
          },
          {
            label: 'Line of best fit',
            options: ['r (correlation coefficient): closer to ±1 = stronger linear relationship.', 'Positive correlation: both increase together; negative: one up, one down.', 'approximates the trend.', 'shows relationship between two variables.']
          },
          {
            label: 'Key Insight',
            options: ['r (correlation coefficient): closer to ±1 = stronger linear relationship.', 'shows relationship between two variables.', 'approximates the trend.', 'Positive correlation: both increase together; negative: one up, one down.']
          }
        ],
        correctAnswers: ['shows relationship between two variables.', 'approximates the trend.', 'Positive correlation: both increase together; negative: one up, one down.'],
        hint1: 'Think about what each concept specifically describes in Scatterplots & Line of Best Fit.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Scatterplots & Line of Best Fit describes a specific idea. Scatterplot: shows relationship between two variables. Line of best fit: approximates the trend. Key Insight: Positive correlation: both increase together; negative: one up, one down.'
      }
    }
  ]
}
