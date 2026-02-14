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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of bond polarity & dipole moments?',
            options: [
              'Electronegativity difference determines polarity',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Electronegativity difference determines polarity'
          },
          {
            question: 'In the context of bond polarity & dipole moments, which is accurate?',
            options: [
              'Polar bonds in symmetric molecules can cancel',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Polar bonds in symmetric molecules can cancel'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electronegativity difference determines polarity',
            options: ['Electronegativity difference determines polarity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Dipole moment',
            options: ['μ = q × d', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Polar bonds in symmetric molecules can cancel',
            options: ['Polar bonds in symmetric molecules can cancel', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Electronegativity difference determines polarity', 'μ = q × d', 'Polar bonds in symmetric molecules can cancel'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Bond Polarity & Dipole Moments.'
      }
    }
  ]
}
