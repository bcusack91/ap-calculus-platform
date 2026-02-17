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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Continuous on [a,b]" refer to in precalculus?',
            options: [
              'continuous at every point in (a,b), and one-sided limits match at endpoints',
              'Sums, products, quotients, and compositions of continuous functions are continuous (where defined)',
              'Absolute value of a continuous function is continuous',
              'continuous at every interior point'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Continuous on [a,b]: continuous at every point in (a,b), and one-sided limits match at endpoints. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Sums, products, quotients, and…?',
            options: [
              'Absolute value of a continuous function is continuous',
              'Sums, products, quotients, and compositions of continuous functions are continuous (where defined)',
              'continuous at every interior point',
              'continuous at every point in (a,b), and one-sided limits match at endpoints'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Sums, products, quotients, and compositions of continuous functions are continuous (where defined). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Continuous on [a,b]',
            options: ['Sums, products, quotients, and compositions of continuous functions are continuous (where defined)', 'continuous at every interior point', 'Absolute value of a continuous function is continuous', 'continuous at every point in (a,b), and one-sided limits match at endpoints']
          },
          {
            label: 'Continuous on (a,b)',
            options: ['Absolute value of a continuous function is continuous', 'continuous at every interior point', 'Sums, products, quotients, and compositions of continuous functions are continuous (where defined)', 'continuous at every point in (a,b), and one-sided limits match at endpoints']
          }
        ],
        correctAnswers: ['continuous at every point in (a,b), and one-sided limits match at endpoints', 'continuous at every interior point'],
        hint1: 'Think about what each concept specifically describes in Continuity on an Interval.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Continuity on an Interval describes a specific idea. Continuous on [a,b]: continuous at every point in (a,b), and one-sided limits match at endpoints. Continuous on (a,b): continuous at every interior point.'
      }
    }
  ]
}
