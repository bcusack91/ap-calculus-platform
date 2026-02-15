export const satReadingEvidencePart5Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 'sat-r5-intro',
      type: 'text' as const,
      content: `
# Paired Passages

**Part 5 of 7 — Paired Passages**

Compare/contrast the two passages.

Questions may ask: how would Author 1 respond to Author 2?.
      `
    },
    {
      id: 'sat-r5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes compare/contrast the two passages?',
            options: [
              'Compare/contrast the two passages is a fundamental concept in SAT Reading & Writing',
              'Questions may ask: how would Author 1 respond to Author 2?',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Compare/contrast the two passages'
          }
        ]
      }
    },
    {
      id: 'sat-r5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Find shared topics but differing perspectives.

**SAT Tip:** Some questions target just Passage 1 or Passage 2; others ask about both.
      `
    },
    {
      id: 'sat-r5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for paired passages?',
            options: [
              'Find shared topics but differing perspectives',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Find shared topics but differing perspectives'
          }
        ]
      }
    },
    {
      id: 'sat-r5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Paired Passages:',
            options: ['Compare/contrast the two passages', 'Questions may ask: how would Author 1 respond to A', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Find shared topics but differing perspectives', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Compare/contrast the two passages', 'Find shared topics but differing perspectives'],
        hint1: 'Think about paired passages',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Compare/contrast the two passages. Find shared topics but differing perspectives.'
      }
    }
  ]
}
