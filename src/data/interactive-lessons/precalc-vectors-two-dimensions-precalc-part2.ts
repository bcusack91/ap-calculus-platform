export const precalcVectors2DPart2Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'vecto2-intro',
      type: 'text' as const,
      content: `
# Vector Operations

**Part 2 of 7 — Vector Operations**

### 1. Addition

⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method)

### 2. Scalar multiplication

k⟨a,b⟩ = ⟨ka, kb⟩

### 3. Subtraction

u⃗ - v⃗ = u⃗ + (-v⃗)

### 4. Zero vector

⟨0,0⟩ is the additive identity
      `
    },
    {
      id: 'vecto2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of vector operations?',
            options: [
              'Addition',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Addition: ⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method)'
          },
          {
            question: 'In the context of vector operations, which is accurate?',
            options: [
              'u⃗ - v⃗ = u⃗ + (-v⃗)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Subtraction: u⃗ - v⃗ = u⃗ + (-v⃗)'
          }
        ]
      }
    },
    {
      id: 'vecto2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Addition**: ⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method)
- **Scalar multiplication**: k⟨a,b⟩ = ⟨ka, kb⟩
- **Subtraction**: u⃗ - v⃗ = u⃗ + (-v⃗)
- **Zero vector**: ⟨0,0⟩ is the additive identity
      `
    },
    {
      id: 'vecto2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to vector operations?',
            options: [
              '⟨0,0⟩ is the additive identity',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Zero vector: ⟨0,0⟩ is the additive identity'
          }
        ]
      }
    },
    {
      id: 'vecto2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Addition',
            options: ['⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail m', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Scalar multiplication',
            options: ['k⟨a,b⟩ = ⟨ka, kb⟩', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Subtraction',
            options: ['u⃗ - v⃗ = u⃗ + (-v⃗)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail m', 'k⟨a,b⟩ = ⟨ka, kb⟩', 'u⃗ - v⃗ = u⃗ + (-v⃗)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Vector Operations.'
      }
    }
  ]
}
