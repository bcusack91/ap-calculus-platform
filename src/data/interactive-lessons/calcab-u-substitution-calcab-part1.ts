export const calcABUSubPart1Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'u-sub1-intro',
      type: 'text' as const,
      content: `
# ∫ U Substitution

**Part 1 of 7 — Introduction to u-Substitution**

### 1. u-substitution reverses the chain rule for integration

u-substitution reverses the chain rule for integration

### 2. Let u = g(x), then du = g'(x)dx

Let u = g(x), then du = g'(x)dx

### 3. ∫f(g(x))·g'(x)dx = ∫f(u)du

∫f(g(x))·g'(x)dx = ∫f(u)du

### 4. After integrating in terms of u, substitute back to x

After integrating in terms of u, substitute back to x
      `
    },
    {
      id: 'u-sub1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of introduction to u-substitution?',
            options: [
              'u-substitution reverses the chain rule for integration',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'u-substitution reverses the chain rule for integration'
          },
          {
            question: 'In the context of introduction to u-substitution, which is accurate?',
            options: [
              '∫f(g(x))·g\'(x)dx = ∫f(u)du',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '∫f(g(x))·g\'(x)dx = ∫f(u)du'
          }
        ]
      }
    },
    {
      id: 'u-sub1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **u-substitution reverses the chain rule for integration**
- **Let u = g(x), then du = g'(x)dx**
- **∫f(g(x))·g'(x)dx = ∫f(u)du**
- **After integrating in terms of u, substitute back to x**
      `
    },
    {
      id: 'u-sub1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to u-substitution?',
            options: [
              'After integrating in terms of u, substitute back to x',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'After integrating in terms of u, substitute back to x'
          }
        ]
      }
    },
    {
      id: 'u-sub1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'u-substitution reverses the chain rule for integration',
            options: ['u-substitution reverses the chain rule for integra', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Let u = g(x), then du = g\'(x)dx',
            options: ['Let u = g(x), then du = g\'(x)dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫f(g(x))·g\'(x)dx = ∫f(u)du',
            options: ['∫f(g(x))·g\'(x)dx = ∫f(u)du', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['u-substitution reverses the chain rule for integra', 'Let u = g(x), then du = g\'(x)dx', '∫f(g(x))·g\'(x)dx = ∫f(u)du'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to u-Substitution.'
      }
    }
  ]
}
