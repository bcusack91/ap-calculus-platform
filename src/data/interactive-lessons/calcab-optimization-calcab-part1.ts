export const calcABOptimizationPart1Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'optim1-intro',
      type: 'text' as const,
      content: `
# ∫ Optimization

**Part 1 of 7 — Optimization Strategy**

### 1. Optimization

finding the maximum or minimum value of a function subject to constraints

### 2. Steps

define variables, write the objective function, apply constraints, find critical points

### 3. Check critical points and endpoints for global extrema

Check critical points and endpoints for global extrema

### 4. Verify your answer makes sense in the context of the problem

Verify your answer makes sense in the context of the problem
      `
    },
    {
      id: 'optim1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of optimization strategy?',
            options: [
              'Optimization',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Optimization: finding the maximum or minimum value of a function subject to constraints'
          },
          {
            question: 'In the context of optimization strategy, which is accurate?',
            options: [
              'Check critical points and endpoints for global extrema',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Check critical points and endpoints for global extrema'
          }
        ]
      }
    },
    {
      id: 'optim1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Optimization**: finding the maximum or minimum value of a function subject to constraints
- **Steps**: define variables, write the objective function, apply constraints, find critical points
- **Check critical points and endpoints for global extrema**
- **Verify your answer makes sense in the context of the problem**
      `
    },
    {
      id: 'optim1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to optimization strategy?',
            options: [
              'Verify your answer makes sense in the context of the problem',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Verify your answer makes sense in the context of the problem'
          }
        ]
      }
    },
    {
      id: 'optim1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Optimization',
            options: ['finding the maximum or minimum value of a function', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Steps',
            options: ['define variables, write the objective function, ap', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Check critical points and endpoints for global extrema',
            options: ['Check critical points and endpoints for global ext', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['finding the maximum or minimum value of a function', 'define variables, write the objective function, ap', 'Check critical points and endpoints for global ext'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Optimization Strategy.'
      }
    }
  ]
}
