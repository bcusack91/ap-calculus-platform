export const actRhetoricalPart6Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Tone: formal vs. informal, objective vs. subjective.

Word choice reflects purpose: informative, persuasive, narrative.
      `
    },
    {
      id: 'act-e6-quiz1',
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
      id: 'act-e6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** "Most effectively" questions: match the stated goal.

**ACT Tip:** Consider the audience and the overall tone of the passage.
      `
    },
    {
      id: 'act-e6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
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
      id: 'act-e6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Tone: formal vs. informal, objective vs. subjectiv', 'Word choice reflects purpose: informative, persuas', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['"Most effectively" questions: match the stated goa', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Tone: formal vs. informal, objective vs. subjectiv', '"Most effectively" questions: match the stated goa'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Tone: formal vs. informal, objective vs. subjective. "Most effectively" questions: match the stated goal.'
      }
    }
  ]
}
