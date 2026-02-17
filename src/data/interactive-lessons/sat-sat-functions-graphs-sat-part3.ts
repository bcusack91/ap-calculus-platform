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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Increasing?',
            options: [
              'Rate of change = (change in y)/(change in x) = slope between two points.',
              'graph goes up left to right; decreasing: goes down.',
              'Intercepts: where the graph crosses the axes.',
              'highest/lowest point on the graph.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Increasing: graph goes up left to right; decreasing: goes down. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'highest/lowest point on the graph.',
              'Rate of change = (change in y)/(change in x) = slope between two points.',
              'Intercepts: where the graph crosses the axes.',
              'graph goes up left to right; decreasing: goes down.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Intercepts: where the graph crosses the axes. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Intercepts: where the graph crosses the axes.',
              'Rate of change = (change in y)/(change in x) = slope between two points.',
              'graph goes up left to right; decreasing: goes down.',
              'highest/lowest point on the graph.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Rate of change = (change in y)/(change in x) = slope between two points. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-f3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Increasing',
            options: ['Rate of change = (change in y)/(change in x) = slope between two points.', 'Intercepts: where the graph crosses the axes.', 'highest/lowest point on the graph.', 'graph goes up left to right; decreasing: goes down.']
          },
          {
            label: 'Maximum/minimum',
            options: ['highest/lowest point on the graph.', 'Rate of change = (change in y)/(change in x) = slope between two points.', 'Intercepts: where the graph crosses the axes.', 'graph goes up left to right; decreasing: goes down.']
          },
          {
            label: 'Key Insight',
            options: ['highest/lowest point on the graph.', 'graph goes up left to right; decreasing: goes down.', 'Rate of change = (change in y)/(change in x) = slope between two points.', 'Intercepts: where the graph crosses the axes.']
          }
        ],
        correctAnswers: ['graph goes up left to right; decreasing: goes down.', 'highest/lowest point on the graph.', 'Intercepts: where the graph crosses the axes.'],
        hint1: 'Think about what each concept specifically describes in Interpreting Graphs.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Interpreting Graphs describes a specific idea. Increasing: graph goes up left to right; decreasing: goes down. Maximum/minimum: highest/lowest point on the graph. Key Insight: Intercepts: where the graph crosses the axes.'
      }
    }
  ]
}
