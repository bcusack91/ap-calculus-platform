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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Secant line" refer to in precalculus?',
            options: [
              'a line passing through two points on a curve',
              'As the two points get closer, the secant approaches the tangent',
              'y - f(a) = m(x - a) where m = (f(b) - f(a))/(b - a)',
              'Secant lines approximate instantaneous behavior over small intervals'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Secant line: a line passing through two points on a curve. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about As the two points get closer, the…?',
            options: [
              'y - f(a) = m(x - a) where m = (f(b) - f(a))/(b - a)',
              'a line passing through two points on a curve',
              'Secant lines approximate instantaneous behavior over small intervals',
              'As the two points get closer, the secant approaches the tangent'
            ],
            correctAnswer: 3,
            explanation: 'Correct — As the two points get closer, the secant approaches the tangent. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Secant line',
            options: ['y - f(a) = m(x - a) where m = (f(b) - f(a))/(b - a)', 'a line passing through two points on a curve', 'Secant lines approximate instantaneous behavior over small intervals', 'As the two points get closer, the secant approaches the tangent']
          },
          {
            label: 'Equation',
            options: ['Secant lines approximate instantaneous behavior over small intervals', 'y - f(a) = m(x - a) where m = (f(b) - f(a))/(b - a)', 'a line passing through two points on a curve', 'As the two points get closer, the secant approaches the tangent']
          }
        ],
        correctAnswers: ['a line passing through two points on a curve', 'y - f(a) = m(x - a) where m = (f(b) - f(a))/(b - a)'],
        hint1: 'Think about what each concept specifically describes in Secant Lines.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Secant Lines describes a specific idea. Secant line: a line passing through two points on a curve. Equation: y - f(a) = m(x - a) where m = (f(b) - f(a))/(b - a).'
      }
    }
  ]
}
