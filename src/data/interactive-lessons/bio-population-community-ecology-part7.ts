export const bioPopulationPart7Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu7-intro-p7',
      type: 'text' as const,
      content: `
# ## Population Ecology: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Population ecology and conservation
2. Community interactions shape ecosystems
3. Human population growth
4. AP exam: mathematical population analysis
      `
    },
    {
      id: 'popu7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes population ecology and conservation?',
            options: [
              'Population ecology and conservation',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Population ecology and conservation'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Human population growth',
              'noitavresnoc dna ygoloce noitalupoP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Human population growth'
          }
        ]
      }
    },
    {
      id: 'popu7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Population ecology and conservation**
- **Community interactions shape ecosystems**
- **Human population growth**
- **AP exam**: mathematical population analysis
      `
    },
    {
      id: 'popu7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'AP exam: mathematical population analysis',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: mathematical population analysis'
          }
        ]
      }
    },
    {
      id: 'popu7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Population ecology and conservation is important in synthesis & ap review because',
            options: ['Population ecology and conservation', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Community interactions shape ecosystems is important in synthesis & ap review because',
            options: ['Community interactions shape ecosystems', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Human population growth is important in synthesis & ap review because',
            options: ['Human population growth', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Population ecology and conservation', 'Community interactions shape ecosystems', 'Human population growth'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
