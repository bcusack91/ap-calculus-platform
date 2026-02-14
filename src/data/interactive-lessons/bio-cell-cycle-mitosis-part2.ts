export const bioCellCyclePart2Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cell2-intro-p2',
      type: 'text' as const,
      content: `
# ## Interphase

**Part 2 of 7 — Interphase**

1. G1: cell growth, organelle duplication
2. S phase: DNA replication (each chromosome → sister chromatids)
3. G2: preparation for mitosis, error checking
4. G0: cells that have exited the cell cycle
      `
    },
    {
      id: 'cell2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes g1?',
            options: [
              'cell growth, organelle duplication',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'G1: cell growth, organelle duplication'
          },
          {
            question: 'In the context of interphase, which statement is accurate?',
            options: [
              'G2: preparation for mitosis, error checking',
              'noitacilpud ellenagro ,htworg llec :1G',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'G2: preparation for mitosis, error checking'
          }
        ]
      }
    },
    {
      id: 'cell2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **G1**: cell growth, organelle duplication
- **S phase**: DNA replication (each chromosome → sister chromatids)
- **G2**: preparation for mitosis, error checking
- **G0**: cells that have exited the cell cycle
      `
    },
    {
      id: 'cell2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to interphase?',
            options: [
              'G0: cells that have exited the cell cycle',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'G0: cells that have exited the cell cycle'
          }
        ]
      }
    },
    {
      id: 'cell2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'G1 is important in interphase because',
            options: ['cell growth, organelle duplication', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'S phase is important in interphase because',
            options: ['DNA replication (each chromosome → sister chromati', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'G2 is important in interphase because',
            options: ['preparation for mitosis, error checking', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['cell growth, organelle duplication', 'DNA replication (each chromosome → sister chromati', 'preparation for mitosis, error checking'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Interphase.'
      }
    }
  ]
}
