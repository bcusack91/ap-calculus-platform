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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Series?',
            options: [
              'Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)',
              'If lim(n→∞) Sₙ = S (finite), the series converges to S',
              'Sₙ = a₁ + a₂ + ... + aₙ',
              'If the limit of partial sums doesn\'t exist or is infinite, the series diverges'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Series: Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ∮ Infinite Series, which explains If lim(n→∞) Sₙ = S (finite), the series…?',
            options: [
              'Sₙ = a₁ + a₂ + ... + aₙ',
              'If the limit of partial sums doesn\'t exist or is infinite, the series diverges',
              'If lim(n→∞) Sₙ = S (finite), the series converges to S',
              'Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If lim(n→∞) Sₙ = S (finite), the series converges to S. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents If the limit of partial sums doesn\'t…?',
            options: [
              'If the limit of partial sums doesn\'t exist or is infinite, the series diverges',
              'Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)',
              'If lim(n→∞) Sₙ = S (finite), the series converges to S',
              'Sₙ = a₁ + a₂ + ... + aₙ'
            ],
            correctAnswer: 0,
            explanation: 'Correct — If the limit of partial sums doesn\'t exist or is infinite, the series diverges. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Series',
            options: ['If the limit of partial sums doesn\'t exist or is infinite, the series diverges', 'If lim(n→∞) Sₙ = S (finite), the series converges to S', 'Sₙ = a₁ + a₂ + ... + aₙ', 'Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)']
          },
          {
            label: 'Partial sums',
            options: ['Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)', 'If lim(n→∞) Sₙ = S (finite), the series converges to S', 'If the limit of partial sums doesn\'t exist or is infinite, the series diverges', 'Sₙ = a₁ + a₂ + ... + aₙ']
          }
        ],
        correctAnswers: ['Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)', 'Sₙ = a₁ + a₂ + ... + aₙ'],
        hint1: 'Think about what each concept specifically describes in ∮ Infinite Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Infinite Series describes a specific idea. Series: Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence). Partial sums: Sₙ = a₁ + a₂ + ... + aₙ.'
      }
    }
  ]
}
