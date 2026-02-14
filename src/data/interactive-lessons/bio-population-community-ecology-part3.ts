export const bioPopulationPart3Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu3-intro-p3',
      type: 'text' as const,
      content: `
# ## Life History Strategies

**Part 3 of 7 — Life History Strategies**

1. r-selected: rapid reproduction, small offspring, little parental care
2. K-selected: slow reproduction, large offspring, extensive parental care
3. r-selected examples: insects, bacteria, annual plants
4. K-selected examples: elephants, whales, humans
      `
    },
    {
      id: 'popu3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes r-selected?',
            options: [
              'rapid reproduction, small offspring, little parental care',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'r-selected: rapid reproduction, small offspring, little parental care'
          },
          {
            question: 'In the context of life history strategies, which statement is accurate?',
            options: [
              'r-selected examples: insects, bacteria, annual plants',
              'erac latnerap elttil ,gnirpsffo llams ,noitcudorper dipar :detceles-r',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'r-selected examples: insects, bacteria, annual plants'
          }
        ]
      }
    },
    {
      id: 'popu3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **r-selected**: rapid reproduction, small offspring, little parental care
- **K-selected**: slow reproduction, large offspring, extensive parental care
- **r-selected examples**: insects, bacteria, annual plants
- **K-selected examples**: elephants, whales, humans
      `
    },
    {
      id: 'popu3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to life history strategies?',
            options: [
              'K-selected examples: elephants, whales, humans',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'K-selected examples: elephants, whales, humans'
          }
        ]
      }
    },
    {
      id: 'popu3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'r-selected is important in life history strategies because',
            options: ['rapid reproduction, small offspring, little parent', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'K-selected is important in life history strategies because',
            options: ['slow reproduction, large offspring, extensive pare', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'r-selected examples is important in life history strategies because',
            options: ['insects, bacteria, annual plants', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['rapid reproduction, small offspring, little parent', 'slow reproduction, large offspring, extensive pare', 'insects, bacteria, annual plants'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Life History Strategies.'
      }
    }
  ]
}
