export const bioMembraneTransportPart5Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb5-intro-p5',
      type: 'text' as const,
      content: `
# ## Bulk Transport

**Part 5 of 7 — Bulk Transport**

1. Endocytosis: phagocytosis, pinocytosis, receptor-mediated
2. Exocytosis: vesicles fuse with membrane
3. Used for large molecules and particles
4. Requires energy (ATP)
      `
    },
    {
      id: 'memb5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes endocytosis?',
            options: [
              'phagocytosis, pinocytosis, receptor-mediated',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Endocytosis: phagocytosis, pinocytosis, receptor-mediated'
          },
          {
            question: 'In the context of bulk transport, which statement is accurate?',
            options: [
              'Used for large molecules and particles',
              'detaidem-rotpecer ,sisotyconip ,sisotycogahp :sisotycodnE',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Used for large molecules and particles'
          }
        ]
      }
    },
    {
      id: 'memb5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Endocytosis**: phagocytosis, pinocytosis, receptor-mediated
- **Exocytosis**: vesicles fuse with membrane
- **Used for large molecules and particles**
- **Requires energy (ATP)**
      `
    },
    {
      id: 'memb5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to bulk transport?',
            options: [
              'Requires energy (ATP)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Requires energy (ATP)'
          }
        ]
      }
    },
    {
      id: 'memb5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Endocytosis is important in bulk transport because',
            options: ['phagocytosis, pinocytosis, receptor-mediated', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Exocytosis is important in bulk transport because',
            options: ['vesicles fuse with membrane', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Used for large molecules and particles is important in bulk transport because',
            options: ['Used for large molecules and particles', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['phagocytosis, pinocytosis, receptor-mediated', 'vesicles fuse with membrane', 'Used for large molecules and particles'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Bulk Transport.'
      }
    }
  ]
}
