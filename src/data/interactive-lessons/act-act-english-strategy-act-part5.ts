export const actEnglishStratPart5Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-e5-intro',
      type: 'text' as const,
      content: `
# Pacing & Timing

**Part 5 of 7 — Pacing & Timing**

~36 seconds per question — move quickly.

If a grammar question stumps you, go with your ear (it often sounds right).
      `
    },
    {
      id: 'act-e5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes ~36 seconds per question — move quickly?',
            options: [
              '~36 seconds per question — move quickly is a key concept for ACT English/Reading',
              'If a grammar question stumps you, go with your ear (it often sounds right)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: '~36 seconds per question — move quickly'
          }
        ]
      }
    },
    {
      id: 'act-e5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Rhetoric questions may take longer — budget extra time.

**ACT Tip:** Skip and return: mark difficult questions and come back.
      `
    },
    {
      id: 'act-e5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for pacing & timing?',
            options: [
              'Rhetoric questions may take longer — budget extra time',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Rhetoric questions may take longer — budget extra time'
          }
        ]
      }
    },
    {
      id: 'act-e5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Pacing & Timing:',
            options: ['~36 seconds per question — move quickly', 'If a grammar question stumps you, go with your ear', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Rhetoric questions may take longer — budget extra ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['~36 seconds per question — move quickly', 'Rhetoric questions may take longer — budget extra '],
        hint1: 'Think about pacing & timing',
        hint2: 'Consider the best ACT strategy',
        explanation: '~36 seconds per question — move quickly. Rhetoric questions may take longer — budget extra time.'
      }
    }
  ]
}
