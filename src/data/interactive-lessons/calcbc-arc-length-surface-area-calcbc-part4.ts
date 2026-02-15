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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of surface area of revolution?',
            options: [
              'Revolution about x-axis',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Revolution about x-axis: SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0)'
          },
          {
            question: 'In the context of surface area of revolution, which is accurate?',
            options: [
              'SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Parametric: SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to surface area of revolution?',
            options: [
              'Surface area involves multiplying arc length element by circumference',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Surface area involves multiplying arc length element by circumference'
          }
        ]
      }
    },
    {
      id: 'arc-l4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Revolution about x-axis',
            options: ['SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Revolution about y-axis',
            options: ['SA = 2π∫ₐᵇ x√(1+[f\'(x)]²) dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Parametric',
            options: ['SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0)', 'SA = 2π∫ₐᵇ x√(1+[f\'(x)]²) dx', 'SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Surface Area of Revolution.'
      }
    }
  ]
}
