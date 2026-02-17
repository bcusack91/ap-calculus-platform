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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Michaelis-Menten',
            options: ['Non-competitive inhibitor: binds allosteric site, decreases Vmax, Km unchanged.', 'v = Vmax[S]/(Km+[S]); Km = substrate concentration at half-Vmax.', 'Competitive inhibitor: binds active site, increases apparent Km, Vmax unchanged.', '1/v vs 1/[S] — y-intercept = 1/Vmax, x-intercept = -1/Km.']
          },
          {
            label: 'Lineweaver-Burk plot',
            options: ['1/v vs 1/[S] — y-intercept = 1/Vmax, x-intercept = -1/Km.', 'Competitive inhibitor: binds active site, increases apparent Km, Vmax unchanged.', 'v = Vmax[S]/(Km+[S]); Km = substrate concentration at half-Vmax.', 'Non-competitive inhibitor: binds allosteric site, decreases Vmax, Km unchanged.']
          },
          {
            label: 'Key Insight',
            options: ['1/v vs 1/[S] — y-intercept = 1/Vmax, x-intercept = -1/Km.', 'v = Vmax[S]/(Km+[S]); Km = substrate concentration at half-Vmax.', 'Competitive inhibitor: binds active site, increases apparent Km, Vmax unchanged.', 'Non-competitive inhibitor: binds allosteric site, decreases Vmax, Km unchanged.']
          }
        ],
        correctAnswers: ['v = Vmax[S]/(Km+[S]); Km = substrate concentration at half-Vmax.', '1/v vs 1/[S] — y-intercept = 1/Vmax, x-intercept = -1/Km.', 'Competitive inhibitor: binds active site, increases apparent Km, Vmax unchanged.'],
        hint1: 'Think about what each concept specifically describes in Enzyme Kinetics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Enzyme Kinetics describes a specific idea. Michaelis-Menten: v = Vmax[S]/(Km+[S]); Km = substrate concentration at half-Vmax. Lineweaver-Burk plot: 1/v vs 1/[S] — y-intercept = 1/Vmax, x-intercept = -1/Km. Key Insight: Competitive inhibitor: binds active site, increases apparent Km, Vmax unchanged.'
      }
    }
  ]
}
