export const calcABLinearizationPart1Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'linea1-intro',
      type: 'text' as const,
      content: `
# ∫ Linearization Differentials

**Part 1 of 7 — Linear Approximation**

### 1. Linearization

L(x) = f(a) + f'(a)(x - a) — the tangent line approximation

### 2. Best linear approximation of f near x = a

Best linear approximation of f near x = a

### 3. Approximation improves as x gets closer to a

Approximation improves as x gets closer to a

### 4. Example

√(4.01) ≈ L(4.01) using f(x) = √x at a = 4
      `
    },
    {
      id: 'linea1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of linear approximation?',
            options: [
              'Linearization',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Linearization: L(x) = f(a) + f\'(a)(x - a) — the tangent line approximation'
          },
          {
            question: 'In the context of linear approximation, which is accurate?',
            options: [
              'Approximation improves as x gets closer to a',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Approximation improves as x gets closer to a'
          }
        ]
      }
    },
    {
      id: 'linea1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Linearization**: L(x) = f(a) + f'(a)(x - a) — the tangent line approximation
- **Best linear approximation of f near x = a**
- **Approximation improves as x gets closer to a**
- **Example**: √(4.01) ≈ L(4.01) using f(x) = √x at a = 4
      `
    },
    {
      id: 'linea1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to linear approximation?',
            options: [
              '√(4.01) ≈ L(4.01) using f(x) = √x at a = 4',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Example: √(4.01) ≈ L(4.01) using f(x) = √x at a = 4'
          }
        ]
      }
    },
    {
      id: 'linea1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Linearization',
            options: ['L(x) = f(a) + f\'(a)(x - a) — the tangent line appr', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Best linear approximation of f near x = a',
            options: ['Best linear approximation of f near x = a', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Approximation improves as x gets closer to a',
            options: ['Approximation improves as x gets closer to a', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['L(x) = f(a) + f\'(a)(x - a) — the tangent line appr', 'Best linear approximation of f near x = a', 'Approximation improves as x gets closer to a'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Linear Approximation.'
      }
    }
  ]
}
