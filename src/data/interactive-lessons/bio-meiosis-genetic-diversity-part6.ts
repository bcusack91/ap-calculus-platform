export const bioMeiosisPart6Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio6-intro-p6',
      type: 'text' as const,
      content: `
# ## Meiosis: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Chromosome counting through meiosis stages
2. Predicting gamete genotypes
3. Comparing mitosis and meiosis
4. Nondisjunction and its consequences
      `
    },
    {
      id: 'meio6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes chromosome counting through meiosis stages?',
            options: [
              'Chromosome counting through meiosis stages',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Chromosome counting through meiosis stages'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Comparing mitosis and meiosis',
              'segats sisoiem hguorht gnitnuoc emosomorhC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Comparing mitosis and meiosis'
          }
        ]
      }
    },
    {
      id: 'meio6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Chromosome counting through meiosis stages**
- **Predicting gamete genotypes**
- **Comparing mitosis and meiosis**
- **Nondisjunction and its consequences**
      `
    },
    {
      id: 'meio6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Nondisjunction and its consequences',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Nondisjunction and its consequences'
          }
        ]
      }
    },
    {
      id: 'meio6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chromosome counting through meiosis stages is important in problem-solving because',
            options: ['Chromosome counting through meiosis stages', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predicting gamete genotypes is important in problem-solving because',
            options: ['Predicting gamete genotypes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Comparing mitosis and meiosis is important in problem-solving because',
            options: ['Comparing mitosis and meiosis', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Chromosome counting through meiosis stages', 'Predicting gamete genotypes', 'Comparing mitosis and meiosis'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
