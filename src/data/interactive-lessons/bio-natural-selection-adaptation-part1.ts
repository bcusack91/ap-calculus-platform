export const bioNatSelectionPart1Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu1-intro-p1',
      type: 'text' as const,
      content: `
# ## Darwin's Theory

**Part 1 of 7 — Darwin's Theory**

1. Variation exists within populations
2. More offspring produced than can survive
3. Individuals with favorable traits survive and reproduce more
4. Favorable traits are inherited → population changes over time
      `
    },
    {
      id: 'natu1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Variation exists within populations?',
            options: [
              'More offspring produced than can survive',
              'Variation exists within populations',
              'Individuals with favorable traits survive and reproduce more',
              'Favorable traits are inherited → population changes over time'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Variation exists within populations. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Darwin\'s Theory, which explains Individuals with favorable traits…?',
            options: [
              'Individuals with favorable traits survive and reproduce more',
              'Favorable traits are inherited → population changes over time',
              'More offspring produced than can survive',
              'Variation exists within populations'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Individuals with favorable traits survive and reproduce more. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'natu1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Variation exists within populations**
- **More offspring produced than can survive**
- **Individuals with favorable traits survive and reproduce more**
- **Favorable traits are inherited → population changes over time**
      `
    },
    {
      id: 'natu1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Favorable traits are inherited →… is correct?',
            options: [
              'More offspring produced than can survive',
              'Favorable traits are inherited → population changes over time',
              'Variation exists within populations',
              'Individuals with favorable traits survive and reproduce more'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Favorable traits are inherited → population changes over time. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'natu1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Variation exists within populations',
            options: ['More offspring produced than can survive', 'Individuals with favorable traits survive and reproduce more', 'Favorable traits are inherited → population changes over time', 'Variation exists within populations']
          },
          {
            label: 'More offspring produced than can survive',
            options: ['Individuals with favorable traits survive and reproduce more', 'Favorable traits are inherited → population changes over time', 'More offspring produced than can survive', 'Variation exists within populations']
          },
          {
            label: 'Individuals with favorable traits…',
            options: ['More offspring produced than can survive', 'Individuals with favorable traits survive and reproduce more', 'Variation exists within populations', 'Favorable traits are inherited → population changes over time']
          }
        ],
        correctAnswers: ['Variation exists within populations', 'More offspring produced than can survive', 'Individuals with favorable traits survive and reproduce more'],
        hint1: 'Think about what each concept specifically describes in Darwin\'s Theory.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Darwin\'s Theory describes a specific idea. Variation exists within populations. More offspring produced than can survive. Individuals with favorable traits survive and reproduce more.'
      }
    }
  ]
}
