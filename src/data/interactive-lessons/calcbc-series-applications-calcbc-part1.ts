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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of approximating functions?',
            options: [
              'Use Taylor polynomials to approximate function values near the center',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Use Taylor polynomials to approximate function values near the center'
          },
          {
            question: 'In the context of approximating functions, which is accurate?',
            options: [
              'e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Example: e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to approximating functions?',
            options: [
              'Polynomial approximations are fast to compute — no transcendental functions need',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Polynomial approximations are fast to compute — no transcendental functions needed'
          }
        ]
      }
    },
    {
      id: 'serie1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Use Taylor polynomials to approximate function values near the center',
            options: ['Use Taylor polynomials to approximate function val', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Higher degree → better approximation (within radius of convergence)',
            options: ['Higher degree → better approximation (within radiu', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Example',
            options: ['e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Use Taylor polynomials to approximate function val', 'Higher degree → better approximation (within radiu', 'e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Approximating Functions.'
      }
    }
  ]
}
