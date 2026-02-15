export const satWordProblemsPart3Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w3-intro',
      type: 'text' as const,
      content: `
# Mixture Problems

**Part 3 of 7 — Mixture Problems**

Concentration problems: amount of substance = concentration × volume.

Mixture equation: c₁v₁ + c₂v₂ = c_final × v_total.
      `
    },
    {
      id: 'sat-w3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes concentration problems?',
            options: [
              'Concentration problems is a fundamental concept in SAT Math',
              'Mixture equation: c₁v₁ + c₂v₂ = c_final × v_total',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Concentration problems: amount of substance = concentration × volume'
          }
        ]
      }
    },
    {
      id: 'sat-w3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Track what stays constant (usually the amount of pure substance).

**SAT Tip:** Table method: organize given info into a table before writing equations.
      `
    },
    {
      id: 'sat-w3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for mixture problems?',
            options: [
              'Track what stays constant (usually the amount of pure substance)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Track what stays constant (usually the amount of pure substance)'
          }
        ]
      }
    },
    {
      id: 'sat-w3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Mixture Problems:',
            options: ['Concentration problems: amount of substance = conc', 'Mixture equation: c₁v₁ + c₂v₂ = c_final × v_total', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Track what stays constant (usually the amount of p', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Concentration problems: amount of substance = conc', 'Track what stays constant (usually the amount of p'],
        hint1: 'Think about mixture problems',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Concentration problems: amount of substance = concentration × volume. Track what stays constant (usually the amount of pure substance).'
      }
    }
  ]
}
