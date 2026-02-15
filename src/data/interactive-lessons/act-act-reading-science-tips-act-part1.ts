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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes 40 questions in 35 minutes across 4 passages?',
            options: [
              '40 questions in 35 minutes across 4 passages is a key concept for ACT English/Reading',
              'Passage types: literary narrative, social science, humanities, natural science',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: '40 questions in 35 minutes across 4 passages'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for act reading overview?',
            options: [
              'Questions test comprehension, inference, vocabulary, and author\'s craft',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Questions test comprehension, inference, vocabulary, and author\'s craft'
          }
        ]
      }
    },
    {
      id: 'act-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for ACT Reading Overview:',
            options: ['40 questions in 35 minutes across 4 passages', 'Passage types: literary narrative, social science,', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Questions test comprehension, inference, vocabular', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['40 questions in 35 minutes across 4 passages', 'Questions test comprehension, inference, vocabular'],
        hint1: 'Think about act reading overview',
        hint2: 'Consider the best ACT strategy',
        explanation: '40 questions in 35 minutes across 4 passages. Questions test comprehension, inference, vocabulary, and author\'s craft.'
      }
    }
  ]
}
