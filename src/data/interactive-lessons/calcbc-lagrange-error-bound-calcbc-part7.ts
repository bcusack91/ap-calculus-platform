export const calcBCLagrangePart7Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lagra7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'lagra7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains For alternating Taylor series?',
            options: [
              'This is often tighter (better) than the Lagrange bound',
              'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|',
              'Use Lagrange bound when the series doesn\'t alternate or you need a general bound',
              'Use alternating series bound when the series alternates in sign'
            ],
            correctAnswer: 1,
            explanation: 'Correct — For alternating Taylor series: use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Use alternating series bound when the…?',
            options: [
              'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|',
              'Use Lagrange bound when the series doesn\'t alternate or you need a general bound',
              'This is often tighter (better) than the Lagrange bound',
              'Use alternating series bound when the series alternates in sign'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Use alternating series bound when the series alternates in sign. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'lagra7-detail',
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
      id: 'lagra7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Use Lagrange bound when the series… is correct?',
            options: [
              'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|',
              'Use Lagrange bound when the series doesn\'t alternate or you need a general bound',
              'Use alternating series bound when the series alternates in sign',
              'This is often tighter (better) than the Lagrange bound'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Use Lagrange bound when the series doesn\'t alternate or you need a general bound. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'lagra7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For alternating Taylor series',
            options: ['Use Lagrange bound when the series doesn\'t alternate or you need a general bound', 'This is often tighter (better) than the Lagrange bound', 'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'Use alternating series bound when the series alternates in sign']
          },
          {
            label: 'This is often tighter (better) than the…',
            options: ['Use Lagrange bound when the series doesn\'t alternate or you need a general bound', 'Use alternating series bound when the series alternates in sign', 'This is often tighter (better) than the Lagrange bound', 'use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|']
          },
          {
            label: 'Use alternating series bound when the…',
            options: ['use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'Use alternating series bound when the series alternates in sign', 'This is often tighter (better) than the Lagrange bound', 'Use Lagrange bound when the series doesn\'t alternate or you need a general bound']
          }
        ],
        correctAnswers: ['use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'This is often tighter (better) than the Lagrange bound', 'Use alternating series bound when the series alternates in sign'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. For alternating Taylor series: use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|. This is often tighter (better) than the Lagrange bound. Use alternating series bound when the series alternates in sign.'
      }
    }
  ]
}
