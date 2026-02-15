export const calcABLinearizationPart4Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'linea4-intro',
      type: 'text' as const,
      content: `
# Newton's Method (Preview)

**Part 4 of 7 — Newton's Method (Preview)**

### 1. Newton's Method

xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)

### 2. Iteratively approximates roots of f(x) = 0

Iteratively approximates roots of f(x) = 0

### 3. Converges quickly when starting near a root

Converges quickly when starting near a root

### 4. May fail if f'(xₙ) = 0 or if the initial guess is too far from the root

May fail if f'(xₙ) = 0 or if the initial guess is too far from the root
      `
    },
    {
      id: 'linea4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of newton\'s method (preview)?',
            options: [
              'Newton\'s Method',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Newton\'s Method: xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)'
          },
          {
            question: 'In the context of newton\'s method (preview), which is accurate?',
            options: [
              'Converges quickly when starting near a root',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Converges quickly when starting near a root'
          }
        ]
      }
    },
    {
      id: 'linea4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Newton's Method**: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)
- **Iteratively approximates roots of f(x) = 0**
- **Converges quickly when starting near a root**
- **May fail if f'(xₙ) = 0 or if the initial guess is too far from the root**
      `
    },
    {
      id: 'linea4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to newton\'s method (preview)?',
            options: [
              'May fail if f\'(xₙ) = 0 or if the initial guess is too far from the root',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'May fail if f\'(xₙ) = 0 or if the initial guess is too far from the root'
          }
        ]
      }
    },
    {
      id: 'linea4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Newton\'s Method',
            options: ['xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Iteratively approximates roots of f(x) = 0',
            options: ['Iteratively approximates roots of f(x) = 0', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Converges quickly when starting near a root',
            options: ['Converges quickly when starting near a root', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)', 'Iteratively approximates roots of f(x) = 0', 'Converges quickly when starting near a root'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Newton\'s Method (Preview).'
      }
    }
  ]
}
