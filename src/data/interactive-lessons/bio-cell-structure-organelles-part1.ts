export const bioCellStructurePart1Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cell1-intro-p1',
      type: 'text' as const,
      content: `
# ## Introduction to Cells

**Part 1 of 7 — Introduction to Cells**

1. Cell theory: all living things are made of cells
2. Microscopy: light vs. electron microscopes
3. Prokaryotic vs. eukaryotic cells
4. Cell size ranges from 1-100 μm
      `
    },
    {
      id: 'cell1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes cell theory?',
            options: [
              'all living things are made of cells',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Cell theory: all living things are made of cells'
          },
          {
            question: 'In the context of introduction to cells, which statement is accurate?',
            options: [
              'Prokaryotic vs. eukaryotic cells',
              'sllec fo edam era sgniht gnivil lla :yroeht lleC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Prokaryotic vs. eukaryotic cells'
          }
        ]
      }
    },
    {
      id: 'cell1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Cell theory**: all living things are made of cells
- **Microscopy**: light vs. electron microscopes
- **Prokaryotic vs. eukaryotic cells**
- **Cell size ranges from 1-100 μm**
      `
    },
    {
      id: 'cell1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to introduction to cells?',
            options: [
              'Cell size ranges from 1-100 μm',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Cell size ranges from 1-100 μm'
          }
        ]
      }
    },
    {
      id: 'cell1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cell theory is important in introduction to cells because',
            options: ['all living things are made of cells', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Microscopy is important in introduction to cells because',
            options: ['light vs. electron microscopes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Prokaryotic vs. eukaryotic cells is important in introduction to cells because',
            options: ['Prokaryotic vs. eukaryotic cells', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['all living things are made of cells', 'light vs. electron microscopes', 'Prokaryotic vs. eukaryotic cells'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Cells.'
      }
    }
  ]
}
