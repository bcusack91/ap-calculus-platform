export const mcatBiochemPart4Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Lipids & Membranes

**Part 4 of 7 — Lipids & Membranes**

Fatty acids: saturated (no double bonds, straight) vs unsaturated (double bonds, kinked).

Beta-oxidation: fatty acid to acetyl-CoA units, producing FADH2 and NADH per cycle.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in lipids & membranes?',
            options: [
              'Fatty acids: saturated (no double bonds, straight) vs unsaturated (double bonds, kinked)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Fatty acids: saturated (no double bonds, straight) vs unsaturated (double bonds, kinked)'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Cell membrane: phospholipid bilayer with cholesterol for fluidity and integral/peripheral proteins.

**MCAT Tip:** Lipid-soluble signals (steroids) cross the membrane; water-soluble signals need receptors.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to lipids & membranes?',
            options: [
              'Cell membrane: phospholipid bilayer with cholesterol for fluidity and integral/peripheral proteins',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Cell membrane: phospholipid bilayer with cholesterol for fluidity and integral/peripheral proteins'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Lipids & Membranes:',
            options: ['Fatty acids: saturated (no double bonds, straight) vs unsatu', 'Beta-oxidation: fatty acid to acetyl-CoA units, producing FA', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Cell membrane: phospholipid bilayer with cholesterol for flu', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Fatty acids: saturated (no double bonds, straight) vs unsatu', 'Cell membrane: phospholipid bilayer with cholesterol for flu'],
        hint1: 'Think about lipids & membranes',
        hint2: 'Consider the MCAT application',
        explanation: 'Fatty acids: saturated (no double bonds, straight) vs unsaturated (double bonds, kinked). Cell membrane: phospholipid bilayer with cholesterol for fluidity and integral/peripheral proteins.'
      }
    }
  ]
}
