export const calcBCArcLengthPart4Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc-l4-intro',
      type: 'text' as const,
      content: `
# Surface Area of Revolution

**Part 4 of 7 — Surface Area of Revolution**

### 1. Revolution about x-axis

SA = 2π∫ₐᵇ f(x)√(1+[f'(x)]²) dx (for f(x) ≥ 0)

### 2. Revolution about y-axis

SA = 2π∫ₐᵇ x√(1+[f'(x)]²) dx

### 3. Parametric

SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)

### 4. Surface area involves multiplying arc length element by circumference

Surface area involves multiplying arc length element by circumference
      `
    },
    {
      id: 'arc-l4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Revolution about x-axis" refer to in calculus?',
            options: [
              'SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0)',
              'SA = 2π∫ₐᵇ x√(1+[f\'(x)]²) dx',
              'Surface area involves multiplying arc length element by circumference',
              'SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Revolution about x-axis: SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Surface Area of Revolution, which explains Parametric?',
            options: [
              'SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)',
              'SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0)',
              'SA = 2π∫ₐᵇ x√(1+[f\'(x)]²) dx',
              'Surface area involves multiplying arc length element by circumference'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Parametric: SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'arc-l4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Revolution about x-axis**: SA = 2π∫ₐᵇ f(x)√(1+[f'(x)]²) dx (for f(x) ≥ 0)
- **Revolution about y-axis**: SA = 2π∫ₐᵇ x√(1+[f'(x)]²) dx
- **Parametric**: SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)
- **Surface area involves multiplying arc length element by circumference**
      `
    },
    {
      id: 'arc-l4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Surface area involves multiplying arc…?',
            options: [
              'SA = 2π∫ₐᵇ x√(1+[f\'(x)]²) dx',
              'Surface area involves multiplying arc length element by circumference',
              'SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)',
              'SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Surface area involves multiplying arc length element by circumference. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'arc-l4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Revolution about x-axis',
            options: ['SA = 2π∫ₐᵇ x√(1+[f\'(x)]²) dx', 'SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0)', 'SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)', 'Surface area involves multiplying arc length element by circumference']
          },
          {
            label: 'Revolution about y-axis',
            options: ['SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)', 'Surface area involves multiplying arc length element by circumference', 'SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0)', 'SA = 2π∫ₐᵇ x√(1+[f\'(x)]²) dx']
          },
          {
            label: 'Parametric',
            options: ['SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0)', 'Surface area involves multiplying arc length element by circumference', 'SA = 2π∫ₐᵇ x√(1+[f\'(x)]²) dx', 'SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)']
          }
        ],
        correctAnswers: ['SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0)', 'SA = 2π∫ₐᵇ x√(1+[f\'(x)]²) dx', 'SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)'],
        hint1: 'Think about what each concept specifically describes in Surface Area of Revolution.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Surface Area of Revolution describes a specific idea. Revolution about x-axis: SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0). Revolution about y-axis: SA = 2π∫ₐᵇ x√(1+[f\'(x)]²) dx. Parametric: SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis).'
      }
    }
  ]
}
