export const bioPhotosynthesisPart2Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot2-intro-p2',
      type: 'text' as const,
      content: `
# ## Photosystems I & II

**Part 2 of 7 — Photosystems I & II**

1. PS II (P680): splits water, passes electrons to ETC
2. PS I (P700): reduces NADP⁺ to NADPH
3. Non-cyclic electron flow: H₂O → PS II → ETC → PS I → NADPH
4. Cyclic electron flow: PS I only, produces ATP only
      `
    },
    {
      id: 'phot2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes ps ii (p680)?',
            options: [
              'splits water, passes electrons to ETC',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'PS II (P680): splits water, passes electrons to ETC'
          },
          {
            question: 'In the context of photosystems i & ii, which statement is accurate?',
            options: [
              'Non-cyclic electron flow: H₂O → PS II → ETC → PS I → NADPH',
              'CTE ot snortcele sessap ,retaw stilps :)086P( II SP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Non-cyclic electron flow: H₂O → PS II → ETC → PS I → NADPH'
          }
        ]
      }
    },
    {
      id: 'phot2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **PS II (P680)**: splits water, passes electrons to ETC
- **PS I (P700)**: reduces NADP⁺ to NADPH
- **Non-cyclic electron flow**: H₂O → PS II → ETC → PS I → NADPH
- **Cyclic electron flow**: PS I only, produces ATP only
      `
    },
    {
      id: 'phot2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to photosystems i & ii?',
            options: [
              'Cyclic electron flow: PS I only, produces ATP only',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Cyclic electron flow: PS I only, produces ATP only'
          }
        ]
      }
    },
    {
      id: 'phot2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'PS II (P680) is important in photosystems i & ii because',
            options: ['splits water, passes electrons to ETC', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'PS I (P700) is important in photosystems i & ii because',
            options: ['reduces NADP⁺ to NADPH', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Non-cyclic electron flow is important in photosystems i & ii because',
            options: ['H₂O → PS II → ETC → PS I → NADPH', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['splits water, passes electrons to ETC', 'reduces NADP⁺ to NADPH', 'H₂O → PS II → ETC → PS I → NADPH'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Photosystems I & II.'
      }
    }
  ]
}
