export const satRatiosPart4Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-r4-intro',
      type: 'text' as const,
      content: `
# Direct & Inverse Variation

**Part 4 of 7 — Direct & Inverse Variation**

Direct variation: y = kx (y increases as x increases proportionally).

Inverse variation: y = k/x (y decreases as x increases).
      `
    },
    {
      id: 'sat-r4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes direct variation?',
            options: [
              'Direct variation is a fundamental concept in SAT Math',
              'Inverse variation: y = k/x (y decreases as x increases)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Direct variation: y = kx (y increases as x increases proportionally)'
          }
        ]
      }
    },
    {
      id: 'sat-r4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** k is the constant of variation.

**SAT Tip:** Find k from one data point, then use it to find unknowns.
      `
    },
    {
      id: 'sat-r4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for direct & inverse variation?',
            options: [
              'k is the constant of variation',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'k is the constant of variation'
          }
        ]
      }
    },
    {
      id: 'sat-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Direct & Inverse Variation:',
            options: ['Direct variation: y = kx (y increases as x increas', 'Inverse variation: y = k/x (y decreases as x incre', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['k is the constant of variation', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Direct variation: y = kx (y increases as x increas', 'k is the constant of variation'],
        hint1: 'Think about direct & inverse variation',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Direct variation: y = kx (y increases as x increases proportionally). k is the constant of variation.'
      }
    }
  ]
}
