export const calcBCSeriesPart2Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'infin2-intro',
      type: 'text' as const,
      content: `
# Geometric & Telescoping Series

**Part 2 of 7 — Geometric & Telescoping Series**

### 1. Geometric series

Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1

### 2. a = first term, r = common ratio

a = first term, r = common ratio

### 3. Telescoping series

partial sums simplify by cancellation

### 4. For telescoping

write out Sₙ, most terms cancel, take the limit
      `
    },
    {
      id: 'infin2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of geometric & telescoping series?',
            options: [
              'Geometric series',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Geometric series: Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1'
          },
          {
            question: 'In the context of geometric & telescoping series, which is accurate?',
            options: [
              'partial sums simplify by cancellation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Telescoping series: partial sums simplify by cancellation'
          }
        ]
      }
    },
    {
      id: 'infin2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Geometric series**: Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1
- **a = first term, r = common ratio**
- **Telescoping series**: partial sums simplify by cancellation
- **For telescoping**: write out Sₙ, most terms cancel, take the limit
      `
    },
    {
      id: 'infin2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to geometric & telescoping series?',
            options: [
              'write out Sₙ, most terms cancel, take the limit',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'For telescoping: write out Sₙ, most terms cancel, take the limit'
          }
        ]
      }
    },
    {
      id: 'infin2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Geometric series',
            options: ['Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'a = first term, r = common ratio',
            options: ['a = first term, r = common ratio', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Telescoping series',
            options: ['partial sums simplify by cancellation', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ ', 'a = first term, r = common ratio', 'partial sums simplify by cancellation'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Geometric & Telescoping Series.'
      }
    }
  ]
}
