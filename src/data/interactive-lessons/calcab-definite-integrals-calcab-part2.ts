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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of the definite integral?',
            options: [
              '∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: '∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx'
          },
          {
            question: 'In the context of the definite integral, which is accurate?',
            options: [
              'Area above x-axis is positive; area below is negative',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Area above x-axis is positive; area below is negative'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to the definite integral?',
            options: [
              'total area uses |f(x)|',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Net area vs total area: total area uses |f(x)|'
          }
        ]
      }
    },
    {
      id: 'defin2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx',
            options: ['∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Geometric interpretation',
            options: ['signed area under the curve from a to b', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Area above x-axis is positive; area below is negative',
            options: ['Area above x-axis is positive; area below is negat', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx', 'signed area under the curve from a to b', 'Area above x-axis is positive; area below is negat'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding The Definite Integral.'
      }
    }
  ]
}
