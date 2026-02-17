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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "G1" refer to in biology?',
            options: [
              'cell growth, organelle duplication',
              'cells that have exited the cell cycle',
              'DNA replication (each chromosome → sister chromatids)',
              'preparation for mitosis, error checking'
            ],
            correctAnswer: 0,
            explanation: 'Correct — G1: cell growth, organelle duplication. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about G2?',
            options: [
              'cell growth, organelle duplication',
              'DNA replication (each chromosome → sister chromatids)',
              'cells that have exited the cell cycle',
              'preparation for mitosis, error checking'
            ],
            correctAnswer: 3,
            explanation: 'Correct — G2: preparation for mitosis, error checking. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about G0 is correct?',
            options: [
              'cells that have exited the cell cycle',
              'preparation for mitosis, error checking',
              'cell growth, organelle duplication',
              'DNA replication (each chromosome → sister chromatids)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — G0: cells that have exited the cell cycle. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'G1',
            options: ['DNA replication (each chromosome → sister chromatids)', 'preparation for mitosis, error checking', 'cells that have exited the cell cycle', 'cell growth, organelle duplication']
          },
          {
            label: 'S phase',
            options: ['preparation for mitosis, error checking', 'cell growth, organelle duplication', 'DNA replication (each chromosome → sister chromatids)', 'cells that have exited the cell cycle']
          },
          {
            label: 'G2',
            options: ['DNA replication (each chromosome → sister chromatids)', 'cells that have exited the cell cycle', 'cell growth, organelle duplication', 'preparation for mitosis, error checking']
          }
        ],
        correctAnswers: ['cell growth, organelle duplication', 'DNA replication (each chromosome → sister chromatids)', 'preparation for mitosis, error checking'],
        hint1: 'Think about what each concept specifically describes in Interphase.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Interphase describes a specific idea. G1: cell growth, organelle duplication. S phase: DNA replication (each chromosome → sister chromatids). G2: preparation for mitosis, error checking.'
      }
    }
  ]
}
