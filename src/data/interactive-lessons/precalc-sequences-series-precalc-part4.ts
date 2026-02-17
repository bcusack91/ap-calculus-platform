export const precalcSequencesPart4Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'seque4-intro',
      type: 'text' as const,
      content: `
# Series & Summation

**Part 4 of 7 — Series & Summation**

### 1. Series

the sum of terms in a sequence

### 2. Sigma notation

Σ represents summation from lower to upper bound

### 3. Infinite geometric series

S = a₁/(1 - r) when |r| < 1

### 4. Diverges when |r| ≥ 1 (no finite sum)

Diverges when |r| ≥ 1 (no finite sum)
      `
    },
    {
      id: 'seque4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Series?',
            options: [
              'Σ represents summation from lower to upper bound',
              'Diverges when |r| ≥ 1 (no finite sum)',
              'S = a₁/(1 - r) when |r| < 1',
              'the sum of terms in a sequence'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Series: the sum of terms in a sequence. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Infinite geometric series?',
            options: [
              'Σ represents summation from lower to upper bound',
              'S = a₁/(1 - r) when |r| < 1',
              'Diverges when |r| ≥ 1 (no finite sum)',
              'the sum of terms in a sequence'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Infinite geometric series: S = a₁/(1 - r) when |r| < 1. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'seque4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Series**: the sum of terms in a sequence
- **Sigma notation**: Σ represents summation from lower to upper bound
- **Infinite geometric series**: S = a₁/(1 - r) when |r| < 1
- **Diverges when |r| ≥ 1 (no finite sum)**
      `
    },
    {
      id: 'seque4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to series & summation?',
            options: [
              'Diverges when |r| ≥ 1 (no finite sum)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Diverges when |r| ≥ 1 (no finite sum)'
          }
        ]
      }
    },
    {
      id: 'seque4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Series',
            options: ['Diverges when |r| ≥ 1 (no finite sum)', 'S = a₁/(1 - r) when |r| < 1', 'Σ represents summation from lower to upper bound', 'the sum of terms in a sequence']
          },
          {
            label: 'Sigma notation',
            options: ['Diverges when |r| ≥ 1 (no finite sum)', 'the sum of terms in a sequence', 'Σ represents summation from lower to upper bound', 'S = a₁/(1 - r) when |r| < 1']
          },
          {
            label: 'Infinite geometric series',
            options: ['S = a₁/(1 - r) when |r| < 1', 'the sum of terms in a sequence', 'Diverges when |r| ≥ 1 (no finite sum)', 'Σ represents summation from lower to upper bound']
          }
        ],
        correctAnswers: ['the sum of terms in a sequence', 'Σ represents summation from lower to upper bound', 'S = a₁/(1 - r) when |r| < 1'],
        hint1: 'Think about what each concept specifically describes in Series & Summation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Series & Summation describes a specific idea. Series: the sum of terms in a sequence. Sigma notation: Σ represents summation from lower to upper bound. Infinite geometric series: S = a₁/(1 - r) when |r| < 1.'
      }
    }
  ]
}
