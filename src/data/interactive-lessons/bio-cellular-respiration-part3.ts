export const bioCellRespirationPart3Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cell3-intro-p3',
      type: 'text' as const,
      content: `
# ## Electron Transport Chain

**Part 3 of 7 — Electron Transport Chain**

1. Located in inner mitochondrial membrane
2. NADH and FADH₂ donate electrons
3. Electrons pass through complexes I-IV
4. O₂ is the final electron acceptor → H₂O
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
            question: 'Which of the following best describes located in inner mitochondrial membrane?',
            options: [
              'Located in inner mitochondrial membrane',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Located in inner mitochondrial membrane'
          },
          {
            question: 'In the context of electron transport chain, which statement is accurate?',
            options: [
              'Electrons pass through complexes I-IV',
              'enarbmem lairdnohcotim renni ni detacoL',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Electrons pass through complexes I-IV'
          }
        ]
      }
    },
    {
      id: 'cell3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Located in inner mitochondrial membrane**
- **NADH and FADH₂ donate electrons**
- **Electrons pass through complexes I-IV**
- **O₂ is the final electron acceptor → H₂O**
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
            question: 'Which concept is most directly related to electron transport chain?',
            options: [
              'O₂ is the final electron acceptor → H₂O',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'O₂ is the final electron acceptor → H₂O'
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
            label: 'Located in inner mitochondrial membrane is important in electron transport chain because',
            options: ['Located in inner mitochondrial membrane', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'NADH and FADH₂ donate electrons is important in electron transport chain because',
            options: ['NADH and FADH₂ donate electrons', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Electrons pass through complexes I-IV is important in electron transport chain because',
            options: ['Electrons pass through complexes I-IV', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Located in inner mitochondrial membrane', 'NADH and FADH₂ donate electrons', 'Electrons pass through complexes I-IV'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Electron Transport Chain.'
      }
    }
  ]
}
