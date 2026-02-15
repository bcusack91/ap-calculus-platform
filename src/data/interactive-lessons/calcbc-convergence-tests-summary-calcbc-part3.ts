export const calcBCConvergenceTestsPart3Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conve3-intro',
      type: 'text' as const,
      content: `
# Integral & p-Series Tests

**Part 3 of 7 — Integral & p-Series Tests**

### 1. Integral Test

Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous)

### 2. p-series

Σ1/nᵖ converges iff p > 1

### 3. Harmonic series (p=1) diverges — know this cold

Harmonic series (p=1) diverges — know this cold

### 4. Integral test remainder

Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx
      `
    },
    {
      id: 'conve3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of integral & p-series tests?',
            options: [
              'Integral Test',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Integral Test: Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous)'
          },
          {
            question: 'In the context of integral & p-series tests, which is accurate?',
            options: [
              'Harmonic series (p=1) diverges — know this cold',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Harmonic series (p=1) diverges — know this cold'
          }
        ]
      }
    },
    {
      id: 'conve3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Integral Test**: Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous)
- **p-series**: Σ1/nᵖ converges iff p > 1
- **Harmonic series (p=1) diverges — know this cold**
- **Integral test remainder**: Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx
      `
    },
    {
      id: 'conve3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to integral & p-series tests?',
            options: [
              'Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Integral test remainder: Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx'
          }
        ]
      }
    },
    {
      id: 'conve3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Integral Test',
            options: ['Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive,', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'p-series',
            options: ['Σ1/nᵖ converges iff p > 1', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Harmonic series (p=1) diverges — know this cold',
            options: ['Harmonic series (p=1) diverges — know this cold', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive,', 'Σ1/nᵖ converges iff p > 1', 'Harmonic series (p=1) diverges — know this cold'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Integral & p-Series Tests.'
      }
    }
  ]
}
