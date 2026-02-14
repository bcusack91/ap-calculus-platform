export const bioFitnessPart4Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn4-intro-p4',
      type: 'text' as const,
      content: `
# ## Trade-offs in Energy Use

**Part 4 of 7 — Trade-offs in Energy Use**

1. Limited energy budget: reproduction vs growth vs survival
2. r-selected: many offspring, little parental care
3. K-selected: few offspring, high parental investment
4. Life history trade-offs shaped by natural selection
      `
    },
    {
      id: 'fitn4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes limited energy budget?',
            options: [
              'reproduction vs growth vs survival',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Limited energy budget: reproduction vs growth vs survival'
          },
          {
            question: 'In the context of trade-offs in energy use, which statement is accurate?',
            options: [
              'K-selected: few offspring, high parental investment',
              'lavivrus sv htworg sv noitcudorper :tegdub ygrene detimiL',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'K-selected: few offspring, high parental investment'
          }
        ]
      }
    },
    {
      id: 'fitn4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Limited energy budget**: reproduction vs growth vs survival
- **r-selected**: many offspring, little parental care
- **K-selected**: few offspring, high parental investment
- **Life history trade-offs shaped by natural selection**
      `
    },
    {
      id: 'fitn4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to trade-offs in energy use?',
            options: [
              'Life history trade-offs shaped by natural selection',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Life history trade-offs shaped by natural selection'
          }
        ]
      }
    },
    {
      id: 'fitn4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Limited energy budget is important in trade-offs in energy use because',
            options: ['reproduction vs growth vs survival', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'r-selected is important in trade-offs in energy use because',
            options: ['many offspring, little parental care', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'K-selected is important in trade-offs in energy use because',
            options: ['few offspring, high parental investment', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['reproduction vs growth vs survival', 'many offspring, little parental care', 'few offspring, high parental investment'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Trade-offs in Energy Use.'
      }
    }
  ]
}
