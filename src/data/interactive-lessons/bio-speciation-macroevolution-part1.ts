export const bioSpeciationPart1Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec1-intro-p1',
      type: 'text' as const,
      content: `
# ## Species Concepts

**Part 1 of 7 — Species Concepts**

1. Biological species concept: can interbreed and produce fertile offspring
2. Morphological species concept: based on physical appearance
3. Phylogenetic species concept: smallest monophyletic group
4. Reproductive isolation prevents gene flow between species
      `
    },
    {
      id: 'spec1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes biological species concept?',
            options: [
              'can interbreed and produce fertile offspring',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Biological species concept: can interbreed and produce fertile offspring'
          },
          {
            question: 'In the context of species concepts, which statement is accurate?',
            options: [
              'Phylogenetic species concept: smallest monophyletic group',
              'gnirpsffo elitref ecudorp dna deerbretni nac :tpecnoc seiceps lacigoloiB',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Phylogenetic species concept: smallest monophyletic group'
          }
        ]
      }
    },
    {
      id: 'spec1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Biological species concept**: can interbreed and produce fertile offspring
- **Morphological species concept**: based on physical appearance
- **Phylogenetic species concept**: smallest monophyletic group
- **Reproductive isolation prevents gene flow between species**
      `
    },
    {
      id: 'spec1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to species concepts?',
            options: [
              'Reproductive isolation prevents gene flow between species',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Reproductive isolation prevents gene flow between species'
          }
        ]
      }
    },
    {
      id: 'spec1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biological species concept is important in species concepts because',
            options: ['can interbreed and produce fertile offspring', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Morphological species concept is important in species concepts because',
            options: ['based on physical appearance', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Phylogenetic species concept is important in species concepts because',
            options: ['smallest monophyletic group', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['can interbreed and produce fertile offspring', 'based on physical appearance', 'smallest monophyletic group'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Species Concepts.'
      }
    }
  ]
}
