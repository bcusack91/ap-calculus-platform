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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of peptide bonds?',
            options: [
              'Peptide bond',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Peptide bond: amide bond between amino acids'
          },
          {
            question: 'In the context of peptide bonds, which is accurate?',
            options: [
              'Peptide bond is planar (partial double bond character from resonance)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Peptide bond is planar (partial double bond character from resonance)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Peptide bond',
            options: ['amide bond between amino acids', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Formed by condensation (dehydration) reaction',
            options: ['Formed by condensation (dehydration) reaction', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Peptide bond is planar (partial double bond character from resonance)',
            options: ['Peptide bond is planar (partial double bond charac', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['amide bond between amino acids', 'Formed by condensation (dehydration) reaction', 'Peptide bond is planar (partial double bond charac'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Peptide Bonds.'
      }
    }
  ]
}
