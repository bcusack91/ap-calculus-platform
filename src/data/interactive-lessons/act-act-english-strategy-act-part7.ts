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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
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
      id: 'act-e7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['~36 seconds per question — move quickly', 'If a grammar question stumps you, go with your ear', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Rhetoric questions may take longer — budget extra ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['~36 seconds per question — move quickly', 'Rhetoric questions may take longer — budget extra '],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best ACT strategy',
        explanation: '~36 seconds per question — move quickly. Rhetoric questions may take longer — budget extra time.'
      }
    }
  ]
}
