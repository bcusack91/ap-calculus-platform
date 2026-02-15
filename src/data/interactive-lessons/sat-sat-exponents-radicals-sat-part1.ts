export const satExponentsPart1Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-e1-intro',
      type: 'text' as const,
      content: `
# 📝 Exponents Radicals

**Part 1 of 7 — Exponent Rules**

Product rule: aᵐ · aⁿ = aᵐ⁺ⁿ.

Quotient rule: aᵐ / aⁿ = aᵐ⁻ⁿ.
      `
    },
    {
      id: 'sat-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes product rule?',
            options: [
              'Product rule is a fundamental concept in SAT Math',
              'Quotient rule: aᵐ / aⁿ = aᵐ⁻ⁿ',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Product rule: aᵐ · aⁿ = aᵐ⁺ⁿ'
          }
        ]
      }
    },
    {
      id: 'sat-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Power rule: (aᵐ)ⁿ = aᵐⁿ.

**SAT Tip:** Power of a product: (ab)ⁿ = aⁿbⁿ.
      `
    },
    {
      id: 'sat-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for exponent rules?',
            options: [
              'Power rule: (aᵐ)ⁿ = aᵐⁿ',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Power rule: (aᵐ)ⁿ = aᵐⁿ'
          }
        ]
      }
    },
    {
      id: 'sat-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Exponent Rules:',
            options: ['Product rule: aᵐ · aⁿ = aᵐ⁺ⁿ', 'Quotient rule: aᵐ / aⁿ = aᵐ⁻ⁿ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Power rule: (aᵐ)ⁿ = aᵐⁿ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Product rule: aᵐ · aⁿ = aᵐ⁺ⁿ', 'Power rule: (aᵐ)ⁿ = aᵐⁿ'],
        hint1: 'Think about exponent rules',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Product rule: aᵐ · aⁿ = aᵐ⁺ⁿ. Power rule: (aᵐ)ⁿ = aᵐⁿ.'
      }
    }
  ]
}
