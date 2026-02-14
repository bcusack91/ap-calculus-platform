export const oChemAminesPart2Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'amine2-intro',
      type: 'text' as const,
      content: `
# Amine Basicity

**Part 2 of 7 — Amine Basicity**

### 1. Amine basicity

pKb depends on electron density on nitrogen

### 2. Alkylamines more basic than aniline (aromatic amine)

Alkylamines more basic than aniline (aromatic amine)

### 3. Electron-donating groups increase basicity

Electron-donating groups increase basicity

### 4. Electron-withdrawing groups decrease basicity

Electron-withdrawing groups decrease basicity
      `
    },
    {
      id: 'amine2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of amine basicity?',
            options: [
              'Amine basicity',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Amine basicity: pKb depends on electron density on nitrogen'
          },
          {
            question: 'In the context of amine basicity, which is accurate?',
            options: [
              'Electron-donating groups increase basicity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Electron-donating groups increase basicity'
          }
        ]
      }
    },
    {
      id: 'amine2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Amine basicity**: pKb depends on electron density on nitrogen
- **Alkylamines more basic than aniline (aromatic amine)**
- **Electron-donating groups increase basicity**
- **Electron-withdrawing groups decrease basicity**
      `
    },
    {
      id: 'amine2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to amine basicity?',
            options: [
              'Electron-withdrawing groups decrease basicity',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Electron-withdrawing groups decrease basicity'
          }
        ]
      }
    },
    {
      id: 'amine2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Amine basicity',
            options: ['pKb depends on electron density on nitrogen', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Alkylamines more basic than aniline (aromatic amine)',
            options: ['Alkylamines more basic than aniline (aromatic amin', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Electron-donating groups increase basicity',
            options: ['Electron-donating groups increase basicity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['pKb depends on electron density on nitrogen', 'Alkylamines more basic than aniline (aromatic amin', 'Electron-donating groups increase basicity'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Amine Basicity.'
      }
    }
  ]
}
