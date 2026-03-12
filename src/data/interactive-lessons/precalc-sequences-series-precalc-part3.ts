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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Geometric sequence?',
            options: [
              'common ratio r between consecutive terms',
              'aₙ = a₁ · r^(n-1)',
              '√(a · b) for terms a and b',
              'Sₙ = a₁(1 - rⁿ)/(1 - r), r ≠ 1'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Geometric sequence: common ratio r between consecutive terms. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Geometric mean?',
            options: [
              'aₙ = a₁ · r^(n-1)',
              'common ratio r between consecutive terms',
              '√(a · b) for terms a and b',
              'Sₙ = a₁(1 - rⁿ)/(1 - r), r ≠ 1'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Geometric mean: √(a · b) for terms a and b. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Geometric sequence',
            options: ['Sₙ = a₁(1 - rⁿ)/(1 - r), r ≠ 1', '√(a · b) for terms a and b', 'common ratio r between consecutive terms', 'aₙ = a₁ · r^(n-1)']
          },
          {
            label: 'Explicit formula',
            options: ['aₙ = a₁ · r^(n-1)', '√(a · b) for terms a and b', 'Sₙ = a₁(1 - rⁿ)/(1 - r), r ≠ 1', 'common ratio r between consecutive terms']
          },
          {
            label: 'Geometric mean',
            options: ['√(a · b) for terms a and b', 'common ratio r between consecutive terms', 'aₙ = a₁ · r^(n-1)', 'Sₙ = a₁(1 - rⁿ)/(1 - r), r ≠ 1']
          }
        ],
        correctAnswers: ['common ratio r between consecutive terms', 'aₙ = a₁ · r^(n-1)', '√(a · b) for terms a and b'],
        hint1: 'Think about what each concept specifically describes in Geometric Sequences.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Geometric Sequences describes a specific idea. Geometric sequence: common ratio r between consecutive terms. Explicit formula: aₙ = a₁ · r^(n-1). Geometric mean: √(a · b) for terms a and b.'
      }
    }
  ]
}
