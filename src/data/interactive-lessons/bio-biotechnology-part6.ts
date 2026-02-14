export const bioBiotechPart6Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot6-intro-p6',
      type: 'text' as const,
      content: `
# ## Biotechnology: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Designing PCR experiments
2. Interpreting gel electrophoresis results
3. Analyzing restriction enzyme maps
4. Evaluating biotechnology applications
      `
    },
    {
      id: 'biot6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes designing pcr experiments?',
            options: [
              'Designing PCR experiments',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Designing PCR experiments'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Analyzing restriction enzyme maps',
              'stnemirepxe RCP gningiseD',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing restriction enzyme maps'
          }
        ]
      }
    },
    {
      id: 'biot6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Designing PCR experiments**
- **Interpreting gel electrophoresis results**
- **Analyzing restriction enzyme maps**
- **Evaluating biotechnology applications**
      `
    },
    {
      id: 'biot6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Evaluating biotechnology applications',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating biotechnology applications'
          }
        ]
      }
    },
    {
      id: 'biot6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Designing PCR experiments is important in problem-solving because',
            options: ['Designing PCR experiments', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Interpreting gel electrophoresis results is important in problem-solving because',
            options: ['Interpreting gel electrophoresis results', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Analyzing restriction enzyme maps is important in problem-solving because',
            options: ['Analyzing restriction enzyme maps', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Designing PCR experiments', 'Interpreting gel electrophoresis results', 'Analyzing restriction enzyme maps'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
