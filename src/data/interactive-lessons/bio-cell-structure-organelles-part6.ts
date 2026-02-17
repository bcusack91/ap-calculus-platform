export const bioCellStructurePart6Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cell6-intro-p6',
      type: 'text' as const,
      content: `
# ## Cell Structure & Organelles: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Identifying organelles by function
2. Predicting effects of organelle dysfunction
3. Comparing plant and animal cells
4. Experimental design with cellular components
      `
    },
    {
      id: 'cell6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Identifying organelles by function?',
            options: [
              'Experimental design with cellular components',
              'Comparing plant and animal cells',
              'Identifying organelles by function',
              'Predicting effects of organelle dysfunction'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Identifying organelles by function. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Comparing plant and animal cells:',
            options: [
              'Identifying organelles by function',
              'Experimental design with cellular components',
              'Predicting effects of organelle dysfunction',
              'Comparing plant and animal cells'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Comparing plant and animal cells. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Identifying organelles by function**
- **Predicting effects of organelle dysfunction**
- **Comparing plant and animal cells**
- **Experimental design with cellular components**
      `
    },
    {
      id: 'cell6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Experimental design with cellular…?',
            options: [
              'Comparing plant and animal cells',
              'Identifying organelles by function',
              'Experimental design with cellular components',
              'Predicting effects of organelle dysfunction'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Experimental design with cellular components. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying organelles by function',
            options: ['Experimental design with cellular components', 'Comparing plant and animal cells', 'Identifying organelles by function', 'Predicting effects of organelle dysfunction']
          },
          {
            label: 'Predicting effects of organelle…',
            options: ['Experimental design with cellular components', 'Identifying organelles by function', 'Comparing plant and animal cells', 'Predicting effects of organelle dysfunction']
          },
          {
            label: 'Comparing plant and animal cells',
            options: ['Comparing plant and animal cells', 'Predicting effects of organelle dysfunction', 'Identifying organelles by function', 'Experimental design with cellular components']
          }
        ],
        correctAnswers: ['Identifying organelles by function', 'Predicting effects of organelle dysfunction', 'Comparing plant and animal cells'],
        hint1: 'Think about what each concept specifically describes in Cell Structure & Organelles: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Structure & Organelles: Problem-Solving Workshop describes a specific idea. Identifying organelles by function. Predicting effects of organelle dysfunction. Comparing plant and animal cells.'
      }
    }
  ]
}
