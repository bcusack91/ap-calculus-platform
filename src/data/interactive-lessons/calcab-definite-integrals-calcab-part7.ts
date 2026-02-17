export const calcABDefiniteIntegralsPart7Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'defin7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. FTC Part 2

∫ₐᵇ f(x)dx = F(b) - F(a) where F' = f

### 2. Find any antiderivative F of f, then evaluate at the bounds

Find any antiderivative F of f, then evaluate at the bounds

### 3. This gives an exact method for computing definite integrals

This gives an exact method for computing definite integrals

### 4. No need to take limits of Riemann sums — use antiderivatives instead

No need to take limits of Riemann sums — use antiderivatives instead
      `
    },
    {
      id: 'defin7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "FTC Part 2" refer to in calculus?',
            options: [
              '∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f',
              'No need to take limits of Riemann sums — use antiderivatives instead',
              'Find any antiderivative F of f, then evaluate at the bounds',
              'This gives an exact method for computing definite integrals'
            ],
            correctAnswer: 0,
            explanation: 'Correct — FTC Part 2: ∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains This gives an exact method for…?',
            options: [
              'Find any antiderivative F of f, then evaluate at the bounds',
              'No need to take limits of Riemann sums — use antiderivatives instead',
              'This gives an exact method for computing definite integrals',
              '∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f'
            ],
            correctAnswer: 2,
            explanation: 'Correct — This gives an exact method for computing definite integrals. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'defin7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **FTC Part 2**: ∫ₐᵇ f(x)dx = F(b) - F(a) where F' = f
- **Find any antiderivative F of f, then evaluate at the bounds**
- **This gives an exact method for computing definite integrals**
- **No need to take limits of Riemann sums — use antiderivatives instead**
      `
    },
    {
      id: 'defin7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes No need to take limits of Riemann sums…?',
            options: [
              'Find any antiderivative F of f, then evaluate at the bounds',
              '∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f',
              'No need to take limits of Riemann sums — use antiderivatives instead',
              'This gives an exact method for computing definite integrals'
            ],
            correctAnswer: 2,
            explanation: 'Correct — No need to take limits of Riemann sums — use antiderivatives instead. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'defin7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'FTC Part 2',
            options: ['∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f', 'No need to take limits of Riemann sums — use antiderivatives instead', 'This gives an exact method for computing definite integrals', 'Find any antiderivative F of f, then evaluate at the bounds']
          },
          {
            label: 'Find any antiderivative F of f, then…',
            options: ['∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f', 'No need to take limits of Riemann sums — use antiderivatives instead', 'This gives an exact method for computing definite integrals', 'Find any antiderivative F of f, then evaluate at the bounds']
          },
          {
            label: 'This gives an exact method for…',
            options: ['No need to take limits of Riemann sums — use antiderivatives instead', 'Find any antiderivative F of f, then evaluate at the bounds', 'This gives an exact method for computing definite integrals', '∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f']
          }
        ],
        correctAnswers: ['∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f', 'Find any antiderivative F of f, then evaluate at the bounds', 'This gives an exact method for computing definite integrals'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. FTC Part 2: ∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f. Find any antiderivative F of f, then evaluate at the bounds. This gives an exact method for computing definite integrals.'
      }
    }
  ]
}
