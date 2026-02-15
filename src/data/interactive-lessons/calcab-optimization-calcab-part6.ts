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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Revenue R(x) = x · p(x) where p(x) is the price function',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Revenue R(x) = x · p(x) where p(x) is the price function'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'set P\'(x) = 0 → marginal revenue = marginal cost',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Maximize profit: set P\'(x) = 0 → marginal revenue = marginal cost'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'how quantity changes in response to price',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Elasticity of demand: how quantity changes in response to price'
          }
        ]
      }
    },
    {
      id: 'optim6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Revenue R(x) = x · p(x) where p(x) is the price function',
            options: ['Revenue R(x) = x · p(x) where p(x) is the price fu', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Profit P(x) = R(x) - C(x) where C(x) is cost',
            options: ['Profit P(x) = R(x) - C(x) where C(x) is cost', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Maximize profit',
            options: ['set P\'(x) = 0 → marginal revenue = marginal cost', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Revenue R(x) = x · p(x) where p(x) is the price fu', 'Profit P(x) = R(x) - C(x) where C(x) is cost', 'set P\'(x) = 0 → marginal revenue = marginal cost'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
