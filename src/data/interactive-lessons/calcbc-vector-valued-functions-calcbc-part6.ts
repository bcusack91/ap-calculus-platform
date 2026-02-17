export const calcBCVectorsPart6Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vecto6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Speed = |v⃗(t)| = √[x'(t)² + y'(t)²]

Speed = |v⃗(t)| = √[x'(t)² + y'(t)²]

### 2. Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x'(t)² + y'(t)²] dt

Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x'(t)² + y'(t)²] dt

### 3. This is the arc length formula

This is the arc length formula

### 4. Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt

Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt
      `
    },
    {
      id: 'vecto6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]?',
            options: [
              'Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y\'(t)²] dt',
              'This is the arc length formula',
              'Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt',
              'Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about This is the arc length formula?',
            options: [
              'This is the arc length formula',
              'Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y\'(t)²] dt',
              'Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]',
              'Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt'
            ],
            correctAnswer: 0,
            explanation: 'Correct — This is the arc length formula. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'vecto6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Speed = |v⃗(t)| = √[x'(t)² + y'(t)²]**
- **Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x'(t)² + y'(t)²] dt**
- **This is the arc length formula**
- **Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt**
      `
    },
    {
      id: 'vecto6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Displacement vector = r⃗(b) - r⃗(a) =…?',
            options: [
              'Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt',
              'Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y\'(t)²] dt',
              'This is the arc length formula',
              'Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'vecto6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]',
            options: ['Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt', 'Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y\'(t)²] dt', 'Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'This is the arc length formula']
          },
          {
            label: 'Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ…',
            options: ['This is the arc length formula', 'Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y\'(t)²] dt', 'Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt']
          },
          {
            label: 'This is the arc length formula',
            options: ['This is the arc length formula', 'Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt', 'Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y\'(t)²] dt']
          }
        ],
        correctAnswers: ['Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y\'(t)²] dt', 'This is the arc length formula'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]. Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y\'(t)²] dt. This is the arc length formula.'
      }
    }
  ]
}
