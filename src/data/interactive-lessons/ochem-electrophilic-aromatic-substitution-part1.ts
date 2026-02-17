export const oChemEASPart1Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'elect1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Electrophilic Aromatic Substitution

**Part 1 of 7 — EAS Mechanism**

### 1. EAS

electrophile attacks aromatic ring → substitution product

### 2. Step 1

electrophilic attack → arenium ion (σ complex)

### 3. Step 2

deprotonation restores aromaticity

### 4. Aromaticity is preserved throughout

Aromaticity is preserved throughout
      `
    },
    {
      id: 'elect1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains EAS?',
            options: [
              'electrophile attacks aromatic ring → substitution product',
              'Aromaticity is preserved throughout',
              'deprotonation restores aromaticity',
              'electrophilic attack → arenium ion (σ complex)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — EAS: electrophile attacks aromatic ring → substitution product. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Step 2?',
            options: [
              'electrophile attacks aromatic ring → substitution product',
              'electrophilic attack → arenium ion (σ complex)',
              'Aromaticity is preserved throughout',
              'deprotonation restores aromaticity'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Step 2: deprotonation restores aromaticity. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'elect1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **EAS**: electrophile attacks aromatic ring → substitution product
- **Step 1**: electrophilic attack → arenium ion (σ complex)
- **Step 2**: deprotonation restores aromaticity
- **Aromaticity is preserved throughout**
      `
    },
    {
      id: 'elect1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to eas mechanism?',
            options: [
              'Aromaticity is preserved throughout',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Aromaticity is preserved throughout'
          }
        ]
      }
    },
    {
      id: 'elect1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'EAS',
            options: ['electrophile attacks aromatic ring → substitution product', 'electrophilic attack → arenium ion (σ complex)', 'Aromaticity is preserved throughout', 'deprotonation restores aromaticity']
          },
          {
            label: 'Step 1',
            options: ['deprotonation restores aromaticity', 'Aromaticity is preserved throughout', 'electrophilic attack → arenium ion (σ complex)', 'electrophile attacks aromatic ring → substitution product']
          },
          {
            label: 'Step 2',
            options: ['electrophile attacks aromatic ring → substitution product', 'deprotonation restores aromaticity', 'Aromaticity is preserved throughout', 'electrophilic attack → arenium ion (σ complex)']
          }
        ],
        correctAnswers: ['electrophile attacks aromatic ring → substitution product', 'electrophilic attack → arenium ion (σ complex)', 'deprotonation restores aromaticity'],
        hint1: 'Think about what each concept specifically describes in ️ Electrophilic Aromatic Substitution.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Electrophilic Aromatic Substitution describes a specific idea. EAS: electrophile attacks aromatic ring → substitution product. Step 1: electrophilic attack → arenium ion (σ complex). Step 2: deprotonation restores aromaticity.'
      }
    }
  ]
}
