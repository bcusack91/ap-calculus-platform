export const satLinearEquationsPart6Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Read the problem carefully — identify what x represents.

Translate words to math: "is" = equals, "more than" = addition, "of" = multiplication.
      `
    },
    {
      id: 'sat-l6-quiz1',
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
      id: 'sat-l6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Set up the equation, then solve.

**SAT Tip:** Always check: does your answer make sense in context?.
      `
    },
    {
      id: 'sat-l6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
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
      id: 'sat-l6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Read the problem carefully — identify what x repre', 'Translate words to math: "is" = equals, "more than', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Set up the equation, then solve', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Read the problem carefully — identify what x repre', 'Set up the equation, then solve'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Read the problem carefully — identify what x represents. Set up the equation, then solve.'
      }
    }
  ]
}
