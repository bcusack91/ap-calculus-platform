export const precalcRatesOfChangePart2Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'rates2-intro',
      type: 'text' as const,
      content: `
# Secant Lines

**Part 2 of 7 — Secant Lines**

### 1. Secant line

a line passing through two points on a curve

### 2. Equation

y - f(a) = m(x - a) where m = (f(b) - f(a))/(b - a)

### 3. As the two points get closer, the secant approaches the tangent

As the two points get closer, the secant approaches the tangent

### 4. Secant lines approximate instantaneous behavior over small intervals

Secant lines approximate instantaneous behavior over small intervals
      `
    },
    {
      id: 'rates2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of secant lines?',
            options: [
              'Secant line',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Secant line: a line passing through two points on a curve'
          },
          {
            question: 'In the context of secant lines, which is accurate?',
            options: [
              'As the two points get closer, the secant approaches the tangent',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'As the two points get closer, the secant approaches the tangent'
          }
        ]
      }
    },
    {
      id: 'rates2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Secant line**: a line passing through two points on a curve
- **Equation**: y - f(a) = m(x - a) where m = (f(b) - f(a))/(b - a)
- **As the two points get closer, the secant approaches the tangent**
- **Secant lines approximate instantaneous behavior over small intervals**
      `
    },
    {
      id: 'rates2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to secant lines?',
            options: [
              'Secant lines approximate instantaneous behavior over small intervals',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Secant lines approximate instantaneous behavior over small intervals'
          }
        ]
      }
    },
    {
      id: 'rates2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Secant line',
            options: ['a line passing through two points on a curve', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Equation',
            options: ['y - f(a) = m(x - a) where m = (f(b) - f(a))/(b - a', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'As the two points get closer, the secant approaches the tangent',
            options: ['As the two points get closer, the secant approache', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['a line passing through two points on a curve', 'y - f(a) = m(x - a) where m = (f(b) - f(a))/(b - a', 'As the two points get closer, the secant approache'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Secant Lines.'
      }
    }
  ]
}
