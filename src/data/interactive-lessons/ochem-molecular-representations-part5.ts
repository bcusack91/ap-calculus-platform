export const oChemMolRepPart5Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec5-intro',
      type: 'text' as const,
      content: `
# Intermolecular Forces

**Part 5 of 7 — Intermolecular Forces**

### 1. London dispersion forces

all molecules, increases with size

### 2. Dipole-dipole

polar molecules

### 3. Hydrogen bonding

N-H, O-H, F-H (strongest IMF)

### 4. IMFs determine boiling point, solubility, viscosity

IMFs determine boiling point, solubility, viscosity
      `
    },
    {
      id: 'molec5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of intermolecular forces?',
            options: [
              'London dispersion forces',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'London dispersion forces: all molecules, increases with size'
          },
          {
            question: 'In the context of intermolecular forces, which is accurate?',
            options: [
              'N-H, O-H, F-H (strongest IMF)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Hydrogen bonding: N-H, O-H, F-H (strongest IMF)'
          }
        ]
      }
    },
    {
      id: 'molec5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **London dispersion forces**: all molecules, increases with size
- **Dipole-dipole**: polar molecules
- **Hydrogen bonding**: N-H, O-H, F-H (strongest IMF)
- **IMFs determine boiling point, solubility, viscosity**
      `
    },
    {
      id: 'molec5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to intermolecular forces?',
            options: [
              'IMFs determine boiling point, solubility, viscosity',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'IMFs determine boiling point, solubility, viscosity'
          }
        ]
      }
    },
    {
      id: 'molec5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'London dispersion forces',
            options: ['all molecules, increases with size', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Dipole-dipole',
            options: ['polar molecules', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Hydrogen bonding',
            options: ['N-H, O-H, F-H (strongest IMF)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['all molecules, increases with size', 'polar molecules', 'N-H, O-H, F-H (strongest IMF)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Intermolecular Forces.'
      }
    }
  ]
}
