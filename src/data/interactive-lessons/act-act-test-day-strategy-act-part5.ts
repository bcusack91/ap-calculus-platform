export const actTestDayPart5Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-t5-intro',
      type: 'text' as const,
      content: `
# Mental Preparation

**Part 5 of 7 — Mental Preparation**

Get a good night's sleep — at least 8 hours.

Eat a balanced breakfast with protein and complex carbs.
      `
    },
    {
      id: 'act-t5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes get a good night\'s sleep — at least 8 hours?',
            options: [
              'Get a good night\'s sleep — at least 8 hours is a key concept for ACT Math',
              'Eat a balanced breakfast with protein and complex carbs',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Get a good night\'s sleep — at least 8 hours'
          }
        ]
      }
    },
    {
      id: 'act-t5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Arrive early — rushing increases anxiety.

**ACT Tip:** Deep breaths between sections to reset your focus.
      `
    },
    {
      id: 'act-t5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for mental preparation?',
            options: [
              'Arrive early — rushing increases anxiety',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Arrive early — rushing increases anxiety'
          }
        ]
      }
    },
    {
      id: 'act-t5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Mental Preparation:',
            options: ['Get a good night\'s sleep — at least 8 hours', 'Eat a balanced breakfast with protein and complex ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Arrive early — rushing increases anxiety', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Get a good night\'s sleep — at least 8 hours', 'Arrive early — rushing increases anxiety'],
        hint1: 'Think about mental preparation',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Get a good night\'s sleep — at least 8 hours. Arrive early — rushing increases anxiety.'
      }
    }
  ]
}
