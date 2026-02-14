export const bioCellStructurePart4Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
# ## Energy Organelles

**Part 4 of 7 — Energy Organelles**

1. Mitochondria: cellular respiration, double membrane
2. Chloroplasts: photosynthesis, thylakoids + stroma
3. Endosymbiotic theory: evolved from bacteria
4. Both have their own DNA and ribosomes
      `
    },
    {
      id: 'cell4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes mitochondria?',
            options: [
              'cellular respiration, double membrane',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Mitochondria: cellular respiration, double membrane'
          },
          {
            question: 'In the context of energy organelles, which statement is accurate?',
            options: [
              'Endosymbiotic theory: evolved from bacteria',
              'enarbmem elbuod ,noitaripser ralullec :airdnohcotiM',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Endosymbiotic theory: evolved from bacteria'
          }
        ]
      }
    },
    {
      id: 'cell4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Mitochondria**: cellular respiration, double membrane
- **Chloroplasts**: photosynthesis, thylakoids + stroma
- **Endosymbiotic theory**: evolved from bacteria
- **Both have their own DNA and ribosomes**
      `
    },
    {
      id: 'cell4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to energy organelles?',
            options: [
              'Both have their own DNA and ribosomes',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Both have their own DNA and ribosomes'
          }
        ]
      }
    },
    {
      id: 'cell4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mitochondria is important in energy organelles because',
            options: ['cellular respiration, double membrane', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Chloroplasts is important in energy organelles because',
            options: ['photosynthesis, thylakoids + stroma', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Endosymbiotic theory is important in energy organelles because',
            options: ['evolved from bacteria', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['cellular respiration, double membrane', 'photosynthesis, thylakoids + stroma', 'evolved from bacteria'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Energy Organelles.'
      }
    }
  ]
}
