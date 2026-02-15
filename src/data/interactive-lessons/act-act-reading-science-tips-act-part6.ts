export const actReadSciTipsPart6Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-r6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Take a full-length practice test to establish your baseline.

Focus improvement on your weakest section for the biggest gains.
      `
    },
    {
      id: 'act-r6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes take a full-length practice test to establish your baseline?',
            options: [
              'Take a full-length practice test to establish your baseline is a key concept for ACT English/Reading',
              'Focus improvement on your weakest section for the biggest gains',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Take a full-length practice test to establish your baseline'
          }
        ]
      }
    },
    {
      id: 'act-r6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Practice regularly with official ACT materials.

**ACT Tip:** Review every wrong answer — understand WHY you missed it.
      `
    },
    {
      id: 'act-r6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
            options: [
              'Practice regularly with official ACT materials',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Practice regularly with official ACT materials'
          }
        ]
      }
    },
    {
      id: 'act-r6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Take a full-length practice test to establish your', 'Focus improvement on your weakest section for the ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Practice regularly with official ACT materials', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Take a full-length practice test to establish your', 'Practice regularly with official ACT materials'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Take a full-length practice test to establish your baseline. Practice regularly with official ACT materials.'
      }
    }
  ]
}
