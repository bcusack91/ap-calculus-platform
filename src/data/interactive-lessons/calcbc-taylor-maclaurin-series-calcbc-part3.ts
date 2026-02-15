export const calcBCTaylorMaclaurinPart3Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'taylo3-intro',
      type: 'text' as const,
      content: `
# Common Maclaurin Series

**Part 3 of 7 — Common Maclaurin Series**

### 1. eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)

eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)

### 2. sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)

sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)

### 3. cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)

cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)

### 4. 1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)

1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)
      `
    },
    {
      id: 'taylo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of common maclaurin series?',
            options: [
              'eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)'
          },
          {
            question: 'In the context of common maclaurin series, which is accurate?',
            options: [
              'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)'
          }
        ]
      }
    },
    {
      id: 'taylo3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)**
- **sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)**
- **cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)**
- **1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)**
      `
    },
    {
      id: 'taylo3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to common maclaurin series?',
            options: [
              '1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: '1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)'
          }
        ]
      }
    },
    {
      id: 'taylo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)',
            options: ['eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)',
            options: ['sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! -', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)',
            options: ['cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ...', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)', 'sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! -', 'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ...'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Common Maclaurin Series.'
      }
    }
  ]
}
