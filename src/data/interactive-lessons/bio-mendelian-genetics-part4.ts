export const bioMendelianPart4Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend4-intro-p4',
      type: 'text' as const,
      content: `
# ## Pedigree Analysis

**Part 4 of 7 — Pedigree Analysis**

1. Circles = females, squares = males
2. Filled = affected, open = unaffected
3. Autosomal dominant: affected in every generation
4. Autosomal recessive: can skip generations, carrier parents
      `
    },
    {
      id: 'mend4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes circles = females, squares = males?',
            options: [
              'Circles = females, squares = males',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Circles = females, squares = males'
          },
          {
            question: 'In the context of pedigree analysis, which statement is accurate?',
            options: [
              'Autosomal dominant: affected in every generation',
              'selam = serauqs ,selamef = selcriC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Autosomal dominant: affected in every generation'
          }
        ]
      }
    },
    {
      id: 'mend4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Circles = females, squares = males**
- **Filled = affected, open = unaffected**
- **Autosomal dominant**: affected in every generation
- **Autosomal recessive**: can skip generations, carrier parents
      `
    },
    {
      id: 'mend4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to pedigree analysis?',
            options: [
              'Autosomal recessive: can skip generations, carrier parents',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Autosomal recessive: can skip generations, carrier parents'
          }
        ]
      }
    },
    {
      id: 'mend4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Circles = females, squares = males is important in pedigree analysis because',
            options: ['Circles = females, squares = males', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Filled = affected, open = unaffected is important in pedigree analysis because',
            options: ['Filled = affected, open = unaffected', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Autosomal dominant is important in pedigree analysis because',
            options: ['affected in every generation', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Circles = females, squares = males', 'Filled = affected, open = unaffected', 'affected in every generation'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Pedigree Analysis.'
      }
    }
  ]
}
