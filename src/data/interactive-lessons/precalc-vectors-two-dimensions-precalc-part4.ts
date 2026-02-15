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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of dot product?',
            options: [
              'Dot product',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Dot product: u⃗ · v⃗ = a₁a₂ + b₁b₂'
          },
          {
            question: 'In the context of dot product, which is accurate?',
            options: [
              'u⃗ · v⃗ = 0',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Perpendicular vectors: u⃗ · v⃗ = 0'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dot product',
            options: ['u⃗ · v⃗ = a₁a₂ + b₁b₂', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Geometric form',
            options: ['u⃗ · v⃗ = |u⃗||v⃗|cos θ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Perpendicular vectors',
            options: ['u⃗ · v⃗ = 0', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['u⃗ · v⃗ = a₁a₂ + b₁b₂', 'u⃗ · v⃗ = |u⃗||v⃗|cos θ', 'u⃗ · v⃗ = 0'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Dot Product.'
      }
    }
  ]
}
