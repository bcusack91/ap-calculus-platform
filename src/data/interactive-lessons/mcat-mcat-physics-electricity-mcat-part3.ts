export const mcatPhysElecPart3Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Magnetism & EM Induction

**Part 3 of 7 — Magnetism & EM Induction**

Moving charges create magnetic fields; F = qvB sin(theta) — force on a moving charge.

Right-hand rule: point fingers in direction of v, curl toward B, thumb points to F (for positive charge).
      `
    },
    {
      id: 'mcat-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in magnetism & em induction?',
            options: [
              'Moving charges create magnetic fields; F = qvB sin(theta) — force on a moving charge',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Moving charges create magnetic fields; F = qvB sin(theta) — force on a moving charge'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Faradays law: changing magnetic flux induces EMF; Lenzs law: induced current opposes the change.

**MCAT Tip:** Electromagnetic spectrum: radio, microwave, IR, visible, UV, X-ray, gamma — increasing frequency/energy.
      `
    },
    {
      id: 'mcat-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to magnetism & em induction?',
            options: [
              'Faradays law: changing magnetic flux induces EMF; Lenzs law: induced current opposes the change',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Faradays law: changing magnetic flux induces EMF; Lenzs law: induced current opposes the change'
          }
        ]
      }
    },
    {
      id: 'mcat-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Magnetism & EM Induction:',
            options: ['Moving charges create magnetic fields; F = qvB sin(theta) — ', 'Right-hand rule: point fingers in direction of v, curl towar', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Faradays law: changing magnetic flux induces EMF; Lenzs law:', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Moving charges create magnetic fields; F = qvB sin(theta) — ', 'Faradays law: changing magnetic flux induces EMF; Lenzs law:'],
        hint1: 'Think about magnetism & em induction',
        hint2: 'Consider the MCAT application',
        explanation: 'Moving charges create magnetic fields; F = qvB sin(theta) — force on a moving charge. Faradays law: changing magnetic flux induces EMF; Lenzs law: induced current opposes the change.'
      }
    }
  ]
}
