export const oChemAtomicBondingPart5Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi5-intro',
      type: 'text' as const,
      content: `
# Bond Polarity & Dipole Moments

**Part 5 of 7 — Bond Polarity & Dipole Moments**

### 1. Electronegativity difference determines polarity

Electronegativity difference determines polarity

### 2. Dipole moment

μ = q × d

### 3. Polar bonds in symmetric molecules can cancel

Polar bonds in symmetric molecules can cancel

### 4. Molecular polarity affects physical properties

Molecular polarity affects physical properties
      `
    },
    {
      id: 'atomi5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Electronegativity difference determines…" refer to in this topic?',
            options: [
              'Electronegativity difference determines polarity',
              'μ = q × d',
              'Molecular polarity affects physical properties',
              'Polar bonds in symmetric molecules can cancel'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Electronegativity difference determines polarity. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Polar bonds in symmetric molecules can…:',
            options: [
              'μ = q × d',
              'Electronegativity difference determines polarity',
              'Polar bonds in symmetric molecules can cancel',
              'Molecular polarity affects physical properties'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Polar bonds in symmetric molecules can cancel. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'atomi5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Electronegativity difference determines polarity**
- **Dipole moment**: μ = q × d
- **Polar bonds in symmetric molecules can cancel**
- **Molecular polarity affects physical properties**
      `
    },
    {
      id: 'atomi5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to bond polarity & dipole moments?',
            options: [
              'Molecular polarity affects physical properties',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Molecular polarity affects physical properties'
          }
        ]
      }
    },
    {
      id: 'atomi5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electronegativity difference determines…',
            options: ['Polar bonds in symmetric molecules can cancel', 'Molecular polarity affects physical properties', 'μ = q × d', 'Electronegativity difference determines polarity']
          },
          {
            label: 'Dipole moment',
            options: ['μ = q × d', 'Polar bonds in symmetric molecules can cancel', 'Molecular polarity affects physical properties', 'Electronegativity difference determines polarity']
          },
          {
            label: 'Polar bonds in symmetric molecules can…',
            options: ['Polar bonds in symmetric molecules can cancel', 'μ = q × d', 'Molecular polarity affects physical properties', 'Electronegativity difference determines polarity']
          }
        ],
        correctAnswers: ['Electronegativity difference determines polarity', 'μ = q × d', 'Polar bonds in symmetric molecules can cancel'],
        hint1: 'Think about what each concept specifically describes in Bond Polarity & Dipole Moments.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Bond Polarity & Dipole Moments describes a specific idea. Electronegativity difference determines polarity. Dipole moment: μ = q × d. Polar bonds in symmetric molecules can cancel.'
      }
    }
  ]
}
