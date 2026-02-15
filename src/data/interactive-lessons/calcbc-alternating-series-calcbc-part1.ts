export const calcBCAlternatingPart1Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alter1-intro',
      type: 'text' as const,
      content: `
# ∮ Alternating Series

**Part 1 of 7 — Alternating Series**

### 1. Alternating series

terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ

### 2. Examples

Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²

### 3. The signs must strictly alternate

+, -, +, -, ...

### 4. Many important series are alternating (ln 2, π/4, etc.)

Many important series are alternating (ln 2, π/4, etc.)
      `
    },
    {
      id: 'alter1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of alternating series?',
            options: [
              'Alternating series',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Alternating series: terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ'
          },
          {
            question: 'In the context of alternating series, which is accurate?',
            options: [
              '+, -, +, -, ...',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The signs must strictly alternate: +, -, +, -, ...'
          }
        ]
      }
    },
    {
      id: 'alter1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Alternating series**: terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ
- **Examples**: Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²
- **The signs must strictly alternate**: +, -, +, -, ...
- **Many important series are alternating (ln 2, π/4, etc.)**
      `
    },
    {
      id: 'alter1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alternating series?',
            options: [
              'Many important series are alternating (ln 2, π/4, etc.)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Many important series are alternating (ln 2, π/4, etc.)'
          }
        ]
      }
    },
    {
      id: 'alter1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Alternating series',
            options: ['terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Examples',
            options: ['Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The signs must strictly alternate',
            options: ['+, -, +, -, ...', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ', 'Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²', '+, -, +, -, ...'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Alternating Series.'
      }
    }
  ]
}
