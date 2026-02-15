export const calcABParticleMotionPart1Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'parti1-intro',
      type: 'text' as const,
      content: `
# ∫ Particle Motion

**Part 1 of 7 — Position, Velocity, Acceleration**

### 1. Position s(t) describes location at time t

Position s(t) describes location at time t

### 2. Velocity v(t) = s'(t) — rate of change of position

Velocity v(t) = s'(t) — rate of change of position

### 3. Acceleration a(t) = v'(t) = s''{t} — rate of change of velocity

Acceleration a(t) = v'(t) = s''{t} — rate of change of velocity

### 4. Relationships

differentiate position → velocity → acceleration; integrate in reverse
      `
    },
    {
      id: 'parti1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of position, velocity, acceleration?',
            options: [
              'Position s(t) describes location at time t',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Position s(t) describes location at time t'
          },
          {
            question: 'In the context of position, velocity, acceleration, which is accurate?',
            options: [
              'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity'
          }
        ]
      }
    },
    {
      id: 'parti1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Position s(t) describes location at time t**
- **Velocity v(t) = s'(t) — rate of change of position**
- **Acceleration a(t) = v'(t) = s''{t} — rate of change of velocity**
- **Relationships**: differentiate position → velocity → acceleration; integrate in reverse
      `
    },
    {
      id: 'parti1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to position, velocity, acceleration?',
            options: [
              'differentiate position → velocity → acceleration; integrate in reverse',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Relationships: differentiate position → velocity → acceleration; integrate in reverse'
          }
        ]
      }
    },
    {
      id: 'parti1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Position s(t) describes location at time t',
            options: ['Position s(t) describes location at time t', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Velocity v(t) = s\'(t) — rate of change of position',
            options: ['Velocity v(t) = s\'(t) — rate of change of position', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity',
            options: ['Acceleration a(t) = v\'(t) = s\'\'{t} — rate of chang', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Position s(t) describes location at time t', 'Velocity v(t) = s\'(t) — rate of change of position', 'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of chang'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Position, Velocity, Acceleration.'
      }
    }
  ]
}
