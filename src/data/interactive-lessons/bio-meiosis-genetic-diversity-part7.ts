export const bioMeiosisPart7Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio7-intro-p7',
      type: 'text' as const,
      content: `
# ## Meiosis: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Meiosis as the basis for Mendel's laws
2. Connection to evolution (genetic variation)
3. Errors in meiosis: nondisjunction, trisomy
4. AP exam: comparing mitosis and meiosis
      `
    },
    {
      id: 'meio7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes meiosis as the basis for mendel\'s laws?',
            options: [
              'Meiosis as the basis for Mendel\'s laws',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Meiosis as the basis for Mendel\'s laws'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Errors in meiosis: nondisjunction, trisomy',
              'swal s\'ledneM rof sisab eht sa sisoieM',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Errors in meiosis: nondisjunction, trisomy'
          }
        ]
      }
    },
    {
      id: 'meio7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Meiosis as the basis for Mendel's laws**
- **Connection to evolution (genetic variation)**
- **Errors in meiosis**: nondisjunction, trisomy
- **AP exam**: comparing mitosis and meiosis
      `
    },
    {
      id: 'meio7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'AP exam: comparing mitosis and meiosis',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: comparing mitosis and meiosis'
          }
        ]
      }
    },
    {
      id: 'meio7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Meiosis as the basis for Mendel\'s laws is important in synthesis & ap review because',
            options: ['Meiosis as the basis for Mendel\'s laws', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Connection to evolution (genetic variation) is important in synthesis & ap review because',
            options: ['Connection to evolution (genetic variation)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Errors in meiosis is important in synthesis & ap review because',
            options: ['nondisjunction, trisomy', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Meiosis as the basis for Mendel\'s laws', 'Connection to evolution (genetic variation)', 'nondisjunction, trisomy'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
