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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a)…" refer to in calculus?',
            options: [
              '(units of f)/(units of x)',
              'Use symmetric difference quotient when c is between a and b',
              'Cannot compute exact derivatives from discrete data — only approximations',
              'Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Cannot compute exact derivatives from…:',
            options: [
              'Cannot compute exact derivatives from discrete data — only approximations',
              '(units of f)/(units of x)',
              'Use symmetric difference quotient when c is between a and b',
              'Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Cannot compute exact derivatives from discrete data — only approximations. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Tables Data, which correctly describes Units of the derivative?',
            options: [
              'Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values',
              'Cannot compute exact derivatives from discrete data — only approximations',
              'Use symmetric difference quotient when c is between a and b',
              '(units of f)/(units of x)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Units of the derivative: (units of f)/(units of x). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'table1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a)…',
            options: ['Use symmetric difference quotient when c is between a and b', 'Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values', '(units of f)/(units of x)', 'Cannot compute exact derivatives from discrete data — only approximations']
          },
          {
            label: 'Use symmetric difference quotient when…',
            options: ['Use symmetric difference quotient when c is between a and b', 'Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values', '(units of f)/(units of x)', 'Cannot compute exact derivatives from discrete data — only approximations']
          },
          {
            label: 'Cannot compute exact derivatives from…',
            options: ['Use symmetric difference quotient when c is between a and b', '(units of f)/(units of x)', 'Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values', 'Cannot compute exact derivatives from discrete data — only approximations']
          }
        ],
        correctAnswers: ['Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values', 'Use symmetric difference quotient when c is between a and b', 'Cannot compute exact derivatives from discrete data — only approximations'],
        hint1: 'Think about what each concept specifically describes in Tables Data.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Tables Data describes a specific idea. Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values. Use symmetric difference quotient when c is between a and b. Cannot compute exact derivatives from discrete data — only approximations.'
      }
    }
  ]
}
