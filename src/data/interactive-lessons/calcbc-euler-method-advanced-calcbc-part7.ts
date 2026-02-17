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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Slope fields show dy/dx at each (x,y)…?',
            options: [
              'Particular solutions follow the flow of the slope field',
              'curves where the slope is constant',
              'Slope fields show dy/dx at each (x,y) point',
              'Match slope field patterns to differential equations'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Slope fields show dy/dx at each (x,y) point. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Isoclines?',
            options: [
              'Slope fields show dy/dx at each (x,y) point',
              'Match slope field patterns to differential equations',
              'curves where the slope is constant',
              'Particular solutions follow the flow of the slope field'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Isoclines: curves where the slope is constant. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Particular solutions follow the flow of…?',
            options: [
              'Match slope field patterns to differential equations',
              'Particular solutions follow the flow of the slope field',
              'Slope fields show dy/dx at each (x,y) point',
              'curves where the slope is constant'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Particular solutions follow the flow of the slope field. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'euler7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Slope fields show dy/dx at each (x,y)…',
            options: ['Particular solutions follow the flow of the slope field', 'curves where the slope is constant', 'Match slope field patterns to differential equations', 'Slope fields show dy/dx at each (x,y) point']
          },
          {
            label: 'Match slope field patterns to…',
            options: ['Particular solutions follow the flow of the slope field', 'Slope fields show dy/dx at each (x,y) point', 'Match slope field patterns to differential equations', 'curves where the slope is constant']
          },
          {
            label: 'Isoclines',
            options: ['Match slope field patterns to differential equations', 'curves where the slope is constant', 'Particular solutions follow the flow of the slope field', 'Slope fields show dy/dx at each (x,y) point']
          }
        ],
        correctAnswers: ['Slope fields show dy/dx at each (x,y) point', 'Match slope field patterns to differential equations', 'curves where the slope is constant'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Slope fields show dy/dx at each (x,y) point. Match slope field patterns to differential equations. Isoclines: curves where the slope is constant.'
      }
    }
  ]
}
