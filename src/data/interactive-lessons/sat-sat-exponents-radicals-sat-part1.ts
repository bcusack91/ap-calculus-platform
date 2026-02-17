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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Product rule?',
            options: [
              'aᵐ · aⁿ = aᵐ⁺ⁿ.',
              'aᵐ / aⁿ = aᵐ⁻ⁿ.',
              'Power rule: (aᵐ)ⁿ = aᵐⁿ.',
              'Power of a product: (ab)ⁿ = aⁿbⁿ.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Product rule: aᵐ · aⁿ = aᵐ⁺ⁿ. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'aᵐ / aⁿ = aᵐ⁻ⁿ.',
              'aᵐ · aⁿ = aᵐ⁺ⁿ.',
              'Power rule: (aᵐ)ⁿ = aᵐⁿ.',
              'Power of a product: (ab)ⁿ = aⁿbⁿ.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Power rule: (aᵐ)ⁿ = aᵐⁿ. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'aᵐ / aⁿ = aᵐ⁻ⁿ.',
              'aᵐ · aⁿ = aᵐ⁺ⁿ.',
              'Power of a product: (ab)ⁿ = aⁿbⁿ.',
              'Power rule: (aᵐ)ⁿ = aᵐⁿ.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Power of a product: (ab)ⁿ = aⁿbⁿ. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Product rule',
            options: ['aᵐ / aⁿ = aᵐ⁻ⁿ.', 'Power rule: (aᵐ)ⁿ = aᵐⁿ.', 'Power of a product: (ab)ⁿ = aⁿbⁿ.', 'aᵐ · aⁿ = aᵐ⁺ⁿ.']
          },
          {
            label: 'Quotient rule',
            options: ['aᵐ · aⁿ = aᵐ⁺ⁿ.', 'aᵐ / aⁿ = aᵐ⁻ⁿ.', 'Power rule: (aᵐ)ⁿ = aᵐⁿ.', 'Power of a product: (ab)ⁿ = aⁿbⁿ.']
          },
          {
            label: 'Key Insight',
            options: ['aᵐ · aⁿ = aᵐ⁺ⁿ.', 'aᵐ / aⁿ = aᵐ⁻ⁿ.', 'Power of a product: (ab)ⁿ = aⁿbⁿ.', 'Power rule: (aᵐ)ⁿ = aᵐⁿ.']
          }
        ],
        correctAnswers: ['aᵐ · aⁿ = aᵐ⁺ⁿ.', 'aᵐ / aⁿ = aᵐ⁻ⁿ.', 'Power rule: (aᵐ)ⁿ = aᵐⁿ.'],
        hint1: 'Think about what each concept specifically describes in Exponents Radicals.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Exponents Radicals describes a specific idea. Product rule: aᵐ · aⁿ = aᵐ⁺ⁿ. Quotient rule: aᵐ / aⁿ = aᵐ⁻ⁿ. Key Insight: Power rule: (aᵐ)ⁿ = aᵐⁿ.'
      }
    }
  ]
}
