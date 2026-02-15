export const satLinearEquationsPart5Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l5-intro',
      type: 'text' as const,
      content: `
# Word Problem Setup

**Part 5 of 7 — Word Problem Setup**

Read the problem carefully — identify what x represents.

Translate words to math: "is" = equals, "more than" = addition, "of" = multiplication.
      `
    },
    {
      id: 'sat-l5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes read the problem carefully — identify what x represents?',
            options: [
              'Read the problem carefully — identify what x represents is a fundamental concept in SAT Math',
              'Translate words to math: "is" = equals, "more than" = addition, "of" = multiplication',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Read the problem carefully — identify what x represents'
          }
        ]
      }
    },
    {
      id: 'sat-l5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Set up the equation, then solve.

**SAT Tip:** Always check: does your answer make sense in context?.
      `
    },
    {
      id: 'sat-l5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for word problem setup?',
            options: [
              'Set up the equation, then solve',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Set up the equation, then solve'
          }
        ]
      }
    },
    {
      id: 'sat-l5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Word Problem Setup:',
            options: ['Read the problem carefully — identify what x repre', 'Translate words to math: "is" = equals, "more than', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Set up the equation, then solve', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Read the problem carefully — identify what x repre', 'Set up the equation, then solve'],
        hint1: 'Think about word problem setup',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Read the problem carefully — identify what x represents. Set up the equation, then solve.'
      }
    }
  ]
}
