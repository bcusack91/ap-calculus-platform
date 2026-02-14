export const bioMendelianPart3Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend3-intro-p3',
      type: 'text' as const,
      content: `
# ## Dihybrid Crosses

**Part 3 of 7 — Dihybrid Crosses**

1. Two-gene Punnett square (4×4 = 16 outcomes)
2. Expected phenotypic ratio: 9:3:3:1
3. AaBb × AaBb cross
4. Deviation from 9:3:3:1 suggests gene linkage
      `
    },
    {
      id: 'mend3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes two-gene punnett square (4×4 = 16 outcomes)?',
            options: [
              'Two-gene Punnett square (4×4 = 16 outcomes)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Two-gene Punnett square (4×4 = 16 outcomes)'
          },
          {
            question: 'In the context of dihybrid crosses, which statement is accurate?',
            options: [
              'AaBb × AaBb cross',
              ')semoctuo 61 = 4×4( erauqs ttennuP eneg-owT',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'AaBb × AaBb cross'
          }
        ]
      }
    },
    {
      id: 'mend3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Two-gene Punnett square (4×4 = 16 outcomes)**
- **Expected phenotypic ratio**: 9:3:3:1
- **AaBb × AaBb cross**
- **Deviation from 9**:3:3:1 suggests gene linkage
      `
    },
    {
      id: 'mend3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to dihybrid crosses?',
            options: [
              'Deviation from 9:3:3:1 suggests gene linkage',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Deviation from 9:3:3:1 suggests gene linkage'
          }
        ]
      }
    },
    {
      id: 'mend3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Two-gene Punnett square (4×4 = 16 outcomes) is important in dihybrid crosses because',
            options: ['Two-gene Punnett square (4×4 = 16 outcomes)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Expected phenotypic ratio is important in dihybrid crosses because',
            options: ['9:3:3:1', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'AaBb × AaBb cross is important in dihybrid crosses because',
            options: ['AaBb × AaBb cross', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Two-gene Punnett square (4×4 = 16 outcomes)', '9:3:3:1', 'AaBb × AaBb cross'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Dihybrid Crosses.'
      }
    }
  ]
}
