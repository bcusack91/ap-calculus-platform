export const satCalcStrategyPart2Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'sat-c2-intro',
      type: 'text' as const,
      content: `
# When to Use (and Skip) the Calculator

**Part 2 of 7 — When to Use (and Skip) the Calculator**

Use calculator for: complex arithmetic, graphing to check, table of values.

Skip calculator for: simple algebra, factoring, conceptual questions.
      `
    },
    {
      id: 'sat-c2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes use calculator for?',
            options: [
              'Use calculator for is a fundamental concept in SAT Math',
              'Skip calculator for: simple algebra, factoring, conceptual questions',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Use calculator for: complex arithmetic, graphing to check, table of values'
          }
        ]
      }
    },
    {
      id: 'sat-c2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Mental math is often faster than typing into calculator.

**SAT Tip:** Rule of thumb: if you can solve in under 30 seconds by hand, don't reach for the calculator.
      `
    },
    {
      id: 'sat-c2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for when to use (and skip) the calculator?',
            options: [
              'Mental math is often faster than typing into calculator',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Mental math is often faster than typing into calculator'
          }
        ]
      }
    },
    {
      id: 'sat-c2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for When to Use (and Skip) the Calculator:',
            options: ['Use calculator for: complex arithmetic, graphing t', 'Skip calculator for: simple algebra, factoring, co', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Mental math is often faster than typing into calcu', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Use calculator for: complex arithmetic, graphing t', 'Mental math is often faster than typing into calcu'],
        hint1: 'Think about when to use (and skip) the calculator',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Use calculator for: complex arithmetic, graphing to check, table of values. Mental math is often faster than typing into calculator.'
      }
    }
  ]
}
