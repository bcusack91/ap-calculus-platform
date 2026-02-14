export const bioFitnessPart1Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn1-intro-p1',
      type: 'text' as const,
      content: `
# ## Introduction to Fitness

**Part 1 of 7 — Introduction to Fitness**

1. Biological fitness: reproductive success
2. Fitness is relative (compared to other genotypes)
3. Natural selection acts on phenotypes
4. Genotype × environment interaction
      `
    },
    {
      id: 'fitn1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes biological fitness?',
            options: [
              'reproductive success',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Biological fitness: reproductive success'
          },
          {
            question: 'In the context of introduction to fitness, which statement is accurate?',
            options: [
              'Natural selection acts on phenotypes',
              'sseccus evitcudorper :ssentif lacigoloiB',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Natural selection acts on phenotypes'
          }
        ]
      }
    },
    {
      id: 'fitn1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Biological fitness**: reproductive success
- **Fitness is relative (compared to other genotypes)**
- **Natural selection acts on phenotypes**
- **Genotype × environment interaction**
      `
    },
    {
      id: 'fitn1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to introduction to fitness?',
            options: [
              'Genotype × environment interaction',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Genotype × environment interaction'
          }
        ]
      }
    },
    {
      id: 'fitn1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biological fitness is important in introduction to fitness because',
            options: ['reproductive success', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Fitness is relative (compared to other genotypes) is important in introduction to fitness because',
            options: ['Fitness is relative (compared to other genotypes)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Natural selection acts on phenotypes is important in introduction to fitness because',
            options: ['Natural selection acts on phenotypes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['reproductive success', 'Fitness is relative (compared to other genotypes)', 'Natural selection acts on phenotypes'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Fitness.'
      }
    }
  ]
}
