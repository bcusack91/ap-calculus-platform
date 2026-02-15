export const mcatPhysMechPart1Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Physics Mechanics

**Part 1 of 7 — Kinematics & Motion**

v = v0 + at; x = x0 + v0t + (1/2)at2; v2 = v02 + 2a(x-x0) — the Big 3 kinematic equations.

Projectile motion: horizontal velocity is constant; vertical acceleration = g = 9.8 m/s2.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in kinematics & motion?',
            options: [
              'v = v0 + at; x = x0 + v0t + (1/2)at2; v2 = v02 + 2a(x-x0) — the Big 3 kinematic equations',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'v = v0 + at; x = x0 + v0t + (1/2)at2; v2 = v02 + 2a(x-x0) — the Big 3 kinematic equations'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Vectors: break into components using sin and cos; add components separately.

**MCAT Tip:** Displacement is a vector (direction matters); distance is a scalar (total path length).
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to kinematics & motion?',
            options: [
              'Vectors: break into components using sin and cos; add components separately',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Vectors: break into components using sin and cos; add components separately'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Kinematics & Motion:',
            options: ['v = v0 + at; x = x0 + v0t + (1/2)at2; v2 = v02 + 2a(x-x0) — ', 'Projectile motion: horizontal velocity is constant; vertical', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Vectors: break into components using sin and cos; add compon', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['v = v0 + at; x = x0 + v0t + (1/2)at2; v2 = v02 + 2a(x-x0) — ', 'Vectors: break into components using sin and cos; add compon'],
        hint1: 'Think about kinematics & motion',
        hint2: 'Consider the MCAT application',
        explanation: 'v = v0 + at; x = x0 + v0t + (1/2)at2; v2 = v02 + 2a(x-x0) — the Big 3 kinematic equations. Vectors: break into components using sin and cos; add components separately.'
      }
    }
  ]
}
