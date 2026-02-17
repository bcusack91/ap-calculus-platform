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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Position s(t) describes location at…" refer to in calculus?',
            options: [
              'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity',
              'Velocity v(t) = s\'(t) — rate of change of position',
              'differentiate position → velocity → acceleration; integrate in reverse',
              'Position s(t) describes location at time t'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Position s(t) describes location at time t. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Particle Motion, which explains Acceleration a(t) = v\'(t) = s\'\'{t} —…?',
            options: [
              'differentiate position → velocity → acceleration; integrate in reverse',
              'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity',
              'Velocity v(t) = s\'(t) — rate of change of position',
              'Position s(t) describes location at time t'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Particle Motion, which correctly describes Relationships?',
            options: [
              'differentiate position → velocity → acceleration; integrate in reverse',
              'Position s(t) describes location at time t',
              'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity',
              'Velocity v(t) = s\'(t) — rate of change of position'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Relationships: differentiate position → velocity → acceleration; integrate in reverse. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'parti1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Position s(t) describes location at…',
            options: ['differentiate position → velocity → acceleration; integrate in reverse', 'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity', 'Velocity v(t) = s\'(t) — rate of change of position', 'Position s(t) describes location at time t']
          },
          {
            label: 'Velocity v(t) = s\'(t) — rate of change…',
            options: ['Velocity v(t) = s\'(t) — rate of change of position', 'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity', 'differentiate position → velocity → acceleration; integrate in reverse', 'Position s(t) describes location at time t']
          },
          {
            label: 'Acceleration a(t) = v\'(t) = s\'\'{t} —…',
            options: ['differentiate position → velocity → acceleration; integrate in reverse', 'Position s(t) describes location at time t', 'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity', 'Velocity v(t) = s\'(t) — rate of change of position']
          }
        ],
        correctAnswers: ['Position s(t) describes location at time t', 'Velocity v(t) = s\'(t) — rate of change of position', 'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity'],
        hint1: 'Think about what each concept specifically describes in Particle Motion.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Particle Motion describes a specific idea. Position s(t) describes location at time t. Velocity v(t) = s\'(t) — rate of change of position. Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity.'
      }
    }
  ]
}
