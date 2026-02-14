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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes as cells grow, volume increases faster than surface area?',
            options: [
              'As cells grow, volume increases faster than surface area',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'As cells grow, volume increases faster than surface area'
          },
          {
            question: 'In the context of surface area to volume, which statement is accurate?',
            options: [
              'Small cells have higher SA:V → more efficient exchange',
              'aera ecafrus naht retsaf sesaercni emulov ,worg sllec sA',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Small cells have higher SA:V → more efficient exchange'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to surface area to volume?',
            options: [
              'Adaptations: microvilli, folded membranes',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Adaptations: microvilli, folded membranes'
          }
        ]
      }
    },
    {
      id: 'cell3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'As cells grow, volume increases faster than surface area is important in surface area to volume because',
            options: ['As cells grow, volume increases faster than surfac', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'SA is important in surface area to volume because',
            options: ['V ratio limits cell size', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Small cells have higher SA is important in surface area to volume because',
            options: ['V → more efficient exchange', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['As cells grow, volume increases faster than surfac', 'V ratio limits cell size', 'V → more efficient exchange'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Surface Area to Volume.'
      }
    }
  ]
}
