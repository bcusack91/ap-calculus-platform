export const bioFitnessPart2Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn2-intro-p2',
      type: 'text' as const,
      content: `
# ## Phenotype & Environment

**Part 2 of 7 — Phenotype & Environment**

1. Phenotype = genotype + environment
2. Norm of reaction: range of phenotypes from one genotype
3. Phenotypic plasticity: ability to change phenotype
4. Examples: skin tanning, muscle growth, plant growth toward light
      `
    },
    {
      id: 'fitn2-quiz1',
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
            question: 'In the context of phenotype & environment, which statement is accurate?',
            options: [
              'Phenotypic plasticity: ability to change phenotype',
              'tnemnorivne + epytoneg = epytonehP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Phenotypic plasticity: ability to change phenotype'
          }
        ]
      }
    },
    {
      id: 'fitn2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Phenotype = genotype + environment**
- **Norm of reaction**: range of phenotypes from one genotype
- **Phenotypic plasticity**: ability to change phenotype
- **Examples**: skin tanning, muscle growth, plant growth toward light
      `
    },
    {
      id: 'fitn2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to phenotype & environment?',
            options: [
              'Examples: skin tanning, muscle growth, plant growth toward light',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Examples: skin tanning, muscle growth, plant growth toward light'
          }
        ]
      }
    },
    {
      id: 'fitn2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phenotype = genotype + environment is important in phenotype & environment because',
            options: ['Phenotype = genotype + environment', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Norm of reaction is important in phenotype & environment because',
            options: ['range of phenotypes from one genotype', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Phenotypic plasticity is important in phenotype & environment because',
            options: ['ability to change phenotype', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Phenotype = genotype + environment', 'range of phenotypes from one genotype', 'ability to change phenotype'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Phenotype & Environment.'
      }
    }
  ]
}
