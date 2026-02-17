export const mcatGenChemPart6Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Thermodynamics & Equilibrium

**Part 6 of 7 — Thermodynamics & Equilibrium**

Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry.

Arrhenius equation: k = Ae^(-Ea/RT) — higher temperature increases rate constant k.
      `
    },
    {
      id: 'mcat-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in thermodynamics & equilibrium?',
            options: [
              'Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts.

**MCAT Tip:** Rate-determining step: the slowest step in a mechanism controls the overall rate.
      `
    },
    {
      id: 'mcat-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to thermodynamics & equilibrium?',
            options: [
              'Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts'
          }
        ]
      }
    },
    {
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arrhenius equation',
            options: ['k = Ae^(-Ea/RT) — higher temperature increases rate constant k.', 'Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry.', 'Rate-determining step: the slowest step in a mechanism controls the overall rate.', 'Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts.']
          },
          {
            label: 'Key Insight',
            options: ['Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts.', 'Rate-determining step: the slowest step in a mechanism controls the overall rate.', 'Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry.', 'k = Ae^(-Ea/RT) — higher temperature increases rate constant k.']
          },
          {
            label: 'MCAT Tip',
            options: ['Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry.', 'Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts.', 'Rate-determining step: the slowest step in a mechanism controls the overall rate.', 'k = Ae^(-Ea/RT) — higher temperature increases rate constant k.']
          }
        ],
        correctAnswers: ['k = Ae^(-Ea/RT) — higher temperature increases rate constant k.', 'Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts.', 'Rate-determining step: the slowest step in a mechanism controls the overall rate.'],
        hint1: 'Think about what each concept specifically describes in Thermodynamics & Equilibrium.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Thermodynamics & Equilibrium describes a specific idea. Arrhenius equation: k = Ae^(-Ea/RT) — higher temperature increases rate constant k. Key Insight: Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts. MCAT Tip: Rate-determining step: the slowest step in a mechanism controls the overall rate.'
      }
    }
  ]
}
