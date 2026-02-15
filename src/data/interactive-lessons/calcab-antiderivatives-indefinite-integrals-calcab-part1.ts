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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of antiderivatives?',
            options: [
              'An antiderivative of f is a function F such that F\' = f',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'An antiderivative of f is a function F such that F\' = f'
          },
          {
            question: 'In the context of antiderivatives, which is accurate?',
            options: [
              'The indefinite integral ∫f(x)dx represents the family of all antiderivatives',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The indefinite integral ∫f(x)dx represents the family of all antiderivatives'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to antiderivatives?',
            options: [
              'Integration is the reverse of differentiation',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Integration is the reverse of differentiation'
          }
        ]
      }
    },
    {
      id: 'antid1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An antiderivative of f is a function F such that F\' = f',
            options: ['An antiderivative of f is a function F such that F', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'General antiderivative',
            options: ['F(x) + C (always include the constant of integrati', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The indefinite integral ∫f(x)dx represents the family of all antiderivatives',
            options: ['The indefinite integral ∫f(x)dx represents the fam', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['An antiderivative of f is a function F such that F', 'F(x) + C (always include the constant of integrati', 'The indefinite integral ∫f(x)dx represents the fam'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Antiderivatives.'
      }
    }
  ]
}
