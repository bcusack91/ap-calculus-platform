export const bioEcologyPart3Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol3-intro-p3',
      type: 'text' as const,
      content: `
# ## Ecosystem Structure

**Part 3 of 7 — Ecosystem Structure**

1. Producers (autotrophs): make organic molecules from inorganic
2. Consumers (heterotrophs): eat other organisms
3. Decomposers: break down dead material
4. Trophic levels: producers → primary consumers → secondary → tertiary
      `
    },
    {
      id: 'ecol3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes producers (autotrophs)?',
            options: [
              'make organic molecules from inorganic',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Producers (autotrophs): make organic molecules from inorganic'
          },
          {
            question: 'In the context of ecosystem structure, which statement is accurate?',
            options: [
              'Decomposers: break down dead material',
              'cinagroni morf selucelom cinagro ekam :)shportotua( srecudorP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Decomposers: break down dead material'
          }
        ]
      }
    },
    {
      id: 'ecol3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Producers (autotrophs)**: make organic molecules from inorganic
- **Consumers (heterotrophs)**: eat other organisms
- **Decomposers**: break down dead material
- **Trophic levels**: producers → primary consumers → secondary → tertiary
      `
    },
    {
      id: 'ecol3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to ecosystem structure?',
            options: [
              'Trophic levels: producers → primary consumers → secondary → tertiary',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Trophic levels: producers → primary consumers → secondary → tertiary'
          }
        ]
      }
    },
    {
      id: 'ecol3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Producers (autotrophs) is important in ecosystem structure because',
            options: ['make organic molecules from inorganic', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Consumers (heterotrophs) is important in ecosystem structure because',
            options: ['eat other organisms', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Decomposers is important in ecosystem structure because',
            options: ['break down dead material', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['make organic molecules from inorganic', 'eat other organisms', 'break down dead material'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Ecosystem Structure.'
      }
    }
  ]
}
