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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Graph functions to find intersections…" refer to in SAT prep?',
            options: [
              'Store intermediate values in memory.',
              'Graph functions to find intersections (solutions to systems).',
              'Use TABLE feature to test values quickly.',
              'Graph y = left side and y = right side to solve equations.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Graph functions to find intersections (solutions to systems). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Use TABLE feature to test values quickly.',
              'Graph functions to find intersections (solutions to systems).',
              'Store intermediate values in memory.',
              'Graph y = left side and y = right side to solve equations.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Store intermediate values in memory. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Graphing Calculator Tricks, which correctly describes SAT Tip?',
            options: [
              'Graph y = left side and y = right side to solve equations.',
              'Use TABLE feature to test values quickly.',
              'Store intermediate values in memory.',
              'Graph functions to find intersections (solutions to systems).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Graph y = left side and y = right side to solve equations. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Store intermediate values in memory.', 'Graph functions to find intersections (solutions to systems).', 'Use TABLE feature to test values quickly.', 'Graph y = left side and y = right side to solve equations.']
          },
          {
            label: 'SAT Tip',
            options: ['Store intermediate values in memory.', 'Graph functions to find intersections (solutions to systems).', 'Use TABLE feature to test values quickly.', 'Graph y = left side and y = right side to solve equations.']
          }
        ],
        correctAnswers: ['Store intermediate values in memory.', 'Graph y = left side and y = right side to solve equations.'],
        hint1: 'Think about what each concept specifically describes in Graphing Calculator Tricks.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Graphing Calculator Tricks describes a specific idea. Key Insight: Store intermediate values in memory. SAT Tip: Graph y = left side and y = right side to solve equations.'
      }
    }
  ]
}
