export const bioEnergyFlowPart1Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener1-intro-p1',
      type: 'text' as const,
      content: `
# ## Food Chains & Webs

**Part 1 of 7 — Food Chains & Webs**

1. Food chain: linear path of energy transfer
2. Food web: interconnected food chains
3. Energy flows one direction (producers → consumers)
4. Matter cycles (recycled through ecosystem)
      `
    },
    {
      id: 'ener1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes food chain?',
            options: [
              'linear path of energy transfer',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Food chain: linear path of energy transfer'
          },
          {
            question: 'In the context of food chains & webs, which statement is accurate?',
            options: [
              'Energy flows one direction (producers → consumers)',
              'refsnart ygrene fo htap raenil :niahc dooF',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Energy flows one direction (producers → consumers)'
          }
        ]
      }
    },
    {
      id: 'ener1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Food chain**: linear path of energy transfer
- **Food web**: interconnected food chains
- **Energy flows one direction (producers → consumers)**
- **Matter cycles (recycled through ecosystem)**
      `
    },
    {
      id: 'ener1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to food chains & webs?',
            options: [
              'Matter cycles (recycled through ecosystem)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Matter cycles (recycled through ecosystem)'
          }
        ]
      }
    },
    {
      id: 'ener1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Food chain is important in food chains & webs because',
            options: ['linear path of energy transfer', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Food web is important in food chains & webs because',
            options: ['interconnected food chains', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Energy flows one direction (producers → consumers) is important in food chains & webs because',
            options: ['Energy flows one direction (producers → consumers)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['linear path of energy transfer', 'interconnected food chains', 'Energy flows one direction (producers → consumers)'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Food Chains & Webs.'
      }
    }
  ]
}
