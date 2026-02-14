export const bioEnergyFlowPart6Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener6-intro-p6',
      type: 'text' as const,
      content: `
# ## Energy Flow: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Calculating energy transfer between trophic levels
2. Analyzing ecosystem productivity
3. Tracing nutrients through cycles
4. Predicting effects of human disruption
      `
    },
    {
      id: 'ener6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes calculating energy transfer between trophic levels?',
            options: [
              'Calculating energy transfer between trophic levels',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Calculating energy transfer between trophic levels'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Tracing nutrients through cycles',
              'slevel cihport neewteb refsnart ygrene gnitaluclaC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Tracing nutrients through cycles'
          }
        ]
      }
    },
    {
      id: 'ener6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Calculating energy transfer between trophic levels**
- **Analyzing ecosystem productivity**
- **Tracing nutrients through cycles**
- **Predicting effects of human disruption**
      `
    },
    {
      id: 'ener6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Predicting effects of human disruption',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting effects of human disruption'
          }
        ]
      }
    },
    {
      id: 'ener6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Calculating energy transfer between trophic levels is important in problem-solving because',
            options: ['Calculating energy transfer between trophic levels', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Analyzing ecosystem productivity is important in problem-solving because',
            options: ['Analyzing ecosystem productivity', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Tracing nutrients through cycles is important in problem-solving because',
            options: ['Tracing nutrients through cycles', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Calculating energy transfer between trophic levels', 'Analyzing ecosystem productivity', 'Tracing nutrients through cycles'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
