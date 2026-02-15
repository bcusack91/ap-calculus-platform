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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'FTC Part 2',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'FTC Part 2: ∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'This gives an exact method for computing definite integrals',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'This gives an exact method for computing definite integrals'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'No need to take limits of Riemann sums — use antiderivatives instead',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'No need to take limits of Riemann sums — use antiderivatives instead'
          }
        ]
      }
    },
    {
      id: 'defin7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'FTC Part 2',
            options: ['∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Find any antiderivative F of f, then evaluate at the bounds',
            options: ['Find any antiderivative F of f, then evaluate at t', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'This gives an exact method for computing definite integrals',
            options: ['This gives an exact method for computing definite ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f', 'Find any antiderivative F of f, then evaluate at t', 'This gives an exact method for computing definite '],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
