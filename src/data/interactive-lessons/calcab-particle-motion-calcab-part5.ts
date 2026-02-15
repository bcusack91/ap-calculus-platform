export const calcABParticleMotionPart5Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'parti5-intro',
      type: 'text' as const,
      content: `
# Particle Motion from Graphs

**Part 5 of 7 — Particle Motion from Graphs**

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
      id: 'parti5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of particle motion from graphs?',
            options: [
              'Given a velocity graph',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Given a velocity graph: area above t-axis is positive displacement, below is negative'
          },
          {
            question: 'In the context of particle motion from graphs, which is accurate?',
            options: [
              'Acceleration is the slope of the velocity graph',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Acceleration is the slope of the velocity graph'
          }
        ]
      }
    },
    {
      id: 'parti5-detail',
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
      id: 'parti5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to particle motion from graphs?',
            options: [
              'Particle farthest from origin when displacement is maximized',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Particle farthest from origin when displacement is maximized'
          }
        ]
      }
    },
    {
      id: 'parti5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Given a velocity graph',
            options: ['area above t-axis is positive displacement, below ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Position at time b',
            options: ['s(b) = s(a) + ∫ₐᵇ v(t)dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Acceleration is the slope of the velocity graph',
            options: ['Acceleration is the slope of the velocity graph', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['area above t-axis is positive displacement, below ', 's(b) = s(a) + ∫ₐᵇ v(t)dt', 'Acceleration is the slope of the velocity graph'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Particle Motion from Graphs.'
      }
    }
  ]
}
