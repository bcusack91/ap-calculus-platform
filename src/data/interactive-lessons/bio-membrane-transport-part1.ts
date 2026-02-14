export const bioMembraneTransportPart1Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb1-intro-p1',
      type: 'text' as const,
      content: `
# ## Membrane Structure

**Part 1 of 7 — Membrane Structure**

1. Fluid mosaic model
2. Phospholipid bilayer: hydrophilic heads, hydrophobic tails
3. Membrane proteins: integral and peripheral
4. Cholesterol: maintains fluidity
      `
    },
    {
      id: 'memb1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes fluid mosaic model?',
            options: [
              'Fluid mosaic model',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Fluid mosaic model'
          },
          {
            question: 'In the context of membrane structure, which statement is accurate?',
            options: [
              'Membrane proteins: integral and peripheral',
              'ledom ciasom diulF',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Membrane proteins: integral and peripheral'
          }
        ]
      }
    },
    {
      id: 'memb1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Fluid mosaic model**
- **Phospholipid bilayer**: hydrophilic heads, hydrophobic tails
- **Membrane proteins**: integral and peripheral
- **Cholesterol**: maintains fluidity
      `
    },
    {
      id: 'memb1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to membrane structure?',
            options: [
              'Cholesterol: maintains fluidity',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Cholesterol: maintains fluidity'
          }
        ]
      }
    },
    {
      id: 'memb1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fluid mosaic model is important in membrane structure because',
            options: ['Fluid mosaic model', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Phospholipid bilayer is important in membrane structure because',
            options: ['hydrophilic heads, hydrophobic tails', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Membrane proteins is important in membrane structure because',
            options: ['integral and peripheral', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Fluid mosaic model', 'hydrophilic heads, hydrophobic tails', 'integral and peripheral'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Membrane Structure.'
      }
    }
  ]
}
