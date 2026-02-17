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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains f(x) means "the output of function f…?',
            options: [
              'substitute 3 everywhere you see x.',
              'If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7.',
              'f(a) = 0 means a is a zero (x-intercept) of the function.',
              'f(x) means "the output of function f when the input is x".'
            ],
            correctAnswer: 3,
            explanation: 'Correct — f(x) means "the output of function f when the input is x". The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'f(x) means "the output of function f when the input is x".',
              'substitute 3 everywhere you see x.',
              'f(a) = 0 means a is a zero (x-intercept) of the function.',
              'If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: f(a) = 0 means a is a zero (x-intercept) of the function. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'substitute 3 everywhere you see x.',
              'f(x) means "the output of function f when the input is x".',
              'If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7.',
              'f(a) = 0 means a is a zero (x-intercept) of the function.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-f1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To evaluate f(3)',
            options: ['f(x) means "the output of function f when the input is x".', 'f(a) = 0 means a is a zero (x-intercept) of the function.', 'substitute 3 everywhere you see x.', 'If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7.']
          },
          {
            label: 'Key Insight',
            options: ['substitute 3 everywhere you see x.', 'If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7.', 'f(x) means "the output of function f when the input is x".', 'f(a) = 0 means a is a zero (x-intercept) of the function.']
          },
          {
            label: 'SAT Tip',
            options: ['If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7.', 'substitute 3 everywhere you see x.', 'f(x) means "the output of function f when the input is x".', 'f(a) = 0 means a is a zero (x-intercept) of the function.']
          }
        ],
        correctAnswers: ['substitute 3 everywhere you see x.', 'f(a) = 0 means a is a zero (x-intercept) of the function.', 'If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7.'],
        hint1: 'Think about what each concept specifically describes in Functions Graphs.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Functions Graphs describes a specific idea. To evaluate f(3): substitute 3 everywhere you see x. Key Insight: f(a) = 0 means a is a zero (x-intercept) of the function. SAT Tip: If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7.'
      }
    }
  ]
}
