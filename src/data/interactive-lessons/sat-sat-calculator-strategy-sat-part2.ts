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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Use calculator for?',
            options: [
              'simple algebra, factoring, conceptual questions.',
              'Rule of thumb: if you can solve in under 30 seconds by hand, don\'t reach for the calculator.',
              'complex arithmetic, graphing to check, table of values.',
              'Mental math is often faster than typing into calculator.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Use calculator for: complex arithmetic, graphing to check, table of values. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Mental math is often faster than typing into calculator.',
              'complex arithmetic, graphing to check, table of values.',
              'simple algebra, factoring, conceptual questions.',
              'Rule of thumb: if you can solve in under 30 seconds by hand, don\'t reach for the calculator.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Mental math is often faster than typing into calculator. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Mental math is often faster than typing into calculator.',
              'simple algebra, factoring, conceptual questions.',
              'complex arithmetic, graphing to check, table of values.',
              'Rule of thumb: if you can solve in under 30 seconds by hand, don\'t reach for the calculator.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Rule of thumb: if you can solve in under 30 seconds by hand, don\'t reach for the calculator. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Use calculator for',
            options: ['Rule of thumb: if you can solve in under 30 seconds by hand, don\'t reach for the calculator.', 'complex arithmetic, graphing to check, table of values.', 'Mental math is often faster than typing into calculator.', 'simple algebra, factoring, conceptual questions.']
          },
          {
            label: 'Skip calculator for',
            options: ['simple algebra, factoring, conceptual questions.', 'complex arithmetic, graphing to check, table of values.', 'Rule of thumb: if you can solve in under 30 seconds by hand, don\'t reach for the calculator.', 'Mental math is often faster than typing into calculator.']
          },
          {
            label: 'Key Insight',
            options: ['simple algebra, factoring, conceptual questions.', 'Rule of thumb: if you can solve in under 30 seconds by hand, don\'t reach for the calculator.', 'complex arithmetic, graphing to check, table of values.', 'Mental math is often faster than typing into calculator.']
          }
        ],
        correctAnswers: ['complex arithmetic, graphing to check, table of values.', 'simple algebra, factoring, conceptual questions.', 'Mental math is often faster than typing into calculator.'],
        hint1: 'Think about what each concept specifically describes in When to Use (and Skip) the Calculator.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in When to Use (and Skip) the Calculator describes a specific idea. Use calculator for: complex arithmetic, graphing to check, table of values. Skip calculator for: simple algebra, factoring, conceptual questions. Key Insight: Mental math is often faster than typing into calculator.'
      }
    }
  ]
}
