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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of inverse tangent (arctan)?',
            options: [
              'arctan(x) = tan⁻¹(x)',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'arctan(x) = tan⁻¹(x): finds the angle whose tangent is x'
          },
          {
            question: 'In the context of inverse tangent (arctan), which is accurate?',
            options: [
              'Horizontal asymptotes at y = ±π/2',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Horizontal asymptotes at y = ±π/2'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'arctan(x) = tan⁻¹(x)',
            options: ['finds the angle whose tangent is x', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Domain',
            options: ['all reals; Range: (-π/2, π/2)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Horizontal asymptotes at y = ±π/2',
            options: ['Horizontal asymptotes at y = ±π/2', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['finds the angle whose tangent is x', 'all reals; Range: (-π/2, π/2)', 'Horizontal asymptotes at y = ±π/2'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Inverse Tangent (arctan).'
      }
    }
  ]
}
