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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Average rate of change = [f(b) -…?',
            options: [
              'As the secant interval shrinks to zero, the secant approaches the tangent',
              'Instantaneous rate of change = slope of tangent line at a point',
              'The derivative captures instantaneous rate of change',
              'Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about As the secant interval shrinks to zero,…?',
            options: [
              'The derivative captures instantaneous rate of change',
              'Instantaneous rate of change = slope of tangent line at a point',
              'Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line',
              'As the secant interval shrinks to zero, the secant approaches the tangent'
            ],
            correctAnswer: 3,
            explanation: 'Correct — As the secant interval shrinks to zero, the secant approaches the tangent. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Definition Of Derivative, which correctly describes The derivative captures instantaneous…?',
            options: [
              'As the secant interval shrinks to zero, the secant approaches the tangent',
              'The derivative captures instantaneous rate of change',
              'Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line',
              'Instantaneous rate of change = slope of tangent line at a point'
            ],
            correctAnswer: 1,
            explanation: 'Correct — The derivative captures instantaneous rate of change. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'defin1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Average rate of change = [f(b) -…',
            options: ['Instantaneous rate of change = slope of tangent line at a point', 'Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line', 'As the secant interval shrinks to zero, the secant approaches the tangent', 'The derivative captures instantaneous rate of change']
          },
          {
            label: 'Instantaneous rate of change = slope of…',
            options: ['Instantaneous rate of change = slope of tangent line at a point', 'As the secant interval shrinks to zero, the secant approaches the tangent', 'Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line', 'The derivative captures instantaneous rate of change']
          },
          {
            label: 'As the secant interval shrinks to zero,…',
            options: ['The derivative captures instantaneous rate of change', 'Instantaneous rate of change = slope of tangent line at a point', 'As the secant interval shrinks to zero, the secant approaches the tangent', 'Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line']
          }
        ],
        correctAnswers: ['Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line', 'Instantaneous rate of change = slope of tangent line at a point', 'As the secant interval shrinks to zero, the secant approaches the tangent'],
        hint1: 'Think about what each concept specifically describes in Definition Of Derivative.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Definition Of Derivative describes a specific idea. Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line. Instantaneous rate of change = slope of tangent line at a point. As the secant interval shrinks to zero, the secant approaches the tangent.'
      }
    }
  ]
}
