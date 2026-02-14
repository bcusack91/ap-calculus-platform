export const bioCellCyclePart5Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cell5-intro-p5',
      type: 'text' as const,
      content: `
# ## Cell Cycle Regulation

**Part 5 of 7 — Cell Cycle Regulation**

1. Checkpoints: G1, G2, and M checkpoints
2. Cyclins and CDKs control progression
3. Tumor suppressors (p53, Rb) and proto-oncogenes
4. Cancer: loss of cell cycle control
      `
    },
    {
      id: 'cell5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes checkpoints?',
            options: [
              'G1, G2, and M checkpoints',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Checkpoints: G1, G2, and M checkpoints'
          },
          {
            question: 'In the context of cell cycle regulation, which statement is accurate?',
            options: [
              'Tumor suppressors (p53, Rb) and proto-oncogenes',
              'stniopkcehc M dna ,2G ,1G :stniopkcehC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Tumor suppressors (p53, Rb) and proto-oncogenes'
          }
        ]
      }
    },
    {
      id: 'cell5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Checkpoints**: G1, G2, and M checkpoints
- **Cyclins and CDKs control progression**
- **Tumor suppressors (p53, Rb) and proto-oncogenes**
- **Cancer**: loss of cell cycle control
      `
    },
    {
      id: 'cell5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to cell cycle regulation?',
            options: [
              'Cancer: loss of cell cycle control',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Cancer: loss of cell cycle control'
          }
        ]
      }
    },
    {
      id: 'cell5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Checkpoints is important in cell cycle regulation because',
            options: ['G1, G2, and M checkpoints', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Cyclins and CDKs control progression is important in cell cycle regulation because',
            options: ['Cyclins and CDKs control progression', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Tumor suppressors (p53, Rb) and proto-oncogenes is important in cell cycle regulation because',
            options: ['Tumor suppressors (p53, Rb) and proto-oncogenes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['G1, G2, and M checkpoints', 'Cyclins and CDKs control progression', 'Tumor suppressors (p53, Rb) and proto-oncogenes'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Cell Cycle Regulation.'
      }
    }
  ]
}
