export const precalcTrigIdentitiesPart1Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'trigo1-intro',
      type: 'text' as const,
      content: `
# 📈 Trigonometric Identities

**Part 1 of 7 — Fundamental Identities**

### 1. Reciprocal

csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ

### 2. Quotient

tan θ = sin θ/cos θ, cot θ = cos θ/sin θ

### 3. Even/odd

cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)

### 4. Cofunction

sin(π/2 - θ) = cos θ, tan(π/2 - θ) = cot θ
      `
    },
    {
      id: 'trigo1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of fundamental identities?',
            options: [
              'Reciprocal',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Reciprocal: csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ'
          },
          {
            question: 'In the context of fundamental identities, which is accurate?',
            options: [
              'cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Even/odd: cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)'
          }
        ]
      }
    },
    {
      id: 'trigo1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Reciprocal**: csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ
- **Quotient**: tan θ = sin θ/cos θ, cot θ = cos θ/sin θ
- **Even/odd**: cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)
- **Cofunction**: sin(π/2 - θ) = cos θ, tan(π/2 - θ) = cot θ
      `
    },
    {
      id: 'trigo1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to fundamental identities?',
            options: [
              'sin(π/2 - θ) = cos θ, tan(π/2 - θ) = cot θ',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Cofunction: sin(π/2 - θ) = cos θ, tan(π/2 - θ) = cot θ'
          }
        ]
      }
    },
    {
      id: 'trigo1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Reciprocal',
            options: ['csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Quotient',
            options: ['tan θ = sin θ/cos θ, cot θ = cos θ/sin θ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Even/odd',
            options: ['cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ', 'tan θ = sin θ/cos θ, cot θ = cos θ/sin θ', 'cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Fundamental Identities.'
      }
    }
  ]
}
