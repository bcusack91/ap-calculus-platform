export const actReadSciTipsPart3Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-r3-intro',
      type: 'text' as const,
      content: `
# Cross-Section Strategies

**Part 3 of 7 — Cross-Section Strategies**

Both sections reward careful reading and evidence-based reasoning.

Practice skimming for main ideas and scanning for specific details.
      `
    },
    {
      id: 'act-r3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes both sections reward careful reading and evidence-based reasoning?',
            options: [
              'Both sections reward careful reading and evidence-based reasoning is a key concept for ACT English/Reading',
              'Practice skimming for main ideas and scanning for specific details',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Both sections reward careful reading and evidence-based reasoning'
          }
        ]
      }
    },
    {
      id: 'act-r3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Time pressure is the biggest challenge — practice under timed conditions.

**ACT Tip:** Develop a consistent approach: read passage first, then answer questions.
      `
    },
    {
      id: 'act-r3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for cross-section strategies?',
            options: [
              'Time pressure is the biggest challenge — practice under timed conditions',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Time pressure is the biggest challenge — practice under timed conditions'
          }
        ]
      }
    },
    {
      id: 'act-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Cross-Section Strategies:',
            options: ['Both sections reward careful reading and evidence-', 'Practice skimming for main ideas and scanning for ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Time pressure is the biggest challenge — practice ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Both sections reward careful reading and evidence-', 'Time pressure is the biggest challenge — practice '],
        hint1: 'Think about cross-section strategies',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Both sections reward careful reading and evidence-based reasoning. Time pressure is the biggest challenge — practice under timed conditions.'
      }
    }
  ]
}
