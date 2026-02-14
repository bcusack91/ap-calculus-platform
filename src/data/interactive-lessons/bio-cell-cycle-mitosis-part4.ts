export const bioCellCyclePart4Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
# ## Cytokinesis

**Part 4 of 7 — Cytokinesis**

1. Division of cytoplasm after mitosis
2. Animal cells: cleavage furrow (actin ring)
3. Plant cells: cell plate forms from Golgi vesicles
4. Result: two identical daughter cells
      `
    },
    {
      id: 'cell4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes division of cytoplasm after mitosis?',
            options: [
              'Division of cytoplasm after mitosis',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Division of cytoplasm after mitosis'
          },
          {
            question: 'In the context of cytokinesis, which statement is accurate?',
            options: [
              'Plant cells: cell plate forms from Golgi vesicles',
              'sisotim retfa msalpotyc fo noisiviD',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Plant cells: cell plate forms from Golgi vesicles'
          }
        ]
      }
    },
    {
      id: 'cell4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Division of cytoplasm after mitosis**
- **Animal cells**: cleavage furrow (actin ring)
- **Plant cells**: cell plate forms from Golgi vesicles
- **Result**: two identical daughter cells
      `
    },
    {
      id: 'cell4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to cytokinesis?',
            options: [
              'Result: two identical daughter cells',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Result: two identical daughter cells'
          }
        ]
      }
    },
    {
      id: 'cell4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Division of cytoplasm after mitosis is important in cytokinesis because',
            options: ['Division of cytoplasm after mitosis', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Animal cells is important in cytokinesis because',
            options: ['cleavage furrow (actin ring)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Plant cells is important in cytokinesis because',
            options: ['cell plate forms from Golgi vesicles', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Division of cytoplasm after mitosis', 'cleavage furrow (actin ring)', 'cell plate forms from Golgi vesicles'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Cytokinesis.'
      }
    }
  ]
}
