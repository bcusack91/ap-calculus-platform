export const mcatBiochemPart2Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Enzyme Kinetics

**Part 2 of 7 — Enzyme Kinetics**

Michaelis-Menten: v = Vmax[S]/(Km+[S]); Km = substrate concentration at half-Vmax.

Lineweaver-Burk plot: 1/v vs 1/[S] — y-intercept = 1/Vmax, x-intercept = -1/Km.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in enzyme kinetics?',
            options: [
              'Michaelis-Menten: v = Vmax[S]/(Km+[S]); Km = substrate concentration at half-Vmax',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Michaelis-Menten: v = Vmax[S]/(Km+[S]); Km = substrate concentration at half-Vmax'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Competitive inhibitor: binds active site, increases apparent Km, Vmax unchanged.

**MCAT Tip:** Non-competitive inhibitor: binds allosteric site, decreases Vmax, Km unchanged.
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to enzyme kinetics?',
            options: [
              'Competitive inhibitor: binds active site, increases apparent Km, Vmax unchanged',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Competitive inhibitor: binds active site, increases apparent Km, Vmax unchanged'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Enzyme Kinetics:',
            options: ['Michaelis-Menten: v = Vmax[S]/(Km+[S]); Km = substrate conce', 'Lineweaver-Burk plot: 1/v vs 1/[S] — y-intercept = 1/Vmax, x', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Competitive inhibitor: binds active site, increases apparent', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Michaelis-Menten: v = Vmax[S]/(Km+[S]); Km = substrate conce', 'Competitive inhibitor: binds active site, increases apparent'],
        hint1: 'Think about enzyme kinetics',
        hint2: 'Consider the MCAT application',
        explanation: 'Michaelis-Menten: v = Vmax[S]/(Km+[S]); Km = substrate concentration at half-Vmax. Competitive inhibitor: binds active site, increases apparent Km, Vmax unchanged.'
      }
    }
  ]
}
