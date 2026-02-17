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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Trapezoidal Rule" refer to in calculus?',
            options: [
              'S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] (n even)',
              'T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]',
              'Simpson\'s is more accurate (uses parabolas instead of trapezoids)',
              '|E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Trapezoidal Rule: T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Simpson\'s is more accurate (uses…?',
            options: [
              '|E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)',
              'T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]',
              'Simpson\'s is more accurate (uses parabolas instead of trapezoids)',
              'S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] (n even)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Simpson\'s is more accurate (uses parabolas instead of trapezoids). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Error bounds?',
            options: [
              'Simpson\'s is more accurate (uses parabolas instead of trapezoids)',
              '|E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)',
              'T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]',
              'S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] (n even)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Error bounds: |E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'advan4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Trapezoidal Rule',
            options: ['|E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)', 'Simpson\'s is more accurate (uses parabolas instead of trapezoids)', 'T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]', 'S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] (n even)']
          },
          {
            label: 'Simpson\'s Rule',
            options: ['S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] (n even)', 'T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]', 'Simpson\'s is more accurate (uses parabolas instead of trapezoids)', '|E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)']
          },
          {
            label: 'Error bounds',
            options: ['Simpson\'s is more accurate (uses parabolas instead of trapezoids)', 'T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]', 'S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] (n even)', '|E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)']
          }
        ],
        correctAnswers: ['T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]', 'S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] (n even)', '|E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)'],
        hint1: 'Think about what each concept specifically describes in Numerical Integration Methods.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Numerical Integration Methods describes a specific idea. Trapezoidal Rule: T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]. Simpson\'s Rule: S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] (n even). Error bounds: |E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴).'
      }
    }
  ]
}
