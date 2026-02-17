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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Read the passage first, note the main experiment and hypothesis.', 'Dont memorize every detail — focus on the experimental logic and refer back as needed.', 'Identify variables: independent (manipulated), dependent (measured), controlled (held constant).', 'MCAT science passages are 4-7 paragraphs with figures, graphs, and experimental data.']
          },
          {
            label: 'MCAT Tip',
            options: ['Dont memorize every detail — focus on the experimental logic and refer back as needed.', 'MCAT science passages are 4-7 paragraphs with figures, graphs, and experimental data.', 'Identify variables: independent (manipulated), dependent (measured), controlled (held constant).', 'Read the passage first, note the main experiment and hypothesis.']
          }
        ],
        correctAnswers: ['Identify variables: independent (manipulated), dependent (measured), controlled (held constant).', 'Dont memorize every detail — focus on the experimental logic and refer back as needed.'],
        hint1: 'Think about what each concept specifically describes in Science Passage Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Science Passage Strategy describes a specific idea. Key Insight: Identify variables: independent (manipulated), dependent (measured), controlled (held constant). MCAT Tip: Dont memorize every detail — focus on the experimental logic and refer back as needed.'
      }
    }
  ]
}
