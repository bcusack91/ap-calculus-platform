export const oChemAlkynesPart1Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'alkyn1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Alkynes Synthesis

**Part 1 of 7 — Alkyne Structure & Properties**

### 1. Alkynes

C≡C triple bond (sp hybridized, linear)

### 2. Terminal alkynes

H-C≡C-R

### 3. Internal alkynes

R-C≡C-R

### 4. Bond strength

triple > double > single
      `
    },
    {
      id: 'alkyn1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Alkynes?',
            options: [
              'R-C≡C-R',
              'triple > double > single',
              'H-C≡C-R',
              'C≡C triple bond (sp hybridized, linear)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Alkynes: C≡C triple bond (sp hybridized, linear). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Internal alkynes:',
            options: [
              'triple > double > single',
              'H-C≡C-R',
              'C≡C triple bond (sp hybridized, linear)',
              'R-C≡C-R'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Internal alkynes: R-C≡C-R. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alkyn1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Alkynes**: C≡C triple bond (sp hybridized, linear)
- **Terminal alkynes**: H-C≡C-R
- **Internal alkynes**: R-C≡C-R
- **Bond strength**: triple > double > single
      `
    },
    {
      id: 'alkyn1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alkyne structure & properties?',
            options: [
              'triple > double > single',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Bond strength: triple > double > single'
          }
        ]
      }
    },
    {
      id: 'alkyn1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Alkynes',
            options: ['C≡C triple bond (sp hybridized, linear)', 'R-C≡C-R', 'triple > double > single', 'H-C≡C-R']
          },
          {
            label: 'Terminal alkynes',
            options: ['H-C≡C-R', 'C≡C triple bond (sp hybridized, linear)', 'triple > double > single', 'R-C≡C-R']
          },
          {
            label: 'Internal alkynes',
            options: ['H-C≡C-R', 'R-C≡C-R', 'C≡C triple bond (sp hybridized, linear)', 'triple > double > single']
          }
        ],
        correctAnswers: ['C≡C triple bond (sp hybridized, linear)', 'H-C≡C-R', 'R-C≡C-R'],
        hint1: 'Think about what each concept specifically describes in ️ Alkynes Synthesis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Alkynes Synthesis describes a specific idea. Alkynes: C≡C triple bond (sp hybridized, linear). Terminal alkynes: H-C≡C-R. Internal alkynes: R-C≡C-R.'
      }
    }
  ]
}
