export const calcBCArcLengthPart2Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc-l2-intro',
      type: 'text' as const,
      content: `
# Arc Length for Parametric Curves

**Part 2 of 7 — Arc Length for Parametric Curves**

### 1. Parametric arc length

L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt

### 2. This is the integral of the speed |v⃗(t)|

This is the integral of the speed |v⃗(t)|

### 3. Same formula as total distance traveled by a particle

Same formula as total distance traveled by a particle

### 4. Reduce to y = f(x) formula when x = t, y = f(t)

Reduce to y = f(x) formula when x = t, y = f(t)
      `
    },
    {
      id: 'arc-l2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of arc length for parametric curves?',
            options: [
              'Parametric arc length',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Parametric arc length: L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt'
          },
          {
            question: 'In the context of arc length for parametric curves, which is accurate?',
            options: [
              'Same formula as total distance traveled by a particle',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Same formula as total distance traveled by a particle'
          }
        ]
      }
    },
    {
      id: 'arc-l2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Parametric arc length**: L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt
- **This is the integral of the speed |v⃗(t)|**
- **Same formula as total distance traveled by a particle**
- **Reduce to y = f(x) formula when x = t, y = f(t)**
      `
    },
    {
      id: 'arc-l2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to arc length for parametric curves?',
            options: [
              'Reduce to y = f(x) formula when x = t, y = f(t)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Reduce to y = f(x) formula when x = t, y = f(t)'
          }
        ]
      }
    },
    {
      id: 'arc-l2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parametric arc length',
            options: ['L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'This is the integral of the speed |v⃗(t)|',
            options: ['This is the integral of the speed |v⃗(t)|', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Same formula as total distance traveled by a particle',
            options: ['Same formula as total distance traveled by a parti', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', 'This is the integral of the speed |v⃗(t)|', 'Same formula as total distance traveled by a parti'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Arc Length for Parametric Curves.'
      }
    }
  ]
}
