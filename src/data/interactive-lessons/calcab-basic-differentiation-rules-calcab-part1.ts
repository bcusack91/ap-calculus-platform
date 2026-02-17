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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Power Rule?',
            options: [
              'Works for integer, fractional, and negative exponents',
              'd/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)',
              'd/dx[xⁿ] = n·x^(n-1) for any real number n',
              'Combine with constant multiple rule for terms like 5x⁴'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Power Rule: d/dx[xⁿ] = n·x^(n-1) for any real number n. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Works for integer, fractional, and…:',
            options: [
              'Works for integer, fractional, and negative exponents',
              'Combine with constant multiple rule for terms like 5x⁴',
              'd/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)',
              'd/dx[xⁿ] = n·x^(n-1) for any real number n'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Works for integer, fractional, and negative exponents. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Basic Differentiation Rules, which correctly describes Combine with constant multiple rule for…?',
            options: [
              'd/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)',
              'Works for integer, fractional, and negative exponents',
              'Combine with constant multiple rule for terms like 5x⁴',
              'd/dx[xⁿ] = n·x^(n-1) for any real number n'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Combine with constant multiple rule for terms like 5x⁴. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'basic1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Power Rule',
            options: ['Combine with constant multiple rule for terms like 5x⁴', 'Works for integer, fractional, and negative exponents', 'd/dx[xⁿ] = n·x^(n-1) for any real number n', 'd/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)']
          },
          {
            label: 'd/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³,…',
            options: ['d/dx[xⁿ] = n·x^(n-1) for any real number n', 'Combine with constant multiple rule for terms like 5x⁴', 'd/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)', 'Works for integer, fractional, and negative exponents']
          },
          {
            label: 'Works for integer, fractional, and…',
            options: ['Combine with constant multiple rule for terms like 5x⁴', 'd/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)', 'Works for integer, fractional, and negative exponents', 'd/dx[xⁿ] = n·x^(n-1) for any real number n']
          }
        ],
        correctAnswers: ['d/dx[xⁿ] = n·x^(n-1) for any real number n', 'd/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)', 'Works for integer, fractional, and negative exponents'],
        hint1: 'Think about what each concept specifically describes in Basic Differentiation Rules.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Basic Differentiation Rules describes a specific idea. Power Rule: d/dx[xⁿ] = n·x^(n-1) for any real number n. d/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x). Works for integer, fractional, and negative exponents.'
      }
    }
  ]
}
