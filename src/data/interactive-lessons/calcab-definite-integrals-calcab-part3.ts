export const calcABDefiniteIntegralsPart3Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'defin3-intro',
      type: 'text' as const,
      content: `
# Properties of Definite Integrals

**Part 3 of 7 — Properties of Definite Integrals**

### 1. ∫ₐᵃ f(x)dx = 0 (zero-width interval)

∫ₐᵃ f(x)dx = 0 (zero-width interval)

### 2. ∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)

∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)

### 3. ∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx

∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx

### 4. ∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)

∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)
      `
    },
    {
      id: 'defin3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of properties of definite integrals?',
            options: [
              '∫ₐᵃ f(x)dx = 0 (zero-width interval)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: '∫ₐᵃ f(x)dx = 0 (zero-width interval)'
          },
          {
            question: 'In the context of properties of definite integrals, which is accurate?',
            options: [
              '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx'
          }
        ]
      }
    },
    {
      id: 'defin3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫ₐᵃ f(x)dx = 0 (zero-width interval)**
- **∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)**
- **∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx**
- **∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)**
      `
    },
    {
      id: 'defin3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to properties of definite integrals?',
            options: [
              '∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: '∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)'
          }
        ]
      }
    },
    {
      id: 'defin3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫ₐᵃ f(x)dx = 0 (zero-width interval)',
            options: ['∫ₐᵃ f(x)dx = 0 (zero-width interval)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)',
            options: ['∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx',
            options: ['∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫ₐᵃ f(x)dx = 0 (zero-width interval)', '∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates', '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Properties of Definite Integrals.'
      }
    }
  ]
}
