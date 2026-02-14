export const oChemAtomicBondingPart4Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi4-intro',
      type: 'text' as const,
      content: `
# Molecular Orbital Theory

**Part 4 of 7 — Molecular Orbital Theory**

### 1. Bonding MOs

lower energy, constructive overlap

### 2. Antibonding MOs

higher energy, destructive overlap

### 3. Bond order = (bonding e⁻ - antibonding e⁻) / 2

Bond order = (bonding e⁻ - antibonding e⁻) / 2

### 4. MO theory explains paramagnetism of O₂

MO theory explains paramagnetism of O₂
      `
    },
    {
      id: 'atomi4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of molecular orbital theory?',
            options: [
              'Bonding MOs',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Bonding MOs: lower energy, constructive overlap'
          },
          {
            question: 'In the context of molecular orbital theory, which is accurate?',
            options: [
              'Bond order = (bonding e⁻ - antibonding e⁻) / 2',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Bond order = (bonding e⁻ - antibonding e⁻) / 2'
          }
        ]
      }
    },
    {
      id: 'atomi4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Bonding MOs**: lower energy, constructive overlap
- **Antibonding MOs**: higher energy, destructive overlap
- **Bond order = (bonding e⁻ - antibonding e⁻) / 2**
- **MO theory explains paramagnetism of O₂**
      `
    },
    {
      id: 'atomi4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to molecular orbital theory?',
            options: [
              'MO theory explains paramagnetism of O₂',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'MO theory explains paramagnetism of O₂'
          }
        ]
      }
    },
    {
      id: 'atomi4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bonding MOs',
            options: ['lower energy, constructive overlap', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Antibonding MOs',
            options: ['higher energy, destructive overlap', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Bond order = (bonding e⁻ - antibonding e⁻) / 2',
            options: ['Bond order = (bonding e⁻ - antibonding e⁻) / 2', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['lower energy, constructive overlap', 'higher energy, destructive overlap', 'Bond order = (bonding e⁻ - antibonding e⁻) / 2'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Molecular Orbital Theory.'
      }
    }
  ]
}
