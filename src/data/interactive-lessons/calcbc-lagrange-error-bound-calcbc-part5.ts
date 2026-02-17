export const calcBCLagrangePart5Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lagra5-intro',
      type: 'text' as const,
      content: `
# Alternating Series Error vs Lagrange

**Part 5 of 7 — Alternating Series Error vs Lagrange**

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
      id: 'lagra5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains For alternating Taylor series?',
            options: [
              'Use alternating series bound when the series alternates in sign',
              'This is often tighter (better) than the Lagrange bound',
              'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|',
              'Use Lagrange bound when the series doesn\'t alternate or you need a general bound'
            ],
            correctAnswer: 2,
            explanation: 'Correct — For alternating Taylor series: use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Alternating Series Error vs Lagrange, which explains Use alternating series bound when the…?',
            options: [
              'This is often tighter (better) than the Lagrange bound',
              'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|',
              'Use alternating series bound when the series alternates in sign',
              'Use Lagrange bound when the series doesn\'t alternate or you need a general bound'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Use alternating series bound when the series alternates in sign. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'lagra5-detail',
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
      id: 'lagra5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Use Lagrange bound when the series…?',
            options: [
              'Use Lagrange bound when the series doesn\'t alternate or you need a general bound',
              'This is often tighter (better) than the Lagrange bound',
              'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|',
              'Use alternating series bound when the series alternates in sign'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Use Lagrange bound when the series doesn\'t alternate or you need a general bound. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'lagra5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For alternating Taylor series',
            options: ['This is often tighter (better) than the Lagrange bound', 'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'Use alternating series bound when the series alternates in sign', 'Use Lagrange bound when the series doesn\'t alternate or you need a general bound']
          },
          {
            label: 'This is often tighter (better) than the…',
            options: ['use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'Use Lagrange bound when the series doesn\'t alternate or you need a general bound', 'Use alternating series bound when the series alternates in sign', 'This is often tighter (better) than the Lagrange bound']
          },
          {
            label: 'Use alternating series bound when the…',
            options: ['Use Lagrange bound when the series doesn\'t alternate or you need a general bound', 'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'Use alternating series bound when the series alternates in sign', 'This is often tighter (better) than the Lagrange bound']
          }
        ],
        correctAnswers: ['use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'This is often tighter (better) than the Lagrange bound', 'Use alternating series bound when the series alternates in sign'],
        hint1: 'Think about what each concept specifically describes in Alternating Series Error vs Lagrange.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Alternating Series Error vs Lagrange describes a specific idea. For alternating Taylor series: use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|. This is often tighter (better) than the Lagrange bound. Use alternating series bound when the series alternates in sign.'
      }
    }
  ]
}
