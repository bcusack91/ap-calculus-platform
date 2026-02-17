export const oChemConjugatedPart3Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'conju3-intro',
      type: 'text' as const,
      content: `
# Diels-Alder Reaction

**Part 3 of 7 — Diels-Alder Reaction**

### 1. Diels-Alder

diene + dienophile → cyclohexene (pericyclic)

### 2. Concerted, one-step, stereospecific

Concerted, one-step, stereospecific

### 3. Diene must be in s-cis conformation

Diene must be in s-cis conformation

### 4. Electron-rich diene + electron-poor dienophile → fastest reaction

Electron-rich diene + electron-poor dienophile → fastest reaction
      `
    },
    {
      id: 'conju3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Diels-Alder?',
            options: [
              'Electron-rich diene + electron-poor dienophile → fastest reaction',
              'Diene must be in s-cis conformation',
              'diene + dienophile → cyclohexene (pericyclic)',
              'Concerted, one-step, stereospecific'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Diels-Alder: diene + dienophile → cyclohexene (pericyclic). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Diels-Alder Reaction, which explains Diene must be in s-cis conformation?',
            options: [
              'Concerted, one-step, stereospecific',
              'Diene must be in s-cis conformation',
              'Electron-rich diene + electron-poor dienophile → fastest reaction',
              'diene + dienophile → cyclohexene (pericyclic)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Diene must be in s-cis conformation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'conju3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Diels-Alder**: diene + dienophile → cyclohexene (pericyclic)
- **Concerted, one-step, stereospecific**
- **Diene must be in s-cis conformation**
- **Electron-rich diene + electron-poor dienophile → fastest reaction**
      `
    },
    {
      id: 'conju3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to diels-alder reaction?',
            options: [
              'Electron-rich diene + electron-poor dienophile → fastest reaction',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Electron-rich diene + electron-poor dienophile → fastest reaction'
          }
        ]
      }
    },
    {
      id: 'conju3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diels-Alder',
            options: ['Diene must be in s-cis conformation', 'Concerted, one-step, stereospecific', 'diene + dienophile → cyclohexene (pericyclic)', 'Electron-rich diene + electron-poor dienophile → fastest reaction']
          },
          {
            label: 'Concerted, one-step, stereospecific',
            options: ['Diene must be in s-cis conformation', 'Concerted, one-step, stereospecific', 'Electron-rich diene + electron-poor dienophile → fastest reaction', 'diene + dienophile → cyclohexene (pericyclic)']
          },
          {
            label: 'Diene must be in s-cis conformation',
            options: ['Diene must be in s-cis conformation', 'diene + dienophile → cyclohexene (pericyclic)', 'Electron-rich diene + electron-poor dienophile → fastest reaction', 'Concerted, one-step, stereospecific']
          }
        ],
        correctAnswers: ['diene + dienophile → cyclohexene (pericyclic)', 'Concerted, one-step, stereospecific', 'Diene must be in s-cis conformation'],
        hint1: 'Think about what each concept specifically describes in Diels-Alder Reaction.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Diels-Alder Reaction describes a specific idea. Diels-Alder: diene + dienophile → cyclohexene (pericyclic). Concerted, one-step, stereospecific. Diene must be in s-cis conformation.'
      }
    }
  ]
}
