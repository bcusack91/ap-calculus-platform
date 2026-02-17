export const actEnglishStratPart6Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-e6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

~36 seconds per question — move quickly.

If a grammar question stumps you, go with your ear (it often sounds right).
      `
    },
    {
      id: 'act-e6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes ~36 seconds per question — move quickly.?',
            options: [
              'Rhetoric questions may take longer — budget extra time.',
              'If a grammar question stumps you, go with your ear (it often sounds right).',
              'Skip and return: mark difficult questions and come back.',
              '~36 seconds per question — move quickly.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ~36 seconds per question — move quickly. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Skip and return: mark difficult questions and come back.',
              'Rhetoric questions may take longer — budget extra time.',
              'If a grammar question stumps you, go with your ear (it often sounds right).',
              '~36 seconds per question — move quickly.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Rhetoric questions may take longer — budget extra time. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Rhetoric questions may take longer — budget extra time.

**ACT Tip:** Skip and return: mark difficult questions and come back.
      `
    },
    {
      id: 'act-e6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Skip and return: mark difficult questions and come back.',
              'Rhetoric questions may take longer — budget extra time.',
              'If a grammar question stumps you, go with your ear (it often sounds right).',
              '~36 seconds per question — move quickly.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Skip and return: mark difficult questions and come back. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['If a grammar question stumps you, go with your ear (it often sounds right).', 'Skip and return: mark difficult questions and come back.', 'Rhetoric questions may take longer — budget extra time.', '~36 seconds per question — move quickly.']
          },
          {
            label: 'ACT Tip',
            options: ['~36 seconds per question — move quickly.', 'Rhetoric questions may take longer — budget extra time.', 'If a grammar question stumps you, go with your ear (it often sounds right).', 'Skip and return: mark difficult questions and come back.']
          }
        ],
        correctAnswers: ['Rhetoric questions may take longer — budget extra time.', 'Skip and return: mark difficult questions and come back.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Key Insight: Rhetoric questions may take longer — budget extra time. ACT Tip: Skip and return: mark difficult questions and come back.'
      }
    }
  ]
}
