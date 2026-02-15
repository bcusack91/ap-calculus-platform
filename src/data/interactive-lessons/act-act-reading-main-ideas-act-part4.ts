export const actReadingMainPart4Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r4-intro',
      type: 'text' as const,
      content: `
# Author Purpose

**Part 4 of 7 — Author Purpose**

Why did the author write this passage? (inform, persuade, entertain, describe).

Tone: positive, negative, neutral, critical, humorous, nostalgic, etc..
      `
    },
    {
      id: 'act-r4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes why did the author write this passage? (inform, persuade, entertain, describe)?',
            options: [
              'Why did the author write this passage? (inform, persuade, entertain, describe) is a key concept for ACT English/Reading',
              'Tone: positive, negative, neutral, critical, humorous, nostalgic, etc.',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Why did the author write this passage? (inform, persuade, entertain, describe)'
          }
        ]
      }
    },
    {
      id: 'act-r4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look at word choice (diction) for clues about attitude.

**ACT Tip:** Author's purpose affects how information is presented.
      `
    },
    {
      id: 'act-r4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for author purpose?',
            options: [
              'Look at word choice (diction) for clues about attitude',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Look at word choice (diction) for clues about attitude'
          }
        ]
      }
    },
    {
      id: 'act-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Author Purpose:',
            options: ['Why did the author write this passage? (inform, pe', 'Tone: positive, negative, neutral, critical, humor', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Look at word choice (diction) for clues about atti', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Why did the author write this passage? (inform, pe', 'Look at word choice (diction) for clues about atti'],
        hint1: 'Think about author purpose',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Why did the author write this passage? (inform, persuade, entertain, describe). Look at word choice (diction) for clues about attitude.'
      }
    }
  ]
}
