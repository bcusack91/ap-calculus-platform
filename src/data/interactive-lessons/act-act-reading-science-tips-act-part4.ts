export const actReadSciTipsPart4Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-r4-intro',
      type: 'text' as const,
      content: `
# Managing Difficult Passages

**Part 4 of 7 — Managing Difficult Passages**

Don't panic — difficult passages still have straightforward questions.

Focus on what you DO understand.
      `
    },
    {
      id: 'act-r4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes don\'t panic — difficult passages still have straightforward questions?',
            options: [
              'Don\'t panic — difficult passages still have straightforward questions is a key concept for ACT English/Reading',
              'Focus on what you DO understand',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Don\'t panic — difficult passages still have straightforward questions'
          }
        ]
      }
    },
    {
      id: 'act-r4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look at the questions first for very dense passages.

**ACT Tip:** Eliminate clearly wrong answers even if you are unsure of the right one.
      `
    },
    {
      id: 'act-r4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for managing difficult passages?',
            options: [
              'Look at the questions first for very dense passages',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Look at the questions first for very dense passages'
          }
        ]
      }
    },
    {
      id: 'act-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Managing Difficult Passages:',
            options: ['Don\'t panic — difficult passages still have straig', 'Focus on what you DO understand', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Look at the questions first for very dense passage', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Don\'t panic — difficult passages still have straig', 'Look at the questions first for very dense passage'],
        hint1: 'Think about managing difficult passages',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Don\'t panic — difficult passages still have straightforward questions. Look at the questions first for very dense passages.'
      }
    }
  ]
}
