export const actReadingStratPart2Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-r2-intro',
      type: 'text' as const,
      content: `
# Passage Order Strategy

**Part 2 of 7 — Passage Order Strategy**

Start with your strongest passage type for confidence.

Some students do science or social science first (more straightforward).
      `
    },
    {
      id: 'act-r2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Start with your strongest passage type…?',
            options: [
              'Start with your strongest passage type for confidence.',
              'Literary narrative can be time-consuming — save it if it is your weakest.',
              'Some students do science or social science first (more straightforward).',
              'Order doesn\'t affect scoring — play to your strengths.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Start with your strongest passage type for confidence. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Order doesn\'t affect scoring — play to your strengths.',
              'Start with your strongest passage type for confidence.',
              'Literary narrative can be time-consuming — save it if it is your weakest.',
              'Some students do science or social science first (more straightforward).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Literary narrative can be time-consuming — save it if it is your weakest. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Literary narrative can be time-consuming — save it if it is your weakest.

**ACT Tip:** Order doesn't affect scoring — play to your strengths.
      `
    },
    {
      id: 'act-r2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Order doesn\'t affect scoring — play to your strengths.',
              'Literary narrative can be time-consuming — save it if it is your weakest.',
              'Some students do science or social science first (more straightforward).',
              'Start with your strongest passage type for confidence.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Order doesn\'t affect scoring — play to your strengths. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Some students do science or social science first (more straightforward).', 'Start with your strongest passage type for confidence.', 'Literary narrative can be time-consuming — save it if it is your weakest.', 'Order doesn\'t affect scoring — play to your strengths.']
          },
          {
            label: 'ACT Tip',
            options: ['Literary narrative can be time-consuming — save it if it is your weakest.', 'Start with your strongest passage type for confidence.', 'Order doesn\'t affect scoring — play to your strengths.', 'Some students do science or social science first (more straightforward).']
          }
        ],
        correctAnswers: ['Literary narrative can be time-consuming — save it if it is your weakest.', 'Order doesn\'t affect scoring — play to your strengths.'],
        hint1: 'Think about what each concept specifically describes in Passage Order Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Passage Order Strategy describes a specific idea. Key Insight: Literary narrative can be time-consuming — save it if it is your weakest. ACT Tip: Order doesn\'t affect scoring — play to your strengths.'
      }
    }
  ]
}
