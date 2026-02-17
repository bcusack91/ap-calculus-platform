export const calcABParticleMotionPart4Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'parti4-intro',
      type: 'text' as const,
      content: `
# Displacement vs Distance

**Part 4 of 7 — Displacement vs Distance**

### 1. Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)

Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)

### 2. Total distance = ∫ₐᵇ |v(t)|dt — always positive

Total distance = ∫ₐᵇ |v(t)|dt — always positive

### 3. Split the integral at zeros of v(t) to find total distance

Split the integral at zeros of v(t) to find total distance

### 4. Displacement can be zero even if the particle moved (returned to start)

Displacement can be zero even if the particle moved (returned to start)
      `
    },
    {
      id: 'parti4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Displacement = ∫ₐᵇ v(t)dt — net change…" refer to in calculus?',
            options: [
              'Total distance = ∫ₐᵇ |v(t)|dt — always positive',
              'Split the integral at zeros of v(t) to find total distance',
              'Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)',
              'Displacement can be zero even if the particle moved (returned to start)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Split the integral at zeros of v(t) to…:',
            options: [
              'Displacement can be zero even if the particle moved (returned to start)',
              'Total distance = ∫ₐᵇ |v(t)|dt — always positive',
              'Split the integral at zeros of v(t) to find total distance',
              'Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Split the integral at zeros of v(t) to find total distance. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'parti4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)**
- **Total distance = ∫ₐᵇ |v(t)|dt — always positive**
- **Split the integral at zeros of v(t) to find total distance**
- **Displacement can be zero even if the particle moved (returned to start)**
      `
    },
    {
      id: 'parti4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Displacement can be zero even if the…?',
            options: [
              'Total distance = ∫ₐᵇ |v(t)|dt — always positive',
              'Displacement can be zero even if the particle moved (returned to start)',
              'Split the integral at zeros of v(t) to find total distance',
              'Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Displacement can be zero even if the particle moved (returned to start). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'parti4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Displacement = ∫ₐᵇ v(t)dt — net change…',
            options: ['Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)', 'Total distance = ∫ₐᵇ |v(t)|dt — always positive', 'Displacement can be zero even if the particle moved (returned to start)', 'Split the integral at zeros of v(t) to find total distance']
          },
          {
            label: 'Total distance = ∫ₐᵇ |v(t)|dt — always…',
            options: ['Total distance = ∫ₐᵇ |v(t)|dt — always positive', 'Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)', 'Split the integral at zeros of v(t) to find total distance', 'Displacement can be zero even if the particle moved (returned to start)']
          },
          {
            label: 'Split the integral at zeros of v(t) to…',
            options: ['Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)', 'Displacement can be zero even if the particle moved (returned to start)', 'Split the integral at zeros of v(t) to find total distance', 'Total distance = ∫ₐᵇ |v(t)|dt — always positive']
          }
        ],
        correctAnswers: ['Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)', 'Total distance = ∫ₐᵇ |v(t)|dt — always positive', 'Split the integral at zeros of v(t) to find total distance'],
        hint1: 'Think about what each concept specifically describes in Displacement vs Distance.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Displacement vs Distance describes a specific idea. Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative). Total distance = ∫ₐᵇ |v(t)|dt — always positive. Split the integral at zeros of v(t) to find total distance.'
      }
    }
  ]
}
