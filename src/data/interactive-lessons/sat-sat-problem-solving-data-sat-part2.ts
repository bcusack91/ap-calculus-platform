export const satProbSolvDataPart2Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'sat-p2-intro',
      type: 'text' as const,
      content: `
# Two-Way Tables

**Part 2 of 7 — Two-Way Tables**

Two-way tables organize data by two categorical variables.

Joint frequency: a specific cell value.
      `
    },
    {
      id: 'sat-p2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Two-way tables organize data by two…?',
            options: [
              'Two-way tables organize data by two categorical variables.',
              'a specific cell value.',
              'Conditional probability: focus on one row or column only.',
              'Marginal frequency: row or column totals.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Two-way tables organize data by two categorical variables. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'a specific cell value.',
              'Conditional probability: focus on one row or column only.',
              'Two-way tables organize data by two categorical variables.',
              'Marginal frequency: row or column totals.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Marginal frequency: row or column totals. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Marginal frequency: row or column totals.

**SAT Tip:** Conditional probability: focus on one row or column only.
      `
    },
    {
      id: 'sat-p2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Marginal frequency: row or column totals.',
              'Conditional probability: focus on one row or column only.',
              'Two-way tables organize data by two categorical variables.',
              'a specific cell value.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Conditional probability: focus on one row or column only. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Joint frequency',
            options: ['a specific cell value.', 'Marginal frequency: row or column totals.', 'Two-way tables organize data by two categorical variables.', 'Conditional probability: focus on one row or column only.']
          },
          {
            label: 'Key Insight',
            options: ['a specific cell value.', 'Two-way tables organize data by two categorical variables.', 'Marginal frequency: row or column totals.', 'Conditional probability: focus on one row or column only.']
          },
          {
            label: 'SAT Tip',
            options: ['a specific cell value.', 'Marginal frequency: row or column totals.', 'Conditional probability: focus on one row or column only.', 'Two-way tables organize data by two categorical variables.']
          }
        ],
        correctAnswers: ['a specific cell value.', 'Marginal frequency: row or column totals.', 'Conditional probability: focus on one row or column only.'],
        hint1: 'Think about what each concept specifically describes in Two-Way Tables.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Two-Way Tables describes a specific idea. Joint frequency: a specific cell value. Key Insight: Marginal frequency: row or column totals. SAT Tip: Conditional probability: focus on one row or column only.'
      }
    }
  ]
}
