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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of diels-alder reaction?',
            options: [
              'Diels-Alder',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Diels-Alder: diene + dienophile → cyclohexene (pericyclic)'
          },
          {
            question: 'In the context of diels-alder reaction, which is accurate?',
            options: [
              'Diene must be in s-cis conformation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Diene must be in s-cis conformation'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diels-Alder',
            options: ['diene + dienophile → cyclohexene (pericyclic)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Concerted, one-step, stereospecific',
            options: ['Concerted, one-step, stereospecific', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Diene must be in s-cis conformation',
            options: ['Diene must be in s-cis conformation', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['diene + dienophile → cyclohexene (pericyclic)', 'Concerted, one-step, stereospecific', 'Diene must be in s-cis conformation'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Diels-Alder Reaction.'
      }
    }
  ]
}
