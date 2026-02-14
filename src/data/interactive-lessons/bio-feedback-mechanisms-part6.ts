export const bioFeedbackPart6Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'feed6-intro-p6',
      type: 'text' as const,
      content: `
# ## Feedback Mechanisms: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Diagramming feedback loops
2. Predicting effects of disrupted feedback
3. Distinguishing positive from negative feedback
4. Analyzing homeostatic responses
      `
    },
    {
      id: 'feed6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes diagramming feedback loops?',
            options: [
              'Diagramming feedback loops',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Diagramming feedback loops'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Distinguishing positive from negative feedback',
              'spool kcabdeef gnimmargaiD',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Distinguishing positive from negative feedback'
          }
        ]
      }
    },
    {
      id: 'feed6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Diagramming feedback loops**
- **Predicting effects of disrupted feedback**
- **Distinguishing positive from negative feedback**
- **Analyzing homeostatic responses**
      `
    },
    {
      id: 'feed6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Analyzing homeostatic responses',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing homeostatic responses'
          }
        ]
      }
    },
    {
      id: 'feed6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diagramming feedback loops is important in problem-solving because',
            options: ['Diagramming feedback loops', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predicting effects of disrupted feedback is important in problem-solving because',
            options: ['Predicting effects of disrupted feedback', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Distinguishing positive from negative feedback is important in problem-solving because',
            options: ['Distinguishing positive from negative feedback', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Diagramming feedback loops', 'Predicting effects of disrupted feedback', 'Distinguishing positive from negative feedback'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
