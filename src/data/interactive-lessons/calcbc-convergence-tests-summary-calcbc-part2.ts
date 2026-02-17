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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains nth Term (Divergence) Test?',
            options: [
              'if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing)',
              'These are the simplest tests — try them first',
              'write Sₙ, cancel terms, take the limit',
              'converges if |r| < 1, sum = a/(1-r)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — nth Term (Divergence) Test: if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Telescoping?',
            options: [
              'write Sₙ, cancel terms, take the limit',
              'These are the simplest tests — try them first',
              'if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing)',
              'converges if |r| < 1, sum = a/(1-r)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Telescoping: write Sₙ, cancel terms, take the limit. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents These are the simplest tests — try them…?',
            options: [
              'converges if |r| < 1, sum = a/(1-r)',
              'These are the simplest tests — try them first',
              'if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing)',
              'write Sₙ, cancel terms, take the limit'
            ],
            correctAnswer: 1,
            explanation: 'Correct — These are the simplest tests — try them first. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'conve2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'nth Term (Divergence) Test',
            options: ['These are the simplest tests — try them first', 'converges if |r| < 1, sum = a/(1-r)', 'if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing)', 'write Sₙ, cancel terms, take the limit']
          },
          {
            label: 'Geometric series',
            options: ['These are the simplest tests — try them first', 'converges if |r| < 1, sum = a/(1-r)', 'write Sₙ, cancel terms, take the limit', 'if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing)']
          },
          {
            label: 'Telescoping',
            options: ['converges if |r| < 1, sum = a/(1-r)', 'if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing)', 'These are the simplest tests — try them first', 'write Sₙ, cancel terms, take the limit']
          }
        ],
        correctAnswers: ['if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing)', 'converges if |r| < 1, sum = a/(1-r)', 'write Sₙ, cancel terms, take the limit'],
        hint1: 'Think about what each concept specifically describes in nth Term & Geometric Tests.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in nth Term & Geometric Tests describes a specific idea. nth Term (Divergence) Test: if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing). Geometric series: converges if |r| < 1, sum = a/(1-r). Telescoping: write Sₙ, cancel terms, take the limit.'
      }
    }
  ]
}
