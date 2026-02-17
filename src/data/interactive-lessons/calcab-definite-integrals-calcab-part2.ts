export const calcABDefiniteIntegralsPart2Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'defin2-intro',
      type: 'text' as const,
      content: `
# The Definite Integral

**Part 2 of 7 — The Definite Integral**

### 1. ∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx

∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx

### 2. Geometric interpretation

signed area under the curve from a to b

### 3. Area above x-axis is positive; area below is negative

Area above x-axis is positive; area below is negative

### 4. Net area vs total area

total area uses |f(x)|
      `
    },
    {
      id: 'defin2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx" refer to in calculus?',
            options: [
              'total area uses |f(x)|',
              'Area above x-axis is positive; area below is negative',
              'signed area under the curve from a to b',
              '∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Area above x-axis is positive; area…:',
            options: [
              'Area above x-axis is positive; area below is negative',
              'signed area under the curve from a to b',
              '∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx',
              'total area uses |f(x)|'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Area above x-axis is positive; area below is negative. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'defin2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx**
- **Geometric interpretation**: signed area under the curve from a to b
- **Area above x-axis is positive; area below is negative**
- **Net area vs total area**: total area uses |f(x)|
      `
    },
    {
      id: 'defin2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Net area vs total area is correct?',
            options: [
              'total area uses |f(x)|',
              'Area above x-axis is positive; area below is negative',
              'signed area under the curve from a to b',
              '∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Net area vs total area: total area uses |f(x)|. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'defin2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Geometric interpretation',
            options: ['Area above x-axis is positive; area below is negative', 'total area uses |f(x)|', '∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx', 'signed area under the curve from a to b']
          },
          {
            label: 'Net area vs total area',
            options: ['Area above x-axis is positive; area below is negative', '∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx', 'total area uses |f(x)|', 'signed area under the curve from a to b']
          }
        ],
        correctAnswers: ['signed area under the curve from a to b', 'total area uses |f(x)|'],
        hint1: 'Think about what each concept specifically describes in The Definite Integral.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in The Definite Integral describes a specific idea. Geometric interpretation: signed area under the curve from a to b. Net area vs total area: total area uses |f(x)|.'
      }
    }
  ]
}
