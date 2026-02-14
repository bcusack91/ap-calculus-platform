export const bioCellStructurePart7Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cell7-intro-p7',
      type: 'text' as const,
      content: `
# ## Cell Structure & Organelles: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Structure-function relationships in cells
2. Compartmentalization enables specialization
3. Endosymbiotic theory evidence
4. Cell biology connects to all AP Bio units
      `
    },
    {
      id: 'cell7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes structure-function relationships in cells?',
            options: [
              'Structure-function relationships in cells',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Structure-function relationships in cells'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Endosymbiotic theory evidence',
              'sllec ni spihsnoitaler noitcnuf-erutcurtS',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Endosymbiotic theory evidence'
          }
        ]
      }
    },
    {
      id: 'cell7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Structure-function relationships in cells**
- **Compartmentalization enables specialization**
- **Endosymbiotic theory evidence**
- **Cell biology connects to all AP Bio units**
      `
    },
    {
      id: 'cell7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'Cell biology connects to all AP Bio units',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Cell biology connects to all AP Bio units'
          }
        ]
      }
    },
    {
      id: 'cell7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Structure-function relationships in cells is important in synthesis & ap review because',
            options: ['Structure-function relationships in cells', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Compartmentalization enables specialization is important in synthesis & ap review because',
            options: ['Compartmentalization enables specialization', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Endosymbiotic theory evidence is important in synthesis & ap review because',
            options: ['Endosymbiotic theory evidence', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Structure-function relationships in cells', 'Compartmentalization enables specialization', 'Endosymbiotic theory evidence'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
