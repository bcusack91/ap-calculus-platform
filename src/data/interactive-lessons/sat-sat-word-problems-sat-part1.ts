export const satWordProblemsPart1Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w1-intro',
      type: 'text' as const,
      content: `
# 📝 Word Problems

**Part 1 of 7 — Translating Words to Math**

"Is" or "equals" → =; "more than" or "added to" → +; "less than" → −.

"Times" or "of" → ×; "per" → ÷.
      `
    },
    {
      id: 'sat-w1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes "is" or "equals" → =; "more than" or "added to" → +; "less than" → −?',
            options: [
              '"Is" or "equals" → =; "more than" or "added to" → +; "less than" → − is a fundamental concept in SAT Math',
              '"Times" or "of" → ×; "per" → ÷',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: '"Is" or "equals" → =; "more than" or "added to" → +; "less than" → −'
          }
        ]
      }
    },
    {
      id: 'sat-w1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Let x = the unknown; write an equation, then solve.

**SAT Tip:** Always define your variable clearly and check units.
      `
    },
    {
      id: 'sat-w1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for translating words to math?',
            options: [
              'Let x = the unknown; write an equation, then solve',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Let x = the unknown; write an equation, then solve'
          }
        ]
      }
    },
    {
      id: 'sat-w1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Translating Words to Math:',
            options: ['"Is" or "equals" → =; "more than" or "added to" → ', '"Times" or "of" → ×; "per" → ÷', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Let x = the unknown; write an equation, then solve', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['"Is" or "equals" → =; "more than" or "added to" → ', 'Let x = the unknown; write an equation, then solve'],
        hint1: 'Think about translating words to math',
        hint2: 'Consider the best SAT strategy',
        explanation: '"Is" or "equals" → =; "more than" or "added to" → +; "less than" → −. Let x = the unknown; write an equation, then solve.'
      }
    }
  ]
}
