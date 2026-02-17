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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Checkpoints" refer to in biology?',
            options: [
              'loss of cell cycle control',
              'Cyclins and CDKs control progression',
              'Tumor suppressors (p53, Rb) and proto-oncogenes',
              'G1, G2, and M checkpoints'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Checkpoints: G1, G2, and M checkpoints. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Tumor suppressors (p53, Rb) and…:',
            options: [
              'Cyclins and CDKs control progression',
              'Tumor suppressors (p53, Rb) and proto-oncogenes',
              'loss of cell cycle control',
              'G1, G2, and M checkpoints'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Tumor suppressors (p53, Rb) and proto-oncogenes. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Cancer is correct?',
            options: [
              'G1, G2, and M checkpoints',
              'loss of cell cycle control',
              'Tumor suppressors (p53, Rb) and proto-oncogenes',
              'Cyclins and CDKs control progression'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Cancer: loss of cell cycle control. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Checkpoints',
            options: ['loss of cell cycle control', 'Cyclins and CDKs control progression', 'Tumor suppressors (p53, Rb) and proto-oncogenes', 'G1, G2, and M checkpoints']
          },
          {
            label: 'Cancer',
            options: ['Cyclins and CDKs control progression', 'Tumor suppressors (p53, Rb) and proto-oncogenes', 'G1, G2, and M checkpoints', 'loss of cell cycle control']
          }
        ],
        correctAnswers: ['G1, G2, and M checkpoints', 'loss of cell cycle control'],
        hint1: 'Think about what each concept specifically describes in Cell Cycle Regulation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Cycle Regulation describes a specific idea. Checkpoints: G1, G2, and M checkpoints. Cancer: loss of cell cycle control.'
      }
    }
  ]
}
