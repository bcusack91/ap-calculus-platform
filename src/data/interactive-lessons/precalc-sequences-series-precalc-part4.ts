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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of series & summation?',
            options: [
              'Series',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Series: the sum of terms in a sequence'
          },
          {
            question: 'In the context of series & summation, which is accurate?',
            options: [
              'S = a₁/(1 - r) when |r| < 1',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Infinite geometric series: S = a₁/(1 - r) when |r| < 1'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Series',
            options: ['the sum of terms in a sequence', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Sigma notation',
            options: ['Σ represents summation from lower to upper bound', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Infinite geometric series',
            options: ['S = a₁/(1 - r) when |r| < 1', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['the sum of terms in a sequence', 'Σ represents summation from lower to upper bound', 'S = a₁/(1 - r) when |r| < 1'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Series & Summation.'
      }
    }
  ]
}
