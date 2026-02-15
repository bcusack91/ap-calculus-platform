export const calcBCParametricPart5Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param5-intro',
      type: 'text' as const,
      content: `
# Area Under Parametric Curves

**Part 5 of 7 — Area Under Parametric Curves**

### 1. Area under parametric curve

A = ∫ₐᵇ y(t) · x'(t) dt

### 2. Or equivalently

A = ∫ₐᵇ g(t) · f'(t) dt

### 3. Watch the direction of traversal (may need absolute value)

Watch the direction of traversal (may need absolute value)

### 4. Closed curve area

A = ½|∮(x dy - y dx)|
      `
    },
    {
      id: 'param5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of area under parametric curves?',
            options: [
              'Area under parametric curve',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Area under parametric curve: A = ∫ₐᵇ y(t) · x\'(t) dt'
          },
          {
            question: 'In the context of area under parametric curves, which is accurate?',
            options: [
              'Watch the direction of traversal (may need absolute value)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Watch the direction of traversal (may need absolute value)'
          }
        ]
      }
    },
    {
      id: 'param5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Area under parametric curve**: A = ∫ₐᵇ y(t) · x'(t) dt
- **Or equivalently**: A = ∫ₐᵇ g(t) · f'(t) dt
- **Watch the direction of traversal (may need absolute value)**
- **Closed curve area**: A = ½|∮(x dy - y dx)|
      `
    },
    {
      id: 'param5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to area under parametric curves?',
            options: [
              'A = ½|∮(x dy - y dx)|',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Closed curve area: A = ½|∮(x dy - y dx)|'
          }
        ]
      }
    },
    {
      id: 'param5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area under parametric curve',
            options: ['A = ∫ₐᵇ y(t) · x\'(t) dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Or equivalently',
            options: ['A = ∫ₐᵇ g(t) · f\'(t) dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Watch the direction of traversal (may need absolute value)',
            options: ['Watch the direction of traversal (may need absolut', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['A = ∫ₐᵇ y(t) · x\'(t) dt', 'A = ∫ₐᵇ g(t) · f\'(t) dt', 'Watch the direction of traversal (may need absolut'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Area Under Parametric Curves.'
      }
    }
  ]
}
