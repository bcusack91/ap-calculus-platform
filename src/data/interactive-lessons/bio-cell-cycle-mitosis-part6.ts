export const bioCellCyclePart6Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cell6-intro-p6',
      type: 'text' as const,
      content: `
# ## Cell Cycle & Mitosis: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Identifying mitosis stages from images
2. Predicting chromosome numbers after division
3. Analyzing cell cycle regulation failures
4. Connecting to cancer biology
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
            question: 'What does "Identifying mitosis stages from images" refer to in biology?',
            options: [
              'Connecting to cancer biology',
              'Identifying mitosis stages from images',
              'Predicting chromosome numbers after division',
              'Analyzing cell cycle regulation failures'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Identifying mitosis stages from images. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Analyzing cell cycle regulation failures:',
            options: [
              'Identifying mitosis stages from images',
              'Predicting chromosome numbers after division',
              'Analyzing cell cycle regulation failures',
              'Connecting to cancer biology'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Analyzing cell cycle regulation failures. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Identifying mitosis stages from images**
- **Predicting chromosome numbers after division**
- **Analyzing cell cycle regulation failures**
- **Connecting to cancer biology**
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
            question: 'Which of these accurately represents Connecting to cancer biology?',
            options: [
              'Analyzing cell cycle regulation failures',
              'Identifying mitosis stages from images',
              'Connecting to cancer biology',
              'Predicting chromosome numbers after division'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Connecting to cancer biology. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            label: 'Identifying mitosis stages from images',
            options: ['Analyzing cell cycle regulation failures', 'Identifying mitosis stages from images', 'Connecting to cancer biology', 'Predicting chromosome numbers after division']
          },
          {
            label: 'Predicting chromosome numbers after…',
            options: ['Connecting to cancer biology', 'Identifying mitosis stages from images', 'Predicting chromosome numbers after division', 'Analyzing cell cycle regulation failures']
          },
          {
            label: 'Analyzing cell cycle regulation failures',
            options: ['Identifying mitosis stages from images', 'Predicting chromosome numbers after division', 'Analyzing cell cycle regulation failures', 'Connecting to cancer biology']
          }
        ],
        correctAnswers: ['Identifying mitosis stages from images', 'Predicting chromosome numbers after division', 'Analyzing cell cycle regulation failures'],
        hint1: 'Think about what each concept specifically describes in Cell Cycle & Mitosis: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Cycle & Mitosis: Problem-Solving Workshop describes a specific idea. Identifying mitosis stages from images. Predicting chromosome numbers after division. Analyzing cell cycle regulation failures.'
      }
    }
  ]
}
