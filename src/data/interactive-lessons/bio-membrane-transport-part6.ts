export const bioMembraneTransportPart6Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb6-intro-p6',
      type: 'text' as const,
      content: `
# ## Membrane Transport: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Predicting water movement in different solutions
2. Designing osmosis experiments
3. Calculating water potential
4. Identifying transport mechanisms
      `
    },
    {
      id: 'memb6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes predicting water movement in different solutions?',
            options: [
              'Predicting water movement in different solutions',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Predicting water movement in different solutions'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Calculating water potential',
              'snoitulos tnereffid ni tnemevom retaw gnitciderP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Calculating water potential'
          }
        ]
      }
    },
    {
      id: 'memb6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Predicting water movement in different solutions**
- **Designing osmosis experiments**
- **Calculating water potential**
- **Identifying transport mechanisms**
      `
    },
    {
      id: 'memb6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Identifying transport mechanisms',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Identifying transport mechanisms'
          }
        ]
      }
    },
    {
      id: 'memb6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting water movement in different solutions is important in problem-solving because',
            options: ['Predicting water movement in different solutions', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Designing osmosis experiments is important in problem-solving because',
            options: ['Designing osmosis experiments', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Calculating water potential is important in problem-solving because',
            options: ['Calculating water potential', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Predicting water movement in different solutions', 'Designing osmosis experiments', 'Calculating water potential'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
