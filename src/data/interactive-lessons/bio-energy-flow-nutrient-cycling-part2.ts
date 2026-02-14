export const bioEnergyFlowPart2Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener2-intro-p2',
      type: 'text' as const,
      content: `
# ## Trophic Levels

**Part 2 of 7 — Trophic Levels**

1. Producers: trophic level 1
2. Primary consumers (herbivores): trophic level 2
3. Secondary consumers: trophic level 3
4. Tertiary consumers (top predators): trophic level 4
      `
    },
    {
      id: 'ener2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes producers?',
            options: [
              'trophic level 1',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Producers: trophic level 1'
          },
          {
            question: 'In the context of trophic levels, which statement is accurate?',
            options: [
              'Secondary consumers: trophic level 3',
              '1 level cihport :srecudorP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Secondary consumers: trophic level 3'
          }
        ]
      }
    },
    {
      id: 'ener2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Producers**: trophic level 1
- **Primary consumers (herbivores)**: trophic level 2
- **Secondary consumers**: trophic level 3
- **Tertiary consumers (top predators)**: trophic level 4
      `
    },
    {
      id: 'ener2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to trophic levels?',
            options: [
              'Tertiary consumers (top predators): trophic level 4',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Tertiary consumers (top predators): trophic level 4'
          }
        ]
      }
    },
    {
      id: 'ener2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Producers is important in trophic levels because',
            options: ['trophic level 1', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Primary consumers (herbivores) is important in trophic levels because',
            options: ['trophic level 2', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Secondary consumers is important in trophic levels because',
            options: ['trophic level 3', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['trophic level 1', 'trophic level 2', 'trophic level 3'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Trophic Levels.'
      }
    }
  ]
}
