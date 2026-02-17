export const calcABParticleMotionPart7Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'parti7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'parti7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Given a velocity graph" refer to in calculus?',
            options: [
              's(b) = s(a) + ∫ₐᵇ v(t)dt',
              'Acceleration is the slope of the velocity graph',
              'area above t-axis is positive displacement, below is negative',
              'Particle farthest from origin when displacement is maximized'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Given a velocity graph: area above t-axis is positive displacement, below is negative. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Acceleration is the slope of the…?',
            options: [
              'Particle farthest from origin when displacement is maximized',
              'area above t-axis is positive displacement, below is negative',
              'Acceleration is the slope of the velocity graph',
              's(b) = s(a) + ∫ₐᵇ v(t)dt'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Acceleration is the slope of the velocity graph. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'parti7-detail',
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
      id: 'parti7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Particle farthest from origin when…?',
            options: [
              'Particle farthest from origin when displacement is maximized',
              'Acceleration is the slope of the velocity graph',
              's(b) = s(a) + ∫ₐᵇ v(t)dt',
              'area above t-axis is positive displacement, below is negative'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Particle farthest from origin when displacement is maximized. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'parti7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Given a velocity graph',
            options: ['area above t-axis is positive displacement, below is negative', 's(b) = s(a) + ∫ₐᵇ v(t)dt', 'Particle farthest from origin when displacement is maximized', 'Acceleration is the slope of the velocity graph']
          },
          {
            label: 'Position at time b',
            options: ['Acceleration is the slope of the velocity graph', 'area above t-axis is positive displacement, below is negative', 's(b) = s(a) + ∫ₐᵇ v(t)dt', 'Particle farthest from origin when displacement is maximized']
          }
        ],
        correctAnswers: ['area above t-axis is positive displacement, below is negative', 's(b) = s(a) + ∫ₐᵇ v(t)dt'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Given a velocity graph: area above t-axis is positive displacement, below is negative. Position at time b: s(b) = s(a) + ∫ₐᵇ v(t)dt.'
      }
    }
  ]
}
