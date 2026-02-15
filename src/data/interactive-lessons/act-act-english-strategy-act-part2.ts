export const actEnglishStratPart2Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-e2-intro',
      type: 'text' as const,
      content: `
# Grammar vs. Rhetoric

**Part 2 of 7 — Grammar vs. Rhetoric**

Grammar: one objectively correct answer based on rules.

Rhetoric: best answer based on effectiveness, purpose, or style.
      `
    },
    {
      id: 'act-e2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes grammar?',
            options: [
              'Grammar is a key concept for ACT English/Reading',
              'Rhetoric: best answer based on effectiveness, purpose, or style',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Grammar: one objectively correct answer based on rules'
          }
        ]
      }
    },
    {
      id: 'act-e2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Grammar = ~51% of questions; Rhetoric = ~49%.

**ACT Tip:** For grammar: apply the rule; for rhetoric: consider the goal.
      `
    },
    {
      id: 'act-e2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for grammar vs. rhetoric?',
            options: [
              'Grammar = ~51% of questions; Rhetoric = ~49%',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Grammar = ~51% of questions; Rhetoric = ~49%'
          }
        ]
      }
    },
    {
      id: 'act-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Grammar vs. Rhetoric:',
            options: ['Grammar: one objectively correct answer based on r', 'Rhetoric: best answer based on effectiveness, purp', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Grammar = ~51% of questions; Rhetoric = ~49%', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Grammar: one objectively correct answer based on r', 'Grammar = ~51% of questions; Rhetoric = ~49%'],
        hint1: 'Think about grammar vs. rhetoric',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Grammar: one objectively correct answer based on rules. Grammar = ~51% of questions; Rhetoric = ~49%.'
      }
    }
  ]
}
