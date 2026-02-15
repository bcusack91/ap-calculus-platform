export const actPassageTypesPart2Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r2-intro',
      type: 'text' as const,
      content: `
# Social Science

**Part 2 of 7 — Social Science**

Factual, objective passages about psychology, sociology, economics, etc..

Focus on the argument or thesis.
      `
    },
    {
      id: 'act-r2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes factual, objective passages about psychology, sociology, economics, etc.?',
            options: [
              'Factual, objective passages about psychology, sociology, economics, etc. is a key concept for ACT English/Reading',
              'Focus on the argument or thesis',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Factual, objective passages about psychology, sociology, economics, etc.'
          }
        ]
      }
    },
    {
      id: 'act-r2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look for cause-effect relationships and evidence.

**ACT Tip:** Questions test comprehension of the author's claims and supporting data.
      `
    },
    {
      id: 'act-r2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for social science?',
            options: [
              'Look for cause-effect relationships and evidence',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Look for cause-effect relationships and evidence'
          }
        ]
      }
    },
    {
      id: 'act-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Social Science:',
            options: ['Factual, objective passages about psychology, soci', 'Focus on the argument or thesis', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Look for cause-effect relationships and evidence', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Factual, objective passages about psychology, soci', 'Look for cause-effect relationships and evidence'],
        hint1: 'Think about social science',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Factual, objective passages about psychology, sociology, economics, etc.. Look for cause-effect relationships and evidence.'
      }
    }
  ]
}
