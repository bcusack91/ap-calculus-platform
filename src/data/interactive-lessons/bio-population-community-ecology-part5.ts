export const bioPopulationPart5Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu5-intro-p5',
      type: 'text' as const,
      content: `
# ## Ecological Succession

**Part 5 of 7 — Ecological Succession**

1. Primary succession: starts on bare rock/new land
2. Secondary succession: starts after disturbance (fire, flood)
3. Pioneer species colonize first (lichens, mosses)
4. Climax community: stable, mature ecosystem
      `
    },
    {
      id: 'popu5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes primary succession?',
            options: [
              'starts on bare rock/new land',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Primary succession: starts on bare rock/new land'
          },
          {
            question: 'In the context of ecological succession, which statement is accurate?',
            options: [
              'Pioneer species colonize first (lichens, mosses)',
              'dnal wen/kcor erab no strats :noisseccus yramirP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Pioneer species colonize first (lichens, mosses)'
          }
        ]
      }
    },
    {
      id: 'popu5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Primary succession**: starts on bare rock/new land
- **Secondary succession**: starts after disturbance (fire, flood)
- **Pioneer species colonize first (lichens, mosses)**
- **Climax community**: stable, mature ecosystem
      `
    },
    {
      id: 'popu5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to ecological succession?',
            options: [
              'Climax community: stable, mature ecosystem',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Climax community: stable, mature ecosystem'
          }
        ]
      }
    },
    {
      id: 'popu5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Primary succession is important in ecological succession because',
            options: ['starts on bare rock/new land', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Secondary succession is important in ecological succession because',
            options: ['starts after disturbance (fire, flood)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Pioneer species colonize first (lichens, mosses) is important in ecological succession because',
            options: ['Pioneer species colonize first (lichens, mosses)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['starts on bare rock/new land', 'starts after disturbance (fire, flood)', 'Pioneer species colonize first (lichens, mosses)'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Ecological Succession.'
      }
    }
  ]
}
