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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of vector basics?',
            options: [
              'Vector',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Vector: a quantity with both magnitude and direction'
          },
          {
            question: 'In the context of vector basics, which is accurate?',
            options: [
              '|v⃗| = √(a² + b²)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Magnitude (length): |v⃗| = √(a² + b²)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Vector',
            options: ['a quantity with both magnitude and direction', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Notation',
            options: ['v⃗ or ⟨a, b⟩ (component form) or ai + bj', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Magnitude (length)',
            options: ['|v⃗| = √(a² + b²)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['a quantity with both magnitude and direction', 'v⃗ or ⟨a, b⟩ (component form) or ai + bj', '|v⃗| = √(a² + b²)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Vector Basics.'
      }
    }
  ]
}
