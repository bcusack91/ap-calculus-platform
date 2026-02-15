export const calcABIntAppsPart3Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'integ3-intro',
      type: 'text' as const,
      content: `
# Distance from Velocity

**Part 3 of 7 — Distance from Velocity**

### 1. Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt

Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt

### 2. Position function

s(t) = s(0) + ∫₀ᵗ v(u)du

### 3. If velocity is given as data, use trapezoidal approximation

If velocity is given as data, use trapezoidal approximation

### 4. Units

velocity in m/s, time in s → displacement in meters
      `
    },
    {
      id: 'integ3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of distance from velocity?',
            options: [
              'Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt'
          },
          {
            question: 'In the context of distance from velocity, which is accurate?',
            options: [
              'If velocity is given as data, use trapezoidal approximation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If velocity is given as data, use trapezoidal approximation'
          }
        ]
      }
    },
    {
      id: 'integ3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt**
- **Position function**: s(t) = s(0) + ∫₀ᵗ v(u)du
- **If velocity is given as data, use trapezoidal approximation**
- **Units**: velocity in m/s, time in s → displacement in meters
      `
    },
    {
      id: 'integ3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to distance from velocity?',
            options: [
              'velocity in m/s, time in s → displacement in meters',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Units: velocity in m/s, time in s → displacement in meters'
          }
        ]
      }
    },
    {
      id: 'integ3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt',
            options: ['Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Position function',
            options: ['s(t) = s(0) + ∫₀ᵗ v(u)du', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If velocity is given as data, use trapezoidal approximation',
            options: ['If velocity is given as data, use trapezoidal appr', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v', 's(t) = s(0) + ∫₀ᵗ v(u)du', 'If velocity is given as data, use trapezoidal appr'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Distance from Velocity.'
      }
    }
  ]
}
