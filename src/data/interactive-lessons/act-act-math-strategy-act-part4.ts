export const actMathStrategyPart4Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m4-intro',
      type: 'text' as const,
      content: `
# Plugging In Numbers

**Part 4 of 7 — Plugging In Numbers**

Replace variables with easy numbers (2, 3, 5, 10).

Solve with those numbers, then check which answer choice gives the same result.
      `
    },
    {
      id: 'act-m4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Replace variables with easy numbers (2,…?',
            options: [
              'Avoid 0 and 1 — they can make multiple answers appear correct.',
              'Use for percent problems, fraction problems, and abstract algebra.',
              'Replace variables with easy numbers (2, 3, 5, 10).',
              'Solve with those numbers, then check which answer choice gives the same result.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Replace variables with easy numbers (2, 3, 5, 10). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Replace variables with easy numbers (2, 3, 5, 10).',
              'Solve with those numbers, then check which answer choice gives the same result.',
              'Use for percent problems, fraction problems, and abstract algebra.',
              'Avoid 0 and 1 — they can make multiple answers appear correct.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Use for percent problems, fraction problems, and abstract algebra. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-m4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Use for percent problems, fraction problems, and abstract algebra.

**ACT Tip:** Avoid 0 and 1 — they can make multiple answers appear correct.
      `
    },
    {
      id: 'act-m4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Solve with those numbers, then check which answer choice gives the same result.',
              'Avoid 0 and 1 — they can make multiple answers appear correct.',
              'Replace variables with easy numbers (2, 3, 5, 10).',
              'Use for percent problems, fraction problems, and abstract algebra.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Avoid 0 and 1 — they can make multiple answers appear correct. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-m4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Replace variables with easy numbers (2, 3, 5, 10).', 'Use for percent problems, fraction problems, and abstract algebra.', 'Avoid 0 and 1 — they can make multiple answers appear correct.', 'Solve with those numbers, then check which answer choice gives the same result.']
          },
          {
            label: 'ACT Tip',
            options: ['Avoid 0 and 1 — they can make multiple answers appear correct.', 'Replace variables with easy numbers (2, 3, 5, 10).', 'Solve with those numbers, then check which answer choice gives the same result.', 'Use for percent problems, fraction problems, and abstract algebra.']
          }
        ],
        correctAnswers: ['Use for percent problems, fraction problems, and abstract algebra.', 'Avoid 0 and 1 — they can make multiple answers appear correct.'],
        hint1: 'Think about what each concept specifically describes in Plugging In Numbers.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Plugging In Numbers describes a specific idea. Key Insight: Use for percent problems, fraction problems, and abstract algebra. ACT Tip: Avoid 0 and 1 — they can make multiple answers appear correct.'
      }
    }
  ]
}
