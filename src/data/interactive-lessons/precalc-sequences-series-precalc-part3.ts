export const precalcSequencesPart3Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'seque3-intro',
      type: 'text' as const,
      content: `
# Geometric Sequences

**Part 3 of 7 — Geometric Sequences**

### 1. Geometric sequence

common ratio r between consecutive terms

### 2. Explicit formula

aₙ = a₁ · r^(n-1)

### 3. Geometric mean

√(a · b) for terms a and b

### 4. Sum of first n terms

Sₙ = a₁(1 - rⁿ)/(1 - r), r ≠ 1
      `
    },
    {
      id: 'seque3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of geometric sequences?',
            options: [
              'Geometric sequence',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Geometric sequence: common ratio r between consecutive terms'
          },
          {
            question: 'In the context of geometric sequences, which is accurate?',
            options: [
              '√(a · b) for terms a and b',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Geometric mean: √(a · b) for terms a and b'
          }
        ]
      }
    },
    {
      id: 'seque3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Geometric sequence**: common ratio r between consecutive terms
- **Explicit formula**: aₙ = a₁ · r^(n-1)
- **Geometric mean**: √(a · b) for terms a and b
- **Sum of first n terms**: Sₙ = a₁(1 - rⁿ)/(1 - r), r ≠ 1
      `
    },
    {
      id: 'seque3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to geometric sequences?',
            options: [
              'Sₙ = a₁(1 - rⁿ)/(1 - r), r ≠ 1',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Sum of first n terms: Sₙ = a₁(1 - rⁿ)/(1 - r), r ≠ 1'
          }
        ]
      }
    },
    {
      id: 'seque3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Geometric sequence',
            options: ['common ratio r between consecutive terms', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Explicit formula',
            options: ['aₙ = a₁ · r^(n-1)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Geometric mean',
            options: ['√(a · b) for terms a and b', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['common ratio r between consecutive terms', 'aₙ = a₁ · r^(n-1)', '√(a · b) for terms a and b'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Geometric Sequences.'
      }
    }
  ]
}
