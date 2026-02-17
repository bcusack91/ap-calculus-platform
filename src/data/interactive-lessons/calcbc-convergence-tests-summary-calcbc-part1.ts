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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains First?',
            options: [
              'If terms are similar to 1/nᵖ, try p-series or comparison',
              'If terms involve factorials or exponentials, try Ratio Test',
              'always check the Divergence Test — if lim aₙ ≠ 0, series diverges',
              'If the series is geometric, use |r| < 1 criterion'
            ],
            correctAnswer: 2,
            explanation: 'Correct — First: always check the Divergence Test — if lim aₙ ≠ 0, series diverges. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about If terms involve factorials or…?',
            options: [
              'always check the Divergence Test — if lim aₙ ≠ 0, series diverges',
              'If terms are similar to 1/nᵖ, try p-series or comparison',
              'If the series is geometric, use |r| < 1 criterion',
              'If terms involve factorials or exponentials, try Ratio Test'
            ],
            correctAnswer: 3,
            explanation: 'Correct — If terms involve factorials or exponentials, try Ratio Test. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about If terms are similar to 1/nᵖ, try… is correct?',
            options: [
              'If terms involve factorials or exponentials, try Ratio Test',
              'If terms are similar to 1/nᵖ, try p-series or comparison',
              'If the series is geometric, use |r| < 1 criterion',
              'always check the Divergence Test — if lim aₙ ≠ 0, series diverges'
            ],
            correctAnswer: 1,
            explanation: 'Correct — If terms are similar to 1/nᵖ, try p-series or comparison. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'conve1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'First',
            options: ['If the series is geometric, use |r| < 1 criterion', 'always check the Divergence Test — if lim aₙ ≠ 0, series diverges', 'If terms involve factorials or exponentials, try Ratio Test', 'If terms are similar to 1/nᵖ, try p-series or comparison']
          },
          {
            label: 'If the series is geometric, use |r| < 1…',
            options: ['always check the Divergence Test — if lim aₙ ≠ 0, series diverges', 'If the series is geometric, use |r| < 1 criterion', 'If terms are similar to 1/nᵖ, try p-series or comparison', 'If terms involve factorials or exponentials, try Ratio Test']
          },
          {
            label: 'If terms involve factorials or…',
            options: ['If terms involve factorials or exponentials, try Ratio Test', 'always check the Divergence Test — if lim aₙ ≠ 0, series diverges', 'If the series is geometric, use |r| < 1 criterion', 'If terms are similar to 1/nᵖ, try p-series or comparison']
          }
        ],
        correctAnswers: ['always check the Divergence Test — if lim aₙ ≠ 0, series diverges', 'If the series is geometric, use |r| < 1 criterion', 'If terms involve factorials or exponentials, try Ratio Test'],
        hint1: 'Think about what each concept specifically describes in ∮ Convergence Tests Summary.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Convergence Tests Summary describes a specific idea. First: always check the Divergence Test — if lim aₙ ≠ 0, series diverges. If the series is geometric, use |r| < 1 criterion. If terms involve factorials or exponentials, try Ratio Test.'
      }
    }
  ]
}
