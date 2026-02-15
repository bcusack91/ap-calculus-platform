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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of area between two curves (vertical)?',
            options: [
              'Area between f(x) and g(x)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Area between f(x) and g(x): A = ∫ₐᵇ |f(x) - g(x)|dx'
          },
          {
            question: 'In the context of area between two curves (vertical), which is accurate?',
            options: [
              'Top function minus bottom function, integrated from left to right',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Top function minus bottom function, integrated from left to right'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to area between two curves (vertical)?',
            options: [
              'Find intersection points to determine bounds of integration',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Find intersection points to determine bounds of integration'
          }
        ]
      }
    },
    {
      id: 'area-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area between f(x) and g(x)',
            options: ['A = ∫ₐᵇ |f(x) - g(x)|dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'When f(x) ≥ g(x) on [a,b]',
            options: ['A = ∫ₐᵇ [f(x) - g(x)]dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Top function minus bottom function, integrated from left to right',
            options: ['Top function minus bottom function, integrated fro', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['A = ∫ₐᵇ |f(x) - g(x)|dx', 'A = ∫ₐᵇ [f(x) - g(x)]dx', 'Top function minus bottom function, integrated fro'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Area Between Two Curves (Vertical).'
      }
    }
  ]
}
