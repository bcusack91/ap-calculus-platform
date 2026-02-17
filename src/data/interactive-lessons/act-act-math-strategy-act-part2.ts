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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Use a graphing calculator?',
            options: [
              'Store intermediate results in memory to avoid re-calculating.',
              'Use TABLE to test values quickly.',
              'Graph equations to find intersections, zeros, and behavior.',
              'TI-84 or similar.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Use a graphing calculator: TI-84 or similar. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Store intermediate results in memory to avoid re-calculating.',
              'Use TABLE to test values quickly.',
              'TI-84 or similar.',
              'Graph equations to find intersections, zeros, and behavior.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Use TABLE to test values quickly. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Calculator Tips, which correctly describes ACT Tip?',
            options: [
              'Store intermediate results in memory to avoid re-calculating.',
              'TI-84 or similar.',
              'Graph equations to find intersections, zeros, and behavior.',
              'Use TABLE to test values quickly.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Store intermediate results in memory to avoid re-calculating. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-m2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Use a graphing calculator',
            options: ['Store intermediate results in memory to avoid re-calculating.', 'TI-84 or similar.', 'Use TABLE to test values quickly.', 'Graph equations to find intersections, zeros, and behavior.']
          },
          {
            label: 'Key Insight',
            options: ['Use TABLE to test values quickly.', 'TI-84 or similar.', 'Graph equations to find intersections, zeros, and behavior.', 'Store intermediate results in memory to avoid re-calculating.']
          },
          {
            label: 'ACT Tip',
            options: ['Graph equations to find intersections, zeros, and behavior.', 'Use TABLE to test values quickly.', 'TI-84 or similar.', 'Store intermediate results in memory to avoid re-calculating.']
          }
        ],
        correctAnswers: ['TI-84 or similar.', 'Use TABLE to test values quickly.', 'Store intermediate results in memory to avoid re-calculating.'],
        hint1: 'Think about what each concept specifically describes in Calculator Tips.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Calculator Tips describes a specific idea. Use a graphing calculator: TI-84 or similar. Key Insight: Use TABLE to test values quickly. ACT Tip: Store intermediate results in memory to avoid re-calculating.'
      }
    }
  ]
}
