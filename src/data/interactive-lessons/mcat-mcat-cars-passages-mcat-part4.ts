export const mcatCarsPsgPart4Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Arts & Culture Passages

**Part 4 of 7 — Arts & Culture Passages**

Art, music, architecture, and literary criticism passages appear on CARS.

Focus on the authors evaluation: what makes this work significant?.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in arts & culture passages?',
            options: [
              'Art, music, architecture, and literary criticism passages appear on CARS',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Art, music, architecture, and literary criticism passages appear on CARS'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Aesthetic arguments may be subjective — track the authors reasoning, not your own opinion.

**MCAT Tip:** These passages often explore cultural significance and historical context.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to arts & culture passages?',
            options: [
              'Aesthetic arguments may be subjective — track the authors reasoning, not your own opinion',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Aesthetic arguments may be subjective — track the authors reasoning, not your own opinion'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Arts & Culture Passages:',
            options: ['Art, music, architecture, and literary criticism passages ap', 'Focus on the authors evaluation: what makes this work signif', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Aesthetic arguments may be subjective — track the authors re', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Art, music, architecture, and literary criticism passages ap', 'Aesthetic arguments may be subjective — track the authors re'],
        hint1: 'Think about arts & culture passages',
        hint2: 'Consider the MCAT application',
        explanation: 'Art, music, architecture, and literary criticism passages appear on CARS. Aesthetic arguments may be subjective — track the authors reasoning, not your own opinion.'
      }
    }
  ]
}
