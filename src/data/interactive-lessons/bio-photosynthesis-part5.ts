export const bioPhotosynthesisPart5Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot5-intro-p5',
      type: 'text' as const,
      content: `
# ## Photosynthesis vs Respiration

**Part 5 of 7 — Photosynthesis vs Respiration**

1. Photosynthesis: light energy → chemical energy (glucose)
2. Respiration: chemical energy → ATP
3. Complementary processes: products of one feed the other
4. Both use chemiosmosis and electron transport
      `
    },
    {
      id: 'phot5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes photosynthesis?',
            options: [
              'light energy → chemical energy (glucose)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Photosynthesis: light energy → chemical energy (glucose)'
          },
          {
            question: 'In the context of photosynthesis vs respiration, which statement is accurate?',
            options: [
              'Complementary processes: products of one feed the other',
              ')esoculg( ygrene lacimehc → ygrene thgil :sisehtnysotohP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Complementary processes: products of one feed the other'
          }
        ]
      }
    },
    {
      id: 'phot5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Photosynthesis**: light energy → chemical energy (glucose)
- **Respiration**: chemical energy → ATP
- **Complementary processes**: products of one feed the other
- **Both use chemiosmosis and electron transport**
      `
    },
    {
      id: 'phot5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to photosynthesis vs respiration?',
            options: [
              'Both use chemiosmosis and electron transport',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Both use chemiosmosis and electron transport'
          }
        ]
      }
    },
    {
      id: 'phot5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Photosynthesis is important in photosynthesis vs respiration because',
            options: ['light energy → chemical energy (glucose)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Respiration is important in photosynthesis vs respiration because',
            options: ['chemical energy → ATP', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Complementary processes is important in photosynthesis vs respiration because',
            options: ['products of one feed the other', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['light energy → chemical energy (glucose)', 'chemical energy → ATP', 'products of one feed the other'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Photosynthesis vs Respiration.'
      }
    }
  ]
}
