export const bioCellCommPart3Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell3-intro-p3',
      type: 'text' as const,
      content: `
# ## Signal Reception

**Part 3 of 7 — Signal Reception**

1. Membrane receptors: G-protein coupled, receptor tyrosine kinases, ion channels
2. Intracellular receptors: for lipid-soluble signals (steroids)
3. Ligand binding causes conformational change
4. Receptor specificity determines which cells respond
      `
    },
    {
      id: 'cell3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes membrane receptors?',
            options: [
              'G-protein coupled, receptor tyrosine kinases, ion channels',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Membrane receptors: G-protein coupled, receptor tyrosine kinases, ion channels'
          },
          {
            question: 'In the context of signal reception, which statement is accurate?',
            options: [
              'Ligand binding causes conformational change',
              'slennahc noi ,sesanik enisoryt rotpecer ,delpuoc nietorp-G :srotpecer enarbmeM',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Ligand binding causes conformational change'
          }
        ]
      }
    },
    {
      id: 'cell3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Membrane receptors**: G-protein coupled, receptor tyrosine kinases, ion channels
- **Intracellular receptors**: for lipid-soluble signals (steroids)
- **Ligand binding causes conformational change**
- **Receptor specificity determines which cells respond**
      `
    },
    {
      id: 'cell3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to signal reception?',
            options: [
              'Receptor specificity determines which cells respond',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Receptor specificity determines which cells respond'
          }
        ]
      }
    },
    {
      id: 'cell3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Membrane receptors is important in signal reception because',
            options: ['G-protein coupled, receptor tyrosine kinases, ion ', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Intracellular receptors is important in signal reception because',
            options: ['for lipid-soluble signals (steroids)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Ligand binding causes conformational change is important in signal reception because',
            options: ['Ligand binding causes conformational change', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['G-protein coupled, receptor tyrosine kinases, ion ', 'for lipid-soluble signals (steroids)', 'Ligand binding causes conformational change'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Signal Reception.'
      }
    }
  ]
}
