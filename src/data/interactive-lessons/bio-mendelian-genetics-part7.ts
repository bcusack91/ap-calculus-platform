export const bioMendelianPart7Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend7-intro-p7',
      type: 'text' as const,
      content: `
# ## Mendelian Genetics: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Mendel's laws and chromosome behavior
2. Probability in genetics
3. Chi-square on the AP exam
4. Connecting genetics to evolution
      `
    },
    {
      id: 'mend7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes mendel\'s laws and chromosome behavior?',
            options: [
              'Mendel\'s laws and chromosome behavior',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Mendel\'s laws and chromosome behavior'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Chi-square on the AP exam',
              'roivaheb emosomorhc dna swal s\'ledneM',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Chi-square on the AP exam'
          }
        ]
      }
    },
    {
      id: 'mend7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Mendel's laws and chromosome behavior**
- **Probability in genetics**
- **Chi-square on the AP exam**
- **Connecting genetics to evolution**
      `
    },
    {
      id: 'mend7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'Connecting genetics to evolution',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Connecting genetics to evolution'
          }
        ]
      }
    },
    {
      id: 'mend7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mendel\'s laws and chromosome behavior is important in synthesis & ap review because',
            options: ['Mendel\'s laws and chromosome behavior', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Probability in genetics is important in synthesis & ap review because',
            options: ['Probability in genetics', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Chi-square on the AP exam is important in synthesis & ap review because',
            options: ['Chi-square on the AP exam', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Mendel\'s laws and chromosome behavior', 'Probability in genetics', 'Chi-square on the AP exam'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
