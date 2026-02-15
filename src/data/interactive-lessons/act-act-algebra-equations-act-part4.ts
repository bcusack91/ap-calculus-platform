export const actAlgebraPart4Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a4-intro',
      type: 'text' as const,
      content: `
# Absolute Value

**Part 4 of 7 — Absolute Value**

|x| = a means x = a or x = -a.

|x| < a means -a < x < a (AND compound inequality).
      `
    },
    {
      id: 'act-a4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes |x| = a means x = a or x = -a?',
            options: [
              '|x| = a means x = a or x = -a is a key concept for ACT Math',
              '|x| < a means -a < x < a (AND compound inequality)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: '|x| = a means x = a or x = -a'
          }
        ]
      }
    },
    {
      id: 'act-a4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** |x| > a means x > a or x < -a (OR compound inequality).

**ACT Tip:** Always isolate the absolute value expression first before splitting into cases.
      `
    },
    {
      id: 'act-a4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for absolute value?',
            options: [
              '|x| > a means x > a or x < -a (OR compound inequality)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: '|x| > a means x > a or x < -a (OR compound inequality)'
          }
        ]
      }
    },
    {
      id: 'act-a4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Absolute Value:',
            options: ['|x| = a means x = a or x = -a', '|x| < a means -a < x < a (AND compound inequality)', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['|x| > a means x > a or x < -a (OR compound inequal', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['|x| = a means x = a or x = -a', '|x| > a means x > a or x < -a (OR compound inequal'],
        hint1: 'Think about absolute value',
        hint2: 'Consider the best ACT strategy',
        explanation: '|x| = a means x = a or x = -a. |x| > a means x > a or x < -a (OR compound inequality).'
      }
    }
  ]
}
