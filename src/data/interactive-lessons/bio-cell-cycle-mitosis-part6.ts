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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes identifying mitosis stages from images?',
            options: [
              'Identifying mitosis stages from images',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Identifying mitosis stages from images'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Analyzing cell cycle regulation failures',
              'segami morf segats sisotim gniyfitnedI',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing cell cycle regulation failures'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Connecting to cancer biology',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Connecting to cancer biology'
          }
        ]
      }
    },
    {
      id: 'cell6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying mitosis stages from images is important in problem-solving because',
            options: ['Identifying mitosis stages from images', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predicting chromosome numbers after division is important in problem-solving because',
            options: ['Predicting chromosome numbers after division', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Analyzing cell cycle regulation failures is important in problem-solving because',
            options: ['Analyzing cell cycle regulation failures', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Identifying mitosis stages from images', 'Predicting chromosome numbers after division', 'Analyzing cell cycle regulation failures'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
