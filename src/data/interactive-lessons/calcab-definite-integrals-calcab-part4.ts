export const calcABDefiniteIntegralsPart4Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'defin4-intro',
      type: 'text' as const,
      content: `
# Fundamental Theorem of Calculus (Part 1)

**Part 4 of 7 — Fundamental Theorem of Calculus (Part 1)**

### 1. FTC Part 1

d/dx[∫ₐˣ f(t)dt] = f(x)

### 2. If F(x) = ∫ₐˣ f(t)dt, then F'(x) = f(x)

If F(x) = ∫ₐˣ f(t)dt, then F'(x) = f(x)

### 3. With chain rule

d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g'(x)

### 4. This connects differentiation and integration as inverse processes

This connects differentiation and integration as inverse processes
      `
    },
    {
      id: 'defin4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "FTC Part 1" refer to in calculus?',
            options: [
              'd/dx[∫ₐˣ f(t)dt] = f(x)',
              'If F(x) = ∫ₐˣ f(t)dt, then F\'(x) = f(x)',
              'This connects differentiation and integration as inverse processes',
              'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — FTC Part 1: d/dx[∫ₐˣ f(t)dt] = f(x). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Fundamental Theorem of Calculus (Part 1), which explains With chain rule?',
            options: [
              'If F(x) = ∫ₐˣ f(t)dt, then F\'(x) = f(x)',
              'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x)',
              'd/dx[∫ₐˣ f(t)dt] = f(x)',
              'This connects differentiation and integration as inverse processes'
            ],
            correctAnswer: 1,
            explanation: 'Correct — With chain rule: d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'defin4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **FTC Part 1**: d/dx[∫ₐˣ f(t)dt] = f(x)
- **If F(x) = ∫ₐˣ f(t)dt, then F'(x) = f(x)**
- **With chain rule**: d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g'(x)
- **This connects differentiation and integration as inverse processes**
      `
    },
    {
      id: 'defin4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Fundamental Theorem of Calculus (Part 1), which correctly describes This connects differentiation and…?',
            options: [
              'If F(x) = ∫ₐˣ f(t)dt, then F\'(x) = f(x)',
              'd/dx[∫ₐˣ f(t)dt] = f(x)',
              'This connects differentiation and integration as inverse processes',
              'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — This connects differentiation and integration as inverse processes. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'defin4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'FTC Part 1',
            options: ['This connects differentiation and integration as inverse processes', 'd/dx[∫ₐˣ f(t)dt] = f(x)', 'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x)', 'If F(x) = ∫ₐˣ f(t)dt, then F\'(x) = f(x)']
          },
          {
            label: 'With chain rule',
            options: ['This connects differentiation and integration as inverse processes', 'd/dx[∫ₐˣ f(t)dt] = f(x)', 'If F(x) = ∫ₐˣ f(t)dt, then F\'(x) = f(x)', 'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x)']
          }
        ],
        correctAnswers: ['d/dx[∫ₐˣ f(t)dt] = f(x)', 'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x)'],
        hint1: 'Think about what each concept specifically describes in Fundamental Theorem of Calculus (Part 1).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Fundamental Theorem of Calculus (Part 1) describes a specific idea. FTC Part 1: d/dx[∫ₐˣ f(t)dt] = f(x). With chain rule: d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x).'
      }
    }
  ]
}
