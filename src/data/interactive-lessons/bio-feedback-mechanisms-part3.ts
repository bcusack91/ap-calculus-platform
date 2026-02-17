export const bioFeedbackPart3Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'feed3-intro-p3',
      type: 'text' as const,
      content: `
# ## Positive Feedback

**Part 3 of 7 — Positive Feedback**

1. Output amplifies the change
2. Less common, used for rapid processes
3. Example: blood clotting cascade
4. Example: oxytocin during childbirth (labor contractions)
      `
    },
    {
      id: 'feed3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Output amplifies the change?',
            options: [
              'Less common, used for rapid processes',
              'oxytocin during childbirth (labor contractions)',
              'blood clotting cascade',
              'Output amplifies the change'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Output amplifies the change. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Example?',
            options: [
              'blood clotting cascade',
              'Less common, used for rapid processes',
              'Output amplifies the change',
              'This is a common misconception about the topic'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Example: blood clotting cascade. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'feed3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Output amplifies the change**
- **Less common, used for rapid processes**
- **Example**: blood clotting cascade
- **Example**: oxytocin during childbirth (labor contractions)
      `
    },
    {
      id: 'feed3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Positive Feedback, which correctly describes Example?',
            options: [
              'oxytocin during childbirth (labor contractions)',
              'This is a common misconception about the topic',
              'Output amplifies the change',
              'Less common, used for rapid processes'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Example: oxytocin during childbirth (labor contractions). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'feed3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Example',
            options: ['Output amplifies the change', 'oxytocin during childbirth (labor contractions)', 'Less common, used for rapid processes', 'blood clotting cascade']
          },
          {
            label: 'Example',
            options: ['blood clotting cascade', 'Output amplifies the change', 'Less common, used for rapid processes', 'oxytocin during childbirth (labor contractions)']
          }
        ],
        correctAnswers: ['blood clotting cascade', 'oxytocin during childbirth (labor contractions)'],
        hint1: 'Think about what each concept specifically describes in Positive Feedback.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Positive Feedback describes a specific idea. Example: blood clotting cascade. Example: oxytocin during childbirth (labor contractions).'
      }
    }
  ]
}
