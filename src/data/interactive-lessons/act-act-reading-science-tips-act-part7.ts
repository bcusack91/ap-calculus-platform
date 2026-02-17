export const actReadSciTipsPart7Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-r7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Take a full-length practice test to establish your baseline.

Focus improvement on your weakest section for the biggest gains.
      `
    },
    {
      id: 'act-r7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Take a full-length practice test to…?',
            options: [
              'Focus improvement on your weakest section for the biggest gains.',
              'Practice regularly with official ACT materials.',
              'Review every wrong answer — understand WHY you missed it.',
              'Take a full-length practice test to establish your baseline.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Take a full-length practice test to establish your baseline. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Practice regularly with official ACT materials.',
              'Review every wrong answer — understand WHY you missed it.',
              'Take a full-length practice test to establish your baseline.',
              'Focus improvement on your weakest section for the biggest gains.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Practice regularly with official ACT materials. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Practice regularly with official ACT materials.

**ACT Tip:** Review every wrong answer — understand WHY you missed it.
      `
    },
    {
      id: 'act-r7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Take a full-length practice test to establish your baseline.',
              'Focus improvement on your weakest section for the biggest gains.',
              'Practice regularly with official ACT materials.',
              'Review every wrong answer — understand WHY you missed it.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Review every wrong answer — understand WHY you missed it. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Practice regularly with official ACT materials.', 'Focus improvement on your weakest section for the biggest gains.', 'Review every wrong answer — understand WHY you missed it.', 'Take a full-length practice test to establish your baseline.']
          },
          {
            label: 'ACT Tip',
            options: ['Practice regularly with official ACT materials.', 'Take a full-length practice test to establish your baseline.', 'Focus improvement on your weakest section for the biggest gains.', 'Review every wrong answer — understand WHY you missed it.']
          }
        ],
        correctAnswers: ['Practice regularly with official ACT materials.', 'Review every wrong answer — understand WHY you missed it.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Key Insight: Practice regularly with official ACT materials. ACT Tip: Review every wrong answer — understand WHY you missed it.'
      }
    }
  ]
}
