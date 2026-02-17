export const calcBCEulerAdvPart5Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler5-intro',
      type: 'text' as const,
      content: `
# Slope Fields for BC

**Part 5 of 7 — Slope Fields for BC**

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
      id: 'euler5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Slope fields show dy/dx at each (x,y)…?',
            options: [
              'Slope fields show dy/dx at each (x,y) point',
              'Match slope field patterns to differential equations',
              'Particular solutions follow the flow of the slope field',
              'curves where the slope is constant'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Slope fields show dy/dx at each (x,y) point. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Isoclines:',
            options: [
              'curves where the slope is constant',
              'Match slope field patterns to differential equations',
              'Particular solutions follow the flow of the slope field',
              'Slope fields show dy/dx at each (x,y) point'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Isoclines: curves where the slope is constant. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'euler5-detail',
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
      id: 'euler5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Slope Fields for BC, which correctly describes Particular solutions follow the flow of…?',
            options: [
              'Particular solutions follow the flow of the slope field',
              'Slope fields show dy/dx at each (x,y) point',
              'Match slope field patterns to differential equations',
              'curves where the slope is constant'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Particular solutions follow the flow of the slope field. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'euler5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Slope fields show dy/dx at each (x,y)…',
            options: ['Slope fields show dy/dx at each (x,y) point', 'Particular solutions follow the flow of the slope field', 'Match slope field patterns to differential equations', 'curves where the slope is constant']
          },
          {
            label: 'Match slope field patterns to…',
            options: ['Slope fields show dy/dx at each (x,y) point', 'Match slope field patterns to differential equations', 'Particular solutions follow the flow of the slope field', 'curves where the slope is constant']
          },
          {
            label: 'Isoclines',
            options: ['Slope fields show dy/dx at each (x,y) point', 'Particular solutions follow the flow of the slope field', 'Match slope field patterns to differential equations', 'curves where the slope is constant']
          }
        ],
        correctAnswers: ['Slope fields show dy/dx at each (x,y) point', 'Match slope field patterns to differential equations', 'curves where the slope is constant'],
        hint1: 'Think about what each concept specifically describes in Slope Fields for BC.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Slope Fields for BC describes a specific idea. Slope fields show dy/dx at each (x,y) point. Match slope field patterns to differential equations. Isoclines: curves where the slope is constant.'
      }
    }
  ]
}
