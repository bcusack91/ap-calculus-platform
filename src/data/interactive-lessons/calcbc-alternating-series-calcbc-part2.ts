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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "AST" refer to in calculus?',
            options: [
              'All three conditions must be verified',
              'Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0',
              'The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)',
              'If lim bₙ ≠ 0, the series diverges (by the Divergence Test)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — AST: Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about If lim bₙ ≠ 0, the series diverges (by…?',
            options: [
              'All three conditions must be verified',
              'Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0',
              'If lim bₙ ≠ 0, the series diverges (by the Divergence Test)',
              'The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If lim bₙ ≠ 0, the series diverges (by the Divergence Test). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about The alternating harmonic series… is correct?',
            options: [
              'The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)',
              'All three conditions must be verified',
              'Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0',
              'If lim bₙ ≠ 0, the series diverges (by the Divergence Test)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'alter2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'AST',
            options: ['All three conditions must be verified', 'The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)', 'If lim bₙ ≠ 0, the series diverges (by the Divergence Test)', 'Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0']
          },
          {
            label: 'All three conditions must be verified',
            options: ['All three conditions must be verified', 'The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)', 'Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0', 'If lim bₙ ≠ 0, the series diverges (by the Divergence Test)']
          },
          {
            label: 'If lim bₙ ≠ 0, the series diverges (by…',
            options: ['The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)', 'If lim bₙ ≠ 0, the series diverges (by the Divergence Test)', 'Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0', 'All three conditions must be verified']
          }
        ],
        correctAnswers: ['Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0', 'All three conditions must be verified', 'If lim bₙ ≠ 0, the series diverges (by the Divergence Test)'],
        hint1: 'Think about what each concept specifically describes in Alternating Series Test.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Alternating Series Test describes a specific idea. AST: Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0. All three conditions must be verified. If lim bₙ ≠ 0, the series diverges (by the Divergence Test).'
      }
    }
  ]
}
