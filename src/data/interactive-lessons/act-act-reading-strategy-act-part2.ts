export const actReadingStratPart2Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-r2-intro',
      type: 'text' as const,
      content: `
# Passage Order Strategy

**Part 2 of 7 — Passage Order Strategy**

Start with your strongest passage type for confidence.

Some students do science or social science first (more straightforward).
      `
    },
    {
      id: 'act-r2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes start with your strongest passage type for confidence?',
            options: [
              'Start with your strongest passage type for confidence is a key concept for ACT English/Reading',
              'Some students do science or social science first (more straightforward)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Start with your strongest passage type for confidence'
          }
        ]
      }
    },
    {
      id: 'act-r2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Literary narrative can be time-consuming — save it if it is your weakest.

**ACT Tip:** Order doesn't affect scoring — play to your strengths.
      `
    },
    {
      id: 'act-r2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for passage order strategy?',
            options: [
              'Literary narrative can be time-consuming — save it if it is your weakest',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Literary narrative can be time-consuming — save it if it is your weakest'
          }
        ]
      }
    },
    {
      id: 'act-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Passage Order Strategy:',
            options: ['Start with your strongest passage type for confide', 'Some students do science or social science first (', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Literary narrative can be time-consuming — save it', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Start with your strongest passage type for confide', 'Literary narrative can be time-consuming — save it'],
        hint1: 'Think about passage order strategy',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Start with your strongest passage type for confidence. Literary narrative can be time-consuming — save it if it is your weakest.'
      }
    }
  ]
}
