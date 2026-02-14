export const bioNatSelectionPart2Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu2-intro-p2',
      type: 'text' as const,
      content: `
# ## Mechanisms of Natural Selection

**Part 2 of 7 — Mechanisms of Natural Selection**

1. Differential reproductive success
2. Selection acts on phenotypes, not genotypes
3. Environment determines which traits are favorable
4. Natural selection is the only mechanism that leads to adaptation
      `
    },
    {
      id: 'natu2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes differential reproductive success?',
            options: [
              'Differential reproductive success',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Differential reproductive success'
          },
          {
            question: 'In the context of mechanisms of natural selection, which statement is accurate?',
            options: [
              'Environment determines which traits are favorable',
              'sseccus evitcudorper laitnereffiD',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Environment determines which traits are favorable'
          }
        ]
      }
    },
    {
      id: 'natu2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Differential reproductive success**
- **Selection acts on phenotypes, not genotypes**
- **Environment determines which traits are favorable**
- **Natural selection is the only mechanism that leads to adaptation**
      `
    },
    {
      id: 'natu2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to mechanisms of natural selection?',
            options: [
              'Natural selection is the only mechanism that leads to adaptation',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Natural selection is the only mechanism that leads to adaptation'
          }
        ]
      }
    },
    {
      id: 'natu2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Differential reproductive success is important in mechanisms of natural selection because',
            options: ['Differential reproductive success', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Selection acts on phenotypes, not genotypes is important in mechanisms of natural selection because',
            options: ['Selection acts on phenotypes, not genotypes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Environment determines which traits are favorable is important in mechanisms of natural selection because',
            options: ['Environment determines which traits are favorable', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Differential reproductive success', 'Selection acts on phenotypes, not genotypes', 'Environment determines which traits are favorable'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Mechanisms of Natural Selection.'
      }
    }
  ]
}
