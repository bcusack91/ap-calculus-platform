export const bioCellStructurePart2Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cell2-intro-p2',
      type: 'text' as const,
      content: `
# ## Membrane-Bound Organelles

**Part 2 of 7 — Membrane-Bound Organelles**

1. Nucleus: contains DNA, double membrane
2. Endoplasmic reticulum: rough (ribosomes) and smooth
3. Golgi apparatus: modifies, sorts, ships proteins
4. Lysosomes: digestive enzymes, pH ~5
      `
    },
    {
      id: 'cell2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes nucleus?',
            options: [
              'contains DNA, double membrane',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Nucleus: contains DNA, double membrane'
          },
          {
            question: 'In the context of membrane-bound organelles, which statement is accurate?',
            options: [
              'Golgi apparatus: modifies, sorts, ships proteins',
              'enarbmem elbuod ,AND sniatnoc :suelcuN',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Golgi apparatus: modifies, sorts, ships proteins'
          }
        ]
      }
    },
    {
      id: 'cell2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Nucleus**: contains DNA, double membrane
- **Endoplasmic reticulum**: rough (ribosomes) and smooth
- **Golgi apparatus**: modifies, sorts, ships proteins
- **Lysosomes**: digestive enzymes, pH ~5
      `
    },
    {
      id: 'cell2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to membrane-bound organelles?',
            options: [
              'Lysosomes: digestive enzymes, pH ~5',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Lysosomes: digestive enzymes, pH ~5'
          }
        ]
      }
    },
    {
      id: 'cell2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nucleus is important in membrane-bound organelles because',
            options: ['contains DNA, double membrane', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Endoplasmic reticulum is important in membrane-bound organelles because',
            options: ['rough (ribosomes) and smooth', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Golgi apparatus is important in membrane-bound organelles because',
            options: ['modifies, sorts, ships proteins', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['contains DNA, double membrane', 'rough (ribosomes) and smooth', 'modifies, sorts, ships proteins'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Membrane-Bound Organelles.'
      }
    }
  ]
}
