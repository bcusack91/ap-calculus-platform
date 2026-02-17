export const precalcSequencesPart2Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'seque2-intro',
      type: 'text' as const,
      content: `
# Arithmetic Sequences

**Part 2 of 7 — Arithmetic Sequences**

### 1. Arithmetic sequence

common difference d between consecutive terms

### 2. Explicit formula

aₙ = a₁ + (n-1)d

### 3. Arithmetic mean

the average of two terms equals the term between them

### 4. Sum of first n terms

Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n-1)d)/2
      `
    },
    {
      id: 'seque2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Arithmetic sequence?',
            options: [
              'the average of two terms equals the term between them',
              'Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n-1)d)/2',
              'common difference d between consecutive terms',
              'aₙ = a₁ + (n-1)d'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Arithmetic sequence: common difference d between consecutive terms. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Arithmetic mean?',
            options: [
              'the average of two terms equals the term between them',
              'aₙ = a₁ + (n-1)d',
              'Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n-1)d)/2',
              'common difference d between consecutive terms'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Arithmetic mean: the average of two terms equals the term between them. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'seque2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Arithmetic sequence**: common difference d between consecutive terms
- **Explicit formula**: aₙ = a₁ + (n-1)d
- **Arithmetic mean**: the average of two terms equals the term between them
- **Sum of first n terms**: Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n-1)d)/2
      `
    },
    {
      id: 'seque2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to arithmetic sequences?',
            options: [
              'Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n-1)d)/2',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Sum of first n terms: Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n-1)d)/2'
          }
        ]
      }
    },
    {
      id: 'seque2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arithmetic sequence',
            options: ['Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n-1)d)/2', 'common difference d between consecutive terms', 'the average of two terms equals the term between them', 'aₙ = a₁ + (n-1)d']
          },
          {
            label: 'Explicit formula',
            options: ['Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n-1)d)/2', 'aₙ = a₁ + (n-1)d', 'common difference d between consecutive terms', 'the average of two terms equals the term between them']
          },
          {
            label: 'Arithmetic mean',
            options: ['aₙ = a₁ + (n-1)d', 'the average of two terms equals the term between them', 'Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n-1)d)/2', 'common difference d between consecutive terms']
          }
        ],
        correctAnswers: ['common difference d between consecutive terms', 'aₙ = a₁ + (n-1)d', 'the average of two terms equals the term between them'],
        hint1: 'Think about what each concept specifically describes in Arithmetic Sequences.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Arithmetic Sequences describes a specific idea. Arithmetic sequence: common difference d between consecutive terms. Explicit formula: aₙ = a₁ + (n-1)d. Arithmetic mean: the average of two terms equals the term between them.'
      }
    }
  ]
}
