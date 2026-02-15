export const precalcLimitsPart1Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'limit1-intro',
      type: 'text' as const,
      content: `
# 📈 Limits Introduction

**Part 1 of 7 — Intuitive Understanding of Limits**

### 1. Limit

the value f(x) approaches as x approaches a value c

### 2. Written as lim(x→c) f(x) = L

Written as lim(x→c) f(x) = L

### 3. The limit may exist even if f(c) is undefined

The limit may exist even if f(c) is undefined

### 4. Limits describe behavior near a point, not at the point

Limits describe behavior near a point, not at the point
      `
    },
    {
      id: 'limit1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of intuitive understanding of limits?',
            options: [
              'Limit',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Limit: the value f(x) approaches as x approaches a value c'
          },
          {
            question: 'In the context of intuitive understanding of limits, which is accurate?',
            options: [
              'The limit may exist even if f(c) is undefined',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The limit may exist even if f(c) is undefined'
          }
        ]
      }
    },
    {
      id: 'limit1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Limit**: the value f(x) approaches as x approaches a value c
- **Written as lim(x→c) f(x) = L**
- **The limit may exist even if f(c) is undefined**
- **Limits describe behavior near a point, not at the point**
      `
    },
    {
      id: 'limit1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to intuitive understanding of limits?',
            options: [
              'Limits describe behavior near a point, not at the point',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Limits describe behavior near a point, not at the point'
          }
        ]
      }
    },
    {
      id: 'limit1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Limit',
            options: ['the value f(x) approaches as x approaches a value ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Written as lim(x→c) f(x) = L',
            options: ['Written as lim(x→c) f(x) = L', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'The limit may exist even if f(c) is undefined',
            options: ['The limit may exist even if f(c) is undefined', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['the value f(x) approaches as x approaches a value ', 'Written as lim(x→c) f(x) = L', 'The limit may exist even if f(c) is undefined'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Intuitive Understanding of Limits.'
      }
    }
  ]
}
