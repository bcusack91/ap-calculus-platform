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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes If the limit exists and is finite, the…?',
            options: [
              'If the limit exists and is finite, the integral converges',
              'converges if p < 1, diverges if p ≥ 1',
              'converges if p > 1, diverges if p ≤ 1 (p-series test)',
              'If the limit is ±∞ or doesn\'t exist, the integral diverges'
            ],
            correctAnswer: 0,
            explanation: 'Correct — If the limit exists and is finite, the integral converges. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Convergence & Divergence, which explains ∫₁^∞ 1/xᵖ dx?',
            options: [
              'If the limit exists and is finite, the integral converges',
              'If the limit is ±∞ or doesn\'t exist, the integral diverges',
              'converges if p < 1, diverges if p ≥ 1',
              'converges if p > 1, diverges if p ≤ 1 (p-series test)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ∫₁^∞ 1/xᵖ dx: converges if p > 1, diverges if p ≤ 1 (p-series test). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ∫₀¹ 1/xᵖ dx is correct?',
            options: [
              'If the limit is ±∞ or doesn\'t exist, the integral diverges',
              'If the limit exists and is finite, the integral converges',
              'converges if p > 1, diverges if p ≤ 1 (p-series test)',
              'converges if p < 1, diverges if p ≥ 1'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ∫₀¹ 1/xᵖ dx: converges if p < 1, diverges if p ≥ 1. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'impro3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫₁^∞ 1/xᵖ dx',
            options: ['converges if p > 1, diverges if p ≤ 1 (p-series test)', 'If the limit is ±∞ or doesn\'t exist, the integral diverges', 'converges if p < 1, diverges if p ≥ 1', 'If the limit exists and is finite, the integral converges']
          },
          {
            label: '∫₀¹ 1/xᵖ dx',
            options: ['converges if p < 1, diverges if p ≥ 1', 'If the limit exists and is finite, the integral converges', 'converges if p > 1, diverges if p ≤ 1 (p-series test)', 'If the limit is ±∞ or doesn\'t exist, the integral diverges']
          }
        ],
        correctAnswers: ['converges if p > 1, diverges if p ≤ 1 (p-series test)', 'converges if p < 1, diverges if p ≥ 1'],
        hint1: 'Think about what each concept specifically describes in Convergence & Divergence.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Convergence & Divergence describes a specific idea. ∫₁^∞ 1/xᵖ dx: converges if p > 1, diverges if p ≤ 1 (p-series test). ∫₀¹ 1/xᵖ dx: converges if p < 1, diverges if p ≥ 1.'
      }
    }
  ]
}
