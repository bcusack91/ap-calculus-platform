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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes remainder theorem?',
            options: [
              'Remainder Theorem is a fundamental concept in SAT Math',
              'Factor Theorem: (x - c) is a factor of P(x) if and only if P(c) = 0',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Remainder Theorem: when P(x) is divided by (x - c), the remainder is P(c)'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for remainder & factor theorems?',
            options: [
              'Use to test potential rational roots',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Use to test potential rational roots'
          }
        ]
      }
    },
    {
      id: 'sat-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Remainder & Factor Theorems:',
            options: ['Remainder Theorem: when P(x) is divided by (x - c)', 'Factor Theorem: (x - c) is a factor of P(x) if and', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Use to test potential rational roots', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Remainder Theorem: when P(x) is divided by (x - c)', 'Use to test potential rational roots'],
        hint1: 'Think about remainder & factor theorems',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Remainder Theorem: when P(x) is divided by (x - c), the remainder is P(c). Use to test potential rational roots.'
      }
    }
  ]
}
