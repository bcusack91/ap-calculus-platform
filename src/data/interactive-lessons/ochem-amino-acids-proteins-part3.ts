export const oChemAminoAcidsPart3Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'amino3-intro',
      type: 'text' as const,
      content: `
# Peptide Bonds

**Part 3 of 7 — Peptide Bonds**

### 1. Peptide bond

amide bond between amino acids

### 2. Formed by condensation (dehydration) reaction

Formed by condensation (dehydration) reaction

### 3. Peptide bond is planar (partial double bond character from resonance)

Peptide bond is planar (partial double bond character from resonance)

### 4. N-terminus (amino end) and C-terminus (carboxyl end)

N-terminus (amino end) and C-terminus (carboxyl end)
      `
    },
    {
      id: 'amino3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Peptide bond?',
            options: [
              'N-terminus (amino end) and C-terminus (carboxyl end)',
              'amide bond between amino acids',
              'Formed by condensation (dehydration) reaction',
              'Peptide bond is planar (partial double bond character from resonance)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Peptide bond: amide bond between amino acids. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Peptide bond is planar (partial double…?',
            options: [
              'amide bond between amino acids',
              'Peptide bond is planar (partial double bond character from resonance)',
              'N-terminus (amino end) and C-terminus (carboxyl end)',
              'Formed by condensation (dehydration) reaction'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Peptide bond is planar (partial double bond character from resonance). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'amino3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Peptide bond**: amide bond between amino acids
- **Formed by condensation (dehydration) reaction**
- **Peptide bond is planar (partial double bond character from resonance)**
- **N-terminus (amino end) and C-terminus (carboxyl end)**
      `
    },
    {
      id: 'amino3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to peptide bonds?',
            options: [
              'N-terminus (amino end) and C-terminus (carboxyl end)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'N-terminus (amino end) and C-terminus (carboxyl end)'
          }
        ]
      }
    },
    {
      id: 'amino3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Peptide bond',
            options: ['Peptide bond is planar (partial double bond character from resonance)', 'N-terminus (amino end) and C-terminus (carboxyl end)', 'amide bond between amino acids', 'Formed by condensation (dehydration) reaction']
          },
          {
            label: 'Formed by condensation (dehydration)…',
            options: ['Peptide bond is planar (partial double bond character from resonance)', 'Formed by condensation (dehydration) reaction', 'N-terminus (amino end) and C-terminus (carboxyl end)', 'amide bond between amino acids']
          },
          {
            label: 'Peptide bond is planar (partial double…',
            options: ['amide bond between amino acids', 'Peptide bond is planar (partial double bond character from resonance)', 'Formed by condensation (dehydration) reaction', 'N-terminus (amino end) and C-terminus (carboxyl end)']
          }
        ],
        correctAnswers: ['amide bond between amino acids', 'Formed by condensation (dehydration) reaction', 'Peptide bond is planar (partial double bond character from resonance)'],
        hint1: 'Think about what each concept specifically describes in Peptide Bonds.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Peptide Bonds describes a specific idea. Peptide bond: amide bond between amino acids. Formed by condensation (dehydration) reaction. Peptide bond is planar (partial double bond character from resonance).'
      }
    }
  ]
}
