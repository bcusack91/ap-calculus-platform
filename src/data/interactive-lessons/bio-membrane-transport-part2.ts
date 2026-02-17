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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Diffusion?',
            options: [
              'No ATP required',
              'high to low concentration',
              'channel and carrier proteins',
              'Rate depends on concentration gradient and temperature'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Diffusion: high to low concentration. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Passive Transport, which explains No ATP required?',
            options: [
              'channel and carrier proteins',
              'No ATP required',
              'high to low concentration',
              'Rate depends on concentration gradient and temperature'
            ],
            correctAnswer: 1,
            explanation: 'Correct — No ATP required. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Passive Transport, which correctly describes Rate depends on concentration gradient…?',
            options: [
              'high to low concentration',
              'channel and carrier proteins',
              'No ATP required',
              'Rate depends on concentration gradient and temperature'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Rate depends on concentration gradient and temperature. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'memb2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diffusion',
            options: ['channel and carrier proteins', 'Rate depends on concentration gradient and temperature', 'high to low concentration', 'No ATP required']
          },
          {
            label: 'Facilitated diffusion',
            options: ['high to low concentration', 'channel and carrier proteins', 'No ATP required', 'Rate depends on concentration gradient and temperature']
          }
        ],
        correctAnswers: ['high to low concentration', 'channel and carrier proteins'],
        hint1: 'Think about what each concept specifically describes in Passive Transport.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Passive Transport describes a specific idea. Diffusion: high to low concentration. Facilitated diffusion: channel and carrier proteins.'
      }
    }
  ]
}
