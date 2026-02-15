export const calcABLinearizationPart2Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'linea2-intro',
      type: 'text' as const,
      content: `
# Differentials

**Part 2 of 7 — Differentials**

### 1. Differential

dy = f'(x)dx represents the change along the tangent line

### 2. Δy is the actual change in f; dy is the approximate change

Δy is the actual change in f; dy is the approximate change

### 3. dy ≈ Δy for small dx

dy ≈ Δy for small dx

### 4. dx is an independent variable; dy depends on both x and dx

dx is an independent variable; dy depends on both x and dx
      `
    },
    {
      id: 'linea2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of differentials?',
            options: [
              'Differential',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Differential: dy = f\'(x)dx represents the change along the tangent line'
          },
          {
            question: 'In the context of differentials, which is accurate?',
            options: [
              'dy ≈ Δy for small dx',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'dy ≈ Δy for small dx'
          }
        ]
      }
    },
    {
      id: 'linea2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Differential**: dy = f'(x)dx represents the change along the tangent line
- **Δy is the actual change in f; dy is the approximate change**
- **dy ≈ Δy for small dx**
- **dx is an independent variable; dy depends on both x and dx**
      `
    },
    {
      id: 'linea2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to differentials?',
            options: [
              'dx is an independent variable; dy depends on both x and dx',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'dx is an independent variable; dy depends on both x and dx'
          }
        ]
      }
    },
    {
      id: 'linea2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Differential',
            options: ['dy = f\'(x)dx represents the change along the tange', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Δy is the actual change in f; dy is the approximate change',
            options: ['Δy is the actual change in f; dy is the approximat', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'dy ≈ Δy for small dx',
            options: ['dy ≈ Δy for small dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['dy = f\'(x)dx represents the change along the tange', 'Δy is the actual change in f; dy is the approximat', 'dy ≈ Δy for small dx'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Differentials.'
      }
    }
  ]
}
