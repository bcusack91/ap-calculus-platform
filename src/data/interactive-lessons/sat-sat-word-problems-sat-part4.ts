export const satWordProblemsPart4Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w4-intro',
      type: 'text' as const,
      content: `
# Percent Problems

**Part 4 of 7 — Percent Problems**

Part = percent × whole → amount = (p/100) × total.

Percent increase: new = original × (1 + r/100).
      `
    },
    {
      id: 'sat-w4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Part = percent × whole → amount =…?',
            options: [
              'Finding percent change: ((new - original)/original) × 100.',
              'new = original × (1 + r/100).',
              'Percent decrease: new = original × (1 - r/100).',
              'Part = percent × whole → amount = (p/100) × total.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Part = percent × whole → amount = (p/100) × total. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Finding percent change: ((new - original)/original) × 100.',
              'Percent decrease: new = original × (1 - r/100).',
              'Part = percent × whole → amount = (p/100) × total.',
              'new = original × (1 + r/100).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Percent decrease: new = original × (1 - r/100). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-w4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Percent decrease: new = original × (1 - r/100).

**SAT Tip:** Finding percent change: ((new - original)/original) × 100.
      `
    },
    {
      id: 'sat-w4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Percent Problems, which correctly describes SAT Tip?',
            options: [
              'new = original × (1 + r/100).',
              'Finding percent change: ((new - original)/original) × 100.',
              'Part = percent × whole → amount = (p/100) × total.',
              'Percent decrease: new = original × (1 - r/100).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Finding percent change: ((new - original)/original) × 100. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-w4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Percent increase',
            options: ['Part = percent × whole → amount = (p/100) × total.', 'new = original × (1 + r/100).', 'Finding percent change: ((new - original)/original) × 100.', 'Percent decrease: new = original × (1 - r/100).']
          },
          {
            label: 'Key Insight',
            options: ['Finding percent change: ((new - original)/original) × 100.', 'Part = percent × whole → amount = (p/100) × total.', 'Percent decrease: new = original × (1 - r/100).', 'new = original × (1 + r/100).']
          },
          {
            label: 'SAT Tip',
            options: ['Finding percent change: ((new - original)/original) × 100.', 'Part = percent × whole → amount = (p/100) × total.', 'new = original × (1 + r/100).', 'Percent decrease: new = original × (1 - r/100).']
          }
        ],
        correctAnswers: ['new = original × (1 + r/100).', 'Percent decrease: new = original × (1 - r/100).', 'Finding percent change: ((new - original)/original) × 100.'],
        hint1: 'Think about what each concept specifically describes in Percent Problems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Percent Problems describes a specific idea. Percent increase: new = original × (1 + r/100). Key Insight: Percent decrease: new = original × (1 - r/100). SAT Tip: Finding percent change: ((new - original)/original) × 100.'
      }
    }
  ]
}
