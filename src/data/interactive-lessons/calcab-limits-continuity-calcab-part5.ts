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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains IVT?',
            options: [
              'IVT guarantees existence of a solution but doesn\'t locate it',
              'Useful for proving a function has a root in an interval',
              'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)',
              'Requires continuity on the closed interval — cannot skip this condition'
            ],
            correctAnswer: 2,
            explanation: 'Correct — IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Useful for proving a function has a…:',
            options: [
              'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)',
              'Requires continuity on the closed interval — cannot skip this condition',
              'IVT guarantees existence of a solution but doesn\'t locate it',
              'Useful for proving a function has a root in an interval'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Useful for proving a function has a root in an interval. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Requires continuity on the closed…?',
            options: [
              'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)',
              'Useful for proving a function has a root in an interval',
              'Requires continuity on the closed interval — cannot skip this condition',
              'IVT guarantees existence of a solution but doesn\'t locate it'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Requires continuity on the closed interval — cannot skip this condition. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'limit5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IVT',
            options: ['Useful for proving a function has a root in an interval', 'Requires continuity on the closed interval — cannot skip this condition', 'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)', 'IVT guarantees existence of a solution but doesn\'t locate it']
          },
          {
            label: 'IVT guarantees existence of a solution…',
            options: ['Requires continuity on the closed interval — cannot skip this condition', 'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)', 'IVT guarantees existence of a solution but doesn\'t locate it', 'Useful for proving a function has a root in an interval']
          },
          {
            label: 'Useful for proving a function has a…',
            options: ['if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)', 'Requires continuity on the closed interval — cannot skip this condition', 'Useful for proving a function has a root in an interval', 'IVT guarantees existence of a solution but doesn\'t locate it']
          }
        ],
        correctAnswers: ['if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)', 'IVT guarantees existence of a solution but doesn\'t locate it', 'Useful for proving a function has a root in an interval'],
        hint1: 'Think about what each concept specifically describes in Intermediate Value Theorem.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Intermediate Value Theorem describes a specific idea. IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b). IVT guarantees existence of a solution but doesn\'t locate it. Useful for proving a function has a root in an interval.'
      }
    }
  ]
}
