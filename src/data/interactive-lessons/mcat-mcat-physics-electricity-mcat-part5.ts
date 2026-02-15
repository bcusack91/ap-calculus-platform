export const mcatPhysElecPart5Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Nuclear Physics & Radioactivity

**Part 5 of 7 — Nuclear Physics & Radioactivity**

Radioactive decay: alpha (He-4 nucleus), beta (electron or positron), gamma (photon).

Half-life: t1/2 = ln(2)/lambda; N(t) = N0*(1/2)^(t/t1/2).
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in nuclear physics & radioactivity?',
            options: [
              'Radioactive decay: alpha (He-4 nucleus), beta (electron or positron), gamma (photon)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Radioactive decay: alpha (He-4 nucleus), beta (electron or positron), gamma (photon)'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Mass-energy equivalence: E = mc2 — mass defect converts to binding energy.

**MCAT Tip:** Nuclear fission splits heavy nuclei; fusion combines light nuclei — both release energy.
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to nuclear physics & radioactivity?',
            options: [
              'Mass-energy equivalence: E = mc2 — mass defect converts to binding energy',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Mass-energy equivalence: E = mc2 — mass defect converts to binding energy'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Nuclear Physics & Radioactivity:',
            options: ['Radioactive decay: alpha (He-4 nucleus), beta (electron or p', 'Half-life: t1/2 = ln(2)/lambda; N(t) = N0*(1/2)^(t/t1/2)', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Mass-energy equivalence: E = mc2 — mass defect converts to b', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Radioactive decay: alpha (He-4 nucleus), beta (electron or p', 'Mass-energy equivalence: E = mc2 — mass defect converts to b'],
        hint1: 'Think about nuclear physics & radioactivity',
        hint2: 'Consider the MCAT application',
        explanation: 'Radioactive decay: alpha (He-4 nucleus), beta (electron or positron), gamma (photon). Mass-energy equivalence: E = mc2 — mass defect converts to binding energy.'
      }
    }
  ]
}
