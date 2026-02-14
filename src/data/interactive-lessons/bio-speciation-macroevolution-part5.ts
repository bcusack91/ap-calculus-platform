export const bioSpeciationPart5Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec5-intro-p5',
      type: 'text' as const,
      content: `
# ## Extinction & Phylogenetics

**Part 5 of 7 — Extinction & Phylogenetics**

1. Background extinction: normal rate of species loss
2. Mass extinction: >75% species lost (Big Five events)
3. Phylogenetic trees show evolutionary relationships
4. Cladistics: shared derived characters define groups
      `
    },
    {
      id: 'spec5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes background extinction?',
            options: [
              'normal rate of species loss',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Background extinction: normal rate of species loss'
          },
          {
            question: 'In the context of extinction & phylogenetics, which statement is accurate?',
            options: [
              'Phylogenetic trees show evolutionary relationships',
              'ssol seiceps fo etar lamron :noitcnitxe dnuorgkcaB',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Phylogenetic trees show evolutionary relationships'
          }
        ]
      }
    },
    {
      id: 'spec5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Background extinction**: normal rate of species loss
- **Mass extinction**: >75% species lost (Big Five events)
- **Phylogenetic trees show evolutionary relationships**
- **Cladistics**: shared derived characters define groups
      `
    },
    {
      id: 'spec5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to extinction & phylogenetics?',
            options: [
              'Cladistics: shared derived characters define groups',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Cladistics: shared derived characters define groups'
          }
        ]
      }
    },
    {
      id: 'spec5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Background extinction is important in extinction & phylogenetics because',
            options: ['normal rate of species loss', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Mass extinction is important in extinction & phylogenetics because',
            options: ['>75% species lost (Big Five events)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Phylogenetic trees show evolutionary relationships is important in extinction & phylogenetics because',
            options: ['Phylogenetic trees show evolutionary relationships', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['normal rate of species loss', '>75% species lost (Big Five events)', 'Phylogenetic trees show evolutionary relationships'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Extinction & Phylogenetics.'
      }
    }
  ]
}
