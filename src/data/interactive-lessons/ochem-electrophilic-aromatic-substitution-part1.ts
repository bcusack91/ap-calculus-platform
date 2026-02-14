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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of eas mechanism?',
            options: [
              'EAS',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'EAS: electrophile attacks aromatic ring → substitution product'
          },
          {
            question: 'In the context of eas mechanism, which is accurate?',
            options: [
              'deprotonation restores aromaticity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Step 2: deprotonation restores aromaticity'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'EAS',
            options: ['electrophile attacks aromatic ring → substitution ', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Step 1',
            options: ['electrophilic attack → arenium ion (σ complex)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Step 2',
            options: ['deprotonation restores aromaticity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['electrophile attacks aromatic ring → substitution ', 'electrophilic attack → arenium ion (σ complex)', 'deprotonation restores aromaticity'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding EAS Mechanism.'
      }
    }
  ]
}
