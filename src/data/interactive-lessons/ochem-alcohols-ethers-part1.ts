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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Alcohols?',
            options: [
              'R-OH; named with -ol suffix',
              'primary (1°), secondary (2°), tertiary (3°)',
              'Hydrogen bonding → higher boiling points than alkanes',
              'pKa ~16-18 (weaker than water, stronger than alkanes)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Alcohols: R-OH; named with -ol suffix. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Hydrogen bonding → higher boiling…?',
            options: [
              'Hydrogen bonding → higher boiling points than alkanes',
              'R-OH; named with -ol suffix',
              'pKa ~16-18 (weaker than water, stronger than alkanes)',
              'primary (1°), secondary (2°), tertiary (3°)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Hydrogen bonding → higher boiling points than alkanes. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Alcohols',
            options: ['pKa ~16-18 (weaker than water, stronger than alkanes)', 'primary (1°), secondary (2°), tertiary (3°)', 'R-OH; named with -ol suffix', 'Hydrogen bonding → higher boiling points than alkanes']
          },
          {
            label: 'Classification',
            options: ['pKa ~16-18 (weaker than water, stronger than alkanes)', 'primary (1°), secondary (2°), tertiary (3°)', 'Hydrogen bonding → higher boiling points than alkanes', 'R-OH; named with -ol suffix']
          },
          {
            label: 'Acidity',
            options: ['primary (1°), secondary (2°), tertiary (3°)', 'R-OH; named with -ol suffix', 'pKa ~16-18 (weaker than water, stronger than alkanes)', 'Hydrogen bonding → higher boiling points than alkanes']
          }
        ],
        correctAnswers: ['R-OH; named with -ol suffix', 'primary (1°), secondary (2°), tertiary (3°)', 'pKa ~16-18 (weaker than water, stronger than alkanes)'],
        hint1: 'Think about what each concept specifically describes in ️ Alcohols Ethers.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Alcohols Ethers describes a specific idea. Alcohols: R-OH; named with -ol suffix. Classification: primary (1°), secondary (2°), tertiary (3°). Acidity: pKa ~16-18 (weaker than water, stronger than alkanes).'
      }
    }
  ]
}
