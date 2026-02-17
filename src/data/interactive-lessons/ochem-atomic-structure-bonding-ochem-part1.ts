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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Electron configuration determines…?',
            options: [
              'outermost shell electrons',
              'Carbon has 4 valence electrons → forms 4 bonds',
              'atoms tend to have 8 valence electrons',
              'Electron configuration determines bonding'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Electron configuration determines bonding. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Octet rule:',
            options: [
              'Electron configuration determines bonding',
              'atoms tend to have 8 valence electrons',
              'Carbon has 4 valence electrons → forms 4 bonds',
              'outermost shell electrons'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Octet rule: atoms tend to have 8 valence electrons. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Valence electrons',
            options: ['atoms tend to have 8 valence electrons', 'Electron configuration determines bonding', 'outermost shell electrons', 'Carbon has 4 valence electrons → forms 4 bonds']
          },
          {
            label: 'Octet rule',
            options: ['Carbon has 4 valence electrons → forms 4 bonds', 'Electron configuration determines bonding', 'outermost shell electrons', 'atoms tend to have 8 valence electrons']
          }
        ],
        correctAnswers: ['outermost shell electrons', 'atoms tend to have 8 valence electrons'],
        hint1: 'Think about what each concept specifically describes in ️ Atomic Structure Bonding.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Atomic Structure Bonding describes a specific idea. Valence electrons: outermost shell electrons. Octet rule: atoms tend to have 8 valence electrons.'
      }
    }
  ]
}
