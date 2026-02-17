export const calcABOptimizationPart7Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'optim7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Revenue R(x) = x · p(x) where p(x) is the price function

Revenue R(x) = x · p(x) where p(x) is the price function

### 2. Profit P(x) = R(x) - C(x) where C(x) is cost

Profit P(x) = R(x) - C(x) where C(x) is cost

### 3. Maximize profit

set P'(x) = 0 → marginal revenue = marginal cost

### 4. Elasticity of demand

how quantity changes in response to price
      `
    },
    {
      id: 'optim7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Revenue R(x) = x · p(x) where p(x) is…" refer to in calculus?',
            options: [
              'Revenue R(x) = x · p(x) where p(x) is the price function',
              'Profit P(x) = R(x) - C(x) where C(x) is cost',
              'how quantity changes in response to price',
              'set P\'(x) = 0 → marginal revenue = marginal cost'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Revenue R(x) = x · p(x) where p(x) is the price function. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Maximize profit?',
            options: [
              'set P\'(x) = 0 → marginal revenue = marginal cost',
              'how quantity changes in response to price',
              'Profit P(x) = R(x) - C(x) where C(x) is cost',
              'Revenue R(x) = x · p(x) where p(x) is the price function'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Maximize profit: set P\'(x) = 0 → marginal revenue = marginal cost. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'optim7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Revenue R(x) = x · p(x) where p(x) is the price function**
- **Profit P(x) = R(x) - C(x) where C(x) is cost**
- **Maximize profit**: set P'(x) = 0 → marginal revenue = marginal cost
- **Elasticity of demand**: how quantity changes in response to price
      `
    },
    {
      id: 'optim7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Elasticity of demand?',
            options: [
              'how quantity changes in response to price',
              'Revenue R(x) = x · p(x) where p(x) is the price function',
              'Profit P(x) = R(x) - C(x) where C(x) is cost',
              'set P\'(x) = 0 → marginal revenue = marginal cost'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Elasticity of demand: how quantity changes in response to price. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'optim7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Maximize profit',
            options: ['set P\'(x) = 0 → marginal revenue = marginal cost', 'Revenue R(x) = x · p(x) where p(x) is the price function', 'Profit P(x) = R(x) - C(x) where C(x) is cost', 'how quantity changes in response to price']
          },
          {
            label: 'Elasticity of demand',
            options: ['Profit P(x) = R(x) - C(x) where C(x) is cost', 'how quantity changes in response to price', 'Revenue R(x) = x · p(x) where p(x) is the price function', 'set P\'(x) = 0 → marginal revenue = marginal cost']
          }
        ],
        correctAnswers: ['set P\'(x) = 0 → marginal revenue = marginal cost', 'how quantity changes in response to price'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Maximize profit: set P\'(x) = 0 → marginal revenue = marginal cost. Elasticity of demand: how quantity changes in response to price.'
      }
    }
  ]
}
