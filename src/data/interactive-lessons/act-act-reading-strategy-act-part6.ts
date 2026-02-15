export const actReadingStratPart6Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-r6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Main idea: asks about the passage as a whole.

Detail: asks about specific information stated in the passage.
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
            question: 'Which statement best describes main idea?',
            options: [
              'Main idea is a key concept for ACT English/Reading',
              'Detail: asks about specific information stated in the passage',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Main idea: asks about the passage as a whole'
          }
        ]
      }
    },
    {
      id: 'act-r6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Inference: asks what can be concluded or implied.

**ACT Tip:** Vocabulary: asks about word meaning in context.
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
              'Inference: asks what can be concluded or implied',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Inference: asks what can be concluded or implied'
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
            options: ['Main idea: asks about the passage as a whole', 'Detail: asks about specific information stated in ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Inference: asks what can be concluded or implied', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Main idea: asks about the passage as a whole', 'Inference: asks what can be concluded or implied'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Main idea: asks about the passage as a whole. Inference: asks what can be concluded or implied.'
      }
    }
  ]
}
