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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Area under f(x) from a to b" refer to in calculus?',
            options: [
              'Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions',
              'For f(x) < 0, the integral gives negative area; use |f(x)| for total area',
              'Split the integral at zeros of f when the sign changes',
              'A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Area under f(x) from a to b: A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Total area = ∫ₐᵇ |f(x)|dx = sum of…:',
            options: [
              'Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions',
              'A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)',
              'Split the integral at zeros of f when the sign changes',
              'For f(x) < 0, the integral gives negative area; use |f(x)| for total area'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Area Between Curves, which correctly describes Split the integral at zeros of f when…?',
            options: [
              'Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions',
              'A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)',
              'For f(x) < 0, the integral gives negative area; use |f(x)| for total area',
              'Split the integral at zeros of f when the sign changes'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Split the integral at zeros of f when the sign changes. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'area-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area under f(x) from a to b',
            options: ['Split the integral at zeros of f when the sign changes', 'A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)', 'For f(x) < 0, the integral gives negative area; use |f(x)| for total area', 'Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions']
          },
          {
            label: 'For f(x) < 0, the integral gives…',
            options: ['For f(x) < 0, the integral gives negative area; use |f(x)| for total area', 'Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions', 'A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)', 'Split the integral at zeros of f when the sign changes']
          },
          {
            label: 'Total area = ∫ₐᵇ |f(x)|dx = sum of…',
            options: ['Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions', 'Split the integral at zeros of f when the sign changes', 'A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)', 'For f(x) < 0, the integral gives negative area; use |f(x)| for total area']
          }
        ],
        correctAnswers: ['A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)', 'For f(x) < 0, the integral gives negative area; use |f(x)| for total area', 'Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions'],
        hint1: 'Think about what each concept specifically describes in Area Between Curves.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Area Between Curves describes a specific idea. Area under f(x) from a to b: A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0). For f(x) < 0, the integral gives negative area; use |f(x)| for total area. Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions.'
      }
    }
  ]
}
