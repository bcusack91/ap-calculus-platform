export const bioCellStructurePart3Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cell3-intro-p3',
      type: 'text' as const,
      content: `
# ## Endomembrane System

**Part 3 of 7 — Endomembrane System**

1. ER → Golgi → plasma membrane pathway
2. Vesicle transport between compartments
3. Signal sequences direct protein trafficking
4. Autophagy and cellular recycling
      `
    },
    {
      id: 'cell3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains ER → Golgi → plasma membrane pathway?',
            options: [
              'Vesicle transport between compartments',
              'Autophagy and cellular recycling',
              'Signal sequences direct protein trafficking',
              'ER → Golgi → plasma membrane pathway'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ER → Golgi → plasma membrane pathway. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Endomembrane System, which explains Signal sequences direct protein…?',
            options: [
              'Signal sequences direct protein trafficking',
              'Vesicle transport between compartments',
              'ER → Golgi → plasma membrane pathway',
              'Autophagy and cellular recycling'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Signal sequences direct protein trafficking. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **ER → Golgi → plasma membrane pathway**
- **Vesicle transport between compartments**
- **Signal sequences direct protein trafficking**
- **Autophagy and cellular recycling**
      `
    },
    {
      id: 'cell3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Autophagy and cellular recycling?',
            options: [
              'ER → Golgi → plasma membrane pathway',
              'Signal sequences direct protein trafficking',
              'Autophagy and cellular recycling',
              'Vesicle transport between compartments'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Autophagy and cellular recycling. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'ER → Golgi → plasma membrane pathway',
            options: ['Signal sequences direct protein trafficking', 'Autophagy and cellular recycling', 'ER → Golgi → plasma membrane pathway', 'Vesicle transport between compartments']
          },
          {
            label: 'Vesicle transport between compartments',
            options: ['ER → Golgi → plasma membrane pathway', 'Signal sequences direct protein trafficking', 'Autophagy and cellular recycling', 'Vesicle transport between compartments']
          },
          {
            label: 'Signal sequences direct protein…',
            options: ['Autophagy and cellular recycling', 'ER → Golgi → plasma membrane pathway', 'Vesicle transport between compartments', 'Signal sequences direct protein trafficking']
          }
        ],
        correctAnswers: ['ER → Golgi → plasma membrane pathway', 'Vesicle transport between compartments', 'Signal sequences direct protein trafficking'],
        hint1: 'Think about what each concept specifically describes in Endomembrane System.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Endomembrane System describes a specific idea. ER → Golgi → plasma membrane pathway. Vesicle transport between compartments. Signal sequences direct protein trafficking.'
      }
    }
  ]
}
