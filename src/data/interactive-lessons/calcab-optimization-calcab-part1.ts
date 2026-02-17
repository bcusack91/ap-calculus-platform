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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Optimization" refer to in calculus?',
            options: [
              'finding the maximum or minimum value of a function subject to constraints',
              'define variables, write the objective function, apply constraints, find critical points',
              'Check critical points and endpoints for global extrema',
              'Verify your answer makes sense in the context of the problem'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Optimization: finding the maximum or minimum value of a function subject to constraints. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Check critical points and endpoints for…:',
            options: [
              'Verify your answer makes sense in the context of the problem',
              'Check critical points and endpoints for global extrema',
              'finding the maximum or minimum value of a function subject to constraints',
              'define variables, write the objective function, apply constraints, find critical points'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Check critical points and endpoints for global extrema. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Verify your answer makes sense in the…?',
            options: [
              'Verify your answer makes sense in the context of the problem',
              'Check critical points and endpoints for global extrema',
              'define variables, write the objective function, apply constraints, find critical points',
              'finding the maximum or minimum value of a function subject to constraints'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Verify your answer makes sense in the context of the problem. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'optim1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Optimization',
            options: ['Verify your answer makes sense in the context of the problem', 'Check critical points and endpoints for global extrema', 'define variables, write the objective function, apply constraints, find critical points', 'finding the maximum or minimum value of a function subject to constraints']
          },
          {
            label: 'Steps',
            options: ['finding the maximum or minimum value of a function subject to constraints', 'Verify your answer makes sense in the context of the problem', 'Check critical points and endpoints for global extrema', 'define variables, write the objective function, apply constraints, find critical points']
          }
        ],
        correctAnswers: ['finding the maximum or minimum value of a function subject to constraints', 'define variables, write the objective function, apply constraints, find critical points'],
        hint1: 'Think about what each concept specifically describes in Optimization.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Optimization describes a specific idea. Optimization: finding the maximum or minimum value of a function subject to constraints. Steps: define variables, write the objective function, apply constraints, find critical points.'
      }
    }
  ]
}
