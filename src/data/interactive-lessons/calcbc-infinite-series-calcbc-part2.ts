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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Geometric series?',
            options: [
              'a = first term, r = common ratio',
              'Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1',
              'write out Sₙ, most terms cancel, take the limit',
              'partial sums simplify by cancellation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Geometric series: Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Geometric & Telescoping Series, which explains Telescoping series?',
            options: [
              'Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1',
              'write out Sₙ, most terms cancel, take the limit',
              'a = first term, r = common ratio',
              'partial sums simplify by cancellation'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Telescoping series: partial sums simplify by cancellation. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Geometric & Telescoping Series, which correctly describes For telescoping?',
            options: [
              'write out Sₙ, most terms cancel, take the limit',
              'a = first term, r = common ratio',
              'Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1',
              'partial sums simplify by cancellation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — For telescoping: write out Sₙ, most terms cancel, take the limit. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Geometric series',
            options: ['Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1', 'partial sums simplify by cancellation', 'a = first term, r = common ratio', 'write out Sₙ, most terms cancel, take the limit']
          },
          {
            label: 'Telescoping series',
            options: ['write out Sₙ, most terms cancel, take the limit', 'partial sums simplify by cancellation', 'Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1', 'a = first term, r = common ratio']
          },
          {
            label: 'For telescoping',
            options: ['a = first term, r = common ratio', 'Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1', 'write out Sₙ, most terms cancel, take the limit', 'partial sums simplify by cancellation']
          }
        ],
        correctAnswers: ['Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1', 'partial sums simplify by cancellation', 'write out Sₙ, most terms cancel, take the limit'],
        hint1: 'Think about what each concept specifically describes in Geometric & Telescoping Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Geometric & Telescoping Series describes a specific idea. Geometric series: Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1. Telescoping series: partial sums simplify by cancellation. For telescoping: write out Sₙ, most terms cancel, take the limit.'
      }
    }
  ]
}
