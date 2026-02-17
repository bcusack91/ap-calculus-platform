export const calcABLimitsContinuityPart6Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'limit6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains IVT?',
            options: [
              'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)',
              'Useful for proving a function has a root in an interval',
              'Requires continuity on the closed interval — cannot skip this condition',
              'IVT guarantees existence of a solution but doesn\'t locate it'
            ],
            correctAnswer: 0,
            explanation: 'Correct — IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Useful for proving a function has a…:',
            options: [
              'IVT guarantees existence of a solution but doesn\'t locate it',
              'Useful for proving a function has a root in an interval',
              'Requires continuity on the closed interval — cannot skip this condition',
              'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Useful for proving a function has a root in an interval. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'limit6-detail',
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
      id: 'limit6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Requires continuity on the closed…?',
            options: [
              'Requires continuity on the closed interval — cannot skip this condition',
              'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)',
              'IVT guarantees existence of a solution but doesn\'t locate it',
              'Useful for proving a function has a root in an interval'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Requires continuity on the closed interval — cannot skip this condition. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'limit6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IVT',
            options: ['Requires continuity on the closed interval — cannot skip this condition', 'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)', 'IVT guarantees existence of a solution but doesn\'t locate it', 'Useful for proving a function has a root in an interval']
          },
          {
            label: 'IVT guarantees existence of a solution…',
            options: ['Useful for proving a function has a root in an interval', 'IVT guarantees existence of a solution but doesn\'t locate it', 'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)', 'Requires continuity on the closed interval — cannot skip this condition']
          },
          {
            label: 'Useful for proving a function has a…',
            options: ['if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)', 'Useful for proving a function has a root in an interval', 'IVT guarantees existence of a solution but doesn\'t locate it', 'Requires continuity on the closed interval — cannot skip this condition']
          }
        ],
        correctAnswers: ['if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)', 'IVT guarantees existence of a solution but doesn\'t locate it', 'Useful for proving a function has a root in an interval'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b). IVT guarantees existence of a solution but doesn\'t locate it. Useful for proving a function has a root in an interval.'
      }
    }
  ]
}
