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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Analyzing fitness data in different…?',
            options: [
              'Predicting phenotypic responses',
              'Evaluating trade-off scenarios',
              'Designing experiments to measure fitness',
              'Analyzing fitness data in different environments'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Analyzing fitness data in different environments. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Evaluating trade-off scenarios?',
            options: [
              'Designing experiments to measure fitness',
              'Evaluating trade-off scenarios',
              'Predicting phenotypic responses',
              'Analyzing fitness data in different environments'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Evaluating trade-off scenarios. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Designing experiments to measure fitness is correct?',
            options: [
              'Predicting phenotypic responses',
              'Evaluating trade-off scenarios',
              'Analyzing fitness data in different environments',
              'Designing experiments to measure fitness'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Designing experiments to measure fitness. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'fitn6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing fitness data in different…',
            options: ['Analyzing fitness data in different environments', 'Evaluating trade-off scenarios', 'Designing experiments to measure fitness', 'Predicting phenotypic responses']
          },
          {
            label: 'Predicting phenotypic responses',
            options: ['Analyzing fitness data in different environments', 'Predicting phenotypic responses', 'Designing experiments to measure fitness', 'Evaluating trade-off scenarios']
          },
          {
            label: 'Evaluating trade-off scenarios',
            options: ['Evaluating trade-off scenarios', 'Analyzing fitness data in different environments', 'Predicting phenotypic responses', 'Designing experiments to measure fitness']
          }
        ],
        correctAnswers: ['Analyzing fitness data in different environments', 'Predicting phenotypic responses', 'Evaluating trade-off scenarios'],
        hint1: 'Think about what each concept specifically describes in Fitness & Environment: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Fitness & Environment: Problem-Solving Workshop describes a specific idea. Analyzing fitness data in different environments. Predicting phenotypic responses. Evaluating trade-off scenarios.'
      }
    }
  ]
}
