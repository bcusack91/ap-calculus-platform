export const bioEnergyFlowPart5Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener5-intro-p5',
      type: 'text' as const,
      content: `
# ## Human Impact on Cycles

**Part 5 of 7 — Human Impact on Cycles**

1. Burning fossil fuels increases atmospheric CO₂
2. Fertilizer runoff causes eutrophication
3. Deforestation reduces carbon fixation
4. Climate change disrupts all biogeochemical cycles
      `
    },
    {
      id: 'ener5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes burning fossil fuels increases atmospheric co₂?',
            options: [
              'Burning fossil fuels increases atmospheric CO₂',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Burning fossil fuels increases atmospheric CO₂'
          },
          {
            question: 'In the context of human impact on cycles, which statement is accurate?',
            options: [
              'Deforestation reduces carbon fixation',
              '₂OC cirehpsomta sesaercni sleuf lissof gninruB',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Deforestation reduces carbon fixation'
          }
        ]
      }
    },
    {
      id: 'ener5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Burning fossil fuels increases atmospheric CO₂**
- **Fertilizer runoff causes eutrophication**
- **Deforestation reduces carbon fixation**
- **Climate change disrupts all biogeochemical cycles**
      `
    },
    {
      id: 'ener5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to human impact on cycles?',
            options: [
              'Climate change disrupts all biogeochemical cycles',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Climate change disrupts all biogeochemical cycles'
          }
        ]
      }
    },
    {
      id: 'ener5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Burning fossil fuels increases atmospheric CO₂ is important in human impact on cycles because',
            options: ['Burning fossil fuels increases atmospheric CO₂', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Fertilizer runoff causes eutrophication is important in human impact on cycles because',
            options: ['Fertilizer runoff causes eutrophication', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Deforestation reduces carbon fixation is important in human impact on cycles because',
            options: ['Deforestation reduces carbon fixation', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Burning fossil fuels increases atmospheric CO₂', 'Fertilizer runoff causes eutrophication', 'Deforestation reduces carbon fixation'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Human Impact on Cycles.'
      }
    }
  ]
}
