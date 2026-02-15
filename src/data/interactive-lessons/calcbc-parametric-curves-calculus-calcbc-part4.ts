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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of arc length (parametric)?',
            options: [
              'Arc length',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Arc length: L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt'
          },
          {
            question: 'In the context of arc length (parametric), which is accurate?',
            options: [
              'Total distance traveled = ∫ₐᵇ |v(t)| dt',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Total distance traveled = ∫ₐᵇ |v(t)| dt'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to arc length (parametric)?',
            options: [
              's(t) = ∫ₐᵗ |v(u)| du',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Arc length parametrization: s(t) = ∫ₐᵗ |v(u)| du'
          }
        ]
      }
    },
    {
      id: 'param4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arc length',
            options: ['L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Speed',
            options: ['|v(t)| = √[(dx/dt)² + (dy/dt)²]', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Total distance traveled = ∫ₐᵇ |v(t)| dt',
            options: ['Total distance traveled = ∫ₐᵇ |v(t)| dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', '|v(t)| = √[(dx/dt)² + (dy/dt)²]', 'Total distance traveled = ∫ₐᵇ |v(t)| dt'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Arc Length (Parametric).'
      }
    }
  ]
}
