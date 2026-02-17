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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Hypothalamus-pituitary axis?',
            options: [
              'PTH and calcitonin',
              'Hypothalamus-pituitary axis',
              'insulin (lowers) and glucagon (raises)',
              'Thyroid hormone negative feedback'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Hypothalamus-pituitary axis. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Hormonal Feedback, which explains Blood calcium regulation?',
            options: [
              'insulin (lowers) and glucagon (raises)',
              'Hypothalamus-pituitary axis',
              'Thyroid hormone negative feedback',
              'PTH and calcitonin'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Blood calcium regulation: PTH and calcitonin. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Blood glucose?',
            options: [
              'Hypothalamus-pituitary axis',
              'insulin (lowers) and glucagon (raises)',
              'Thyroid hormone negative feedback',
              'PTH and calcitonin'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Blood glucose: insulin (lowers) and glucagon (raises). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'feed5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Blood calcium regulation',
            options: ['PTH and calcitonin', 'Hypothalamus-pituitary axis', 'Thyroid hormone negative feedback', 'insulin (lowers) and glucagon (raises)']
          },
          {
            label: 'Blood glucose',
            options: ['Thyroid hormone negative feedback', 'PTH and calcitonin', 'Hypothalamus-pituitary axis', 'insulin (lowers) and glucagon (raises)']
          }
        ],
        correctAnswers: ['PTH and calcitonin', 'insulin (lowers) and glucagon (raises)'],
        hint1: 'Think about what each concept specifically describes in Hormonal Feedback.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Hormonal Feedback describes a specific idea. Blood calcium regulation: PTH and calcitonin. Blood glucose: insulin (lowers) and glucagon (raises).'
      }
    }
  ]
}
