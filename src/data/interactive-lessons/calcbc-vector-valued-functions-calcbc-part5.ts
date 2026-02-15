export const calcBCVectorsPart5Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vecto5-intro',
      type: 'text' as const,
      content: `
# Speed and Arc Length

**Part 5 of 7 — Speed and Arc Length**

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
      id: 'vecto5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of speed and arc length?',
            options: [
              'Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]'
          },
          {
            question: 'In the context of speed and arc length, which is accurate?',
            options: [
              'This is the arc length formula',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'This is the arc length formula'
          }
        ]
      }
    },
    {
      id: 'vecto5-detail',
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
      id: 'vecto5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to speed and arc length?',
            options: [
              'Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt'
          }
        ]
      }
    },
    {
      id: 'vecto5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]',
            options: ['Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y\'(t)²] dt',
            options: ['Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'This is the arc length formula',
            options: ['This is the arc length formula', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y', 'This is the arc length formula'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Speed and Arc Length.'
      }
    }
  ]
}
