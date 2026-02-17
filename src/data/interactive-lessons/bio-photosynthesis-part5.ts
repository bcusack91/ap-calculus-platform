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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Photosynthesis" refer to in biology?',
            options: [
              'Both use chemiosmosis and electron transport',
              'light energy → chemical energy (glucose)',
              'chemical energy → ATP',
              'products of one feed the other'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Photosynthesis: light energy → chemical energy (glucose). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Complementary processes:',
            options: [
              'Both use chemiosmosis and electron transport',
              'light energy → chemical energy (glucose)',
              'products of one feed the other',
              'chemical energy → ATP'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Complementary processes: products of one feed the other. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Both use chemiosmosis and electron… is correct?',
            options: [
              'products of one feed the other',
              'light energy → chemical energy (glucose)',
              'Both use chemiosmosis and electron transport',
              'chemical energy → ATP'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Both use chemiosmosis and electron transport. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'phot5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Photosynthesis',
            options: ['light energy → chemical energy (glucose)', 'chemical energy → ATP', 'products of one feed the other', 'Both use chemiosmosis and electron transport']
          },
          {
            label: 'Respiration',
            options: ['Both use chemiosmosis and electron transport', 'light energy → chemical energy (glucose)', 'chemical energy → ATP', 'products of one feed the other']
          },
          {
            label: 'Complementary processes',
            options: ['products of one feed the other', 'chemical energy → ATP', 'Both use chemiosmosis and electron transport', 'light energy → chemical energy (glucose)']
          }
        ],
        correctAnswers: ['light energy → chemical energy (glucose)', 'chemical energy → ATP', 'products of one feed the other'],
        hint1: 'Think about what each concept specifically describes in Photosynthesis vs Respiration.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Photosynthesis vs Respiration describes a specific idea. Photosynthesis: light energy → chemical energy (glucose). Respiration: chemical energy → ATP. Complementary processes: products of one feed the other.'
      }
    }
  ]
}
