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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identify trends',
            options: ['direct relationship, inverse relationship, no correlation.', 'Read axis labels, units, and scales on all graphs before interpreting data.', 'Extrapolation vs interpolation: extending beyond data vs estimating between known points.', 'Tables: cross-reference rows and columns to find specific values.']
          },
          {
            label: 'Key Insight',
            options: ['Read axis labels, units, and scales on all graphs before interpreting data.', 'Extrapolation vs interpolation: extending beyond data vs estimating between known points.', 'Tables: cross-reference rows and columns to find specific values.', 'direct relationship, inverse relationship, no correlation.']
          },
          {
            label: 'MCAT Tip',
            options: ['Tables: cross-reference rows and columns to find specific values.', 'Extrapolation vs interpolation: extending beyond data vs estimating between known points.', 'direct relationship, inverse relationship, no correlation.', 'Read axis labels, units, and scales on all graphs before interpreting data.']
          }
        ],
        correctAnswers: ['direct relationship, inverse relationship, no correlation.', 'Extrapolation vs interpolation: extending beyond data vs estimating between known points.', 'Tables: cross-reference rows and columns to find specific values.'],
        hint1: 'Think about what each concept specifically describes in Data Interpretation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Data Interpretation describes a specific idea. Identify trends: direct relationship, inverse relationship, no correlation. Key Insight: Extrapolation vs interpolation: extending beyond data vs estimating between known points. MCAT Tip: Tables: cross-reference rows and columns to find specific values.'
      }
    }
  ]
}
