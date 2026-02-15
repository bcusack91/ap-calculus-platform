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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of alternating series error vs lagrange?',
            options: [
              'For alternating Taylor series',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'For alternating Taylor series: use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|'
          },
          {
            question: 'In the context of alternating series error vs lagrange, which is accurate?',
            options: [
              'Use alternating series bound when the series alternates in sign',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Use alternating series bound when the series alternates in sign'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alternating series error vs lagrange?',
            options: [
              'Use Lagrange bound when the series doesn\'t alternate or you need a general bound',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Use Lagrange bound when the series doesn\'t alternate or you need a general bound'
          }
        ]
      }
    },
    {
      id: 'lagra5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For alternating Taylor series',
            options: ['use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'This is often tighter (better) than the Lagrange bound',
            options: ['This is often tighter (better) than the Lagrange b', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Use alternating series bound when the series alternates in sign',
            options: ['Use alternating series bound when the series alter', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'This is often tighter (better) than the Lagrange b', 'Use alternating series bound when the series alter'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Alternating Series Error vs Lagrange.'
      }
    }
  ]
}
