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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Amine basicity" refer to in this topic?',
            options: [
              'Electron-withdrawing groups decrease basicity',
              'Alkylamines more basic than aniline (aromatic amine)',
              'pKb depends on electron density on nitrogen',
              'Electron-donating groups increase basicity'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Amine basicity: pKb depends on electron density on nitrogen. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Electron-donating groups increase…:',
            options: [
              'Alkylamines more basic than aniline (aromatic amine)',
              'Electron-withdrawing groups decrease basicity',
              'pKb depends on electron density on nitrogen',
              'Electron-donating groups increase basicity'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Electron-donating groups increase basicity. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Amine basicity',
            options: ['Electron-donating groups increase basicity', 'Electron-withdrawing groups decrease basicity', 'Alkylamines more basic than aniline (aromatic amine)', 'pKb depends on electron density on nitrogen']
          },
          {
            label: 'Alkylamines more basic than aniline…',
            options: ['pKb depends on electron density on nitrogen', 'Alkylamines more basic than aniline (aromatic amine)', 'Electron-donating groups increase basicity', 'Electron-withdrawing groups decrease basicity']
          },
          {
            label: 'Electron-donating groups increase…',
            options: ['Electron-donating groups increase basicity', 'pKb depends on electron density on nitrogen', 'Alkylamines more basic than aniline (aromatic amine)', 'Electron-withdrawing groups decrease basicity']
          }
        ],
        correctAnswers: ['pKb depends on electron density on nitrogen', 'Alkylamines more basic than aniline (aromatic amine)', 'Electron-donating groups increase basicity'],
        hint1: 'Think about what each concept specifically describes in Amine Basicity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Amine Basicity describes a specific idea. Amine basicity: pKb depends on electron density on nitrogen. Alkylamines more basic than aniline (aromatic amine). Electron-donating groups increase basicity.'
      }
    }
  ]
}
