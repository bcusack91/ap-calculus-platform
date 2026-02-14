export const bioGeneRegPart1Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene1-intro-p1',
      type: 'text' as const,
      content: `
# ## Why Regulate Genes?

**Part 1 of 7 — Why Regulate Genes?**

1. All cells have same DNA but different functions
2. Gene regulation determines cell specialization
3. Saves energy by producing only needed proteins
4. Responds to environmental signals
      `
    },
    {
      id: 'gene1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes all cells have same dna but different functions?',
            options: [
              'All cells have same DNA but different functions',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'All cells have same DNA but different functions'
          },
          {
            question: 'In the context of why regulate genes?, which statement is accurate?',
            options: [
              'Saves energy by producing only needed proteins',
              'snoitcnuf tnereffid tub AND emas evah sllec llA',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Saves energy by producing only needed proteins'
          }
        ]
      }
    },
    {
      id: 'gene1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **All cells have same DNA but different functions**
- **Gene regulation determines cell specialization**
- **Saves energy by producing only needed proteins**
- **Responds to environmental signals**
      `
    },
    {
      id: 'gene1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to why regulate genes??',
            options: [
              'Responds to environmental signals',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Responds to environmental signals'
          }
        ]
      }
    },
    {
      id: 'gene1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'All cells have same DNA but different functions is important in why regulate genes? because',
            options: ['All cells have same DNA but different functions', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Gene regulation determines cell specialization is important in why regulate genes? because',
            options: ['Gene regulation determines cell specialization', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Saves energy by producing only needed proteins is important in why regulate genes? because',
            options: ['Saves energy by producing only needed proteins', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['All cells have same DNA but different functions', 'Gene regulation determines cell specialization', 'Saves energy by producing only needed proteins'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Why Regulate Genes?.'
      }
    }
  ]
}
