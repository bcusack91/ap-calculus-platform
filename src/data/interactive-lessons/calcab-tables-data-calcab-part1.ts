export const calcABTablesDataPart1Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'table1-intro',
      type: 'text' as const,
      content: `
# ∫ Tables Data

**Part 1 of 7 — Using Data Tables for Derivatives**

### 1. Approximate f'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values

Approximate f'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values

### 2. Use symmetric difference quotient when c is between a and b

Use symmetric difference quotient when c is between a and b

### 3. Cannot compute exact derivatives from discrete data — only approximations

Cannot compute exact derivatives from discrete data — only approximations

### 4. Units of the derivative

(units of f)/(units of x)
      `
    },
    {
      id: 'table1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of using data tables for derivatives?',
            options: [
              'Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values'
          },
          {
            question: 'In the context of using data tables for derivatives, which is accurate?',
            options: [
              'Cannot compute exact derivatives from discrete data — only approximations',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cannot compute exact derivatives from discrete data — only approximations'
          }
        ]
      }
    },
    {
      id: 'table1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Approximate f'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values**
- **Use symmetric difference quotient when c is between a and b**
- **Cannot compute exact derivatives from discrete data — only approximations**
- **Units of the derivative**: (units of f)/(units of x)
      `
    },
    {
      id: 'table1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to using data tables for derivatives?',
            options: [
              '(units of f)/(units of x)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Units of the derivative: (units of f)/(units of x)'
          }
        ]
      }
    },
    {
      id: 'table1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values',
            options: ['Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Use symmetric difference quotient when c is between a and b',
            options: ['Use symmetric difference quotient when c is betwee', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Cannot compute exact derivatives from discrete data — only approximations',
            options: ['Cannot compute exact derivatives from discrete dat', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby', 'Use symmetric difference quotient when c is betwee', 'Cannot compute exact derivatives from discrete dat'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Using Data Tables for Derivatives.'
      }
    }
  ]
}
