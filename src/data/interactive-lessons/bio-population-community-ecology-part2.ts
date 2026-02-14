export const bioPopulationPart2Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu2-intro-p2',
      type: 'text' as const,
      content: `
# ## Carrying Capacity

**Part 2 of 7 — Carrying Capacity**

1. K = maximum population size the environment can sustain
2. Density-dependent factors: competition, predation, disease
3. Density-independent factors: natural disasters, climate
4. Population oscillates around K
      `
    },
    {
      id: 'popu2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes k = maximum population size the environment can sustain?',
            options: [
              'K = maximum population size the environment can sustain',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'K = maximum population size the environment can sustain'
          },
          {
            question: 'In the context of carrying capacity, which statement is accurate?',
            options: [
              'Density-independent factors: natural disasters, climate',
              'niatsus nac tnemnorivne eht ezis noitalupop mumixam = K',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Density-independent factors: natural disasters, climate'
          }
        ]
      }
    },
    {
      id: 'popu2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **K = maximum population size the environment can sustain**
- **Density-dependent factors**: competition, predation, disease
- **Density-independent factors**: natural disasters, climate
- **Population oscillates around K**
      `
    },
    {
      id: 'popu2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to carrying capacity?',
            options: [
              'Population oscillates around K',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Population oscillates around K'
          }
        ]
      }
    },
    {
      id: 'popu2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'K = maximum population size the environment can sustain is important in carrying capacity because',
            options: ['K = maximum population size the environment can su', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Density-dependent factors is important in carrying capacity because',
            options: ['competition, predation, disease', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Density-independent factors is important in carrying capacity because',
            options: ['natural disasters, climate', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['K = maximum population size the environment can su', 'competition, predation, disease', 'natural disasters, climate'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Carrying Capacity.'
      }
    }
  ]
}
