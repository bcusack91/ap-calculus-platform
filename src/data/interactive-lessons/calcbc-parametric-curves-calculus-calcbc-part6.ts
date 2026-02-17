export const calcBCParametricPart6Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'param6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Area under parametric curve?',
            options: [
              'A = ∫ₐᵇ y(t) · x\'(t) dt',
              'A = ∫ₐᵇ g(t) · f\'(t) dt',
              'A = ½|∮(x dy - y dx)|',
              'Watch the direction of traversal (may need absolute value)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Area under parametric curve: A = ∫ₐᵇ y(t) · x\'(t) dt. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Watch the direction of traversal (may…:',
            options: [
              'A = ∫ₐᵇ g(t) · f\'(t) dt',
              'Watch the direction of traversal (may need absolute value)',
              'A = ½|∮(x dy - y dx)|',
              'A = ∫ₐᵇ y(t) · x\'(t) dt'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Watch the direction of traversal (may need absolute value). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'param6-detail',
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
      id: 'param6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Closed curve area?',
            options: [
              'A = ∫ₐᵇ y(t) · x\'(t) dt',
              'A = ½|∮(x dy - y dx)|',
              'Watch the direction of traversal (may need absolute value)',
              'A = ∫ₐᵇ g(t) · f\'(t) dt'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Closed curve area: A = ½|∮(x dy - y dx)|. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'param6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area under parametric curve',
            options: ['A = ½|∮(x dy - y dx)|', 'Watch the direction of traversal (may need absolute value)', 'A = ∫ₐᵇ y(t) · x\'(t) dt', 'A = ∫ₐᵇ g(t) · f\'(t) dt']
          },
          {
            label: 'Or equivalently',
            options: ['Watch the direction of traversal (may need absolute value)', 'A = ½|∮(x dy - y dx)|', 'A = ∫ₐᵇ g(t) · f\'(t) dt', 'A = ∫ₐᵇ y(t) · x\'(t) dt']
          },
          {
            label: 'Closed curve area',
            options: ['A = ∫ₐᵇ g(t) · f\'(t) dt', 'A = ∫ₐᵇ y(t) · x\'(t) dt', 'Watch the direction of traversal (may need absolute value)', 'A = ½|∮(x dy - y dx)|']
          }
        ],
        correctAnswers: ['A = ∫ₐᵇ y(t) · x\'(t) dt', 'A = ∫ₐᵇ g(t) · f\'(t) dt', 'A = ½|∮(x dy - y dx)|'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Area under parametric curve: A = ∫ₐᵇ y(t) · x\'(t) dt. Or equivalently: A = ∫ₐᵇ g(t) · f\'(t) dt. Closed curve area: A = ½|∮(x dy - y dx)|.'
      }
    }
  ]
}
