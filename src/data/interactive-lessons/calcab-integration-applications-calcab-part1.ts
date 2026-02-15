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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of area review & setup?',
            options: [
              'Area between curves',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Area between curves: ∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy'
          },
          {
            question: 'In the context of area review & setup, which is accurate?',
            options: [
              'Split at intersections where top/bottom switch',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Split at intersections where top/bottom switch'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to area review & setup?',
            options: [
              'Always verify which function is on top by testing a point',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Always verify which function is on top by testing a point'
          }
        ]
      }
    },
    {
      id: 'integ1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area between curves',
            options: ['∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - le', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Choose the variable that makes bounds and functions simplest',
            options: ['Choose the variable that makes bounds and function', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Split at intersections where top/bottom switch',
            options: ['Split at intersections where top/bottom switch', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - le', 'Choose the variable that makes bounds and function', 'Split at intersections where top/bottom switch'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Area Review & Setup.'
      }
    }
  ]
}
