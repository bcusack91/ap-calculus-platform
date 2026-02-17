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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Riemann sum" refer to in calculus?',
            options: [
              'Σ f(xᵢ*)Δx approximates the area under a curve',
              'More rectangles (smaller Δx) → better approximation',
              'The definite integral is the limit of Riemann sums as n → ∞',
              'Left, right, midpoint, and trapezoidal approximations'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Riemann sum: Σ f(xᵢ*)Δx approximates the area under a curve. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes More rectangles (smaller Δx) → better…:',
            options: [
              'The definite integral is the limit of Riemann sums as n → ∞',
              'Σ f(xᵢ*)Δx approximates the area under a curve',
              'Left, right, midpoint, and trapezoidal approximations',
              'More rectangles (smaller Δx) → better approximation'
            ],
            correctAnswer: 3,
            explanation: 'Correct — More rectangles (smaller Δx) → better approximation. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Definite Integrals, which correctly describes The definite integral is the limit of…?',
            options: [
              'More rectangles (smaller Δx) → better approximation',
              'Σ f(xᵢ*)Δx approximates the area under a curve',
              'The definite integral is the limit of Riemann sums as n → ∞',
              'Left, right, midpoint, and trapezoidal approximations'
            ],
            correctAnswer: 2,
            explanation: 'Correct — The definite integral is the limit of Riemann sums as n → ∞. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'defin1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Riemann sum',
            options: ['Σ f(xᵢ*)Δx approximates the area under a curve', 'More rectangles (smaller Δx) → better approximation', 'The definite integral is the limit of Riemann sums as n → ∞', 'Left, right, midpoint, and trapezoidal approximations']
          },
          {
            label: 'Left, right, midpoint, and trapezoidal…',
            options: ['The definite integral is the limit of Riemann sums as n → ∞', 'Left, right, midpoint, and trapezoidal approximations', 'Σ f(xᵢ*)Δx approximates the area under a curve', 'More rectangles (smaller Δx) → better approximation']
          },
          {
            label: 'More rectangles (smaller Δx) → better…',
            options: ['The definite integral is the limit of Riemann sums as n → ∞', 'More rectangles (smaller Δx) → better approximation', 'Left, right, midpoint, and trapezoidal approximations', 'Σ f(xᵢ*)Δx approximates the area under a curve']
          }
        ],
        correctAnswers: ['Σ f(xᵢ*)Δx approximates the area under a curve', 'Left, right, midpoint, and trapezoidal approximations', 'More rectangles (smaller Δx) → better approximation'],
        hint1: 'Think about what each concept specifically describes in Definite Integrals.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Definite Integrals describes a specific idea. Riemann sum: Σ f(xᵢ*)Δx approximates the area under a curve. Left, right, midpoint, and trapezoidal approximations. More rectangles (smaller Δx) → better approximation.'
      }
    }
  ]
}
