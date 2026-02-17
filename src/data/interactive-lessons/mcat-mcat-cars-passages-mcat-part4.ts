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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Focus on the authors evaluation',
            options: ['what makes this work significant?.', 'Aesthetic arguments may be subjective — track the authors reasoning, not your own opinion.', 'Art, music, architecture, and literary criticism passages appear on CARS.', 'These passages often explore cultural significance and historical context.']
          },
          {
            label: 'Key Insight',
            options: ['These passages often explore cultural significance and historical context.', 'Art, music, architecture, and literary criticism passages appear on CARS.', 'Aesthetic arguments may be subjective — track the authors reasoning, not your own opinion.', 'what makes this work significant?.']
          },
          {
            label: 'MCAT Tip',
            options: ['These passages often explore cultural significance and historical context.', 'what makes this work significant?.', 'Art, music, architecture, and literary criticism passages appear on CARS.', 'Aesthetic arguments may be subjective — track the authors reasoning, not your own opinion.']
          }
        ],
        correctAnswers: ['what makes this work significant?.', 'Aesthetic arguments may be subjective — track the authors reasoning, not your own opinion.', 'These passages often explore cultural significance and historical context.'],
        hint1: 'Think about what each concept specifically describes in Arts & Culture Passages.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Arts & Culture Passages describes a specific idea. Focus on the authors evaluation: what makes this work significant?. Key Insight: Aesthetic arguments may be subjective — track the authors reasoning, not your own opinion. MCAT Tip: These passages often explore cultural significance and historical context.'
      }
    }
  ]
}
