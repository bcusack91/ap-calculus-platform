export const bioEcologyPart7Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol7-intro-p7',
      type: 'text' as const,
      content: `
# ## Ecology: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Ecology connects to evolution
2. Ecosystems and energy flow
3. Human impacts on ecosystems
4. AP exam: data analysis in ecology
      `
    },
    {
      id: 'ecol7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes ecology connects to evolution?',
            options: [
              'Ecology connects to evolution',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Ecology connects to evolution'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Human impacts on ecosystems',
              'noitulove ot stcennoc ygolocE',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Human impacts on ecosystems'
          }
        ]
      }
    },
    {
      id: 'ecol7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Ecology connects to evolution**
- **Ecosystems and energy flow**
- **Human impacts on ecosystems**
- **AP exam**: data analysis in ecology
      `
    },
    {
      id: 'ecol7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'AP exam: data analysis in ecology',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: data analysis in ecology'
          }
        ]
      }
    },
    {
      id: 'ecol7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ecology connects to evolution is important in synthesis & ap review because',
            options: ['Ecology connects to evolution', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Ecosystems and energy flow is important in synthesis & ap review because',
            options: ['Ecosystems and energy flow', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Human impacts on ecosystems is important in synthesis & ap review because',
            options: ['Human impacts on ecosystems', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Ecology connects to evolution', 'Ecosystems and energy flow', 'Human impacts on ecosystems'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
