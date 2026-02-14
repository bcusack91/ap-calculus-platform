export const bioCellRespirationPart5Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cell5-intro-p5',
      type: 'text' as const,
      content: `
# ## Anaerobic Respiration

**Part 5 of 7 — Anaerobic Respiration**

1. Fermentation when O₂ is absent
2. Lactic acid fermentation: pyruvate → lactate (animals, bacteria)
3. Alcohol fermentation: pyruvate → ethanol + CO₂ (yeast)
4. Only 2 ATP per glucose without O₂
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
            question: 'Which of the following best describes fermentation when o₂ is absent?',
            options: [
              'Fermentation when O₂ is absent',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Fermentation when O₂ is absent'
          },
          {
            question: 'In the context of anaerobic respiration, which statement is accurate?',
            options: [
              'Alcohol fermentation: pyruvate → ethanol + CO₂ (yeast)',
              'tnesba si ₂O nehw noitatnemreF',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Alcohol fermentation: pyruvate → ethanol + CO₂ (yeast)'
          }
        ]
      }
    },
    {
      id: 'cell5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Fermentation when O₂ is absent**
- **Lactic acid fermentation**: pyruvate → lactate (animals, bacteria)
- **Alcohol fermentation**: pyruvate → ethanol + CO₂ (yeast)
- **Only 2 ATP per glucose without O₂**
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
            question: 'Which concept is most directly related to anaerobic respiration?',
            options: [
              'Only 2 ATP per glucose without O₂',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Only 2 ATP per glucose without O₂'
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
            label: 'Fermentation when O₂ is absent is important in anaerobic respiration because',
            options: ['Fermentation when O₂ is absent', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Lactic acid fermentation is important in anaerobic respiration because',
            options: ['pyruvate → lactate (animals, bacteria)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Alcohol fermentation is important in anaerobic respiration because',
            options: ['pyruvate → ethanol + CO₂ (yeast)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Fermentation when O₂ is absent', 'pyruvate → lactate (animals, bacteria)', 'pyruvate → ethanol + CO₂ (yeast)'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Anaerobic Respiration.'
      }
    }
  ]
}
