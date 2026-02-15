export const satPassportAdvPart5Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-p5-intro',
      type: 'text' as const,
      content: `
# SAT Advanced Math Strategy

**Part 5 of 7 — SAT Advanced Math Strategy**

Passport to Advanced Math = ~28% of SAT Math.

Focus on creating, solving, and interpreting nonlinear expressions.
      `
    },
    {
      id: 'sat-p5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes passport to advanced math = ~28% of sat math?',
            options: [
              'Passport to Advanced Math = ~28% of SAT Math is a fundamental concept in SAT Math',
              'Focus on creating, solving, and interpreting nonlinear expressions',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Passport to Advanced Math = ~28% of SAT Math'
          }
        ]
      }
    },
    {
      id: 'sat-p5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Know how to move between forms of quadratics.

**SAT Tip:** Read graphs carefully — the SAT tests interpretation more than computation.
      `
    },
    {
      id: 'sat-p5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for sat advanced math strategy?',
            options: [
              'Know how to move between forms of quadratics',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Know how to move between forms of quadratics'
          }
        ]
      }
    },
    {
      id: 'sat-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for SAT Advanced Math Strategy:',
            options: ['Passport to Advanced Math = ~28% of SAT Math', 'Focus on creating, solving, and interpreting nonli', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Know how to move between forms of quadratics', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Passport to Advanced Math = ~28% of SAT Math', 'Know how to move between forms of quadratics'],
        hint1: 'Think about sat advanced math strategy',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Passport to Advanced Math = ~28% of SAT Math. Know how to move between forms of quadratics.'
      }
    }
  ]
}
