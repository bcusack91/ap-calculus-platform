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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Output opposes the change that…?',
            options: [
              'Most common feedback in biology',
              'thermostat — heating turns off when temperature reached',
              'blood glucose regulation by insulin/glucagon',
              'Output opposes the change that triggered it'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Output opposes the change that triggered it. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Example?',
            options: [
              'Output opposes the change that triggered it',
              'thermostat — heating turns off when temperature reached',
              'Most common feedback in biology',
              'This is a common misconception about the topic'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Example: thermostat — heating turns off when temperature reached. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Example?',
            options: [
              'Output opposes the change that triggered it',
              'Most common feedback in biology',
              'blood glucose regulation by insulin/glucagon',
              'This is a common misconception about the topic'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Example: blood glucose regulation by insulin/glucagon. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'feed2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Example',
            options: ['Output opposes the change that triggered it', 'Most common feedback in biology', 'thermostat — heating turns off when temperature reached', 'blood glucose regulation by insulin/glucagon']
          },
          {
            label: 'Example',
            options: ['Most common feedback in biology', 'blood glucose regulation by insulin/glucagon', 'thermostat — heating turns off when temperature reached', 'Output opposes the change that triggered it']
          }
        ],
        correctAnswers: ['thermostat — heating turns off when temperature reached', 'blood glucose regulation by insulin/glucagon'],
        hint1: 'Think about what each concept specifically describes in Negative Feedback.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Negative Feedback describes a specific idea. Example: thermostat — heating turns off when temperature reached. Example: blood glucose regulation by insulin/glucagon.'
      }
    }
  ]
}
