export const bioCellRespirationPart7Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cell7-intro-p7',
      type: 'text' as const,
      content: `
# ## Cellular Respiration: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Total ATP yield: ~36-38 per glucose
2. Energy coupling and chemiosmosis
3. Evolution of aerobic respiration
4. Connection to photosynthesis
      `
    },
    {
      id: 'cell7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes total atp yield?',
            options: [
              '~36-38 per glucose',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Total ATP yield: ~36-38 per glucose'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Evolution of aerobic respiration',
              'esoculg rep 83-63~ :dleiy PTA latoT',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Evolution of aerobic respiration'
          }
        ]
      }
    },
    {
      id: 'cell7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Total ATP yield**: ~36-38 per glucose
- **Energy coupling and chemiosmosis**
- **Evolution of aerobic respiration**
- **Connection to photosynthesis**
      `
    },
    {
      id: 'cell7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'Connection to photosynthesis',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Connection to photosynthesis'
          }
        ]
      }
    },
    {
      id: 'cell7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Total ATP yield is important in synthesis & ap review because',
            options: ['~36-38 per glucose', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Energy coupling and chemiosmosis is important in synthesis & ap review because',
            options: ['Energy coupling and chemiosmosis', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Evolution of aerobic respiration is important in synthesis & ap review because',
            options: ['Evolution of aerobic respiration', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['~36-38 per glucose', 'Energy coupling and chemiosmosis', 'Evolution of aerobic respiration'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
