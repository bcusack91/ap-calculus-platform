export const actRhetoricalPart5Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e5-intro',
      type: 'text' as const,
      content: `
# Author Purpose & Style

**Part 5 of 7 — Author Purpose & Style**

Tone: formal vs. informal, objective vs. subjective.

Word choice reflects purpose: informative, persuasive, narrative.
      `
    },
    {
      id: 'act-e5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes tone?',
            options: [
              'Tone is a key concept for ACT English/Reading',
              'Word choice reflects purpose: informative, persuasive, narrative',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Tone: formal vs. informal, objective vs. subjective'
          }
        ]
      }
    },
    {
      id: 'act-e5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** "Most effectively" questions: match the stated goal.

**ACT Tip:** Consider the audience and the overall tone of the passage.
      `
    },
    {
      id: 'act-e5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for author purpose & style?',
            options: [
              '"Most effectively" questions: match the stated goal',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: '"Most effectively" questions: match the stated goal'
          }
        ]
      }
    },
    {
      id: 'act-e5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Author Purpose & Style:',
            options: ['Tone: formal vs. informal, objective vs. subjectiv', 'Word choice reflects purpose: informative, persuas', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['"Most effectively" questions: match the stated goa', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Tone: formal vs. informal, objective vs. subjectiv', '"Most effectively" questions: match the stated goa'],
        hint1: 'Think about author purpose & style',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Tone: formal vs. informal, objective vs. subjective. "Most effectively" questions: match the stated goal.'
      }
    }
  ]
}
