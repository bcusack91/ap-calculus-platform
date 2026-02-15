export const calcABBasicDiffPart1Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'basic1-intro',
      type: 'text' as const,
      content: `
# ∫ Basic Differentiation Rules

**Part 1 of 7 — Power Rule**

### 1. Power Rule

d/dx[xⁿ] = n·x^(n-1) for any real number n

### 2. d/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)

d/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)

### 3. Works for integer, fractional, and negative exponents

Works for integer, fractional, and negative exponents

### 4. Combine with constant multiple rule for terms like 5x⁴

Combine with constant multiple rule for terms like 5x⁴
      `
    },
    {
      id: 'basic1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of power rule?',
            options: [
              'Power Rule',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Power Rule: d/dx[xⁿ] = n·x^(n-1) for any real number n'
          },
          {
            question: 'In the context of power rule, which is accurate?',
            options: [
              'Works for integer, fractional, and negative exponents',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Works for integer, fractional, and negative exponents'
          }
        ]
      }
    },
    {
      id: 'basic1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Power Rule**: d/dx[xⁿ] = n·x^(n-1) for any real number n
- **d/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)**
- **Works for integer, fractional, and negative exponents**
- **Combine with constant multiple rule for terms like 5x⁴**
      `
    },
    {
      id: 'basic1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to power rule?',
            options: [
              'Combine with constant multiple rule for terms like 5x⁴',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Combine with constant multiple rule for terms like 5x⁴'
          }
        ]
      }
    },
    {
      id: 'basic1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Power Rule',
            options: ['d/dx[xⁿ] = n·x^(n-1) for any real number n', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'd/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)',
            options: ['d/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Works for integer, fractional, and negative exponents',
            options: ['Works for integer, fractional, and negative expone', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[xⁿ] = n·x^(n-1) for any real number n', 'd/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2', 'Works for integer, fractional, and negative expone'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Power Rule.'
      }
    }
  ]
}
