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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Review & MCAT Practice:',
            options: ['Rate = k[A]^m[B]^n — rate law is determined experimentally, ', 'Arrhenius equation: k = Ae^(-Ea/RT) — higher temperature inc', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Catalysts lower activation energy (Ea) without being consume', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Rate = k[A]^m[B]^n — rate law is determined experimentally, ', 'Catalysts lower activation energy (Ea) without being consume'],
        hint1: 'Think about review & mcat practice',
        hint2: 'Consider the MCAT application',
        explanation: 'Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry. Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts.'
      }
    }
  ]
}
