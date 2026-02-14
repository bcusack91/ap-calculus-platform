export const bioFeedbackPart5Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'feed5-intro-p5',
      type: 'text' as const,
      content: `
# ## Hormonal Feedback

**Part 5 of 7 — Hormonal Feedback**

1. Hypothalamus-pituitary axis
2. Thyroid hormone negative feedback
3. Blood calcium regulation: PTH and calcitonin
4. Blood glucose: insulin (lowers) and glucagon (raises)
      `
    },
    {
      id: 'feed5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes hypothalamus-pituitary axis?',
            options: [
              'Hypothalamus-pituitary axis',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Hypothalamus-pituitary axis'
          },
          {
            question: 'In the context of hormonal feedback, which statement is accurate?',
            options: [
              'Blood calcium regulation: PTH and calcitonin',
              'sixa yratiutip-sumalahtopyH',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Blood calcium regulation: PTH and calcitonin'
          }
        ]
      }
    },
    {
      id: 'feed5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Hypothalamus-pituitary axis**
- **Thyroid hormone negative feedback**
- **Blood calcium regulation**: PTH and calcitonin
- **Blood glucose**: insulin (lowers) and glucagon (raises)
      `
    },
    {
      id: 'feed5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to hormonal feedback?',
            options: [
              'Blood glucose: insulin (lowers) and glucagon (raises)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Blood glucose: insulin (lowers) and glucagon (raises)'
          }
        ]
      }
    },
    {
      id: 'feed5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hypothalamus-pituitary axis is important in hormonal feedback because',
            options: ['Hypothalamus-pituitary axis', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Thyroid hormone negative feedback is important in hormonal feedback because',
            options: ['Thyroid hormone negative feedback', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Blood calcium regulation is important in hormonal feedback because',
            options: ['PTH and calcitonin', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Hypothalamus-pituitary axis', 'Thyroid hormone negative feedback', 'PTH and calcitonin'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Hormonal Feedback.'
      }
    }
  ]
}
