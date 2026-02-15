export const satExponentialFnPart2Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-e2-intro',
      type: 'text' as const,
      content: `
# Exponential Equations

**Part 2 of 7 — Exponential Equations**

If bases are equal: aˣ = aʸ implies x = y.

Take log of both sides when bases differ.
      `
    },
    {
      id: 'sat-e2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes if bases are equal?',
            options: [
              'If bases are equal is a fundamental concept in SAT Math',
              'Take log of both sides when bases differ',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'If bases are equal: aˣ = aʸ implies x = y'
          }
        ]
      }
    },
    {
      id: 'sat-e2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** ln(aˣ) = x · ln(a).

**SAT Tip:** Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5.
      `
    },
    {
      id: 'sat-e2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for exponential equations?',
            options: [
              'ln(aˣ) = x · ln(a)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'ln(aˣ) = x · ln(a)'
          }
        ]
      }
    },
    {
      id: 'sat-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Exponential Equations:',
            options: ['If bases are equal: aˣ = aʸ implies x = y', 'Take log of both sides when bases differ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['ln(aˣ) = x · ln(a)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['If bases are equal: aˣ = aʸ implies x = y', 'ln(aˣ) = x · ln(a)'],
        hint1: 'Think about exponential equations',
        hint2: 'Consider the best SAT strategy',
        explanation: 'If bases are equal: aˣ = aʸ implies x = y. ln(aˣ) = x · ln(a).'
      }
    }
  ]
}
