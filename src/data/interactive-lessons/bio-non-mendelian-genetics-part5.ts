export const bioNonMendelianPart5Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-5-intro-p5',
      type: 'text' as const,
      content: `
# ## Environmental Effects on Phenotype

**Part 5 of 7 — Environmental Effects on Phenotype**

1. Phenotype = genotype + environment
2. Temperature-sensitive alleles: Siamese cats
3. Nutrition affects height (polygenic)
4. Epigenetics: environmental factors affect gene expression
      `
    },
    {
      id: 'non-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes phenotype = genotype + environment?',
            options: [
              'Phenotype = genotype + environment',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Phenotype = genotype + environment'
          },
          {
            question: 'In the context of environmental effects on phenotype, which statement is accurate?',
            options: [
              'Nutrition affects height (polygenic)',
              'tnemnorivne + epytoneg = epytonehP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Nutrition affects height (polygenic)'
          }
        ]
      }
    },
    {
      id: 'non-5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Phenotype = genotype + environment**
- **Temperature-sensitive alleles**: Siamese cats
- **Nutrition affects height (polygenic)**
- **Epigenetics**: environmental factors affect gene expression
      `
    },
    {
      id: 'non-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to environmental effects on phenotype?',
            options: [
              'Epigenetics: environmental factors affect gene expression',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Epigenetics: environmental factors affect gene expression'
          }
        ]
      }
    },
    {
      id: 'non-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phenotype = genotype + environment is important in environmental effects on phenotype because',
            options: ['Phenotype = genotype + environment', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Temperature-sensitive alleles is important in environmental effects on phenotype because',
            options: ['Siamese cats', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Nutrition affects height (polygenic) is important in environmental effects on phenotype because',
            options: ['Nutrition affects height (polygenic)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Phenotype = genotype + environment', 'Siamese cats', 'Nutrition affects height (polygenic)'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Environmental Effects on Phenotype.'
      }
    }
  ]
}
