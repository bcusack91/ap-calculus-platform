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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes output amplifies the change?',
            options: [
              'Output amplifies the change',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Output amplifies the change'
          },
          {
            question: 'In the context of positive feedback, which statement is accurate?',
            options: [
              'Example: blood clotting cascade',
              'egnahc eht seifilpma tuptuO',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Example: blood clotting cascade'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to positive feedback?',
            options: [
              'Example: oxytocin during childbirth (labor contractions)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Example: oxytocin during childbirth (labor contractions)'
          }
        ]
      }
    },
    {
      id: 'feed3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Output amplifies the change is important in positive feedback because',
            options: ['Output amplifies the change', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Less common, used for rapid processes is important in positive feedback because',
            options: ['Less common, used for rapid processes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Example is important in positive feedback because',
            options: ['blood clotting cascade', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Output amplifies the change', 'Less common, used for rapid processes', 'blood clotting cascade'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Positive Feedback.'
      }
    }
  ]
}
