export const bioMendelianPart6Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend6-intro-p6',
      type: 'text' as const,
      content: `
# ## Mendelian Genetics: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Solving Punnett square problems
2. Determining inheritance patterns from pedigrees
3. Performing chi-square calculations
4. Predicting offspring ratios
      `
    },
    {
      id: 'mend6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes solving punnett square problems?',
            options: [
              'Solving Punnett square problems',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Solving Punnett square problems'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Performing chi-square calculations',
              'smelborp erauqs ttennuP gnivloS',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Performing chi-square calculations'
          }
        ]
      }
    },
    {
      id: 'mend6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Solving Punnett square problems**
- **Determining inheritance patterns from pedigrees**
- **Performing chi-square calculations**
- **Predicting offspring ratios**
      `
    },
    {
      id: 'mend6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Predicting offspring ratios',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting offspring ratios'
          }
        ]
      }
    },
    {
      id: 'mend6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Solving Punnett square problems is important in problem-solving because',
            options: ['Solving Punnett square problems', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Determining inheritance patterns from pedigrees is important in problem-solving because',
            options: ['Determining inheritance patterns from pedigrees', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Performing chi-square calculations is important in problem-solving because',
            options: ['Performing chi-square calculations', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Solving Punnett square problems', 'Determining inheritance patterns from pedigrees', 'Performing chi-square calculations'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
