export const precalcInverseTrigPart3Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'inver3-intro',
      type: 'text' as const,
      content: `
# Inverse Tangent (arctan)

**Part 3 of 7 — Inverse Tangent (arctan)**

### 1. arctan(x) = tan⁻¹(x)

finds the angle whose tangent is x

### 2. Domain

all reals; Range: (-π/2, π/2)

### 3. Horizontal asymptotes at y = ±π/2

Horizontal asymptotes at y = ±π/2

### 4. tan(tan⁻¹(x)) = x for all real x

tan(tan⁻¹(x)) = x for all real x
      `
    },
    {
      id: 'inver3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "arctan(x) = tan⁻¹(x)" refer to in precalculus?',
            options: [
              'finds the angle whose tangent is x',
              'tan(tan⁻¹(x)) = x for all real x',
              'all reals; Range: (-π/2, π/2)',
              'Horizontal asymptotes at y = ±π/2'
            ],
            correctAnswer: 0,
            explanation: 'Correct — arctan(x) = tan⁻¹(x): finds the angle whose tangent is x. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Inverse Tangent (arctan), which explains Horizontal asymptotes at y = ±π/2?',
            options: [
              'finds the angle whose tangent is x',
              'tan(tan⁻¹(x)) = x for all real x',
              'all reals; Range: (-π/2, π/2)',
              'Horizontal asymptotes at y = ±π/2'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Horizontal asymptotes at y = ±π/2. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'inver3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **arctan(x) = tan⁻¹(x)**: finds the angle whose tangent is x
- **Domain**: all reals; Range: (-π/2, π/2)
- **Horizontal asymptotes at y = ±π/2**
- **tan(tan⁻¹(x)) = x for all real x**
      `
    },
    {
      id: 'inver3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to inverse tangent (arctan)?',
            options: [
              'tan(tan⁻¹(x)) = x for all real x',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'tan(tan⁻¹(x)) = x for all real x'
          }
        ]
      }
    },
    {
      id: 'inver3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'arctan(x) = tan⁻¹(x)',
            options: ['tan(tan⁻¹(x)) = x for all real x', 'Horizontal asymptotes at y = ±π/2', 'finds the angle whose tangent is x', 'all reals; Range: (-π/2, π/2)']
          },
          {
            label: 'Domain',
            options: ['Horizontal asymptotes at y = ±π/2', 'finds the angle whose tangent is x', 'all reals; Range: (-π/2, π/2)', 'tan(tan⁻¹(x)) = x for all real x']
          }
        ],
        correctAnswers: ['finds the angle whose tangent is x', 'all reals; Range: (-π/2, π/2)'],
        hint1: 'Think about what each concept specifically describes in Inverse Tangent (arctan).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Inverse Tangent (arctan) describes a specific idea. arctan(x) = tan⁻¹(x): finds the angle whose tangent is x. Domain: all reals; Range: (-π/2, π/2).'
      }
    }
  ]
}
