export const calcABTablesDataPart2Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'table2-intro',
      type: 'text' as const,
      content: `
# Trapezoidal Rule

**Part 2 of 7 — Trapezoidal Rule**

### 1. Trapezoidal Rule

∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]

### 2. Works with unequal subintervals

sum individual trapezoid areas

### 3. Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)

Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)

### 4. Generally more accurate than left or right Riemann sums

Generally more accurate than left or right Riemann sums
      `
    },
    {
      id: 'table2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of trapezoidal rule?',
            options: [
              'Trapezoidal Rule',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Trapezoidal Rule: ∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]'
          },
          {
            question: 'In the context of trapezoidal rule, which is accurate?',
            options: [
              'Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)'
          }
        ]
      }
    },
    {
      id: 'table2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Trapezoidal Rule**: ∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]
- **Works with unequal subintervals**: sum individual trapezoid areas
- **Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)**
- **Generally more accurate than left or right Riemann sums**
      `
    },
    {
      id: 'table2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to trapezoidal rule?',
            options: [
              'Generally more accurate than left or right Riemann sums',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Generally more accurate than left or right Riemann sums'
          }
        ]
      }
    },
    {
      id: 'table2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Trapezoidal Rule',
            options: ['∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Works with unequal subintervals',
            options: ['sum individual trapezoid areas', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)',
            options: ['Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... ', 'sum individual trapezoid areas', 'Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Trapezoidal Rule.'
      }
    }
  ]
}
