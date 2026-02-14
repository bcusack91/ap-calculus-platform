export const bioFitnessPart7Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn7-intro-p7',
      type: 'text' as const,
      content: `
# ## Fitness & Environment: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Fitness connects to evolution and ecology
2. Environment shapes phenotype and selection
3. Adaptation vs acclimation distinction
4. AP free-response strategies for fitness questions
      `
    },
    {
      id: 'fitn7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes fitness connects to evolution and ecology?',
            options: [
              'Fitness connects to evolution and ecology',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Fitness connects to evolution and ecology'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Adaptation vs acclimation distinction',
              'ygoloce dna noitulove ot stcennoc ssentiF',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Adaptation vs acclimation distinction'
          }
        ]
      }
    },
    {
      id: 'fitn7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Fitness connects to evolution and ecology**
- **Environment shapes phenotype and selection**
- **Adaptation vs acclimation distinction**
- **AP free-response strategies for fitness questions**
      `
    },
    {
      id: 'fitn7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'AP free-response strategies for fitness questions',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'AP free-response strategies for fitness questions'
          }
        ]
      }
    },
    {
      id: 'fitn7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fitness connects to evolution and ecology is important in synthesis & ap review because',
            options: ['Fitness connects to evolution and ecology', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Environment shapes phenotype and selection is important in synthesis & ap review because',
            options: ['Environment shapes phenotype and selection', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Adaptation vs acclimation distinction is important in synthesis & ap review because',
            options: ['Adaptation vs acclimation distinction', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Fitness connects to evolution and ecology', 'Environment shapes phenotype and selection', 'Adaptation vs acclimation distinction'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
