export const calcABAntiderivativesPart1Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'antid1-intro',
      type: 'text' as const,
      content: `
# ∫ Antiderivatives Indefinite Integrals

**Part 1 of 7 — Antiderivatives**

### 1. An antiderivative of f is a function F such that F' = f

An antiderivative of f is a function F such that F' = f

### 2. General antiderivative

F(x) + C (always include the constant of integration)

### 3. The indefinite integral ∫f(x)dx represents the family of all antiderivatives

The indefinite integral ∫f(x)dx represents the family of all antiderivatives

### 4. Integration is the reverse of differentiation

Integration is the reverse of differentiation
      `
    },
    {
      id: 'antid1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains An antiderivative of f is a function F…?',
            options: [
              'The indefinite integral ∫f(x)dx represents the family of all antiderivatives',
              'F(x) + C (always include the constant of integration)',
              'An antiderivative of f is a function F such that F\' = f',
              'Integration is the reverse of differentiation'
            ],
            correctAnswer: 2,
            explanation: 'Correct — An antiderivative of f is a function F such that F\' = f. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Antiderivatives Indefinite Integrals, which explains The indefinite integral ∫f(x)dx…?',
            options: [
              'An antiderivative of f is a function F such that F\' = f',
              'The indefinite integral ∫f(x)dx represents the family of all antiderivatives',
              'Integration is the reverse of differentiation',
              'F(x) + C (always include the constant of integration)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — The indefinite integral ∫f(x)dx represents the family of all antiderivatives. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'antid1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **An antiderivative of f is a function F such that F' = f**
- **General antiderivative**: F(x) + C (always include the constant of integration)
- **The indefinite integral ∫f(x)dx represents the family of all antiderivatives**
- **Integration is the reverse of differentiation**
      `
    },
    {
      id: 'antid1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Integration is the reverse of…?',
            options: [
              'The indefinite integral ∫f(x)dx represents the family of all antiderivatives',
              'An antiderivative of f is a function F such that F\' = f',
              'Integration is the reverse of differentiation',
              'F(x) + C (always include the constant of integration)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Integration is the reverse of differentiation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'antid1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An antiderivative of f is a function F…',
            options: ['Integration is the reverse of differentiation', 'The indefinite integral ∫f(x)dx represents the family of all antiderivatives', 'F(x) + C (always include the constant of integration)', 'An antiderivative of f is a function F such that F\' = f']
          },
          {
            label: 'General antiderivative',
            options: ['An antiderivative of f is a function F such that F\' = f', 'The indefinite integral ∫f(x)dx represents the family of all antiderivatives', 'F(x) + C (always include the constant of integration)', 'Integration is the reverse of differentiation']
          },
          {
            label: 'The indefinite integral ∫f(x)dx…',
            options: ['An antiderivative of f is a function F such that F\' = f', 'Integration is the reverse of differentiation', 'The indefinite integral ∫f(x)dx represents the family of all antiderivatives', 'F(x) + C (always include the constant of integration)']
          }
        ],
        correctAnswers: ['An antiderivative of f is a function F such that F\' = f', 'F(x) + C (always include the constant of integration)', 'The indefinite integral ∫f(x)dx represents the family of all antiderivatives'],
        hint1: 'Think about what each concept specifically describes in Antiderivatives Indefinite Integrals.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Antiderivatives Indefinite Integrals describes a specific idea. An antiderivative of f is a function F such that F\' = f. General antiderivative: F(x) + C (always include the constant of integration). The indefinite integral ∫f(x)dx represents the family of all antiderivatives.'
      }
    }
  ]
}
