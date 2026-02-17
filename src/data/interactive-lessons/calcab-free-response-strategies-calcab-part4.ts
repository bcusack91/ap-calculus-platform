export const calcABFreeResponsePart4Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'free-4-intro',
      type: 'text' as const,
      content: `
# Rate & Accumulation Problems

**Part 4 of 7 — Rate & Accumulation Problems**

### 1. Total amount = ∫ₐᵇ rate(t)dt

Total amount = ∫ₐᵇ rate(t)dt

### 2. Interpret ∫ₐᵇ r(t)dt in context with units

Interpret ∫ₐᵇ r(t)dt in context with units

### 3. "At time t = c, the rate is..." vs "The total from a to b is..."

"At time t = c, the rate is..." vs "The total from a to b is..."

### 4. Average value = (1/(b-a))∫ₐᵇ f(t)dt

Average value = (1/(b-a))∫ₐᵇ f(t)dt
      `
    },
    {
      id: 'free-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Total amount = ∫ₐᵇ rate(t)dt?',
            options: [
              '"At time t = c, the rate is..." vs "The total from a to b is..."',
              'Interpret ∫ₐᵇ r(t)dt in context with units',
              'Total amount = ∫ₐᵇ rate(t)dt',
              'Average value = (1/(b-a))∫ₐᵇ f(t)dt'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Total amount = ∫ₐᵇ rate(t)dt. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Rate & Accumulation Problems, which explains "At time t = c, the rate is..." vs "The…?',
            options: [
              '"At time t = c, the rate is..." vs "The total from a to b is..."',
              'Interpret ∫ₐᵇ r(t)dt in context with units',
              'Average value = (1/(b-a))∫ₐᵇ f(t)dt',
              'Total amount = ∫ₐᵇ rate(t)dt'
            ],
            correctAnswer: 0,
            explanation: 'Correct — "At time t = c, the rate is..." vs "The total from a to b is...". Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'free-4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Total amount = ∫ₐᵇ rate(t)dt**
- **Interpret ∫ₐᵇ r(t)dt in context with units**
- **"At time t = c, the rate is..." vs "The total from a to b is..."**
- **Average value = (1/(b-a))∫ₐᵇ f(t)dt**
      `
    },
    {
      id: 'free-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Rate & Accumulation Problems, which correctly describes Average value = (1/(b-a))∫ₐᵇ f(t)dt?',
            options: [
              '"At time t = c, the rate is..." vs "The total from a to b is..."',
              'Average value = (1/(b-a))∫ₐᵇ f(t)dt',
              'Interpret ∫ₐᵇ r(t)dt in context with units',
              'Total amount = ∫ₐᵇ rate(t)dt'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Average value = (1/(b-a))∫ₐᵇ f(t)dt. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'free-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Total amount = ∫ₐᵇ rate(t)dt',
            options: ['Total amount = ∫ₐᵇ rate(t)dt', 'Interpret ∫ₐᵇ r(t)dt in context with units', 'Average value = (1/(b-a))∫ₐᵇ f(t)dt', '"At time t = c, the rate is..." vs "The total from a to b is..."']
          },
          {
            label: 'Interpret ∫ₐᵇ r(t)dt in context with…',
            options: ['Total amount = ∫ₐᵇ rate(t)dt', 'Interpret ∫ₐᵇ r(t)dt in context with units', '"At time t = c, the rate is..." vs "The total from a to b is..."', 'Average value = (1/(b-a))∫ₐᵇ f(t)dt']
          },
          {
            label: '"At time t = c, the rate is..." vs "The…',
            options: ['Interpret ∫ₐᵇ r(t)dt in context with units', 'Total amount = ∫ₐᵇ rate(t)dt', 'Average value = (1/(b-a))∫ₐᵇ f(t)dt', '"At time t = c, the rate is..." vs "The total from a to b is..."']
          }
        ],
        correctAnswers: ['Total amount = ∫ₐᵇ rate(t)dt', 'Interpret ∫ₐᵇ r(t)dt in context with units', '"At time t = c, the rate is..." vs "The total from a to b is..."'],
        hint1: 'Think about what each concept specifically describes in Rate & Accumulation Problems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Rate & Accumulation Problems describes a specific idea. Total amount = ∫ₐᵇ rate(t)dt. Interpret ∫ₐᵇ r(t)dt in context with units. "At time t = c, the rate is..." vs "The total from a to b is...".'
      }
    }
  ]
}
