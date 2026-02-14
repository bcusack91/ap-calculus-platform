export const bioFitnessPart6Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn6-intro-p6',
      type: 'text' as const,
      content: `
# ## Fitness & Environment: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Analyzing fitness data in different environments
2. Predicting phenotypic responses
3. Evaluating trade-off scenarios
4. Designing experiments to measure fitness
      `
    },
    {
      id: 'fitn6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes analyzing fitness data in different environments?',
            options: [
              'Analyzing fitness data in different environments',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing fitness data in different environments'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Evaluating trade-off scenarios',
              'stnemnorivne tnereffid ni atad ssentif gnizylanA',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating trade-off scenarios'
          }
        ]
      }
    },
    {
      id: 'fitn6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Analyzing fitness data in different environments**
- **Predicting phenotypic responses**
- **Evaluating trade-off scenarios**
- **Designing experiments to measure fitness**
      `
    },
    {
      id: 'fitn6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Designing experiments to measure fitness',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Designing experiments to measure fitness'
          }
        ]
      }
    },
    {
      id: 'fitn6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing fitness data in different environments is important in problem-solving because',
            options: ['Analyzing fitness data in different environments', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predicting phenotypic responses is important in problem-solving because',
            options: ['Predicting phenotypic responses', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Evaluating trade-off scenarios is important in problem-solving because',
            options: ['Evaluating trade-off scenarios', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Analyzing fitness data in different environments', 'Predicting phenotypic responses', 'Evaluating trade-off scenarios'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
