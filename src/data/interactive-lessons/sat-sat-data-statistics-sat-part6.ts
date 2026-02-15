export const satDataStatsPart6Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-d6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Probability = favorable outcomes / total outcomes.

P(A or B) = P(A) + P(B) - P(A and B).
      `
    },
    {
      id: 'sat-d6-quiz1',
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
      id: 'sat-d6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** P(A and B) = P(A) × P(B) if independent.

**SAT Tip:** Conditional probability: P(A|B) = P(A and B) / P(B).
      `
    },
    {
      id: 'sat-d6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
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
      id: 'sat-d6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Probability = favorable outcomes / total outcomes', 'P(A or B) = P(A) + P(B) - P(A and B)', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['P(A and B) = P(A) × P(B) if independent', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Probability = favorable outcomes / total outcomes', 'P(A and B) = P(A) × P(B) if independent'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Probability = favorable outcomes / total outcomes. P(A and B) = P(A) × P(B) if independent.'
      }
    }
  ]
}
