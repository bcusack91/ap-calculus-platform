export const actRhetoricalPart4Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e4-intro',
      type: 'text' as const,
      content: `
# Conciseness

**Part 4 of 7 — Conciseness**

Eliminate wordiness and redundancy.

"In order to" → "to"; "the reason is because" → "because".
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
            question: 'Which statement best describes eliminate wordiness and redundancy?',
            options: [
              'Eliminate wordiness and redundancy is a key concept for ACT English/Reading',
              '"In order to" → "to"; "the reason is because" → "because"',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Eliminate wordiness and redundancy'
          }
        ]
      }
    },
    {
      id: 'act-e4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** If two choices say the same thing, pick the shorter one.

**ACT Tip:** OMIT is often the correct answer when a phrase adds nothing new.
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
            question: 'What is a key strategy for conciseness?',
            options: [
              'If two choices say the same thing, pick the shorter one',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'If two choices say the same thing, pick the shorter one'
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
            label: 'Key concept for Conciseness:',
            options: ['Eliminate wordiness and redundancy', '"In order to" → "to"; "the reason is because" → "b', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['If two choices say the same thing, pick the shorte', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Eliminate wordiness and redundancy', 'If two choices say the same thing, pick the shorte'],
        hint1: 'Think about conciseness',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Eliminate wordiness and redundancy. If two choices say the same thing, pick the shorter one.'
      }
    }
  ]
}
