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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes IVT?',
            options: [
              'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c',
              'Use IVT to show existence of solutions',
              'show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs',
              'IVT requires continuity — always state this condition'
            ],
            correctAnswer: 0,
            explanation: 'Correct — IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Example:',
            options: [
              'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c',
              'IVT requires continuity — always state this condition',
              'show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs',
              'Use IVT to show existence of solutions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Example: show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Intermediate Value Theorem Applications, which correctly describes IVT requires continuity — always state…?',
            options: [
              'show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs',
              'Use IVT to show existence of solutions',
              'IVT requires continuity — always state this condition',
              'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c'
            ],
            correctAnswer: 2,
            explanation: 'Correct — IVT requires continuity — always state this condition. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'theor3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IVT',
            options: ['show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs', 'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c', 'Use IVT to show existence of solutions', 'IVT requires continuity — always state this condition']
          },
          {
            label: 'Example',
            options: ['IVT requires continuity — always state this condition', 'Use IVT to show existence of solutions', 'show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs', 'if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c']
          }
        ],
        correctAnswers: ['if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c', 'show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs'],
        hint1: 'Think about what each concept specifically describes in Intermediate Value Theorem Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Intermediate Value Theorem Applications describes a specific idea. IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c. Example: show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs.'
      }
    }
  ]
}
