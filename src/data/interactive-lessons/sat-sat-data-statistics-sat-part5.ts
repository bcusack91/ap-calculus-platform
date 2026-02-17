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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Probability = favorable outcomes /…?',
            options: [
              'Probability = favorable outcomes / total outcomes.',
              'P(A and B) = P(A) × P(B) if independent.',
              'Conditional probability: P(A|B) = P(A and B) / P(B).',
              'P(A or B) = P(A) + P(B) - P(A and B).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Probability = favorable outcomes / total outcomes. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Probability Basics, which explains Key Insight?',
            options: [
              'Conditional probability: P(A|B) = P(A and B) / P(B).',
              'Probability = favorable outcomes / total outcomes.',
              'P(A and B) = P(A) × P(B) if independent.',
              'P(A or B) = P(A) + P(B) - P(A and B).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: P(A and B) = P(A) × P(B) if independent. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
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
      id: 'sat-d5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Conditional probability: P(A|B) = P(A and B) / P(B).', 'Probability = favorable outcomes / total outcomes.', 'P(A and B) = P(A) × P(B) if independent.', 'P(A or B) = P(A) + P(B) - P(A and B).']
          },
          {
            label: 'SAT Tip',
            options: ['Probability = favorable outcomes / total outcomes.', 'P(A and B) = P(A) × P(B) if independent.', 'P(A or B) = P(A) + P(B) - P(A and B).', 'Conditional probability: P(A|B) = P(A and B) / P(B).']
          }
        ],
        correctAnswers: ['P(A and B) = P(A) × P(B) if independent.', 'Conditional probability: P(A|B) = P(A and B) / P(B).'],
        hint1: 'Think about what each concept specifically describes in Probability Basics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Probability Basics describes a specific idea. Key Insight: P(A and B) = P(A) × P(B) if independent. SAT Tip: Conditional probability: P(A|B) = P(A and B) / P(B).'
      }
    }
  ]
}
