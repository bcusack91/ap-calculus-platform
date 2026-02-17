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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Read the problem carefully — identify…?',
            options: [
              'Always check: does your answer make sense in context?.',
              '"is" = equals, "more than" = addition, "of" = multiplication.',
              'Set up the equation, then solve.',
              'Read the problem carefully — identify what x represents.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Read the problem carefully — identify what x represents. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Read the problem carefully — identify what x represents.',
              '"is" = equals, "more than" = addition, "of" = multiplication.',
              'Always check: does your answer make sense in context?.',
              'Set up the equation, then solve.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Set up the equation, then solve. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Word Problem Setup, which correctly describes SAT Tip?',
            options: [
              'Read the problem carefully — identify what x represents.',
              'Set up the equation, then solve.',
              'Always check: does your answer make sense in context?.',
              '"is" = equals, "more than" = addition, "of" = multiplication.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Always check: does your answer make sense in context?. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-l5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Translate words to math',
            options: ['"is" = equals, "more than" = addition, "of" = multiplication.', 'Read the problem carefully — identify what x represents.', 'Always check: does your answer make sense in context?.', 'Set up the equation, then solve.']
          },
          {
            label: 'Key Insight',
            options: ['Set up the equation, then solve.', '"is" = equals, "more than" = addition, "of" = multiplication.', 'Read the problem carefully — identify what x represents.', 'Always check: does your answer make sense in context?.']
          },
          {
            label: 'SAT Tip',
            options: ['Read the problem carefully — identify what x represents.', 'Set up the equation, then solve.', 'Always check: does your answer make sense in context?.', '"is" = equals, "more than" = addition, "of" = multiplication.']
          }
        ],
        correctAnswers: ['"is" = equals, "more than" = addition, "of" = multiplication.', 'Set up the equation, then solve.', 'Always check: does your answer make sense in context?.'],
        hint1: 'Think about what each concept specifically describes in Word Problem Setup.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Word Problem Setup describes a specific idea. Translate words to math: "is" = equals, "more than" = addition, "of" = multiplication. Key Insight: Set up the equation, then solve. SAT Tip: Always check: does your answer make sense in context?.'
      }
    }
  ]
}
