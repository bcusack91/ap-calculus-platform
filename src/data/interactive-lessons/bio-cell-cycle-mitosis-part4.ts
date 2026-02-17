export const bioCellCyclePart4Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
# ## Cytokinesis

**Part 4 of 7 — Cytokinesis**

1. Division of cytoplasm after mitosis
2. Animal cells: cleavage furrow (actin ring)
3. Plant cells: cell plate forms from Golgi vesicles
4. Result: two identical daughter cells
      `
    },
    {
      id: 'cell4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Division of cytoplasm after mitosis" refer to in biology?',
            options: [
              'cell plate forms from Golgi vesicles',
              'cleavage furrow (actin ring)',
              'Division of cytoplasm after mitosis',
              'two identical daughter cells'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Division of cytoplasm after mitosis. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Plant cells?',
            options: [
              'Division of cytoplasm after mitosis',
              'cell plate forms from Golgi vesicles',
              'cleavage furrow (actin ring)',
              'two identical daughter cells'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Plant cells: cell plate forms from Golgi vesicles. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Division of cytoplasm after mitosis**
- **Animal cells**: cleavage furrow (actin ring)
- **Plant cells**: cell plate forms from Golgi vesicles
- **Result**: two identical daughter cells
      `
    },
    {
      id: 'cell4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Cytokinesis, which correctly describes Result?',
            options: [
              'cleavage furrow (actin ring)',
              'two identical daughter cells',
              'cell plate forms from Golgi vesicles',
              'Division of cytoplasm after mitosis'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Result: two identical daughter cells. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Animal cells',
            options: ['cleavage furrow (actin ring)', 'two identical daughter cells', 'cell plate forms from Golgi vesicles', 'Division of cytoplasm after mitosis']
          },
          {
            label: 'Plant cells',
            options: ['cell plate forms from Golgi vesicles', 'cleavage furrow (actin ring)', 'two identical daughter cells', 'Division of cytoplasm after mitosis']
          },
          {
            label: 'Result',
            options: ['two identical daughter cells', 'cell plate forms from Golgi vesicles', 'cleavage furrow (actin ring)', 'Division of cytoplasm after mitosis']
          }
        ],
        correctAnswers: ['cleavage furrow (actin ring)', 'cell plate forms from Golgi vesicles', 'two identical daughter cells'],
        hint1: 'Think about what each concept specifically describes in Cytokinesis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cytokinesis describes a specific idea. Animal cells: cleavage furrow (actin ring). Plant cells: cell plate forms from Golgi vesicles. Result: two identical daughter cells.'
      }
    }
  ]
}
