export const satQuadraticsPart3Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q3-intro',
      type: 'text' as const,
      content: `
# The Quadratic Formula

**Part 3 of 7 — The Quadratic Formula**

x = (-b ± √(b² - 4ac)) / (2a).

Discriminant b² - 4ac determines the number of real solutions.
      `
    },
    {
      id: 'sat-q3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes x = (-b ± √(b² - 4ac)) / (2a)?',
            options: [
              'x = (-b ± √(b² - 4ac)) / (2a) is a fundamental concept in SAT Math',
              'Discriminant b² - 4ac determines the number of real solutions',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'x = (-b ± √(b² - 4ac)) / (2a)'
          }
        ]
      }
    },
    {
      id: 'sat-q3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions.

**SAT Tip:** SAT Tip: the discriminant alone can answer "how many solutions?" questions.
      `
    },
    {
      id: 'sat-q3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for the quadratic formula?',
            options: [
              'b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions'
          }
        ]
      }
    },
    {
      id: 'sat-q3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for The Quadratic Formula:',
            options: ['x = (-b ± √(b² - 4ac)) / (2a)', 'Discriminant b² - 4ac determines the number of rea', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['b² - 4ac > 0: two real solutions; = 0: one (repeat', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['x = (-b ± √(b² - 4ac)) / (2a)', 'b² - 4ac > 0: two real solutions; = 0: one (repeat'],
        hint1: 'Think about the quadratic formula',
        hint2: 'Consider the best SAT strategy',
        explanation: 'x = (-b ± √(b² - 4ac)) / (2a). b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions.'
      }
    }
  ]
}
