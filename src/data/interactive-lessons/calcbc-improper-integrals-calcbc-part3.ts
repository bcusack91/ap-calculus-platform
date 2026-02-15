export const calcBCImproperPart3Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'impro3-intro',
      type: 'text' as const,
      content: `
# Convergence & Divergence

**Part 3 of 7 — Convergence & Divergence**

### 1. If the limit exists and is finite, the integral converges

If the limit exists and is finite, the integral converges

### 2. If the limit is ±∞ or doesn't exist, the integral diverges

If the limit is ±∞ or doesn't exist, the integral diverges

### 3. ∫₁^∞ 1/xᵖ dx

converges if p > 1, diverges if p ≤ 1 (p-series test)

### 4. ∫₀¹ 1/xᵖ dx

converges if p < 1, diverges if p ≥ 1
      `
    },
    {
      id: 'impro3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of convergence & divergence?',
            options: [
              'If the limit exists and is finite, the integral converges',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'If the limit exists and is finite, the integral converges'
          },
          {
            question: 'In the context of convergence & divergence, which is accurate?',
            options: [
              'converges if p > 1, diverges if p ≤ 1 (p-series test)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '∫₁^∞ 1/xᵖ dx: converges if p > 1, diverges if p ≤ 1 (p-series test)'
          }
        ]
      }
    },
    {
      id: 'impro3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **If the limit exists and is finite, the integral converges**
- **If the limit is ±∞ or doesn't exist, the integral diverges**
- **∫₁^∞ 1/xᵖ dx**: converges if p > 1, diverges if p ≤ 1 (p-series test)
- **∫₀¹ 1/xᵖ dx**: converges if p < 1, diverges if p ≥ 1
      `
    },
    {
      id: 'impro3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to convergence & divergence?',
            options: [
              'converges if p < 1, diverges if p ≥ 1',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: '∫₀¹ 1/xᵖ dx: converges if p < 1, diverges if p ≥ 1'
          }
        ]
      }
    },
    {
      id: 'impro3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the limit exists and is finite, the integral converges',
            options: ['If the limit exists and is finite, the integral co', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If the limit is ±∞ or doesn\'t exist, the integral diverges',
            options: ['If the limit is ±∞ or doesn\'t exist, the integral ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫₁^∞ 1/xᵖ dx',
            options: ['converges if p > 1, diverges if p ≤ 1 (p-series te', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['If the limit exists and is finite, the integral co', 'If the limit is ±∞ or doesn\'t exist, the integral ', 'converges if p > 1, diverges if p ≤ 1 (p-series te'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Convergence & Divergence.'
      }
    }
  ]
}
