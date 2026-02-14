export const bioNatSelectionPart7Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu7-intro-p7',
      type: 'text' as const,
      content: `
# ## Natural Selection: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Five agents of evolution
2. Natural selection vs genetic drift
3. Hardy-Weinberg as null hypothesis
4. AP exam: mathematical analysis of evolution
      `
    },
    {
      id: 'natu7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes five agents of evolution?',
            options: [
              'Five agents of evolution',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Five agents of evolution'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Hardy-Weinberg as null hypothesis',
              'noitulove fo stnega eviF',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Hardy-Weinberg as null hypothesis'
          }
        ]
      }
    },
    {
      id: 'natu7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Five agents of evolution**
- **Natural selection vs genetic drift**
- **Hardy-Weinberg as null hypothesis**
- **AP exam**: mathematical analysis of evolution
      `
    },
    {
      id: 'natu7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'AP exam: mathematical analysis of evolution',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: mathematical analysis of evolution'
          }
        ]
      }
    },
    {
      id: 'natu7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Five agents of evolution is important in synthesis & ap review because',
            options: ['Five agents of evolution', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Natural selection vs genetic drift is important in synthesis & ap review because',
            options: ['Natural selection vs genetic drift', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Hardy-Weinberg as null hypothesis is important in synthesis & ap review because',
            options: ['Hardy-Weinberg as null hypothesis', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Five agents of evolution', 'Natural selection vs genetic drift', 'Hardy-Weinberg as null hypothesis'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
