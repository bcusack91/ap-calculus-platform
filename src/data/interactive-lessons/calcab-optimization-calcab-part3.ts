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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Extreme Value Theorem" refer to in calculus?',
            options: [
              'Evaluate f at all critical points in (a,b) and at endpoints a and b',
              'The largest value is the global maximum; the smallest is the global minimum',
              'a continuous function on [a,b] attains a global max and min',
              'Works only on closed, bounded intervals'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Extreme Value Theorem: a continuous function on [a,b] attains a global max and min. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about The largest value is the global…?',
            options: [
              'a continuous function on [a,b] attains a global max and min',
              'The largest value is the global maximum; the smallest is the global minimum',
              'Works only on closed, bounded intervals',
              'Evaluate f at all critical points in (a,b) and at endpoints a and b'
            ],
            correctAnswer: 1,
            explanation: 'Correct — The largest value is the global maximum; the smallest is the global minimum. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Closed Interval Method, which correctly describes Works only on closed, bounded intervals?',
            options: [
              'Evaluate f at all critical points in (a,b) and at endpoints a and b',
              'The largest value is the global maximum; the smallest is the global minimum',
              'Works only on closed, bounded intervals',
              'a continuous function on [a,b] attains a global max and min'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Works only on closed, bounded intervals. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'optim3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Extreme Value Theorem',
            options: ['Works only on closed, bounded intervals', 'a continuous function on [a,b] attains a global max and min', 'The largest value is the global maximum; the smallest is the global minimum', 'Evaluate f at all critical points in (a,b) and at endpoints a and b']
          },
          {
            label: 'Evaluate f at all critical points in…',
            options: ['The largest value is the global maximum; the smallest is the global minimum', 'a continuous function on [a,b] attains a global max and min', 'Evaluate f at all critical points in (a,b) and at endpoints a and b', 'Works only on closed, bounded intervals']
          },
          {
            label: 'The largest value is the global…',
            options: ['a continuous function on [a,b] attains a global max and min', 'Evaluate f at all critical points in (a,b) and at endpoints a and b', 'The largest value is the global maximum; the smallest is the global minimum', 'Works only on closed, bounded intervals']
          }
        ],
        correctAnswers: ['a continuous function on [a,b] attains a global max and min', 'Evaluate f at all critical points in (a,b) and at endpoints a and b', 'The largest value is the global maximum; the smallest is the global minimum'],
        hint1: 'Think about what each concept specifically describes in Closed Interval Method.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Closed Interval Method describes a specific idea. Extreme Value Theorem: a continuous function on [a,b] attains a global max and min. Evaluate f at all critical points in (a,b) and at endpoints a and b. The largest value is the global maximum; the smallest is the global minimum.'
      }
    }
  ]
}
