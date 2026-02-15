export const satFunctionsPart1Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-f1-intro',
      type: 'text' as const,
      content: `
# 📝 Functions Graphs

**Part 1 of 7 — Function Notation & Evaluation**

f(x) means "the output of function f when the input is x".

To evaluate f(3): substitute 3 everywhere you see x.
      `
    },
    {
      id: 'sat-f1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes f(x) means "the output of function f when the input is x"?',
            options: [
              'f(x) means "the output of function f when the input is x" is a fundamental concept in SAT Math',
              'To evaluate f(3): substitute 3 everywhere you see x',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'f(x) means "the output of function f when the input is x"'
          }
        ]
      }
    },
    {
      id: 'sat-f1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** f(a) = 0 means a is a zero (x-intercept) of the function.

**SAT Tip:** If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7.
      `
    },
    {
      id: 'sat-f1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for function notation & evaluation?',
            options: [
              'f(a) = 0 means a is a zero (x-intercept) of the function',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'f(a) = 0 means a is a zero (x-intercept) of the function'
          }
        ]
      }
    },
    {
      id: 'sat-f1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Function Notation & Evaluation:',
            options: ['f(x) means "the output of function f when the inpu', 'To evaluate f(3): substitute 3 everywhere you see ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['f(a) = 0 means a is a zero (x-intercept) of the fu', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['f(x) means "the output of function f when the inpu', 'f(a) = 0 means a is a zero (x-intercept) of the fu'],
        hint1: 'Think about function notation & evaluation',
        hint2: 'Consider the best SAT strategy',
        explanation: 'f(x) means "the output of function f when the input is x". f(a) = 0 means a is a zero (x-intercept) of the function.'
      }
    }
  ]
}
