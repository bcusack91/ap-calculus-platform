export const calcABAreaCurvesPart1Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area-1-intro',
      type: 'text' as const,
      content: `
# ∫ Area Between Curves

**Part 1 of 7 — Area Under a Curve**

### 1. Area under f(x) from a to b

A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)

### 2. For f(x) < 0, the integral gives negative area; use |f(x)| for total area

For f(x) < 0, the integral gives negative area; use |f(x)| for total area

### 3. Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions

Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions

### 4. Split the integral at zeros of f when the sign changes

Split the integral at zeros of f when the sign changes
      `
    },
    {
      id: 'area-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of area under a curve?',
            options: [
              'Area under f(x) from a to b',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Area under f(x) from a to b: A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)'
          },
          {
            question: 'In the context of area under a curve, which is accurate?',
            options: [
              'Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions'
          }
        ]
      }
    },
    {
      id: 'area-1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Area under f(x) from a to b**: A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)
- **For f(x) < 0, the integral gives negative area; use |f(x)| for total area**
- **Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions**
- **Split the integral at zeros of f when the sign changes**
      `
    },
    {
      id: 'area-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to area under a curve?',
            options: [
              'Split the integral at zeros of f when the sign changes',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Split the integral at zeros of f when the sign changes'
          }
        ]
      }
    },
    {
      id: 'area-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area under f(x) from a to b',
            options: ['A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'For f(x) < 0, the integral gives negative area; use |f(x)| for total area',
            options: ['For f(x) < 0, the integral gives negative area; us', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions',
            options: ['Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positi', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)', 'For f(x) < 0, the integral gives negative area; us', 'Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positi'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Area Under a Curve.'
      }
    }
  ]
}
