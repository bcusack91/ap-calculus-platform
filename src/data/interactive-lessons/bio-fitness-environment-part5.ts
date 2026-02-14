export const bioFitnessPart5Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn5-intro-p5',
      type: 'text' as const,
      content: `
# ## Environmental Variation

**Part 5 of 7 — Environmental Variation**

1. Spatial variation: different habitats
2. Temporal variation: seasonal changes
3. Predictable vs unpredictable environments
4. Bet-hedging strategies in variable environments
      `
    },
    {
      id: 'fitn5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes spatial variation?',
            options: [
              'different habitats',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Spatial variation: different habitats'
          },
          {
            question: 'In the context of environmental variation, which statement is accurate?',
            options: [
              'Predictable vs unpredictable environments',
              'statibah tnereffid :noitairav laitapS',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Predictable vs unpredictable environments'
          }
        ]
      }
    },
    {
      id: 'fitn5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Spatial variation**: different habitats
- **Temporal variation**: seasonal changes
- **Predictable vs unpredictable environments**
- **Bet-hedging strategies in variable environments**
      `
    },
    {
      id: 'fitn5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to environmental variation?',
            options: [
              'Bet-hedging strategies in variable environments',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Bet-hedging strategies in variable environments'
          }
        ]
      }
    },
    {
      id: 'fitn5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spatial variation is important in environmental variation because',
            options: ['different habitats', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Temporal variation is important in environmental variation because',
            options: ['seasonal changes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predictable vs unpredictable environments is important in environmental variation because',
            options: ['Predictable vs unpredictable environments', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['different habitats', 'seasonal changes', 'Predictable vs unpredictable environments'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Environmental Variation.'
      }
    }
  ]
}
