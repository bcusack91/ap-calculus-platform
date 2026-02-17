export const oChemAlkenesPart1Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'alken1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Alkenes Reactions

**Part 1 of 7 — Alkene Structure & Stability**

### 1. Alkenes

C=C double bond (sp² hybridized)

### 2. Degree of unsaturation

one for each C=C or ring

### 3. Stability

more substituted = more stable

### 4. E/Z isomerism

priority-based naming of alkene geometry
      `
    },
    {
      id: 'alken1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Alkenes?',
            options: [
              'C=C double bond (sp² hybridized)',
              'one for each C=C or ring',
              'priority-based naming of alkene geometry',
              'more substituted = more stable'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Alkenes: C=C double bond (sp² hybridized). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Stability:',
            options: [
              'one for each C=C or ring',
              'more substituted = more stable',
              'priority-based naming of alkene geometry',
              'C=C double bond (sp² hybridized)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Stability: more substituted = more stable. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alken1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Alkenes**: C=C double bond (sp² hybridized)
- **Degree of unsaturation**: one for each C=C or ring
- **Stability**: more substituted = more stable
- **E/Z isomerism**: priority-based naming of alkene geometry
      `
    },
    {
      id: 'alken1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alkene structure & stability?',
            options: [
              'priority-based naming of alkene geometry',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'E/Z isomerism: priority-based naming of alkene geometry'
          }
        ]
      }
    },
    {
      id: 'alken1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Alkenes',
            options: ['more substituted = more stable', 'one for each C=C or ring', 'C=C double bond (sp² hybridized)', 'priority-based naming of alkene geometry']
          },
          {
            label: 'Degree of unsaturation',
            options: ['more substituted = more stable', 'one for each C=C or ring', 'C=C double bond (sp² hybridized)', 'priority-based naming of alkene geometry']
          },
          {
            label: 'Stability',
            options: ['more substituted = more stable', 'C=C double bond (sp² hybridized)', 'priority-based naming of alkene geometry', 'one for each C=C or ring']
          }
        ],
        correctAnswers: ['C=C double bond (sp² hybridized)', 'one for each C=C or ring', 'more substituted = more stable'],
        hint1: 'Think about what each concept specifically describes in ️ Alkenes Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Alkenes Reactions describes a specific idea. Alkenes: C=C double bond (sp² hybridized). Degree of unsaturation: one for each C=C or ring. Stability: more substituted = more stable.'
      }
    }
  ]
}
