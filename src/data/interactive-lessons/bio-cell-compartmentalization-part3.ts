export const bioCellCompartmentPart3Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'cell3-intro-p3',
      type: 'text' as const,
      content: `
# ## Surface Area to Volume

**Part 3 of 7 — Surface Area to Volume**

1. As cells grow, volume increases faster than surface area
2. SA:V ratio limits cell size
3. Small cells have higher SA:V → more efficient exchange
4. Adaptations: microvilli, folded membranes
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
            question: 'What does "As cells grow, volume increases faster…" refer to in biology?',
            options: [
              'V ratio limits cell size',
              'As cells grow, volume increases faster than surface area',
              'microvilli, folded membranes',
              'V → more efficient exchange'
            ],
            correctAnswer: 1,
            explanation: 'Correct — As cells grow, volume increases faster than surface area. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Small cells have higher SA?',
            options: [
              'V ratio limits cell size',
              'microvilli, folded membranes',
              'V → more efficient exchange',
              'As cells grow, volume increases faster than surface area'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Small cells have higher SA: V → more efficient exchange. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **As cells grow, volume increases faster than surface area**
- **SA**:V ratio limits cell size
- **Small cells have higher SA**:V → more efficient exchange
- **Adaptations**: microvilli, folded membranes
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
            question: 'Which of these accurately represents Adaptations?',
            options: [
              'V ratio limits cell size',
              'As cells grow, volume increases faster than surface area',
              'V → more efficient exchange',
              'microvilli, folded membranes'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Adaptations: microvilli, folded membranes. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            label: 'SA',
            options: ['V ratio limits cell size', 'microvilli, folded membranes', 'As cells grow, volume increases faster than surface area', 'V → more efficient exchange']
          },
          {
            label: 'Small cells have higher SA',
            options: ['As cells grow, volume increases faster than surface area', 'microvilli, folded membranes', 'V → more efficient exchange', 'V ratio limits cell size']
          },
          {
            label: 'Adaptations',
            options: ['V ratio limits cell size', 'microvilli, folded membranes', 'V → more efficient exchange', 'As cells grow, volume increases faster than surface area']
          }
        ],
        correctAnswers: ['V ratio limits cell size', 'V → more efficient exchange', 'microvilli, folded membranes'],
        hint1: 'Think about what each concept specifically describes in Surface Area to Volume.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Surface Area to Volume describes a specific idea. SA: V ratio limits cell size. Small cells have higher SA: V → more efficient exchange. Adaptations: microvilli, folded membranes.'
      }
    }
  ]
}
