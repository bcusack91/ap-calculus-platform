export const calcABTheoremsPart3Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'theor3-intro',
      type: 'text' as const,
      content: `
# Intermediate Value Theorem Applications

**Part 3 of 7 — Intermediate Value Theorem Applications**

### 1. IVT

if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c

### 2. Use IVT to show existence of solutions

Use IVT to show existence of solutions

### 3. Example

show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs

### 4. IVT requires continuity — always state this condition

IVT requires continuity — always state this condition
      `
    },
    {
      id: 'theor3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of intermediate value theorem applications?',
            options: [
              'IVT',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c'
          },
          {
            question: 'In the context of intermediate value theorem applications, which is accurate?',
            options: [
              'show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Example: show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs'
          }
        ]
      }
    },
    {
      id: 'theor3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **IVT**: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c
- **Use IVT to show existence of solutions**
- **Example**: show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs
- **IVT requires continuity — always state this condition**
      `
    },
    {
      id: 'theor3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to intermediate value theorem applications?',
            options: [
              'IVT requires continuity — always state this condition',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'IVT requires continuity — always state this condition'
          }
        ]
      }
    },
    {
      id: 'theor3-dropdown',
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
            label: 'Use IVT to show existence of solutions',
            options: ['Use IVT to show existence of solutions', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Example',
            options: ['show f(x) = 0 has a solution by finding a and b wh', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['if f is continuous on [a,b] and N is between f(a) ', 'Use IVT to show existence of solutions', 'show f(x) = 0 has a solution by finding a and b wh'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Intermediate Value Theorem Applications.'
      }
    }
  ]
}
