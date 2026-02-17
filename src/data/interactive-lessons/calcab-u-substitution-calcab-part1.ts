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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains u-substitution reverses the chain rule…?',
            options: [
              'Let u = g(x), then du = g\'(x)dx',
              'After integrating in terms of u, substitute back to x',
              '∫f(g(x))·g\'(x)dx = ∫f(u)du',
              'u-substitution reverses the chain rule for integration'
            ],
            correctAnswer: 3,
            explanation: 'Correct — u-substitution reverses the chain rule for integration. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of U Substitution, which explains ∫f(g(x))·g\'(x)dx = ∫f(u)du?',
            options: [
              '∫f(g(x))·g\'(x)dx = ∫f(u)du',
              'After integrating in terms of u, substitute back to x',
              'Let u = g(x), then du = g\'(x)dx',
              'u-substitution reverses the chain rule for integration'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ∫f(g(x))·g\'(x)dx = ∫f(u)du. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about After integrating in terms of u,… is correct?',
            options: [
              'After integrating in terms of u, substitute back to x',
              'u-substitution reverses the chain rule for integration',
              '∫f(g(x))·g\'(x)dx = ∫f(u)du',
              'Let u = g(x), then du = g\'(x)dx'
            ],
            correctAnswer: 0,
            explanation: 'Correct — After integrating in terms of u, substitute back to x. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'u-sub1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'u-substitution reverses the chain rule…',
            options: ['∫f(g(x))·g\'(x)dx = ∫f(u)du', 'After integrating in terms of u, substitute back to x', 'Let u = g(x), then du = g\'(x)dx', 'u-substitution reverses the chain rule for integration']
          },
          {
            label: 'Let u = g(x), then du = g\'(x)dx',
            options: ['Let u = g(x), then du = g\'(x)dx', '∫f(g(x))·g\'(x)dx = ∫f(u)du', 'After integrating in terms of u, substitute back to x', 'u-substitution reverses the chain rule for integration']
          },
          {
            label: '∫f(g(x))·g\'(x)dx = ∫f(u)du',
            options: ['∫f(g(x))·g\'(x)dx = ∫f(u)du', 'After integrating in terms of u, substitute back to x', 'Let u = g(x), then du = g\'(x)dx', 'u-substitution reverses the chain rule for integration']
          }
        ],
        correctAnswers: ['u-substitution reverses the chain rule for integration', 'Let u = g(x), then du = g\'(x)dx', '∫f(g(x))·g\'(x)dx = ∫f(u)du'],
        hint1: 'Think about what each concept specifically describes in U Substitution.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in U Substitution describes a specific idea. u-substitution reverses the chain rule for integration. Let u = g(x), then du = g\'(x)dx. ∫f(g(x))·g\'(x)dx = ∫f(u)du.'
      }
    }
  ]
}
