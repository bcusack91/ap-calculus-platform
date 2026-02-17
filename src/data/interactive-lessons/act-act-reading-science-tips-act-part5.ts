export const actReadSciTipsPart5Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-r5-intro',
      type: 'text' as const,
      content: `
# Score Improvement Plan

**Part 5 of 7 — Score Improvement Plan**

Take a full-length practice test to establish your baseline.

Focus improvement on your weakest section for the biggest gains.
      `
    },
    {
      id: 'act-r5-quiz1',
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
              'Take a full-length practice test to establish your baseline.',
              'Review every wrong answer — understand WHY you missed it.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Take a full-length practice test to establish your baseline. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Practice regularly with official ACT materials.',
              'Take a full-length practice test to establish your baseline.',
              'Review every wrong answer — understand WHY you missed it.',
              'Focus improvement on your weakest section for the biggest gains.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Practice regularly with official ACT materials. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Practice regularly with official ACT materials.

**ACT Tip:** Review every wrong answer — understand WHY you missed it.
      `
    },
    {
      id: 'act-r5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Score Improvement Plan, which correctly describes ACT Tip?',
            options: [
              'Focus improvement on your weakest section for the biggest gains.',
              'Review every wrong answer — understand WHY you missed it.',
              'Practice regularly with official ACT materials.',
              'Take a full-length practice test to establish your baseline.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Review every wrong answer — understand WHY you missed it. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Take a full-length practice test to establish your baseline.', 'Practice regularly with official ACT materials.', 'Focus improvement on your weakest section for the biggest gains.', 'Review every wrong answer — understand WHY you missed it.']
          },
          {
            label: 'ACT Tip',
            options: ['Focus improvement on your weakest section for the biggest gains.', 'Practice regularly with official ACT materials.', 'Review every wrong answer — understand WHY you missed it.', 'Take a full-length practice test to establish your baseline.']
          }
        ],
        correctAnswers: ['Practice regularly with official ACT materials.', 'Review every wrong answer — understand WHY you missed it.'],
        hint1: 'Think about what each concept specifically describes in Score Improvement Plan.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Score Improvement Plan describes a specific idea. Key Insight: Practice regularly with official ACT materials. ACT Tip: Review every wrong answer — understand WHY you missed it.'
      }
    }
  ]
}
