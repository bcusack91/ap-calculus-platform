export const bioEnergyFlowPart3Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener3-intro-p3',
      type: 'text' as const,
      content: `
# ## Ecological Pyramids

**Part 3 of 7 — Ecological Pyramids**

1. Pyramid of energy: always upright (10% rule)
2. Only ~10% of energy transfers between trophic levels
3. 90% lost as heat through cellular respiration
4. Pyramid of biomass: usually upright (exception: open ocean)
      `
    },
    {
      id: 'ener3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes pyramid of energy?',
            options: [
              'always upright (10% rule)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Pyramid of energy: always upright (10% rule)'
          },
          {
            question: 'In the context of ecological pyramids, which statement is accurate?',
            options: [
              '90% lost as heat through cellular respiration',
              ')elur %01( thgirpu syawla :ygrene fo dimaryP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: '90% lost as heat through cellular respiration'
          }
        ]
      }
    },
    {
      id: 'ener3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Pyramid of energy**: always upright (10% rule)
- **Only ~10% of energy transfers between trophic levels**
- **90% lost as heat through cellular respiration**
- **Pyramid of biomass**: usually upright (exception: open ocean)
      `
    },
    {
      id: 'ener3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to ecological pyramids?',
            options: [
              'Pyramid of biomass: usually upright (exception: open ocean)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Pyramid of biomass: usually upright (exception: open ocean)'
          }
        ]
      }
    },
    {
      id: 'ener3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Pyramid of energy is important in ecological pyramids because',
            options: ['always upright (10% rule)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Only ~10% of energy transfers between trophic levels is important in ecological pyramids because',
            options: ['Only ~10% of energy transfers between trophic leve', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: '90% lost as heat through cellular respiration is important in ecological pyramids because',
            options: ['90% lost as heat through cellular respiration', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['always upright (10% rule)', 'Only ~10% of energy transfers between trophic leve', '90% lost as heat through cellular respiration'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Ecological Pyramids.'
      }
    }
  ]
}
