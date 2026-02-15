export const calcABOptimizationPart3Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'optim3-intro',
      type: 'text' as const,
      content: `
# Closed Interval Method

**Part 3 of 7 — Closed Interval Method**

### 1. Extreme Value Theorem

a continuous function on [a,b] attains a global max and min

### 2. Evaluate f at all critical points in (a,b) and at endpoints a and b

Evaluate f at all critical points in (a,b) and at endpoints a and b

### 3. The largest value is the global maximum; the smallest is the global minimum

The largest value is the global maximum; the smallest is the global minimum

### 4. Works only on closed, bounded intervals

Works only on closed, bounded intervals
      `
    },
    {
      id: 'optim3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of closed interval method?',
            options: [
              'Extreme Value Theorem',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Extreme Value Theorem: a continuous function on [a,b] attains a global max and min'
          },
          {
            question: 'In the context of closed interval method, which is accurate?',
            options: [
              'The largest value is the global maximum; the smallest is the global minimum',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The largest value is the global maximum; the smallest is the global minimum'
          }
        ]
      }
    },
    {
      id: 'optim3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Extreme Value Theorem**: a continuous function on [a,b] attains a global max and min
- **Evaluate f at all critical points in (a,b) and at endpoints a and b**
- **The largest value is the global maximum; the smallest is the global minimum**
- **Works only on closed, bounded intervals**
      `
    },
    {
      id: 'optim3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to closed interval method?',
            options: [
              'Works only on closed, bounded intervals',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Works only on closed, bounded intervals'
          }
        ]
      }
    },
    {
      id: 'optim3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Extreme Value Theorem',
            options: ['a continuous function on [a,b] attains a global ma', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Evaluate f at all critical points in (a,b) and at endpoints a and b',
            options: ['Evaluate f at all critical points in (a,b) and at ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The largest value is the global maximum; the smallest is the global minimum',
            options: ['The largest value is the global maximum; the small', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['a continuous function on [a,b] attains a global ma', 'Evaluate f at all critical points in (a,b) and at ', 'The largest value is the global maximum; the small'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Closed Interval Method.'
      }
    }
  ]
}
