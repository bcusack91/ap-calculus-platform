export const bioCellCyclePart7Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cell7-intro-p7',
      type: 'text' as const,
      content: `
# ## Cell Cycle & Mitosis: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Mitosis vs meiosis comparison
2. Cell cycle regulation and cancer
3. Chromosome behavior during division
4. AP exam: diagram interpretation
      `
    },
    {
      id: 'cell7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes mitosis vs meiosis comparison?',
            options: [
              'Mitosis vs meiosis comparison',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Mitosis vs meiosis comparison'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Chromosome behavior during division',
              'nosirapmoc sisoiem sv sisotiM',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Chromosome behavior during division'
          }
        ]
      }
    },
    {
      id: 'cell7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Mitosis vs meiosis comparison**
- **Cell cycle regulation and cancer**
- **Chromosome behavior during division**
- **AP exam**: diagram interpretation
      `
    },
    {
      id: 'cell7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'AP exam: diagram interpretation',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: diagram interpretation'
          }
        ]
      }
    },
    {
      id: 'cell7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mitosis vs meiosis comparison is important in synthesis & ap review because',
            options: ['Mitosis vs meiosis comparison', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Cell cycle regulation and cancer is important in synthesis & ap review because',
            options: ['Cell cycle regulation and cancer', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Chromosome behavior during division is important in synthesis & ap review because',
            options: ['Chromosome behavior during division', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Mitosis vs meiosis comparison', 'Cell cycle regulation and cancer', 'Chromosome behavior during division'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
