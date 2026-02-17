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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Alternating series" refer to in calculus?',
            options: [
              'Many important series are alternating (ln 2, π/4, etc.)',
              'Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²',
              'terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ',
              '+, -, +, -, ...'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Alternating series: terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about The signs must strictly alternate?',
            options: [
              'terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ',
              '+, -, +, -, ...',
              'Many important series are alternating (ln 2, π/4, etc.)',
              'Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²'
            ],
            correctAnswer: 1,
            explanation: 'Correct — The signs must strictly alternate: +, -, +, -, ... Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding ∮ Alternating Series, which correctly describes Many important series are alternating…?',
            options: [
              '+, -, +, -, ...',
              'Many important series are alternating (ln 2, π/4, etc.)',
              'terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ',
              'Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Many important series are alternating (ln 2, π/4, etc.). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'alter1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Alternating series',
            options: ['Many important series are alternating (ln 2, π/4, etc.)', 'Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²', 'terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ', '+, -, +, -, ...']
          },
          {
            label: 'Examples',
            options: ['Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²', 'Many important series are alternating (ln 2, π/4, etc.)', 'terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ', '+, -, +, -, ...']
          },
          {
            label: 'The signs must strictly alternate',
            options: ['Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²', 'Many important series are alternating (ln 2, π/4, etc.)', '+, -, +, -, ...', 'terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ']
          }
        ],
        correctAnswers: ['terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ', 'Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²', '+, -, +, -, ...'],
        hint1: 'Think about what each concept specifically describes in ∮ Alternating Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Alternating Series describes a specific idea. Alternating series: terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ. Examples: Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n². The signs must strictly alternate: +, -, +, -, ...'
      }
    }
  ]
}
