export const calcBCSeriesPart1Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'infin1-intro',
      type: 'text' as const,
      content: `
# ∮ Infinite Series

**Part 1 of 7 — Introduction to Series**

### 1. Series

Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)

### 2. Partial sums

Sₙ = a₁ + a₂ + ... + aₙ

### 3. If lim(n→∞) Sₙ = S (finite), the series converges to S

If lim(n→∞) Sₙ = S (finite), the series converges to S

### 4. If the limit of partial sums doesn't exist or is infinite, the series diverges

If the limit of partial sums doesn't exist or is infinite, the series diverges
      `
    },
    {
      id: 'infin1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of introduction to series?',
            options: [
              'Series',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Series: Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)'
          },
          {
            question: 'In the context of introduction to series, which is accurate?',
            options: [
              'If lim(n→∞) Sₙ = S (finite), the series converges to S',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If lim(n→∞) Sₙ = S (finite), the series converges to S'
          }
        ]
      }
    },
    {
      id: 'infin1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Series**: Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)
- **Partial sums**: Sₙ = a₁ + a₂ + ... + aₙ
- **If lim(n→∞) Sₙ = S (finite), the series converges to S**
- **If the limit of partial sums doesn't exist or is infinite, the series diverges**
      `
    },
    {
      id: 'infin1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to series?',
            options: [
              'If the limit of partial sums doesn\'t exist or is infinite, the series diverges',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'If the limit of partial sums doesn\'t exist or is infinite, the series diverges'
          }
        ]
      }
    },
    {
      id: 'infin1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Series',
            options: ['Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Partial sums',
            options: ['Sₙ = a₁ + a₂ + ... + aₙ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If lim(n→∞) Sₙ = S (finite), the series converges to S',
            options: ['If lim(n→∞) Sₙ = S (finite), the series converges ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)', 'Sₙ = a₁ + a₂ + ... + aₙ', 'If lim(n→∞) Sₙ = S (finite), the series converges '],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Series.'
      }
    }
  ]
}
