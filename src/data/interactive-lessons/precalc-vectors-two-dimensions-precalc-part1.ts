export const precalcVectors2DPart1Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'vecto1-intro',
      type: 'text' as const,
      content: `
# 📈 Vectors Two Dimensions

**Part 1 of 7 — Vector Basics**

### 1. Vector

a quantity with both magnitude and direction

### 2. Notation

v⃗ or ⟨a, b⟩ (component form) or ai + bj

### 3. Magnitude (length)

|v⃗| = √(a² + b²)

### 4. Direction angle

θ = arctan(b/a), adjust for quadrant
      `
    },
    {
      id: 'vecto1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Vector?',
            options: [
              '|v⃗| = √(a² + b²)',
              'v⃗ or ⟨a, b⟩ (component form) or ai + bj',
              'θ = arctan(b/a), adjust for quadrant',
              'a quantity with both magnitude and direction'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Vector: a quantity with both magnitude and direction. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Magnitude (length)?',
            options: [
              '|v⃗| = √(a² + b²)',
              'a quantity with both magnitude and direction',
              'v⃗ or ⟨a, b⟩ (component form) or ai + bj',
              'θ = arctan(b/a), adjust for quadrant'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Magnitude (length): |v⃗| = √(a² + b²). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'vecto1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Vector**: a quantity with both magnitude and direction
- **Notation**: v⃗ or ⟨a, b⟩ (component form) or ai + bj
- **Magnitude (length)**: |v⃗| = √(a² + b²)
- **Direction angle**: θ = arctan(b/a), adjust for quadrant
      `
    },
    {
      id: 'vecto1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to vector basics?',
            options: [
              'θ = arctan(b/a), adjust for quadrant',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Direction angle: θ = arctan(b/a), adjust for quadrant'
          }
        ]
      }
    },
    {
      id: 'vecto1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Vector',
            options: ['|v⃗| = √(a² + b²)', 'a quantity with both magnitude and direction', 'v⃗ or ⟨a, b⟩ (component form) or ai + bj', 'θ = arctan(b/a), adjust for quadrant']
          },
          {
            label: 'Notation',
            options: ['a quantity with both magnitude and direction', 'θ = arctan(b/a), adjust for quadrant', '|v⃗| = √(a² + b²)', 'v⃗ or ⟨a, b⟩ (component form) or ai + bj']
          },
          {
            label: 'Magnitude (length)',
            options: ['a quantity with both magnitude and direction', 'θ = arctan(b/a), adjust for quadrant', 'v⃗ or ⟨a, b⟩ (component form) or ai + bj', '|v⃗| = √(a² + b²)']
          }
        ],
        correctAnswers: ['a quantity with both magnitude and direction', 'v⃗ or ⟨a, b⟩ (component form) or ai + bj', '|v⃗| = √(a² + b²)'],
        hint1: 'Think about what each concept specifically describes in Vectors Two Dimensions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Vectors Two Dimensions describes a specific idea. Vector: a quantity with both magnitude and direction. Notation: v⃗ or ⟨a, b⟩ (component form) or ai + bj. Magnitude (length): |v⃗| = √(a² + b²).'
      }
    }
  ]
}
