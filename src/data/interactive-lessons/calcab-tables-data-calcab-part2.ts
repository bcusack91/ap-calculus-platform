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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Trapezoidal Rule" refer to in calculus?',
            options: [
              'Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)',
              '∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]',
              'Generally more accurate than left or right Riemann sums',
              'sum individual trapezoid areas'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Trapezoidal Rule: ∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Each trapezoid area = ½(f(xᵢ) +…:',
            options: [
              'sum individual trapezoid areas',
              'Generally more accurate than left or right Riemann sums',
              'Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)',
              '∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Generally more accurate than left or… is correct?',
            options: [
              'sum individual trapezoid areas',
              'Generally more accurate than left or right Riemann sums',
              'Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)',
              '∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Generally more accurate than left or right Riemann sums. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'table2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Trapezoidal Rule',
            options: ['Generally more accurate than left or right Riemann sums', 'sum individual trapezoid areas', 'Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)', '∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]']
          },
          {
            label: 'Works with unequal subintervals',
            options: ['Generally more accurate than left or right Riemann sums', '∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]', 'Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)', 'sum individual trapezoid areas']
          }
        ],
        correctAnswers: ['∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]', 'sum individual trapezoid areas'],
        hint1: 'Think about what each concept specifically describes in Trapezoidal Rule.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Trapezoidal Rule describes a specific idea. Trapezoidal Rule: ∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]. Works with unequal subintervals: sum individual trapezoid areas.'
      }
    }
  ]
}
