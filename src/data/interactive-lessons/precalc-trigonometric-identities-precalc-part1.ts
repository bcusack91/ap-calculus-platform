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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Reciprocal" refer to in precalculus?',
            options: [
              'sin(π/2 - θ) = cos θ, tan(π/2 - θ) = cot θ',
              'tan θ = sin θ/cos θ, cot θ = cos θ/sin θ',
              'csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ',
              'cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Reciprocal: csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Trigonometric Identities, which explains Even/odd?',
            options: [
              'csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ',
              'cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)',
              'tan θ = sin θ/cos θ, cot θ = cos θ/sin θ',
              'sin(π/2 - θ) = cos θ, tan(π/2 - θ) = cot θ'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Even/odd: cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Reciprocal',
            options: ['tan θ = sin θ/cos θ, cot θ = cos θ/sin θ', 'sin(π/2 - θ) = cos θ, tan(π/2 - θ) = cot θ', 'cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)', 'csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ']
          },
          {
            label: 'Quotient',
            options: ['csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ', 'sin(π/2 - θ) = cos θ, tan(π/2 - θ) = cot θ', 'cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)', 'tan θ = sin θ/cos θ, cot θ = cos θ/sin θ']
          },
          {
            label: 'Even/odd',
            options: ['cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)', 'tan θ = sin θ/cos θ, cot θ = cos θ/sin θ', 'sin(π/2 - θ) = cos θ, tan(π/2 - θ) = cot θ', 'csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ']
          }
        ],
        correctAnswers: ['csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ', 'tan θ = sin θ/cos θ, cot θ = cos θ/sin θ', 'cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)'],
        hint1: 'Think about what each concept specifically describes in Trigonometric Identities.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Trigonometric Identities describes a specific idea. Reciprocal: csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ. Quotient: tan θ = sin θ/cos θ, cot θ = cos θ/sin θ. Even/odd: cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd).'
      }
    }
  ]
}
