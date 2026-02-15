export const satRatiosPart3Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-r3-intro',
      type: 'text' as const,
      content: `
# Unit Conversion

**Part 3 of 7 — Unit Conversion**

Multiply by conversion factors as fractions.

Units should cancel: (mi/hr) × (hr/min) → mi/min.
      `
    },
    {
      id: 'sat-r3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes multiply by conversion factors as fractions?',
            options: [
              'Multiply by conversion factors as fractions is a fundamental concept in SAT Math',
              'Units should cancel: (mi/hr) × (hr/min) → mi/min',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Multiply by conversion factors as fractions'
          }
        ]
      }
    },
    {
      id: 'sat-r3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Dimensional analysis: track units through the calculation.

**SAT Tip:** SAT often uses unit conversion in multi-step problems.
      `
    },
    {
      id: 'sat-r3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for unit conversion?',
            options: [
              'Dimensional analysis: track units through the calculation',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Dimensional analysis: track units through the calculation'
          }
        ]
      }
    },
    {
      id: 'sat-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Unit Conversion:',
            options: ['Multiply by conversion factors as fractions', 'Units should cancel: (mi/hr) × (hr/min) → mi/min', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Dimensional analysis: track units through the calc', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Multiply by conversion factors as fractions', 'Dimensional analysis: track units through the calc'],
        hint1: 'Think about unit conversion',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Multiply by conversion factors as fractions. Dimensional analysis: track units through the calculation.'
      }
    }
  ]
}
