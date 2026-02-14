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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes er → golgi → plasma membrane pathway?',
            options: [
              'ER → Golgi → plasma membrane pathway',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'ER → Golgi → plasma membrane pathway'
          },
          {
            question: 'In the context of endomembrane system, which statement is accurate?',
            options: [
              'Signal sequences direct protein trafficking',
              'yawhtap enarbmem amsalp → igloG → RE',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Signal sequences direct protein trafficking'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to endomembrane system?',
            options: [
              'Autophagy and cellular recycling',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Autophagy and cellular recycling'
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
            label: 'ER → Golgi → plasma membrane pathway is important in endomembrane system because',
            options: ['ER → Golgi → plasma membrane pathway', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Vesicle transport between compartments is important in endomembrane system because',
            options: ['Vesicle transport between compartments', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Signal sequences direct protein trafficking is important in endomembrane system because',
            options: ['Signal sequences direct protein trafficking', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['ER → Golgi → plasma membrane pathway', 'Vesicle transport between compartments', 'Signal sequences direct protein trafficking'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Endomembrane System.'
      }
    }
  ]
}
