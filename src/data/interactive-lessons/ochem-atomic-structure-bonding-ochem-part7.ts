export const oChemAtomicBondingPart7Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Bonding fundamentals underpin all organic chemistry

Bonding fundamentals underpin all organic chemistry

### 2. Hybridization determines geometry and reactivity

Hybridization determines geometry and reactivity

### 3. Polarity influences intermolecular forces

Polarity influences intermolecular forces

### 4. Review

structure determines properties
      `
    },
    {
      id: 'atomi7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Bonding fundamentals underpin all organic chemistry',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Bonding fundamentals underpin all organic chemistry'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Polarity influences intermolecular forces',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Polarity influences intermolecular forces'
          }
        ]
      }
    },
    {
      id: 'atomi7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Bonding fundamentals underpin all organic chemistry**
- **Hybridization determines geometry and reactivity**
- **Polarity influences intermolecular forces**
- **Review**: structure determines properties
      `
    },
    {
      id: 'atomi7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'structure determines properties',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: structure determines properties'
          }
        ]
      }
    },
    {
      id: 'atomi7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bonding fundamentals underpin all organic chemistry',
            options: ['Bonding fundamentals underpin all organic chemistr', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Hybridization determines geometry and reactivity',
            options: ['Hybridization determines geometry and reactivity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Polarity influences intermolecular forces',
            options: ['Polarity influences intermolecular forces', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Bonding fundamentals underpin all organic chemistr', 'Hybridization determines geometry and reactivity', 'Polarity influences intermolecular forces'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
