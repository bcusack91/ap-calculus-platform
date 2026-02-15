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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes p(event) = favorable outcomes / total outcomes?',
            options: [
              'P(event) = favorable outcomes / total outcomes is a key concept for ACT Math',
              'P(A or B) = P(A) + P(B) - P(A and B)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'P(event) = favorable outcomes / total outcomes'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for basic probability?',
            options: [
              'P(A and B) = P(A) × P(B|A)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'P(A and B) = P(A) × P(B|A)'
          }
        ]
      }
    },
    {
      id: 'act-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Basic Probability:',
            options: ['P(event) = favorable outcomes / total outcomes', 'P(A or B) = P(A) + P(B) - P(A and B)', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['P(A and B) = P(A) × P(B|A)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['P(event) = favorable outcomes / total outcomes', 'P(A and B) = P(A) × P(B|A)'],
        hint1: 'Think about basic probability',
        hint2: 'Consider the best ACT strategy',
        explanation: 'P(event) = favorable outcomes / total outcomes. P(A and B) = P(A) × P(B|A).'
      }
    }
  ]
}
