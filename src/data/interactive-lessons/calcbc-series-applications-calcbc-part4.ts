export const calcBCSeriesAppsPart4Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'serie4-intro',
      type: 'text' as const,
      content: `
# Error Analysis in Practice

**Part 4 of 7 — Error Analysis in Practice**

### 1. Lagrange error bound

|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!

### 2. Alternating series error

|S - Sₙ| ≤ |aₙ₊₁|

### 3. Choose the tighter bound when both apply

Choose the tighter bound when both apply

### 4. On AP exam

state which bound you're using and show the calculation
      `
    },
    {
      id: 'serie4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of error analysis in practice?',
            options: [
              'Lagrange error bound',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Lagrange error bound: |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!'
          },
          {
            question: 'In the context of error analysis in practice, which is accurate?',
            options: [
              'Choose the tighter bound when both apply',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Choose the tighter bound when both apply'
          }
        ]
      }
    },
    {
      id: 'serie4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Lagrange error bound**: |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!
- **Alternating series error**: |S - Sₙ| ≤ |aₙ₊₁|
- **Choose the tighter bound when both apply**
- **On AP exam**: state which bound you're using and show the calculation
      `
    },
    {
      id: 'serie4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to error analysis in practice?',
            options: [
              'state which bound you\'re using and show the calculation',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'On AP exam: state which bound you\'re using and show the calculation'
          }
        ]
      }
    },
    {
      id: 'serie4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lagrange error bound',
            options: ['|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Alternating series error',
            options: ['|S - Sₙ| ≤ |aₙ₊₁|', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Choose the tighter bound when both apply',
            options: ['Choose the tighter bound when both apply', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', '|S - Sₙ| ≤ |aₙ₊₁|', 'Choose the tighter bound when both apply'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Error Analysis in Practice.'
      }
    }
  ]
}
