export const calcBCConvergenceTestsPart2Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conve2-intro',
      type: 'text' as const,
      content: `
# nth Term & Geometric Tests

**Part 2 of 7 — nth Term & Geometric Tests**

### 1. nth Term (Divergence) Test

if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing)

### 2. Geometric series

converges if |r| < 1, sum = a/(1-r)

### 3. Telescoping

write Sₙ, cancel terms, take the limit

### 4. These are the simplest tests — try them first

These are the simplest tests — try them first
      `
    },
    {
      id: 'conve2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of nth term & geometric tests?',
            options: [
              'nth Term (Divergence) Test',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'nth Term (Divergence) Test: if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing)'
          },
          {
            question: 'In the context of nth term & geometric tests, which is accurate?',
            options: [
              'write Sₙ, cancel terms, take the limit',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Telescoping: write Sₙ, cancel terms, take the limit'
          }
        ]
      }
    },
    {
      id: 'conve2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **nth Term (Divergence) Test**: if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing)
- **Geometric series**: converges if |r| < 1, sum = a/(1-r)
- **Telescoping**: write Sₙ, cancel terms, take the limit
- **These are the simplest tests — try them first**
      `
    },
    {
      id: 'conve2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to nth term & geometric tests?',
            options: [
              'These are the simplest tests — try them first',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'These are the simplest tests — try them first'
          }
        ]
      }
    },
    {
      id: 'conve2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'nth Term (Divergence) Test',
            options: ['if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothi', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Geometric series',
            options: ['converges if |r| < 1, sum = a/(1-r)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Telescoping',
            options: ['write Sₙ, cancel terms, take the limit', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothi', 'converges if |r| < 1, sum = a/(1-r)', 'write Sₙ, cancel terms, take the limit'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding nth Term & Geometric Tests.'
      }
    }
  ]
}
