export const calcABDerivativeDefPart1Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'defin1-intro',
      type: 'text' as const,
      content: `
# ∫ Definition Of Derivative

**Part 1 of 7 — Average vs Instantaneous Rate**

### 1. Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line

Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line

### 2. Instantaneous rate of change = slope of tangent line at a point

Instantaneous rate of change = slope of tangent line at a point

### 3. As the secant interval shrinks to zero, the secant approaches the tangent

As the secant interval shrinks to zero, the secant approaches the tangent

### 4. The derivative captures instantaneous rate of change

The derivative captures instantaneous rate of change
      `
    },
    {
      id: 'defin1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of average vs instantaneous rate?',
            options: [
              'Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line'
          },
          {
            question: 'In the context of average vs instantaneous rate, which is accurate?',
            options: [
              'As the secant interval shrinks to zero, the secant approaches the tangent',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'As the secant interval shrinks to zero, the secant approaches the tangent'
          }
        ]
      }
    },
    {
      id: 'defin1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line**
- **Instantaneous rate of change = slope of tangent line at a point**
- **As the secant interval shrinks to zero, the secant approaches the tangent**
- **The derivative captures instantaneous rate of change**
      `
    },
    {
      id: 'defin1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to average vs instantaneous rate?',
            options: [
              'The derivative captures instantaneous rate of change',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'The derivative captures instantaneous rate of change'
          }
        ]
      }
    },
    {
      id: 'defin1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line',
            options: ['Average rate of change = [f(b) - f(a)]/(b - a) = s', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Instantaneous rate of change = slope of tangent line at a point',
            options: ['Instantaneous rate of change = slope of tangent li', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'As the secant interval shrinks to zero, the secant approaches the tangent',
            options: ['As the secant interval shrinks to zero, the secant', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Average rate of change = [f(b) - f(a)]/(b - a) = s', 'Instantaneous rate of change = slope of tangent li', 'As the secant interval shrinks to zero, the secant'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Average vs Instantaneous Rate.'
      }
    }
  ]
}
