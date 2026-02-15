export const calcABDefiniteIntegralsPart1Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'defin1-intro',
      type: 'text' as const,
      content: `
# ∫ Definite Integrals

**Part 1 of 7 — Riemann Sums**

### 1. Riemann sum

Σ f(xᵢ*)Δx approximates the area under a curve

### 2. Left, right, midpoint, and trapezoidal approximations

Left, right, midpoint, and trapezoidal approximations

### 3. More rectangles (smaller Δx) → better approximation

More rectangles (smaller Δx) → better approximation

### 4. The definite integral is the limit of Riemann sums as n → ∞

The definite integral is the limit of Riemann sums as n → ∞
      `
    },
    {
      id: 'defin1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of riemann sums?',
            options: [
              'Riemann sum',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Riemann sum: Σ f(xᵢ*)Δx approximates the area under a curve'
          },
          {
            question: 'In the context of riemann sums, which is accurate?',
            options: [
              'More rectangles (smaller Δx) → better approximation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'More rectangles (smaller Δx) → better approximation'
          }
        ]
      }
    },
    {
      id: 'defin1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Riemann sum**: Σ f(xᵢ*)Δx approximates the area under a curve
- **Left, right, midpoint, and trapezoidal approximations**
- **More rectangles (smaller Δx) → better approximation**
- **The definite integral is the limit of Riemann sums as n → ∞**
      `
    },
    {
      id: 'defin1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to riemann sums?',
            options: [
              'The definite integral is the limit of Riemann sums as n → ∞',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'The definite integral is the limit of Riemann sums as n → ∞'
          }
        ]
      }
    },
    {
      id: 'defin1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Riemann sum',
            options: ['Σ f(xᵢ*)Δx approximates the area under a curve', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Left, right, midpoint, and trapezoidal approximations',
            options: ['Left, right, midpoint, and trapezoidal approximati', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'More rectangles (smaller Δx) → better approximation',
            options: ['More rectangles (smaller Δx) → better approximatio', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Σ f(xᵢ*)Δx approximates the area under a curve', 'Left, right, midpoint, and trapezoidal approximati', 'More rectangles (smaller Δx) → better approximatio'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Riemann Sums.'
      }
    }
  ]
}
