export const bioMeiosisPart5Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio5-intro-p5',
      type: 'text' as const,
      content: `
# ## Sources of Genetic Variation

**Part 5 of 7 — Sources of Genetic Variation**

1. Independent assortment: 2ⁿ possible combinations (n = # of chromosome pairs)
2. Crossing over: creates new allele combinations
3. Random fertilization: any sperm + any egg
4. Humans: 2²³ × 2²³ = ~70 trillion possible combinations (without crossing over)
      `
    },
    {
      id: 'meio5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes independent assortment?',
            options: [
              '2ⁿ possible combinations (n = # of chromosome pairs)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Independent assortment: 2ⁿ possible combinations (n = # of chromosome pairs)'
          },
          {
            question: 'In the context of sources of genetic variation, which statement is accurate?',
            options: [
              'Random fertilization: any sperm + any egg',
              ')sriap emosomorhc fo # = n( snoitanibmoc elbissop ⁿ2 :tnemtrossa tnednepednI',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Random fertilization: any sperm + any egg'
          }
        ]
      }
    },
    {
      id: 'meio5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Independent assortment**: 2ⁿ possible combinations (n = # of chromosome pairs)
- **Crossing over**: creates new allele combinations
- **Random fertilization**: any sperm + any egg
- **Humans**: 2²³ × 2²³ = ~70 trillion possible combinations (without crossing over)
      `
    },
    {
      id: 'meio5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to sources of genetic variation?',
            options: [
              'Humans: 2²³ × 2²³ = ~70 trillion possible combinations (without crossing over)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Humans: 2²³ × 2²³ = ~70 trillion possible combinations (without crossing over)'
          }
        ]
      }
    },
    {
      id: 'meio5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Independent assortment is important in sources of genetic variation because',
            options: ['2ⁿ possible combinations (n = # of chromosome pair', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Crossing over is important in sources of genetic variation because',
            options: ['creates new allele combinations', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Random fertilization is important in sources of genetic variation because',
            options: ['any sperm + any egg', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['2ⁿ possible combinations (n = # of chromosome pair', 'creates new allele combinations', 'any sperm + any egg'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Sources of Genetic Variation.'
      }
    }
  ]
}
