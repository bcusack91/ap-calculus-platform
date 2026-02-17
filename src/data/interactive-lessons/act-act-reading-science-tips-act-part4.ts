export const actReadSciTipsPart4Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-r4-intro',
      type: 'text' as const,
      content: `
# Managing Difficult Passages

**Part 4 of 7 — Managing Difficult Passages**

Don't panic — difficult passages still have straightforward questions.

Focus on what you DO understand.
      `
    },
    {
      id: 'act-r4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Don\'t panic — difficult passages still…?',
            options: [
              'Focus on what you DO understand.',
              'Don\'t panic — difficult passages still have straightforward questions.',
              'Eliminate clearly wrong answers even if you are unsure of the right one.',
              'Look at the questions first for very dense passages.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Don\'t panic — difficult passages still have straightforward questions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Don\'t panic — difficult passages still have straightforward questions.',
              'Focus on what you DO understand.',
              'Look at the questions first for very dense passages.',
              'Eliminate clearly wrong answers even if you are unsure of the right one.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Look at the questions first for very dense passages. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look at the questions first for very dense passages.

**ACT Tip:** Eliminate clearly wrong answers even if you are unsure of the right one.
      `
    },
    {
      id: 'act-r4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Focus on what you DO understand.',
              'Don\'t panic — difficult passages still have straightforward questions.',
              'Look at the questions first for very dense passages.',
              'Eliminate clearly wrong answers even if you are unsure of the right one.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Eliminate clearly wrong answers even if you are unsure of the right one. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Look at the questions first for very dense passages.', 'Focus on what you DO understand.', 'Eliminate clearly wrong answers even if you are unsure of the right one.', 'Don\'t panic — difficult passages still have straightforward questions.']
          },
          {
            label: 'ACT Tip',
            options: ['Eliminate clearly wrong answers even if you are unsure of the right one.', 'Don\'t panic — difficult passages still have straightforward questions.', 'Look at the questions first for very dense passages.', 'Focus on what you DO understand.']
          }
        ],
        correctAnswers: ['Look at the questions first for very dense passages.', 'Eliminate clearly wrong answers even if you are unsure of the right one.'],
        hint1: 'Think about what each concept specifically describes in Managing Difficult Passages.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Managing Difficult Passages describes a specific idea. Key Insight: Look at the questions first for very dense passages. ACT Tip: Eliminate clearly wrong answers even if you are unsure of the right one.'
      }
    }
  ]
}
