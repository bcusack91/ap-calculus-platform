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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Integral Test?',
            options: [
              'Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx',
              'Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous)',
              'Σ1/nᵖ converges iff p > 1',
              'Harmonic series (p=1) diverges — know this cold'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Integral Test: Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Harmonic series (p=1) diverges — know…?',
            options: [
              'Harmonic series (p=1) diverges — know this cold',
              'Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous)',
              'Σ1/nᵖ converges iff p > 1',
              'Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Harmonic series (p=1) diverges — know this cold. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Integral & p-Series Tests, which correctly describes Integral test remainder?',
            options: [
              'Σ1/nᵖ converges iff p > 1',
              'Harmonic series (p=1) diverges — know this cold',
              'Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous)',
              'Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Integral test remainder: Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'conve3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Integral Test',
            options: ['Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx', 'Harmonic series (p=1) diverges — know this cold', 'Σ1/nᵖ converges iff p > 1', 'Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous)']
          },
          {
            label: 'p-series',
            options: ['Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous)', 'Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx', 'Harmonic series (p=1) diverges — know this cold', 'Σ1/nᵖ converges iff p > 1']
          },
          {
            label: 'Integral test remainder',
            options: ['Σ1/nᵖ converges iff p > 1', 'Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx', 'Harmonic series (p=1) diverges — know this cold', 'Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous)']
          }
        ],
        correctAnswers: ['Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous)', 'Σ1/nᵖ converges iff p > 1', 'Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx'],
        hint1: 'Think about what each concept specifically describes in Integral & p-Series Tests.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integral & p-Series Tests describes a specific idea. Integral Test: Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous). p-series: Σ1/nᵖ converges iff p > 1. Integral test remainder: Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx.'
      }
    }
  ]
}
