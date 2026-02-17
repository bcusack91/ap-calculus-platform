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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Linearization?',
            options: [
              'L(x) = f(a) + f\'(a)(x - a) — the tangent line approximation',
              'Best linear approximation of f near x = a',
              '√(4.01) ≈ L(4.01) using f(x) = √x at a = 4',
              'Approximation improves as x gets closer to a'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Linearization: L(x) = f(a) + f\'(a)(x - a) — the tangent line approximation. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Linearization Differentials, which explains Approximation improves as x gets closer…?',
            options: [
              'Approximation improves as x gets closer to a',
              'Best linear approximation of f near x = a',
              'L(x) = f(a) + f\'(a)(x - a) — the tangent line approximation',
              '√(4.01) ≈ L(4.01) using f(x) = √x at a = 4'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Approximation improves as x gets closer to a. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Example is correct?',
            options: [
              '√(4.01) ≈ L(4.01) using f(x) = √x at a = 4',
              'Approximation improves as x gets closer to a',
              'L(x) = f(a) + f\'(a)(x - a) — the tangent line approximation',
              'Best linear approximation of f near x = a'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Example: √(4.01) ≈ L(4.01) using f(x) = √x at a = 4. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'linea1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Linearization',
            options: ['Approximation improves as x gets closer to a', 'Best linear approximation of f near x = a', '√(4.01) ≈ L(4.01) using f(x) = √x at a = 4', 'L(x) = f(a) + f\'(a)(x - a) — the tangent line approximation']
          },
          {
            label: 'Example',
            options: ['Best linear approximation of f near x = a', 'Approximation improves as x gets closer to a', 'L(x) = f(a) + f\'(a)(x - a) — the tangent line approximation', '√(4.01) ≈ L(4.01) using f(x) = √x at a = 4']
          }
        ],
        correctAnswers: ['L(x) = f(a) + f\'(a)(x - a) — the tangent line approximation', '√(4.01) ≈ L(4.01) using f(x) = √x at a = 4'],
        hint1: 'Think about what each concept specifically describes in Linearization Differentials.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Linearization Differentials describes a specific idea. Linearization: L(x) = f(a) + f\'(a)(x - a) — the tangent line approximation. Example: √(4.01) ≈ L(4.01) using f(x) = √x at a = 4.'
      }
    }
  ]
}
