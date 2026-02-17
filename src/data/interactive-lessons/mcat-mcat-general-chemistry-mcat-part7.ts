export const mcatGenChemPart7Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry.

Arrhenius equation: k = Ae^(-Ea/RT) — higher temperature increases rate constant k.
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
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
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts.

**MCAT Tip:** Rate-determining step: the slowest step in a mechanism controls the overall rate.
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to review & mcat practice?',
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
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arrhenius equation',
            options: ['Rate-determining step: the slowest step in a mechanism controls the overall rate.', 'Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry.', 'k = Ae^(-Ea/RT) — higher temperature increases rate constant k.', 'Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts.']
          },
          {
            label: 'Key Insight',
            options: ['Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry.', 'Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts.', 'Rate-determining step: the slowest step in a mechanism controls the overall rate.', 'k = Ae^(-Ea/RT) — higher temperature increases rate constant k.']
          },
          {
            label: 'MCAT Tip',
            options: ['Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts.', 'k = Ae^(-Ea/RT) — higher temperature increases rate constant k.', 'Rate-determining step: the slowest step in a mechanism controls the overall rate.', 'Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry.']
          }
        ],
        correctAnswers: ['k = Ae^(-Ea/RT) — higher temperature increases rate constant k.', 'Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts.', 'Rate-determining step: the slowest step in a mechanism controls the overall rate.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Arrhenius equation: k = Ae^(-Ea/RT) — higher temperature increases rate constant k. Key Insight: Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts. MCAT Tip: Rate-determining step: the slowest step in a mechanism controls the overall rate.'
      }
    }
  ]
}
