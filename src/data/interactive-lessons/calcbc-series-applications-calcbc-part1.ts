export const calcBCSeriesAppsPart1Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'serie1-intro',
      type: 'text' as const,
      content: `
# ∮ Series Applications

**Part 1 of 7 — Approximating Functions**

### 1. Use Taylor polynomials to approximate function values near the center

Use Taylor polynomials to approximate function values near the center

### 2. Higher degree → better approximation (within radius of convergence)

Higher degree → better approximation (within radius of convergence)

### 3. Example

e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)

### 4. Polynomial approximations are fast to compute — no transcendental functions needed

Polynomial approximations are fast to compute — no transcendental functions needed
      `
    },
    {
      id: 'serie1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Use Taylor polynomials to approximate…?',
            options: [
              'e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)',
              'Use Taylor polynomials to approximate function values near the center',
              'Higher degree → better approximation (within radius of convergence)',
              'Polynomial approximations are fast to compute — no transcendental functions needed'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Use Taylor polynomials to approximate function values near the center. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Example?',
            options: [
              'Polynomial approximations are fast to compute — no transcendental functions needed',
              'e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)',
              'Higher degree → better approximation (within radius of convergence)',
              'Use Taylor polynomials to approximate function values near the center'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Example: e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'serie1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Use Taylor polynomials to approximate function values near the center**
- **Higher degree → better approximation (within radius of convergence)**
- **Example**: e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)
- **Polynomial approximations are fast to compute — no transcendental functions needed**
      `
    },
    {
      id: 'serie1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Polynomial approximations are fast to… is correct?',
            options: [
              'Use Taylor polynomials to approximate function values near the center',
              'Higher degree → better approximation (within radius of convergence)',
              'Polynomial approximations are fast to compute — no transcendental functions needed',
              'e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Polynomial approximations are fast to compute — no transcendental functions needed. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'serie1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Use Taylor polynomials to approximate…',
            options: ['Use Taylor polynomials to approximate function values near the center', 'Higher degree → better approximation (within radius of convergence)', 'e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)', 'Polynomial approximations are fast to compute — no transcendental functions needed']
          },
          {
            label: 'Higher degree → better approximation…',
            options: ['e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)', 'Use Taylor polynomials to approximate function values near the center', 'Polynomial approximations are fast to compute — no transcendental functions needed', 'Higher degree → better approximation (within radius of convergence)']
          },
          {
            label: 'Example',
            options: ['Higher degree → better approximation (within radius of convergence)', 'e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)', 'Use Taylor polynomials to approximate function values near the center', 'Polynomial approximations are fast to compute — no transcendental functions needed']
          }
        ],
        correctAnswers: ['Use Taylor polynomials to approximate function values near the center', 'Higher degree → better approximation (within radius of convergence)', 'e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)'],
        hint1: 'Think about what each concept specifically describes in ∮ Series Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Series Applications describes a specific idea. Use Taylor polynomials to approximate function values near the center. Higher degree → better approximation (within radius of convergence). Example: e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places).'
      }
    }
  ]
}
