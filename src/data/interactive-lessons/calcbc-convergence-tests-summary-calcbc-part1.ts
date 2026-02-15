export const calcBCConvergenceTestsPart1Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conve1-intro',
      type: 'text' as const,
      content: `
# ∮ Convergence Tests Summary

**Part 1 of 7 — Test Selection Strategy**

### 1. First

always check the Divergence Test — if lim aₙ ≠ 0, series diverges

### 2. If the series is geometric, use |r| < 1 criterion

If the series is geometric, use |r| < 1 criterion

### 3. If terms involve factorials or exponentials, try Ratio Test

If terms involve factorials or exponentials, try Ratio Test

### 4. If terms are similar to 1/nᵖ, try p-series or comparison

If terms are similar to 1/nᵖ, try p-series or comparison
      `
    },
    {
      id: 'conve1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of test selection strategy?',
            options: [
              'First',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'First: always check the Divergence Test — if lim aₙ ≠ 0, series diverges'
          },
          {
            question: 'In the context of test selection strategy, which is accurate?',
            options: [
              'If terms involve factorials or exponentials, try Ratio Test',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If terms involve factorials or exponentials, try Ratio Test'
          }
        ]
      }
    },
    {
      id: 'conve1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **First**: always check the Divergence Test — if lim aₙ ≠ 0, series diverges
- **If the series is geometric, use |r| < 1 criterion**
- **If terms involve factorials or exponentials, try Ratio Test**
- **If terms are similar to 1/nᵖ, try p-series or comparison**
      `
    },
    {
      id: 'conve1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to test selection strategy?',
            options: [
              'If terms are similar to 1/nᵖ, try p-series or comparison',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'If terms are similar to 1/nᵖ, try p-series or comparison'
          }
        ]
      }
    },
    {
      id: 'conve1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'First',
            options: ['always check the Divergence Test — if lim aₙ ≠ 0, ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If the series is geometric, use |r| < 1 criterion',
            options: ['If the series is geometric, use |r| < 1 criterion', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If terms involve factorials or exponentials, try Ratio Test',
            options: ['If terms involve factorials or exponentials, try R', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['always check the Divergence Test — if lim aₙ ≠ 0, ', 'If the series is geometric, use |r| < 1 criterion', 'If terms involve factorials or exponentials, try R'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Test Selection Strategy.'
      }
    }
  ]
}
