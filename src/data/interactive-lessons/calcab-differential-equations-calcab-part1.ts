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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of introduction to differential equations?',
            options: [
              'Differential equation',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Differential equation: an equation involving a derivative (dy/dx = f(x,y))'
          },
          {
            question: 'In the context of introduction to differential equations, which is accurate?',
            options: [
              'includes arbitrary constant C',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'General solution: includes arbitrary constant C'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to differential equations?',
            options: [
              'specific solution using an initial condition',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Particular solution: specific solution using an initial condition'
          }
        ]
      }
    },
    {
      id: 'diffe1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Differential equation',
            options: ['an equation involving a derivative (dy/dx = f(x,y)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Solution',
            options: ['a function y = g(x) that satisfies the equation', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'General solution',
            options: ['includes arbitrary constant C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['an equation involving a derivative (dy/dx = f(x,y)', 'a function y = g(x) that satisfies the equation', 'includes arbitrary constant C'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Differential Equations.'
      }
    }
  ]
}
