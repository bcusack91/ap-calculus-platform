export const calcABDerivativeDefPart5Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'defin5-intro',
      type: 'text' as const,
      content: `
# Graphical Interpretation

**Part 5 of 7 — Graphical Interpretation**

### 1. The derivative at a point = slope of the tangent line at that point

The derivative at a point = slope of the tangent line at that point

### 2. Tangent line equation

y - f(a) = f'(a)(x - a)

### 3. Where f' is zero, f has a horizontal tangent

Where f' is zero, f has a horizontal tangent

### 4. The sign of f' indicates whether f is rising or falling

The sign of f' indicates whether f is rising or falling
      `
    },
    {
      id: 'defin5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of graphical interpretation?',
            options: [
              'The derivative at a point = slope of the tangent line at that point',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'The derivative at a point = slope of the tangent line at that point'
          },
          {
            question: 'In the context of graphical interpretation, which is accurate?',
            options: [
              'Where f\' is zero, f has a horizontal tangent',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Where f\' is zero, f has a horizontal tangent'
          }
        ]
      }
    },
    {
      id: 'defin5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **The derivative at a point = slope of the tangent line at that point**
- **Tangent line equation**: y - f(a) = f'(a)(x - a)
- **Where f' is zero, f has a horizontal tangent**
- **The sign of f' indicates whether f is rising or falling**
      `
    },
    {
      id: 'defin5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to graphical interpretation?',
            options: [
              'The sign of f\' indicates whether f is rising or falling',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'The sign of f\' indicates whether f is rising or falling'
          }
        ]
      }
    },
    {
      id: 'defin5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The derivative at a point = slope of the tangent line at that point',
            options: ['The derivative at a point = slope of the tangent l', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Tangent line equation',
            options: ['y - f(a) = f\'(a)(x - a)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Where f\' is zero, f has a horizontal tangent',
            options: ['Where f\' is zero, f has a horizontal tangent', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['The derivative at a point = slope of the tangent l', 'y - f(a) = f\'(a)(x - a)', 'Where f\' is zero, f has a horizontal tangent'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Graphical Interpretation.'
      }
    }
  ]
}
