export const calcBCSeriesAppsPart7Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'serie7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'serie7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Fourier series?',
            options: [
              '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p',
              'Series solutions are fundamental in differential equations and mathematical physics',
              'small-angle approximations (sin θ ≈ θ)',
              'represent periodic functions (preview)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Fourier series: represent periodic functions (preview). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Binomial series:',
            options: [
              'small-angle approximations (sin θ ≈ θ)',
              'Series solutions are fundamental in differential equations and mathematical physics',
              'represent periodic functions (preview)',
              '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Binomial series: (1+x)ᵖ = Σ C(p,n)xⁿ for any real p. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'serie7-detail',
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
      id: 'serie7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Series solutions are fundamental in… is correct?',
            options: [
              '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p',
              'small-angle approximations (sin θ ≈ θ)',
              'Series solutions are fundamental in differential equations and mathematical physics',
              'represent periodic functions (preview)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Series solutions are fundamental in differential equations and mathematical physics. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'serie7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fourier series',
            options: ['Series solutions are fundamental in differential equations and mathematical physics', 'represent periodic functions (preview)', 'small-angle approximations (sin θ ≈ θ)', '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p']
          },
          {
            label: 'Taylor series in physics',
            options: ['(1+x)ᵖ = Σ C(p,n)xⁿ for any real p', 'Series solutions are fundamental in differential equations and mathematical physics', 'small-angle approximations (sin θ ≈ θ)', 'represent periodic functions (preview)']
          },
          {
            label: 'Binomial series',
            options: ['(1+x)ᵖ = Σ C(p,n)xⁿ for any real p', 'Series solutions are fundamental in differential equations and mathematical physics', 'small-angle approximations (sin θ ≈ θ)', 'represent periodic functions (preview)']
          }
        ],
        correctAnswers: ['represent periodic functions (preview)', 'small-angle approximations (sin θ ≈ θ)', '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Fourier series: represent periodic functions (preview). Taylor series in physics: small-angle approximations (sin θ ≈ θ). Binomial series: (1+x)ᵖ = Σ C(p,n)xⁿ for any real p.'
      }
    }
  ]
}
