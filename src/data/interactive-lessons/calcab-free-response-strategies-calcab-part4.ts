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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of rate & accumulation problems?',
            options: [
              'Total amount = ∫ₐᵇ rate(t)dt',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Total amount = ∫ₐᵇ rate(t)dt'
          },
          {
            question: 'In the context of rate & accumulation problems, which is accurate?',
            options: [
              '"At time t = c, the rate is..." vs "The total from a to b is..."',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '"At time t = c, the rate is..." vs "The total from a to b is..."'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to rate & accumulation problems?',
            options: [
              'Average value = (1/(b-a))∫ₐᵇ f(t)dt',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Average value = (1/(b-a))∫ₐᵇ f(t)dt'
          }
        ]
      }
    },
    {
      id: 'free-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Total amount = ∫ₐᵇ rate(t)dt',
            options: ['Total amount = ∫ₐᵇ rate(t)dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Interpret ∫ₐᵇ r(t)dt in context with units',
            options: ['Interpret ∫ₐᵇ r(t)dt in context with units', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '"At time t = c, the rate is..." vs "The total from a to b is..."',
            options: ['"At time t = c, the rate is..." vs "The total from', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Total amount = ∫ₐᵇ rate(t)dt', 'Interpret ∫ₐᵇ r(t)dt in context with units', '"At time t = c, the rate is..." vs "The total from'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Rate & Accumulation Problems.'
      }
    }
  ]
}
