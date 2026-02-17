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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Use FTC Part 2" refer to in calculus?',
            options: [
              '(1/(b-a)) × approximate integral',
              '"total change in f from a to b"',
              '∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data',
              'Approximate ∫ₐᵇ f(x)dx using Riemann sums or trapezoidal rule'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Use FTC Part 2: ∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Interpret the integral:',
            options: [
              '(1/(b-a)) × approximate integral',
              '∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data',
              '"total change in f from a to b"',
              'Approximate ∫ₐᵇ f(x)dx using Riemann sums or trapezoidal rule'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Interpret the integral: "total change in f from a to b". Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Applying FTC with Tabular Data, which correctly describes Average value from table?',
            options: [
              '"total change in f from a to b"',
              '∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data',
              'Approximate ∫ₐᵇ f(x)dx using Riemann sums or trapezoidal rule',
              '(1/(b-a)) × approximate integral'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Average value from table: (1/(b-a)) × approximate integral. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'table4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Use FTC Part 2',
            options: ['Approximate ∫ₐᵇ f(x)dx using Riemann sums or trapezoidal rule', '(1/(b-a)) × approximate integral', '∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data', '"total change in f from a to b"']
          },
          {
            label: 'Interpret the integral',
            options: ['Approximate ∫ₐᵇ f(x)dx using Riemann sums or trapezoidal rule', '∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data', '"total change in f from a to b"', '(1/(b-a)) × approximate integral']
          },
          {
            label: 'Average value from table',
            options: ['∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data', 'Approximate ∫ₐᵇ f(x)dx using Riemann sums or trapezoidal rule', '"total change in f from a to b"', '(1/(b-a)) × approximate integral']
          }
        ],
        correctAnswers: ['∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data', '"total change in f from a to b"', '(1/(b-a)) × approximate integral'],
        hint1: 'Think about what each concept specifically describes in Applying FTC with Tabular Data.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Applying FTC with Tabular Data describes a specific idea. Use FTC Part 2: ∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data. Interpret the integral: "total change in f from a to b". Average value from table: (1/(b-a)) × approximate integral.'
      }
    }
  ]
}
