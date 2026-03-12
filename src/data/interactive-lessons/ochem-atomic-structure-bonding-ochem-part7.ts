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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Bonding fundamentals underpin all…" refer to in this topic?',
            options: [
              'structure determines properties',
              'Polarity influences intermolecular forces',
              'Bonding fundamentals underpin all organic chemistry',
              'Hybridization determines geometry and reactivity'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Bonding fundamentals underpin all organic chemistry. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Polarity influences intermolecular…?',
            options: [
              'Bonding fundamentals underpin all organic chemistry',
              'structure determines properties',
              'Hybridization determines geometry and reactivity',
              'Polarity influences intermolecular forces'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Polarity influences intermolecular forces. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bonding fundamentals underpin all…',
            options: ['Hybridization determines geometry and reactivity', 'structure determines properties', 'Bonding fundamentals underpin all organic chemistry', 'Polarity influences intermolecular forces']
          },
          {
            label: 'Hybridization determines geometry and…',
            options: ['structure determines properties', 'Bonding fundamentals underpin all organic chemistry', 'Polarity influences intermolecular forces', 'Hybridization determines geometry and reactivity']
          },
          {
            label: 'Polarity influences intermolecular…',
            options: ['Bonding fundamentals underpin all organic chemistry', 'Hybridization determines geometry and reactivity', 'Polarity influences intermolecular forces', 'structure determines properties']
          }
        ],
        correctAnswers: ['Bonding fundamentals underpin all organic chemistry', 'Hybridization determines geometry and reactivity', 'Polarity influences intermolecular forces'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Bonding fundamentals underpin all organic chemistry. Hybridization determines geometry and reactivity. Polarity influences intermolecular forces.'
      }
    }
  ]
}
