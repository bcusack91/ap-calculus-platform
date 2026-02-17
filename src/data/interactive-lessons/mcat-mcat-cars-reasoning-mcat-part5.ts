export const mcatCarsReasonPart5Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Analogical Reasoning

**Part 5 of 7 — Analogical Reasoning**

Analogical reasoning: situation A is like situation B, so what is true of A should be true of B.

Strength depends on the relevance of the similarities between the two cases.
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in analogical reasoning?',
            options: [
              'Analogical reasoning: situation A is like situation B, so what is true of A should be true of B',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Analogical reasoning: situation A is like situation B, so what is true of A should be true of B'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Identify the key similarity the analogy relies on — then assess if it holds.

**MCAT Tip:** Weak analogies are a common MCAT trap: superficial similarity, deep differences.
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to analogical reasoning?',
            options: [
              'Identify the key similarity the analogy relies on — then assess if it holds',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Identify the key similarity the analogy relies on — then assess if it holds'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analogical reasoning',
            options: ['Weak analogies are a common MCAT trap: superficial similarity, deep differences.', 'Strength depends on the relevance of the similarities between the two cases.', 'Identify the key similarity the analogy relies on — then assess if it holds.', 'situation A is like situation B, so what is true of A should be true of B.']
          },
          {
            label: 'Key Insight',
            options: ['Identify the key similarity the analogy relies on — then assess if it holds.', 'Strength depends on the relevance of the similarities between the two cases.', 'situation A is like situation B, so what is true of A should be true of B.', 'Weak analogies are a common MCAT trap: superficial similarity, deep differences.']
          },
          {
            label: 'MCAT Tip',
            options: ['Weak analogies are a common MCAT trap: superficial similarity, deep differences.', 'Strength depends on the relevance of the similarities between the two cases.', 'Identify the key similarity the analogy relies on — then assess if it holds.', 'situation A is like situation B, so what is true of A should be true of B.']
          }
        ],
        correctAnswers: ['situation A is like situation B, so what is true of A should be true of B.', 'Identify the key similarity the analogy relies on — then assess if it holds.', 'Weak analogies are a common MCAT trap: superficial similarity, deep differences.'],
        hint1: 'Think about what each concept specifically describes in Analogical Reasoning.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Analogical Reasoning describes a specific idea. Analogical reasoning: situation A is like situation B, so what is true of A should be true of B. Key Insight: Identify the key similarity the analogy relies on — then assess if it holds. MCAT Tip: Weak analogies are a common MCAT trap: superficial similarity, deep differences.'
      }
    }
  ]
}
