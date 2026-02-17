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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Read the problem carefully — identify…?',
            options: [
              '"is" = equals, "more than" = addition, "of" = multiplication.',
              'Read the problem carefully — identify what x represents.',
              'Set up the equation, then solve.',
              'Always check: does your answer make sense in context?.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Read the problem carefully — identify what x represents. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Read the problem carefully — identify what x represents.',
              'Always check: does your answer make sense in context?.',
              '"is" = equals, "more than" = addition, "of" = multiplication.',
              'Set up the equation, then solve.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Set up the equation, then solve. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              '"is" = equals, "more than" = addition, "of" = multiplication.',
              'Set up the equation, then solve.',
              'Read the problem carefully — identify what x represents.',
              'Always check: does your answer make sense in context?.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Always check: does your answer make sense in context?. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-l6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Translate words to math',
            options: ['"is" = equals, "more than" = addition, "of" = multiplication.', 'Set up the equation, then solve.', 'Always check: does your answer make sense in context?.', 'Read the problem carefully — identify what x represents.']
          },
          {
            label: 'Key Insight',
            options: ['Read the problem carefully — identify what x represents.', 'Always check: does your answer make sense in context?.', '"is" = equals, "more than" = addition, "of" = multiplication.', 'Set up the equation, then solve.']
          },
          {
            label: 'SAT Tip',
            options: ['Always check: does your answer make sense in context?.', '"is" = equals, "more than" = addition, "of" = multiplication.', 'Read the problem carefully — identify what x represents.', 'Set up the equation, then solve.']
          }
        ],
        correctAnswers: ['"is" = equals, "more than" = addition, "of" = multiplication.', 'Set up the equation, then solve.', 'Always check: does your answer make sense in context?.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Translate words to math: "is" = equals, "more than" = addition, "of" = multiplication. Key Insight: Set up the equation, then solve. SAT Tip: Always check: does your answer make sense in context?.'
      }
    }
  ]
}
