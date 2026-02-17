export const calcABIntAppsPart1Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'integ1-intro',
      type: 'text' as const,
      content: `
# ∫ Integration Applications

**Part 1 of 7 — Area Review & Setup**

### 1. Area between curves

∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy

### 2. Choose the variable that makes bounds and functions simplest

Choose the variable that makes bounds and functions simplest

### 3. Split at intersections where top/bottom switch

Split at intersections where top/bottom switch

### 4. Always verify which function is on top by testing a point

Always verify which function is on top by testing a point
      `
    },
    {
      id: 'integ1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Area between curves?',
            options: [
              'Split at intersections where top/bottom switch',
              'Choose the variable that makes bounds and functions simplest',
              'Always verify which function is on top by testing a point',
              '∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Area between curves: ∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Split at intersections where top/bottom…?',
            options: [
              'Always verify which function is on top by testing a point',
              'Choose the variable that makes bounds and functions simplest',
              'Split at intersections where top/bottom switch',
              '∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Split at intersections where top/bottom switch. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'integ1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Area between curves**: ∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy
- **Choose the variable that makes bounds and functions simplest**
- **Split at intersections where top/bottom switch**
- **Always verify which function is on top by testing a point**
      `
    },
    {
      id: 'integ1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Always verify which function is on top…?',
            options: [
              'Split at intersections where top/bottom switch',
              'Always verify which function is on top by testing a point',
              '∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy',
              'Choose the variable that makes bounds and functions simplest'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Always verify which function is on top by testing a point. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area between curves',
            options: ['Split at intersections where top/bottom switch', 'Choose the variable that makes bounds and functions simplest', 'Always verify which function is on top by testing a point', '∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy']
          },
          {
            label: 'Choose the variable that makes bounds…',
            options: ['Choose the variable that makes bounds and functions simplest', 'Split at intersections where top/bottom switch', 'Always verify which function is on top by testing a point', '∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy']
          },
          {
            label: 'Split at intersections where top/bottom…',
            options: ['∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy', 'Always verify which function is on top by testing a point', 'Split at intersections where top/bottom switch', 'Choose the variable that makes bounds and functions simplest']
          }
        ],
        correctAnswers: ['∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy', 'Choose the variable that makes bounds and functions simplest', 'Split at intersections where top/bottom switch'],
        hint1: 'Think about what each concept specifically describes in Integration Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integration Applications describes a specific idea. Area between curves: ∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy. Choose the variable that makes bounds and functions simplest. Split at intersections where top/bottom switch.'
      }
    }
  ]
}
