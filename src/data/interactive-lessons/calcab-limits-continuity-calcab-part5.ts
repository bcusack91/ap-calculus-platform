export const calcABLimitsContinuityPart5Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit5-intro',
      type: 'text' as const,
      content: `
# Intermediate Value Theorem

**Part 5 of 7 — Intermediate Value Theorem**

### 1. IVT

if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)

### 2. IVT guarantees existence of a solution but doesn't locate it

IVT guarantees existence of a solution but doesn't locate it

### 3. Useful for proving a function has a root in an interval

Useful for proving a function has a root in an interval

### 4. Requires continuity on the closed interval — cannot skip this condition

Requires continuity on the closed interval — cannot skip this condition
      `
    },
    {
      id: 'limit5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of intermediate value theorem?',
            options: [
              'IVT',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)'
          },
          {
            question: 'In the context of intermediate value theorem, which is accurate?',
            options: [
              'Useful for proving a function has a root in an interval',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Useful for proving a function has a root in an interval'
          }
        ]
      }
    },
    {
      id: 'limit5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **IVT**: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)
- **IVT guarantees existence of a solution but doesn't locate it**
- **Useful for proving a function has a root in an interval**
- **Requires continuity on the closed interval — cannot skip this condition**
      `
    },
    {
      id: 'limit5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to intermediate value theorem?',
            options: [
              'Requires continuity on the closed interval — cannot skip this condition',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Requires continuity on the closed interval — cannot skip this condition'
          }
        ]
      }
    },
    {
      id: 'limit5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IVT',
            options: ['if f is continuous on [a,b] and N is between f(a) ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'IVT guarantees existence of a solution but doesn\'t locate it',
            options: ['IVT guarantees existence of a solution but doesn\'t', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Useful for proving a function has a root in an interval',
            options: ['Useful for proving a function has a root in an int', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['if f is continuous on [a,b] and N is between f(a) ', 'IVT guarantees existence of a solution but doesn\'t', 'Useful for proving a function has a root in an int'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Intermediate Value Theorem.'
      }
    }
  ]
}
