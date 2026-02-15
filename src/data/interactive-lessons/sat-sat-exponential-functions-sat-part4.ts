export const satExponentialFnPart4Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-e4-intro',
      type: 'text' as const,
      content: `
# Compound Interest

**Part 4 of 7 — Compound Interest**

A = P(1 + r/n)^(nt) — compound interest formula.

P = principal, r = annual rate, n = compounds per year, t = years.
      `
    },
    {
      id: 'sat-e4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes a = p(1 + r/n)^(nt) — compound interest formula?',
            options: [
              'A = P(1 + r/n)^(nt) — compound interest formula is a fundamental concept in SAT Math',
              'P = principal, r = annual rate, n = compounds per year, t = years',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'A = P(1 + r/n)^(nt) — compound interest formula'
          }
        ]
      }
    },
    {
      id: 'sat-e4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Continuous compounding: A = Pe^(rt).

**SAT Tip:** SAT focuses on interpreting parts of the formula.
      `
    },
    {
      id: 'sat-e4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for compound interest?',
            options: [
              'Continuous compounding: A = Pe^(rt)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Continuous compounding: A = Pe^(rt)'
          }
        ]
      }
    },
    {
      id: 'sat-e4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Compound Interest:',
            options: ['A = P(1 + r/n)^(nt) — compound interest formula', 'P = principal, r = annual rate, n = compounds per ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Continuous compounding: A = Pe^(rt)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['A = P(1 + r/n)^(nt) — compound interest formula', 'Continuous compounding: A = Pe^(rt)'],
        hint1: 'Think about compound interest',
        hint2: 'Consider the best SAT strategy',
        explanation: 'A = P(1 + r/n)^(nt) — compound interest formula. Continuous compounding: A = Pe^(rt).'
      }
    }
  ]
}
