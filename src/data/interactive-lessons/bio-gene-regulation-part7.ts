export const bioGeneRegPart7Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene7-intro-p7',
      type: 'text' as const,
      content: `
# ## Gene Regulation: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Regulation at every level: DNA → RNA → protein
2. Dysregulation and disease (cancer)
3. Operons on the AP exam
4. Epigenetics as a growing field
      `
    },
    {
      id: 'gene7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes regulation at every level?',
            options: [
              'DNA → RNA → protein',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Regulation at every level: DNA → RNA → protein'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Operons on the AP exam',
              'nietorp → ANR → AND :level yreve ta noitalugeR',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Operons on the AP exam'
          }
        ]
      }
    },
    {
      id: 'gene7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Regulation at every level**: DNA → RNA → protein
- **Dysregulation and disease (cancer)**
- **Operons on the AP exam**
- **Epigenetics as a growing field**
      `
    },
    {
      id: 'gene7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'Epigenetics as a growing field',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Epigenetics as a growing field'
          }
        ]
      }
    },
    {
      id: 'gene7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Regulation at every level is important in synthesis & ap review because',
            options: ['DNA → RNA → protein', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Dysregulation and disease (cancer) is important in synthesis & ap review because',
            options: ['Dysregulation and disease (cancer)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Operons on the AP exam is important in synthesis & ap review because',
            options: ['Operons on the AP exam', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['DNA → RNA → protein', 'Dysregulation and disease (cancer)', 'Operons on the AP exam'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
