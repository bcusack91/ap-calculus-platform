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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Projectile motion',
            options: ['horizontal velocity is constant; vertical acceleration = g = 9.8 m/s2.', 'Vectors: break into components using sin and cos; add components separately.', 'v = v0 + at; x = x0 + v0t + (1/2)at2; v2 = v02 + 2a(x-x0) — the Big 3 kinematic equations.', 'Displacement is a vector (direction matters); distance is a scalar (total path length).']
          },
          {
            label: 'Key Insight',
            options: ['Displacement is a vector (direction matters); distance is a scalar (total path length).', 'horizontal velocity is constant; vertical acceleration = g = 9.8 m/s2.', 'Vectors: break into components using sin and cos; add components separately.', 'v = v0 + at; x = x0 + v0t + (1/2)at2; v2 = v02 + 2a(x-x0) — the Big 3 kinematic equations.']
          },
          {
            label: 'MCAT Tip',
            options: ['horizontal velocity is constant; vertical acceleration = g = 9.8 m/s2.', 'Vectors: break into components using sin and cos; add components separately.', 'Displacement is a vector (direction matters); distance is a scalar (total path length).', 'v = v0 + at; x = x0 + v0t + (1/2)at2; v2 = v02 + 2a(x-x0) — the Big 3 kinematic equations.']
          }
        ],
        correctAnswers: ['horizontal velocity is constant; vertical acceleration = g = 9.8 m/s2.', 'Vectors: break into components using sin and cos; add components separately.', 'Displacement is a vector (direction matters); distance is a scalar (total path length).'],
        hint1: 'Think about what each concept specifically describes in Physics Mechanics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Physics Mechanics describes a specific idea. Projectile motion: horizontal velocity is constant; vertical acceleration = g = 9.8 m/s2. Key Insight: Vectors: break into components using sin and cos; add components separately. MCAT Tip: Displacement is a vector (direction matters); distance is a scalar (total path length).'
      }
    }
  ]
}
