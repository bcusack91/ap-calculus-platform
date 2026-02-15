export const calcABUSubPart5Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'u-sub5-intro',
      type: 'text' as const,
      content: `
# Completing the Square for Integration

**Part 5 of 7 — Completing the Square for Integration**

### 1. ∫1/(x²+bx+c)dx

complete the square, then use arctan form

### 2. ∫1/√(a²-x²)dx = arcsin(x/a) + C

∫1/√(a²-x²)dx = arcsin(x/a) + C

### 3. ∫1/(x²+a²)dx = (1/a)arctan(x/a) + C

∫1/(x²+a²)dx = (1/a)arctan(x/a) + C

### 4. Completing the square converts quadratics into recognizable integration forms

Completing the square converts quadratics into recognizable integration forms
      `
    },
    {
      id: 'u-sub5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of completing the square for integration?',
            options: [
              '∫1/(x²+bx+c)dx',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: '∫1/(x²+bx+c)dx: complete the square, then use arctan form'
          },
          {
            question: 'In the context of completing the square for integration, which is accurate?',
            options: [
              '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C'
          }
        ]
      }
    },
    {
      id: 'u-sub5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫1/(x²+bx+c)dx**: complete the square, then use arctan form
- **∫1/√(a²-x²)dx = arcsin(x/a) + C**
- **∫1/(x²+a²)dx = (1/a)arctan(x/a) + C**
- **Completing the square converts quadratics into recognizable integration forms**
      `
    },
    {
      id: 'u-sub5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to completing the square for integration?',
            options: [
              'Completing the square converts quadratics into recognizable integration forms',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Completing the square converts quadratics into recognizable integration forms'
          }
        ]
      }
    },
    {
      id: 'u-sub5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫1/(x²+bx+c)dx',
            options: ['complete the square, then use arctan form', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫1/√(a²-x²)dx = arcsin(x/a) + C',
            options: ['∫1/√(a²-x²)dx = arcsin(x/a) + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C',
            options: ['∫1/(x²+a²)dx = (1/a)arctan(x/a) + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['complete the square, then use arctan form', '∫1/√(a²-x²)dx = arcsin(x/a) + C', '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Completing the Square for Integration.'
      }
    }
  ]
}
