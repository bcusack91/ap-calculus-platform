export const precalcContinuityPart4Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'conti4-intro',
      type: 'text' as const,
      content: `
# Intermediate Value Theorem

**Part 4 of 7 — Intermediate Value Theorem**

### 1. IVT

if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N

### 2. Used to prove existence of roots (zeros)

Used to prove existence of roots (zeros)

### 3. If f(a) and f(b) have opposite signs, there is a zero between a and b

If f(a) and f(b) have opposite signs, there is a zero between a and b

### 4. IVT does not tell you the exact value of c

IVT does not tell you the exact value of c
      `
    },
    {
      id: 'conti4-quiz1',
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
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N'
          },
          {
            question: 'In the context of intermediate value theorem, which is accurate?',
            options: [
              'If f(a) and f(b) have opposite signs, there is a zero between a and b',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If f(a) and f(b) have opposite signs, there is a zero between a and b'
          }
        ]
      }
    },
    {
      id: 'conti4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **IVT**: if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N
- **Used to prove existence of roots (zeros)**
- **If f(a) and f(b) have opposite signs, there is a zero between a and b**
- **IVT does not tell you the exact value of c**
      `
    },
    {
      id: 'conti4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to intermediate value theorem?',
            options: [
              'IVT does not tell you the exact value of c',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'IVT does not tell you the exact value of c'
          }
        ]
      }
    },
    {
      id: 'conti4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IVT',
            options: ['if f is continuous on [a,b] and N is between f(a) ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Used to prove existence of roots (zeros)',
            options: ['Used to prove existence of roots (zeros)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'If f(a) and f(b) have opposite signs, there is a zero between a and b',
            options: ['If f(a) and f(b) have opposite signs, there is a z', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['if f is continuous on [a,b] and N is between f(a) ', 'Used to prove existence of roots (zeros)', 'If f(a) and f(b) have opposite signs, there is a z'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Intermediate Value Theorem.'
      }
    }
  ]
}
