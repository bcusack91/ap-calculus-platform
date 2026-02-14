export const bioNatSelectionPart6Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu6-intro-p6',
      type: 'text' as const,
      content: `
# ## Natural Selection: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Hardy-Weinberg calculations
2. Identifying types of selection from data
3. Analyzing allele frequency changes
4. Predicting evolutionary outcomes
      `
    },
    {
      id: 'natu6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes hardy-weinberg calculations?',
            options: [
              'Hardy-Weinberg calculations',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Hardy-Weinberg calculations'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Analyzing allele frequency changes',
              'snoitaluclac grebnieW-ydraH',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing allele frequency changes'
          }
        ]
      }
    },
    {
      id: 'natu6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Hardy-Weinberg calculations**
- **Identifying types of selection from data**
- **Analyzing allele frequency changes**
- **Predicting evolutionary outcomes**
      `
    },
    {
      id: 'natu6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Predicting evolutionary outcomes',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting evolutionary outcomes'
          }
        ]
      }
    },
    {
      id: 'natu6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hardy-Weinberg calculations is important in problem-solving because',
            options: ['Hardy-Weinberg calculations', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Identifying types of selection from data is important in problem-solving because',
            options: ['Identifying types of selection from data', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Analyzing allele frequency changes is important in problem-solving because',
            options: ['Analyzing allele frequency changes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Hardy-Weinberg calculations', 'Identifying types of selection from data', 'Analyzing allele frequency changes'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
