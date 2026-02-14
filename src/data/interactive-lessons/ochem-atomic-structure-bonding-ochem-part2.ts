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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of lewis structures & formal charge?',
            options: [
              'Lewis structures show bonding and lone pairs',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Lewis structures show bonding and lone pairs'
          },
          {
            question: 'In the context of lewis structures & formal charge, which is accurate?',
            options: [
              'Minimize formal charges for best structure',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Minimize formal charges for best structure'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lewis structures show bonding and lone pairs',
            options: ['Lewis structures show bonding and lone pairs', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻',
            options: ['Formal charge = valence e⁻ - lone pair e⁻ - ½ bond', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Minimize formal charges for best structure',
            options: ['Minimize formal charges for best structure', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Lewis structures show bonding and lone pairs', 'Formal charge = valence e⁻ - lone pair e⁻ - ½ bond', 'Minimize formal charges for best structure'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Lewis Structures & Formal Charge.'
      }
    }
  ]
}
