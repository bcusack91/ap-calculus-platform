export const bioCellCompartmentPart6Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'cell6-intro-p6',
      type: 'text' as const,
      content: `
# ## Cell Compartmentalization: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. SA:V ratio calculations
2. Predicting effects of compartment disruption
3. Comparing prokaryotic and eukaryotic strategies
4. Experimental design questions
      `
    },
    {
      id: 'cell6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes sa?',
            options: [
              'V ratio calculations',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'SA:V ratio calculations'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Comparing prokaryotic and eukaryotic strategies',
              'snoitaluclac oitar V:AS',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Comparing prokaryotic and eukaryotic strategies'
          }
        ]
      }
    },
    {
      id: 'cell6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **SA**:V ratio calculations
- **Predicting effects of compartment disruption**
- **Comparing prokaryotic and eukaryotic strategies**
- **Experimental design questions**
      `
    },
    {
      id: 'cell6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Experimental design questions',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Experimental design questions'
          }
        ]
      }
    },
    {
      id: 'cell6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SA is important in problem-solving because',
            options: ['V ratio calculations', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predicting effects of compartment disruption is important in problem-solving because',
            options: ['Predicting effects of compartment disruption', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Comparing prokaryotic and eukaryotic strategies is important in problem-solving because',
            options: ['Comparing prokaryotic and eukaryotic strategies', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['V ratio calculations', 'Predicting effects of compartment disruption', 'Comparing prokaryotic and eukaryotic strategies'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
