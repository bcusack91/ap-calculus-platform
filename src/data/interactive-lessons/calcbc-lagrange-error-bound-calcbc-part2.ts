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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of lagrange error bound formula?',
            options: [
              '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x'
          },
          {
            question: 'In the context of lagrange error bound formula, which is accurate?',
            options: [
              'This gives an upper bound, not the exact error',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'This gives an upper bound, not the exact error'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to lagrange error bound formula?',
            options: [
              'Lagrange error bound is the most general error bound for Taylor polynomials',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Lagrange error bound is the most general error bound for Taylor polynomials'
          }
        ]
      }
    },
    {
      id: 'lagra2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x',
            options: ['|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'M is the maximum of the absolute value of the (n+1)th derivative on the interval',
            options: ['M is the maximum of the absolute value of the (n+1', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'This gives an upper bound, not the exact error',
            options: ['This gives an upper bound, not the exact error', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)', 'M is the maximum of the absolute value of the (n+1', 'This gives an upper bound, not the exact error'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Lagrange Error Bound Formula.'
      }
    }
  ]
}
