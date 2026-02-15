export const satPassportAdvPart3Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-p3-intro',
      type: 'text' as const,
      content: `
# Function Behavior

**Part 3 of 7 — Function Behavior**

Increasing/decreasing behavior from graphs.

End behavior: what happens as x → ∞ or x → -∞.
      `
    },
    {
      id: 'sat-p3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes increasing/decreasing behavior from graphs?',
            options: [
              'Increasing/decreasing behavior from graphs is a fundamental concept in SAT Math',
              'End behavior: what happens as x → ∞ or x → -∞',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Increasing/decreasing behavior from graphs'
          }
        ]
      }
    },
    {
      id: 'sat-p3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Zeros: where f(x) = 0 (x-intercepts).

**SAT Tip:** Maximum and minimum values from graphs or vertex form.
      `
    },
    {
      id: 'sat-p3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for function behavior?',
            options: [
              'Zeros: where f(x) = 0 (x-intercepts)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Zeros: where f(x) = 0 (x-intercepts)'
          }
        ]
      }
    },
    {
      id: 'sat-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Function Behavior:',
            options: ['Increasing/decreasing behavior from graphs', 'End behavior: what happens as x → ∞ or x → -∞', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Zeros: where f(x) = 0 (x-intercepts)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Increasing/decreasing behavior from graphs', 'Zeros: where f(x) = 0 (x-intercepts)'],
        hint1: 'Think about function behavior',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Increasing/decreasing behavior from graphs. Zeros: where f(x) = 0 (x-intercepts).'
      }
    }
  ]
}
