export const precalcVectors2DPart4Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'vecto4-intro',
      type: 'text' as const,
      content: `
# Dot Product

**Part 4 of 7 — Dot Product**

### 1. Dot product

u⃗ · v⃗ = a₁a₂ + b₁b₂

### 2. Geometric form

u⃗ · v⃗ = |u⃗||v⃗|cos θ

### 3. Perpendicular vectors

u⃗ · v⃗ = 0

### 4. Angle between vectors

θ = arccos(u⃗ · v⃗ / (|u⃗||v⃗|))
      `
    },
    {
      id: 'vecto4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Dot product?',
            options: [
              'u⃗ · v⃗ = 0',
              'u⃗ · v⃗ = |u⃗||v⃗|cos θ',
              'u⃗ · v⃗ = a₁a₂ + b₁b₂',
              'θ = arccos(u⃗ · v⃗ / (|u⃗||v⃗|))'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Dot product: u⃗ · v⃗ = a₁a₂ + b₁b₂. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Perpendicular vectors:',
            options: [
              'u⃗ · v⃗ = 0',
              'u⃗ · v⃗ = |u⃗||v⃗|cos θ',
              'u⃗ · v⃗ = a₁a₂ + b₁b₂',
              'θ = arccos(u⃗ · v⃗ / (|u⃗||v⃗|))'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Perpendicular vectors: u⃗ · v⃗ = 0. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'vecto4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Dot product**: u⃗ · v⃗ = a₁a₂ + b₁b₂
- **Geometric form**: u⃗ · v⃗ = |u⃗||v⃗|cos θ
- **Perpendicular vectors**: u⃗ · v⃗ = 0
- **Angle between vectors**: θ = arccos(u⃗ · v⃗ / (|u⃗||v⃗|))
      `
    },
    {
      id: 'vecto4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to dot product?',
            options: [
              'θ = arccos(u⃗ · v⃗ / (|u⃗||v⃗|))',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Angle between vectors: θ = arccos(u⃗ · v⃗ / (|u⃗||v⃗|))'
          }
        ]
      }
    },
    {
      id: 'vecto4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dot product',
            options: ['u⃗ · v⃗ = 0', 'u⃗ · v⃗ = a₁a₂ + b₁b₂', 'θ = arccos(u⃗ · v⃗ / (|u⃗||v⃗|))', 'u⃗ · v⃗ = |u⃗||v⃗|cos θ']
          },
          {
            label: 'Geometric form',
            options: ['u⃗ · v⃗ = |u⃗||v⃗|cos θ', 'θ = arccos(u⃗ · v⃗ / (|u⃗||v⃗|))', 'u⃗ · v⃗ = a₁a₂ + b₁b₂', 'u⃗ · v⃗ = 0']
          },
          {
            label: 'Perpendicular vectors',
            options: ['θ = arccos(u⃗ · v⃗ / (|u⃗||v⃗|))', 'u⃗ · v⃗ = 0', 'u⃗ · v⃗ = a₁a₂ + b₁b₂', 'u⃗ · v⃗ = |u⃗||v⃗|cos θ']
          }
        ],
        correctAnswers: ['u⃗ · v⃗ = a₁a₂ + b₁b₂', 'u⃗ · v⃗ = |u⃗||v⃗|cos θ', 'u⃗ · v⃗ = 0'],
        hint1: 'Think about what each concept specifically describes in Dot Product.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Dot Product describes a specific idea. Dot product: u⃗ · v⃗ = a₁a₂ + b₁b₂. Geometric form: u⃗ · v⃗ = |u⃗||v⃗|cos θ. Perpendicular vectors: u⃗ · v⃗ = 0.'
      }
    }
  ]
}
