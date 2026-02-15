export const calcBCEulerAdvPart7Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Slope fields show dy/dx at each (x,y) point

Slope fields show dy/dx at each (x,y) point

### 2. Match slope field patterns to differential equations

Match slope field patterns to differential equations

### 3. Isoclines

curves where the slope is constant

### 4. Particular solutions follow the flow of the slope field

Particular solutions follow the flow of the slope field
      `
    },
    {
      id: 'euler7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Slope fields show dy/dx at each (x,y) point',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Slope fields show dy/dx at each (x,y) point'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'curves where the slope is constant',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Isoclines: curves where the slope is constant'
          }
        ]
      }
    },
    {
      id: 'euler7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Slope fields show dy/dx at each (x,y) point**
- **Match slope field patterns to differential equations**
- **Isoclines**: curves where the slope is constant
- **Particular solutions follow the flow of the slope field**
      `
    },
    {
      id: 'euler7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'Particular solutions follow the flow of the slope field',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Particular solutions follow the flow of the slope field'
          }
        ]
      }
    },
    {
      id: 'euler7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Slope fields show dy/dx at each (x,y) point',
            options: ['Slope fields show dy/dx at each (x,y) point', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Match slope field patterns to differential equations',
            options: ['Match slope field patterns to differential equatio', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Isoclines',
            options: ['curves where the slope is constant', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Slope fields show dy/dx at each (x,y) point', 'Match slope field patterns to differential equatio', 'curves where the slope is constant'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
