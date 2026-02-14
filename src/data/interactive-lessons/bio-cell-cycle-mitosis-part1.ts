export const bioCellCyclePart1Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cell1-intro-p1',
      type: 'text' as const,
      content: `
# ## The Cell Cycle Overview

**Part 1 of 7 — The Cell Cycle Overview**

1. Interphase (G1, S, G2) + Mitotic phase (M)
2. Most of cell cycle spent in interphase (~90%)
3. DNA replicated during S phase
4. Cell growth in G1 and G2
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
            question: 'Which of the following best describes interphase (g1, s, g2) + mitotic phase (m)?',
            options: [
              'Interphase (G1, S, G2) + Mitotic phase (M)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Interphase (G1, S, G2) + Mitotic phase (M)'
          },
          {
            question: 'In the context of the cell cycle overview, which statement is accurate?',
            options: [
              'DNA replicated during S phase',
              ')M( esahp citotiM + )2G ,S ,1G( esahpretnI',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'DNA replicated during S phase'
          }
        ]
      }
    },
    {
      id: 'cell1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Interphase (G1, S, G2) + Mitotic phase (M)**
- **Most of cell cycle spent in interphase (~90%)**
- **DNA replicated during S phase**
- **Cell growth in G1 and G2**
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
            question: 'Which concept is most directly related to the cell cycle overview?',
            options: [
              'Cell growth in G1 and G2',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Cell growth in G1 and G2'
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
            label: 'Interphase (G1, S, G2) + Mitotic phase (M) is important in the cell cycle overview because',
            options: ['Interphase (G1, S, G2) + Mitotic phase (M)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Most of cell cycle spent in interphase (~90%) is important in the cell cycle overview because',
            options: ['Most of cell cycle spent in interphase (~90%)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'DNA replicated during S phase is important in the cell cycle overview because',
            options: ['DNA replicated during S phase', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Interphase (G1, S, G2) + Mitotic phase (M)', 'Most of cell cycle spent in interphase (~90%)', 'DNA replicated during S phase'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding The Cell Cycle Overview.'
      }
    }
  ]
}
