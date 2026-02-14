export const oChemAtomicBondingPart1Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Atomic Structure Bonding

**Part 1 of 7 — Atomic Orbitals & Electron Configuration**

### 1. Electron configuration determines bonding

Electron configuration determines bonding

### 2. Valence electrons

outermost shell electrons

### 3. Octet rule

atoms tend to have 8 valence electrons

### 4. Carbon has 4 valence electrons → forms 4 bonds

Carbon has 4 valence electrons → forms 4 bonds
      `
    },
    {
      id: 'atomi1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of atomic orbitals & electron configuration?',
            options: [
              'Electron configuration determines bonding',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Electron configuration determines bonding'
          },
          {
            question: 'In the context of atomic orbitals & electron configuration, which is accurate?',
            options: [
              'atoms tend to have 8 valence electrons',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Octet rule: atoms tend to have 8 valence electrons'
          }
        ]
      }
    },
    {
      id: 'atomi1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Electron configuration determines bonding**
- **Valence electrons**: outermost shell electrons
- **Octet rule**: atoms tend to have 8 valence electrons
- **Carbon has 4 valence electrons → forms 4 bonds**
      `
    },
    {
      id: 'atomi1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to atomic orbitals & electron configuration?',
            options: [
              'Carbon has 4 valence electrons → forms 4 bonds',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Carbon has 4 valence electrons → forms 4 bonds'
          }
        ]
      }
    },
    {
      id: 'atomi1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electron configuration determines bonding',
            options: ['Electron configuration determines bonding', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Valence electrons',
            options: ['outermost shell electrons', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Octet rule',
            options: ['atoms tend to have 8 valence electrons', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Electron configuration determines bonding', 'outermost shell electrons', 'atoms tend to have 8 valence electrons'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Atomic Orbitals & Electron Configuration.'
      }
    }
  ]
}
