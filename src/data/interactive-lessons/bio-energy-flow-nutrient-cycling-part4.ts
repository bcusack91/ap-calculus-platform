export const bioEnergyFlowPart4Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener4-intro-p4',
      type: 'text' as const,
      content: `
# ## Biogeochemical Cycles

**Part 4 of 7 — Biogeochemical Cycles**

1. Carbon cycle: photosynthesis, respiration, combustion, decomposition
2. Nitrogen cycle: fixation, nitrification, denitrification
3. Water cycle: evaporation, transpiration, precipitation
4. Phosphorus cycle: weathering of rocks, no atmospheric phase
      `
    },
    {
      id: 'ener4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes carbon cycle?',
            options: [
              'photosynthesis, respiration, combustion, decomposition',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Carbon cycle: photosynthesis, respiration, combustion, decomposition'
          },
          {
            question: 'In the context of biogeochemical cycles, which statement is accurate?',
            options: [
              'Water cycle: evaporation, transpiration, precipitation',
              'noitisopmoced ,noitsubmoc ,noitaripser ,sisehtnysotohp :elcyc nobraC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Water cycle: evaporation, transpiration, precipitation'
          }
        ]
      }
    },
    {
      id: 'ener4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Carbon cycle**: photosynthesis, respiration, combustion, decomposition
- **Nitrogen cycle**: fixation, nitrification, denitrification
- **Water cycle**: evaporation, transpiration, precipitation
- **Phosphorus cycle**: weathering of rocks, no atmospheric phase
      `
    },
    {
      id: 'ener4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to biogeochemical cycles?',
            options: [
              'Phosphorus cycle: weathering of rocks, no atmospheric phase',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Phosphorus cycle: weathering of rocks, no atmospheric phase'
          }
        ]
      }
    },
    {
      id: 'ener4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Carbon cycle is important in biogeochemical cycles because',
            options: ['photosynthesis, respiration, combustion, decomposi', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Nitrogen cycle is important in biogeochemical cycles because',
            options: ['fixation, nitrification, denitrification', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Water cycle is important in biogeochemical cycles because',
            options: ['evaporation, transpiration, precipitation', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['photosynthesis, respiration, combustion, decomposi', 'fixation, nitrification, denitrification', 'evaporation, transpiration, precipitation'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Biogeochemical Cycles.'
      }
    }
  ]
}
