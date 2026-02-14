export const bioMendelianPart2Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend2-intro-p2',
      type: 'text' as const,
      content: `
# ## Monohybrid Crosses

**Part 2 of 7 — Monohybrid Crosses**

1. Punnett squares for single-gene crosses
2. Genotypic ratio: 1 AA : 2 Aa : 1 aa
3. Phenotypic ratio: 3 dominant : 1 recessive
4. Test cross: cross with homozygous recessive to determine genotype
      `
    },
    {
      id: 'mend2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes punnett squares for single-gene crosses?',
            options: [
              'Punnett squares for single-gene crosses',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Punnett squares for single-gene crosses'
          },
          {
            question: 'In the context of monohybrid crosses, which statement is accurate?',
            options: [
              'Phenotypic ratio: 3 dominant : 1 recessive',
              'sessorc eneg-elgnis rof serauqs ttennuP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Phenotypic ratio: 3 dominant : 1 recessive'
          }
        ]
      }
    },
    {
      id: 'mend2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Punnett squares for single-gene crosses**
- **Genotypic ratio**: 1 AA : 2 Aa : 1 aa
- **Phenotypic ratio**: 3 dominant : 1 recessive
- **Test cross**: cross with homozygous recessive to determine genotype
      `
    },
    {
      id: 'mend2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to monohybrid crosses?',
            options: [
              'Test cross: cross with homozygous recessive to determine genotype',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Test cross: cross with homozygous recessive to determine genotype'
          }
        ]
      }
    },
    {
      id: 'mend2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Punnett squares for single-gene crosses is important in monohybrid crosses because',
            options: ['Punnett squares for single-gene crosses', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Genotypic ratio is important in monohybrid crosses because',
            options: ['1 AA : 2 Aa : 1 aa', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Phenotypic ratio is important in monohybrid crosses because',
            options: ['3 dominant : 1 recessive', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Punnett squares for single-gene crosses', '1 AA : 2 Aa : 1 aa', '3 dominant : 1 recessive'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Monohybrid Crosses.'
      }
    }
  ]
}
