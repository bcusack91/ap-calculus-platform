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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes f and f⁻¹ are reflections across y = x?',
            options: [
              'f(f⁻¹(x)) = x and f⁻¹(f(x)) = x',
              'f and f⁻¹ are reflections across y = x',
              'Only one-to-one functions have inverses',
              'Domain of f = Range of f⁻¹ and vice versa'
            ],
            correctAnswer: 1,
            explanation: 'Correct — f and f⁻¹ are reflections across y = x. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Inverse Functions Derivatives, which explains Domain of f = Range of f⁻¹ and vice…?',
            options: [
              'f(f⁻¹(x)) = x and f⁻¹(f(x)) = x',
              'f and f⁻¹ are reflections across y = x',
              'Domain of f = Range of f⁻¹ and vice versa',
              'Only one-to-one functions have inverses'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Domain of f = Range of f⁻¹ and vice versa. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Inverse Functions Derivatives, which correctly describes Only one-to-one functions have inverses?',
            options: [
              'Only one-to-one functions have inverses',
              'f and f⁻¹ are reflections across y = x',
              'f(f⁻¹(x)) = x and f⁻¹(f(x)) = x',
              'Domain of f = Range of f⁻¹ and vice versa'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Only one-to-one functions have inverses. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'inver1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f and f⁻¹ are reflections across y = x',
            options: ['f(f⁻¹(x)) = x and f⁻¹(f(x)) = x', 'Domain of f = Range of f⁻¹ and vice versa', 'Only one-to-one functions have inverses', 'f and f⁻¹ are reflections across y = x']
          },
          {
            label: 'f(f⁻¹(x)) = x and f⁻¹(f(x)) = x',
            options: ['f(f⁻¹(x)) = x and f⁻¹(f(x)) = x', 'f and f⁻¹ are reflections across y = x', 'Domain of f = Range of f⁻¹ and vice versa', 'Only one-to-one functions have inverses']
          },
          {
            label: 'Domain of f = Range of f⁻¹ and vice…',
            options: ['f and f⁻¹ are reflections across y = x', 'f(f⁻¹(x)) = x and f⁻¹(f(x)) = x', 'Domain of f = Range of f⁻¹ and vice versa', 'Only one-to-one functions have inverses']
          }
        ],
        correctAnswers: ['f and f⁻¹ are reflections across y = x', 'f(f⁻¹(x)) = x and f⁻¹(f(x)) = x', 'Domain of f = Range of f⁻¹ and vice versa'],
        hint1: 'Think about what each concept specifically describes in Inverse Functions Derivatives.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Inverse Functions Derivatives describes a specific idea. f and f⁻¹ are reflections across y = x. f(f⁻¹(x)) = x and f⁻¹(f(x)) = x. Domain of f = Range of f⁻¹ and vice versa.'
      }
    }
  ]
}
