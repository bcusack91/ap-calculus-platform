export const calcBCSeriesPart3Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'infin3-intro',
      type: 'text' as const,
      content: `
# Divergence Test & Integral Test

**Part 3 of 7 — Divergence Test & Integral Test**

### 1. Divergence Test

if lim aₙ ≠ 0, then Σ aₙ diverges

### 2. But lim aₙ = 0 does NOT guarantee convergence (harmonic series!)

But lim aₙ = 0 does NOT guarantee convergence (harmonic series!)

### 3. Integral Test

Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing)

### 4. Integral test gives convergence/divergence but not the sum

Integral test gives convergence/divergence but not the sum
      `
    },
    {
      id: 'infin3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of divergence test & integral test?',
            options: [
              'Divergence Test',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Divergence Test: if lim aₙ ≠ 0, then Σ aₙ diverges'
          },
          {
            question: 'In the context of divergence test & integral test, which is accurate?',
            options: [
              'Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Integral Test: Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing)'
          }
        ]
      }
    },
    {
      id: 'infin3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Divergence Test**: if lim aₙ ≠ 0, then Σ aₙ diverges
- **But lim aₙ = 0 does NOT guarantee convergence (harmonic series!)**
- **Integral Test**: Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing)
- **Integral test gives convergence/divergence but not the sum**
      `
    },
    {
      id: 'infin3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to divergence test & integral test?',
            options: [
              'Integral test gives convergence/divergence but not the sum',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Integral test gives convergence/divergence but not the sum'
          }
        ]
      }
    },
    {
      id: 'infin3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Divergence Test',
            options: ['if lim aₙ ≠ 0, then Σ aₙ diverges', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'But lim aₙ = 0 does NOT guarantee convergence (harmonic series!)',
            options: ['But lim aₙ = 0 does NOT guarantee convergence (har', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Integral Test',
            options: ['Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f posi', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['if lim aₙ ≠ 0, then Σ aₙ diverges', 'But lim aₙ = 0 does NOT guarantee convergence (har', 'Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f posi'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Divergence Test & Integral Test.'
      }
    }
  ]
}
