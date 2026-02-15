export const mcatPhysMechPart3Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Work, Energy & Power

**Part 3 of 7 — Work, Energy & Power**

Work = Fd cos(theta) — only the component of force along displacement does work.

Kinetic energy KE = (1/2)mv2; Work-energy theorem: Wnet = delta KE.
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
            question: 'Which of the following best describes a key concept in work, energy & power?',
            options: [
              'Work = Fd cos(theta) — only the component of force along displacement does work',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Work = Fd cos(theta) — only the component of force along displacement does work'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Potential energy: gravitational PE = mgh; elastic PE = (1/2)kx2.

**MCAT Tip:** Conservation of energy: KE1 + PE1 = KE2 + PE2 (when no non-conservative forces).
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
            question: 'What is an important principle for MCAT Chem/Phys related to work, energy & power?',
            options: [
              'Potential energy: gravitational PE = mgh; elastic PE = (1/2)kx2',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Potential energy: gravitational PE = mgh; elastic PE = (1/2)kx2'
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
            label: 'Core concept for Work, Energy & Power:',
            options: ['Work = Fd cos(theta) — only the component of force along dis', 'Kinetic energy KE = (1/2)mv2; Work-energy theorem: Wnet = de', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Potential energy: gravitational PE = mgh; elastic PE = (1/2)', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Work = Fd cos(theta) — only the component of force along dis', 'Potential energy: gravitational PE = mgh; elastic PE = (1/2)'],
        hint1: 'Think about work, energy & power',
        hint2: 'Consider the MCAT application',
        explanation: 'Work = Fd cos(theta) — only the component of force along displacement does work. Potential energy: gravitational PE = mgh; elastic PE = (1/2)kx2.'
      }
    }
  ]
}
