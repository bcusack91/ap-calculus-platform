export const bioMembraneTransportPart5Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb5-intro-p5',
      type: 'text' as const,
      content: `
# ## Bulk Transport

**Part 5 of 7 — Bulk Transport**

1. Endocytosis: phagocytosis, pinocytosis, receptor-mediated
2. Exocytosis: vesicles fuse with membrane
3. Used for large molecules and particles
4. Requires energy (ATP)
      `
    },
    {
      id: 'memb5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Endocytosis?',
            options: [
              'Used for large molecules and particles',
              'phagocytosis, pinocytosis, receptor-mediated',
              'vesicles fuse with membrane',
              'Requires energy (ATP)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Endocytosis: phagocytosis, pinocytosis, receptor-mediated. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Used for large molecules and particles?',
            options: [
              'Used for large molecules and particles',
              'vesicles fuse with membrane',
              'phagocytosis, pinocytosis, receptor-mediated',
              'Requires energy (ATP)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Used for large molecules and particles. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'memb5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Endocytosis**: phagocytosis, pinocytosis, receptor-mediated
- **Exocytosis**: vesicles fuse with membrane
- **Used for large molecules and particles**
- **Requires energy (ATP)**
      `
    },
    {
      id: 'memb5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Bulk Transport, which correctly describes Requires energy (ATP)?',
            options: [
              'vesicles fuse with membrane',
              'phagocytosis, pinocytosis, receptor-mediated',
              'Used for large molecules and particles',
              'Requires energy (ATP)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Requires energy (ATP). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'memb5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Endocytosis',
            options: ['Requires energy (ATP)', 'vesicles fuse with membrane', 'phagocytosis, pinocytosis, receptor-mediated', 'Used for large molecules and particles']
          },
          {
            label: 'Exocytosis',
            options: ['Requires energy (ATP)', 'phagocytosis, pinocytosis, receptor-mediated', 'vesicles fuse with membrane', 'Used for large molecules and particles']
          }
        ],
        correctAnswers: ['phagocytosis, pinocytosis, receptor-mediated', 'vesicles fuse with membrane'],
        hint1: 'Think about what each concept specifically describes in Bulk Transport.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Bulk Transport describes a specific idea. Endocytosis: phagocytosis, pinocytosis, receptor-mediated. Exocytosis: vesicles fuse with membrane.'
      }
    }
  ]
}
