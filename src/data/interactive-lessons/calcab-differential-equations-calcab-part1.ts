export const calcABDiffEqPart1Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'diffe1-intro',
      type: 'text' as const,
      content: `
# ∫ Differential Equations

**Part 1 of 7 — Introduction to Differential Equations**

### 1. Differential equation

an equation involving a derivative (dy/dx = f(x,y))

### 2. Solution

a function y = g(x) that satisfies the equation

### 3. General solution

includes arbitrary constant C

### 4. Particular solution

specific solution using an initial condition
      `
    },
    {
      id: 'diffe1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Differential equation?',
            options: [
              'includes arbitrary constant C',
              'an equation involving a derivative (dy/dx = f(x,y))',
              'a function y = g(x) that satisfies the equation',
              'specific solution using an initial condition'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Differential equation: an equation involving a derivative (dy/dx = f(x,y)). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes General solution:',
            options: [
              'specific solution using an initial condition',
              'includes arbitrary constant C',
              'a function y = g(x) that satisfies the equation',
              'an equation involving a derivative (dy/dx = f(x,y))'
            ],
            correctAnswer: 1,
            explanation: 'Correct — General solution: includes arbitrary constant C. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'diffe1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Differential equation**: an equation involving a derivative (dy/dx = f(x,y))
- **Solution**: a function y = g(x) that satisfies the equation
- **General solution**: includes arbitrary constant C
- **Particular solution**: specific solution using an initial condition
      `
    },
    {
      id: 'diffe1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Particular solution is correct?',
            options: [
              'specific solution using an initial condition',
              'includes arbitrary constant C',
              'a function y = g(x) that satisfies the equation',
              'an equation involving a derivative (dy/dx = f(x,y))'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Particular solution: specific solution using an initial condition. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'diffe1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Differential equation',
            options: ['an equation involving a derivative (dy/dx = f(x,y))', 'a function y = g(x) that satisfies the equation', 'includes arbitrary constant C', 'specific solution using an initial condition']
          },
          {
            label: 'Solution',
            options: ['includes arbitrary constant C', 'specific solution using an initial condition', 'an equation involving a derivative (dy/dx = f(x,y))', 'a function y = g(x) that satisfies the equation']
          },
          {
            label: 'General solution',
            options: ['a function y = g(x) that satisfies the equation', 'includes arbitrary constant C', 'specific solution using an initial condition', 'an equation involving a derivative (dy/dx = f(x,y))']
          }
        ],
        correctAnswers: ['an equation involving a derivative (dy/dx = f(x,y))', 'a function y = g(x) that satisfies the equation', 'includes arbitrary constant C'],
        hint1: 'Think about what each concept specifically describes in Differential Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Differential Equations describes a specific idea. Differential equation: an equation involving a derivative (dy/dx = f(x,y)). Solution: a function y = g(x) that satisfies the equation. General solution: includes arbitrary constant C.'
      }
    }
  ]
}
