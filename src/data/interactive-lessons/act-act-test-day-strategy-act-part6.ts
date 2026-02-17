export const actTestDayPart6Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-t6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Get a good night's sleep — at least 8 hours.

Eat a balanced breakfast with protein and complex carbs.
      `
    },
    {
      id: 'act-t6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Get a good night\'s sleep — at least 8…?',
            options: [
              'Arrive early — rushing increases anxiety.',
              'Eat a balanced breakfast with protein and complex carbs.',
              'Deep breaths between sections to reset your focus.',
              'Get a good night\'s sleep — at least 8 hours.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Get a good night\'s sleep — at least 8 hours. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Key Insight?',
            options: [
              'Deep breaths between sections to reset your focus.',
              'Eat a balanced breakfast with protein and complex carbs.',
              'Arrive early — rushing increases anxiety.',
              'Get a good night\'s sleep — at least 8 hours.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Arrive early — rushing increases anxiety. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-t6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Arrive early — rushing increases anxiety.

**ACT Tip:** Deep breaths between sections to reset your focus.
      `
    },
    {
      id: 'act-t6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Eat a balanced breakfast with protein and complex carbs.',
              'Deep breaths between sections to reset your focus.',
              'Arrive early — rushing increases anxiety.',
              'Get a good night\'s sleep — at least 8 hours.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Deep breaths between sections to reset your focus. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-t6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Eat a balanced breakfast with protein and complex carbs.', 'Arrive early — rushing increases anxiety.', 'Deep breaths between sections to reset your focus.', 'Get a good night\'s sleep — at least 8 hours.']
          },
          {
            label: 'ACT Tip',
            options: ['Get a good night\'s sleep — at least 8 hours.', 'Arrive early — rushing increases anxiety.', 'Eat a balanced breakfast with protein and complex carbs.', 'Deep breaths between sections to reset your focus.']
          }
        ],
        correctAnswers: ['Arrive early — rushing increases anxiety.', 'Deep breaths between sections to reset your focus.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Key Insight: Arrive early — rushing increases anxiety. ACT Tip: Deep breaths between sections to reset your focus.'
      }
    }
  ]
}
