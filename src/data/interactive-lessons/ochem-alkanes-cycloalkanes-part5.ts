export const oChemAlkanesPart5Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan5-intro',
      type: 'text' as const,
      content: `
# Physical Properties

**Part 5 of 7 — Physical Properties**

### 1. Boiling point increases with molecular weight

Boiling point increases with molecular weight

### 2. Branching decreases boiling point (less surface area)

Branching decreases boiling point (less surface area)

### 3. Alkanes are nonpolar → insoluble in water

Alkanes are nonpolar → insoluble in water

### 4. London dispersion forces are primary IMF

London dispersion forces are primary IMF
      `
    },
    {
      id: 'alkan5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Boiling point increases with molecular…?',
            options: [
              'Alkanes are nonpolar → insoluble in water',
              'Boiling point increases with molecular weight',
              'London dispersion forces are primary IMF',
              'Branching decreases boiling point (less surface area)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Boiling point increases with molecular weight. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Alkanes are nonpolar → insoluble in…?',
            options: [
              'Boiling point increases with molecular weight',
              'Branching decreases boiling point (less surface area)',
              'Alkanes are nonpolar → insoluble in water',
              'London dispersion forces are primary IMF'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Alkanes are nonpolar → insoluble in water. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alkan5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Boiling point increases with molecular weight**
- **Branching decreases boiling point (less surface area)**
- **Alkanes are nonpolar → insoluble in water**
- **London dispersion forces are primary IMF**
      `
    },
    {
      id: 'alkan5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to physical properties?',
            options: [
              'London dispersion forces are primary IMF',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'London dispersion forces are primary IMF'
          }
        ]
      }
    },
    {
      id: 'alkan5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Boiling point increases with molecular…',
            options: ['Alkanes are nonpolar → insoluble in water', 'Branching decreases boiling point (less surface area)', 'London dispersion forces are primary IMF', 'Boiling point increases with molecular weight']
          },
          {
            label: 'Branching decreases boiling point (less…',
            options: ['Alkanes are nonpolar → insoluble in water', 'Boiling point increases with molecular weight', 'London dispersion forces are primary IMF', 'Branching decreases boiling point (less surface area)']
          },
          {
            label: 'Alkanes are nonpolar → insoluble in…',
            options: ['Branching decreases boiling point (less surface area)', 'London dispersion forces are primary IMF', 'Boiling point increases with molecular weight', 'Alkanes are nonpolar → insoluble in water']
          }
        ],
        correctAnswers: ['Boiling point increases with molecular weight', 'Branching decreases boiling point (less surface area)', 'Alkanes are nonpolar → insoluble in water'],
        hint1: 'Think about what each concept specifically describes in Physical Properties.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Physical Properties describes a specific idea. Boiling point increases with molecular weight. Branching decreases boiling point (less surface area). Alkanes are nonpolar → insoluble in water.'
      }
    }
  ]
}
