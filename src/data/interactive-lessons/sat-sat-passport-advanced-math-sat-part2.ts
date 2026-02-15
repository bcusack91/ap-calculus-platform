export const satPassportAdvPart2Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-p2-intro',
      type: 'text' as const,
      content: `
# Nonlinear Equations

**Part 2 of 7 — Nonlinear Equations**

Quadratic, polynomial, radical, rational, and absolute value equations.

Extraneous solutions: always check answers in the original equation.
      `
    },
    {
      id: 'sat-p2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes quadratic, polynomial, radical, rational, and absolute value equations?',
            options: [
              'Quadratic, polynomial, radical, rational, and absolute value equations is a fundamental concept in SAT Math',
              'Extraneous solutions: always check answers in the original equation',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Quadratic, polynomial, radical, rational, and absolute value equations'
          }
        ]
      }
    },
    {
      id: 'sat-p2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Radical equations: isolate the radical, square both sides, check.

**SAT Tip:** Rational equations: multiply by LCD, solve, exclude values that make denominator 0.
      `
    },
    {
      id: 'sat-p2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for nonlinear equations?',
            options: [
              'Radical equations: isolate the radical, square both sides, check',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Radical equations: isolate the radical, square both sides, check'
          }
        ]
      }
    },
    {
      id: 'sat-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Nonlinear Equations:',
            options: ['Quadratic, polynomial, radical, rational, and abso', 'Extraneous solutions: always check answers in the ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Radical equations: isolate the radical, square bot', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Quadratic, polynomial, radical, rational, and abso', 'Radical equations: isolate the radical, square bot'],
        hint1: 'Think about nonlinear equations',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Quadratic, polynomial, radical, rational, and absolute value equations. Radical equations: isolate the radical, square both sides, check.'
      }
    }
  ]
}
