export const satDataStatsPart5Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-d5-intro',
      type: 'text' as const,
      content: `
# Probability Basics

**Part 5 of 7 — Probability Basics**

Probability = favorable outcomes / total outcomes.

P(A or B) = P(A) + P(B) - P(A and B).
      `
    },
    {
      id: 'sat-d5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes probability = favorable outcomes / total outcomes?',
            options: [
              'Probability = favorable outcomes / total outcomes is a fundamental concept in SAT Math',
              'P(A or B) = P(A) + P(B) - P(A and B)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Probability = favorable outcomes / total outcomes'
          }
        ]
      }
    },
    {
      id: 'sat-d5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** P(A and B) = P(A) × P(B) if independent.

**SAT Tip:** Conditional probability: P(A|B) = P(A and B) / P(B).
      `
    },
    {
      id: 'sat-d5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for probability basics?',
            options: [
              'P(A and B) = P(A) × P(B) if independent',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'P(A and B) = P(A) × P(B) if independent'
          }
        ]
      }
    },
    {
      id: 'sat-d5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Probability Basics:',
            options: ['Probability = favorable outcomes / total outcomes', 'P(A or B) = P(A) + P(B) - P(A and B)', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['P(A and B) = P(A) × P(B) if independent', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Probability = favorable outcomes / total outcomes', 'P(A and B) = P(A) × P(B) if independent'],
        hint1: 'Think about probability basics',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Probability = favorable outcomes / total outcomes. P(A and B) = P(A) × P(B) if independent.'
      }
    }
  ]
}
