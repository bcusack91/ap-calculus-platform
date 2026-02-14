export const bioMembraneTransportPart7Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb7-intro-p7',
      type: 'text' as const,
      content: `
# ## Membrane Transport: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Water potential equation: Ψ = Ψs + Ψp
2. Membrane transport in homeostasis
3. Transport defects cause diseases
4. Free-response practice
      `
    },
    {
      id: 'memb7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes water potential equation?',
            options: [
              'Ψ = Ψs + Ψp',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Water potential equation: Ψ = Ψs + Ψp'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Transport defects cause diseases',
              'pΨ + sΨ = Ψ :noitauqe laitnetop retaW',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Transport defects cause diseases'
          }
        ]
      }
    },
    {
      id: 'memb7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Water potential equation**: Ψ = Ψs + Ψp
- **Membrane transport in homeostasis**
- **Transport defects cause diseases**
- **Free-response practice**
      `
    },
    {
      id: 'memb7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'Free-response practice',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Free-response practice'
          }
        ]
      }
    },
    {
      id: 'memb7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Water potential equation is important in synthesis & ap review because',
            options: ['Ψ = Ψs + Ψp', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Membrane transport in homeostasis is important in synthesis & ap review because',
            options: ['Membrane transport in homeostasis', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Transport defects cause diseases is important in synthesis & ap review because',
            options: ['Transport defects cause diseases', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Ψ = Ψs + Ψp', 'Membrane transport in homeostasis', 'Transport defects cause diseases'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
