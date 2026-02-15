export const actPassageTypesPart3Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r3-intro',
      type: 'text' as const,
      content: `
# Humanities

**Part 3 of 7 — Humanities**

Topics: art, music, literature, philosophy, memoir.

Often personal or reflective in tone.
      `
    },
    {
      id: 'act-r3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes topics?',
            options: [
              'Topics is a key concept for ACT English/Reading',
              'Often personal or reflective in tone',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Topics: art, music, literature, philosophy, memoir'
          }
        ]
      }
    },
    {
      id: 'act-r3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Track the author's experiences and how they shape their perspective.

**ACT Tip:** Questions may ask about the significance of specific events or ideas.
      `
    },
    {
      id: 'act-r3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for humanities?',
            options: [
              'Track the author\'s experiences and how they shape their perspective',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Track the author\'s experiences and how they shape their perspective'
          }
        ]
      }
    },
    {
      id: 'act-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Humanities:',
            options: ['Topics: art, music, literature, philosophy, memoir', 'Often personal or reflective in tone', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Track the author\'s experiences and how they shape ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Topics: art, music, literature, philosophy, memoir', 'Track the author\'s experiences and how they shape '],
        hint1: 'Think about humanities',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Topics: art, music, literature, philosophy, memoir. Track the author\'s experiences and how they shape their perspective.'
      }
    }
  ]
}
