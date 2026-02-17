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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Carbon cycle" refer to in biology?',
            options: [
              'fixation, nitrification, denitrification',
              'photosynthesis, respiration, combustion, decomposition',
              'evaporation, transpiration, precipitation',
              'weathering of rocks, no atmospheric phase'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Carbon cycle: photosynthesis, respiration, combustion, decomposition. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Biogeochemical Cycles, which explains Water cycle?',
            options: [
              'weathering of rocks, no atmospheric phase',
              'photosynthesis, respiration, combustion, decomposition',
              'evaporation, transpiration, precipitation',
              'fixation, nitrification, denitrification'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Water cycle: evaporation, transpiration, precipitation. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Biogeochemical Cycles, which correctly describes Phosphorus cycle?',
            options: [
              'photosynthesis, respiration, combustion, decomposition',
              'weathering of rocks, no atmospheric phase',
              'evaporation, transpiration, precipitation',
              'fixation, nitrification, denitrification'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Phosphorus cycle: weathering of rocks, no atmospheric phase. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ener4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Carbon cycle',
            options: ['fixation, nitrification, denitrification', 'weathering of rocks, no atmospheric phase', 'evaporation, transpiration, precipitation', 'photosynthesis, respiration, combustion, decomposition']
          },
          {
            label: 'Nitrogen cycle',
            options: ['weathering of rocks, no atmospheric phase', 'evaporation, transpiration, precipitation', 'photosynthesis, respiration, combustion, decomposition', 'fixation, nitrification, denitrification']
          },
          {
            label: 'Water cycle',
            options: ['photosynthesis, respiration, combustion, decomposition', 'fixation, nitrification, denitrification', 'weathering of rocks, no atmospheric phase', 'evaporation, transpiration, precipitation']
          }
        ],
        correctAnswers: ['photosynthesis, respiration, combustion, decomposition', 'fixation, nitrification, denitrification', 'evaporation, transpiration, precipitation'],
        hint1: 'Think about what each concept specifically describes in Biogeochemical Cycles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Biogeochemical Cycles describes a specific idea. Carbon cycle: photosynthesis, respiration, combustion, decomposition. Nitrogen cycle: fixation, nitrification, denitrification. Water cycle: evaporation, transpiration, precipitation.'
      }
    }
  ]
}
