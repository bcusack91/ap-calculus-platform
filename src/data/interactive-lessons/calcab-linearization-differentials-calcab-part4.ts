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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Newton\'s Method?',
            options: [
              'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)',
              'Iteratively approximates roots of f(x) = 0',
              'May fail if f\'(xₙ) = 0 or if the initial guess is too far from the root',
              'Converges quickly when starting near a root'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Newton\'s Method: xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Converges quickly when starting near a…:',
            options: [
              'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)',
              'Converges quickly when starting near a root',
              'May fail if f\'(xₙ) = 0 or if the initial guess is too far from the root',
              'Iteratively approximates roots of f(x) = 0'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Converges quickly when starting near a root. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Newton\'s Method (Preview), which correctly describes May fail if f\'(xₙ) = 0 or if the…?',
            options: [
              'Iteratively approximates roots of f(x) = 0',
              'May fail if f\'(xₙ) = 0 or if the initial guess is too far from the root',
              'Converges quickly when starting near a root',
              'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — May fail if f\'(xₙ) = 0 or if the initial guess is too far from the root. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'linea4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Newton\'s Method',
            options: ['May fail if f\'(xₙ) = 0 or if the initial guess is too far from the root', 'Iteratively approximates roots of f(x) = 0', 'Converges quickly when starting near a root', 'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)']
          },
          {
            label: 'Iteratively approximates roots of f(x)…',
            options: ['Iteratively approximates roots of f(x) = 0', 'Converges quickly when starting near a root', 'May fail if f\'(xₙ) = 0 or if the initial guess is too far from the root', 'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)']
          },
          {
            label: 'Converges quickly when starting near a…',
            options: ['Iteratively approximates roots of f(x) = 0', 'Converges quickly when starting near a root', 'May fail if f\'(xₙ) = 0 or if the initial guess is too far from the root', 'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)']
          }
        ],
        correctAnswers: ['xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)', 'Iteratively approximates roots of f(x) = 0', 'Converges quickly when starting near a root'],
        hint1: 'Think about what each concept specifically describes in Newton\'s Method (Preview).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Newton\'s Method (Preview) describes a specific idea. Newton\'s Method: xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ). Iteratively approximates roots of f(x) = 0. Converges quickly when starting near a root.'
      }
    }
  ]
}
