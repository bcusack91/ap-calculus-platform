export const bioEcologyPart2Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol2-intro-p2',
      type: 'text' as const,
      content: `
# ## Biomes & Biosphere

**Part 2 of 7 — Biomes & Biosphere**

1. Terrestrial biomes: tropical rainforest, desert, tundra, etc.
2. Aquatic biomes: freshwater and marine
3. Biomes determined by temperature and precipitation
4. Climate vs weather
      `
    },
    {
      id: 'ecol2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes terrestrial biomes?',
            options: [
              'tropical rainforest, desert, tundra, etc.',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Terrestrial biomes: tropical rainforest, desert, tundra, etc.'
          },
          {
            question: 'In the context of biomes & biosphere, which statement is accurate?',
            options: [
              'Biomes determined by temperature and precipitation',
              '.cte ,ardnut ,tresed ,tserofniar laciport :semoib lairtserreT',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Biomes determined by temperature and precipitation'
          }
        ]
      }
    },
    {
      id: 'ecol2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Terrestrial biomes**: tropical rainforest, desert, tundra, etc.
- **Aquatic biomes**: freshwater and marine
- **Biomes determined by temperature and precipitation**
- **Climate vs weather**
      `
    },
    {
      id: 'ecol2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to biomes & biosphere?',
            options: [
              'Climate vs weather',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Climate vs weather'
          }
        ]
      }
    },
    {
      id: 'ecol2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Terrestrial biomes is important in biomes & biosphere because',
            options: ['tropical rainforest, desert, tundra, etc.', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Aquatic biomes is important in biomes & biosphere because',
            options: ['freshwater and marine', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Biomes determined by temperature and precipitation is important in biomes & biosphere because',
            options: ['Biomes determined by temperature and precipitation', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['tropical rainforest, desert, tundra, etc.', 'freshwater and marine', 'Biomes determined by temperature and precipitation'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Biomes & Biosphere.'
      }
    }
  ]
}
