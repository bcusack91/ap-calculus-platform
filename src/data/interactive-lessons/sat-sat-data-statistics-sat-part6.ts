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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Probability = favorable outcomes /…?',
            options: [
              'P(A and B) = P(A) × P(B) if independent.',
              'Probability = favorable outcomes / total outcomes.',
              'P(A or B) = P(A) + P(B) - P(A and B).',
              'Conditional probability: P(A|B) = P(A and B) / P(B).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Probability = favorable outcomes / total outcomes. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Key Insight?',
            options: [
              'P(A or B) = P(A) + P(B) - P(A and B).',
              'P(A and B) = P(A) × P(B) if independent.',
              'Probability = favorable outcomes / total outcomes.',
              'Conditional probability: P(A|B) = P(A and B) / P(B).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: P(A and B) = P(A) × P(B) if independent. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Probability = favorable outcomes / total outcomes.',
              'Conditional probability: P(A|B) = P(A and B) / P(B).',
              'P(A and B) = P(A) × P(B) if independent.',
              'P(A or B) = P(A) + P(B) - P(A and B).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Conditional probability: P(A|B) = P(A and B) / P(B). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-d6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['P(A and B) = P(A) × P(B) if independent.', 'Conditional probability: P(A|B) = P(A and B) / P(B).', 'P(A or B) = P(A) + P(B) - P(A and B).', 'Probability = favorable outcomes / total outcomes.']
          },
          {
            label: 'SAT Tip',
            options: ['Conditional probability: P(A|B) = P(A and B) / P(B).', 'Probability = favorable outcomes / total outcomes.', 'P(A or B) = P(A) + P(B) - P(A and B).', 'P(A and B) = P(A) × P(B) if independent.']
          }
        ],
        correctAnswers: ['P(A and B) = P(A) × P(B) if independent.', 'Conditional probability: P(A|B) = P(A and B) / P(B).'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Key Insight: P(A and B) = P(A) × P(B) if independent. SAT Tip: Conditional probability: P(A|B) = P(A and B) / P(B).'
      }
    }
  ]
}
