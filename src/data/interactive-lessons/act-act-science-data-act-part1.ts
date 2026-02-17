export const actScienceDataPart1Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s1-intro',
      type: 'text' as const,
      content: `
# 📋 Science Data

**Part 1 of 7 — Reading Data Tables**

Read column headers and row labels first.

Identify units of measurement.
      `
    },
    {
      id: 'act-s1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Read column headers and row labels…?',
            options: [
              'Watch for footnotes or special notations.',
              'Find specific values by cross-referencing rows and columns.',
              'Identify units of measurement.',
              'Read column headers and row labels first.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Read column headers and row labels first. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Find specific values by cross-referencing rows and columns.',
              'Read column headers and row labels first.',
              'Identify units of measurement.',
              'Watch for footnotes or special notations.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Find specific values by cross-referencing rows and columns. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Find specific values by cross-referencing rows and columns.

**ACT Tip:** Watch for footnotes or special notations.
      `
    },
    {
      id: 'act-s1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Science Data, which correctly describes ACT Tip?',
            options: [
              'Identify units of measurement.',
              'Read column headers and row labels first.',
              'Watch for footnotes or special notations.',
              'Find specific values by cross-referencing rows and columns.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Watch for footnotes or special notations. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Read column headers and row labels first.', 'Identify units of measurement.', 'Watch for footnotes or special notations.', 'Find specific values by cross-referencing rows and columns.']
          },
          {
            label: 'ACT Tip',
            options: ['Find specific values by cross-referencing rows and columns.', 'Watch for footnotes or special notations.', 'Identify units of measurement.', 'Read column headers and row labels first.']
          }
        ],
        correctAnswers: ['Find specific values by cross-referencing rows and columns.', 'Watch for footnotes or special notations.'],
        hint1: 'Think about what each concept specifically describes in Science Data.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Science Data describes a specific idea. Key Insight: Find specific values by cross-referencing rows and columns. ACT Tip: Watch for footnotes or special notations.'
      }
    }
  ]
}
