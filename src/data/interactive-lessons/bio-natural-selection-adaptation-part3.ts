export const bioNatSelectionPart3Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu3-intro-p3',
      type: 'text' as const,
      content: `
# ## Types of Selection

**Part 3 of 7 — Types of Selection**

1. Directional: favors one extreme phenotype
2. Stabilizing: favors intermediate phenotype
3. Disruptive: favors both extremes
4. Sexual selection: traits that increase mating success
      `
    },
    {
      id: 'natu3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes directional?',
            options: [
              'favors one extreme phenotype',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Directional: favors one extreme phenotype'
          },
          {
            question: 'In the context of types of selection, which statement is accurate?',
            options: [
              'Disruptive: favors both extremes',
              'epytonehp emertxe eno srovaf :lanoitceriD',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Disruptive: favors both extremes'
          }
        ]
      }
    },
    {
      id: 'natu3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Directional**: favors one extreme phenotype
- **Stabilizing**: favors intermediate phenotype
- **Disruptive**: favors both extremes
- **Sexual selection**: traits that increase mating success
      `
    },
    {
      id: 'natu3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to types of selection?',
            options: [
              'Sexual selection: traits that increase mating success',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Sexual selection: traits that increase mating success'
          }
        ]
      }
    },
    {
      id: 'natu3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Directional is important in types of selection because',
            options: ['favors one extreme phenotype', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Stabilizing is important in types of selection because',
            options: ['favors intermediate phenotype', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Disruptive is important in types of selection because',
            options: ['favors both extremes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['favors one extreme phenotype', 'favors intermediate phenotype', 'favors both extremes'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Types of Selection.'
      }
    }
  ]
}
