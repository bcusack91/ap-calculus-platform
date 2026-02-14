export const bioEcologyPart4Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol4-intro-p4',
      type: 'text' as const,
      content: `
# ## Abiotic & Biotic Factors

**Part 4 of 7 — Abiotic & Biotic Factors**

1. Temperature, water, sunlight, soil, nutrients (abiotic)
2. Competition, predation, symbiosis (biotic)
3. Limiting factors constrain population growth
4. Tolerance range for each environmental factor
      `
    },
    {
      id: 'ecol4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes temperature, water, sunlight, soil, nutrients (abiotic)?',
            options: [
              'Temperature, water, sunlight, soil, nutrients (abiotic)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Temperature, water, sunlight, soil, nutrients (abiotic)'
          },
          {
            question: 'In the context of abiotic & biotic factors, which statement is accurate?',
            options: [
              'Limiting factors constrain population growth',
              ')citoiba( stneirtun ,lios ,thgilnus ,retaw ,erutarepmeT',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Limiting factors constrain population growth'
          }
        ]
      }
    },
    {
      id: 'ecol4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Temperature, water, sunlight, soil, nutrients (abiotic)**
- **Competition, predation, symbiosis (biotic)**
- **Limiting factors constrain population growth**
- **Tolerance range for each environmental factor**
      `
    },
    {
      id: 'ecol4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to abiotic & biotic factors?',
            options: [
              'Tolerance range for each environmental factor',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Tolerance range for each environmental factor'
          }
        ]
      }
    },
    {
      id: 'ecol4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Temperature, water, sunlight, soil, nutrients (abiotic) is important in abiotic & biotic factors because',
            options: ['Temperature, water, sunlight, soil, nutrients (abi', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Competition, predation, symbiosis (biotic) is important in abiotic & biotic factors because',
            options: ['Competition, predation, symbiosis (biotic)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Limiting factors constrain population growth is important in abiotic & biotic factors because',
            options: ['Limiting factors constrain population growth', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Temperature, water, sunlight, soil, nutrients (abi', 'Competition, predation, symbiosis (biotic)', 'Limiting factors constrain population growth'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Abiotic & Biotic Factors.'
      }
    }
  ]
}
