export const bioEcologyPart1Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol1-intro-p1',
      type: 'text' as const,
      content: `
# ## Introduction to Ecology

**Part 1 of 7 — Introduction to Ecology**

1. Ecology: study of interactions between organisms and their environment
2. Levels: organism → population → community → ecosystem → biosphere
3. Biotic factors: living components
4. Abiotic factors: nonliving components (temperature, water, light)
      `
    },
    {
      id: 'ecol1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes ecology?',
            options: [
              'study of interactions between organisms and their environment',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Ecology: study of interactions between organisms and their environment'
          },
          {
            question: 'In the context of introduction to ecology, which statement is accurate?',
            options: [
              'Biotic factors: living components',
              'tnemnorivne rieht dna smsinagro neewteb snoitcaretni fo yduts :ygolocE',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Biotic factors: living components'
          }
        ]
      }
    },
    {
      id: 'ecol1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Ecology**: study of interactions between organisms and their environment
- **Levels**: organism → population → community → ecosystem → biosphere
- **Biotic factors**: living components
- **Abiotic factors**: nonliving components (temperature, water, light)
      `
    },
    {
      id: 'ecol1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to introduction to ecology?',
            options: [
              'Abiotic factors: nonliving components (temperature, water, light)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Abiotic factors: nonliving components (temperature, water, light)'
          }
        ]
      }
    },
    {
      id: 'ecol1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ecology is important in introduction to ecology because',
            options: ['study of interactions between organisms and their ', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Levels is important in introduction to ecology because',
            options: ['organism → population → community → ecosystem → bi', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Biotic factors is important in introduction to ecology because',
            options: ['living components', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['study of interactions between organisms and their ', 'organism → population → community → ecosystem → bi', 'living components'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Ecology.'
      }
    }
  ]
}
