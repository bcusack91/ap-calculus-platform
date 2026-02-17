export const actReadSciTipsPart1Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-r1-intro',
      type: 'text' as const,
      content: `
# 📋 Reading Science Tips

**Part 1 of 7 — ACT Reading Overview**

40 questions in 35 minutes across 4 passages.

Passage types: literary narrative, social science, humanities, natural science.
      `
    },
    {
      id: 'act-r1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains 40 questions in 35 minutes across 4…?',
            options: [
              'literary narrative, social science, humanities, natural science.',
              '40 questions in 35 minutes across 4 passages.',
              'Questions test comprehension, inference, vocabulary, and author\'s craft.',
              'Every answer is supported by the passage text — no outside knowledge needed.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — 40 questions in 35 minutes across 4 passages. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              '40 questions in 35 minutes across 4 passages.',
              'Questions test comprehension, inference, vocabulary, and author\'s craft.',
              'literary narrative, social science, humanities, natural science.',
              'Every answer is supported by the passage text — no outside knowledge needed.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Questions test comprehension, inference, vocabulary, and author\'s craft. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Questions test comprehension, inference, vocabulary, and author's craft.

**ACT Tip:** Every answer is supported by the passage text — no outside knowledge needed.
      `
    },
    {
      id: 'act-r1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Questions test comprehension, inference, vocabulary, and author\'s craft.',
              '40 questions in 35 minutes across 4 passages.',
              'literary narrative, social science, humanities, natural science.',
              'Every answer is supported by the passage text — no outside knowledge needed.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Every answer is supported by the passage text — no outside knowledge needed. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Passage types',
            options: ['Questions test comprehension, inference, vocabulary, and author\'s craft.', 'literary narrative, social science, humanities, natural science.', 'Every answer is supported by the passage text — no outside knowledge needed.', '40 questions in 35 minutes across 4 passages.']
          },
          {
            label: 'Key Insight',
            options: ['literary narrative, social science, humanities, natural science.', 'Every answer is supported by the passage text — no outside knowledge needed.', 'Questions test comprehension, inference, vocabulary, and author\'s craft.', '40 questions in 35 minutes across 4 passages.']
          },
          {
            label: 'ACT Tip',
            options: ['literary narrative, social science, humanities, natural science.', '40 questions in 35 minutes across 4 passages.', 'Questions test comprehension, inference, vocabulary, and author\'s craft.', 'Every answer is supported by the passage text — no outside knowledge needed.']
          }
        ],
        correctAnswers: ['literary narrative, social science, humanities, natural science.', 'Questions test comprehension, inference, vocabulary, and author\'s craft.', 'Every answer is supported by the passage text — no outside knowledge needed.'],
        hint1: 'Think about what each concept specifically describes in Reading Science Tips.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reading Science Tips describes a specific idea. Passage types: literary narrative, social science, humanities, natural science. Key Insight: Questions test comprehension, inference, vocabulary, and author\'s craft. ACT Tip: Every answer is supported by the passage text — no outside knowledge needed.'
      }
    }
  ]
}
