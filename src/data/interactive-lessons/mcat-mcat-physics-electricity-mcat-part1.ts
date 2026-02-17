export const mcatPhysElecPart1Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Physics Electricity

**Part 1 of 7 — Electrostatics & Coulombs Law**

Coulombs law: F = kq1q2/r2 — force between charges; like charges repel, opposite attract.

Electric field E = F/q = kQ/r2 — field points away from positive, toward negative charges.
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
            question: 'Which of the following best describes a key concept in electrostatics & coulombs law?',
            options: [
              'Coulombs law: F = kq1q2/r2 — force between charges; like charges repel, opposite attract',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Coulombs law: F = kq1q2/r2 — force between charges; like charges repel, opposite attract'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Electric potential V = kQ/r; Voltage = energy per unit charge (J/C = Volt).

**MCAT Tip:** Capacitance C = Q/V; parallel plate: C = epsilon0*A/d; energy stored = (1/2)CV2.
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
            question: 'What is an important principle for MCAT Chem/Phys related to electrostatics & coulombs law?',
            options: [
              'Electric potential V = kQ/r; Voltage = energy per unit charge (J/C = Volt)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Electric potential V = kQ/r; Voltage = energy per unit charge (J/C = Volt)'
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
            label: 'Coulombs law',
            options: ['Capacitance C = Q/V; parallel plate: C = epsilon0*A/d; energy stored = (1/2)CV2.', 'F = kq1q2/r2 — force between charges; like charges repel, opposite attract.', 'Electric field E = F/q = kQ/r2 — field points away from positive, toward negative charges.', 'Electric potential V = kQ/r; Voltage = energy per unit charge (J/C = Volt).']
          },
          {
            label: 'Key Insight',
            options: ['Capacitance C = Q/V; parallel plate: C = epsilon0*A/d; energy stored = (1/2)CV2.', 'F = kq1q2/r2 — force between charges; like charges repel, opposite attract.', 'Electric field E = F/q = kQ/r2 — field points away from positive, toward negative charges.', 'Electric potential V = kQ/r; Voltage = energy per unit charge (J/C = Volt).']
          },
          {
            label: 'MCAT Tip',
            options: ['Electric potential V = kQ/r; Voltage = energy per unit charge (J/C = Volt).', 'F = kq1q2/r2 — force between charges; like charges repel, opposite attract.', 'Electric field E = F/q = kQ/r2 — field points away from positive, toward negative charges.', 'Capacitance C = Q/V; parallel plate: C = epsilon0*A/d; energy stored = (1/2)CV2.']
          }
        ],
        correctAnswers: ['F = kq1q2/r2 — force between charges; like charges repel, opposite attract.', 'Electric potential V = kQ/r; Voltage = energy per unit charge (J/C = Volt).', 'Capacitance C = Q/V; parallel plate: C = epsilon0*A/d; energy stored = (1/2)CV2.'],
        hint1: 'Think about what each concept specifically describes in Physics Electricity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Physics Electricity describes a specific idea. Coulombs law: F = kq1q2/r2 — force between charges; like charges repel, opposite attract. Key Insight: Electric potential V = kQ/r; Voltage = energy per unit charge (J/C = Volt). MCAT Tip: Capacitance C = Q/V; parallel plate: C = epsilon0*A/d; energy stored = (1/2)CV2.'
      }
    }
  ]
}
