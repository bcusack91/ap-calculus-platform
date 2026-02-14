export const bioGeneRegPart6Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene6-intro-p6',
      type: 'text' as const,
      content: `
# ## Gene Regulation: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Predicting gene expression in different conditions
2. Analyzing operon diagrams
3. Connecting regulation to differentiation
4. Evaluating epigenetic effects
      `
    },
    {
      id: 'gene6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes predicting gene expression in different conditions?',
            options: [
              'Predicting gene expression in different conditions',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Predicting gene expression in different conditions'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Connecting regulation to differentiation',
              'snoitidnoc tnereffid ni noisserpxe eneg gnitciderP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Connecting regulation to differentiation'
          }
        ]
      }
    },
    {
      id: 'gene6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Predicting gene expression in different conditions**
- **Analyzing operon diagrams**
- **Connecting regulation to differentiation**
- **Evaluating epigenetic effects**
      `
    },
    {
      id: 'gene6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Evaluating epigenetic effects',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating epigenetic effects'
          }
        ]
      }
    },
    {
      id: 'gene6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting gene expression in different conditions is important in problem-solving because',
            options: ['Predicting gene expression in different conditions', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Analyzing operon diagrams is important in problem-solving because',
            options: ['Analyzing operon diagrams', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Connecting regulation to differentiation is important in problem-solving because',
            options: ['Connecting regulation to differentiation', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Predicting gene expression in different conditions', 'Analyzing operon diagrams', 'Connecting regulation to differentiation'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
