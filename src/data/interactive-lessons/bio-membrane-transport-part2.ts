export const bioMembraneTransportPart2Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb2-intro-p2',
      type: 'text' as const,
      content: `
# ## Passive Transport

**Part 2 of 7 — Passive Transport**

1. Diffusion: high to low concentration
2. Facilitated diffusion: channel and carrier proteins
3. No ATP required
4. Rate depends on concentration gradient and temperature
      `
    },
    {
      id: 'memb2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes diffusion?',
            options: [
              'high to low concentration',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Diffusion: high to low concentration'
          },
          {
            question: 'In the context of passive transport, which statement is accurate?',
            options: [
              'No ATP required',
              'noitartnecnoc wol ot hgih :noisuffiD',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'No ATP required'
          }
        ]
      }
    },
    {
      id: 'memb2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Diffusion**: high to low concentration
- **Facilitated diffusion**: channel and carrier proteins
- **No ATP required**
- **Rate depends on concentration gradient and temperature**
      `
    },
    {
      id: 'memb2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to passive transport?',
            options: [
              'Rate depends on concentration gradient and temperature',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Rate depends on concentration gradient and temperature'
          }
        ]
      }
    },
    {
      id: 'memb2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diffusion is important in passive transport because',
            options: ['high to low concentration', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Facilitated diffusion is important in passive transport because',
            options: ['channel and carrier proteins', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'No ATP required is important in passive transport because',
            options: ['No ATP required', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['high to low concentration', 'channel and carrier proteins', 'No ATP required'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Passive Transport.'
      }
    }
  ]
}
