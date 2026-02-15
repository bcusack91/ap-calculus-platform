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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Fourier series',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Fourier series: represent periodic functions (preview)'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Binomial series: (1+x)ᵖ = Σ C(p,n)xⁿ for any real p'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'Series solutions are fundamental in differential equations and mathematical phys',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Series solutions are fundamental in differential equations and mathematical physics'
          }
        ]
      }
    },
    {
      id: 'serie7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fourier series',
            options: ['represent periodic functions (preview)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Taylor series in physics',
            options: ['small-angle approximations (sin θ ≈ θ)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Binomial series',
            options: ['(1+x)ᵖ = Σ C(p,n)xⁿ for any real p', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['represent periodic functions (preview)', 'small-angle approximations (sin θ ≈ θ)', '(1+x)ᵖ = Σ C(p,n)xⁿ for any real p'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
