export const calcABDerivativeDefPart6Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'defin6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'defin6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes The derivative at a point = slope of…?',
            options: [
              'The derivative at a point = slope of the tangent line at that point',
              'y - f(a) = f\'(a)(x - a)',
              'The sign of f\' indicates whether f is rising or falling',
              'Where f\' is zero, f has a horizontal tangent'
            ],
            correctAnswer: 0,
            explanation: 'Correct — The derivative at a point = slope of the tangent line at that point. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Where f\' is zero, f has a horizontal…?',
            options: [
              'The sign of f\' indicates whether f is rising or falling',
              'Where f\' is zero, f has a horizontal tangent',
              'The derivative at a point = slope of the tangent line at that point',
              'y - f(a) = f\'(a)(x - a)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Where f\' is zero, f has a horizontal tangent. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'defin6-detail',
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
      id: 'defin6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about The sign of f\' indicates whether f is… is correct?',
            options: [
              'Where f\' is zero, f has a horizontal tangent',
              'The derivative at a point = slope of the tangent line at that point',
              'The sign of f\' indicates whether f is rising or falling',
              'y - f(a) = f\'(a)(x - a)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — The sign of f\' indicates whether f is rising or falling. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'defin6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The derivative at a point = slope of…',
            options: ['Where f\' is zero, f has a horizontal tangent', 'The sign of f\' indicates whether f is rising or falling', 'y - f(a) = f\'(a)(x - a)', 'The derivative at a point = slope of the tangent line at that point']
          },
          {
            label: 'Tangent line equation',
            options: ['The sign of f\' indicates whether f is rising or falling', 'y - f(a) = f\'(a)(x - a)', 'Where f\' is zero, f has a horizontal tangent', 'The derivative at a point = slope of the tangent line at that point']
          },
          {
            label: 'Where f\' is zero, f has a horizontal…',
            options: ['The sign of f\' indicates whether f is rising or falling', 'y - f(a) = f\'(a)(x - a)', 'Where f\' is zero, f has a horizontal tangent', 'The derivative at a point = slope of the tangent line at that point']
          }
        ],
        correctAnswers: ['The derivative at a point = slope of the tangent line at that point', 'y - f(a) = f\'(a)(x - a)', 'Where f\' is zero, f has a horizontal tangent'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. The derivative at a point = slope of the tangent line at that point. Tangent line equation: y - f(a) = f\'(a)(x - a). Where f\' is zero, f has a horizontal tangent.'
      }
    }
  ]
}
