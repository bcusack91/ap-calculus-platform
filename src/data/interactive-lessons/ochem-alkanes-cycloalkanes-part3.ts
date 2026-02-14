export const oChemAlkanesPart3Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan3-intro',
      type: 'text' as const,
      content: `
# Cycloalkane Conformations

**Part 3 of 7 — Cycloalkane Conformations**

### 1. Cyclohexane

chair conformation is most stable

### 2. Axial and equatorial positions

Axial and equatorial positions

### 3. Ring flip

converts axial ↔ equatorial

### 4. Large substituents prefer equatorial position (less 1,3-diaxial strain)

Large substituents prefer equatorial position (less 1,3-diaxial strain)
      `
    },
    {
      id: 'alkan3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of cycloalkane conformations?',
            options: [
              'Cyclohexane',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Cyclohexane: chair conformation is most stable'
          },
          {
            question: 'In the context of cycloalkane conformations, which is accurate?',
            options: [
              'converts axial ↔ equatorial',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Ring flip: converts axial ↔ equatorial'
          }
        ]
      }
    },
    {
      id: 'alkan3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Cyclohexane**: chair conformation is most stable
- **Axial and equatorial positions**
- **Ring flip**: converts axial ↔ equatorial
- **Large substituents prefer equatorial position (less 1,3-diaxial strain)**
      `
    },
    {
      id: 'alkan3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to cycloalkane conformations?',
            options: [
              'Large substituents prefer equatorial position (less 1,3-diaxial strain)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Large substituents prefer equatorial position (less 1,3-diaxial strain)'
          }
        ]
      }
    },
    {
      id: 'alkan3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cyclohexane',
            options: ['chair conformation is most stable', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Axial and equatorial positions',
            options: ['Axial and equatorial positions', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Ring flip',
            options: ['converts axial ↔ equatorial', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['chair conformation is most stable', 'Axial and equatorial positions', 'converts axial ↔ equatorial'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Cycloalkane Conformations.'
      }
    }
  ]
}
