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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Cell theory" refer to in biology?',
            options: [
              'all living things are made of cells',
              'Cell size ranges from 1-100 μm',
              'light vs. electron microscopes',
              'Prokaryotic vs. eukaryotic cells'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Cell theory: all living things are made of cells. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Introduction to Cells, which explains Prokaryotic vs. eukaryotic cells?',
            options: [
              'Prokaryotic vs. eukaryotic cells',
              'light vs. electron microscopes',
              'all living things are made of cells',
              'Cell size ranges from 1-100 μm'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Prokaryotic vs. eukaryotic cells. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Cell size ranges from 1-100 μm is correct?',
            options: [
              'Cell size ranges from 1-100 μm',
              'Prokaryotic vs. eukaryotic cells',
              'all living things are made of cells',
              'light vs. electron microscopes'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Cell size ranges from 1-100 μm. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cell theory',
            options: ['light vs. electron microscopes', 'Cell size ranges from 1-100 μm', 'Prokaryotic vs. eukaryotic cells', 'all living things are made of cells']
          },
          {
            label: 'Microscopy',
            options: ['Cell size ranges from 1-100 μm', 'all living things are made of cells', 'light vs. electron microscopes', 'Prokaryotic vs. eukaryotic cells']
          }
        ],
        correctAnswers: ['all living things are made of cells', 'light vs. electron microscopes'],
        hint1: 'Think about what each concept specifically describes in Introduction to Cells.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Introduction to Cells describes a specific idea. Cell theory: all living things are made of cells. Microscopy: light vs. electron microscopes.'
      }
    }
  ]
}
