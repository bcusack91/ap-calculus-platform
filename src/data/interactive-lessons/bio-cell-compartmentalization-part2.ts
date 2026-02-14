export const bioCellCompartmentPart2Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'cell2-intro-p2',
      type: 'text' as const,
      content: `
# ## Compartment Functions

**Part 2 of 7 — Compartment Functions**

1. Organelles create separate chemical environments
2. Different pH in different compartments
3. Concentrated enzymes increase efficiency
4. Prevents incompatible reactions from interfering
      `
    },
    {
      id: 'cell2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes organelles create separate chemical environments?',
            options: [
              'Organelles create separate chemical environments',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Organelles create separate chemical environments'
          },
          {
            question: 'In the context of compartment functions, which statement is accurate?',
            options: [
              'Concentrated enzymes increase efficiency',
              'stnemnorivne lacimehc etarapes etaerc sellenagrO',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Concentrated enzymes increase efficiency'
          }
        ]
      }
    },
    {
      id: 'cell2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Organelles create separate chemical environments**
- **Different pH in different compartments**
- **Concentrated enzymes increase efficiency**
- **Prevents incompatible reactions from interfering**
      `
    },
    {
      id: 'cell2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to compartment functions?',
            options: [
              'Prevents incompatible reactions from interfering',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Prevents incompatible reactions from interfering'
          }
        ]
      }
    },
    {
      id: 'cell2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Organelles create separate chemical environments is important in compartment functions because',
            options: ['Organelles create separate chemical environments', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Different pH in different compartments is important in compartment functions because',
            options: ['Different pH in different compartments', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Concentrated enzymes increase efficiency is important in compartment functions because',
            options: ['Concentrated enzymes increase efficiency', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Organelles create separate chemical environments', 'Different pH in different compartments', 'Concentrated enzymes increase efficiency'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Compartment Functions.'
      }
    }
  ]
}
