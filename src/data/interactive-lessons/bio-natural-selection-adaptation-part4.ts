export const bioNatSelectionPart4Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu4-intro-p4',
      type: 'text' as const,
      content: `
# ## Hardy-Weinberg Equilibrium

**Part 4 of 7 — Hardy-Weinberg Equilibrium**

1. Conditions: large population, no migration, no mutation, random mating, no selection
2. Allele frequencies: p + q = 1
3. Genotype frequencies: p² + 2pq + q² = 1
4. Violations indicate evolution is occurring
      `
    },
    {
      id: 'natu4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes conditions?',
            options: [
              'large population, no migration, no mutation, random mating, no selection',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Conditions: large population, no migration, no mutation, random mating, no selection'
          },
          {
            question: 'In the context of hardy-weinberg equilibrium, which statement is accurate?',
            options: [
              'Genotype frequencies: p² + 2pq + q² = 1',
              'noitceles on ,gnitam modnar ,noitatum on ,noitargim on ,noitalupop egral :snoitidnoC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Genotype frequencies: p² + 2pq + q² = 1'
          }
        ]
      }
    },
    {
      id: 'natu4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Conditions**: large population, no migration, no mutation, random mating, no selection
- **Allele frequencies**: p + q = 1
- **Genotype frequencies**: p² + 2pq + q² = 1
- **Violations indicate evolution is occurring**
      `
    },
    {
      id: 'natu4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to hardy-weinberg equilibrium?',
            options: [
              'Violations indicate evolution is occurring',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Violations indicate evolution is occurring'
          }
        ]
      }
    },
    {
      id: 'natu4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Conditions is important in hardy-weinberg equilibrium because',
            options: ['large population, no migration, no mutation, rando', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Allele frequencies is important in hardy-weinberg equilibrium because',
            options: ['p + q = 1', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Genotype frequencies is important in hardy-weinberg equilibrium because',
            options: ['p² + 2pq + q² = 1', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['large population, no migration, no mutation, rando', 'p + q = 1', 'p² + 2pq + q² = 1'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Hardy-Weinberg Equilibrium.'
      }
    }
  ]
}
