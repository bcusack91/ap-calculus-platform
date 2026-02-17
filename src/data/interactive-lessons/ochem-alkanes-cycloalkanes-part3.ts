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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Cyclohexane?',
            options: [
              'converts axial ↔ equatorial',
              'Large substituents prefer equatorial position (less 1,3-diaxial strain)',
              'chair conformation is most stable',
              'Axial and equatorial positions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Cyclohexane: chair conformation is most stable. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Ring flip?',
            options: [
              'Axial and equatorial positions',
              'chair conformation is most stable',
              'Large substituents prefer equatorial position (less 1,3-diaxial strain)',
              'converts axial ↔ equatorial'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Ring flip: converts axial ↔ equatorial. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cyclohexane',
            options: ['converts axial ↔ equatorial', 'Axial and equatorial positions', 'chair conformation is most stable', 'Large substituents prefer equatorial position (less 1,3-diaxial strain)']
          },
          {
            label: 'Ring flip',
            options: ['Large substituents prefer equatorial position (less 1,3-diaxial strain)', 'Axial and equatorial positions', 'converts axial ↔ equatorial', 'chair conformation is most stable']
          }
        ],
        correctAnswers: ['chair conformation is most stable', 'converts axial ↔ equatorial'],
        hint1: 'Think about what each concept specifically describes in Cycloalkane Conformations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cycloalkane Conformations describes a specific idea. Cyclohexane: chair conformation is most stable. Ring flip: converts axial ↔ equatorial.'
      }
    }
  ]
}
