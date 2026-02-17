export const actStatProbPart4Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-s4-intro',
      type: 'text' as const,
      content: `
# Basic Probability

**Part 4 of 7 — Basic Probability**

P(event) = favorable outcomes / total outcomes.

P(A or B) = P(A) + P(B) - P(A and B).
      `
    },
    {
      id: 'act-s4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "P(event) = favorable outcomes / total…" refer to in ACT prep?',
            options: [
              'P(A and B) = P(A) × P(B|A).',
              'P(event) = favorable outcomes / total outcomes.',
              'P(A or B) = P(A) + P(B) - P(A and B).',
              'Complement: P(not A) = 1 - P(A).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — P(event) = favorable outcomes / total outcomes. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Complement: P(not A) = 1 - P(A).',
              'P(event) = favorable outcomes / total outcomes.',
              'P(A or B) = P(A) + P(B) - P(A and B).',
              'P(A and B) = P(A) × P(B|A).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: P(A and B) = P(A) × P(B|A). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** P(A and B) = P(A) × P(B|A).

**ACT Tip:** Complement: P(not A) = 1 - P(A).
      `
    },
    {
      id: 'act-s4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'P(A and B) = P(A) × P(B|A).',
              'P(A or B) = P(A) + P(B) - P(A and B).',
              'P(event) = favorable outcomes / total outcomes.',
              'Complement: P(not A) = 1 - P(A).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Complement: P(not A) = 1 - P(A). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Complement: P(not A) = 1 - P(A).', 'P(A or B) = P(A) + P(B) - P(A and B).', 'P(A and B) = P(A) × P(B|A).', 'P(event) = favorable outcomes / total outcomes.']
          },
          {
            label: 'ACT Tip',
            options: ['P(A and B) = P(A) × P(B|A).', 'P(event) = favorable outcomes / total outcomes.', 'Complement: P(not A) = 1 - P(A).', 'P(A or B) = P(A) + P(B) - P(A and B).']
          }
        ],
        correctAnswers: ['P(A and B) = P(A) × P(B|A).', 'Complement: P(not A) = 1 - P(A).'],
        hint1: 'Think about what each concept specifically describes in Basic Probability.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Basic Probability describes a specific idea. Key Insight: P(A and B) = P(A) × P(B|A). ACT Tip: Complement: P(not A) = 1 - P(A).'
      }
    }
  ]
}
