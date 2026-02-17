export const calcABDefiniteIntegralsPart3Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'defin3-intro',
      type: 'text' as const,
      content: `
# Properties of Definite Integrals

**Part 3 of 7 — Properties of Definite Integrals**

### 1. ∫ₐᵃ f(x)dx = 0 (zero-width interval)

∫ₐᵃ f(x)dx = 0 (zero-width interval)

### 2. ∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)

∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)

### 3. ∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx

∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx

### 4. ∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)

∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)
      `
    },
    {
      id: 'defin3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "∫ₐᵃ f(x)dx = 0 (zero-width interval)" refer to in calculus?',
            options: [
              '∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)',
              '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx',
              '∫ₐᵃ f(x)dx = 0 (zero-width interval)',
              '∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ∫ₐᵃ f(x)dx = 0 (zero-width interval). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes ∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ…:',
            options: [
              '∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)',
              '∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)',
              '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx',
              '∫ₐᵃ f(x)dx = 0 (zero-width interval)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'defin3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫ₐᵃ f(x)dx = 0 (zero-width interval)**
- **∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)**
- **∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx**
- **∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)**
      `
    },
    {
      id: 'defin3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant…?',
            options: [
              '∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)',
              '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx',
              '∫ₐᵃ f(x)dx = 0 (zero-width interval)',
              '∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'defin3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫ₐᵃ f(x)dx = 0 (zero-width interval)',
            options: ['∫ₐᵃ f(x)dx = 0 (zero-width interval)', '∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)', '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx', '∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)']
          },
          {
            label: '∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing…',
            options: ['∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)', '∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)', '∫ₐᵃ f(x)dx = 0 (zero-width interval)', '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx']
          },
          {
            label: '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ…',
            options: ['∫ₐᵃ f(x)dx = 0 (zero-width interval)', '∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)', '∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)', '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx']
          }
        ],
        correctAnswers: ['∫ₐᵃ f(x)dx = 0 (zero-width interval)', '∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)', '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx'],
        hint1: 'Think about what each concept specifically describes in Properties of Definite Integrals.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Properties of Definite Integrals describes a specific idea. ∫ₐᵃ f(x)dx = 0 (zero-width interval). ∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral). ∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx.'
      }
    }
  ]
}
