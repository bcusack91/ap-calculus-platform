export const calcABInverseDerivPart1Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inver1-intro',
      type: 'text' as const,
      content: `
# ∫ Inverse Functions Derivatives

**Part 1 of 7 — Review of Inverse Functions**

### 1. f and f⁻¹ are reflections across y = x

f and f⁻¹ are reflections across y = x

### 2. f(f⁻¹(x)) = x and f⁻¹(f(x)) = x

f(f⁻¹(x)) = x and f⁻¹(f(x)) = x

### 3. Domain of f = Range of f⁻¹ and vice versa

Domain of f = Range of f⁻¹ and vice versa

### 4. Only one-to-one functions have inverses

Only one-to-one functions have inverses
      `
    },
    {
      id: 'inver1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review of inverse functions?',
            options: [
              'f and f⁻¹ are reflections across y = x',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'f and f⁻¹ are reflections across y = x'
          },
          {
            question: 'In the context of review of inverse functions, which is accurate?',
            options: [
              'Domain of f = Range of f⁻¹ and vice versa',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Domain of f = Range of f⁻¹ and vice versa'
          }
        ]
      }
    },
    {
      id: 'inver1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **f and f⁻¹ are reflections across y = x**
- **f(f⁻¹(x)) = x and f⁻¹(f(x)) = x**
- **Domain of f = Range of f⁻¹ and vice versa**
- **Only one-to-one functions have inverses**
      `
    },
    {
      id: 'inver1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review of inverse functions?',
            options: [
              'Only one-to-one functions have inverses',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Only one-to-one functions have inverses'
          }
        ]
      }
    },
    {
      id: 'inver1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f and f⁻¹ are reflections across y = x',
            options: ['f and f⁻¹ are reflections across y = x', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'f(f⁻¹(x)) = x and f⁻¹(f(x)) = x',
            options: ['f(f⁻¹(x)) = x and f⁻¹(f(x)) = x', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Domain of f = Range of f⁻¹ and vice versa',
            options: ['Domain of f = Range of f⁻¹ and vice versa', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f and f⁻¹ are reflections across y = x', 'f(f⁻¹(x)) = x and f⁻¹(f(x)) = x', 'Domain of f = Range of f⁻¹ and vice versa'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review of Inverse Functions.'
      }
    }
  ]
}
