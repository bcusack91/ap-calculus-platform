export const calcBCSeriesAppsPart6Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'serie6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Fourier series

represent periodic functions (preview)

### 2. Taylor series in physics

small-angle approximations (sin θ ≈ θ)

### 3. Binomial series

(1+x)ᵖ = Σ C(p,n)xⁿ for any real p

### 4. Series solutions are fundamental in differential equations and mathematical physics

Series solutions are fundamental in differential equations and mathematical physics
      `
    },
    {
      id: 'serie6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Fourier series?',
            options: [
              'represent periodic functions (preview)',
              'Series solutions are fundamental in differential equations and mathematical physics',
              'small-angle approximations (sin θ ≈ θ)',
              '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Fourier series: represent periodic functions (preview). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Binomial series:',
            options: [
              'Series solutions are fundamental in differential equations and mathematical physics',
              'represent periodic functions (preview)',
              'small-angle approximations (sin θ ≈ θ)',
              '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Binomial series: (1+x)ᵖ = Σ C(p,n)xⁿ for any real p. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'serie6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Fourier series**: represent periodic functions (preview)
- **Taylor series in physics**: small-angle approximations (sin θ ≈ θ)
- **Binomial series**: (1+x)ᵖ = Σ C(p,n)xⁿ for any real p
- **Series solutions are fundamental in differential equations and mathematical physics**
      `
    },
    {
      id: 'serie6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Series solutions are fundamental in…?',
            options: [
              'represent periodic functions (preview)',
              'Series solutions are fundamental in differential equations and mathematical physics',
              '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p',
              'small-angle approximations (sin θ ≈ θ)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Series solutions are fundamental in differential equations and mathematical physics. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'serie6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fourier series',
            options: ['represent periodic functions (preview)', 'small-angle approximations (sin θ ≈ θ)', 'Series solutions are fundamental in differential equations and mathematical physics', '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p']
          },
          {
            label: 'Taylor series in physics',
            options: ['(1+x)ᵖ = Σ C(p,n)xⁿ for any real p', 'small-angle approximations (sin θ ≈ θ)', 'Series solutions are fundamental in differential equations and mathematical physics', 'represent periodic functions (preview)']
          },
          {
            label: 'Binomial series',
            options: ['(1+x)ᵖ = Σ C(p,n)xⁿ for any real p', 'Series solutions are fundamental in differential equations and mathematical physics', 'represent periodic functions (preview)', 'small-angle approximations (sin θ ≈ θ)']
          }
        ],
        correctAnswers: ['represent periodic functions (preview)', 'small-angle approximations (sin θ ≈ θ)', '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Fourier series: represent periodic functions (preview). Taylor series in physics: small-angle approximations (sin θ ≈ θ). Binomial series: (1+x)ᵖ = Σ C(p,n)xⁿ for any real p.'
      }
    }
  ]
}
