export const calcBCAlternatingPart7Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alter7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'alter7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes An absolutely convergent series can be…?',
            options: [
              'This is why absolute convergence is "better" than conditional',
              'just determine absolute vs conditional convergence',
              'An absolutely convergent series can be rearranged without changing the sum',
              'A conditionally convergent series can be rearranged to converge to any value (Riemann)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — An absolutely convergent series can be rearranged without changing the sum. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes This is why absolute convergence is…:',
            options: [
              'A conditionally convergent series can be rearranged to converge to any value (Riemann)',
              'An absolutely convergent series can be rearranged without changing the sum',
              'This is why absolute convergence is "better" than conditional',
              'just determine absolute vs conditional convergence'
            ],
            correctAnswer: 2,
            explanation: 'Correct — This is why absolute convergence is "better" than conditional. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alter7-detail',
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
      id: 'alter7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes On the AP exam?',
            options: [
              'An absolutely convergent series can be rearranged without changing the sum',
              'A conditionally convergent series can be rearranged to converge to any value (Riemann)',
              'just determine absolute vs conditional convergence',
              'This is why absolute convergence is "better" than conditional'
            ],
            correctAnswer: 2,
            explanation: 'Correct — On the AP exam: just determine absolute vs conditional convergence. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'alter7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An absolutely convergent series can be…',
            options: ['just determine absolute vs conditional convergence', 'A conditionally convergent series can be rearranged to converge to any value (Riemann)', 'An absolutely convergent series can be rearranged without changing the sum', 'This is why absolute convergence is "better" than conditional']
          },
          {
            label: 'A conditionally convergent series can…',
            options: ['just determine absolute vs conditional convergence', 'An absolutely convergent series can be rearranged without changing the sum', 'A conditionally convergent series can be rearranged to converge to any value (Riemann)', 'This is why absolute convergence is "better" than conditional']
          },
          {
            label: 'This is why absolute convergence is…',
            options: ['This is why absolute convergence is "better" than conditional', 'just determine absolute vs conditional convergence', 'A conditionally convergent series can be rearranged to converge to any value (Riemann)', 'An absolutely convergent series can be rearranged without changing the sum']
          }
        ],
        correctAnswers: ['An absolutely convergent series can be rearranged without changing the sum', 'A conditionally convergent series can be rearranged to converge to any value (Riemann)', 'This is why absolute convergence is "better" than conditional'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. An absolutely convergent series can be rearranged without changing the sum. A conditionally convergent series can be rearranged to converge to any value (Riemann). This is why absolute convergence is "better" than conditional.'
      }
    }
  ]
}
