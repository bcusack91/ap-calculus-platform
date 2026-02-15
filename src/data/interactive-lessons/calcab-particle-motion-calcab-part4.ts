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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of displacement vs distance?',
            options: [
              'Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)'
          },
          {
            question: 'In the context of displacement vs distance, which is accurate?',
            options: [
              'Split the integral at zeros of v(t) to find total distance',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Split the integral at zeros of v(t) to find total distance'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to displacement vs distance?',
            options: [
              'Displacement can be zero even if the particle moved (returned to start)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Displacement can be zero even if the particle moved (returned to start)'
          }
        ]
      }
    },
    {
      id: 'parti4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)',
            options: ['Displacement = ∫ₐᵇ v(t)dt — net change in position', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Total distance = ∫ₐᵇ |v(t)|dt — always positive',
            options: ['Total distance = ∫ₐᵇ |v(t)|dt — always positive', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Split the integral at zeros of v(t) to find total distance',
            options: ['Split the integral at zeros of v(t) to find total ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Displacement = ∫ₐᵇ v(t)dt — net change in position', 'Total distance = ∫ₐᵇ |v(t)|dt — always positive', 'Split the integral at zeros of v(t) to find total '],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Displacement vs Distance.'
      }
    }
  ]
}
