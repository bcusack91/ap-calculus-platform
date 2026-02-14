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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of uv-vis spectroscopy?',
            options: [
              'UV-Vis spectroscopy',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'UV-Vis spectroscopy: measures π → π* transitions'
          },
          {
            question: 'In the context of uv-vis spectroscopy, which is accurate?',
            options: [
              'Colored compounds absorb visible light',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Colored compounds absorb visible light'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'UV-Vis spectroscopy',
            options: ['measures π → π* transitions', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'λmax increases with more conjugation',
            options: ['λmax increases with more conjugation', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Colored compounds absorb visible light',
            options: ['Colored compounds absorb visible light', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['measures π → π* transitions', 'λmax increases with more conjugation', 'Colored compounds absorb visible light'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding UV-Vis Spectroscopy.'
      }
    }
  ]
}
