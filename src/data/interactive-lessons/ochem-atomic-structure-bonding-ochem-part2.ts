export const oChemAtomicBondingPart2Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi2-intro',
      type: 'text' as const,
      content: `
# Lewis Structures & Formal Charge

**Part 2 of 7 — Lewis Structures & Formal Charge**

### 1. Lewis structures show bonding and lone pairs

Lewis structures show bonding and lone pairs

### 2. Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻

Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻

### 3. Minimize formal charges for best structure

Minimize formal charges for best structure

### 4. Resonance structures

delocalized electrons
      `
    },
    {
      id: 'atomi2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Lewis structures show bonding and lone…" refer to in this topic?',
            options: [
              'Lewis structures show bonding and lone pairs',
              'delocalized electrons',
              'Minimize formal charges for best structure',
              'Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Lewis structures show bonding and lone pairs. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Minimize formal charges for best…:',
            options: [
              'Lewis structures show bonding and lone pairs',
              'Minimize formal charges for best structure',
              'delocalized electrons',
              'Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Minimize formal charges for best structure. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'atomi2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Lewis structures show bonding and lone pairs**
- **Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻**
- **Minimize formal charges for best structure**
- **Resonance structures**: delocalized electrons
      `
    },
    {
      id: 'atomi2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to lewis structures & formal charge?',
            options: [
              'delocalized electrons',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Resonance structures: delocalized electrons'
          }
        ]
      }
    },
    {
      id: 'atomi2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lewis structures show bonding and lone…',
            options: ['delocalized electrons', 'Minimize formal charges for best structure', 'Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻', 'Lewis structures show bonding and lone pairs']
          },
          {
            label: 'Formal charge = valence e⁻ - lone pair…',
            options: ['Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻', 'delocalized electrons', 'Lewis structures show bonding and lone pairs', 'Minimize formal charges for best structure']
          },
          {
            label: 'Minimize formal charges for best…',
            options: ['Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻', 'delocalized electrons', 'Lewis structures show bonding and lone pairs', 'Minimize formal charges for best structure']
          }
        ],
        correctAnswers: ['Lewis structures show bonding and lone pairs', 'Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻', 'Minimize formal charges for best structure'],
        hint1: 'Think about what each concept specifically describes in Lewis Structures & Formal Charge.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Lewis Structures & Formal Charge describes a specific idea. Lewis structures show bonding and lone pairs. Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻. Minimize formal charges for best structure.'
      }
    }
  ]
}
