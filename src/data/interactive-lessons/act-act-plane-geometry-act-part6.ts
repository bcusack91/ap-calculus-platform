export const actPlaneGeomPart6Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-p6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Rectangle: A = lw, P = 2l + 2w.

Triangle: A = ½bh.
      `
    },
    {
      id: 'act-p6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes rectangle?',
            options: [
              'Rectangle is a key concept for ACT Math',
              'Triangle: A = ½bh',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Rectangle: A = lw, P = 2l + 2w'
          }
        ]
      }
    },
    {
      id: 'act-p6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Circle: A = πr², C = 2πr.

**ACT Tip:** Composite figures: break into simple shapes, add/subtract areas.
      `
    },
    {
      id: 'act-p6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
            options: [
              'Circle: A = πr², C = 2πr',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Circle: A = πr², C = 2πr'
          }
        ]
      }
    },
    {
      id: 'act-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Rectangle: A = lw, P = 2l + 2w', 'Triangle: A = ½bh', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Circle: A = πr², C = 2πr', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Rectangle: A = lw, P = 2l + 2w', 'Circle: A = πr², C = 2πr'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Rectangle: A = lw, P = 2l + 2w. Circle: A = πr², C = 2πr.'
      }
    }
  ]
}
