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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Lagrange error bound?',
            options: [
              'state which bound you\'re using and show the calculation',
              '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!',
              '|S - Sₙ| ≤ |aₙ₊₁|',
              'Choose the tighter bound when both apply'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Lagrange error bound: |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Choose the tighter bound when both apply:',
            options: [
              'state which bound you\'re using and show the calculation',
              '|S - Sₙ| ≤ |aₙ₊₁|',
              '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!',
              'Choose the tighter bound when both apply'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Choose the tighter bound when both apply. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about On AP exam is correct?',
            options: [
              '|S - Sₙ| ≤ |aₙ₊₁|',
              '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!',
              'state which bound you\'re using and show the calculation',
              'Choose the tighter bound when both apply'
            ],
            correctAnswer: 2,
            explanation: 'Correct — On AP exam: state which bound you\'re using and show the calculation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'serie4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lagrange error bound',
            options: ['|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', 'state which bound you\'re using and show the calculation', '|S - Sₙ| ≤ |aₙ₊₁|', 'Choose the tighter bound when both apply']
          },
          {
            label: 'Alternating series error',
            options: ['state which bound you\'re using and show the calculation', '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', '|S - Sₙ| ≤ |aₙ₊₁|', 'Choose the tighter bound when both apply']
          },
          {
            label: 'On AP exam',
            options: ['state which bound you\'re using and show the calculation', '|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', 'Choose the tighter bound when both apply', '|S - Sₙ| ≤ |aₙ₊₁|']
          }
        ],
        correctAnswers: ['|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', '|S - Sₙ| ≤ |aₙ₊₁|', 'state which bound you\'re using and show the calculation'],
        hint1: 'Think about what each concept specifically describes in Error Analysis in Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Error Analysis in Practice describes a specific idea. Lagrange error bound: |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!. Alternating series error: |S - Sₙ| ≤ |aₙ₊₁|. On AP exam: state which bound you\'re using and show the calculation.'
      }
    }
  ]
}
