export const mcatSciPassagePart1Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Science Passage Strategy

**Part 1 of 7 — Reading Science Passages**

MCAT science passages are 4-7 paragraphs with figures, graphs, and experimental data.

Read the passage first, note the main experiment and hypothesis.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in reading science passages?',
            options: [
              'MCAT science passages are 4-7 paragraphs with figures, graphs, and experimental data',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'MCAT science passages are 4-7 paragraphs with figures, graphs, and experimental data'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Identify variables: independent (manipulated), dependent (measured), controlled (held constant).

**MCAT Tip:** Dont memorize every detail — focus on the experimental logic and refer back as needed.
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Strategy related to reading science passages?',
            options: [
              'Identify variables: independent (manipulated), dependent (measured), controlled (held constant)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Identify variables: independent (manipulated), dependent (measured), controlled (held constant)'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Reading Science Passages:',
            options: ['MCAT science passages are 4-7 paragraphs with figures, graph', 'Read the passage first, note the main experiment and hypothe', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Identify variables: independent (manipulated), dependent (me', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['MCAT science passages are 4-7 paragraphs with figures, graph', 'Identify variables: independent (manipulated), dependent (me'],
        hint1: 'Think about reading science passages',
        hint2: 'Consider the MCAT application',
        explanation: 'MCAT science passages are 4-7 paragraphs with figures, graphs, and experimental data. Identify variables: independent (manipulated), dependent (measured), controlled (held constant).'
      }
    }
  ]
}
