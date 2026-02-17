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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Divergence Test?',
            options: [
              'But lim aₙ = 0 does NOT guarantee convergence (harmonic series!)',
              'Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing)',
              'Integral test gives convergence/divergence but not the sum',
              'if lim aₙ ≠ 0, then Σ aₙ diverges'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Divergence Test: if lim aₙ ≠ 0, then Σ aₙ diverges. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Divergence Test & Integral Test, which explains Integral Test?',
            options: [
              'if lim aₙ ≠ 0, then Σ aₙ diverges',
              'But lim aₙ = 0 does NOT guarantee convergence (harmonic series!)',
              'Integral test gives convergence/divergence but not the sum',
              'Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Integral Test: Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Integral test gives… is correct?',
            options: [
              'But lim aₙ = 0 does NOT guarantee convergence (harmonic series!)',
              'Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing)',
              'Integral test gives convergence/divergence but not the sum',
              'if lim aₙ ≠ 0, then Σ aₙ diverges'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Integral test gives convergence/divergence but not the sum. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Divergence Test',
            options: ['if lim aₙ ≠ 0, then Σ aₙ diverges', 'Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing)', 'But lim aₙ = 0 does NOT guarantee convergence (harmonic series!)', 'Integral test gives convergence/divergence but not the sum']
          },
          {
            label: 'Integral Test',
            options: ['Integral test gives convergence/divergence but not the sum', 'if lim aₙ ≠ 0, then Σ aₙ diverges', 'Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing)', 'But lim aₙ = 0 does NOT guarantee convergence (harmonic series!)']
          }
        ],
        correctAnswers: ['if lim aₙ ≠ 0, then Σ aₙ diverges', 'Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing)'],
        hint1: 'Think about what each concept specifically describes in Divergence Test & Integral Test.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Divergence Test & Integral Test describes a specific idea. Divergence Test: if lim aₙ ≠ 0, then Σ aₙ diverges. Integral Test: Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing).'
      }
    }
  ]
}
