export const calcABOptimizationPart6Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'optim6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'optim6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Revenue R(x) = x · p(x) where p(x) is…" refer to in calculus?',
            options: [
              'Profit P(x) = R(x) - C(x) where C(x) is cost',
              'set P\'(x) = 0 → marginal revenue = marginal cost',
              'how quantity changes in response to price',
              'Revenue R(x) = x · p(x) where p(x) is the price function'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Revenue R(x) = x · p(x) where p(x) is the price function. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Maximize profit?',
            options: [
              'Revenue R(x) = x · p(x) where p(x) is the price function',
              'how quantity changes in response to price',
              'set P\'(x) = 0 → marginal revenue = marginal cost',
              'Profit P(x) = R(x) - C(x) where C(x) is cost'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Maximize profit: set P\'(x) = 0 → marginal revenue = marginal cost. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'optim6-detail',
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
      id: 'optim6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Elasticity of demand?',
            options: [
              'set P\'(x) = 0 → marginal revenue = marginal cost',
              'Profit P(x) = R(x) - C(x) where C(x) is cost',
              'how quantity changes in response to price',
              'Revenue R(x) = x · p(x) where p(x) is the price function'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Elasticity of demand: how quantity changes in response to price. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'optim6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Maximize profit',
            options: ['set P\'(x) = 0 → marginal revenue = marginal cost', 'how quantity changes in response to price', 'Profit P(x) = R(x) - C(x) where C(x) is cost', 'Revenue R(x) = x · p(x) where p(x) is the price function']
          },
          {
            label: 'Elasticity of demand',
            options: ['set P\'(x) = 0 → marginal revenue = marginal cost', 'Revenue R(x) = x · p(x) where p(x) is the price function', 'how quantity changes in response to price', 'Profit P(x) = R(x) - C(x) where C(x) is cost']
          }
        ],
        correctAnswers: ['set P\'(x) = 0 → marginal revenue = marginal cost', 'how quantity changes in response to price'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Maximize profit: set P\'(x) = 0 → marginal revenue = marginal cost. Elasticity of demand: how quantity changes in response to price.'
      }
    }
  ]
}
