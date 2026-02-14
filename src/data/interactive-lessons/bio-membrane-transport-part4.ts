export const bioMembraneTransportPart4Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb4-intro-p4',
      type: 'text' as const,
      content: `
# ## Active Transport

**Part 4 of 7 — Active Transport**

1. Requires ATP
2. Sodium-potassium pump: 3 Na⁺ out, 2 K⁺ in
3. Moves against concentration gradient
4. Electrochemical gradient
      `
    },
    {
      id: 'memb4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes requires atp?',
            options: [
              'Requires ATP',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Requires ATP'
          },
          {
            question: 'In the context of active transport, which statement is accurate?',
            options: [
              'Moves against concentration gradient',
              'PTA seriuqeR',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Moves against concentration gradient'
          }
        ]
      }
    },
    {
      id: 'memb4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Requires ATP**
- **Sodium-potassium pump**: 3 Na⁺ out, 2 K⁺ in
- **Moves against concentration gradient**
- **Electrochemical gradient**
      `
    },
    {
      id: 'memb4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to active transport?',
            options: [
              'Electrochemical gradient',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Electrochemical gradient'
          }
        ]
      }
    },
    {
      id: 'memb4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Requires ATP is important in active transport because',
            options: ['Requires ATP', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Sodium-potassium pump is important in active transport because',
            options: ['3 Na⁺ out, 2 K⁺ in', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Moves against concentration gradient is important in active transport because',
            options: ['Moves against concentration gradient', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Requires ATP', '3 Na⁺ out, 2 K⁺ in', 'Moves against concentration gradient'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Active Transport.'
      }
    }
  ]
}
