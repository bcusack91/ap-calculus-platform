export const bioPhotosynthesisPart7Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot7-intro-p7',
      type: 'text' as const,
      content: `
# ## Photosynthesis: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Connection between light reactions and Calvin cycle
2. Energy transformations: light → chemical → ATP
3. Environmental factors affecting photosynthesis rate
4. Comparing C3, C4, and CAM strategies
      `
    },
    {
      id: 'phot7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes connection between light reactions and calvin cycle?',
            options: [
              'Connection between light reactions and Calvin cycle',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Connection between light reactions and Calvin cycle'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Environmental factors affecting photosynthesis rate',
              'elcyc nivlaC dna snoitcaer thgil neewteb noitcennoC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Environmental factors affecting photosynthesis rate'
          }
        ]
      }
    },
    {
      id: 'phot7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Connection between light reactions and Calvin cycle**
- **Energy transformations**: light → chemical → ATP
- **Environmental factors affecting photosynthesis rate**
- **Comparing C3, C4, and CAM strategies**
      `
    },
    {
      id: 'phot7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'Comparing C3, C4, and CAM strategies',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Comparing C3, C4, and CAM strategies'
          }
        ]
      }
    },
    {
      id: 'phot7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Connection between light reactions and Calvin cycle is important in synthesis & ap review because',
            options: ['Connection between light reactions and Calvin cycl', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Energy transformations is important in synthesis & ap review because',
            options: ['light → chemical → ATP', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Environmental factors affecting photosynthesis rate is important in synthesis & ap review because',
            options: ['Environmental factors affecting photosynthesis rat', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Connection between light reactions and Calvin cycl', 'light → chemical → ATP', 'Environmental factors affecting photosynthesis rat'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
