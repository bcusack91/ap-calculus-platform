export const mcatPhysMechPart4Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Momentum & Collisions

**Part 4 of 7 — Momentum & Collisions**

Momentum p = mv; Impulse J = F*delta-t = delta-p.

Conservation of momentum: total momentum before = total momentum after (isolated system).
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in momentum & collisions?',
            options: [
              'Momentum p = mv; Impulse J = F*delta-t = delta-p',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Momentum p = mv; Impulse J = F*delta-t = delta-p'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Elastic collision: both momentum and KE conserved; Inelastic: only momentum conserved.

**MCAT Tip:** Center of mass: x_cm = (m1x1 + m2x2)/(m1 + m2) — moves as if all mass is concentrated there.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to momentum & collisions?',
            options: [
              'Elastic collision: both momentum and KE conserved; Inelastic: only momentum conserved',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Elastic collision: both momentum and KE conserved; Inelastic: only momentum conserved'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Conservation of momentum',
            options: ['Momentum p = mv; Impulse J = F*delta-t = delta-p.', 'Elastic collision: both momentum and KE conserved; Inelastic: only momentum conserved.', 'Center of mass: x_cm = (m1x1 + m2x2)/(m1 + m2) — moves as if all mass is concentrated there.', 'total momentum before = total momentum after (isolated system).']
          },
          {
            label: 'Key Insight',
            options: ['Center of mass: x_cm = (m1x1 + m2x2)/(m1 + m2) — moves as if all mass is concentrated there.', 'total momentum before = total momentum after (isolated system).', 'Elastic collision: both momentum and KE conserved; Inelastic: only momentum conserved.', 'Momentum p = mv; Impulse J = F*delta-t = delta-p.']
          },
          {
            label: 'MCAT Tip',
            options: ['Elastic collision: both momentum and KE conserved; Inelastic: only momentum conserved.', 'total momentum before = total momentum after (isolated system).', 'Momentum p = mv; Impulse J = F*delta-t = delta-p.', 'Center of mass: x_cm = (m1x1 + m2x2)/(m1 + m2) — moves as if all mass is concentrated there.']
          }
        ],
        correctAnswers: ['total momentum before = total momentum after (isolated system).', 'Elastic collision: both momentum and KE conserved; Inelastic: only momentum conserved.', 'Center of mass: x_cm = (m1x1 + m2x2)/(m1 + m2) — moves as if all mass is concentrated there.'],
        hint1: 'Think about what each concept specifically describes in Momentum & Collisions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Momentum & Collisions describes a specific idea. Conservation of momentum: total momentum before = total momentum after (isolated system). Key Insight: Elastic collision: both momentum and KE conserved; Inelastic: only momentum conserved. MCAT Tip: Center of mass: x_cm = (m1x1 + m2x2)/(m1 + m2) — moves as if all mass is concentrated there.'
      }
    }
  ]
}
