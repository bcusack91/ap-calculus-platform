export const bioCellCompartmentPart2Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'cell2-intro-p2',
      type: 'text' as const,
      content: `
# ## Compartment Functions

**Part 2 of 7 — Compartment Functions**

1. Organelles create separate chemical environments
2. Different pH in different compartments
3. Concentrated enzymes increase efficiency
4. Prevents incompatible reactions from interfering
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
            question: 'What does "Organelles create separate chemical…" refer to in biology?',
            options: [
              'Different pH in different compartments',
              'Organelles create separate chemical environments',
              'Concentrated enzymes increase efficiency',
              'Prevents incompatible reactions from interfering'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Organelles create separate chemical environments. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Concentrated enzymes increase efficiency?',
            options: [
              'Prevents incompatible reactions from interfering',
              'Concentrated enzymes increase efficiency',
              'Different pH in different compartments',
              'Organelles create separate chemical environments'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Concentrated enzymes increase efficiency. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Organelles create separate chemical environments**
- **Different pH in different compartments**
- **Concentrated enzymes increase efficiency**
- **Prevents incompatible reactions from interfering**
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
            question: 'Which statement about Prevents incompatible reactions from… is correct?',
            options: [
              'Concentrated enzymes increase efficiency',
              'Organelles create separate chemical environments',
              'Prevents incompatible reactions from interfering',
              'Different pH in different compartments'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Prevents incompatible reactions from interfering. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            label: 'Organelles create separate chemical…',
            options: ['Different pH in different compartments', 'Prevents incompatible reactions from interfering', 'Organelles create separate chemical environments', 'Concentrated enzymes increase efficiency']
          },
          {
            label: 'Different pH in different compartments',
            options: ['Prevents incompatible reactions from interfering', 'Different pH in different compartments', 'Organelles create separate chemical environments', 'Concentrated enzymes increase efficiency']
          },
          {
            label: 'Concentrated enzymes increase efficiency',
            options: ['Prevents incompatible reactions from interfering', 'Different pH in different compartments', 'Organelles create separate chemical environments', 'Concentrated enzymes increase efficiency']
          }
        ],
        correctAnswers: ['Organelles create separate chemical environments', 'Different pH in different compartments', 'Concentrated enzymes increase efficiency'],
        hint1: 'Think about what each concept specifically describes in Compartment Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Compartment Functions describes a specific idea. Organelles create separate chemical environments. Different pH in different compartments. Concentrated enzymes increase efficiency.'
      }
    }
  ]
}
