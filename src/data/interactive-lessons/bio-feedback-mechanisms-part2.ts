export const bioFeedbackPart2Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'feed2-intro-p2',
      type: 'text' as const,
      content: `
# ## Negative Feedback

**Part 2 of 7 — Negative Feedback**

1. Output opposes the change that triggered it
2. Most common feedback in biology
3. Example: thermostat — heating turns off when temperature reached
4. Example: blood glucose regulation by insulin/glucagon
      `
    },
    {
      id: 'feed2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes output opposes the change that triggered it?',
            options: [
              'Output opposes the change that triggered it',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Output opposes the change that triggered it'
          },
          {
            question: 'In the context of negative feedback, which statement is accurate?',
            options: [
              'Example: thermostat — heating turns off when temperature reached',
              'ti dereggirt taht egnahc eht sesoppo tuptuO',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Example: thermostat — heating turns off when temperature reached'
          }
        ]
      }
    },
    {
      id: 'feed2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Output opposes the change that triggered it**
- **Most common feedback in biology**
- **Example**: thermostat — heating turns off when temperature reached
- **Example**: blood glucose regulation by insulin/glucagon
      `
    },
    {
      id: 'feed2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to negative feedback?',
            options: [
              'Example: blood glucose regulation by insulin/glucagon',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Example: blood glucose regulation by insulin/glucagon'
          }
        ]
      }
    },
    {
      id: 'feed2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Output opposes the change that triggered it is important in negative feedback because',
            options: ['Output opposes the change that triggered it', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Most common feedback in biology is important in negative feedback because',
            options: ['Most common feedback in biology', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Example is important in negative feedback because',
            options: ['thermostat — heating turns off when temperature re', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Output opposes the change that triggered it', 'Most common feedback in biology', 'thermostat — heating turns off when temperature re'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Negative Feedback.'
      }
    }
  ]
}
