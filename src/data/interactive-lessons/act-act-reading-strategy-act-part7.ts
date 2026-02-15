export const actReadingStratPart7Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-r7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Main idea: asks about the passage as a whole.

Detail: asks about specific information stated in the passage.
      `
    },
    {
      id: 'act-r7-quiz1',
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
      id: 'act-r7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Inference: asks what can be concluded or implied.

**ACT Tip:** Vocabulary: asks about word meaning in context.
      `
    },
    {
      id: 'act-r7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
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
      id: 'act-r7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['Main idea: asks about the passage as a whole', 'Detail: asks about specific information stated in ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Inference: asks what can be concluded or implied', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Main idea: asks about the passage as a whole', 'Inference: asks what can be concluded or implied'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Main idea: asks about the passage as a whole. Inference: asks what can be concluded or implied.'
      }
    }
  ]
}
