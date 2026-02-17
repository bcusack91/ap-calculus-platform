export const actReadSciTipsPart3Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-r3-intro',
      type: 'text' as const,
      content: `
# Cross-Section Strategies

**Part 3 of 7 — Cross-Section Strategies**

Both sections reward careful reading and evidence-based reasoning.

Practice skimming for main ideas and scanning for specific details.
      `
    },
    {
      id: 'act-r3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Both sections reward careful reading…?',
            options: [
              'Both sections reward careful reading and evidence-based reasoning.',
              'Practice skimming for main ideas and scanning for specific details.',
              'Develop a consistent approach: read passage first, then answer questions.',
              'Time pressure is the biggest challenge — practice under timed conditions.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Both sections reward careful reading and evidence-based reasoning. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Time pressure is the biggest challenge — practice under timed conditions.',
              'Practice skimming for main ideas and scanning for specific details.',
              'Develop a consistent approach: read passage first, then answer questions.',
              'Both sections reward careful reading and evidence-based reasoning.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Time pressure is the biggest challenge — practice under timed conditions. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Time pressure is the biggest challenge — practice under timed conditions.

**ACT Tip:** Develop a consistent approach: read passage first, then answer questions.
      `
    },
    {
      id: 'act-r3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Develop a consistent approach: read passage first, then answer questions.',
              'Practice skimming for main ideas and scanning for specific details.',
              'Time pressure is the biggest challenge — practice under timed conditions.',
              'Both sections reward careful reading and evidence-based reasoning.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Develop a consistent approach: read passage first, then answer questions. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Practice skimming for main ideas and scanning for specific details.', 'Both sections reward careful reading and evidence-based reasoning.', 'Time pressure is the biggest challenge — practice under timed conditions.', 'Develop a consistent approach: read passage first, then answer questions.']
          },
          {
            label: 'ACT Tip',
            options: ['Practice skimming for main ideas and scanning for specific details.', 'Time pressure is the biggest challenge — practice under timed conditions.', 'Both sections reward careful reading and evidence-based reasoning.', 'Develop a consistent approach: read passage first, then answer questions.']
          }
        ],
        correctAnswers: ['Time pressure is the biggest challenge — practice under timed conditions.', 'Develop a consistent approach: read passage first, then answer questions.'],
        hint1: 'Think about what each concept specifically describes in Cross-Section Strategies.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cross-Section Strategies describes a specific idea. Key Insight: Time pressure is the biggest challenge — practice under timed conditions. ACT Tip: Develop a consistent approach: read passage first, then answer questions.'
      }
    }
  ]
}
