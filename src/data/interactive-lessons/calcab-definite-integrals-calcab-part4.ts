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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of fundamental theorem of calculus (part 1)?',
            options: [
              'FTC Part 1',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'FTC Part 1: d/dx[∫ₐˣ f(t)dt] = f(x)'
          },
          {
            question: 'In the context of fundamental theorem of calculus (part 1), which is accurate?',
            options: [
              'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'With chain rule: d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x)'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to fundamental theorem of calculus (part 1)?',
            options: [
              'This connects differentiation and integration as inverse processes',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'This connects differentiation and integration as inverse processes'
          }
        ]
      }
    },
    {
      id: 'defin4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'FTC Part 1',
            options: ['d/dx[∫ₐˣ f(t)dt] = f(x)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If F(x) = ∫ₐˣ f(t)dt, then F\'(x) = f(x)',
            options: ['If F(x) = ∫ₐˣ f(t)dt, then F\'(x) = f(x)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'With chain rule',
            options: ['d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[∫ₐˣ f(t)dt] = f(x)', 'If F(x) = ∫ₐˣ f(t)dt, then F\'(x) = f(x)', 'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Fundamental Theorem of Calculus (Part 1).'
      }
    }
  ]
}
