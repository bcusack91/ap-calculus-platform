export const satExponentsPart2Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-e2-intro',
      type: 'text' as const,
      content: `
# Negative & Zero Exponents

**Part 2 of 7 — Negative & Zero Exponents**

a⁰ = 1 for any a ≠ 0.

a⁻ⁿ = 1/aⁿ — move to denominator and make positive.
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
            question: 'Which statement best describes a⁰ = 1 for any a ≠ 0?',
            options: [
              'a⁰ = 1 for any a ≠ 0 is a fundamental concept in SAT Math',
              'a⁻ⁿ = 1/aⁿ — move to denominator and make positive',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'a⁰ = 1 for any a ≠ 0'
          }
        ]
      }
    },
    {
      id: 'sat-e2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** (a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction.

**SAT Tip:** Simplify step by step: apply rules, then convert negative exponents.
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
            question: 'What is a key strategy for negative & zero exponents?',
            options: [
              '(a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: '(a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction'
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
            label: 'Key concept for Negative & Zero Exponents:',
            options: ['a⁰ = 1 for any a ≠ 0', 'a⁻ⁿ = 1/aⁿ — move to denominator and make positive', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['(a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['a⁰ = 1 for any a ≠ 0', '(a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction'],
        hint1: 'Think about negative & zero exponents',
        hint2: 'Consider the best SAT strategy',
        explanation: 'a⁰ = 1 for any a ≠ 0. (a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction.'
      }
    }
  ]
}
