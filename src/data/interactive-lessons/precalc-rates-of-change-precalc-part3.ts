export const precalcRatesOfChangePart3Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'rates3-intro',
      type: 'text' as const,
      content: `
# Instantaneous Rate of Change

**Part 3 of 7 — Instantaneous Rate of Change**

### 1. Instantaneous rate of change

limit of average rate as interval shrinks to zero

### 2. lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a

lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a

### 3. This is the slope of the tangent line at x = a

This is the slope of the tangent line at x = a

### 4. Preview of the derivative from calculus

Preview of the derivative from calculus
      `
    },
    {
      id: 'rates3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of instantaneous rate of change?',
            options: [
              'Instantaneous rate of change',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Instantaneous rate of change: limit of average rate as interval shrinks to zero'
          },
          {
            question: 'In the context of instantaneous rate of change, which is accurate?',
            options: [
              'This is the slope of the tangent line at x = a',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'This is the slope of the tangent line at x = a'
          }
        ]
      }
    },
    {
      id: 'rates3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Instantaneous rate of change**: limit of average rate as interval shrinks to zero
- **lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a**
- **This is the slope of the tangent line at x = a**
- **Preview of the derivative from calculus**
      `
    },
    {
      id: 'rates3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to instantaneous rate of change?',
            options: [
              'Preview of the derivative from calculus',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Preview of the derivative from calculus'
          }
        ]
      }
    },
    {
      id: 'rates3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Instantaneous rate of change',
            options: ['limit of average rate as interval shrinks to zero', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a',
            options: ['lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'This is the slope of the tangent line at x = a',
            options: ['This is the slope of the tangent line at x = a', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['limit of average rate as interval shrinks to zero', 'lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous', 'This is the slope of the tangent line at x = a'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Instantaneous Rate of Change.'
      }
    }
  ]
}
