export const mcatSciPassagePart2Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Data Interpretation

**Part 2 of 7 — Data Interpretation**

Read axis labels, units, and scales on all graphs before interpreting data.

Identify trends: direct relationship, inverse relationship, no correlation.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in data interpretation?',
            options: [
              'Read axis labels, units, and scales on all graphs before interpreting data',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Read axis labels, units, and scales on all graphs before interpreting data'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Extrapolation vs interpolation: extending beyond data vs estimating between known points.

**MCAT Tip:** Tables: cross-reference rows and columns to find specific values.
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Strategy related to data interpretation?',
            options: [
              'Extrapolation vs interpolation: extending beyond data vs estimating between known points',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Extrapolation vs interpolation: extending beyond data vs estimating between known points'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Data Interpretation:',
            options: ['Read axis labels, units, and scales on all graphs before int', 'Identify trends: direct relationship, inverse relationship, ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Extrapolation vs interpolation: extending beyond data vs est', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Read axis labels, units, and scales on all graphs before int', 'Extrapolation vs interpolation: extending beyond data vs est'],
        hint1: 'Think about data interpretation',
        hint2: 'Consider the MCAT application',
        explanation: 'Read axis labels, units, and scales on all graphs before interpreting data. Extrapolation vs interpolation: extending beyond data vs estimating between known points.'
      }
    }
  ]
}
