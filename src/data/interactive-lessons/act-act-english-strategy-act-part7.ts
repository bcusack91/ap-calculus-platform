export const actEnglishStratPart7Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-e7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

~36 seconds per question — move quickly.

If a grammar question stumps you, go with your ear (it often sounds right).
      `
    },
    {
      id: 'act-e7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes ~36 seconds per question — move quickly.?',
            options: [
              'If a grammar question stumps you, go with your ear (it often sounds right).',
              '~36 seconds per question — move quickly.',
              'Skip and return: mark difficult questions and come back.',
              'Rhetoric questions may take longer — budget extra time.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ~36 seconds per question — move quickly. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              '~36 seconds per question — move quickly.',
              'Rhetoric questions may take longer — budget extra time.',
              'Skip and return: mark difficult questions and come back.',
              'If a grammar question stumps you, go with your ear (it often sounds right).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Rhetoric questions may take longer — budget extra time. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Rhetoric questions may take longer — budget extra time.

**ACT Tip:** Skip and return: mark difficult questions and come back.
      `
    },
    {
      id: 'act-e7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Rhetoric questions may take longer — budget extra time.',
              'If a grammar question stumps you, go with your ear (it often sounds right).',
              '~36 seconds per question — move quickly.',
              'Skip and return: mark difficult questions and come back.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Skip and return: mark difficult questions and come back. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['~36 seconds per question — move quickly.', 'If a grammar question stumps you, go with your ear (it often sounds right).', 'Skip and return: mark difficult questions and come back.', 'Rhetoric questions may take longer — budget extra time.']
          },
          {
            label: 'ACT Tip',
            options: ['Skip and return: mark difficult questions and come back.', 'If a grammar question stumps you, go with your ear (it often sounds right).', '~36 seconds per question — move quickly.', 'Rhetoric questions may take longer — budget extra time.']
          }
        ],
        correctAnswers: ['Rhetoric questions may take longer — budget extra time.', 'Skip and return: mark difficult questions and come back.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Key Insight: Rhetoric questions may take longer — budget extra time. ACT Tip: Skip and return: mark difficult questions and come back.'
      }
    }
  ]
}
