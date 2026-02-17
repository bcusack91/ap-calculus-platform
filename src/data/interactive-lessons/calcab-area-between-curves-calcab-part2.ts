export const calcABAreaCurvesPart2Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area-2-intro',
      type: 'text' as const,
      content: `
# Area Between Two Curves (Vertical)

**Part 2 of 7 — Area Between Two Curves (Vertical)**

### 1. Area between f(x) and g(x)

A = ∫ₐᵇ |f(x) - g(x)|dx

### 2. When f(x) ≥ g(x) on [a,b]

A = ∫ₐᵇ [f(x) - g(x)]dx

### 3. Top function minus bottom function, integrated from left to right

Top function minus bottom function, integrated from left to right

### 4. Find intersection points to determine bounds of integration

Find intersection points to determine bounds of integration
      `
    },
    {
      id: 'area-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Area between f(x) and g(x)" refer to in calculus?',
            options: [
              'Top function minus bottom function, integrated from left to right',
              'Find intersection points to determine bounds of integration',
              'A = ∫ₐᵇ |f(x) - g(x)|dx',
              'A = ∫ₐᵇ [f(x) - g(x)]dx'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Area between f(x) and g(x): A = ∫ₐᵇ |f(x) - g(x)|dx. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Top function minus bottom function,…:',
            options: [
              'Find intersection points to determine bounds of integration',
              'A = ∫ₐᵇ |f(x) - g(x)|dx',
              'Top function minus bottom function, integrated from left to right',
              'A = ∫ₐᵇ [f(x) - g(x)]dx'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Top function minus bottom function, integrated from left to right. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'area-2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Area between f(x) and g(x)**: A = ∫ₐᵇ |f(x) - g(x)|dx
- **When f(x) ≥ g(x) on [a,b]**: A = ∫ₐᵇ [f(x) - g(x)]dx
- **Top function minus bottom function, integrated from left to right**
- **Find intersection points to determine bounds of integration**
      `
    },
    {
      id: 'area-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Find intersection points to determine…?',
            options: [
              'A = ∫ₐᵇ |f(x) - g(x)|dx',
              'A = ∫ₐᵇ [f(x) - g(x)]dx',
              'Find intersection points to determine bounds of integration',
              'Top function minus bottom function, integrated from left to right'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Find intersection points to determine bounds of integration. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'area-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area between f(x) and g(x)',
            options: ['A = ∫ₐᵇ [f(x) - g(x)]dx', 'A = ∫ₐᵇ |f(x) - g(x)|dx', 'Top function minus bottom function, integrated from left to right', 'Find intersection points to determine bounds of integration']
          },
          {
            label: 'When f(x) ≥ g(x) on [a,b]',
            options: ['A = ∫ₐᵇ |f(x) - g(x)|dx', 'Top function minus bottom function, integrated from left to right', 'Find intersection points to determine bounds of integration', 'A = ∫ₐᵇ [f(x) - g(x)]dx']
          }
        ],
        correctAnswers: ['A = ∫ₐᵇ |f(x) - g(x)|dx', 'A = ∫ₐᵇ [f(x) - g(x)]dx'],
        hint1: 'Think about what each concept specifically describes in Area Between Two Curves (Vertical).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Area Between Two Curves (Vertical) describes a specific idea. Area between f(x) and g(x): A = ∫ₐᵇ |f(x) - g(x)|dx. When f(x) ≥ g(x) on [a,b]: A = ∫ₐᵇ [f(x) - g(x)]dx.'
      }
    }
  ]
}
