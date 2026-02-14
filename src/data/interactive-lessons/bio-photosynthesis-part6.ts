export const bioPhotosynthesisPart6Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot6-intro-p6',
      type: 'text' as const,
      content: `
# ## Photosynthesis: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Interpreting absorption spectra
2. Predicting effects of light color on photosynthesis rate
3. Experimental design with photosynthesis variables
4. Calculating net vs gross photosynthesis
      `
    },
    {
      id: 'phot6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes interpreting absorption spectra?',
            options: [
              'Interpreting absorption spectra',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Interpreting absorption spectra'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Experimental design with photosynthesis variables',
              'artceps noitprosba gniterpretnI',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Experimental design with photosynthesis variables'
          }
        ]
      }
    },
    {
      id: 'phot6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Interpreting absorption spectra**
- **Predicting effects of light color on photosynthesis rate**
- **Experimental design with photosynthesis variables**
- **Calculating net vs gross photosynthesis**
      `
    },
    {
      id: 'phot6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Calculating net vs gross photosynthesis',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Calculating net vs gross photosynthesis'
          }
        ]
      }
    },
    {
      id: 'phot6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Interpreting absorption spectra is important in problem-solving because',
            options: ['Interpreting absorption spectra', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predicting effects of light color on photosynthesis rate is important in problem-solving because',
            options: ['Predicting effects of light color on photosynthesi', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Experimental design with photosynthesis variables is important in problem-solving because',
            options: ['Experimental design with photosynthesis variables', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Interpreting absorption spectra', 'Predicting effects of light color on photosynthesi', 'Experimental design with photosynthesis variables'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
