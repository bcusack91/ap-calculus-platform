export const satPolynomialsPart4Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'sat-p4-intro',
      type: 'text' as const,
      content: `
# Remainder & Factor Theorems

**Part 4 of 7 — Remainder & Factor Theorems**

Remainder Theorem: when P(x) is divided by (x - c), the remainder is P(c).

Factor Theorem: (x - c) is a factor of P(x) if and only if P(c) = 0.
      `
    },
    {
      id: 'sat-p4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Remainder Theorem?',
            options: [
              'Use to test potential rational roots.',
              '(x - c) is a factor of P(x) if and only if P(c) = 0.',
              'If P(c) = 0, then c is a root and (x - c) is a factor.',
              'when P(x) is divided by (x - c), the remainder is P(c).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Remainder Theorem: when P(x) is divided by (x - c), the remainder is P(c). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Remainder & Factor Theorems, which explains Key Insight?',
            options: [
              'when P(x) is divided by (x - c), the remainder is P(c).',
              'Use to test potential rational roots.',
              '(x - c) is a factor of P(x) if and only if P(c) = 0.',
              'If P(c) = 0, then c is a root and (x - c) is a factor.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Use to test potential rational roots. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Use to test potential rational roots.

**SAT Tip:** If P(c) = 0, then c is a root and (x - c) is a factor.
      `
    },
    {
      id: 'sat-p4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'when P(x) is divided by (x - c), the remainder is P(c).',
              'If P(c) = 0, then c is a root and (x - c) is a factor.',
              '(x - c) is a factor of P(x) if and only if P(c) = 0.',
              'Use to test potential rational roots.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: If P(c) = 0, then c is a root and (x - c) is a factor. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Remainder Theorem',
            options: ['If P(c) = 0, then c is a root and (x - c) is a factor.', '(x - c) is a factor of P(x) if and only if P(c) = 0.', 'when P(x) is divided by (x - c), the remainder is P(c).', 'Use to test potential rational roots.']
          },
          {
            label: 'Factor Theorem',
            options: ['(x - c) is a factor of P(x) if and only if P(c) = 0.', 'when P(x) is divided by (x - c), the remainder is P(c).', 'Use to test potential rational roots.', 'If P(c) = 0, then c is a root and (x - c) is a factor.']
          },
          {
            label: 'Key Insight',
            options: ['Use to test potential rational roots.', 'when P(x) is divided by (x - c), the remainder is P(c).', '(x - c) is a factor of P(x) if and only if P(c) = 0.', 'If P(c) = 0, then c is a root and (x - c) is a factor.']
          }
        ],
        correctAnswers: ['when P(x) is divided by (x - c), the remainder is P(c).', '(x - c) is a factor of P(x) if and only if P(c) = 0.', 'Use to test potential rational roots.'],
        hint1: 'Think about what each concept specifically describes in Remainder & Factor Theorems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Remainder & Factor Theorems describes a specific idea. Remainder Theorem: when P(x) is divided by (x - c), the remainder is P(c). Factor Theorem: (x - c) is a factor of P(x) if and only if P(c) = 0. Key Insight: Use to test potential rational roots.'
      }
    }
  ]
}
