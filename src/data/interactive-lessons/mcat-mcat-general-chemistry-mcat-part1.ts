export const mcatGenChemPart1Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 General Chemistry

**Part 1 of 7 — Atomic Structure & Periodic Trends**

Electron configuration determines chemical behavior: 1s2 2s2 2p6 3s2 ....

Periodic trends: electronegativity, ionization energy, and atomic radius follow predictable patterns across periods and groups.
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
            question: 'Which of the following best describes a key concept in atomic structure & periodic trends?',
            options: [
              'Electron configuration determines chemical behavior: 1s2 2s2 2p6 3s2 ...',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Electron configuration determines chemical behavior: 1s2 2s2 2p6 3s2 ...'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Effective nuclear charge (Zeff) increases across a period as electrons are added to the same shell.

**MCAT Tip:** Quantum numbers (n, l, ml, ms) describe the state of each electron — no two electrons share all four (Pauli exclusion).
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
            question: 'What is an important principle for MCAT Chem/Phys related to atomic structure & periodic trends?',
            options: [
              'Effective nuclear charge (Zeff) increases across a period as electrons are added to the same shell',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Effective nuclear charge (Zeff) increases across a period as electrons are added to the same shell'
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
            label: 'Core concept for Atomic Structure & Periodic Trends:',
            options: ['Electron configuration determines chemical behavior: 1s2 2s2', 'Periodic trends: electronegativity, ionization energy, and a', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Effective nuclear charge (Zeff) increases across a period as', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Electron configuration determines chemical behavior: 1s2 2s2', 'Effective nuclear charge (Zeff) increases across a period as'],
        hint1: 'Think about atomic structure & periodic trends',
        hint2: 'Consider the MCAT application',
        explanation: 'Electron configuration determines chemical behavior: 1s2 2s2 2p6 3s2 .... Effective nuclear charge (Zeff) increases across a period as electrons are added to the same shell.'
      }
    }
  ]
}
