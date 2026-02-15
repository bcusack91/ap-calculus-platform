export const satFunctionsPart3Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-f3-intro',
      type: 'text' as const,
      content: `
# Interpreting Graphs

**Part 3 of 7 — Interpreting Graphs**

Increasing: graph goes up left to right; decreasing: goes down.

Maximum/minimum: highest/lowest point on the graph.
      `
    },
    {
      id: 'sat-f3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes increasing?',
            options: [
              'Increasing is a fundamental concept in SAT Math',
              'Maximum/minimum: highest/lowest point on the graph',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Increasing: graph goes up left to right; decreasing: goes down'
          }
        ]
      }
    },
    {
      id: 'sat-f3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Intercepts: where the graph crosses the axes.

**SAT Tip:** Rate of change = (change in y)/(change in x) = slope between two points.
      `
    },
    {
      id: 'sat-f3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for interpreting graphs?',
            options: [
              'Intercepts: where the graph crosses the axes',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Intercepts: where the graph crosses the axes'
          }
        ]
      }
    },
    {
      id: 'sat-f3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Interpreting Graphs:',
            options: ['Increasing: graph goes up left to right; decreasin', 'Maximum/minimum: highest/lowest point on the graph', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Intercepts: where the graph crosses the axes', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Increasing: graph goes up left to right; decreasin', 'Intercepts: where the graph crosses the axes'],
        hint1: 'Think about interpreting graphs',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Increasing: graph goes up left to right; decreasing: goes down. Intercepts: where the graph crosses the axes.'
      }
    }
  ]
}
