export const satCalcStrategyPart3Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'sat-c3-intro',
      type: 'text' as const,
      content: `
# Graphing Calculator Tricks

**Part 3 of 7 — Graphing Calculator Tricks**

Graph functions to find intersections (solutions to systems).

Use TABLE feature to test values quickly.
      `
    },
    {
      id: 'sat-c3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes graph functions to find intersections (solutions to systems)?',
            options: [
              'Graph functions to find intersections (solutions to systems) is a fundamental concept in SAT Math',
              'Use TABLE feature to test values quickly',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Graph functions to find intersections (solutions to systems)'
          }
        ]
      }
    },
    {
      id: 'sat-c3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Store intermediate values in memory.

**SAT Tip:** Graph y = left side and y = right side to solve equations.
      `
    },
    {
      id: 'sat-c3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for graphing calculator tricks?',
            options: [
              'Store intermediate values in memory',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Store intermediate values in memory'
          }
        ]
      }
    },
    {
      id: 'sat-c3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Graphing Calculator Tricks:',
            options: ['Graph functions to find intersections (solutions t', 'Use TABLE feature to test values quickly', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Store intermediate values in memory', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Graph functions to find intersections (solutions t', 'Store intermediate values in memory'],
        hint1: 'Think about graphing calculator tricks',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Graph functions to find intersections (solutions to systems). Store intermediate values in memory.'
      }
    }
  ]
}
