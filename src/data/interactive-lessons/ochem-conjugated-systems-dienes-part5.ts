export const oChemConjugatedPart5Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'conju5-intro',
      type: 'text' as const,
      content: `
# UV-Vis Spectroscopy

**Part 5 of 7 — UV-Vis Spectroscopy**

### 1. UV-Vis spectroscopy

measures π → π* transitions

### 2. λmax increases with more conjugation

λmax increases with more conjugation

### 3. Colored compounds absorb visible light

Colored compounds absorb visible light

### 4. Used to determine extent of conjugation

Used to determine extent of conjugation
      `
    },
    {
      id: 'conju5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains UV-Vis spectroscopy?',
            options: [
              'Colored compounds absorb visible light',
              'measures π → π* transitions',
              'λmax increases with more conjugation',
              'Used to determine extent of conjugation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — UV-Vis spectroscopy: measures π → π* transitions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Colored compounds absorb visible light?',
            options: [
              'measures π → π* transitions',
              'Used to determine extent of conjugation',
              'λmax increases with more conjugation',
              'Colored compounds absorb visible light'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Colored compounds absorb visible light. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'conju5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **UV-Vis spectroscopy**: measures π → π* transitions
- **λmax increases with more conjugation**
- **Colored compounds absorb visible light**
- **Used to determine extent of conjugation**
      `
    },
    {
      id: 'conju5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to uv-vis spectroscopy?',
            options: [
              'Used to determine extent of conjugation',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Used to determine extent of conjugation'
          }
        ]
      }
    },
    {
      id: 'conju5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'UV-Vis spectroscopy',
            options: ['measures π → π* transitions', 'λmax increases with more conjugation', 'Colored compounds absorb visible light', 'Used to determine extent of conjugation']
          },
          {
            label: 'λmax increases with more conjugation',
            options: ['Used to determine extent of conjugation', 'Colored compounds absorb visible light', 'λmax increases with more conjugation', 'measures π → π* transitions']
          },
          {
            label: 'Colored compounds absorb visible light',
            options: ['λmax increases with more conjugation', 'Used to determine extent of conjugation', 'measures π → π* transitions', 'Colored compounds absorb visible light']
          }
        ],
        correctAnswers: ['measures π → π* transitions', 'λmax increases with more conjugation', 'Colored compounds absorb visible light'],
        hint1: 'Think about what each concept specifically describes in UV-Vis Spectroscopy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in UV-Vis Spectroscopy describes a specific idea. UV-Vis spectroscopy: measures π → π* transitions. λmax increases with more conjugation. Colored compounds absorb visible light.'
      }
    }
  ]
}
