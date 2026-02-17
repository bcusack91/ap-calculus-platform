export const calcBCParametricPart4Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param4-intro',
      type: 'text' as const,
      content: `
# Arc Length (Parametric)

**Part 4 of 7 — Arc Length (Parametric)**

### 1. Arc length

L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt

### 2. Speed

|v(t)| = √[(dx/dt)² + (dy/dt)²]

### 3. Total distance traveled = ∫ₐᵇ |v(t)| dt

Total distance traveled = ∫ₐᵇ |v(t)| dt

### 4. Arc length parametrization

s(t) = ∫ₐᵗ |v(u)| du
      `
    },
    {
      id: 'param4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Arc length?',
            options: [
              's(t) = ∫ₐᵗ |v(u)| du',
              'Total distance traveled = ∫ₐᵇ |v(t)| dt',
              'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt',
              '|v(t)| = √[(dx/dt)² + (dy/dt)²]'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Arc length: L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Total distance traveled = ∫ₐᵇ |v(t)| dt:',
            options: [
              'Total distance traveled = ∫ₐᵇ |v(t)| dt',
              '|v(t)| = √[(dx/dt)² + (dy/dt)²]',
              's(t) = ∫ₐᵗ |v(u)| du',
              'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Total distance traveled = ∫ₐᵇ |v(t)| dt. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'param4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Arc length**: L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt
- **Speed**: |v(t)| = √[(dx/dt)² + (dy/dt)²]
- **Total distance traveled = ∫ₐᵇ |v(t)| dt**
- **Arc length parametrization**: s(t) = ∫ₐᵗ |v(u)| du
      `
    },
    {
      id: 'param4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Arc length parametrization is correct?',
            options: [
              'Total distance traveled = ∫ₐᵇ |v(t)| dt',
              'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt',
              's(t) = ∫ₐᵗ |v(u)| du',
              '|v(t)| = √[(dx/dt)² + (dy/dt)²]'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Arc length parametrization: s(t) = ∫ₐᵗ |v(u)| du. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'param4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arc length',
            options: ['|v(t)| = √[(dx/dt)² + (dy/dt)²]', 's(t) = ∫ₐᵗ |v(u)| du', 'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', 'Total distance traveled = ∫ₐᵇ |v(t)| dt']
          },
          {
            label: 'Speed',
            options: ['Total distance traveled = ∫ₐᵇ |v(t)| dt', 's(t) = ∫ₐᵗ |v(u)| du', 'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', '|v(t)| = √[(dx/dt)² + (dy/dt)²]']
          },
          {
            label: 'Arc length parametrization',
            options: ['s(t) = ∫ₐᵗ |v(u)| du', '|v(t)| = √[(dx/dt)² + (dy/dt)²]', 'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', 'Total distance traveled = ∫ₐᵇ |v(t)| dt']
          }
        ],
        correctAnswers: ['L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', '|v(t)| = √[(dx/dt)² + (dy/dt)²]', 's(t) = ∫ₐᵗ |v(u)| du'],
        hint1: 'Think about what each concept specifically describes in Arc Length (Parametric).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Arc Length (Parametric) describes a specific idea. Arc length: L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt. Speed: |v(t)| = √[(dx/dt)² + (dy/dt)²]. Arc length parametrization: s(t) = ∫ₐᵗ |v(u)| du.'
      }
    }
  ]
}
