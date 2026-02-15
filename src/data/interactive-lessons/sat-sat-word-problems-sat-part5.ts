export const satWordProblemsPart5Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w5-intro',
      type: 'text' as const,
      content: `
# Multi-Step Strategy

**Part 5 of 7 — Multi-Step Strategy**

Read the entire problem before starting.

Identify what you're solving for.
      `
    },
    {
      id: 'sat-w5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes read the entire problem before starting?',
            options: [
              'Read the entire problem before starting is a fundamental concept in SAT Math',
              'Identify what youre solving for',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Read the entire problem before starting'
          }
        ]
      }
    },
    {
      id: 'sat-w5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Set up equations, then solve systematically.

**SAT Tip:** Check: does your answer make sense? Are units correct?.
      `
    },
    {
      id: 'sat-w5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for multi-step strategy?',
            options: [
              'Set up equations, then solve systematically',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Set up equations, then solve systematically'
          }
        ]
      }
    },
    {
      id: 'sat-w5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Multi-Step Strategy:',
            options: ['Read the entire problem before starting', 'Identify what you\'re solving for', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Set up equations, then solve systematically', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Read the entire problem before starting', 'Set up equations, then solve systematically'],
        hint1: 'Think about multi-step strategy',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Read the entire problem before starting. Set up equations, then solve systematically.'
      }
    }
  ]
}
