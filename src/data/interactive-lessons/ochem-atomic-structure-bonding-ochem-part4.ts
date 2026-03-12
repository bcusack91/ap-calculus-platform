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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Bonding MOs" refer to in this topic?',
            options: [
              'higher energy, destructive overlap',
              'MO theory explains paramagnetism of O₂',
              'lower energy, constructive overlap',
              'Bond order = (bonding e⁻ - antibonding e⁻) / 2'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Bonding MOs: lower energy, constructive overlap. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Bond order = (bonding e⁻ - antibonding…:',
            options: [
              'Bond order = (bonding e⁻ - antibonding e⁻) / 2',
              'MO theory explains paramagnetism of O₂',
              'higher energy, destructive overlap',
              'lower energy, constructive overlap'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Bond order = (bonding e⁻ - antibonding e⁻) / 2. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bonding MOs',
            options: ['Bond order = (bonding e⁻ - antibonding e⁻) / 2', 'higher energy, destructive overlap', 'lower energy, constructive overlap', 'MO theory explains paramagnetism of O₂']
          },
          {
            label: 'Antibonding MOs',
            options: ['MO theory explains paramagnetism of O₂', 'lower energy, constructive overlap', 'Bond order = (bonding e⁻ - antibonding e⁻) / 2', 'higher energy, destructive overlap']
          }
        ],
        correctAnswers: ['lower energy, constructive overlap', 'higher energy, destructive overlap'],
        hint1: 'Think about what each concept specifically describes in Molecular Orbital Theory.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Molecular Orbital Theory describes a specific idea. Bonding MOs: lower energy, constructive overlap. Antibonding MOs: higher energy, destructive overlap.'
      }
    }
  ]
}
