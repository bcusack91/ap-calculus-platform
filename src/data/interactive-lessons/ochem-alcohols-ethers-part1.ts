export const oChemAlcoholsPart1Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Alcohols Ethers

**Part 1 of 7 — Alcohol Nomenclature & Properties**

### 1. Alcohols

R-OH; named with -ol suffix

### 2. Classification

primary (1°), secondary (2°), tertiary (3°)

### 3. Hydrogen bonding → higher boiling points than alkanes

Hydrogen bonding → higher boiling points than alkanes

### 4. Acidity

pKa ~16-18 (weaker than water, stronger than alkanes)
      `
    },
    {
      id: 'alcoh1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of alcohol nomenclature & properties?',
            options: [
              'Alcohols',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Alcohols: R-OH; named with -ol suffix'
          },
          {
            question: 'In the context of alcohol nomenclature & properties, which is accurate?',
            options: [
              'Hydrogen bonding → higher boiling points than alkanes',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Hydrogen bonding → higher boiling points than alkanes'
          }
        ]
      }
    },
    {
      id: 'alcoh1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Alcohols**: R-OH; named with -ol suffix
- **Classification**: primary (1°), secondary (2°), tertiary (3°)
- **Hydrogen bonding → higher boiling points than alkanes**
- **Acidity**: pKa ~16-18 (weaker than water, stronger than alkanes)
      `
    },
    {
      id: 'alcoh1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alcohol nomenclature & properties?',
            options: [
              'pKa ~16-18 (weaker than water, stronger than alkanes)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Acidity: pKa ~16-18 (weaker than water, stronger than alkanes)'
          }
        ]
      }
    },
    {
      id: 'alcoh1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Alcohols',
            options: ['R-OH; named with -ol suffix', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Classification',
            options: ['primary (1°), secondary (2°), tertiary (3°)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Hydrogen bonding → higher boiling points than alkanes',
            options: ['Hydrogen bonding → higher boiling points than alka', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['R-OH; named with -ol suffix', 'primary (1°), secondary (2°), tertiary (3°)', 'Hydrogen bonding → higher boiling points than alka'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Alcohol Nomenclature & Properties.'
      }
    }
  ]
}
