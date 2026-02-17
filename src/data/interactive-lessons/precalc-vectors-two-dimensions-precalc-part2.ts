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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Addition?',
            options: [
              '⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method)',
              '⟨0,0⟩ is the additive identity',
              'u⃗ - v⃗ = u⃗ + (-v⃗)',
              'k⟨a,b⟩ = ⟨ka, kb⟩'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Addition: ⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Subtraction:',
            options: [
              'u⃗ - v⃗ = u⃗ + (-v⃗)',
              'k⟨a,b⟩ = ⟨ka, kb⟩',
              '⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method)',
              '⟨0,0⟩ is the additive identity'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Subtraction: u⃗ - v⃗ = u⃗ + (-v⃗). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Addition',
            options: ['⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method)', 'k⟨a,b⟩ = ⟨ka, kb⟩', '⟨0,0⟩ is the additive identity', 'u⃗ - v⃗ = u⃗ + (-v⃗)']
          },
          {
            label: 'Scalar multiplication',
            options: ['⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method)', 'u⃗ - v⃗ = u⃗ + (-v⃗)', 'k⟨a,b⟩ = ⟨ka, kb⟩', '⟨0,0⟩ is the additive identity']
          },
          {
            label: 'Subtraction',
            options: ['⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method)', '⟨0,0⟩ is the additive identity', 'u⃗ - v⃗ = u⃗ + (-v⃗)', 'k⟨a,b⟩ = ⟨ka, kb⟩']
          }
        ],
        correctAnswers: ['⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method)', 'k⟨a,b⟩ = ⟨ka, kb⟩', 'u⃗ - v⃗ = u⃗ + (-v⃗)'],
        hint1: 'Think about what each concept specifically describes in Vector Operations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Vector Operations describes a specific idea. Addition: ⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method). Scalar multiplication: k⟨a,b⟩ = ⟨ka, kb⟩. Subtraction: u⃗ - v⃗ = u⃗ + (-v⃗).'
      }
    }
  ]
}
