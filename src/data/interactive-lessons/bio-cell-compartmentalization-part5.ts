export const bioCellCompartmentPart5Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'cell5-intro-p5',
      type: 'text' as const,
      content: `
# ## Organelle Interactions

**Part 5 of 7 — Organelle Interactions**

1. Endomembrane system connects organelles
2. Mitochondria interact with ER
3. Vesicle trafficking between compartments
4. Metabolic pathways span multiple organelles
      `
    },
    {
      id: 'cell5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes endomembrane system connects organelles?',
            options: [
              'Endomembrane system connects organelles',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Endomembrane system connects organelles'
          },
          {
            question: 'In the context of organelle interactions, which statement is accurate?',
            options: [
              'Vesicle trafficking between compartments',
              'sellenagro stcennoc metsys enarbmemodnE',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Vesicle trafficking between compartments'
          }
        ]
      }
    },
    {
      id: 'cell5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Endomembrane system connects organelles**
- **Mitochondria interact with ER**
- **Vesicle trafficking between compartments**
- **Metabolic pathways span multiple organelles**
      `
    },
    {
      id: 'cell5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to organelle interactions?',
            options: [
              'Metabolic pathways span multiple organelles',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Metabolic pathways span multiple organelles'
          }
        ]
      }
    },
    {
      id: 'cell5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Endomembrane system connects organelles is important in organelle interactions because',
            options: ['Endomembrane system connects organelles', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Mitochondria interact with ER is important in organelle interactions because',
            options: ['Mitochondria interact with ER', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Vesicle trafficking between compartments is important in organelle interactions because',
            options: ['Vesicle trafficking between compartments', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Endomembrane system connects organelles', 'Mitochondria interact with ER', 'Vesicle trafficking between compartments'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Organelle Interactions.'
      }
    }
  ]
}
