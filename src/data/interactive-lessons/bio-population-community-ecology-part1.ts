export const bioPopulationPart1Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu1-intro-p1',
      type: 'text' as const,
      content: `
# ## Population Growth Models

**Part 1 of 7 — Population Growth Models**

1. Exponential growth: J-shaped curve, unlimited resources
2. dN/dt = rN (exponential growth equation)
3. Logistic growth: S-shaped curve, limited resources
4. dN/dt = rN(K-N)/K (logistic growth equation)
      `
    },
    {
      id: 'popu1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes exponential growth?',
            options: [
              'J-shaped curve, unlimited resources',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Exponential growth: J-shaped curve, unlimited resources'
          },
          {
            question: 'In the context of population growth models, which statement is accurate?',
            options: [
              'Logistic growth: S-shaped curve, limited resources',
              'secruoser detimilnu ,evruc depahs-J :htworg laitnenopxE',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Logistic growth: S-shaped curve, limited resources'
          }
        ]
      }
    },
    {
      id: 'popu1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Exponential growth**: J-shaped curve, unlimited resources
- **dN/dt = rN (exponential growth equation)**
- **Logistic growth**: S-shaped curve, limited resources
- **dN/dt = rN(K-N)/K (logistic growth equation)**
      `
    },
    {
      id: 'popu1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to population growth models?',
            options: [
              'dN/dt = rN(K-N)/K (logistic growth equation)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'dN/dt = rN(K-N)/K (logistic growth equation)'
          }
        ]
      }
    },
    {
      id: 'popu1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Exponential growth is important in population growth models because',
            options: ['J-shaped curve, unlimited resources', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'dN/dt = rN (exponential growth equation) is important in population growth models because',
            options: ['dN/dt = rN (exponential growth equation)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Logistic growth is important in population growth models because',
            options: ['S-shaped curve, limited resources', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['J-shaped curve, unlimited resources', 'dN/dt = rN (exponential growth equation)', 'S-shaped curve, limited resources'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Population Growth Models.'
      }
    }
  ]
}
