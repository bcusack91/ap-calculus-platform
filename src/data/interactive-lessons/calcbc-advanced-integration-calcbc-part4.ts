export const calcBCAdvIntegrationPart4Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'advan4-intro',
      type: 'text' as const,
      content: `
# Numerical Integration Methods

**Part 4 of 7 — Numerical Integration Methods**

### 1. Trapezoidal Rule

T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]

### 2. Simpson's Rule

S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] (n even)

### 3. Simpson's is more accurate (uses parabolas instead of trapezoids)

Simpson's is more accurate (uses parabolas instead of trapezoids)

### 4. Error bounds

|E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)
      `
    },
    {
      id: 'advan4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of numerical integration methods?',
            options: [
              'Trapezoidal Rule',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Trapezoidal Rule: T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]'
          },
          {
            question: 'In the context of numerical integration methods, which is accurate?',
            options: [
              'Simpson\'s is more accurate (uses parabolas instead of trapezoids)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Simpson\'s is more accurate (uses parabolas instead of trapezoids)'
          }
        ]
      }
    },
    {
      id: 'advan4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Trapezoidal Rule**: T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]
- **Simpson's Rule**: S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] (n even)
- **Simpson's is more accurate (uses parabolas instead of trapezoids)**
- **Error bounds**: |E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)
      `
    },
    {
      id: 'advan4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to numerical integration methods?',
            options: [
              '|E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Error bounds: |E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)'
          }
        ]
      }
    },
    {
      id: 'advan4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Trapezoidal Rule',
            options: ['T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(x', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Simpson\'s Rule',
            options: ['S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ..', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Simpson\'s is more accurate (uses parabolas instead of trapezoids)',
            options: ['Simpson\'s is more accurate (uses parabolas instead', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(x', 'S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ..', 'Simpson\'s is more accurate (uses parabolas instead'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Numerical Integration Methods.'
      }
    }
  ]
}
