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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of arithmetic sequences?',
            options: [
              'Arithmetic sequence',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Arithmetic sequence: common difference d between consecutive terms'
          },
          {
            question: 'In the context of arithmetic sequences, which is accurate?',
            options: [
              'the average of two terms equals the term between them',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Arithmetic mean: the average of two terms equals the term between them'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arithmetic sequence',
            options: ['common difference d between consecutive terms', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Explicit formula',
            options: ['aₙ = a₁ + (n-1)d', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Arithmetic mean',
            options: ['the average of two terms equals the term between t', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['common difference d between consecutive terms', 'aₙ = a₁ + (n-1)d', 'the average of two terms equals the term between t'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Arithmetic Sequences.'
      }
    }
  ]
}
