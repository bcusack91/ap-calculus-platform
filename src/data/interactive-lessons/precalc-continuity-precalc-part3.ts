export const precalcContinuityPart3Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'conti3-intro',
      type: 'text' as const,
      content: `
# Continuity on an Interval

**Part 3 of 7 — Continuity on an Interval**

### 1. Continuous on [a,b]

continuous at every point in (a,b), and one-sided limits match at endpoints

### 2. Continuous on (a,b)

continuous at every interior point

### 3. Sums, products, quotients, and compositions of continuous functions are continuous (where defined)

Sums, products, quotients, and compositions of continuous functions are continuous (where defined)

### 4. Absolute value of a continuous function is continuous

Absolute value of a continuous function is continuous
      `
    },
    {
      id: 'conti3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of continuity on an interval?',
            options: [
              'Continuous on [a,b]',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Continuous on [a,b]: continuous at every point in (a,b), and one-sided limits match at endpoints'
          },
          {
            question: 'In the context of continuity on an interval, which is accurate?',
            options: [
              'Sums, products, quotients, and compositions of continuous functions are continuous (where defined)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Sums, products, quotients, and compositions of continuous functions are continuous (where defined)'
          }
        ]
      }
    },
    {
      id: 'conti3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Continuous on [a,b]**: continuous at every point in (a,b), and one-sided limits match at endpoints
- **Continuous on (a,b)**: continuous at every interior point
- **Sums, products, quotients, and compositions of continuous functions are continuous (where defined)**
- **Absolute value of a continuous function is continuous**
      `
    },
    {
      id: 'conti3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to continuity on an interval?',
            options: [
              'Absolute value of a continuous function is continuous',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Absolute value of a continuous function is continuous'
          }
        ]
      }
    },
    {
      id: 'conti3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Continuous on [a,b]',
            options: ['continuous at every point in (a,b), and one-sided ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Continuous on (a,b)',
            options: ['continuous at every interior point', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Sums, products, quotients, and compositions of continuous functions are continuous (where defined)',
            options: ['Sums, products, quotients, and compositions of con', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['continuous at every point in (a,b), and one-sided ', 'continuous at every interior point', 'Sums, products, quotients, and compositions of con'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Continuity on an Interval.'
      }
    }
  ]
}
