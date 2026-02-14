export const bioNonMendelianPart1Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-1-intro-p1',
      type: 'text' as const,
      content: `
# ## Incomplete & Codominance

**Part 1 of 7 — Incomplete & Codominance**

1. Incomplete dominance: heterozygote is intermediate (red × white = pink)
2. Codominance: both alleles fully expressed (AB blood type)
3. Neither follows simple dominant/recessive pattern
4. Modified phenotypic ratios: 1:2:1 instead of 3:1
      `
    },
    {
      id: 'non-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes incomplete dominance?',
            options: [
              'heterozygote is intermediate (red × white = pink)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Incomplete dominance: heterozygote is intermediate (red × white = pink)'
          },
          {
            question: 'In the context of incomplete & codominance, which statement is accurate?',
            options: [
              'Neither follows simple dominant/recessive pattern',
              ')knip = etihw × der( etaidemretni si etogyzoreteh :ecnanimod etelpmocnI',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Neither follows simple dominant/recessive pattern'
          }
        ]
      }
    },
    {
      id: 'non-1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Incomplete dominance**: heterozygote is intermediate (red × white = pink)
- **Codominance**: both alleles fully expressed (AB blood type)
- **Neither follows simple dominant/recessive pattern**
- **Modified phenotypic ratios**: 1:2:1 instead of 3:1
      `
    },
    {
      id: 'non-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to incomplete & codominance?',
            options: [
              'Modified phenotypic ratios: 1:2:1 instead of 3:1',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Modified phenotypic ratios: 1:2:1 instead of 3:1'
          }
        ]
      }
    },
    {
      id: 'non-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Incomplete dominance is important in incomplete & codominance because',
            options: ['heterozygote is intermediate (red × white = pink)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Codominance is important in incomplete & codominance because',
            options: ['both alleles fully expressed (AB blood type)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Neither follows simple dominant/recessive pattern is important in incomplete & codominance because',
            options: ['Neither follows simple dominant/recessive pattern', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['heterozygote is intermediate (red × white = pink)', 'both alleles fully expressed (AB blood type)', 'Neither follows simple dominant/recessive pattern'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Incomplete & Codominance.'
      }
    }
  ]
}
