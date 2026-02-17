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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fatty acids',
            options: ['Lipid-soluble signals (steroids) cross the membrane; water-soluble signals need receptors.', 'fatty acid to acetyl-CoA units, producing FADH2 and NADH per cycle.', 'Cell membrane: phospholipid bilayer with cholesterol for fluidity and integral/peripheral proteins.', 'saturated (no double bonds, straight) vs unsaturated (double bonds, kinked).']
          },
          {
            label: 'Beta-oxidation',
            options: ['saturated (no double bonds, straight) vs unsaturated (double bonds, kinked).', 'fatty acid to acetyl-CoA units, producing FADH2 and NADH per cycle.', 'Lipid-soluble signals (steroids) cross the membrane; water-soluble signals need receptors.', 'Cell membrane: phospholipid bilayer with cholesterol for fluidity and integral/peripheral proteins.']
          },
          {
            label: 'Key Insight',
            options: ['saturated (no double bonds, straight) vs unsaturated (double bonds, kinked).', 'fatty acid to acetyl-CoA units, producing FADH2 and NADH per cycle.', 'Lipid-soluble signals (steroids) cross the membrane; water-soluble signals need receptors.', 'Cell membrane: phospholipid bilayer with cholesterol for fluidity and integral/peripheral proteins.']
          }
        ],
        correctAnswers: ['saturated (no double bonds, straight) vs unsaturated (double bonds, kinked).', 'fatty acid to acetyl-CoA units, producing FADH2 and NADH per cycle.', 'Cell membrane: phospholipid bilayer with cholesterol for fluidity and integral/peripheral proteins.'],
        hint1: 'Think about what each concept specifically describes in Lipids & Membranes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Lipids & Membranes describes a specific idea. Fatty acids: saturated (no double bonds, straight) vs unsaturated (double bonds, kinked). Beta-oxidation: fatty acid to acetyl-CoA units, producing FADH2 and NADH per cycle. Key Insight: Cell membrane: phospholipid bilayer with cholesterol for fluidity and integral/peripheral proteins.'
      }
    }
  ]
}
