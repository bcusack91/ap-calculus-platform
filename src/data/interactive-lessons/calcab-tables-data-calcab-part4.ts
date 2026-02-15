export const calcABTablesDataPart4Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'table4-intro',
      type: 'text' as const,
      content: `
# Applying FTC with Tabular Data

**Part 4 of 7 — Applying FTC with Tabular Data**

### 1. Use FTC Part 2

∫ₐᵇ f'(x)dx = f(b) - f(a) with tabular rate data

### 2. Approximate ∫ₐᵇ f(x)dx using Riemann sums or trapezoidal rule

Approximate ∫ₐᵇ f(x)dx using Riemann sums or trapezoidal rule

### 3. Interpret the integral

"total change in f from a to b"

### 4. Average value from table

(1/(b-a)) × approximate integral
      `
    },
    {
      id: 'table4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of applying ftc with tabular data?',
            options: [
              'Use FTC Part 2',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Use FTC Part 2: ∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data'
          },
          {
            question: 'In the context of applying ftc with tabular data, which is accurate?',
            options: [
              '"total change in f from a to b"',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Interpret the integral: "total change in f from a to b"'
          }
        ]
      }
    },
    {
      id: 'table4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Use FTC Part 2**: ∫ₐᵇ f'(x)dx = f(b) - f(a) with tabular rate data
- **Approximate ∫ₐᵇ f(x)dx using Riemann sums or trapezoidal rule**
- **Interpret the integral**: "total change in f from a to b"
- **Average value from table**: (1/(b-a)) × approximate integral
      `
    },
    {
      id: 'table4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to applying ftc with tabular data?',
            options: [
              '(1/(b-a)) × approximate integral',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Average value from table: (1/(b-a)) × approximate integral'
          }
        ]
      }
    },
    {
      id: 'table4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Use FTC Part 2',
            options: ['∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Approximate ∫ₐᵇ f(x)dx using Riemann sums or trapezoidal rule',
            options: ['Approximate ∫ₐᵇ f(x)dx using Riemann sums or trape', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Interpret the integral',
            options: ['"total change in f from a to b"', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data', 'Approximate ∫ₐᵇ f(x)dx using Riemann sums or trape', '"total change in f from a to b"'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Applying FTC with Tabular Data.'
      }
    }
  ]
}
