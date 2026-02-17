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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Total ATP yield?',
            options: [
              '~36-38 per glucose',
              'Energy coupling and chemiosmosis',
              'Connection to photosynthesis',
              'Evolution of aerobic respiration'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Total ATP yield: ~36-38 per glucose. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Cellular Respiration: Synthesis & AP Review, which explains Evolution of aerobic respiration?',
            options: [
              'Energy coupling and chemiosmosis',
              'Evolution of aerobic respiration',
              'Connection to photosynthesis',
              '~36-38 per glucose'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Evolution of aerobic respiration. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Connection to photosynthesis is correct?',
            options: [
              'Evolution of aerobic respiration',
              'Energy coupling and chemiosmosis',
              'Connection to photosynthesis',
              '~36-38 per glucose'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Connection to photosynthesis. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Total ATP yield',
            options: ['Evolution of aerobic respiration', 'Energy coupling and chemiosmosis', '~36-38 per glucose', 'Connection to photosynthesis']
          },
          {
            label: 'Energy coupling and chemiosmosis',
            options: ['Connection to photosynthesis', 'Energy coupling and chemiosmosis', '~36-38 per glucose', 'Evolution of aerobic respiration']
          },
          {
            label: 'Evolution of aerobic respiration',
            options: ['Evolution of aerobic respiration', 'Connection to photosynthesis', '~36-38 per glucose', 'Energy coupling and chemiosmosis']
          }
        ],
        correctAnswers: ['~36-38 per glucose', 'Energy coupling and chemiosmosis', 'Evolution of aerobic respiration'],
        hint1: 'Think about what each concept specifically describes in Cellular Respiration: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cellular Respiration: Synthesis & AP Review describes a specific idea. Total ATP yield: ~36-38 per glucose. Energy coupling and chemiosmosis. Evolution of aerobic respiration.'
      }
    }
  ]
}
