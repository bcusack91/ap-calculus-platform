export const bioEnergyFlowPart7Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener7-intro-p7',
      type: 'text' as const,
      content: `
# ## Energy Flow: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Energy flow vs matter cycling
2. 10% rule and its implications
3. Human impacts on global cycles
4. AP exam: quantitative ecology problems
      `
    },
    {
      id: 'ener7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes energy flow vs matter cycling?',
            options: [
              'Energy flow vs matter cycling',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Energy flow vs matter cycling'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Human impacts on global cycles',
              'gnilcyc rettam sv wolf ygrenE',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Human impacts on global cycles'
          }
        ]
      }
    },
    {
      id: 'ener7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Energy flow vs matter cycling**
- **10% rule and its implications**
- **Human impacts on global cycles**
- **AP exam**: quantitative ecology problems
      `
    },
    {
      id: 'ener7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'AP exam: quantitative ecology problems',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: quantitative ecology problems'
          }
        ]
      }
    },
    {
      id: 'ener7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Energy flow vs matter cycling is important in synthesis & ap review because',
            options: ['Energy flow vs matter cycling', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: '10% rule and its implications is important in synthesis & ap review because',
            options: ['10% rule and its implications', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Human impacts on global cycles is important in synthesis & ap review because',
            options: ['Human impacts on global cycles', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Energy flow vs matter cycling', '10% rule and its implications', 'Human impacts on global cycles'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
