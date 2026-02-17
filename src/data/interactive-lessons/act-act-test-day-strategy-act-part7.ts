export const actTestDayPart7Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-t7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Get a good night's sleep — at least 8 hours.

Eat a balanced breakfast with protein and complex carbs.
      `
    },
    {
      id: 'act-t7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Get a good night\'s sleep — at least 8…?',
            options: [
              'Eat a balanced breakfast with protein and complex carbs.',
              'Get a good night\'s sleep — at least 8 hours.',
              'Deep breaths between sections to reset your focus.',
              'Arrive early — rushing increases anxiety.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Get a good night\'s sleep — at least 8 hours. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Key Insight?',
            options: [
              'Arrive early — rushing increases anxiety.',
              'Get a good night\'s sleep — at least 8 hours.',
              'Deep breaths between sections to reset your focus.',
              'Eat a balanced breakfast with protein and complex carbs.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Arrive early — rushing increases anxiety. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-t7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Arrive early — rushing increases anxiety.

**ACT Tip:** Deep breaths between sections to reset your focus.
      `
    },
    {
      id: 'act-t7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Arrive early — rushing increases anxiety.',
              'Eat a balanced breakfast with protein and complex carbs.',
              'Deep breaths between sections to reset your focus.',
              'Get a good night\'s sleep — at least 8 hours.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Deep breaths between sections to reset your focus. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-t7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Get a good night\'s sleep — at least 8 hours.', 'Arrive early — rushing increases anxiety.', 'Eat a balanced breakfast with protein and complex carbs.', 'Deep breaths between sections to reset your focus.']
          },
          {
            label: 'ACT Tip',
            options: ['Get a good night\'s sleep — at least 8 hours.', 'Deep breaths between sections to reset your focus.', 'Eat a balanced breakfast with protein and complex carbs.', 'Arrive early — rushing increases anxiety.']
          }
        ],
        correctAnswers: ['Arrive early — rushing increases anxiety.', 'Deep breaths between sections to reset your focus.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Key Insight: Arrive early — rushing increases anxiety. ACT Tip: Deep breaths between sections to reset your focus.'
      }
    }
  ]
}
