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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes London dispersion forces?',
            options: [
              'N-H, O-H, F-H (strongest IMF)',
              'IMFs determine boiling point, solubility, viscosity',
              'polar molecules',
              'all molecules, increases with size'
            ],
            correctAnswer: 3,
            explanation: 'Correct — London dispersion forces: all molecules, increases with size. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Hydrogen bonding:',
            options: [
              'all molecules, increases with size',
              'IMFs determine boiling point, solubility, viscosity',
              'N-H, O-H, F-H (strongest IMF)',
              'polar molecules'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Hydrogen bonding: N-H, O-H, F-H (strongest IMF). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'London dispersion forces',
            options: ['N-H, O-H, F-H (strongest IMF)', 'IMFs determine boiling point, solubility, viscosity', 'polar molecules', 'all molecules, increases with size']
          },
          {
            label: 'Dipole-dipole',
            options: ['IMFs determine boiling point, solubility, viscosity', 'all molecules, increases with size', 'N-H, O-H, F-H (strongest IMF)', 'polar molecules']
          },
          {
            label: 'Hydrogen bonding',
            options: ['N-H, O-H, F-H (strongest IMF)', 'all molecules, increases with size', 'IMFs determine boiling point, solubility, viscosity', 'polar molecules']
          }
        ],
        correctAnswers: ['all molecules, increases with size', 'polar molecules', 'N-H, O-H, F-H (strongest IMF)'],
        hint1: 'Think about what each concept specifically describes in Intermolecular Forces.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Intermolecular Forces describes a specific idea. London dispersion forces: all molecules, increases with size. Dipole-dipole: polar molecules. Hydrogen bonding: N-H, O-H, F-H (strongest IMF).'
      }
    }
  ]
}
