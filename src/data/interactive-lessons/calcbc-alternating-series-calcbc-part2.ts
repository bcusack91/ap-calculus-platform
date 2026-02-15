export const calcBCAlternatingPart2Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alter2-intro',
      type: 'text' as const,
      content: `
# Alternating Series Test

**Part 2 of 7 — Alternating Series Test**

### 1. AST

Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0

### 2. All three conditions must be verified

All three conditions must be verified

### 3. If lim bₙ ≠ 0, the series diverges (by the Divergence Test)

If lim bₙ ≠ 0, the series diverges (by the Divergence Test)

### 4. The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)

The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)
      `
    },
    {
      id: 'alter2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of alternating series test?',
            options: [
              'AST',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'AST: Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0'
          },
          {
            question: 'In the context of alternating series test, which is accurate?',
            options: [
              'If lim bₙ ≠ 0, the series diverges (by the Divergence Test)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If lim bₙ ≠ 0, the series diverges (by the Divergence Test)'
          }
        ]
      }
    },
    {
      id: 'alter2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **AST**: Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0
- **All three conditions must be verified**
- **If lim bₙ ≠ 0, the series diverges (by the Divergence Test)**
- **The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)**
      `
    },
    {
      id: 'alter2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alternating series test?',
            options: [
              'The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)'
          }
        ]
      }
    },
    {
      id: 'alter2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'AST',
            options: ['Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decre', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'All three conditions must be verified',
            options: ['All three conditions must be verified', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If lim bₙ ≠ 0, the series diverges (by the Divergence Test)',
            options: ['If lim bₙ ≠ 0, the series diverges (by the Diverge', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decre', 'All three conditions must be verified', 'If lim bₙ ≠ 0, the series diverges (by the Diverge'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Alternating Series Test.'
      }
    }
  ]
}
