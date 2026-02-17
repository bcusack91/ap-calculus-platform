export const satLinearEquationsPart3Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l3-intro',
      type: 'text' as const,
      content: `
# Linear Inequalities

**Part 3 of 7 — Linear Inequalities**

Inequalities use <, >, ≤, ≥ instead of =.

Solve like equations, but flip the inequality when multiplying/dividing by a negative.
      `
    },
    {
      id: 'sat-l3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Inequalities use <, >, ≤, ≥ instead of…?',
            options: [
              'Compound inequalities: -3 < 2x + 1 ≤ 7 — solve both parts.',
              'Graph solutions on a number line.',
              'Inequalities use <, >, ≤, ≥ instead of =.',
              'Solve like equations, but flip the inequality when multiplying/dividing by a negative.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Inequalities use <, >, ≤, ≥ instead of =. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Linear Inequalities, which explains Key Insight?',
            options: [
              'Compound inequalities: -3 < 2x + 1 ≤ 7 — solve both parts.',
              'Inequalities use <, >, ≤, ≥ instead of =.',
              'Graph solutions on a number line.',
              'Solve like equations, but flip the inequality when multiplying/dividing by a negative.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Graph solutions on a number line. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-l3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Graph solutions on a number line.

**SAT Tip:** Compound inequalities: -3 < 2x + 1 ≤ 7 — solve both parts.
      `
    },
    {
      id: 'sat-l3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Graph solutions on a number line.',
              'Solve like equations, but flip the inequality when multiplying/dividing by a negative.',
              'Inequalities use <, >, ≤, ≥ instead of =.',
              'Compound inequalities: -3 < 2x + 1 ≤ 7 — solve both parts.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Compound inequalities: -3 < 2x + 1 ≤ 7 — solve both parts. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-l3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Solve like equations, but flip the inequality when multiplying/dividing by a negative.', 'Graph solutions on a number line.', 'Compound inequalities: -3 < 2x + 1 ≤ 7 — solve both parts.', 'Inequalities use <, >, ≤, ≥ instead of =.']
          },
          {
            label: 'SAT Tip',
            options: ['Solve like equations, but flip the inequality when multiplying/dividing by a negative.', 'Graph solutions on a number line.', 'Compound inequalities: -3 < 2x + 1 ≤ 7 — solve both parts.', 'Inequalities use <, >, ≤, ≥ instead of =.']
          }
        ],
        correctAnswers: ['Graph solutions on a number line.', 'Compound inequalities: -3 < 2x + 1 ≤ 7 — solve both parts.'],
        hint1: 'Think about what each concept specifically describes in Linear Inequalities.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Linear Inequalities describes a specific idea. Key Insight: Graph solutions on a number line. SAT Tip: Compound inequalities: -3 < 2x + 1 ≤ 7 — solve both parts.'
      }
    }
  ]
}
