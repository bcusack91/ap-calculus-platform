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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Parametric arc length" refer to in calculus?',
            options: [
              'Same formula as total distance traveled by a particle',
              'This is the integral of the speed |v⃗(t)|',
              'Reduce to y = f(x) formula when x = t, y = f(t)',
              'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Parametric arc length: L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Same formula as total distance traveled…:',
            options: [
              'Same formula as total distance traveled by a particle',
              'Reduce to y = f(x) formula when x = t, y = f(t)',
              'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt',
              'This is the integral of the speed |v⃗(t)|'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Same formula as total distance traveled by a particle. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Arc Length for Parametric Curves, which correctly describes Reduce to y = f(x) formula when x = t,…?',
            options: [
              'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt',
              'This is the integral of the speed |v⃗(t)|',
              'Same formula as total distance traveled by a particle',
              'Reduce to y = f(x) formula when x = t, y = f(t)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Reduce to y = f(x) formula when x = t, y = f(t). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'arc-l2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parametric arc length',
            options: ['Reduce to y = f(x) formula when x = t, y = f(t)', 'Same formula as total distance traveled by a particle', 'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', 'This is the integral of the speed |v⃗(t)|']
          },
          {
            label: 'This is the integral of the speed…',
            options: ['This is the integral of the speed |v⃗(t)|', 'Same formula as total distance traveled by a particle', 'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', 'Reduce to y = f(x) formula when x = t, y = f(t)']
          },
          {
            label: 'Same formula as total distance traveled…',
            options: ['Same formula as total distance traveled by a particle', 'This is the integral of the speed |v⃗(t)|', 'Reduce to y = f(x) formula when x = t, y = f(t)', 'L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt']
          }
        ],
        correctAnswers: ['L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', 'This is the integral of the speed |v⃗(t)|', 'Same formula as total distance traveled by a particle'],
        hint1: 'Think about what each concept specifically describes in Arc Length for Parametric Curves.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Arc Length for Parametric Curves describes a specific idea. Parametric arc length: L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt. This is the integral of the speed |v⃗(t)|. Same formula as total distance traveled by a particle.'
      }
    }
  ]
}
