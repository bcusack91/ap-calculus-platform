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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "IVT" refer to in precalculus?',
            options: [
              'IVT does not tell you the exact value of c',
              'Used to prove existence of roots (zeros)',
              'If f(a) and f(b) have opposite signs, there is a zero between a and b',
              'if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N'
            ],
            correctAnswer: 3,
            explanation: 'Correct — IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about If f(a) and f(b) have opposite signs,…?',
            options: [
              'IVT does not tell you the exact value of c',
              'Used to prove existence of roots (zeros)',
              'If f(a) and f(b) have opposite signs, there is a zero between a and b',
              'if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If f(a) and f(b) have opposite signs, there is a zero between a and b. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IVT',
            options: ['if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N', 'Used to prove existence of roots (zeros)', 'IVT does not tell you the exact value of c', 'If f(a) and f(b) have opposite signs, there is a zero between a and b']
          },
          {
            label: 'Used to prove existence of roots (zeros)',
            options: ['if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N', 'If f(a) and f(b) have opposite signs, there is a zero between a and b', 'Used to prove existence of roots (zeros)', 'IVT does not tell you the exact value of c']
          },
          {
            label: 'If f(a) and f(b) have opposite signs,…',
            options: ['if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N', 'IVT does not tell you the exact value of c', 'If f(a) and f(b) have opposite signs, there is a zero between a and b', 'Used to prove existence of roots (zeros)']
          }
        ],
        correctAnswers: ['if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N', 'Used to prove existence of roots (zeros)', 'If f(a) and f(b) have opposite signs, there is a zero between a and b'],
        hint1: 'Think about what each concept specifically describes in Intermediate Value Theorem.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Intermediate Value Theorem describes a specific idea. IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N. Used to prove existence of roots (zeros). If f(a) and f(b) have opposite signs, there is a zero between a and b.'
      }
    }
  ]
}
