export const actScienceExpPart2Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s2-intro',
      type: 'text' as const,
      content: `
# Variables & Controls

**Part 2 of 7 — Variables & Controls**

Identify the IV, DV, and constants in each experiment.

A good experiment changes only one variable at a time.
      `
    },
    {
      id: 'act-s2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Identify the IV, DV, and constants in…?',
            options: [
              'Identify the IV, DV, and constants in each experiment.',
              'Replication: repeating the experiment to verify results.',
              'Sample size matters: larger samples give more reliable results.',
              'A good experiment changes only one variable at a time.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Identify the IV, DV, and constants in each experiment. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Variables & Controls, which explains Key Insight?',
            options: [
              'Sample size matters: larger samples give more reliable results.',
              'Identify the IV, DV, and constants in each experiment.',
              'A good experiment changes only one variable at a time.',
              'Replication: repeating the experiment to verify results.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Sample size matters: larger samples give more reliable results. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Sample size matters: larger samples give more reliable results.

**ACT Tip:** Replication: repeating the experiment to verify results.
      `
    },
    {
      id: 'act-s2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Variables & Controls, which correctly describes ACT Tip?',
            options: [
              'Sample size matters: larger samples give more reliable results.',
              'Identify the IV, DV, and constants in each experiment.',
              'A good experiment changes only one variable at a time.',
              'Replication: repeating the experiment to verify results.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Replication: repeating the experiment to verify results. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['A good experiment changes only one variable at a time.', 'Replication: repeating the experiment to verify results.', 'Identify the IV, DV, and constants in each experiment.', 'Sample size matters: larger samples give more reliable results.']
          },
          {
            label: 'ACT Tip',
            options: ['Sample size matters: larger samples give more reliable results.', 'A good experiment changes only one variable at a time.', 'Identify the IV, DV, and constants in each experiment.', 'Replication: repeating the experiment to verify results.']
          }
        ],
        correctAnswers: ['Sample size matters: larger samples give more reliable results.', 'Replication: repeating the experiment to verify results.'],
        hint1: 'Think about what each concept specifically describes in Variables & Controls.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Variables & Controls describes a specific idea. Key Insight: Sample size matters: larger samples give more reliable results. ACT Tip: Replication: repeating the experiment to verify results.'
      }
    }
  ]
}
