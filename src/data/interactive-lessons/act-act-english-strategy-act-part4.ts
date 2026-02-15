export const actEnglishStratPart4Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-e4-intro',
      type: 'text' as const,
      content: `
# Answer Elimination

**Part 4 of 7 — Answer Elimination**

"NO CHANGE" is correct about 25% of the time — don't avoid it.

Shorter answers are often correct when content is the same.
      `
    },
    {
      id: 'act-e4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes "no change" is correct about 25% of the time — don\'t avoid it?',
            options: [
              '"NO CHANGE" is correct about 25% of the time — don\'t avoid it is a key concept for ACT English/Reading',
              'Shorter answers are often correct when content is the same',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: '"NO CHANGE" is correct about 25% of the time — don\'t avoid it'
          }
        ]
      }
    },
    {
      id: 'act-e4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Eliminate obviously wrong choices first.

**ACT Tip:** If two answers are grammatically correct, choose the one that fits the context better.
      `
    },
    {
      id: 'act-e4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for answer elimination?',
            options: [
              'Eliminate obviously wrong choices first',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Eliminate obviously wrong choices first'
          }
        ]
      }
    },
    {
      id: 'act-e4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Answer Elimination:',
            options: ['"NO CHANGE" is correct about 25% of the time — don', 'Shorter answers are often correct when content is ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Eliminate obviously wrong choices first', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['"NO CHANGE" is correct about 25% of the time — don', 'Eliminate obviously wrong choices first'],
        hint1: 'Think about answer elimination',
        hint2: 'Consider the best ACT strategy',
        explanation: '"NO CHANGE" is correct about 25% of the time — don\'t avoid it. Eliminate obviously wrong choices first.'
      }
    }
  ]
}
