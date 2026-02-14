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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of physical properties?',
            options: [
              'Boiling point increases with molecular weight',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Boiling point increases with molecular weight'
          },
          {
            question: 'In the context of physical properties, which is accurate?',
            options: [
              'Alkanes are nonpolar → insoluble in water',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Alkanes are nonpolar → insoluble in water'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Boiling point increases with molecular weight',
            options: ['Boiling point increases with molecular weight', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Branching decreases boiling point (less surface area)',
            options: ['Branching decreases boiling point (less surface ar', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Alkanes are nonpolar → insoluble in water',
            options: ['Alkanes are nonpolar → insoluble in water', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Boiling point increases with molecular weight', 'Branching decreases boiling point (less surface ar', 'Alkanes are nonpolar → insoluble in water'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Physical Properties.'
      }
    }
  ]
}
