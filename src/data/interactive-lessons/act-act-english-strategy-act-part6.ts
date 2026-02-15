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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
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
      id: 'act-e6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['~36 seconds per question — move quickly', 'If a grammar question stumps you, go with your ear', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Rhetoric questions may take longer — budget extra ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['~36 seconds per question — move quickly', 'Rhetoric questions may take longer — budget extra '],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best ACT strategy',
        explanation: '~36 seconds per question — move quickly. Rhetoric questions may take longer — budget extra time.'
      }
    }
  ]
}
