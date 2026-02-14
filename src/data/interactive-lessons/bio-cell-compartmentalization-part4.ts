export const bioCellCompartmentPart4Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
# ## Cell Size Constraints

**Part 4 of 7 — Cell Size Constraints**

1. Diffusion limits how large cells can be
2. Need adequate surface area for nutrient/waste exchange
3. DNA must be able to control entire cell volume
4. Exceptions: neurons, muscle fibers (multinucleated)
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
            question: 'Which of the following best describes diffusion limits how large cells can be?',
            options: [
              'Diffusion limits how large cells can be',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Diffusion limits how large cells can be'
          },
          {
            question: 'In the context of cell size constraints, which statement is accurate?',
            options: [
              'DNA must be able to control entire cell volume',
              'eb nac sllec egral woh stimil noisuffiD',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'DNA must be able to control entire cell volume'
          }
        ]
      }
    },
    {
      id: 'cell4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Diffusion limits how large cells can be**
- **Need adequate surface area for nutrient/waste exchange**
- **DNA must be able to control entire cell volume**
- **Exceptions**: neurons, muscle fibers (multinucleated)
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
            question: 'Which concept is most directly related to cell size constraints?',
            options: [
              'Exceptions: neurons, muscle fibers (multinucleated)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Exceptions: neurons, muscle fibers (multinucleated)'
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
            label: 'Diffusion limits how large cells can be is important in cell size constraints because',
            options: ['Diffusion limits how large cells can be', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Need adequate surface area for nutrient/waste exchange is important in cell size constraints because',
            options: ['Need adequate surface area for nutrient/waste exch', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'DNA must be able to control entire cell volume is important in cell size constraints because',
            options: ['DNA must be able to control entire cell volume', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Diffusion limits how large cells can be', 'Need adequate surface area for nutrient/waste exch', 'DNA must be able to control entire cell volume'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Cell Size Constraints.'
      }
    }
  ]
}
