export const calcBCLagrangePart2Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lagra2-intro',
      type: 'text' as const,
      content: `
# Lagrange Error Bound Formula

**Part 2 of 7 — Lagrange Error Bound Formula**

### 1. |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x

|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x

### 2. M is the maximum of the absolute value of the (n+1)th derivative on the interval

M is the maximum of the absolute value of the (n+1)th derivative on the interval

### 3. This gives an upper bound, not the exact error

This gives an upper bound, not the exact error

### 4. Lagrange error bound is the most general error bound for Taylor polynomials

Lagrange error bound is the most general error bound for Taylor polynomials
      `
    },
    {
      id: 'lagra2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M =…?',
            options: [
              'This gives an upper bound, not the exact error',
              'M is the maximum of the absolute value of the (n+1)th derivative on the interval',
              '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x',
              'Lagrange error bound is the most general error bound for Taylor polynomials'
            ],
            correctAnswer: 2,
            explanation: 'Correct — |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes This gives an upper bound, not the…:',
            options: [
              'This gives an upper bound, not the exact error',
              '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x',
              'Lagrange error bound is the most general error bound for Taylor polynomials',
              'M is the maximum of the absolute value of the (n+1)th derivative on the interval'
            ],
            correctAnswer: 0,
            explanation: 'Correct — This gives an upper bound, not the exact error. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'lagra2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x**
- **M is the maximum of the absolute value of the (n+1)th derivative on the interval**
- **This gives an upper bound, not the exact error**
- **Lagrange error bound is the most general error bound for Taylor polynomials**
      `
    },
    {
      id: 'lagra2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Lagrange error bound is the most…?',
            options: [
              'This gives an upper bound, not the exact error',
              '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x',
              'Lagrange error bound is the most general error bound for Taylor polynomials',
              'M is the maximum of the absolute value of the (n+1)th derivative on the interval'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Lagrange error bound is the most general error bound for Taylor polynomials. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'lagra2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M =…',
            options: ['M is the maximum of the absolute value of the (n+1)th derivative on the interval', 'Lagrange error bound is the most general error bound for Taylor polynomials', 'This gives an upper bound, not the exact error', '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x']
          },
          {
            label: 'M is the maximum of the absolute value…',
            options: ['|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x', 'M is the maximum of the absolute value of the (n+1)th derivative on the interval', 'Lagrange error bound is the most general error bound for Taylor polynomials', 'This gives an upper bound, not the exact error']
          },
          {
            label: 'This gives an upper bound, not the…',
            options: ['|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x', 'M is the maximum of the absolute value of the (n+1)th derivative on the interval', 'This gives an upper bound, not the exact error', 'Lagrange error bound is the most general error bound for Taylor polynomials']
          }
        ],
        correctAnswers: ['|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x', 'M is the maximum of the absolute value of the (n+1)th derivative on the interval', 'This gives an upper bound, not the exact error'],
        hint1: 'Think about what each concept specifically describes in Lagrange Error Bound Formula.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Lagrange Error Bound Formula describes a specific idea. |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x. M is the maximum of the absolute value of the (n+1)th derivative on the interval. This gives an upper bound, not the exact error.'
      }
    }
  ]
}
