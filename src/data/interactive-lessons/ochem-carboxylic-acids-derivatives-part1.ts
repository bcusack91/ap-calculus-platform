export const oChemCarboxylicAcidsPart1Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'carbo1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Carboxylic Acids Derivatives

**Part 1 of 7 — Carboxylic Acid Properties**

### 1. Carboxylic acids

RCOOH (pKa ~4-5)

### 2. Acidity due to resonance stabilization of carboxylate anion

Acidity due to resonance stabilization of carboxylate anion

### 3. Hydrogen bonding → high boiling points, dimer formation

Hydrogen bonding → high boiling points, dimer formation

### 4. Inductive effects of substituents affect acidity

Inductive effects of substituents affect acidity
      `
    },
    {
      id: 'carbo1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of carboxylic acid properties?',
            options: [
              'Carboxylic acids',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Carboxylic acids: RCOOH (pKa ~4-5)'
          },
          {
            question: 'In the context of carboxylic acid properties, which is accurate?',
            options: [
              'Hydrogen bonding → high boiling points, dimer formation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Hydrogen bonding → high boiling points, dimer formation'
          }
        ]
      }
    },
    {
      id: 'carbo1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Carboxylic acids**: RCOOH (pKa ~4-5)
- **Acidity due to resonance stabilization of carboxylate anion**
- **Hydrogen bonding → high boiling points, dimer formation**
- **Inductive effects of substituents affect acidity**
      `
    },
    {
      id: 'carbo1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to carboxylic acid properties?',
            options: [
              'Inductive effects of substituents affect acidity',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Inductive effects of substituents affect acidity'
          }
        ]
      }
    },
    {
      id: 'carbo1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Carboxylic acids',
            options: ['RCOOH (pKa ~4-5)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Acidity due to resonance stabilization of carboxylate anion',
            options: ['Acidity due to resonance stabilization of carboxyl', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Hydrogen bonding → high boiling points, dimer formation',
            options: ['Hydrogen bonding → high boiling points, dimer form', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['RCOOH (pKa ~4-5)', 'Acidity due to resonance stabilization of carboxyl', 'Hydrogen bonding → high boiling points, dimer form'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Carboxylic Acid Properties.'
      }
    }
  ]
}
