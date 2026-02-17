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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! +…?',
            options: [
              'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)',
              '1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)',
              'eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)',
              'sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! +…?',
            options: [
              'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)',
              'eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)',
              'sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)',
              '1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents 1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ...…?',
            options: [
              'eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)',
              'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)',
              'sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)',
              '1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — 1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'taylo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! +…',
            options: ['1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)', 'sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)', 'eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)', 'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)']
          },
          {
            label: 'sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x -…',
            options: ['sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)', '1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)', 'eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)', 'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)']
          },
          {
            label: 'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! +…',
            options: ['sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)', 'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)', '1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)', 'eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)']
          }
        ],
        correctAnswers: ['eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)', 'sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)', 'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)'],
        hint1: 'Think about what each concept specifically describes in Common Maclaurin Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Common Maclaurin Series describes a specific idea. eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞). sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞). cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞).'
      }
    }
  ]
}
