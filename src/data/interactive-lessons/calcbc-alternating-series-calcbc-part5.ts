export const calcBCAlternatingPart5Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alter5-intro',
      type: 'text' as const,
      content: `
# Rearrangement of Series

**Part 5 of 7 — Rearrangement of Series**

### 1. An absolutely convergent series can be rearranged without changing the sum

An absolutely convergent series can be rearranged without changing the sum

### 2. A conditionally convergent series can be rearranged to converge to any value (Riemann)

A conditionally convergent series can be rearranged to converge to any value (Riemann)

### 3. This is why absolute convergence is "better" than conditional

This is why absolute convergence is "better" than conditional

### 4. On the AP exam

just determine absolute vs conditional convergence
      `
    },
    {
      id: 'alter5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "An absolutely convergent series can be…" refer to in calculus?',
            options: [
              'A conditionally convergent series can be rearranged to converge to any value (Riemann)',
              'An absolutely convergent series can be rearranged without changing the sum',
              'just determine absolute vs conditional convergence',
              'This is why absolute convergence is "better" than conditional'
            ],
            correctAnswer: 1,
            explanation: 'Correct — An absolutely convergent series can be rearranged without changing the sum. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about This is why absolute convergence is…?',
            options: [
              'This is why absolute convergence is "better" than conditional',
              'An absolutely convergent series can be rearranged without changing the sum',
              'just determine absolute vs conditional convergence',
              'A conditionally convergent series can be rearranged to converge to any value (Riemann)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — This is why absolute convergence is "better" than conditional. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alter5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **An absolutely convergent series can be rearranged without changing the sum**
- **A conditionally convergent series can be rearranged to converge to any value (Riemann)**
- **This is why absolute convergence is "better" than conditional**
- **On the AP exam**: just determine absolute vs conditional convergence
      `
    },
    {
      id: 'alter5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about On the AP exam is correct?',
            options: [
              'A conditionally convergent series can be rearranged to converge to any value (Riemann)',
              'just determine absolute vs conditional convergence',
              'An absolutely convergent series can be rearranged without changing the sum',
              'This is why absolute convergence is "better" than conditional'
            ],
            correctAnswer: 1,
            explanation: 'Correct — On the AP exam: just determine absolute vs conditional convergence. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'alter5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An absolutely convergent series can be…',
            options: ['just determine absolute vs conditional convergence', 'A conditionally convergent series can be rearranged to converge to any value (Riemann)', 'This is why absolute convergence is "better" than conditional', 'An absolutely convergent series can be rearranged without changing the sum']
          },
          {
            label: 'A conditionally convergent series can…',
            options: ['An absolutely convergent series can be rearranged without changing the sum', 'A conditionally convergent series can be rearranged to converge to any value (Riemann)', 'just determine absolute vs conditional convergence', 'This is why absolute convergence is "better" than conditional']
          },
          {
            label: 'This is why absolute convergence is…',
            options: ['A conditionally convergent series can be rearranged to converge to any value (Riemann)', 'This is why absolute convergence is "better" than conditional', 'just determine absolute vs conditional convergence', 'An absolutely convergent series can be rearranged without changing the sum']
          }
        ],
        correctAnswers: ['An absolutely convergent series can be rearranged without changing the sum', 'A conditionally convergent series can be rearranged to converge to any value (Riemann)', 'This is why absolute convergence is "better" than conditional'],
        hint1: 'Think about what each concept specifically describes in Rearrangement of Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Rearrangement of Series describes a specific idea. An absolutely convergent series can be rearranged without changing the sum. A conditionally convergent series can be rearranged to converge to any value (Riemann). This is why absolute convergence is "better" than conditional.'
      }
    }
  ]
}
