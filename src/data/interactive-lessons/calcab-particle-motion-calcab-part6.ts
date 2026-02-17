export const calcABParticleMotionPart6Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'parti6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Given a velocity graph

area above t-axis is positive displacement, below is negative

### 2. Position at time b

s(b) = s(a) + ∫ₐᵇ v(t)dt

### 3. Acceleration is the slope of the velocity graph

Acceleration is the slope of the velocity graph

### 4. Particle farthest from origin when displacement is maximized

Particle farthest from origin when displacement is maximized
      `
    },
    {
      id: 'parti6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Given a velocity graph" refer to in calculus?',
            options: [
              'Particle farthest from origin when displacement is maximized',
              'area above t-axis is positive displacement, below is negative',
              's(b) = s(a) + ∫ₐᵇ v(t)dt',
              'Acceleration is the slope of the velocity graph'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Given a velocity graph: area above t-axis is positive displacement, below is negative. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Acceleration is the slope of the…:',
            options: [
              'Acceleration is the slope of the velocity graph',
              'Particle farthest from origin when displacement is maximized',
              's(b) = s(a) + ∫ₐᵇ v(t)dt',
              'area above t-axis is positive displacement, below is negative'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Acceleration is the slope of the velocity graph. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'parti6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Given a velocity graph**: area above t-axis is positive displacement, below is negative
- **Position at time b**: s(b) = s(a) + ∫ₐᵇ v(t)dt
- **Acceleration is the slope of the velocity graph**
- **Particle farthest from origin when displacement is maximized**
      `
    },
    {
      id: 'parti6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Particle farthest from origin when…?',
            options: [
              'area above t-axis is positive displacement, below is negative',
              's(b) = s(a) + ∫ₐᵇ v(t)dt',
              'Acceleration is the slope of the velocity graph',
              'Particle farthest from origin when displacement is maximized'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Particle farthest from origin when displacement is maximized. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'parti6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Given a velocity graph',
            options: ['Particle farthest from origin when displacement is maximized', 's(b) = s(a) + ∫ₐᵇ v(t)dt', 'area above t-axis is positive displacement, below is negative', 'Acceleration is the slope of the velocity graph']
          },
          {
            label: 'Position at time b',
            options: ['area above t-axis is positive displacement, below is negative', 'Particle farthest from origin when displacement is maximized', 's(b) = s(a) + ∫ₐᵇ v(t)dt', 'Acceleration is the slope of the velocity graph']
          }
        ],
        correctAnswers: ['area above t-axis is positive displacement, below is negative', 's(b) = s(a) + ∫ₐᵇ v(t)dt'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Given a velocity graph: area above t-axis is positive displacement, below is negative. Position at time b: s(b) = s(a) + ∫ₐᵇ v(t)dt.'
      }
    }
  ]
}
