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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of rearrangement of series?',
            options: [
              'An absolutely convergent series can be rearranged without changing the sum',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'An absolutely convergent series can be rearranged without changing the sum'
          },
          {
            question: 'In the context of rearrangement of series, which is accurate?',
            options: [
              'This is why absolute convergence is "better" than conditional',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'This is why absolute convergence is "better" than conditional'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to rearrangement of series?',
            options: [
              'just determine absolute vs conditional convergence',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'On the AP exam: just determine absolute vs conditional convergence'
          }
        ]
      }
    },
    {
      id: 'alter5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An absolutely convergent series can be rearranged without changing the sum',
            options: ['An absolutely convergent series can be rearranged ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'A conditionally convergent series can be rearranged to converge to any value (Riemann)',
            options: ['A conditionally convergent series can be rearrange', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'This is why absolute convergence is "better" than conditional',
            options: ['This is why absolute convergence is "better" than ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['An absolutely convergent series can be rearranged ', 'A conditionally convergent series can be rearrange', 'This is why absolute convergence is "better" than '],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Rearrangement of Series.'
      }
    }
  ]
}
