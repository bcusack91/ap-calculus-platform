export const actMathStrategyPart2Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m2-intro',
      type: 'text' as const,
      content: `
# Calculator Tips

**Part 2 of 7 — Calculator Tips**

Use a graphing calculator: TI-84 or similar.

Graph equations to find intersections, zeros, and behavior.
      `
    },
    {
      id: 'act-m2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes use a graphing calculator?',
            options: [
              'Use a graphing calculator is a key concept for ACT Math',
              'Graph equations to find intersections, zeros, and behavior',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Use a graphing calculator: TI-84 or similar'
          }
        ]
      }
    },
    {
      id: 'act-m2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Use TABLE to test values quickly.

**ACT Tip:** Store intermediate results in memory to avoid re-calculating.
      `
    },
    {
      id: 'act-m2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for calculator tips?',
            options: [
              'Use TABLE to test values quickly',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Use TABLE to test values quickly'
          }
        ]
      }
    },
    {
      id: 'act-m2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Calculator Tips:',
            options: ['Use a graphing calculator: TI-84 or similar', 'Graph equations to find intersections, zeros, and ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Use TABLE to test values quickly', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Use a graphing calculator: TI-84 or similar', 'Use TABLE to test values quickly'],
        hint1: 'Think about calculator tips',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Use a graphing calculator: TI-84 or similar. Use TABLE to test values quickly.'
      }
    }
  ]
}
