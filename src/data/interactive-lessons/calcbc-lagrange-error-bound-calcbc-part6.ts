export const calcBCLagrangePart6Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lagra6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. For alternating Taylor series

use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|

### 2. This is often tighter (better) than the Lagrange bound

This is often tighter (better) than the Lagrange bound

### 3. Use alternating series bound when the series alternates in sign

Use alternating series bound when the series alternates in sign

### 4. Use Lagrange bound when the series doesn't alternate or you need a general bound

Use Lagrange bound when the series doesn't alternate or you need a general bound
      `
    },
    {
      id: 'lagra6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains For alternating Taylor series?',
            options: [
              'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|',
              'Use alternating series bound when the series alternates in sign',
              'Use Lagrange bound when the series doesn\'t alternate or you need a general bound',
              'This is often tighter (better) than the Lagrange bound'
            ],
            correctAnswer: 0,
            explanation: 'Correct — For alternating Taylor series: use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Use alternating series bound when the…?',
            options: [
              'This is often tighter (better) than the Lagrange bound',
              'Use alternating series bound when the series alternates in sign',
              'Use Lagrange bound when the series doesn\'t alternate or you need a general bound',
              'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Use alternating series bound when the series alternates in sign. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'lagra6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **For alternating Taylor series**: use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|
- **This is often tighter (better) than the Lagrange bound**
- **Use alternating series bound when the series alternates in sign**
- **Use Lagrange bound when the series doesn't alternate or you need a general bound**
      `
    },
    {
      id: 'lagra6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Use Lagrange bound when the series…?',
            options: [
              'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|',
              'Use alternating series bound when the series alternates in sign',
              'Use Lagrange bound when the series doesn\'t alternate or you need a general bound',
              'This is often tighter (better) than the Lagrange bound'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Use Lagrange bound when the series doesn\'t alternate or you need a general bound. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'lagra6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For alternating Taylor series',
            options: ['use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'Use alternating series bound when the series alternates in sign', 'Use Lagrange bound when the series doesn\'t alternate or you need a general bound', 'This is often tighter (better) than the Lagrange bound']
          },
          {
            label: 'This is often tighter (better) than the…',
            options: ['Use Lagrange bound when the series doesn\'t alternate or you need a general bound', 'Use alternating series bound when the series alternates in sign', 'This is often tighter (better) than the Lagrange bound', 'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|']
          },
          {
            label: 'Use alternating series bound when the…',
            options: ['This is often tighter (better) than the Lagrange bound', 'Use alternating series bound when the series alternates in sign', 'Use Lagrange bound when the series doesn\'t alternate or you need a general bound', 'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|']
          }
        ],
        correctAnswers: ['use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'This is often tighter (better) than the Lagrange bound', 'Use alternating series bound when the series alternates in sign'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. For alternating Taylor series: use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|. This is often tighter (better) than the Lagrange bound. Use alternating series bound when the series alternates in sign.'
      }
    }
  ]
}
