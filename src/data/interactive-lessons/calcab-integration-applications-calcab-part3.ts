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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Displacement = ∫ₐᵇ v(t)dt; Total…?',
            options: [
              's(t) = s(0) + ∫₀ᵗ v(u)du',
              'velocity in m/s, time in s → displacement in meters',
              'Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt',
              'If velocity is given as data, use trapezoidal approximation'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Distance from Velocity, which explains If velocity is given as data, use…?',
            options: [
              'velocity in m/s, time in s → displacement in meters',
              's(t) = s(0) + ∫₀ᵗ v(u)du',
              'If velocity is given as data, use trapezoidal approximation',
              'Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If velocity is given as data, use trapezoidal approximation. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Distance from Velocity, which correctly describes Units?',
            options: [
              's(t) = s(0) + ∫₀ᵗ v(u)du',
              'If velocity is given as data, use trapezoidal approximation',
              'velocity in m/s, time in s → displacement in meters',
              'Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Units: velocity in m/s, time in s → displacement in meters. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Position function',
            options: ['If velocity is given as data, use trapezoidal approximation', 's(t) = s(0) + ∫₀ᵗ v(u)du', 'Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt', 'velocity in m/s, time in s → displacement in meters']
          },
          {
            label: 'Units',
            options: ['If velocity is given as data, use trapezoidal approximation', 's(t) = s(0) + ∫₀ᵗ v(u)du', 'velocity in m/s, time in s → displacement in meters', 'Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt']
          }
        ],
        correctAnswers: ['s(t) = s(0) + ∫₀ᵗ v(u)du', 'velocity in m/s, time in s → displacement in meters'],
        hint1: 'Think about what each concept specifically describes in Distance from Velocity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Distance from Velocity describes a specific idea. Position function: s(t) = s(0) + ∫₀ᵗ v(u)du. Units: velocity in m/s, time in s → displacement in meters.'
      }
    }
  ]
}
